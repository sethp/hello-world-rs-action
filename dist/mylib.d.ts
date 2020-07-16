/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
* The code to exit an action
*/
export enum ExitCode {
/**
* A code indicating that the action was successful.
*/
  Success,
/**
* A code indicating that the action was a failure.
*/
  Failure,
}
/**
*/
export class AgentConstructorOptions {
  free(): void;
/**
* @returns {boolean}
*/
  keep_alive: boolean;
/**
* @returns {number}
*/
  keep_alive_msecs: number;
/**
* @returns {number}
*/
  max_free_sockets: number;
/**
* @returns {number}
*/
  max_sockets: number;
/**
* @returns {number}
*/
  timeout: number;
}
/**
*/
export class AppendFileOptions {
  free(): void;
/**
* @param {string | undefined} encoding
* @param {number | undefined} mode
* @param {string | undefined} flag
*/
  constructor(encoding?: string, mode?: number, flag?: string);
/**
* @returns {AppendFileOptions}
*/
  static new(): AppendFileOptions;
/**
* @returns {string | undefined}
*/
  encoding?: string;
/**
* @returns {string | undefined}
*/
  flag?: string;
/**
* @returns {number | undefined}
*/
  mode?: number;
}
/**
*/
export class AssertionErrorOptions {
  free(): void;
/**
* @param {string | undefined} message
* @param {any} actual
* @param {any} expected
* @param {string} operator
*/
  constructor(message: string | undefined, actual: any, expected: any, operator: string);
/**
* The actual property on the error instance.
* @returns {any}
*/
  actual: any;
/**
* The expected property on the error instance.
* @returns {any}
*/
  expected: any;
/**
* If provided, the error message is set to this value.
* @returns {string | undefined}
*/
  message?: string;
/**
* The operator property on the error instance.
* @returns {string}
*/
  operator: string;
}
/**
*/
export class ConsoleConstructorOptions {
  free(): void;
/**
* @param {any} stdout
* @param {any} stderr
* @param {boolean | undefined} ignore_errors
* @param {any} color_mod
* @param {object | undefined} inspect_options
*/
  constructor(stdout: any, stderr: any, ignore_errors: boolean | undefined, color_mod: any, inspect_options?: object);
/**
* @param {any} stdout
* @param {any} stderr
* @returns {ConsoleConstructorOptions}
*/
  static new(stdout: any, stderr: any): ConsoleConstructorOptions;
/**
* @returns {any}
*/
  color_mod: any;
/**
* @returns {boolean | undefined}
*/
  ignore_errors?: boolean;
/**
* @returns {object | undefined}
*/
  inspect_options?: object;
/**
* @returns {any}
*/
  stderr: any;
/**
* @returns {any}
*/
  stdout: any;
}
/**
* Interface for cp options.
*/
export class CopyOptions {
  free(): void;
/**
* Whether to overwrite existing files in the destination. Defaults to true.
* @returns {boolean | undefined}
*/
  force?: boolean;
/**
* Whether to recursively copy all subdirectories. Defaults to false.
* @returns {boolean | undefined}
*/
  recursive?: boolean;
}
/**
*/
export class CreateHookCallbacks {
  free(): void;
/**
* @param {Function} init
* @param {Function} before
* @param {Function} after
* @param {Function} destroy
* @param {Function} promise_resolve
*/
  constructor(init: Function, before: Function, after: Function, destroy: Function, promise_resolve: Function);
/**
* @returns {Function}
*/
  after: Function;
/**
* @returns {Function}
*/
  before: Function;
/**
* @returns {Function}
*/
  destroy: Function;
/**
* @returns {Function}
*/
  init: Function;
/**
* @returns {Function}
*/
  promise_resolve: Function;
}
/**
*/
export class CreateReadStreamOptions {
  free(): void;
/**
* @param {boolean | undefined} auto_close
* @param {boolean | undefined} emit_close
* @param {string | undefined} encoding
* @param {number | undefined} end
* @param {number | undefined} fd
* @param {string | undefined} flags
* @param {number | undefined} high_water_mark
* @param {number | undefined} mode
* @param {number | undefined} start
*/
  constructor(auto_close?: boolean, emit_close?: boolean, encoding?: string, end?: number, fd?: number, flags?: string, high_water_mark?: number, mode?: number, start?: number);
/**
* @returns {boolean | undefined}
*/
  auto_close?: boolean;
/**
* @returns {boolean | undefined}
*/
  emit_close?: boolean;
/**
* @returns {string | undefined}
*/
  encoding?: string;
/**
* @returns {number | undefined}
*/
  end?: number;
/**
* @returns {number | undefined}
*/
  fd?: number;
/**
* @returns {string | undefined}
*/
  flags?: string;
/**
* @returns {number | undefined}
*/
  high_water_mark?: number;
/**
* @returns {number | undefined}
*/
  mode?: number;
/**
* @returns {number | undefined}
*/
  start?: number;
}
/**
*/
export class CreateWriteStreamOptions {
  free(): void;
/**
* @param {boolean | undefined} auto_close
* @param {boolean | undefined} emit_close
* @param {string | undefined} encoding
* @param {number | undefined} fd
* @param {string | undefined} flags
* @param {number | undefined} mode
* @param {number | undefined} start
*/
  constructor(auto_close?: boolean, emit_close?: boolean, encoding?: string, fd?: number, flags?: string, mode?: number, start?: number);
/**
* @returns {boolean | undefined}
*/
  auto_close?: boolean;
/**
* @returns {boolean | undefined}
*/
  emit_close?: boolean;
/**
* @returns {string | undefined}
*/
  encoding?: string;
/**
* @returns {number | undefined}
*/
  fd?: number;
/**
* @returns {string | undefined}
*/
  flags?: string;
/**
* @returns {number | undefined}
*/
  mode?: number;
/**
* @returns {number | undefined}
*/
  start?: number;
}
/**
*/
export class FormatInputPathObject {
  free(): void;
/**
* @param {string | undefined} base
* @param {string | undefined} dir
* @param {string | undefined} ext
* @param {string | undefined} name
* @param {string | undefined} root
*/
  constructor(base?: string, dir?: string, ext?: string, name?: string, root?: string);
/**
* @returns {FormatInputPathObject}
*/
  static new(): FormatInputPathObject;
/**
* @returns {string | undefined}
*/
  base?: string;
/**
* @returns {string | undefined}
*/
  dir?: string;
/**
* @returns {string | undefined}
*/
  ext?: string;
/**
* @returns {string | undefined}
*/
  name?: string;
/**
* @returns {string | undefined}
*/
  root?: string;
}
/**
*/
export class GetNameOptions {
  free(): void;
/**
* @param {number | undefined} family
* @param {string} host
* @param {string} local_address
* @param {number} port
* @returns {GetNameOptions}
*/
  static new(family: number | undefined, host: string, local_address: string, port: number): GetNameOptions;
/**
* @returns {number | undefined}
*/
  family?: number;
/**
* @returns {string}
*/
  host: string;
/**
* @returns {string}
*/
  local_address: string;
/**
* @returns {number}
*/
  port: number;
}
/**
* Interface for getInput options
*/
export class InputOptions {
  free(): void;
/**
* Whether the input is required. If required and not present, will throw. Defaults
* to false.
* @returns {boolean | undefined}
*/
  required?: boolean;
}
/**
*/
export class MkdtempSyncOptions {
  free(): void;
/**
* @param {string | undefined} encoding
*/
  constructor(encoding?: string);
/**
* @returns {MkdtempSyncOptions}
*/
  static new(): MkdtempSyncOptions;
/**
* @returns {string | undefined}
*/
  encoding?: string;
}
/**
* Interface for mv options.
*/
export class MoveOptions {
  free(): void;
/**
* Whether to overwrite existing files in the destination. Defaults to true.
* @returns {boolean | undefined}
*/
  force?: boolean;
}
/**
*/
export class NetServerOptions {
  free(): void;
/**
* @returns {boolean | undefined}
*/
  allow_half_open?: boolean;
/**
* @returns {boolean | undefined}
*/
  pause_on_connect?: boolean;
}
/**
*/
export class PipeOptions {
  free(): void;
/**
* @param {boolean | undefined} end
*/
  constructor(end?: boolean);
/**
* @returns {boolean | undefined}
*/
  end?: boolean;
}
/**
*/
export class ProcessSendOptions {
  free(): void;
/**
* @param {boolean | undefined} swallow_errors
*/
  constructor(swallow_errors?: boolean);
/**
* @returns {boolean | undefined}
*/
  swallow_errors?: boolean;
}
/**
*/
export class ReadFileSyncOptions {
  free(): void;
/**
* @param {string | undefined} encoding
* @param {string | undefined} flag
*/
  constructor(encoding?: string, flag?: string);
/**
* @returns {ReadFileSyncOptions}
*/
  static new(): ReadFileSyncOptions;
/**
* @returns {string | undefined}
*/
  encoding?: string;
/**
* @returns {string | undefined}
*/
  flag?: string;
}
export class ReadStream {
  free(): void;
/**
* @param {Function} listener
* @returns {any}
*/
  add_listener_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  add_listener_with_close(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  on_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  on_with_close(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  once_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  once_with_close(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  prepend_listener_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  prepend_listener_with_close(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  prepend_once_listener_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  prepend_once_listener_with_close(listener: Function): any;
}
/**
*/
export class SetAadOptions {
  free(): void;
/**
* @param {Function} flush
* @param {number} plaintext_length
* @param {Function} transform
*/
  constructor(flush: Function, plaintext_length: number, transform: Function);
/**
* @returns {Function}
*/
  flush: Function;
/**
* @returns {number}
*/
  readonly plaintextLength: number;
/**
* @param {number} value
*/
  plaintext_length: number;
/**
* @returns {Function}
*/
  transform: Function;
}
/**
*/
export class StreamTransformOptions {
  free(): void;
/**
* @param {Function} flush
* @param {Function} transform
*/
  constructor(flush: Function, transform: Function);
/**
* @returns {Function}
*/
  flush: Function;
/**
* @returns {Function}
*/
  transform: Function;
}
/**
*/
export class UserInfoOptions {
  free(): void;
/**
* @param {string | undefined} encoding
*/
  constructor(encoding?: string);
/**
* @returns {UserInfoOptions}
*/
  static new(): UserInfoOptions;
/**
* @returns {string | undefined}
*/
  encoding?: string;
}
/**
*/
export class WasiOptions {
  free(): void;
/**
* @param {any[] | undefined} args
* @param {object | undefined} env
* @param {object} preopens
*/
  constructor(args: any[] | undefined, env: object | undefined, preopens: object);
/**
* @param {object} preopens
* @returns {WasiOptions}
*/
  static new(preopens: object): WasiOptions;
/**
* @returns {any[] | undefined}
*/
  args?: any[];
/**
* @returns {object | undefined}
*/
  env?: object;
/**
* @returns {object}
*/
  preopens: object;
}
/**
*/
export class WriteFileSyncOptions {
  free(): void;
/**
* @param {string | undefined} encoding
* @param {string | undefined} flag
* @param {number | undefined} mode
*/
  constructor(encoding?: string, flag?: string, mode?: number);
/**
* @returns {string | undefined}
*/
  encoding?: string;
/**
* @returns {string | undefined}
*/
  flag?: string;
/**
* @returns {number | undefined}
*/
  mode?: number;
}
export class WriteStream {
  free(): void;
/**
* @param {Function} listener
* @returns {any}
*/
  add_listener_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  add_listener_with_close(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  on_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  on_with_close(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  once_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  once_with_close(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  prepend_listener_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  prepend_listener_with_close(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  prepend_once_listener_with_open(listener: Function): any;
/**
* @param {Function} listener
* @returns {any}
*/
  prepend_once_listener_with_close(listener: Function): any;
}
