"use strict";
(self["webpackChunkissue_tracking_system"] = self["webpackChunkissue_tracking_system"] || []).push([["src_app_features_serverless-render_serverless-render_module_ts"],{

/***/ 4409:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/serverless-render/components/serverless-render/serverless-render.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerlessRenderComponent": () => (/* binding */ ServerlessRenderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_wrap_iframe_app_iframe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/wrap-iframe/app-iframe.component */ 8397);


class ServerlessRenderComponent {
  constructor() {
    this.src = 'https://sannnok.github.io/tab-con-render/';
    this.title = 'Serverless Live Render';
  }
}
ServerlessRenderComponent.ɵfac = function ServerlessRenderComponent_Factory(t) {
  return new (t || ServerlessRenderComponent)();
};
ServerlessRenderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ServerlessRenderComponent,
  selectors: [["app-serverless-render"]],
  decls: 1,
  vars: 2,
  consts: [[3, "src", "title"]],
  template: function ServerlessRenderComponent_Template(rf, ctx) {
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

/***/ 8372:
/*!********************************************************************************!*\
  !*** ./src/app/features/serverless-render/serverless-render-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadRoutingModule": () => (/* binding */ UploadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_serverless_render_serverless_render_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/serverless-render/serverless-render.component */ 4409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _components_serverless_render_serverless_render_component__WEBPACK_IMPORTED_MODULE_0__.ServerlessRenderComponent,
  pathMatch: 'full'
}];
class UploadRoutingModule {}
UploadRoutingModule.ɵfac = function UploadRoutingModule_Factory(t) {
  return new (t || UploadRoutingModule)();
};
UploadRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UploadRoutingModule
});
UploadRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UploadRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6049:
/*!************************************************************************!*\
  !*** ./src/app/features/serverless-render/serverless-render.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerlessRenderModule": () => (/* binding */ ServerlessRenderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_serverless_render_serverless_render_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/serverless-render/serverless-render.component */ 4409);
/* harmony import */ var _serverless_render_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverless-render-routing.module */ 8372);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ServerlessRenderModule {}
ServerlessRenderModule.ɵfac = function ServerlessRenderModule_Factory(t) {
  return new (t || ServerlessRenderModule)();
};
ServerlessRenderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ServerlessRenderModule
});
ServerlessRenderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _serverless_render_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ServerlessRenderModule, {
    declarations: [_components_serverless_render_serverless_render_component__WEBPACK_IMPORTED_MODULE_0__.ServerlessRenderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _serverless_render_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_serverless-render_serverless-render_module_ts.js.map