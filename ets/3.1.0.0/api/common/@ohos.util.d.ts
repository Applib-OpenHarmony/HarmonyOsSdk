/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TextDecoder support full encoding in ICU data utf-8 utf-16 iso8859 must support in all device, TextEncoder takes a
 * stream of code points as input and emits a stream of UTF-8 bytes, and system help function.
 * @since 7
 * @sysCap SystemCapability.CCRuntime
 * @devices phone, tablet
 * @import import util from '@ohos.util';
 * @permission N/A
 */
declare namespace util {
    /**
     * %s: String will be used to convert all values except BigInt, Object and -0. BigInt values will be represented
     * with an n and Objects that have no user defined toString function are inspected using util.inspect() with
     * options { depth: 0, colors: false, compact: 3 }.
     * %d: Number will be used to convert all values except BigInt and Symbol.
     * %i: parseInt(value, 10) is used for all values except BigInt and Symbol.
     * %f: parseFloat(value) is used for all values except Bigint and Symbol.
     * %j: JSON. Replaced with the string '[Circular]' if the argument contains circular references.
     * %o: Object. A string representation of an object with generic JavaScript object formatting.Similar to
     * util.inspect() with options { showHidden: true, showProxy: true}. This will show the full object including
     * non-enumerable properties and proxies.
     * %O: Object. A string representation of an object with generic JavaScript object formatting.
     * %O: Object. A string representation of an object with generic JavaScript object formatting.Similar to
     * util.inspect() without options. This will show the full object not including non-enumerable properties and
     * proxies.
     * %c: CSS. This specifier is ignored and will skip any CSS passed in.
     * %%: single percent sign ('%'). This does not consume an argument.Returns: <string> The formatted string.
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param format styled string
     * @param args data to be formatted
     * @return Return the character string formatted in a specific format
     */
    function printf(format: string, ...args: Object[]): string;

    /**
     * Get the string name of the system errno.
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param errno the error code generated by an error in the system
     * @return return the string name of a system errno
     */
    function getErrorString(errno: number): string;

    /**
     * Takes an async function (or a function that returns a Promise) and returns a function following the
     * error-first callback style.
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param original asynchronous function
     */
    function callbackWrapper(original: Function): (err: Object, value: Object) => void;

    /**
     * Takes a function following the common error-first callback style, i.e taking an (err, value) =>
     * callback as the last argument, and return a version that returns promises.
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param original asynchronous function
     * @return return a version that returns promises
     */
    function promiseWrapper(original: (err: Object, value: Object) => void): Object;

    class TextDecoder {
        /**
         * the source encoding's name, lowercased.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly encoding: string;

        /**
         * Returns `true` if error mode is "fatal", and `false` otherwise.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly fatal: boolean;

        /**
         * Returns `true` if ignore BOM flag is set, and `false` otherwise.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly ignoreBOM = false;

        /**
         * the textEncoder constructor.
         * @param 7
         * @sysCap SystemCapability.CCRuntime
         * @param encoding decoding format
         */
        constructor(
            encoding?: string,
            options?: { fatal?: boolean; ignoreBOM?: boolean },
        );

        /**
         * Returns the result of running encoding's decoder.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param input decoded numbers in accordance with the format
         * @return return decoded text
         */
        decode(input: Uint8Array, options?: { stream?: false }): string;
    }

    class TextEncoder {
        /**
         * Encoding format.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly encoding = "utf-8";

        /**
         * the textEncoder constructor.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        constructor();

        /**
         * Returns the result of encoder.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param The string to be encoded.
         * @return returns the encoded text.
         */
        encode(input?: string): Uint8Array;

        /**
         * encode string, write the result to dest array.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param input The string to be encoded.
         * @param dest decoded numbers in accordance with the format
         * @return returns Returns the object, where read represents
         * the number of characters that have been encoded, and written
         * represents the number of bytes occupied by the encoded characters.
         */
        encodeInto(
            input: string,
            dest: Uint8Array,
        ): { read: number; written: number };
    }

