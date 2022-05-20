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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.GlobalVariable = exports.LocalVariable = exports.Variable = exports.VarDeclarationKind = void 0;
var scope_1 = require("./scope");
var VarDeclarationKind;
(function (VarDeclarationKind) {
    VarDeclarationKind[VarDeclarationKind["NONE"] = 0] = "NONE";
    VarDeclarationKind[VarDeclarationKind["LET"] = 1] = "LET";
    VarDeclarationKind[VarDeclarationKind["CONST"] = 2] = "CONST";
    VarDeclarationKind[VarDeclarationKind["VAR"] = 3] = "VAR";
    VarDeclarationKind[VarDeclarationKind["FUNCTION"] = 4] = "FUNCTION";
    VarDeclarationKind[VarDeclarationKind["MODULE"] = 5] = "MODULE";
    VarDeclarationKind[VarDeclarationKind["CLASS"] = 6] = "CLASS";
})(VarDeclarationKind = exports.VarDeclarationKind || (exports.VarDeclarationKind = {}));
var Variable = /** @class */ (function () {
    function Variable(declKind, name) {
        this.declKind = declKind;
        this.isLexVar = false;
        this.idxLex = 0;
        this.name = name;
        this.vreg = undefined;
        this.name = name;
    }
    Variable.prototype.bindVreg = function (vreg) {
        this.vreg = vreg;
    };
    Variable.prototype.hasAlreadyBinded = function () {
        return this.vreg !== undefined;
    };
    Variable.prototype.getVreg = function () {
        if (!this.vreg) {
            throw new Error("variable has not been binded");
        }
        return this.vreg;
    };
    Variable.prototype.getName = function () {
        return this.name;
    };
    Variable.prototype.setLexVar = function (scope) {
        this.idxLex = scope.getLexVarIdx();
        scope.pendingCreateEnv();
        this.isLexVar = true;
    };
    Variable.prototype.clearLexVar = function () {
        this.isLexVar = false;
        this.idxLex = 0;
    };
    Variable.prototype.isLet = function () {
        return this.declKind == VarDeclarationKind.LET;
    };
    Variable.prototype.isConst = function () {
        return this.declKind == VarDeclarationKind.CONST;
    };
    Variable.prototype.isLetOrConst = function () {
        return this.declKind == VarDeclarationKind.LET || this.declKind == VarDeclarationKind.CONST;
    };
    Variable.prototype.isVar = function () {
        return this.declKind == VarDeclarationKind.VAR;
    };
    Variable.prototype.isNone = function () {
        return this.declKind == VarDeclarationKind.NONE;
    };
    Variable.prototype.isClass = function () {
        return this.declKind == VarDeclarationKind.CLASS;
    };
    return Variable;
}());
exports.Variable = Variable;
var LocalVariable = /** @class */ (function (_super) {
    __extends(LocalVariable, _super);
    function LocalVariable(declKind, name, status) {
        var _this = _super.call(this, declKind, name) || this;
        _this.isExport = false;
        _this.exportedName = "";
        _this.status = status ? status : null;
        return _this;
    }
    LocalVariable.prototype.initialize = function () {
        this.status = scope_1.InitStatus.INITIALIZED;
    };
    LocalVariable.prototype.isInitialized = function () {
        if (this.status != null) {
            return this.status == scope_1.InitStatus.INITIALIZED;
        }
        return true;
    };
    LocalVariable.prototype.setExport = function () {
        this.isExport = true;
    };
    LocalVariable.prototype.isExportVar = function () {
        return this.isExport;
    };
    LocalVariable.prototype.setExportedName = function (name) {
        this.exportedName = name;
    };
    LocalVariable.prototype.getExportedName = function () {
        if (!this.exportedName) {
            throw new Error("Exported Variable " + this.getName() + " doesn't have exported name");
        }
        return this.exportedName;
    };
    return LocalVariable;
}(Variable));
exports.LocalVariable = LocalVariable;
var GlobalVariable = /** @class */ (function (_super) {
    __extends(GlobalVariable, _super);
    function GlobalVariable(declKind, name) {
        return _super.call(this, declKind, name) || this;
    }
    return GlobalVariable;
}(Variable));
exports.GlobalVariable = GlobalVariable;
//# sourceMappingURL=variable.js.map