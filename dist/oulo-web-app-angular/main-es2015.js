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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_one_page_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-one/page-one.component */ "./src/app/page-one/page-one.component.ts");
/* harmony import */ var _page_three_page_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-three/page-three.component */ "./src/app/page-three/page-three.component.ts");
/* harmony import */ var _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-two/page-two.component */ "./src/app/page-two/page-two.component.ts");






const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppComponent = class AppComponent {
    constructor(activatedRoute, titleService, metaService, router) {
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.metaService = metaService;
        this.router = router;
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(() => {
            let rt = this.getChild(this.activatedRoute);
            rt.data.subscribe(data => {
                console.log('dataaaaa', data);
                this.titleService.setTitle(data.title);
                if (data.description) {
                    console.log('iiin iif 1111');
                    let value = this.metaService.getTag('name=\'description\'');
                    if (value) {
                        console.log('in ifff valueee');
                        this.metaService.updateTag({ name: 'description', content: data.description });
                    }
                    else {
                        console.log('in elseee valueee');
                        this.metaService.addTag({ name: 'description', content: data.description });
                    }
                }
                else {
                    this.metaService.removeTag('name=\'description\'');
                }
                if (data.robots) {
                    console.log('iiin iif 222');
                    let value = this.metaService.getTag('name=robots');
                    if (value) {
                        this.metaService.updateTag({ name: 'robots', content: data.robots });
                    }
                    else {
                        this.metaService.addTag({ name: 'robots', content: data.robots });
                    }
                }
                else {
                    this.metaService.updateTag({ name: 'robots', content: 'follow,index' });
                }
                if (data.ogUrl) {
                    console.log('iiin iif 3333');
                    let value = this.metaService.getTag('name=\'og:url\'');
                    if (value) {
                        this.metaService.updateTag({ name: 'og:url', content: data.ogUrl });
                    }
                    else {
                        this.metaService.addTag({ name: 'og:url', content: data.ogUrl });
                    }
                }
                else {
                    this.metaService.updateTag({ property: 'og:url', content: this.router.url });
                }
                if (data.ogTitle) {
                    console.log('iiin iif 4444');
                    let value = this.metaService.getTag('name=\'og:title\'');
                    if (value) {
                        this.metaService.updateTag({ name: 'og:title', content: data.ogTitle });
                    }
                    else {
                        this.metaService.addTag({ name: 'og:title', content: data.ogTitle });
                    }
                }
                else {
                    this.metaService.removeTag('property=\'og:title\'');
                }
                if (data.ogDescription) {
                    console.log('iiin iif 5555');
                    let value = this.metaService.getTag('name=\'og:description\'');
                    if (value) {
                        this.metaService.updateTag({ name: 'og:description', content: data.ogDescription });
                    }
                    else {
                        this.metaService.addTag({ name: 'og:description', content: data.ogDescription });
                    }
                }
                else {
                    this.metaService.removeTag('property=\'og:description\'');
                }
                if (data.ogImage) {
                    console.log('iiin iif 6666');
                    let value = this.metaService.getTag('name=\'og:image\'');
                    if (value) {
                        this.metaService.updateTag({ name: 'og:image', content: data.ogImage });
                    }
                    else {
                        this.metaService.addTag({ name: 'og:image', content: data.ogImage });
                    }
                    this.metaService.updateTag({ property: 'og:image', content: data.ogImage });
                }
                else {
                    this.metaService.removeTag('property=\'og:image\'');
                }
            });
        });
    }
    getChild(activatedRoute) {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        }
        else {
            return activatedRoute;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_one_page_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-one/page-one.component */ "./src/app/page-one/page-one.component.ts");
/* harmony import */ var _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-two/page-two.component */ "./src/app/page-two/page-two.component.ts");
/* harmony import */ var _page_three_page_three_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-three/page-three.component */ "./src/app/page-three/page-three.component.ts");








let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageOneComponent = class PageOneComponent {
    constructor() { }
    ngOnInit() {
        console.log('on iniitttttt>>>>>');
    }
};
PageOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-one',
        template: __webpack_require__(/*! raw-loader!./page-one.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-one/page-one.component.html"),
        styles: [__webpack_require__(/*! ./page-one.component.scss */ "./src/app/page-one/page-one.component.scss")]
    })
], PageOneComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageThreeComponent = class PageThreeComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-three',
        template: __webpack_require__(/*! raw-loader!./page-three.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-three/page-three.component.html"),
        styles: [__webpack_require__(/*! ./page-three.component.scss */ "./src/app/page-three/page-three.component.scss")]
    })
], PageThreeComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTwoComponent = class PageTwoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-two',
        template: __webpack_require__(/*! raw-loader!./page-two.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-two/page-two.component.html"),
        styles: [__webpack_require__(/*! ./page-two.component.scss */ "./src/app/page-two/page-two.component.scss")]
    })
], PageTwoComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map