    class RationalNumber​ {
        /**
         * A constructor used to create a RationalNumber instance with a given numerator and denominator.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param numerator An integer number
         * @param denominator An integer number
         */
        constructor(numerator: number, denominator: number);
        /**
         * Creates a RationalNumber object based on a given string.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param String Expression of Rational Numbers
         * @return Returns a RationalNumber object generated based on the given string.
         */
        static createRationalFromString​(rationalString: string): RationalNumber​;
        /**
         * Compares the current RationalNumber object to the given object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param An object of other rational numbers
         * @return Returns 0 or 1, or -1, depending on the comparison.
         */
        compareTo​(another :RationalNumber): number;
        /**
         * Compares two objects for equality.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param An object
         * @return Returns true if the given object is the same as the current object; Otherwise, false is returned.
         */
        equals​(obj: Object): boolean;
        /**
         * Gets integer and floating-point values of a rational number object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the integer and floating-point values of a rational number object.
         */
        valueOf(): number;
        /**
         * Get the greatest common divisor of two integers.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param number1 is an integer.
         * @param number2 is an integer.
         * @return Returns the greatest common divisor of two integers, integer type.
         */
        static getCommonDivisor​(number1: number, number2: number): number;
        /**
         * Gets the denominator of the current object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the denominator of the current object.
         */
        getDenominator​(): number;
        /**
         * Gets the numerator​ of the current object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the numerator​ of the current object.
         */
        getNumerator​(): number;
        /**
         * Checks whether the current RationalNumber object represents an infinite value.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return If the denominator is not 0, true is returned. Otherwise, false is returned.
         */
        isFinite​() : boolean;
        /**
         * Checks whether the current RationalNumber object represents a Not-a-Number (NaN) value.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return If both the denominator and numerator are 0, true is returned. Otherwise, false is returned.
         */
        isNaN​(): boolean;
        /**
         * Checks whether the current RationalNumber object represents the value 0.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return If the value represented by the current object is 0, true is returned. Otherwise, false is returned.
         */
        isZero​(): boolean;
        /**
         * Obtains a string representation of the current RationalNumber object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns a string representation of the current RationalNumber object.
         */
        toString​(): string;
    }

    class LruBuffer {
        /**
         * Default constructor used to create a new LruBuffer instance with the default capacity of 64.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param capacity Indicates the capacity to customize for the buffer.
         */
        constructor(capacity?:number);
        /**
         * Updates the buffer capacity to a specified capacity.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param newCapacity Indicates the new capacity to set.
         */
        updateCapacity(newCapacity: number):void
        /**
         *Returns a string representation of the object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the string representation of the object and outputs the string representation of the object.
         */
        toString():string
        /**
         * Obtains a list of all values in the current buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the total number of values in the current buffer.
         */
        length:number
        /**
         * Obtains the capacity of the current buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the capacity of the current buffer.
         */
        getCapacity(): number;
        /**
         * Clears key-value pairs from the current buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        clear(): void;
        /**
         * Obtains the number of times createDefault(Object) returned a value.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the number of times createDefault(java.lang.Object) returned a value.
         */
        getCreateCount(): number;
        /**
         * Obtains the number of times that the queried values are not matched.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the number of times that the queried values are not matched.
         */
        getMissCount(): number;
        /**
         * Obtains the number of times that values are evicted from the buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the number of times that values are evicted from the buffer.
         */
        getRemovalCount(): number;
        /**
         * Obtains the number of times that the queried values are successfully matched.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the number of times that the queried values are successfully matched.
         */
        getMatchCount(): number;
        /**
         * Obtains the number of times that values are added to the buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the number of times that values are added to the buffer.
         */
        getPutCount(): number;
        /**
         * Checks whether the current buffer is empty.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns true if the current buffer contains no value.
         */
        isEmpty​(): boolean;
        /**
         * Obtains the value associated with a specified key.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param key Indicates the key to query.
         * @return Returns the value associated with the key if the specified key is present in the buffer; returns null otherwise.
         */
        get(key: K): V | undefined;
        /**
         * Adds a key-value pair to the buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param key Indicates the key to add.
         * @param value Indicates the value associated with the key to add.
         * @return Returns the value associated with the added key; returns the original value if the key to add already exists.
         */
        put(key: K, value: V): V;
        /**
         * Obtains a list of all values in the current buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the list of all values in the current buffer in ascending order, from the most recently accessed to least recently accessed.
         */
        values(): V[];
        /**
         * Obtains a list of keys for the values in the current buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns a list of keys sorted from most recently accessed to least recently accessed.
         */
        keys​(): K[];
        /**
         * Deletes a specified key and its associated value from the current buffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param key Indicates the key to delete.
         * @return Returns an Optional object containing the deleted key-value pair; returns an empty Optional object if the key does not exist.
         */
        remove(key: K): V | undefined;
        /**
         * Executes subsequent operations after a value is deleted.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param isEvict The parameter value is true if this method is called due to insufficient capacity, and the parameter value is false in other cases.
         * @param key Indicates the deleted key.
         * @param value Indicates the deleted value.
         * @param newValue The parameter value is the new value associated if the put(java.lang.Object,java.lang.Object) method is called and the key to add already exists. The parameter value is null in other cases.
         */
        afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;
        /**
         * Checks whether the current buffer contains a specified key.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param key Indicates the key to check.
         * @return Returns true if the buffer contains the specified key.
         */
        contains​(key: K): boolean;
        /**
         * Executes subsequent operations if miss to compute a value for the specific key.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param key Indicates the missed key.
         * @return Returns the value associated with the key.
         */
        createDefault​(key: K): V;
        /**
         * Returns an array of key-value pairs of enumeratable properties of a given object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns an array of key-value pairs for the enumeratable properties of the given object itself.
         */
        entries(): IterableIterator<[K, V]>;
        /**
         * Specifies the default iterator for an object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns a two - dimensional array in the form of key - value pairs.
         */
        [Symbol.iterator](): IterableIterator<[K, V]>;
    }
    interface ScopeComparable {
        /* The comparison function is used by the scope. */
        compareTo(other: ScopeComparable): boolean;
    }

