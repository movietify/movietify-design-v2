(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id=\"page5\">\n  <div  style=\"background:url(assets/imgs/bg.png) no-repeat center;background-size:cover; height: 100%\">\n    <div class=\"spacer\" style=\"height:100px;\" id=\"login-spacer1\"></div>\n    <form id=\"signup-form5\">\n      <div id=\"signup-container3\">\n        <img src=\"assets/imgs/logo.png\" style=\"display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;\" />\n        <div id=\"signup-markdown10\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\n          <span style=\"color:#FFFFFF;font-size:20px;\">\n            Movietify\n          </span>\n        </div>\n      </div>\n      <div class=\"spacer\" style=\"height:40px;\" id=\"login-spacer1\"></div>\n      <ion-list id=\"signup-list12\" style=\"background-color: transparent\">\n        <ion-item id=\"signup-input4\">\n          <ion-input type=\"text\" [(ngModel)]=\"registerModel.username\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Kullanıcı Adı\" style=\"background-color: none\"></ion-input>\n        </ion-item>\n        <ion-item id=\"signup-input5\">\n          <ion-input type=\"email\" [(ngModel)]=\"registerModel.email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\" style=\"background-color: none\"></ion-input>\n        </ion-item>\n        <ion-item id=\"signup-input6\">\n          <ion-input type=\"password\" [(ngModel)]=\"registerModel.password\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Şifre\" style=\"background-color: none\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button id=\"signup-button3\" style=\"border-radius: 50px 50px 50px 50px;width: 95%;height: 45px;background-color: #fe3232;margin: 20px auto;color: white;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: large;\" (click)=\"createUser(registerModel.username, registerModel.email, registerModel.password)\">\n        Kayıt Ol\n      </button>\n    </form>\n    <button id=\"signup-button4\" style=\"background: none;color: white;display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100%;margin-top: 100px;\n    font-size: larger;\" (click)=\"goToLogin()\">\n      Hesabınız var mı? Giriş Yapın\n    </button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/user */ "./src/app/entities/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'secret'
    })
};
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.registerModel = new _entities_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.users = [];
    }
    RegisterPage.prototype.sendPostRequest = function (registerModel) {
        return this.httpClient.post("http://localhost:3000/auth/signup/", registerModel, httpOptions);
    };
    RegisterPage.prototype.createUser = function (username, email, password) {
        var _this = this;
        this.registerModel.username = username;
        this.registerModel.email = email;
        this.registerModel.password = password;
        if (this.registerModel.username != '' && this.registerModel.password != '' && this.registerModel.email != '') {
            this.sendPostRequest(this.registerModel)
                .subscribe(function (user) { return _this.users.push(user); });
            console.log(this.users);
            this.navCtrl.navigateForward('home');
        }
        else {
        }
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.navigateForward('login');
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map