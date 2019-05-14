(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id=\"page4\">\n  <div style=\"background:url('/assets/imgs/bg.png') no-repeat center;background-size:cover;height: 100%; margin: 0;\">\n    <div class=\"spacer\" style=\"height:100px;\" id=\"login-spacer1\"></div>\n    <div id=\"login-container1\">\n      <img src=\"assets/imgs/logo.png\" style=\"display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;\" />\n      <div id=\"login-markdown1\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\n        <span style=\"color:#FFFFFF;font-size:20px;\">\n          Movietify\n        </span>\n      </div>\n    </div>\n    <div class=\"spacer\" style=\"height:40px;\" id=\"login-spacer1\"></div>\n    <form id=\"login-form1\">\n      <ion-list id=\"login-list2\" style=\"background-color: transparent\">\n        <ion-item id=\"login-input1\">\n          <ion-input type=\"text\" [(ngModel)]=\"loginModel.username\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Kullanıcı Adı\" style=\"background-color: none\"></ion-input>\n        </ion-item>\n        <ion-item id=\"login-input2\">\n          <ion-input type=\"password\" [(ngModel)]=\"loginModel.password\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Şifre\" style=\"background-color: none\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button id=\"login-button1\" style=\"border-radius: 50px 50px 50px 50px;width: 95%;height: 45px;background-color: #fe3232;margin: 20px auto;color: white;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: large;\" (click)=\"loginThisUser(loginModel.username, loginModel.password)\">\n        Giriş Yap\n      </button>\n      <hr>\n      <button id=\"login-button2\" style=\"background: none;color: white;display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100%;margin-top: 100px;\n      font-size: larger;\" (click)=\"goToRegister()\">\n        Hesabınız yok mu? Kayıt Olun\n      </button>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
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
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, navCtrl, httpClient) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.loginModel = new _entities_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.user = [];
    }
    LoginPage.prototype.sendPostRequest = function (loginModel) {
        return this.httpClient.post("http://localhost:3000/auth/signin/", loginModel, httpOptions);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginThisUser = function (username, password) {
        var _this = this;
        this.loginModel.username = username;
        this.loginModel.password = password;
        console.log(this.loginModel);
        if (this.loginModel.username != '' && this.loginModel.password != '') {
            this.sendPostRequest(this.loginModel)
                .subscribe(function (user) { return _this.user.push(user); });
            console.log(this.user['username']);
            this.navCtrl.navigateForward('home');
        }
        else {
        }
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.navigateForward('register');
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map