    type ScopeType = ScopeComparable | number;

    class Scope{
        /**
         * A constructor used to create a Scope instance with the lower and upper bounds specified.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param lowerObj A ScopeType value
         * @param upperObj A ScopeType value
         */
        constructor(lowerObj: ScopeType, upperObj: ScopeType);
        /**
         * Obtains a string representation of the current range.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns a string representation of the current range object.
         */
        toString​(): string;
        /**
         * Returns the intersection of a given range and the current range.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param range A Scope range object
         * @return Returns the intersection of a given range and the current range.
         */
        intersect(range: Scope): Scope;
        /**
         * Returns the intersection of the current range and the range specified by the given lower and upper bounds.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param lowerObj A ScopeType value
         * @param upperObj A ScopeType value
         * @return Returns the intersection of the current range and the range specified by the given lower and upper bounds.
         */
        intersect(lowerObj: ScopeType, upperObj: ScopeType): Scope;
        /**
         * Obtains the upper bound of the current range.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the upper bound of the current range.
         */
        getUpper(): ScopeType;
        /**
         * Obtains the lower bound of the current range.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the lower bound of the current range.
         */
        getLower(): ScopeType;
        /**
         * Creates the smallest range that includes the current range and the given lower and upper bounds.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param lowerObj A ScopeType value
         * @param upperObj A ScopeType value
         * @return Returns the smallest range that includes the current range and the given lower and upper bounds.
         */
        expand(lowerObj: ScopeType, upperObj: ScopeType): Scope;
        /**
         * Creates the smallest range that includes the current range and a given range.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param range A Scope range object
         * @return Returns the smallest range that includes the current range and a given range.
         */
        expand(range: Scope): Scope;
        /**
         * Creates the smallest range that includes the current range and a given value.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A ScopeType value
         * @return Returns the smallest range that includes the current range and a given value.
         */
        expand(value: ScopeType): Scope;
        /**
         * Checks whether a given value is within the current range.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param range A ScopeType range
         * @return If the value is within the current range return true,otherwise return false.
         */
        contains(value: ScopeType): boolean;
        /**
         * Checks whether a given range is within the current range.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Scope value
         * @return If the current range is within the given range return true,otherwise return false.
         */
        contains(range: Scope): boolean;
        /**
         * Clamps a given value to the current range.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A ScopeType value
         * @return Returns a ScopeType object that a given value is clamped to the current range..
         */
        clamp(value: ScopeType): ScopeType;
    }

    class Base64{
        /**
         * Constructor for creating base64 encoding and decoding
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param No input parameter is required.
         * @return No return value.
         */
        constructor();
        /**
         * Encodes all bytes from the specified u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint8Array value
         * @return Return the encoded new Uint8Array.
         */
        encodeSync(src: Uint8Array): Uint8Array;
        /**
         * Encodes the specified byte array into a String using the Base64 encoding scheme.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint8Array value
         * @return Return the encoded string.
         */
        encodeToStringSync(src: Uint8Array): string;
        /**
         * Decodes a Base64 encoded String or input u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint8Array value or value A string value
         * @return Return the decoded Uint8Array.
         */
        decodeSync(src: Uint8Array | string): Uint8Array;
        /**
         * Asynchronously encodes all bytes in the specified u8 array into the newly allocated u8 array using the Base64 encoding scheme.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint8Array value
         * @return Return the encodes asynchronous new Uint8Array.
         */
        encode(src: Uint8Array): Promise<Uint8Array>;
        /**
         * Asynchronously encodes the specified byte array into a String using the Base64 encoding scheme.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint8Array value
         * @return Returns the encoded asynchronous string.
         */
         encodeToString(src: Uint8Array): Promise<string>;
        /**
         * Use the Base64 encoding scheme to asynchronously decode a Base64-encoded string or input u8 array into a newly allocated u8 array.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint8Array value or value A string value
         * @return Return the decoded asynchronous Uint8Array.
         */
        decode(src: Uint8Array | string): Promise<Uint8Array>;
    }

