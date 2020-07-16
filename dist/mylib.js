let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { readFileSync } = require(String.raw`fs`);
const { TextDecoder } = require(String.raw`util`);

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

let cachegetNodeBufferMemory0 = null;
function getNodeBufferMemory0() {
    if (cachegetNodeBufferMemory0 === null || cachegetNodeBufferMemory0.buffer !== wasm.memory.buffer) {
        cachegetNodeBufferMemory0 = Buffer.from(wasm.memory.buffer);
    }
    return cachegetNodeBufferMemory0;
}

function passStringToWasm0(arg, malloc) {

    const len = Buffer.byteLength(arg);
    const ptr = malloc(len);
    getNodeBufferMemory0().write(arg, ptr, len);
    WASM_VECTOR_LEN = len;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
/**
*/
module.exports.main = function() {
    wasm.main();
};

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4);
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function getArrayJsValueFromWasm0(ptr, len) {
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
        result.push(takeObject(slice[i]));
    }
    return result;
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachegetFloat64Memory0;
}
/**
*/
class AgentConstructorOptions {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_agentconstructoroptions_free(ptr);
    }
    /**
    * @returns {number}
    */
    get keep_alive_msecs() {
        var ret = wasm.agentconstructoroptions_keep_alive_msecs(this.ptr);
        return ret;
    }
    /**
    * @param {number} value
    */
    set keep_alive_msecs(value) {
        wasm.agentconstructoroptions_set_keep_alive_msecs(this.ptr, value);
    }
    /**
    * @returns {boolean}
    */
    get keep_alive() {
        var ret = wasm.agentconstructoroptions_keep_alive(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} value
    */
    set keep_alive(value) {
        wasm.agentconstructoroptions_set_keep_alive(this.ptr, value);
    }
    /**
    * @returns {number}
    */
    get max_free_sockets() {
        var ret = wasm.agentconstructoroptions_max_free_sockets(this.ptr);
        return ret;
    }
    /**
    * @param {number} value
    */
    set max_free_sockets(value) {
        wasm.agentconstructoroptions_set_max_free_sockets(this.ptr, value);
    }
    /**
    * @returns {number}
    */
    get max_sockets() {
        var ret = wasm.agentconstructoroptions_max_sockets(this.ptr);
        return ret;
    }
    /**
    * @param {number} value
    */
    set max_sockets(value) {
        wasm.agentconstructoroptions_set_max_sockets(this.ptr, value);
    }
    /**
    * @returns {number}
    */
    get timeout() {
        var ret = wasm.agentconstructoroptions_timeout(this.ptr);
        return ret;
    }
    /**
    * @param {number} value
    */
    set timeout(value) {
        wasm.agentconstructoroptions_set_timeout(this.ptr, value);
    }
}
module.exports.AgentConstructorOptions = AgentConstructorOptions;
/**
*/
class AppendFileOptions {

