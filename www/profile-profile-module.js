(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Profil\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n      <div class=\"movie\" style=\"background:url('/assets/imgs/user-profile-bg.jpg') no-repeat center;background-size:cover;height: 100%;\">\n        <div class=\"crown\">\n          <img src=\"/assets/imgs/crown.png\" alt=\"\" height=\"32\" width=\"42\">\n          <span class=\"white\">18</span>\n        </div>\n        \n        <div class=\"profile-info\">\n          <span><img src=\"/assets/imgs/ahmedo.jpg\" height=\"100\" width=\"100\"></span>\n  \n          <h3 class=\"white\">Ahmet Durmuş</h3>\n          <p class=\"country\"><i>Konya, Turkiye</i></p>\n          <hr class=\"line\">\n        </div>\n  \n        <h4 style=\"margin-left: 10px;\">Listelerim</h4>\n  \n        <div class=\"lists\">\n          <div class=\"movielist\">\n            <p style=\"margin-left:20px;\">Beğendiklerim</p>\n            <div class=\"list-group\">\n              <span>18 adet</span>\n              <img src=\"/assets/imgs/remove-movie.png\" height=\"50\" width=\"50\">\n            </div>\n          </div>\n  \n          <div class=\"movielist\">\n            <p style=\"margin-left:20px;\">Beğendiklerim</p>\n            <div class=\"list-group\">\n              <span>18 adet</span>\n              <img src=\"/assets/imgs/remove-movie.png\" height=\"50\" width=\"50\">\n            </div>\n          </div>\n  \n          <div class=\"movielist\">\n            <p style=\"margin-left:20px;\">Beğendiklerim</p>\n            <div class=\"list-group\">\n              <span>18 adet</span>\n              <img src=\"/assets/imgs/remove-movie.png\" height=\"50\" width=\"50\">\n            </div>\n          </div>\n  \n          <div class=\"movielist\">\n            <p style=\"margin-left:20px;\">Beğendiklerim</p>\n            <div class=\"list-group\">\n              <span>18 adet</span>\n              <img src=\"/assets/imgs/remove-movie.png\" height=\"50\" width=\"50\">\n            </div>\n          </div>\n  \n          <div class=\"movielist\">\n            <p style=\"margin-left:20px;\">Beğendiklerim</p>\n            <div class=\"list-group\">\n              <span>18 adet</span>\n              <img src=\"/assets/imgs/remove-movie.png\" height=\"50\" width=\"50\">\n            </div>\n          </div>\n          <div class=\"create-list-button\" onclick=\"listAddPopup()\">+</div>\n        </div>  \n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie {\n  height: 100%;\n  color: #d6d6d6;\n  overflow-y: scroll; }\n\n.crown {\n  height: 50px;\n  width: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  float: right;\n  margin: 15px 15px 0 0; }\n\n.profile-info {\n  margin: 90px auto;\n  height: 100px;\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white; }\n\n.profile-info span {\n  height: 100px;\n  width: 100px; }\n\n.profile-info img {\n  border-radius: 50px;\n  border: 3px solid gray; }\n\n.country {\n  margin-top: -10px;\n  font-style: italic; }\n\n.lists {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.movielist {\n  color: #d6d6d6;\n  height: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  border-bottom-style: solid;\n  border-bottom-color: gray;\n  border-bottom-width: .5px;\n  line-height: 50px;\n  position: relative; }\n\n.list-group {\n  height: 50px;\n  width: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.create-list-button {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  color: white;\n  background: #fa4f4f;\n  line-height: 50px;\n  text-align: center;\n  font-size: 24px;\n  position: fixed;\n  bottom: 50px;\n  left: 340px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcUHJvamVjdHNcXE1vdmlldGlmeS12MlxcbW92aWV0aWZ5LWRlc2lnbi12Mi9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1gsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNDLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHdEI7RUFDQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdiO0VBQ0MsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHYjtFQUNDLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFHdkI7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3ZCO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmlle1xuXHRoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZDZkNmQ2O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jcm93biB7XG5cdGhlaWdodDogNTBweDtcblx0d2lkdGg6IDUwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbG9hdDogcmlnaHQ7XG5cdG1hcmdpbjogMTVweCAxNXB4IDAgMDtcbn1cblxuLnByb2ZpbGUtaW5mbyB7XG5cdG1hcmdpbjogOTBweCBhdXRvOyBcblx0aGVpZ2h0OiAxMDBweDtcblx0d2lkdGg6IDIwMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4ucHJvZmlsZS1pbmZvIHNwYW4ge1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHR3aWR0aDogMTAwcHg7XG59XG5cbi5wcm9maWxlLWluZm8gaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0Ym9yZGVyOiAzcHggc29saWQgZ3JheTtcbn1cblxuLmNvdW50cnkge1xuXHRtYXJnaW4tdG9wOiAtMTBweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubGlzdHMge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubW92aWVsaXN0IHtcblx0Y29sb3I6ICNkNmQ2ZDY7XG5cdGhlaWdodDogNTBweDtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdGJvcmRlci1ib3R0b20tY29sb3I6IGdyYXk7XG5cdGJvcmRlci1ib3R0b20td2lkdGg6IC41cHg7XG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saXN0LWdyb3VwIHtcblx0aGVpZ2h0OiA1MHB4O1xuXHR3aWR0aDogMTMwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3JlYXRlLWxpc3QtYnV0dG9uIHtcblx0aGVpZ2h0OiA1MHB4O1xuXHR3aWR0aDogNTBweDtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiAjZmE0ZjRmO1xuXHRsaW5lLWhlaWdodDogNTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDI0cHg7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0Ym90dG9tOiA1MHB4O1xuXHRsZWZ0OiAzNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map