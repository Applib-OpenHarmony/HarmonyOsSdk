"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.compileNumericLiteral = exports.isInteger = void 0;
var vregisterCache_1 = require("../base/vregisterCache");
var jshelpers = __importStar(require("../jshelpers"));
var MAX_INT = Math.pow(2, 31) - 1;
function isInteger(value) {
    if (!Number.isSafeInteger(value)) {
        return false;
    }
    if (value > MAX_INT) {
        return false;
    }
    return true;
}
exports.isInteger = isInteger;
function compileNumericLiteral(pandaGen, lit) {
    var text = jshelpers.getTextOfIdentifierOrLiteral(lit);
    var value = Number.parseFloat(text);
    // check whether value is a NaN
    if (Number.isNaN(value)) {
        pandaGen.loadAccumulator(lit, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.NaN));
    }
    else if (!Number.isFinite(value)) {
        // check whether value is a Infinity
        pandaGen.loadAccumulator(lit, vregisterCache_1.getVregisterCache(pandaGen, vregisterCache_1.CacheList.Infinity));
    }
    else if (isInteger(value)) {
        // check whether value is a SafeInteger
        pandaGen.loadAccumulatorInt(lit, value);
    }
    else {
        pandaGen.loadAccumulatorFloat(lit, value);
    }
}
exports.compileNumericLiteral = compileNumericLiteral;
//# sourceMappingURL=numericLiteral.js.map