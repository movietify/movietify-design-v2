(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-content id=\"page6\">\n    <div style=\"background:url(assets/imgs/bg.png) no-repeat center;background-size:cover; height: 100%\">\n      <div class=\"spacer\" style=\"height:80px;\" id=\"hakkinda-spacer3\"></div>\n      <div id=\"hakkinda-container5\">\n        <img src=\"assets/imgs/logo.png\" style=\"display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;\" />\n        <div id=\"hakkinda-markdown11\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\n          <p style=\"color:#FFFFFF;font-size:20px;\">\n            Movietify\n          </p>\n        </div>\n      </div>\n      <div class=\"spacer\" style=\"width:300px;height:50px;\" id=\"hakkinda-spacer3\"></div>\n      <h4 id=\"hakkinda-heading5\" style=\"color:#FFFFFF;font-weight:400;font-style:italic;text-align:center;\">\n        Geliştiriciler\n      </h4>\n      <div class=\"spacer\" style=\"width:300px;height:18px;\" id=\"hakkinda-spacer5\"></div>\n      <div id=\"hakkinda-container6\">\n        <div id=\"hakkinda-markdown13\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\n          <p style=\"color:#FFFFFF;font-size:15px;\">\n            Hande Ebrar GÜNEŞDOĞDU\n          </p>\n        </div>\n        <div id=\"hakkinda-markdown14\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\n          <p style=\"color:#FFFFFF;font-size:15px;\">\n            Ahmet DURMUŞ\n          </p>\n        </div>\n      </div>\n      <div id=\"hakkinda-markdown15\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\n        <p style=\"color:#FFFFFF;font-size:15px;\">\n          Ender İMEN\n        </p>\n      </div>\n      <div id=\"hakkinda-markdown16\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\n        <p style=\"color:#FFFFFF;font-size:15px;\">\n          İsmail ENGİN\n        </p>\n      </div>\n      <div class=\"spacer\" style=\"width:300px;height:29px;\" id=\"hakkinda-spacer6\"></div>\n      <button id=\"hakkinda-button5\" style=\"font-size:20px;background: none;color: white;display: flex;flex-direction: column;align-items: center;justify-content: center;\n      width: 100%;\" (click)=\"goToHome()\">\n        Geri Dön\n      </button>\n      <div class=\"spacer\" style=\"height:60px;\" id=\"hakkinda-spacer6\"></div>\n      <p style=\"color:#FFFFFF;font-size:11px;text-align: center\">\n          Tüm Hakları Saklıdır. 2019 ©\n        </p>\n    </div>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.goToHome = function () {
        this.navCtrl.navigateForward('home');
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map