"use strict";
(self["webpackChunkissue_tracking_system"] = self["webpackChunkissue_tracking_system"] || []).push([["src_app_features_perlin-noise_perlin-noise_module_ts"],{

/***/ 5131:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/perlin-noise/components/perlin-noise/perlin-noise.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerlinNoiseComponent": () => (/* binding */ PerlinNoiseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_wrap_iframe_app_iframe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/wrap-iframe/app-iframe.component */ 8397);


class PerlinNoiseComponent {
  constructor() {
    this.src = 'https://sannnok.github.io/super-duper-social-net-like/';
    this.title = 'Perlin Noise Heart';
  }
}
PerlinNoiseComponent.ɵfac = function PerlinNoiseComponent_Factory(t) {
  return new (t || PerlinNoiseComponent)();
};
PerlinNoiseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PerlinNoiseComponent,
  selectors: [["app-perlin-noise"]],
  decls: 1,
  vars: 2,
  consts: [[3, "src", "title"]],
  template: function PerlinNoiseComponent_Template(rf, ctx) {
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

/***/ 5664:
/*!**********************************************************************!*\
  !*** ./src/app/features/perlin-noise/perlin-noise-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerlinNoiseRoutingModule": () => (/* binding */ PerlinNoiseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_perlin_noise_perlin_noise_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/perlin-noise/perlin-noise.component */ 5131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _components_perlin_noise_perlin_noise_component__WEBPACK_IMPORTED_MODULE_0__.PerlinNoiseComponent,
  pathMatch: 'full'
}];
class PerlinNoiseRoutingModule {}
PerlinNoiseRoutingModule.ɵfac = function PerlinNoiseRoutingModule_Factory(t) {
  return new (t || PerlinNoiseRoutingModule)();
};
PerlinNoiseRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PerlinNoiseRoutingModule
});
PerlinNoiseRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PerlinNoiseRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8571:
/*!**************************************************************!*\
  !*** ./src/app/features/perlin-noise/perlin-noise.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerlinNoiseModule": () => (/* binding */ PerlinNoiseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _components_perlin_noise_perlin_noise_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/perlin-noise/perlin-noise.component */ 5131);
/* harmony import */ var _perlin_noise_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perlin-noise-routing.module */ 5664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class PerlinNoiseModule {}
PerlinNoiseModule.ɵfac = function PerlinNoiseModule_Factory(t) {
  return new (t || PerlinNoiseModule)();
};
PerlinNoiseModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: PerlinNoiseModule
});
PerlinNoiseModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _perlin_noise_routing_module__WEBPACK_IMPORTED_MODULE_2__.PerlinNoiseRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PerlinNoiseModule, {
    declarations: [_components_perlin_noise_perlin_noise_component__WEBPACK_IMPORTED_MODULE_1__.PerlinNoiseComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _perlin_noise_routing_module__WEBPACK_IMPORTED_MODULE_2__.PerlinNoiseRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_perlin-noise_perlin-noise_module_ts.js.map