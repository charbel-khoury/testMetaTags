(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  App Component\n</div>\n<div style=\"cursor: pointer; color: blue;\" routerLink=\"/pageone\">\n  Page 1\n</div>\n<div style=\"cursor: pointer; color: blue;\" routerLink=\"/pagetwo\">\n  Page 2\n</div>\n<div style=\"cursor: pointer; color: blue;\" routerLink=\"/pagethree\">\n  Page 3\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-one/page-one.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-one/page-one.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-one works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-three/page-three.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-three/page-three.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-three works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-two/page-two.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-two/page-two.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-two works!</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_one_page_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-one/page-one.component */ "./src/app/page-one/page-one.component.ts");
/* harmony import */ var _page_three_page_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-three/page-three.component */ "./src/app/page-three/page-three.component.ts");
/* harmony import */ var _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-two/page-two.component */ "./src/app/page-two/page-two.component.ts");






var routes = [
    // {
    //   path: '',
    //   redirectTo: '/pageone',
    //   pathMatch: 'full'
    // },
    {
        path: 'pageone',
        // loadChildren: './page-one/page-one.module#PageOneModule',
        component: _page_one_page_one_component__WEBPACK_IMPORTED_MODULE_3__["PageOneComponent"],
        data: {
            title: 'Page 1',
            description: 'Description Page 1',
            ogDescription: 'Description Page 1',
            ogTitle: 'Title Page 1'
        }
    },
    {
        path: 'pagetwo',
        component: _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_5__["PageTwoComponent"],
        data: {
            title: 'Page 2',
            description: 'Description Page 2',
            ogDescription: 'Description Page 2',
            ogTitle: 'Title Page 2'
        }
    },
    {
        path: 'pagethree',
        component: _page_three_page_three_component__WEBPACK_IMPORTED_MODULE_4__["PageThreeComponent"],
        data: {
            title: 'Page 3',
            description: 'Description Page 3',
            ogDescription: 'Description Page 3',
            ogTitle: 'Title Page 3'
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(activatedRoute, titleService, metaService, router) {
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.metaService = metaService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () {
            var rt = _this.getChild(_this.activatedRoute);
            rt.data.subscribe(function (data) {
                console.log('dataaaaa', data);
                _this.titleService.setTitle(data.title);
                if (data.description) {
                    console.log('iiin iif 1111');
                    var value = _this.metaService.getTag('name=\'description\'');
                    if (value) {
                        console.log('in ifff valueee');
                        _this.metaService.updateTag({ name: 'description', content: data.description });
                    }
                    else {
                        console.log('in elseee valueee');
                        _this.metaService.addTag({ name: 'description', content: data.description });
                    }
                }
                else {
                    _this.metaService.removeTag('name=\'description\'');
                }
                if (data.robots) {
                    console.log('iiin iif 222');
                    var value = _this.metaService.getTag('name=robots');
                    if (value) {
                        _this.metaService.updateTag({ name: 'robots', content: data.robots });
                    }
                    else {
                        _this.metaService.addTag({ name: 'robots', content: data.robots });
                    }
                }
                else {
                    _this.metaService.updateTag({ name: 'robots', content: 'follow,index' });
                }
                if (data.ogUrl) {
                    console.log('iiin iif 3333');
                    var value = _this.metaService.getTag('name=\'og:url\'');
                    if (value) {
                        _this.metaService.updateTag({ name: 'og:url', content: data.ogUrl });
                    }
                    else {
                        _this.metaService.addTag({ name: 'og:url', content: data.ogUrl });
                    }
                }
                else {
                    _this.metaService.updateTag({ property: 'og:url', content: _this.router.url });
                }
                if (data.ogTitle) {
                    console.log('iiin iif 4444');
                    var value = _this.metaService.getTag('name=\'og:title\'');
                    if (value) {
                        _this.metaService.updateTag({ name: 'og:title', content: data.ogTitle });
                    }
                    else {
                        _this.metaService.addTag({ name: 'og:title', content: data.ogTitle });
                    }
                }
                else {
                    _this.metaService.removeTag('property=\'og:title\'');
                }
                if (data.ogDescription) {
                    console.log('iiin iif 5555');
                    var value = _this.metaService.getTag('name=\'og:description\'');
                    if (value) {
                        _this.metaService.updateTag({ name: 'og:description', content: data.ogDescription });
                    }
                    else {
                        _this.metaService.addTag({ name: 'og:description', content: data.ogDescription });
                    }
                }
                else {
                    _this.metaService.removeTag('property=\'og:description\'');
                }
                if (data.ogImage) {
                    console.log('iiin iif 6666');
                    var value = _this.metaService.getTag('name=\'og:image\'');
                    if (value) {
                        _this.metaService.updateTag({ name: 'og:image', content: data.ogImage });
                    }
                    else {
                        _this.metaService.addTag({ name: 'og:image', content: data.ogImage });
                    }
                    _this.metaService.updateTag({ property: 'og:image', content: data.ogImage });
                }
                else {
                    _this.metaService.removeTag('property=\'og:image\'');
                }
            });
        });
    };
    AppComponent.prototype.getChild = function (activatedRoute) {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        }
        else {
            return activatedRoute;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_one_page_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-one/page-one.component */ "./src/app/page-one/page-one.component.ts");
/* harmony import */ var _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-two/page-two.component */ "./src/app/page-two/page-two.component.ts");
/* harmony import */ var _page_three_page_three_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-three/page-three.component */ "./src/app/page-three/page-three.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_one_page_one_component__WEBPACK_IMPORTED_MODULE_5__["PageOneComponent"],
                _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_6__["PageTwoComponent"],
                _page_three_page_three_component__WEBPACK_IMPORTED_MODULE_7__["PageThreeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page-one/page-one.component.scss":
/*!**************************************************!*\
  !*** ./src/app/page-one/page-one.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utb25lL3BhZ2Utb25lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-one/page-one.component.ts":
/*!************************************************!*\
  !*** ./src/app/page-one/page-one.component.ts ***!
  \************************************************/
/*! exports provided: PageOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOneComponent", function() { return PageOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageOneComponent = /** @class */ (function () {
    function PageOneComponent() {
    }
    PageOneComponent.prototype.ngOnInit = function () {
        console.log('on iniitttttt>>>>>');
    };
    PageOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-one',
            template: __webpack_require__(/*! raw-loader!./page-one.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-one/page-one.component.html"),
            styles: [__webpack_require__(/*! ./page-one.component.scss */ "./src/app/page-one/page-one.component.scss")]
        })
    ], PageOneComponent);
    return PageOneComponent;
}());