    class types{
        /**
         * The types constructor
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param No input parameter is required.
         * @return No return value.
         */
        constructor();
        /**
         * Check whether the entered value is of arraybuffer or sharedarraybuffer type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A ArrayBuffer or SharedArrayBuffer value
         * @Returns true if the value is a built-in ArrayBuffer or SharedArrayBuffer instance..
         */
        isAnyArrayBuffer(value: Object): boolean;
        /**
         * Check whether the type is included in the isAnyArrayBuffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A included in the isAnyArrayBuffer value
         * @return Returns true if the value is an instance of one of the ArrayBuffer views, such as typed array objects or DataView. Equivalent to ArrayBuffer.isView().
         */
        isArrayBufferView(value: Object): boolean;
        /**
         * Check whether the entered value is an arguments object type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A arguments value
         * @return Returns true if the value is an arguments object.
         */
        isArgumentsObject(value: Object): boolean;
        /**
         * Check whether the entered value is of arraybuffer type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A arraybuffer value
         * @return Returns true if the value is a built-in ArrayBuffer instance. This does not include SharedArrayBuffer instances. Usually, it is desirable to test for both; See isAnyArrayBuffer() for that.
         */
        isArrayBuffer(value: Object): boolean;
        /**
         * Check whether the value entered is an asynchronous function type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A async function value
         * @return Returns true if the value is an async function. This only reports back what the JavaScript engine is seeing; in particular, the return value may not match the original source code if a transpilation tool was used.
         */
        isAsyncFunction(value: Object): boolean;
        /**
         * Check whether the entered value is of bigint64array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A BigInt64Array value
         * @return Returns true if the value is a BigInt64Array instance.
         */
        isBigInt64Array(value: Object): boolean;
        /**
         * Check whether the entered value is of biguint64array array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A BigUint64Array value
         * @return Returns true if the value is a BigUint64Array instance.
         */
        isBigUint64Array(value: Object): boolean;
        /**
         * Check whether the entered value is a Boolean object type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A boolean object value
         * @return Returns true if the value is a boolean object, e.g. created by new Boolean().
         */
        isBooleanObject(value: Object): boolean;
        /**
         * Check whether the entered value is a Boolean or number or string or symbol object type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A boxed primitive object value
         * @return Returns true if the value is any boxed primitive object, e.g. created by new Boolean(), new String() or Object(Symbol()).
         */
        isBoxedPrimitive(value: Object): boolean;
        /**
         * Check whether the entered value is of DataView type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A DataView value
         * @return Returns true if the value is a built-in DataView instance.
         */
        isDataView(value: Object): boolean;
        /**
         * Check whether the entered value is of type date.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Date value
         * @return Returns true if the value is a built-in Date instance.
         */
        isDate(value: Object): boolean;
        /**
         * Check whether the entered value is a native external value type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A External value
         * @return Returns true if the value is a native External value.
         */
        isExternal(value: Object): boolean;
        /**
         * Check whether the entered value is of float32array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Float32Array value
         * @return Returns true if the value is a built-in Float32Array instance.
         */
        isFloat32Array(value: Object): boolean;
        /**
         * Check whether the entered value is of float64array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Float64Array value
         * @return Returns true if the value is a built-in Float64Array instance.
         */
        isFloat64Array(value: Object): boolean;
        /**
         * Check whether the input value is a generator function type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A generator function value
         * @return Returns true if the value is a generator function. This only reports back what the JavaScript engine is seeing; in particular, the return value may not match the original source code if a transpilation tool was used.
         */
        isGeneratorFunction(value: Object): boolean;
        /**
         * Check whether the entered value is a generator object type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A generator object value
         * @return Returns true if the value is a generator object as returned from a built-in generator function. This only reports back what the JavaScript engine is seeing; in particular, the return value may not match the original source code if a transpilation tool was used.
         */
        isGeneratorObject(value: Object): boolean;
        /**
         * Check whether the entered value is of int8array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Int8Array value
         * @return Returns true if the value is a built-in Int8Array instance.
         */
        isInt8Array(value: Object): boolean;
        /**
         * Check whether the entered value is the int16array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Int16Array value
         * @return Returns true if the value is a built-in Int16Array instance.
         */
        isInt16Array(value: Object): boolean;
        /**
         * Check whether the entered value is the int32array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Int32Array value
         * @return Returns true if the value is a built-in Int32Array instance.
         */
        isInt32Array(value: Object): boolean;
        /**
         * Check whether the entered value is of map type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Map value
         * @return Returns true if the value is a built-in Map instance.
         */
        isMap(value: Object): boolean;
        /**
         * Check whether the entered value is the iterator type of map.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Map iterator value
         * @return Returns true if the value is an iterator returned for a built-in Map instance.
         */
        isMapIterator(value: Object): boolean;
        /**
         * Check whether the entered value is the module namespace object object type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Module Namespace Object value
         * @return Returns true if the value is an instance of a Module Namespace Object.
         */
        isModuleNamespaceObject(value: Object): boolean;
        /**
         * Check whether the value entered is of type error.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Error value
         * @return Returns true if the value is an instance of a built-in Error type.
         */
        isNativeError(value: Object): boolean;
        /**
         * Check whether the entered value is of the number object type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A number object value
         * @return Returns true if the value is a number object, e.g. created by new Number().
         */
        isNumberObject(value: Object): boolean;
        /**
         * Check whether the entered value is of promise type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Promise value
         * @return Returns true if the value is a built-in Promise.
         */
        isPromise(value: Object): boolean;
        /**
         * Check whether the value entered is of proxy type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Proxy value
         * @return Returns true if the value is a Proxy instance.
         */
        isProxy(value: Object): boolean;
        /**
         * Check whether the entered value is of type regexp.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A regular expression object value
         * @return Returns true if the value is a regular expression object.
         */
        isRegExp(value: Object): boolean;
        /**
         * Check whether the entered value is of type set.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Set instance value
         * @return Returns true if the value is a built-in Set instance.
         */
        isSet(value: Object): boolean;
        /**
         * Check whether the entered value is the iterator type of set.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Set iterator value
         * @return Returns true if the value is an iterator returned for a built-in Set instance.
         */
        isSetIterator(value: Object): boolean;
        /**
         * Check whether the entered value is of type sharedarraybuffer.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A SharedArrayBuffer instance value
         * @return Returns true if the value is a built-in SharedArrayBuffer instance. This does not include ArrayBuffer instances. Usually, it is desirable to test for both; See isAnyArrayBuffer() for that.
         */
        isSharedArrayBuffer(value: Object): boolean;
        /**
         * Check whether the entered value is a string object type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A String object value
         * @return Returns true if the value is a string object, e.g. created by new String().
         */
        isStringObject(value: Object): boolean;
        /**
         * Check whether the entered value is a symbol object type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A symbol object value
         * @return Returns true if the value is a symbol object, created by calling Object() on a Symbol primitive.
         */
        isSymbolObject(value: Object): boolean;
        /**
         * Check whether the entered value is a type contained in typedarray.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A TypedArray instance value
         * @return Returns true if the value is a built-in TypedArray instance.
         */
        isTypedArray(value: Object): boolean;
        /**
         * Check whether the entered value is the uint8array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint8Array value
         * @return Returns true if the value is a built-in Uint8Array instance.
         */
        isUint8Array(value: Object): boolean;
        /**
         * Check whether the entered value is the uint8clapedarray array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint8ClampedArray value
         * @return Returns true if the value is a built-in Uint8ClampedArray instance.
         */
        isUint8ClampedArray(value: Object): boolean;
        /**
         * Check whether the entered value is the uint16array array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint16Array value
         * @return Returns true if the value is a built-in Uint16Array instance.
         */
        isUint16Array(value: Object): boolean;
        /**
         * Check whether the entered value is the uint32array array type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A Uint32Array value
         * @return Returns true if the value is a built-in Uint32Array instance.
         */
        isUint32Array(value: Object): boolean;
        /**
         * Check whether the entered value is of type weakmap.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A WeakMap value
         * @return Returns true if the value is a built-in WeakMap instance.
         */
        isWeakMap(value: Object): boolean;
        /**
         * Check whether the entered value is of type weakset.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param value A WeakSet value
         * @return Returns true if the value is a built-in WeakSet instance.
         */
        isWeakSet(value: Object): boolean;
    }
}
export default util;