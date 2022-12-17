"use strict";
(self["webpackChunkissue_tracking_system"] = self["webpackChunkissue_tracking_system"] || []).push([["src_app_features_gestures_gestures_module_ts"],{

/***/ 6822:
/*!*****************************************************************************!*\
  !*** ./src/app/features/gestures/components/gestures/gestures.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GesturesComponent": () => (/* binding */ GesturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_wrap_iframe_app_iframe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/wrap-iframe/app-iframe.component */ 8397);


class GesturesComponent {
  constructor() {
    this.src = 'https://sannnok.github.io/swipe-list-live/';
    this.title = 'Gestures - Swipe';
  }
}
GesturesComponent.ɵfac = function GesturesComponent_Factory(t) {
  return new (t || GesturesComponent)();
};
GesturesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GesturesComponent,
  selectors: [["app-gestures"]],
  decls: 1,
  vars: 2,
  consts: [[3, "src", "title"]],
  template: function GesturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-iframe", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.src)("title", ctx.title);
    }
  },
  dependencies: [_shared_components_wrap_iframe_app_iframe_component__WEBPACK_IMPORTED_MODULE_0__.IframePageComponent],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 8695:
/*!**************************************************************!*\
  !*** ./src/app/features/gestures/gestures-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GesturesRoutingModule": () => (/* binding */ GesturesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_gestures_gestures_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gestures/gestures.component */ 6822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _components_gestures_gestures_component__WEBPACK_IMPORTED_MODULE_0__.GesturesComponent,
  pathMatch: 'full'
}];
class GesturesRoutingModule {}
GesturesRoutingModule.ɵfac = function GesturesRoutingModule_Factory(t) {
  return new (t || GesturesRoutingModule)();
};
GesturesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: GesturesRoutingModule
});
GesturesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GesturesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1939:
/*!******************************************************!*\
  !*** ./src/app/features/gestures/gestures.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GesturesModule": () => (/* binding */ GesturesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _gestures_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestures-routing.module */ 8695);
/* harmony import */ var _components_gestures_gestures_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gestures/gestures.component */ 6822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class GesturesModule {}
GesturesModule.ɵfac = function GesturesModule_Factory(t) {
  return new (t || GesturesModule)();
};
GesturesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: GesturesModule
});
GesturesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _gestures_routing_module__WEBPACK_IMPORTED_MODULE_1__.GesturesRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GesturesModule, {
    declarations: [_components_gestures_gestures_component__WEBPACK_IMPORTED_MODULE_2__.GesturesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _gestures_routing_module__WEBPACK_IMPORTED_MODULE_1__.GesturesRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_gestures_gestures_module_ts.js.map