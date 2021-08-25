"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(as, us, router) {
        this.as = as;
        this.us = us;
        this.router = router;
        this.errorMessage = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (form) {
        var _this = this;
        var data = form.value;
        this.as.signup(data.email, data.password)
            .then(function (result) {
            _this.errorMessage = '';
            _this.us.addNewUser(result.user.uid, data.name, data.addres, data.password, data.email)
                .then(function () { return _this.router.navigate(['/']); });
        })["catch"](function (err) {
            _this.errorMessage = err.message;
            console.log("signup errrrorrrr by me", err);
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
// result.user.uid too tell him get the id from firebase 
// err.message too tell him to print the error massage
