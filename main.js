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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n    :host {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 14px;\n        color: #333333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin: 8px 0;\n    }\n\n    p {\n        margin: 0;\n    }\n\n    .spacer {\n        flex: 1;\n    }\n\n    .toolbar {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 60px;\n        display: flex;\n        align-items: center;\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n    }\n\n    .toolbar img {\n        margin: 0 16px;\n    }\n\n    .toolbar #twitter-logo {\n        height: 40px;\n        margin: 0 16px;\n    }\n\n    .toolbar #twitter-logo:hover {\n        opacity: 0.8;\n    }\n\n    .content {\n        display: flex;\n        margin: 82px auto 32px;\n        padding: 0 16px;\n        max-width: 960px;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    svg.material-icons {\n        height: 24px;\n        width: auto;\n    }\n\n    svg.material-icons:not(:last-child) {\n        margin-right: 8px;\n    }\n\n    .card svg.material-icons path {\n        fill: #888;\n    }\n\n    .card-container {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: 16px;\n    }\n\n    .card {\n        border-radius: 4px;\n        border: 1px solid #eee;\n        background-color: #fafafa;\n        height: 40px;\n        width: 200px;\n        margin: 0 8px 16px;\n        padding: 16px;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        transition: all 0.2s ease-in-out;\n        line-height: 24px;\n    }\n\n    .card-container .card:not(:last-child) {\n        margin-right: 0;\n    }\n\n    .card.card-small {\n        height: 16px;\n        width: 168px;\n    }\n\n    .card-container .card:not(.highlight-card) {\n        cursor: pointer;\n    }\n\n    .card-container .card:not(.highlight-card):hover {\n        transform: translateY(-3px);\n        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n    }\n\n    .card-container .card:not(.highlight-card):hover .material-icons path {\n        fill: rgb(105, 103, 103);\n    }\n\n    .card.highlight-card {\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n        border: none;\n        width: auto;\n        min-width: 30%;\n        position: relative;\n    }\n\n    .card.card.highlight-card span {\n        margin-left: 60px;\n    }\n\n    svg#rocket {\n        width: 80px;\n        position: absolute;\n        left: -10px;\n        top: -24px;\n    }\n\n    svg#rocket-smoke {\n        height: calc(100vh - 95px);\n        position: absolute;\n        top: 10px;\n        right: 180px;\n        z-index: -10;\n    }\n\n    a,\n    a:visited,\n    a:hover {\n        color: #1976d2;\n        text-decoration: none;\n    }\n\n    a:hover {\n        color: #125699;\n    }\n\n    .terminal {\n        position: relative;\n        width: 80%;\n        max-width: 600px;\n        border-radius: 6px;\n        padding-top: 45px;\n        margin-top: 8px;\n        overflow: hidden;\n        background-color: rgb(15, 15, 16);\n    }\n\n    .terminal::before {\n        content: \"\\2022 \\2022 \\2022\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        background: rgb(58, 58, 58);\n        color: #c2c3c4;\n        width: 100%;\n        font-size: 2rem;\n        line-height: 0;\n        padding: 14px 0;\n        text-indent: 4px;\n    }\n\n    .terminal pre {\n        font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n        color: white;\n        padding: 0 1rem 1rem;\n        margin: 0;\n    }\n\n    .circle-link {\n        height: 40px;\n        width: 40px;\n        border-radius: 40px;\n        margin: 8px;\n        background-color: white;\n        border: 1px solid #eeeeee;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        transition: 1s ease-out;\n    }\n\n    .circle-link:hover {\n        transform: translateY(-0.25rem);\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n\n    footer {\n        margin-top: 8px;\n        display: flex;\n        align-items: center;\n        line-height: 20px;\n    }\n\n    footer a {\n        display: flex;\n        align-items: center;\n    }\n\n    .github-star-badge {\n        color: #24292e;\n        display: flex;\n        align-items: center;\n        font-size: 12px;\n        padding: 3px 10px;\n        border: 1px solid rgba(27,31,35,.2);\n        border-radius: 3px;\n        background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n        margin-left: 4px;\n        font-weight: 600;\n        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n    }\n\n    .github-star-badge:hover {\n        background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n        border-color: rgba(27,31,35,.35);\n        background-position: -.5em;\n    }\n\n    .github-star-badge .material-icons {\n        height: 16px;\n        width: 16px;\n        margin-right: 4px;\n    }\n\n    svg#clouds {\n        position: fixed;\n        bottom: -160px;\n        left: -230px;\n        z-index: -10;\n        width: 1920px;\n    }\n\n    ngx-codemirror {\n        margin-top: 2em;\n    }\n\n\n    /* Responsive Styles */\n    @media screen and (max-width: 767px) {\n\n        .card-container > *:not(.circle-link) ,\n        .terminal {\n            width: 100%;\n        }\n\n        .card:not(.highlight-card) {\n            height: 16px;\n            margin: 8px 0;\n        }\n\n        .card.highlight-card span {\n            margin-left: 72px;\n        }\n\n        svg#rocket-smoke {\n            right: 120px;\n            transform: rotate(-5deg);\n        }\n    }\n\n    @media screen and (max-width: 575px) {\n        svg#rocket-smoke {\n            display: none;\n            visibility: hidden;\n        }\n    }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n    <img\n        width=\"40\"\n        alt=\"Angular Logo\"\n        src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n    />\n    <span>Welcome</span>\n    <div class=\"spacer\"></div>\n</div>\n\n<div class=\"content\" role=\"main\">\n\n    <!-- Highlight Card -->\n    <div class=\"card highlight-card card-small\">\n\n        <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\n            <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n                <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\n                <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n                    <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n                    <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n                </g>\n            </g>\n        </svg>\n\n        <span>{{ appName }} app is running!</span>\n\n        <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n            <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n        </svg>\n\n    </div>\n\n    <!-- Resources -->\n    <h2>{{ title }}</h2>\n\n    <router-outlet></router-outlet>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/twelve-tone-spinner/twelve-tone-spinner.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/twelve-tone-spinner/twelve-tone-spinner.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"twelveTone-spinner\">\n    <div class=\"twelveTone-loadText twelveTone-child\">\n        <p>{{ spinnerMessage }}</p>\n    </div>\n    <div class=\"twelveTone-note1 twelveTone-child\"></div>\n    <div class=\"twelveTone-note2 twelveTone-child\"></div>\n    <div class=\"twelveTone-note3 twelveTone-child\"></div>\n    <div class=\"twelveTone-note4 twelveTone-child\"></div>\n    <div class=\"twelveTone-note5 twelveTone-child\"></div>\n    <div class=\"twelveTone-note6 twelveTone-child\"></div>\n    <div class=\"twelveTone-note7 twelveTone-child\"></div>\n    <div class=\"twelveTone-note8 twelveTone-child\"></div>\n    <div class=\"twelveTone-note9 twelveTone-child\"></div>\n    <div class=\"twelveTone-note10 twelveTone-child\"></div>\n    <div class=\"twelveTone-note11 twelveTone-child\"></div>\n    <div class=\"twelveTone-note12 twelveTone-child\"></div>\n</div>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: 'graph', pathMatch: 'full' },
    // lazy loaded
    { path: 'graph', loadChildren: () => __webpack_require__.e(/*! import() | graph-visualizer-graph-visualizer-module */ "graph-visualizer-graph-visualizer-module").then(__webpack_require__.bind(null, /*! ./graph-visualizer/graph-visualizer.module */ "./src/app/graph-visualizer/graph-visualizer.module.ts")).then(m => m.GraphVisualizerModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] // preload all lazy modules
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.appName = 'RDF Graph Visualizer';
        this.title = 'Congratulations!!';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _twelve_tone_spinner_twelve_tone_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./twelve-tone-spinner/twelve-tone-spinner.component */ "./src/app/twelve-tone-spinner/twelve-tone-spinner.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");






let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _twelve_tone_spinner_twelve_tone_spinner_component__WEBPACK_IMPORTED_MODULE_4__["TwelveToneSpinnerComponent"]],
        providers: [],
        exports: [
            _twelve_tone_spinner_twelve_tone_spinner_component__WEBPACK_IMPORTED_MODULE_4__["TwelveToneSpinnerComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/twelve-tone-spinner/twelve-tone-spinner.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/twelve-tone-spinner/twelve-tone-spinner.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".twelveTone-spinner {\n    height: 140px;\n    width: 140px;\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n.twelveTone-spinner .twelveTone-child {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.twelveTone-spinner .twelveTone-child:before {\n    content: '\\2669';\n    margin: 0 auto;\n    display: block;\n    width: 15%;\n    height: 15%;\n    border-radius: 100%;\n    animation: twelveTone-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n.twelveTone-spinner .twelveTone-loadText > p {\n    /* border: 1px solid blue; */\n    margin-top: 30%;\n    margin-bottom: 30%;\n    text-align: center;\n}\n.twelveTone-spinner .twelveTone-note2 {\n    transform: rotate(30deg);\n}\n.twelveTone-spinner .twelveTone-note3 {\n    transform: rotate(60deg);\n}\n.twelveTone-spinner .twelveTone-note4 {\n    transform: rotate(90deg);\n}\n.twelveTone-spinner .twelveTone-note5 {\n    transform: rotate(120deg);\n}\n.twelveTone-spinner .twelveTone-note6 {\n    transform: rotate(150deg);\n}\n.twelveTone-spinner .twelveTone-note7 {\n    transform: rotate(180deg);\n}\n.twelveTone-spinner .twelveTone-note8 {\n    transform: rotate(210deg);\n}\n.twelveTone-spinner .twelveTone-note9 {\n    transform: rotate(240deg);\n}\n.twelveTone-spinner .twelveTone-note10 {\n    transform: rotate(270deg);\n}\n.twelveTone-spinner .twelveTone-note11 {\n    transform: rotate(300deg);\n}\n.twelveTone-spinner .twelveTone-note12 {\n    transform: rotate(330deg);\n}\n.twelveTone-spinner .twelveTone-note2:before {\n    animation-delay: -1.1s;\n}\n.twelveTone-spinner .twelveTone-note3:before {\n    /* UNICODE SHARP SIGN, see https://www.unicode.org/Public/UCD/latest/charts/CodeCharts.pdf, p. 280*/\n    content: '\\266F';\n    animation-delay: -1s;\n}\n.twelveTone-spinner .twelveTone-note4:before {\n    animation-delay: -0.9s;\n}\n.twelveTone-spinner .twelveTone-note5:before {\n    animation-delay: -0.8s;\n}\n.twelveTone-spinner .twelveTone-note6:before {\n    /* UNICODE FLAT SIGN, see https://www.unicode.org/Public/UCD/latest/charts/CodeCharts.pdf, p. 280*/\n    content: '\\266D';\n    animation-delay: -0.7s;\n}\n.twelveTone-spinner .twelveTone-note7:before {\n    animation-delay: -0.6s;\n}\n.twelveTone-spinner .twelveTone-note8:before {\n    animation-delay: -0.5s;\n}\n.twelveTone-spinner .twelveTone-note9:before {\n    /* UNICODE SHARP SIGN, see https://www.unicode.org/Public/UCD/latest/charts/CodeCharts.pdf, p. 280*/\n    content: '\\266F';\n    animation-delay: -0.4s;\n}\n.twelveTone-spinner .twelveTone-note10:before {\n    animation-delay: -0.3s;\n}\n.twelveTone-spinner .twelveTone-note11:before {\n    animation-delay: -0.2s;\n}\n.twelveTone-spinner .twelveTone-note12:before {\n    /* UNICODE FLAT SIGN, see https://www.unicode.org/Public/UCD/latest/charts/CodeCharts.pdf, p. 280*/\n    content: '\\266D';\n    animation-delay: -0.1s;\n}\n@keyframes twelveTone-circleBounceDelay {\n    0%,\n    80%,\n    100% {\n        transform: scale(0);\n    }\n    40% {\n        transform: scale(1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlbHZlLXRvbmUtc3Bpbm5lci90d2VsdmUtdG9uZS1zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07QUFDVjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFFbkIsc0VBQXNFO0FBQzFFO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUdJLHdCQUF3QjtBQUM1QjtBQUNBO0lBR0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFHSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUdJLHlCQUF5QjtBQUM3QjtBQUNBO0lBR0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFHSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUdJLHlCQUF5QjtBQUM3QjtBQUNBO0lBR0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFHSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUdJLHlCQUF5QjtBQUM3QjtBQUNBO0lBR0kseUJBQXlCO0FBQzdCO0FBRUE7SUFFSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1HQUFtRztJQUNuRyxnQkFBZ0I7SUFFaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFFSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUVJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0dBQWtHO0lBQ2xHLGdCQUFnQjtJQUVoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUVJLHNCQUFzQjtBQUMxQjtBQUNBO0lBRUksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxtR0FBbUc7SUFDbkcsZ0JBQWdCO0lBRWhCLHNCQUFzQjtBQUMxQjtBQUNBO0lBRUksc0JBQXNCO0FBQzFCO0FBQ0E7SUFFSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtHQUFrRztJQUNsRyxnQkFBZ0I7SUFFaEIsc0JBQXNCO0FBQzFCO0FBY0E7SUFDSTs7O1FBSUksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFFSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3R3ZWx2ZS10b25lLXNwaW5uZXIvdHdlbHZlLXRvbmUtc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR3ZWx2ZVRvbmUtc3Bpbm5lciB7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLWNoaWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xufVxuLnR3ZWx2ZVRvbmUtc3Bpbm5lciAudHdlbHZlVG9uZS1jaGlsZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdcXDI2NjknO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdHdlbHZlVG9uZS1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgYW5pbWF0aW9uOiB0d2VsdmVUb25lLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLnR3ZWx2ZVRvbmUtc3Bpbm5lciAudHdlbHZlVG9uZS1sb2FkVGV4dCA+IHAge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGUyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbn1cbi50d2VsdmVUb25lLXNwaW5uZXIgLnR3ZWx2ZVRvbmUtbm90ZTMge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xufVxuLnR3ZWx2ZVRvbmUtc3Bpbm5lciAudHdlbHZlVG9uZS1ub3RlNCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGU1IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbn1cbi50d2VsdmVUb25lLXNwaW5uZXIgLnR3ZWx2ZVRvbmUtbm90ZTYge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xufVxuLnR3ZWx2ZVRvbmUtc3Bpbm5lciAudHdlbHZlVG9uZS1ub3RlNyB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGU4IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbn1cbi50d2VsdmVUb25lLXNwaW5uZXIgLnR3ZWx2ZVRvbmUtbm90ZTkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xufVxuLnR3ZWx2ZVRvbmUtc3Bpbm5lciAudHdlbHZlVG9uZS1ub3RlMTAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuLnR3ZWx2ZVRvbmUtc3Bpbm5lciAudHdlbHZlVG9uZS1ub3RlMTEge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xufVxuLnR3ZWx2ZVRvbmUtc3Bpbm5lciAudHdlbHZlVG9uZS1ub3RlMTIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xufVxuXG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGUyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGUzOmJlZm9yZSB7XG4gICAgLyogVU5JQ09ERSBTSEFSUCBTSUdOLCBzZWUgaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvUHVibGljL1VDRC9sYXRlc3QvY2hhcnRzL0NvZGVDaGFydHMucGRmLCBwLiAyODAqL1xuICAgIGNvbnRlbnQ6ICdcXDI2NkYnO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGU0OmJlZm9yZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGU1OmJlZm9yZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGU2OmJlZm9yZSB7XG4gICAgLyogVU5JQ09ERSBGTEFUIFNJR04sIHNlZSBodHRwczovL3d3dy51bmljb2RlLm9yZy9QdWJsaWMvVUNEL2xhdGVzdC9jaGFydHMvQ29kZUNoYXJ0cy5wZGYsIHAuIDI4MCovXG4gICAgY29udGVudDogJ1xcMjY2RCc7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGU3OmJlZm9yZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGU4OmJlZm9yZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGU5OmJlZm9yZSB7XG4gICAgLyogVU5JQ09ERSBTSEFSUCBTSUdOLCBzZWUgaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvUHVibGljL1VDRC9sYXRlc3QvY2hhcnRzL0NvZGVDaGFydHMucGRmLCBwLiAyODAqL1xuICAgIGNvbnRlbnQ6ICdcXDI2NkYnO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xufVxuLnR3ZWx2ZVRvbmUtc3Bpbm5lciAudHdlbHZlVG9uZS1ub3RlMTA6YmVmb3JlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbn1cbi50d2VsdmVUb25lLXNwaW5uZXIgLnR3ZWx2ZVRvbmUtbm90ZTExOmJlZm9yZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG59XG4udHdlbHZlVG9uZS1zcGlubmVyIC50d2VsdmVUb25lLW5vdGUxMjpiZWZvcmUge1xuICAgIC8qIFVOSUNPREUgRkxBVCBTSUdOLCBzZWUgaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvUHVibGljL1VDRC9sYXRlc3QvY2hhcnRzL0NvZGVDaGFydHMucGRmLCBwLiAyODAqL1xuICAgIGNvbnRlbnQ6ICdcXDI2NkQnO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHdlbHZlVG9uZS1jaXJjbGVCb3VuY2VEZWxheSB7XG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIHR3ZWx2ZVRvbmUtY2lyY2xlQm91bmNlRGVsYXkge1xuICAgIDAlLFxuICAgIDgwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/twelve-tone-spinner/twelve-tone-spinner.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/twelve-tone-spinner/twelve-tone-spinner.component.ts ***!
  \**********************************************************************/
/*! exports provided: TwelveToneSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwelveToneSpinnerComponent", function() { return TwelveToneSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * The TwelveToneSpinner component.
 *
 * It contains the loading spinner of the app
 * (an animated twelve tone cycle)
 * that is provided via the {@link SharedModule}.
 */
let TwelveToneSpinnerComponent = class TwelveToneSpinnerComponent {
    constructor() {
        /**
         * Public variable: spinnerMessage.
         *
         * It contains the message to be displayed
         * while the spinner is active.
         */
        this.spinnerMessage = 'loading';
    }
};
TwelveToneSpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-twelve-tone-spinner',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./twelve-tone-spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/twelve-tone-spinner/twelve-tone-spinner.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./twelve-tone-spinner.component.css */ "./src/app/twelve-tone-spinner/twelve-tone-spinner.component.css")).default]
    })
], TwelveToneSpinnerComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ng2-n3-test/ng2-n3-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map