    static __wrap(ptr) {
        const obj = Object.create(AppendFileOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_appendfileoptions_free(ptr);
    }
    /**
    * @param {string | undefined} encoding
    * @param {number | undefined} mode
    * @param {string | undefined} flag
    */
    constructor(encoding, mode, flag) {
        var ret = wasm.appendfileoptions_new_with_values(isLikeNone(encoding) ? 0 : addHeapObject(encoding), !isLikeNone(mode), isLikeNone(mode) ? 0 : mode, isLikeNone(flag) ? 0 : addHeapObject(flag));
        return AppendFileOptions.__wrap(ret);
    }
    /**
    * @returns {AppendFileOptions}
    */
    static new() {
        var ret = wasm.appendfileoptions_new();
        return AppendFileOptions.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */
    get encoding() {
        var ret = wasm.appendfileoptions_encoding(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set encoding(value) {
        wasm.appendfileoptions_set_encoding(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {number | undefined}
    */
    get mode() {
        wasm.appendfileoptions_mode(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number | undefined} value
    */
    set mode(value) {
        wasm.appendfileoptions_set_mode(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
    /**
    * @returns {string | undefined}
    */
    get flag() {
        var ret = wasm.appendfileoptions_flag(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set flag(value) {
        wasm.appendfileoptions_set_flag(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
}
module.exports.AppendFileOptions = AppendFileOptions;
/**
*/
class AssertionErrorOptions {

    static __wrap(ptr) {
        const obj = Object.create(AssertionErrorOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_assertionerroroptions_free(ptr);
    }
    /**
    * @param {string | undefined} message
    * @param {any} actual
    * @param {any} expected
    * @param {string} operator
    */
    constructor(message, actual, expected, operator) {
        var ret = wasm.assertionerroroptions_new(isLikeNone(message) ? 0 : addHeapObject(message), addHeapObject(actual), addHeapObject(expected), addHeapObject(operator));
        return AssertionErrorOptions.__wrap(ret);
    }
    /**
    * If provided, the error message is set to this value.
    * @returns {string | undefined}
    */
    get message() {
        var ret = wasm.assertionerroroptions_message(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set message(value) {
        wasm.assertionerroroptions_set_message(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * The actual property on the error instance.
    * @returns {any}
    */
    get actual() {
        var ret = wasm.assertionerroroptions_actual(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {any} value
    */
    set actual(value) {
        wasm.assertionerroroptions_set_actual(this.ptr, addHeapObject(value));
    }
    /**
    * The expected property on the error instance.
    * @returns {any}
    */
    get expected() {
        var ret = wasm.assertionerroroptions_expected(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {any} value
    */
    set expected(value) {
        wasm.assertionerroroptions_set_expected(this.ptr, addHeapObject(value));
    }
    /**
    * The operator property on the error instance.
    * @returns {string}
    */
    get operator() {
        var ret = wasm.assertionerroroptions_operator(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string} value
    */
    set operator(value) {
        wasm.assertionerroroptions_set_operator(this.ptr, addHeapObject(value));
    }
}
module.exports.AssertionErrorOptions = AssertionErrorOptions;
/**
*/
class ConsoleConstructorOptions {

    static __wrap(ptr) {
        const obj = Object.create(ConsoleConstructorOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_consoleconstructoroptions_free(ptr);
    }
    /**
    * @param {any} stdout
    * @param {any} stderr
    * @param {boolean | undefined} ignore_errors
    * @param {any} color_mod
    * @param {object | undefined} inspect_options
    */
    constructor(stdout, stderr, ignore_errors, color_mod, inspect_options) {
        var ret = wasm.consoleconstructoroptions_new_with_values(addHeapObject(stdout), addHeapObject(stderr), isLikeNone(ignore_errors) ? 0xFFFFFF : ignore_errors ? 1 : 0, addHeapObject(color_mod), isLikeNone(inspect_options) ? 0 : addHeapObject(inspect_options));
        return ConsoleConstructorOptions.__wrap(ret);
    }
    /**
    * @param {any} stdout
    * @param {any} stderr
    * @returns {ConsoleConstructorOptions}
    */
    static new(stdout, stderr) {
        var ret = wasm.consoleconstructoroptions_new(addHeapObject(stdout), addHeapObject(stderr));
        return ConsoleConstructorOptions.__wrap(ret);
    }
    /**
    * @returns {any}
    */
    get stdout() {
        var ret = wasm.consoleconstructoroptions_stdout(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {any} value
    */
    set stdout(value) {
        wasm.consoleconstructoroptions_set_stdout(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {any}
    */
    get stderr() {
        var ret = wasm.consoleconstructoroptions_stderr(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {any} value
    */
    set stderr(value) {
        wasm.consoleconstructoroptions_set_stderr(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {boolean | undefined}
    */
    get ignore_errors() {
        var ret = wasm.consoleconstructoroptions_ignore_errors(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set ignore_errors(value) {
        wasm.consoleconstructoroptions_set_ignore_errors(this.ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
    /**
    * @returns {any}
    */
    get color_mod() {
        var ret = wasm.consoleconstructoroptions_color_mod(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {any} value
    */
    set color_mod(value) {
        wasm.consoleconstructoroptions_set_color_mod(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {object | undefined}
    */
    get inspect_options() {
        var ret = wasm.consoleconstructoroptions_inspect_options(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {object | undefined} value
    */
    set inspect_options(value) {
        wasm.consoleconstructoroptions_set_inspect_options(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
}
module.exports.ConsoleConstructorOptions = ConsoleConstructorOptions;
/**
*/
class CreateHookCallbacks {

    static __wrap(ptr) {
        const obj = Object.create(CreateHookCallbacks.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_createhookcallbacks_free(ptr);
    }
    /**
    * @param {Function} init
    * @param {Function} before
    * @param {Function} after
    * @param {Function} destroy
    * @param {Function} promise_resolve
    */
    constructor(init, before, after, destroy, promise_resolve) {
        try {
            var ret = wasm.createhookcallbacks_new(addBorrowedObject(init), addBorrowedObject(before), addBorrowedObject(after), addBorrowedObject(destroy), addBorrowedObject(promise_resolve));
            return CreateHookCallbacks.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @returns {Function}
    */
    get init() {
        var ret = wasm.createhookcallbacks_init(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set init(value) {
        wasm.createhookcallbacks_set_init(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {Function}
    */
    get before() {
        var ret = wasm.createhookcallbacks_before(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set before(value) {
        wasm.createhookcallbacks_set_before(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {Function}
    */
    get after() {
        var ret = wasm.createhookcallbacks_after(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set after(value) {
        wasm.createhookcallbacks_set_after(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {Function}
    */
    get destroy() {
        var ret = wasm.createhookcallbacks_destroy(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set destroy(value) {
        wasm.createhookcallbacks_set_destroy(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {Function}
    */
    get promise_resolve() {
        var ret = wasm.createhookcallbacks_promise_resolve(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set promise_resolve(value) {
        wasm.createhookcallbacks_set_promise_resolve(this.ptr, addHeapObject(value));
    }
}
module.exports.CreateHookCallbacks = CreateHookCallbacks;
/**
*/
class CreateReadStreamOptions {

    static __wrap(ptr) {
        const obj = Object.create(CreateReadStreamOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_createreadstreamoptions_free(ptr);
    }
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
    constructor(auto_close, emit_close, encoding, end, fd, flags, high_water_mark, mode, start) {
        var ret = wasm.createreadstreamoptions_new_with_values(isLikeNone(auto_close) ? 0xFFFFFF : auto_close ? 1 : 0, isLikeNone(emit_close) ? 0xFFFFFF : emit_close ? 1 : 0, isLikeNone(encoding) ? 0 : addHeapObject(encoding), !isLikeNone(end), isLikeNone(end) ? 0 : end, !isLikeNone(fd), isLikeNone(fd) ? 0 : fd, isLikeNone(flags) ? 0 : addHeapObject(flags), !isLikeNone(high_water_mark), isLikeNone(high_water_mark) ? 0 : high_water_mark, !isLikeNone(mode), isLikeNone(mode) ? 0 : mode, !isLikeNone(start), isLikeNone(start) ? 0 : start);
        return CreateReadStreamOptions.__wrap(ret);
    }
    /**
    * @returns {boolean | undefined}
    */
    get auto_close() {
        var ret = wasm.createreadstreamoptions_auto_close(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set auto_close(value) {
        wasm.createreadstreamoptions_set_auto_close(this.ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
    /**
    * @returns {boolean | undefined}
    */
    get emit_close() {
        var ret = wasm.createreadstreamoptions_emit_close(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set emit_close(value) {
        wasm.createreadstreamoptions_set_emit_close(this.ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
    /**
    * @returns {string | undefined}
    */
    get encoding() {
        var ret = wasm.createreadstreamoptions_encoding(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set encoding(value) {
        wasm.createreadstreamoptions_set_encoding(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {number | undefined}
    */
    get end() {
        wasm.createreadstreamoptions_end(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getFloat64Memory0()[8 / 8 + 1];
        return r0 === 0 ? undefined : r1;
    }
    /**
    * @param {number | undefined} value
    */
    set end(value) {
        wasm.createreadstreamoptions_set_end(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
    /**
    * @returns {number | undefined}
    */
    get fd() {
        wasm.createreadstreamoptions_fd(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number | undefined} value
    */
    set fd(value) {
        wasm.createreadstreamoptions_set_fd(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
    /**
    * @returns {string | undefined}
    */
    get flags() {
        var ret = wasm.createreadstreamoptions_flags(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set flags(value) {
        wasm.createreadstreamoptions_set_flags(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {number | undefined}
    */
    get high_water_mark() {
        wasm.createreadstreamoptions_high_water_mark(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getFloat64Memory0()[8 / 8 + 1];
        return r0 === 0 ? undefined : r1;
    }
    /**
    * @param {number | undefined} value
    */
    set high_water_mark(value) {
        wasm.createreadstreamoptions_set_high_water_mark(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
    /**
    * @returns {number | undefined}
    */
    get mode() {
        wasm.createreadstreamoptions_mode(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number | undefined} value
    */
    set mode(value) {
        wasm.createreadstreamoptions_set_mode(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
    /**
    * @returns {number | undefined}
    */
    get start() {
        wasm.createreadstreamoptions_start(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getFloat64Memory0()[8 / 8 + 1];
        return r0 === 0 ? undefined : r1;
    }
    /**
    * @param {number | undefined} value
    */
    set start(value) {
        wasm.createreadstreamoptions_set_start(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
}
module.exports.CreateReadStreamOptions = CreateReadStreamOptions;
/**
*/
class CreateWriteStreamOptions {

    static __wrap(ptr) {
        const obj = Object.create(CreateWriteStreamOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_createwritestreamoptions_free(ptr);
    }
    /**
    * @param {boolean | undefined} auto_close
    * @param {boolean | undefined} emit_close
    * @param {string | undefined} encoding
    * @param {number | undefined} fd
    * @param {string | undefined} flags
    * @param {number | undefined} mode
    * @param {number | undefined} start
    */
    constructor(auto_close, emit_close, encoding, fd, flags, mode, start) {
        var ret = wasm.createwritestreamoptions_new_with_values(isLikeNone(auto_close) ? 0xFFFFFF : auto_close ? 1 : 0, isLikeNone(emit_close) ? 0xFFFFFF : emit_close ? 1 : 0, isLikeNone(encoding) ? 0 : addHeapObject(encoding), !isLikeNone(fd), isLikeNone(fd) ? 0 : fd, isLikeNone(flags) ? 0 : addHeapObject(flags), !isLikeNone(mode), isLikeNone(mode) ? 0 : mode, !isLikeNone(start), isLikeNone(start) ? 0 : start);
        return CreateWriteStreamOptions.__wrap(ret);
    }
    /**
    * @returns {boolean | undefined}
    */
    get auto_close() {
        var ret = wasm.createwritestreamoptions_auto_close(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set auto_close(value) {
        wasm.createwritestreamoptions_set_auto_close(this.ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
    /**
    * @returns {boolean | undefined}
    */
    get emit_close() {
        var ret = wasm.createwritestreamoptions_emit_close(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set emit_close(value) {
        wasm.createwritestreamoptions_set_emit_close(this.ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
    /**
    * @returns {string | undefined}
    */
    get encoding() {
        var ret = wasm.createwritestreamoptions_encoding(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set encoding(value) {
        wasm.createwritestreamoptions_set_encoding(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {number | undefined}
    */
    get fd() {
        wasm.createwritestreamoptions_fd(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number | undefined} value
    */
    set fd(value) {
        wasm.createwritestreamoptions_set_fd(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
    /**
    * @returns {string | undefined}
    */
    get flags() {
        var ret = wasm.createwritestreamoptions_flags(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set flags(value) {
        wasm.createwritestreamoptions_set_flags(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {number | undefined}
    */
    get mode() {
        wasm.createwritestreamoptions_mode(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number | undefined} value
    */
    set mode(value) {
        wasm.createwritestreamoptions_set_mode(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
    /**
    * @returns {number | undefined}
    */
    get start() {
        wasm.createwritestreamoptions_start(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getFloat64Memory0()[8 / 8 + 1];
        return r0 === 0 ? undefined : r1;
    }
    /**
    * @param {number | undefined} value
    */
    set start(value) {
        wasm.createwritestreamoptions_set_start(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
}
module.exports.CreateWriteStreamOptions = CreateWriteStreamOptions;
/**
*/
class FormatInputPathObject {

    static __wrap(ptr) {
        const obj = Object.create(FormatInputPathObject.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_formatinputpathobject_free(ptr);
    }
    /**
    * @param {string | undefined} base
    * @param {string | undefined} dir
    * @param {string | undefined} ext
    * @param {string | undefined} name
    * @param {string | undefined} root
    */
    constructor(base, dir, ext, name, root) {
        var ret = wasm.formatinputpathobject_new_with_values(isLikeNone(base) ? 0 : addHeapObject(base), isLikeNone(dir) ? 0 : addHeapObject(dir), isLikeNone(ext) ? 0 : addHeapObject(ext), isLikeNone(name) ? 0 : addHeapObject(name), isLikeNone(root) ? 0 : addHeapObject(root));
        return FormatInputPathObject.__wrap(ret);
    }
    /**
    * @returns {FormatInputPathObject}
    */
    static new() {
        var ret = wasm.formatinputpathobject_new();
        return FormatInputPathObject.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */
    get base() {
        var ret = wasm.formatinputpathobject_base(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set base(value) {
        wasm.formatinputpathobject_set_base(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {string | undefined}
    */
    get dir() {
        var ret = wasm.formatinputpathobject_dir(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set dir(value) {
        wasm.formatinputpathobject_set_dir(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {string | undefined}
    */
    get ext() {
        var ret = wasm.formatinputpathobject_ext(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set ext(value) {
        wasm.formatinputpathobject_set_ext(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {string | undefined}
    */
    get name() {
        var ret = wasm.formatinputpathobject_name(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set name(value) {
        wasm.formatinputpathobject_set_name(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {string | undefined}
    */
    get root() {
        var ret = wasm.formatinputpathobject_root(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set root(value) {
        wasm.formatinputpathobject_set_root(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
}
module.exports.FormatInputPathObject = FormatInputPathObject;
/**
*/
class GetNameOptions {

    static __wrap(ptr) {
        const obj = Object.create(GetNameOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_getnameoptions_free(ptr);
    }
    /**
    * @param {number | undefined} family
    * @param {string} host
    * @param {string} local_address
    * @param {number} port
    * @returns {GetNameOptions}
    */
    static new(family, host, local_address, port) {
        var ret = wasm.getnameoptions_new(isLikeNone(family) ? 0xFFFFFF : family, addHeapObject(host), addHeapObject(local_address), port);
        return GetNameOptions.__wrap(ret);
    }
    /**
    * @returns {number | undefined}
    */
    get family() {
        var ret = wasm.getnameoptions_family(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret;
    }
    /**
    * @param {number | undefined} value
    */
    set family(value) {
        wasm.getnameoptions_set_family(this.ptr, isLikeNone(value) ? 0xFFFFFF : value);
    }
    /**
    * @returns {string}
    */
    get host() {
        var ret = wasm.getnameoptions_host(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string} value
    */
    set host(value) {
        wasm.getnameoptions_set_host(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {string}
    */
    get local_address() {
        var ret = wasm.getnameoptions_local_address(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string} value
    */
    set local_address(value) {
        wasm.getnameoptions_set_local_address(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {number}
    */
    get port() {
        var ret = wasm.getnameoptions_port(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} value
    */
    set port(value) {
        wasm.getnameoptions_set_port(this.ptr, value);
    }
}
module.exports.GetNameOptions = GetNameOptions;
/**
*/
class MkdtempSyncOptions {

    static __wrap(ptr) {
        const obj = Object.create(MkdtempSyncOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_mkdtempsyncoptions_free(ptr);
    }
    /**
    * @param {string | undefined} encoding
    */
    constructor(encoding) {
        var ret = wasm.mkdtempsyncoptions_new_with_values(isLikeNone(encoding) ? 0 : addHeapObject(encoding));
        return MkdtempSyncOptions.__wrap(ret);
    }
    /**
    * @returns {MkdtempSyncOptions}
    */
    static new() {
        var ret = wasm.mkdtempsyncoptions_new();
        return MkdtempSyncOptions.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */
    get encoding() {
        var ret = wasm.mkdtempsyncoptions_encoding(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set encoding(value) {
        wasm.mkdtempsyncoptions_set_encoding(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
}
module.exports.MkdtempSyncOptions = MkdtempSyncOptions;
/**
*/
class NetServerOptions {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_netserveroptions_free(ptr);
    }
    /**
    * @returns {boolean | undefined}
    */
    get allow_half_open() {
        var ptr = this.ptr;
        this.ptr = 0;
        var ret = wasm.netserveroptions_allow_half_open(ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set allow_half_open(value) {
        var ptr = this.ptr;
        this.ptr = 0;
        wasm.netserveroptions_set_allow_half_open(ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
    /**
    * @returns {boolean | undefined}
    */
    get pause_on_connect() {
        var ptr = this.ptr;
        this.ptr = 0;
        var ret = wasm.netserveroptions_pause_on_connect(ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set pause_on_connect(value) {
        var ptr = this.ptr;
        this.ptr = 0;
        wasm.netserveroptions_set_pause_on_connect(ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
}
module.exports.NetServerOptions = NetServerOptions;
/**
*/
class PipeOptions {

    static __wrap(ptr) {
        const obj = Object.create(PipeOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_pipeoptions_free(ptr);
    }
    /**
    * @param {boolean | undefined} end
    */
    constructor(end) {
        var ret = wasm.pipeoptions_new(isLikeNone(end) ? 0xFFFFFF : end ? 1 : 0);
        return PipeOptions.__wrap(ret);
    }
    /**
    * @returns {boolean | undefined}
    */
    get end() {
        var ptr = this.ptr;
        this.ptr = 0;
        var ret = wasm.pipeoptions_end(ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set end(value) {
        var ptr = this.ptr;
        this.ptr = 0;
        wasm.pipeoptions_set_end(ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
}
module.exports.PipeOptions = PipeOptions;
/**
*/
class ProcessSendOptions {

    static __wrap(ptr) {
        const obj = Object.create(ProcessSendOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_processsendoptions_free(ptr);
    }
    /**
    * @param {boolean | undefined} swallow_errors
    */
    constructor(swallow_errors) {
        var ret = wasm.processsendoptions_new(isLikeNone(swallow_errors) ? 0xFFFFFF : swallow_errors ? 1 : 0);
        return ProcessSendOptions.__wrap(ret);
    }
    /**
    * @returns {boolean | undefined}
    */
    get swallow_errors() {
        var ret = wasm.processsendoptions_swallow_errors(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @param {boolean | undefined} value
    */
    set swallow_errors(value) {
        wasm.processsendoptions_set_swallow_errors(this.ptr, isLikeNone(value) ? 0xFFFFFF : value ? 1 : 0);
    }
}
module.exports.ProcessSendOptions = ProcessSendOptions;
/**
*/
class ReadFileSyncOptions {

    static __wrap(ptr) {
        const obj = Object.create(ReadFileSyncOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_readfilesyncoptions_free(ptr);
    }
    /**
    * @param {string | undefined} encoding
    * @param {string | undefined} flag
    */
    constructor(encoding, flag) {
        var ret = wasm.readfilesyncoptions_new_with_values(isLikeNone(encoding) ? 0 : addHeapObject(encoding), isLikeNone(flag) ? 0 : addHeapObject(flag));
        return ReadFileSyncOptions.__wrap(ret);
    }
    /**
    * @returns {ReadFileSyncOptions}
    */
    static new() {
        var ret = wasm.readfilesyncoptions_new();
        return ReadFileSyncOptions.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */
    get encoding() {
        var ret = wasm.readfilesyncoptions_encoding(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set encoding(value) {
        wasm.readfilesyncoptions_set_encoding(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {string | undefined}
    */
    get flag() {
        var ret = wasm.readfilesyncoptions_flag(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set flag(value) {
        wasm.readfilesyncoptions_set_flag(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
}
module.exports.ReadFileSyncOptions = ReadFileSyncOptions;

class ReadStream {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_readstream_free(ptr);
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    add_listener_with_open(listener) {
        try {
            var ret = wasm.readstream_add_listener_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    add_listener_with_close(listener) {
        try {
            var ret = wasm.readstream_add_listener_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    on_with_open(listener) {
        try {
            var ret = wasm.readstream_on_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    on_with_close(listener) {
        try {
            var ret = wasm.readstream_on_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    once_with_open(listener) {
        try {
            var ret = wasm.readstream_once_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    once_with_close(listener) {
        try {
            var ret = wasm.readstream_once_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    prepend_listener_with_open(listener) {
        try {
            var ret = wasm.readstream_prepend_listener_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    prepend_listener_with_close(listener) {
        try {
            var ret = wasm.readstream_prepend_listener_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    prepend_once_listener_with_open(listener) {
        try {
            var ret = wasm.readstream_prepend_once_listener_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    prepend_once_listener_with_close(listener) {
        try {
            var ret = wasm.readstream_prepend_once_listener_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
module.exports.ReadStream = ReadStream;
/**
*/
class SetAadOptions {

    static __wrap(ptr) {
        const obj = Object.create(SetAadOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_setaadoptions_free(ptr);
    }
    /**
    * @param {Function} flush
    * @param {number} plaintext_length
    * @param {Function} transform
    */
    constructor(flush, plaintext_length, transform) {
        var ret = wasm.setaadoptions_new(addHeapObject(flush), plaintext_length, addHeapObject(transform));
        return SetAadOptions.__wrap(ret);
    }
    /**
    * @returns {Function}
    */
    get flush() {
        var ret = wasm.setaadoptions_flush(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set flush(value) {
        wasm.setaadoptions_set_flush(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {number}
    */
    get plaintextLength() {
        var ret = wasm.setaadoptions_plaintextLength(this.ptr);
        return ret;
    }
    /**
    * @param {number} value
    */
    set plaintext_length(value) {
        wasm.setaadoptions_set_plaintext_length(this.ptr, value);
    }
    /**
    * @returns {Function}
    */
    get transform() {
        var ret = wasm.setaadoptions_transform(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set transform(value) {
        wasm.setaadoptions_set_transform(this.ptr, addHeapObject(value));
    }
}
module.exports.SetAadOptions = SetAadOptions;
/**
*/
class StreamTransformOptions {

    static __wrap(ptr) {
        const obj = Object.create(StreamTransformOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_streamtransformoptions_free(ptr);
    }
    /**
    * @param {Function} flush
    * @param {Function} transform
    */
    constructor(flush, transform) {
        var ret = wasm.streamtransformoptions_new(addHeapObject(flush), addHeapObject(transform));
        return StreamTransformOptions.__wrap(ret);
    }
    /**
    * @returns {Function}
    */
    get flush() {
        var ret = wasm.streamtransformoptions_flush(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set flush(value) {
        wasm.streamtransformoptions_set_flush(this.ptr, addHeapObject(value));
    }
    /**
    * @returns {Function}
    */
    get transform() {
        var ret = wasm.streamtransformoptions_transform(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Function} value
    */
    set transform(value) {
        wasm.streamtransformoptions_set_transform(this.ptr, addHeapObject(value));
    }
}
module.exports.StreamTransformOptions = StreamTransformOptions;
/**
*/
class UserInfoOptions {

    static __wrap(ptr) {
        const obj = Object.create(UserInfoOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_userinfooptions_free(ptr);
    }
    /**
    * @param {string | undefined} encoding
    */
    constructor(encoding) {
        var ret = wasm.userinfooptions_new_with_values(isLikeNone(encoding) ? 0 : addHeapObject(encoding));
        return UserInfoOptions.__wrap(ret);
    }
    /**
    * @returns {UserInfoOptions}
    */
    static new() {
        var ret = wasm.userinfooptions_new();
        return UserInfoOptions.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */
    get encoding() {
        var ret = wasm.userinfooptions_encoding(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set encoding(value) {
        wasm.userinfooptions_set_encoding(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
}
module.exports.UserInfoOptions = UserInfoOptions;
/**
*/
class WasiOptions {

    static __wrap(ptr) {
        const obj = Object.create(WasiOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_wasioptions_free(ptr);
    }
    /**
    * @param {any[] | undefined} args
    * @param {object | undefined} env
    * @param {object} preopens
    */
    constructor(args, env, preopens) {
        var ptr0 = isLikeNone(args) ? 0 : passArrayJsValueToWasm0(args, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.wasioptions_new_with_values(ptr0, len0, isLikeNone(env) ? 0 : addHeapObject(env), addHeapObject(preopens));
        return WasiOptions.__wrap(ret);
    }
    /**
    * @param {object} preopens
    * @returns {WasiOptions}
    */
    static new(preopens) {
        var ret = wasm.wasioptions_new(addHeapObject(preopens));
        return WasiOptions.__wrap(ret);
    }
    /**
    * @returns {any[] | undefined}
    */
    get args() {
        wasm.wasioptions_args(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        let v0;
        if (r0 !== 0) {
            v0 = getArrayJsValueFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
        }
        return v0;
    }
    /**
    * @param {any[] | undefined} value
    */
    set args(value) {
        var ptr0 = isLikeNone(value) ? 0 : passArrayJsValueToWasm0(value, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.wasioptions_set_args(this.ptr, ptr0, len0);
    }
    /**
    * @returns {object | undefined}
    */
    get env() {
        var ret = wasm.wasioptions_env(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {object | undefined} value
    */
    set env(value) {
        wasm.wasioptions_set_env(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {object}
    */
    get preopens() {
        var ret = wasm.wasioptions_preopens(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {object} value
    */
    set preopens(value) {
        wasm.wasioptions_set_preopens(this.ptr, addHeapObject(value));
    }
}
module.exports.WasiOptions = WasiOptions;
/**
*/
class WriteFileSyncOptions {

    static __wrap(ptr) {
        const obj = Object.create(WriteFileSyncOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_writefilesyncoptions_free(ptr);
    }
    /**
    * @param {string | undefined} encoding
    * @param {string | undefined} flag
    * @param {number | undefined} mode
    */
    constructor(encoding, flag, mode) {
        var ret = wasm.writefilesyncoptions_new(isLikeNone(encoding) ? 0 : addHeapObject(encoding), isLikeNone(flag) ? 0 : addHeapObject(flag), !isLikeNone(mode), isLikeNone(mode) ? 0 : mode);
        return WriteFileSyncOptions.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */
    get encoding() {
        var ret = wasm.writefilesyncoptions_encoding(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set encoding(value) {
        wasm.writefilesyncoptions_set_encoding(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {string | undefined}
    */
    get flag() {
        var ret = wasm.writefilesyncoptions_flag(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {string | undefined} value
    */
    set flag(value) {
        wasm.writefilesyncoptions_set_flag(this.ptr, isLikeNone(value) ? 0 : addHeapObject(value));
    }
    /**
    * @returns {number | undefined}
    */
    get mode() {
        wasm.writefilesyncoptions_mode(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    }
    /**
    * @param {number | undefined} value
    */
    set mode(value) {
        wasm.writefilesyncoptions_set_mode(this.ptr, !isLikeNone(value), isLikeNone(value) ? 0 : value);
    }
}
module.exports.WriteFileSyncOptions = WriteFileSyncOptions;

class WriteStream {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_writestream_free(ptr);
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    add_listener_with_open(listener) {
        try {
            var ret = wasm.writestream_add_listener_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    add_listener_with_close(listener) {
        try {
            var ret = wasm.writestream_add_listener_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    on_with_open(listener) {
        try {
            var ret = wasm.writestream_on_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    on_with_close(listener) {
        try {
            var ret = wasm.writestream_on_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    once_with_open(listener) {
        try {
            var ret = wasm.writestream_once_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    once_with_close(listener) {
        try {
            var ret = wasm.writestream_once_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    prepend_listener_with_open(listener) {
        try {
            var ret = wasm.writestream_prepend_listener_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    prepend_listener_with_close(listener) {
        try {
            var ret = wasm.writestream_prepend_listener_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    prepend_once_listener_with_open(listener) {
        try {
            var ret = wasm.writestream_prepend_once_listener_with_open(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} listener
    * @returns {any}
    */
    prepend_once_listener_with_close(listener) {
        try {
            var ret = wasm.writestream_prepend_once_listener_with_close(this.ptr, addBorrowedObject(listener));
            return takeObject(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
module.exports.WriteStream = WriteStream;

module.exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};

module.exports.__wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

module.exports.__wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbg_log_d85e484a8ba03c98 = function(arg0) {
    console.log(getObject(arg0));
};

module.exports.__wbg_readFileSync_3f84f286f0576910 = handleError(function(arg0, arg1) {
    var ret = readFileSync(getObject(arg0), arg1 === 0 ? undefined : ReadFileSyncOptions.__wrap(arg1));
    return addHeapObject(ret);
});

module.exports.__wbg_static_accessor_process_8ce5117b4a5688b8 = function() {
    var ret = process;
    return addHeapObject(ret);
};

module.exports.__wbg_addListener_cde57b45bae8f5a1 = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).addListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return addHeapObject(ret);
};

module.exports.__wbg_on_1c1dc4a22b31b06a = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).on(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return addHeapObject(ret);
};

module.exports.__wbg_once_c63fa70999d01ed1 = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).once(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return addHeapObject(ret);
};

module.exports.__wbg_prependListener_a4c92831170e178e = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).prependListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return addHeapObject(ret);
};

module.exports.__wbg_prependOnceListener_c0e99b4c5407cce7 = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).prependOnceListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return addHeapObject(ret);
};

module.exports.__wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

module.exports.__wbg_exit_8b603241d7db0931 = function(arg0, arg1, arg2) {
    getObject(arg0).exit(arg1 === 0 ? undefined : arg2);
};

module.exports.__wbg_env_8082220246d4efbb = function(arg0) {
    var ret = getObject(arg0).env;
    return addHeapObject(ret);
};

module.exports.__wbg_getTime_8e7a0578598e5039 = function(arg0) {
    var ret = getObject(arg0).getTime();
    return ret;
};

module.exports.__wbg_new0_8d817915cd890bd8 = function() {
    var ret = new Date();
    return addHeapObject(ret);
};

module.exports.__wbg_new_04793d2c09ba060f = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

module.exports.__wbg_length_3acae3a5337e0257 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

module.exports.__wbg_set_fdaef5653b2c1408 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

module.exports.__wbg_buffer_44855aefa83ea48c = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

module.exports.__wbg_get_38f68ddea9e54820 = handleError(function(arg0, arg1) {
    var ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
});

module.exports.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

module.exports.__wbindgen_memory = function() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

const path = require('path').join(__dirname, 'mylib_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

