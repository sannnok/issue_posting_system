"use strict";
(self["webpackChunkissue_tracking_system"] = self["webpackChunkissue_tracking_system"] || []).push([["src_app_features_virtual-scroll_virtual-scroll_module_ts"],{

/***/ 5163:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/virtual-scroll/components/virtual-scroll/virtual-scroll.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScrollComponent": () => (/* binding */ VirtualScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_wrap_iframe_app_iframe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/wrap-iframe/app-iframe.component */ 8397);


class VirtualScrollComponent {
  constructor() {
    this.src = 'https://sannnok.github.io/mona_table/';
    this.title = 'Virtual Scroll';
  }
}
VirtualScrollComponent.ɵfac = function VirtualScrollComponent_Factory(t) {
  return new (t || VirtualScrollComponent)();
};
VirtualScrollComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VirtualScrollComponent,
  selectors: [["app-virtual-scroll"]],
  decls: 1,
  vars: 2,
  consts: [[3, "src", "title"]],
  template: function VirtualScrollComponent_Template(rf, ctx) {
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

/***/ 6102:
/*!**************************************************************************!*\
  !*** ./src/app/features/virtual-scroll/virtual-scroll-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScrollRoutingModule": () => (/* binding */ VirtualScrollRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_virtual_scroll_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/virtual-scroll/virtual-scroll.component */ 5163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _components_virtual_scroll_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_0__.VirtualScrollComponent,
  pathMatch: 'full'
}];
class VirtualScrollRoutingModule {}
VirtualScrollRoutingModule.ɵfac = function VirtualScrollRoutingModule_Factory(t) {
  return new (t || VirtualScrollRoutingModule)();
};
VirtualScrollRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VirtualScrollRoutingModule
});
VirtualScrollRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VirtualScrollRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2566:
/*!******************************************************************!*\
  !*** ./src/app/features/virtual-scroll/virtual-scroll.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScrollModule": () => (/* binding */ VirtualScrollModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _components_virtual_scroll_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/virtual-scroll/virtual-scroll.component */ 5163);
/* harmony import */ var _virtual_scroll_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-scroll-routing.module */ 6102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class VirtualScrollModule {}
VirtualScrollModule.ɵfac = function VirtualScrollModule_Factory(t) {
  return new (t || VirtualScrollModule)();
};
VirtualScrollModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: VirtualScrollModule
});
VirtualScrollModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _virtual_scroll_routing_module__WEBPACK_IMPORTED_MODULE_2__.VirtualScrollRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VirtualScrollModule, {
    declarations: [_components_virtual_scroll_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_1__.VirtualScrollComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _virtual_scroll_routing_module__WEBPACK_IMPORTED_MODULE_2__.VirtualScrollRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_virtual-scroll_virtual-scroll_module_ts.js.map