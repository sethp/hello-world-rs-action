// TODO: convention for naming things across boundary?
#![allow(non_snake_case)]

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
  const payload = JSON.stringify(github.context, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
 */

use std::error::Error;

pub type Result = std::result::Result<(), Box<dyn Error>>;

pub fn run() -> Result {
    let nameToGreet = core::getInput("who-to-greet")?;
    println!("Hello {}!", nameToGreet);
    let time = Utc::now().to_rfc3339();
    core::setOutput("time", &time);
    let payload = serde_json::to_string_pretty(&github::get_context_magic()?)?;
    println!("The event payload: {}", payload);
    Ok(())
}

pub mod core {
    use std::env;
    pub fn getInput(key: &str) -> std::result::Result<String, env::VarError> {
        env::var(format!("INPUT_{}", key.replace(' ', "_").to_uppercase()))
    }

    pub fn setOutput(key: &str, val: &str) {
        println!("::set-output {}={}", key, val);
    }
}

pub mod github {
    use serde_json::Value as JsonValue;
    use std::env;
    use std::error::Error;
    use std::fs::File;
    use std::io::BufReader;

    pub fn get_context_magic() -> std::result::Result<JsonValue, Box<dyn Error>> {
        let path = env::var("GITHUB_EVENT_PATH")?;
        let file = File::open(path)?;
        let reader = BufReader::new(file);
        let event = serde_json::from_reader(reader)?;
        Ok(event)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
