(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-detail-movie-detail-module"],{

/***/ "./src/app/movie-detail/movie-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: MovieDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPageModule", function() { return MovieDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _movie_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-detail.page */ "./src/app/movie-detail/movie-detail.page.ts");







var routes = [
    {
        path: '',
        component: _movie_detail_page__WEBPACK_IMPORTED_MODULE_6__["MovieDetailPage"]
    }
];
var MovieDetailPageModule = /** @class */ (function () {
    function MovieDetailPageModule() {
    }
    MovieDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_movie_detail_page__WEBPACK_IMPORTED_MODULE_6__["MovieDetailPage"]]
        })
    ], MovieDetailPageModule);
    return MovieDetailPageModule;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.page.html":
/*!*****************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Film Detay</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"movie\" *ngFor=\"let detail of details | async\">\n\n      <div ng-app=\"\" ng-init=\"detail\">\n\n        <div class=\"movie-group\">\n          <img class=\"moviePhoto\" [attr.src]=\"detail.cover\" width=\"150px\" height=\"215px\"/>\n\n          <div class=\"movie-info\">\n            <div class=\"movie-info-header\">\n              <div class=\"title-group\">\n                <span><b> {{ detail.title }} </b></span>\n                <span class=\"imdb\">\n                  <img src=\"/assets/imgs/star.png\" height=\"24\" width=\"24\" style=\"margin-top: 7px;\">\n                  <p class=\"white\"> {{ detail.imdb }} </p>\n                </span>\n              </div>\n              <div class=\"bookmark\">\n                <img src=\"/assets/imgs/yellow-plus.png\">\n              </div>\n            </div>\n            \n            <div class=\"movie-info-content\">\n              <span class=\"other\">\n                 <p> {{ detail.minute }} | {{ detail.year }} | {{ detail.genre }} </p>\n              </span>\n              <p></p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"summary\">\n          <h4 class=\"white\">Özet</h4>\n          <span> {{ detail.summary }}\n          </span>\n        </div>\n\n        <div class=\"trailer\">\n          <video height=\"320\" width=\"100%\" controls>\n            <source [attr.src]=\"detail.video\" type=\"video/mp4\">\n          </video>\n        </div>\n      </div>\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie {\n  height: 100%;\n  color: #d6d6d6;\n  background-color: #202020;\n  overflow-y: scroll; }\n\n.movie-group {\n  height: 230px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n.movie-info {\n  height: 215px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.movie-info-content {\n  height: 150px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.movie-info-content p {\n  text-align: justify;\n  margin-top: 0px; }\n\n.movie-info-header {\n  height: 50px;\n  width: 250px;\n  display: flex;\n  justify-content: space-between; }\n\n.title-group {\n  height: 50px;\n  width: 250px; }\n\n.title-group p {\n  font-weight: bold; }\n\n.imdb {\n  height: 25px;\n  width: 150px;\n  display: flex;\n  justify-content: flex-start; }\n\n.imdb p {\n  margin-left: 5px; }\n\n.bookmark {\n  height: 50px;\n  width: 50px; }\n\n.summary {\n  width: 100%;\n  padding: 5px;\n  text-align: justify; }\n\n.trailer {\n  height: 320px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL0Q6XFxQcm9qZWN0c1xcTW92aWV0aWZ5LXYyXFxtb3ZpZXRpZnktZGVzaWduLXYyL3NyY1xcYXBwXFxtb3ZpZS1kZXRhaWxcXG1vdmllLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDQyxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFHeEI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUdqQjtFQUNDLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2I7RUFDQyxpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFHNUI7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdaO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHcEI7RUFDQyxhQUFhO0VBQ2IsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWV7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNkNmQ2ZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLm1vdmllLWdyb3VwIHtcblx0aGVpZ2h0OiAyMzBweDtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW92aWUtaW5mbyB7XG5cdGhlaWdodDogMjE1cHg7XG5cdHdpZHRoOiAyNTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubW92aWUtaW5mby1jb250ZW50IHtcblx0aGVpZ2h0OiAxNTBweDtcblx0d2lkdGg6IDI1MHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vdmllLWluZm8tY29udGVudCBwIHsgXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm1vdmllLWluZm8taGVhZGVyIHtcblx0aGVpZ2h0OiA1MHB4O1xuXHR3aWR0aDogMjUwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRpdGxlLWdyb3VwIHtcblx0aGVpZ2h0OiA1MHB4O1xuXHR3aWR0aDogMjUwcHg7XG59XG5cbi50aXRsZS1ncm91cCBwIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbWRiIHtcblx0aGVpZ2h0OiAyNXB4O1xuXHR3aWR0aDogMTUwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmltZGIgcCB7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7IFxufVxuXG4uYm9va21hcmsge1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiA1MHB4O1xufVxuXG4uc3VtbWFyeSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiA1cHg7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50cmFpbGVyIHtcblx0aGVpZ2h0OiAzMjBweDtcblx0d2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.page.ts ***!
  \***************************************************/
/*! exports provided: MovieDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPage", function() { return MovieDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MovieDetailPage = /** @class */ (function () {
    function MovieDetailPage(route, http) {
        this.route = route;
        this.http = http;
        this.id = "";
        this.ROOT_URL = "http://localhost:3000/movie/details/";
    }
    MovieDetailPage.prototype.getDetails = function () {
        this.details = this.http.get(this.ROOT_URL);
    };
    MovieDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.ROOT_URL += this.id;
        this.getDetails();
    };
    MovieDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.page.html */ "./src/app/movie-detail/movie-detail.page.html"),
            styles: [__webpack_require__(/*! ./movie-detail.page.scss */ "./src/app/movie-detail/movie-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MovieDetailPage);
    return MovieDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=movie-detail-movie-detail-module.js.map