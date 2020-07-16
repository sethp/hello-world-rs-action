use chrono::Utc;

/*
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
 */

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

#[cfg(target_arch = "wasm32")]
extern crate node_sys;
#[cfg(target_arch = "wasm32")]
extern crate web_sys;

use std::error::Error;

pub type Result = std::result::Result<(), Box<dyn Error>>;

#[cfg(target_arch = "wasm32")]
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[cfg(not(target_arch = "wasm32"))]
macro_rules! log {
    ( $( $t:tt )* ) => {
        println!( $( $t )* );
    }
}

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
pub fn main() {
    use node_sys::process;
    console_error_panic_hook::set_once();
    if let Err(e) = run() {
        // TODO: what happens if an exception is thrown in a not-catch binding?
        core::set_failed(format!("{}", e));
        process.exit(Some(1));
    }
}

#[derive(Debug)]
pub struct StrError(String);

impl Error for StrError {}

impl std::fmt::Display for StrError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

pub fn run() -> Result {
    let name = core::get_input("who-to-greet")?;
    log!("Hello {}!", name);
    let time = Utc::now().to_rfc3339();
    core::set_output("time", &time);
    let payload = serde_json::to_string_pretty(&github::get_context_payload_magic()?)?;
    log!("The event payload: {}", payload);
    Ok(())
}

#[cfg(target_arch = "wasm32")]
pub mod env {
    use js_sys::Reflect;
    use node_sys::process;
    use wasm_bindgen::JsValue;

    #[derive(Debug)]
    pub enum VarError {
        NotPresent(String),
        NotValid(String, JsValue),
    }
    impl std::error::Error for VarError {}

    impl std::fmt::Display for VarError {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            match self {
                VarError::NotPresent(s) => write!(f, "environment variable {:?} not found", s),
                VarError::NotValid(k, v) => write!(
                    f,
                    "environment variable {:?} held non-string value {:?}",
                    k, v
                ),
            }
        }
    }

    pub fn var<K: AsRef<str>>(key: K) -> Result<String, VarError> {
        let k = key.as_ref();
        // Reflect::get throws TypeError if its first argument is not an object
        let got = Reflect::get(&process.env(), &JsValue::from_str(k))
            .expect("process env should be an object");
        if got.is_undefined() {
            Err(VarError::NotPresent(k.to_owned()))
        } else {
            got.as_string().ok_or(VarError::NotValid(k.to_owned(), got))
        }
    }
}

#[cfg(not(target_arch = "wasm32"))]
pub mod env {
    pub use std::env::var;
    pub use std::env::VarError;
}

#[cfg(target_arch = "wasm32")]
pub mod file {
    use js_sys::JsString;
    use node_sys::fs;
    use node_sys::Buffer as NodeBuf;
    use std::io;
    use std::io::BufReader;
    use std::path::Path;

    #[derive(Debug)]
    pub struct JsError(String);

    impl std::error::Error for JsError {}

    impl std::fmt::Display for JsError {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self)
        }
    }

    #[derive(Debug)]
    pub struct Buffer(NodeBuf);

    // impl io::Read for Buffer {
    //     fn read(&mut self, buf: &mut [u8]) -> io::Result<usize> {
    //     }
    // }

    pub fn reader<P: AsRef<Path>>(path: P) -> io::Result<BufReader<io::Cursor<Vec<u8>>>> {
        fs::read_file_sync(&JsString::from(path.as_ref().to_str().unwrap()), None)
            .map(|b| BufReader::new(io::Cursor::new(b.to_vec())))
            .map_err(|e| io::Error::new(io::ErrorKind::Other, JsError(format!("{:?}", e))))
    }
}

#[cfg(not(target_arch = "wasm32"))]
pub mod file {
    use std::fs::File;
    use std::io;
    use std::io::BufReader;
    use std::path::Path;

    pub fn reader<P: AsRef<Path>>(path: P) -> io::Result<BufReader<File>> {
        File::open(path).map(BufReader::new)
    }
}

pub mod core {
    use crate::env;
    pub fn get_input(key: &str) -> std::result::Result<String, env::VarError> {
        env::var(format!("INPUT_{}", key.replace(' ', "_").to_uppercase()))
    }

    pub fn set_output(key: &str, val: &str) {
        log!("::set-output name={}::{}", key, val);
    }

    pub fn set_failed<S: AsRef<str>>(message: S) {
        log!("::error::{}", message.as_ref());
    }
}

pub mod github {
    use crate::env;
    use crate::file;
    use serde_json::Value as JsonValue;
    use std::error::Error;

    pub fn get_context_payload_magic() -> std::result::Result<JsonValue, Box<dyn Error>> {
        let path = env::var("GITHUB_EVENT_PATH")?;
        let reader = file::reader(path)?;
        let event = serde_json::from_reader(reader)?;
        Ok(event)
    }
}
