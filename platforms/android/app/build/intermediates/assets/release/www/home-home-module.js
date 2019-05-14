(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Anasayfa\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"movie\" *ngFor=\"let movie of movies | async\">\n    <div ng-app=\"\" ng-init=\"movie\">\n\n         <div class=\"movie-group\" >\n\n          <img class=\"moviePhoto\" (click)=\"goDetail(movie._id)\" [attr.src]=\"movie.cover\" width=\"150px\" height=\"215px\"/>\n\n          <div class=\"movie-info\">\n            <div class=\"movie-info-header\">\n              <div class=\"title-group\">\n               <b> {{ movie.title }} </b>\n                <span class=\"imdb\">\n                  <img src=\"/assets/imgs/star.png\" height=\"24\" width=\"24\" style=\"margin-top: 7px;\">\n                  <p class=\"white\"> {{ movie.imdb }} </p>\n                </span>\n              </div>\n              <div class=\"bookmark\">\n                <img src=\"/assets/imgs/yellow-plus.png\" (click)=\"addlist()\">\n              </div>\n            </div>\n            \n            <div class=\"movie-info-content\">\n              <span class=\"other\">\n                <p> {{movie.minute}} | {{movie.year}} | {{movie.genre}}</p>\n              </span>\n              <p>{{ movie.summary.substring(0,250) }}...</p>\n            </div>\n          </div>\n        </div>\n\n    </div>\n  </div>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie {\n  height: 100%;\n  color: #d6d6d6;\n  background-color: #202020;\n  overflow-y: scroll; }\n\n.movie-group {\n  height: 230px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n.movie-info {\n  height: 215px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.movie-info-content {\n  height: 150px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.movie-info-content p {\n  text-align: justify;\n  margin-top: 0px; }\n\n.movie-info-header {\n  height: 50px;\n  width: 250px;\n  display: flex;\n  justify-content: space-between; }\n\n.title-group {\n  height: 50px;\n  width: 250px; }\n\n.title-group p {\n  font-weight: bold; }\n\n.imdb {\n  height: 25px;\n  width: 150px;\n  display: flex;\n  justify-content: flex-start; }\n\n.imdb p {\n  margin-left: 5px; }\n\n.bookmark {\n  height: 50px;\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJvamVjdHNcXE1vdmlldGlmeS12MlxcbW92aWV0aWZ5LWRlc2lnbi12Mi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDQyxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFHeEI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUdqQjtFQUNDLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2I7RUFDQyxpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFHNUI7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZXtcblx0aGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2Q2ZDZkNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubW92aWUtZ3JvdXAge1xuXHRoZWlnaHQ6IDIzMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb3ZpZS1pbmZvIHtcblx0aGVpZ2h0OiAyMTVweDtcblx0d2lkdGg6IDI1MHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tb3ZpZS1pbmZvLWNvbnRlbnQge1xuXHRoZWlnaHQ6IDE1MHB4O1xuXHR3aWR0aDogMjUwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW92aWUtaW5mby1jb250ZW50IHAgeyBcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubW92aWUtaW5mby1oZWFkZXIge1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiAyNTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGl0bGUtZ3JvdXAge1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiAyNTBweDtcbn1cblxuLnRpdGxlLWdyb3VwIHAge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZGIge1xuXHRoZWlnaHQ6IDI1cHg7XG5cdHdpZHRoOiAxNTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uaW1kYiBwIHtcblx0bWFyZ2luLWxlZnQ6IDVweDsgXG59XG5cbi5ib29rbWFyayB7XG5cdGhlaWdodDogNTBweDtcblx0d2lkdGg6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.ROOT_URL = "http://localhost:3000/movie/all";
    }
    HomePage.prototype.addlist = function () {
        console.log("hello");
    };
    HomePage.prototype.goDetail = function (id) {
        this.navCtrl.navigateForward('movie-detail/' + id);
    };
    HomePage.prototype.ngOnInit = function () {
        this.movies = this.http.get(this.ROOT_URL);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map