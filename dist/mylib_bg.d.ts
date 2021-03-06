/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function main(): void;
export function __wbg_copyoptions_free(a: number): void;
export function __wbg_get_copyoptions_recursive(a: number): number;
export function __wbg_set_copyoptions_recursive(a: number, b: number): void;
export function __wbg_get_copyoptions_force(a: number): number;
export function __wbg_set_copyoptions_force(a: number, b: number): void;
export function __wbg_moveoptions_free(a: number): void;
export function __wbg_get_moveoptions_force(a: number): number;
export function __wbg_set_moveoptions_force(a: number, b: number): void;
export function __wbg_inputoptions_free(a: number): void;
export function __wbg_get_inputoptions_required(a: number): number;
export function __wbg_set_inputoptions_required(a: number, b: number): void;
export function __wbg_agentconstructoroptions_free(a: number): void;
export function agentconstructoroptions_keep_alive_msecs(a: number): number;
export function agentconstructoroptions_set_keep_alive_msecs(a: number, b: number): void;
export function agentconstructoroptions_keep_alive(a: number): number;
export function agentconstructoroptions_set_keep_alive(a: number, b: number): void;
export function agentconstructoroptions_max_free_sockets(a: number): number;
export function agentconstructoroptions_set_max_free_sockets(a: number, b: number): void;
export function agentconstructoroptions_max_sockets(a: number): number;
export function agentconstructoroptions_set_max_sockets(a: number, b: number): void;
export function agentconstructoroptions_timeout(a: number): number;
export function agentconstructoroptions_set_timeout(a: number, b: number): void;
export function __wbg_createhookcallbacks_free(a: number): void;
export function createhookcallbacks_new(a: number, b: number, c: number, d: number, e: number): number;
export function createhookcallbacks_init(a: number): number;
export function createhookcallbacks_set_init(a: number, b: number): void;
export function createhookcallbacks_before(a: number): number;
export function createhookcallbacks_set_before(a: number, b: number): void;
export function createhookcallbacks_after(a: number): number;
export function createhookcallbacks_set_after(a: number, b: number): void;
export function createhookcallbacks_destroy(a: number): number;
export function createhookcallbacks_set_destroy(a: number, b: number): void;
export function createhookcallbacks_promise_resolve(a: number): number;
export function createhookcallbacks_set_promise_resolve(a: number, b: number): void;
export function __wbg_writefilesyncoptions_free(a: number): void;
export function writefilesyncoptions_new(a: number, b: number, c: number, d: number): number;
export function writefilesyncoptions_encoding(a: number): number;
export function writefilesyncoptions_set_encoding(a: number, b: number): void;
export function writefilesyncoptions_flag(a: number): number;
export function writefilesyncoptions_set_flag(a: number, b: number): void;
export function writefilesyncoptions_mode(a: number, b: number): void;
export function writefilesyncoptions_set_mode(a: number, b: number, c: number): void;
export function __wbg_createreadstreamoptions_free(a: number): void;
export function createreadstreamoptions_new_with_values(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number): number;
export function createreadstreamoptions_auto_close(a: number): number;
export function createreadstreamoptions_set_auto_close(a: number, b: number): void;
export function createreadstreamoptions_emit_close(a: number): number;
export function createreadstreamoptions_set_emit_close(a: number, b: number): void;
export function createreadstreamoptions_encoding(a: number): number;
export function createreadstreamoptions_set_encoding(a: number, b: number): void;
export function createreadstreamoptions_end(a: number, b: number): void;
export function createreadstreamoptions_set_end(a: number, b: number, c: number): void;
export function createreadstreamoptions_fd(a: number, b: number): void;
export function createreadstreamoptions_set_fd(a: number, b: number, c: number): void;
export function createreadstreamoptions_flags(a: number): number;
export function createreadstreamoptions_set_flags(a: number, b: number): void;
export function createreadstreamoptions_high_water_mark(a: number, b: number): void;
export function createreadstreamoptions_set_high_water_mark(a: number, b: number, c: number): void;
export function createreadstreamoptions_mode(a: number, b: number): void;
export function createreadstreamoptions_set_mode(a: number, b: number, c: number): void;
export function createreadstreamoptions_start(a: number, b: number): void;
export function createreadstreamoptions_set_start(a: number, b: number, c: number): void;
export function __wbg_createwritestreamoptions_free(a: number): void;
export function createwritestreamoptions_new_with_values(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number): number;
export function createwritestreamoptions_auto_close(a: number): number;
export function createwritestreamoptions_set_auto_close(a: number, b: number): void;
export function createwritestreamoptions_emit_close(a: number): number;
export function createwritestreamoptions_set_emit_close(a: number, b: number): void;
export function createwritestreamoptions_encoding(a: number): number;
export function createwritestreamoptions_set_encoding(a: number, b: number): void;
export function createwritestreamoptions_fd(a: number, b: number): void;
export function createwritestreamoptions_set_fd(a: number, b: number, c: number): void;
export function createwritestreamoptions_flags(a: number): number;
export function createwritestreamoptions_set_flags(a: number, b: number): void;
export function createwritestreamoptions_mode(a: number, b: number): void;
export function createwritestreamoptions_set_mode(a: number, b: number, c: number): void;
export function createwritestreamoptions_start(a: number, b: number): void;
export function createwritestreamoptions_set_start(a: number, b: number, c: number): void;
export function __wbg_streamtransformoptions_free(a: number): void;
export function streamtransformoptions_new(a: number, b: number): number;
export function streamtransformoptions_flush(a: number): number;
export function streamtransformoptions_set_flush(a: number, b: number): void;
export function streamtransformoptions_transform(a: number): number;
export function streamtransformoptions_set_transform(a: number, b: number): void;
export function readstream_add_listener_with_open(a: number, b: number): number;
export function readstream_add_listener_with_close(a: number, b: number): number;
export function readstream_on_with_open(a: number, b: number): number;
export function readstream_on_with_close(a: number, b: number): number;
export function readstream_once_with_open(a: number, b: number): number;
export function readstream_once_with_close(a: number, b: number): number;
export function readstream_prepend_listener_with_open(a: number, b: number): number;
export function readstream_prepend_listener_with_close(a: number, b: number): number;
export function readstream_prepend_once_listener_with_open(a: number, b: number): number;
export function readstream_prepend_once_listener_with_close(a: number, b: number): number;
export function __wbg_netserveroptions_free(a: number): void;
export function netserveroptions_allow_half_open(a: number): number;
export function netserveroptions_set_allow_half_open(a: number, b: number): void;
export function netserveroptions_pause_on_connect(a: number): number;
export function netserveroptions_set_pause_on_connect(a: number, b: number): void;
export function __wbg_wasioptions_free(a: number): void;
export function wasioptions_new_with_values(a: number, b: number, c: number, d: number): number;
export function wasioptions_new(a: number): number;
export function wasioptions_args(a: number, b: number): void;
export function wasioptions_set_args(a: number, b: number, c: number): void;
export function wasioptions_env(a: number): number;
export function wasioptions_set_env(a: number, b: number): void;
export function wasioptions_preopens(a: number): number;
export function wasioptions_set_preopens(a: number, b: number): void;
export function __wbg_getnameoptions_free(a: number): void;
export function getnameoptions_new(a: number, b: number, c: number, d: number): number;
export function getnameoptions_family(a: number): number;
export function getnameoptions_set_family(a: number, b: number): void;
export function getnameoptions_host(a: number): number;
export function getnameoptions_set_host(a: number, b: number): void;
export function getnameoptions_local_address(a: number): number;
export function getnameoptions_set_local_address(a: number, b: number): void;
export function getnameoptions_port(a: number): number;
export function getnameoptions_set_port(a: number, b: number): void;
export function __wbg_setaadoptions_free(a: number): void;
export function setaadoptions_new(a: number, b: number, c: number): number;
export function setaadoptions_flush(a: number): number;
export function setaadoptions_set_flush(a: number, b: number): void;
export function setaadoptions_plaintextLength(a: number): number;
export function setaadoptions_set_plaintext_length(a: number, b: number): void;
export function setaadoptions_transform(a: number): number;
export function setaadoptions_set_transform(a: number, b: number): void;
export function __wbg_consoleconstructoroptions_free(a: number): void;
export function consoleconstructoroptions_new_with_values(a: number, b: number, c: number, d: number, e: number): number;
export function consoleconstructoroptions_new(a: number, b: number): number;
export function consoleconstructoroptions_stdout(a: number): number;
export function consoleconstructoroptions_set_stdout(a: number, b: number): void;
export function consoleconstructoroptions_stderr(a: number): number;
export function consoleconstructoroptions_set_stderr(a: number, b: number): void;
export function consoleconstructoroptions_ignore_errors(a: number): number;
export function consoleconstructoroptions_set_ignore_errors(a: number, b: number): void;
export function consoleconstructoroptions_color_mod(a: number): number;
export function consoleconstructoroptions_set_color_mod(a: number, b: number): void;
export function consoleconstructoroptions_inspect_options(a: number): number;
export function consoleconstructoroptions_set_inspect_options(a: number, b: number): void;
export function __wbg_assertionerroroptions_free(a: number): void;
export function assertionerroroptions_new(a: number, b: number, c: number, d: number): number;
export function assertionerroroptions_message(a: number): number;
export function assertionerroroptions_set_message(a: number, b: number): void;
export function assertionerroroptions_actual(a: number): number;
export function assertionerroroptions_set_actual(a: number, b: number): void;
export function assertionerroroptions_expected(a: number): number;
export function assertionerroroptions_set_expected(a: number, b: number): void;
export function assertionerroroptions_operator(a: number): number;
export function assertionerroroptions_set_operator(a: number, b: number): void;
export function __wbg_pipeoptions_free(a: number): void;
export function pipeoptions_new(a: number): number;
export function pipeoptions_end(a: number): number;
export function pipeoptions_set_end(a: number, b: number): void;
export function __wbg_userinfooptions_free(a: number): void;
export function userinfooptions_new_with_values(a: number): number;
export function userinfooptions_new(): number;
export function userinfooptions_encoding(a: number): number;
export function userinfooptions_set_encoding(a: number, b: number): void;
export function __wbg_processsendoptions_free(a: number): void;
export function processsendoptions_new(a: number): number;
export function processsendoptions_swallow_errors(a: number): number;
export function processsendoptions_set_swallow_errors(a: number, b: number): void;
export function writestream_add_listener_with_open(a: number, b: number): number;
export function writestream_add_listener_with_close(a: number, b: number): number;
export function writestream_on_with_open(a: number, b: number): number;
export function writestream_on_with_close(a: number, b: number): number;
export function writestream_once_with_open(a: number, b: number): number;
export function writestream_once_with_close(a: number, b: number): number;
export function writestream_prepend_listener_with_open(a: number, b: number): number;
export function writestream_prepend_listener_with_close(a: number, b: number): number;
export function writestream_prepend_once_listener_with_open(a: number, b: number): number;
export function writestream_prepend_once_listener_with_close(a: number, b: number): number;
export function __wbg_mkdtempsyncoptions_free(a: number): void;
export function mkdtempsyncoptions_new_with_values(a: number): number;
export function mkdtempsyncoptions_new(): number;
export function mkdtempsyncoptions_encoding(a: number): number;
export function mkdtempsyncoptions_set_encoding(a: number, b: number): void;
export function __wbg_appendfileoptions_free(a: number): void;
export function appendfileoptions_new_with_values(a: number, b: number, c: number, d: number): number;
export function appendfileoptions_new(): number;
export function appendfileoptions_encoding(a: number): number;
export function appendfileoptions_set_encoding(a: number, b: number): void;
export function appendfileoptions_mode(a: number, b: number): void;
export function appendfileoptions_set_mode(a: number, b: number, c: number): void;
export function appendfileoptions_flag(a: number): number;
export function appendfileoptions_set_flag(a: number, b: number): void;
export function __wbg_formatinputpathobject_free(a: number): void;
export function formatinputpathobject_new_with_values(a: number, b: number, c: number, d: number, e: number): number;
export function formatinputpathobject_new(): number;
export function formatinputpathobject_base(a: number): number;
export function formatinputpathobject_set_base(a: number, b: number): void;
export function formatinputpathobject_dir(a: number): number;
export function formatinputpathobject_set_dir(a: number, b: number): void;
export function formatinputpathobject_ext(a: number): number;
export function formatinputpathobject_set_ext(a: number, b: number): void;
export function formatinputpathobject_name(a: number): number;
export function formatinputpathobject_set_name(a: number, b: number): void;
export function formatinputpathobject_root(a: number): number;
export function formatinputpathobject_set_root(a: number, b: number): void;
export function __wbg_readfilesyncoptions_free(a: number): void;
export function readfilesyncoptions_new_with_values(a: number, b: number): number;
export function readfilesyncoptions_new(): number;
export function readfilesyncoptions_encoding(a: number): number;
export function readfilesyncoptions_set_encoding(a: number, b: number): void;
export function readfilesyncoptions_flag(a: number): number;
export function readfilesyncoptions_set_flag(a: number, b: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