/***/ }),

/***/ "./src/app/page-three/page-three.component.scss":
/*!******************************************************!*\
  !*** ./src/app/page-three/page-three.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtdGhyZWUvcGFnZS10aHJlZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page-three/page-three.component.ts":
/*!****************************************************!*\
  !*** ./src/app/page-three/page-three.component.ts ***!
  \****************************************************/
/*! exports provided: PageThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageThreeComponent", function() { return PageThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageThreeComponent = /** @class */ (function () {
    function PageThreeComponent() {
    }
    PageThreeComponent.prototype.ngOnInit = function () {
    };
    PageThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-three',
            template: __webpack_require__(/*! raw-loader!./page-three.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-three/page-three.component.html"),
            styles: [__webpack_require__(/*! ./page-three.component.scss */ "./src/app/page-three/page-three.component.scss")]
        })
    ], PageThreeComponent);
    return PageThreeComponent;
}());



/***/ }),

/***/ "./src/app/page-two/page-two.component.scss":
/*!**************************************************!*\
  !*** ./src/app/page-two/page-two.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtdHdvL3BhZ2UtdHdvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-two/page-two.component.ts":
/*!************************************************!*\
  !*** ./src/app/page-two/page-two.component.ts ***!
  \************************************************/
/*! exports provided: PageTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoComponent", function() { return PageTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTwoComponent = /** @class */ (function () {
    function PageTwoComponent() {
    }
    PageTwoComponent.prototype.ngOnInit = function () {
    };
    PageTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-two',
            template: __webpack_require__(/*! raw-loader!./page-two.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-two/page-two.component.html"),
            styles: [__webpack_require__(/*! ./page-two.component.scss */ "./src/app/page-two/page-two.component.scss")]
        })
    ], PageTwoComponent);
    return PageTwoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\IdeaProjects\metadata-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map