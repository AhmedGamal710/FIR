"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(fs) {
        this.fs = fs;
        this.userId = '';
        this.user = fs.user;
    }
    AuthService.prototype.signup = function (email, password) {
        return this.fs.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        return this.fs.auth.signOut();
    };
    AuthService.prototype.login = function (email, password) {
        return this.fs.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
