"use strict";
(self["webpackChunkissue_tracking_system"] = self["webpackChunkissue_tracking_system"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/dashboard/dashboard.component */ 589);
/* harmony import */ var _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/notification-page/notification-page.component */ 2060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: _core_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  pathMatch: 'full'
}, {
  path: 'posts',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_posts_posts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/posts/posts.module */ 5345)).then(m => m.PostsModule)
}, {
  path: 'upload',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_upload_upload_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/upload/upload.module */ 4433)).then(m => m.UploadModule)
}, {
  path: 'serverless-render',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_serverless-render_serverless-render_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/serverless-render/serverless-render.module */ 6049)).then(m => m.ServerlessRenderModule)
}, {
  path: 'perlin-noise',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_perlin-noise_perlin-noise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/perlin-noise/perlin-noise.module */ 8571)).then(m => m.PerlinNoiseModule)
}, {
  path: 'gestures',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_gestures_gestures_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/gestures/gestures.module */ 1939)).then(m => m.GesturesModule)
}, {
  path: 'virtual-scroll',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_virtual-scroll_virtual-scroll_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/virtual-scroll/virtual-scroll.module */ 2566)).then(m => m.VirtualScrollModule)
}, {
  path: '**',
  component: _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_1__.NotificationPageComponent,
  data: {
    type: 'error',
    title: 'Page not found',
    heading: '404',
    description: 'This is not the page you are looking for.'
  }
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/store/shared.actions */ 8481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _shared_services_router_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/router-history.service */ 2000);
/* harmony import */ var _core_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/progress/progress.component */ 548);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/header/header.component */ 5123);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/footer/footer.component */ 1583);












const _c0 = function () {
  return ["dashboard"];
};
const _c1 = function () {
  return ["router-active-link"];
};
const _c2 = function () {
  return ["posts"];
};
const _c3 = function () {
  return ["upload"];
};
const _c4 = function () {
  return ["serverless-render"];
};
const _c5 = function () {
  return ["perlin-noise"];
};
const _c6 = function () {
  return ["gestures"];
};
const _c7 = function () {
  return ["virtual-scroll"];
};
class AppComponent {
  constructor(store, router, routerHistory) {
    this.store = store;
    this.router = router;
    this.routerHistory = routerHistory;
    this.store.dispatch((0,_shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_0__.checkIsOnline)());
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(evt => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(evt => this.routerHistory.push(evt.url));
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_router_history_service__WEBPACK_IMPORTED_MODULE_1__.RouterHistoryService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 27,
  vars: 29,
  consts: [[1, "app-wrapper"], ["mode", "side", 1, "app-sidebar"], ["sidenav", ""], [3, "multiple"], ["menu", ""], [3, "routerLink", "routerLinkActive"], [1, "app-content"], [3, "sidenavIconClick"], [1, "app-content__main"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-sidenav-container", 0)(2, "mat-sidenav", 1, 2)(4, "aside")(5, "nav")(6, "mat-selection-list", 3, 4)(8, "mat-list-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-list-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-list-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-list-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Serverless Render");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-list-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Perlin Noise");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-list-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Swipe Gestures");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-list-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Virtual Scroll");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-sidenav-content", 6)(23, "app-header", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sidenavIconClick", function AppComponent_Template_app_header_sidenavIconClick_23_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "main", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](17, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](19, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](20, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](21, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](23, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](24, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](26, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](27, _c7))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](28, _c1));
    }
  },
  dependencies: [_core_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_2__.ProgressComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectionList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_10__.MatLegacyListOption, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
  styles: [".app-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.app-sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.app-sidebar[_ngcontent-%COMP%]   mat-list-option[_ngcontent-%COMP%] {\n  height: 80px;\n  font-size: 17px;\n  color: darkslategrey;\n  padding: 0 16px;\n}\n.app-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.app-content__main[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.app-content[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%]     .mat-toolbar.mat-primary {\n  background: rgba(0, 0, 0, 0.82);\n  color: white;\n}\n\n  button.mat-primary[mat-flat-button] {\n  background: rgba(0, 0, 0, 0.82);\n}\n  .mat-list-option.mat-list-single-selected-option {\n  background-color: unset;\n}\n\n.router-active-link[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.12);\n  background-image: initial;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-repeat-x: initial;\n  background-repeat-y: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n/*# sourceURL=webpack://./src/app/app.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBRUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFOO0FBSUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUZKO0FBSUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRk47QUFNTTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtBQUpSOztBQVdFO0VBQ0UsK0JBQUE7QUFSSjtBQVVFO0VBQ0UsdUJBQUE7QUFSSjs7QUFZQTtFQUNFLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7QUFURiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmFwcC1zaWRlYmFyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmFwcC1zaWRlYmFyIG1hdC1saXN0LW9wdGlvbiB7XG4gIGhlaWdodDogODBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLmFwcC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXBwLWNvbnRlbnRfX21haW4ge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXBwLWNvbnRlbnQgYXBwLWhlYWRlciA6Om5nLWRlZXAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgYnV0dG9uLm1hdC1wcmltYXJ5W21hdC1mbGF0LWJ1dHRvbl0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODIpO1xufVxuOjpuZy1kZWVwIC5tYXQtbGlzdC1vcHRpb24ubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xufVxuXG4ucm91dGVyLWFjdGl2ZS1saW5rIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1yZXBlYXQteDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1yZXBlYXQteTogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/dashboard/dashboard.component */ 589);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/header/header.component */ 5123);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/footer/footer.component */ 1583);
/* harmony import */ var _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/notification-page/notification-page.component */ 2060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [
  // angular
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
  // material design
  _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
  // core & shared
  _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
  // app routing
  _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _core_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_7__.NotificationPageComponent],
    imports: [
    // angular
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
    // material design
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
    // core & shared
    _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
    // app routing
    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 4304:
/*!*****************************************************!*\
  !*** ./src/app/core/app-store/app-store.effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appEffects": () => (/* binding */ appEffects)
/* harmony export */ });
/* harmony import */ var src_app_features_posts_store_upload_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/posts/store/upload.effects */ 4819);
/* harmony import */ var _features_posts_store_posts_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/posts/store/posts.effects */ 7487);
/* harmony import */ var _shared_store_shared_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/store/shared.effects */ 3235);



const appEffects = [_shared_store_shared_effects__WEBPACK_IMPORTED_MODULE_2__.SharedEffects, _features_posts_store_posts_effects__WEBPACK_IMPORTED_MODULE_1__.PostsEffects, src_app_features_posts_store_upload_effects__WEBPACK_IMPORTED_MODULE_0__.UploadEffects];

/***/ }),

/***/ 293:
/*!******************************************************!*\
  !*** ./src/app/core/app-store/app-store.reducers.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducers": () => (/* binding */ appReducers)
/* harmony export */ });
/* harmony import */ var _features_posts_store_posts_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/posts/store/posts.reducer */ 1937);
/* harmony import */ var _shared_store_shared_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/store/shared.reducer */ 2886);
/* harmony import */ var src_app_features_posts_store_files_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/posts/store/files.reducer */ 6684);



const appReducers = {
  shared: _shared_store_shared_reducer__WEBPACK_IMPORTED_MODULE_1__.sharedReducer,
  posts: _features_posts_store_posts_reducer__WEBPACK_IMPORTED_MODULE_0__.postsReducer,
  files: src_app_features_posts_store_files_reducer__WEBPACK_IMPORTED_MODULE_2__.filesReducer
};

/***/ }),

/***/ 589:
/*!******************************************************************!*\
  !*** ./src/app/core/components/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DashboardComponent {}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 2,
  vars: 0,
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The Dashboard still in development. Please, navigate Posts section manually through side menu.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["h2[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  padding: 16px;\n}\n/*# sourceURL=webpack://./src/app/core/components/dashboard/dashboard.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxREFBQTtFQUNBLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgcGFkZGluZzogMTZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 1583:
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 5,
  vars: 0,
  consts: [[1, "footer"], ["href", "https://github.com/sannnok/issue_posting_system", "target", "_blank"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2022 | Issue Posting Simple App | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Source code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".footer[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n/*# sourceURL=webpack://./src/app/core/components/footer/footer.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5123:
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);






class HeaderComponent {
  constructor() {
    this.sidenavIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  outputs: {
    sidenavIconClick: "sidenavIconClick"
  },
  decls: 7,
  vars: 0,
  consts: [["color", "primary", 1, "app-toolbar"], ["mat-icon-button", "", "aria-label", "Toggle app menu", 1, "app-toolbar__btn-menu", 3, "click"], ["mat-list-icon", ""]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_1_listener() {
        return ctx.sidenavIconClick.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "event_note");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 \uD80C\uDCF0 Projects\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_1__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_4__.MatLegacyListIconCssMatStyler],
  styles: [".app-toolbar[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.app-toolbar__btn-menu[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n/*# sourceURL=webpack://./src/app/core/components/header/header.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC10b29sYmFyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5hcHAtdG9vbGJhcl9fYnRuLW1lbnUge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2060:
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/notification-page/notification-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageComponent": () => (/* binding */ NotificationPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header-title/page-header-title.component */ 3593);







class NotificationPageComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.data = data;
      switch (data.type) {
        case 'error':
          this.textCssClass = 'text-danger';
          break;
        case 'success':
          this.textCssClass = 'text-success';
          break;
        case 'info':
          this.textCssClass = 'text-primary';
          break;
      }
      if (!data.icon) {
        switch (data.type) {
          case 'error':
            data.icon = 'clear';
            break;
          case 'success':
            data.icon = 'done';
            break;
          case 'info':
            data.icon = 'info';
            break;
        }
      }
    });
  }
}
NotificationPageComponent.ɵfac = function NotificationPageComponent_Factory(t) {
  return new (t || NotificationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
NotificationPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NotificationPageComponent,
  selectors: [["app-notification-page"]],
  decls: 11,
  vars: 6,
  consts: [["ariaLabel", "Back to homepage", 3, "link"], [1, "page-content", "notification-page__content"], [1, "notification-page__icon", 3, "ngClass"], [1, "mat-display-2", "notification-page__heading"]],
  template: function NotificationPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-page-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-page-header-back", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-page-header-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1)(5, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("link", "/dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.textCssClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.description);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderBackComponent, _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderTitleComponent],
  styles: ["[_nghost-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.notification-page__content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.notification-page__icon[_ngcontent-%COMP%] {\n  font-size: 120px;\n  height: 120px;\n  width: 120px;\n}\n\n.notification-page__heading[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n/*# sourceURL=webpack://./src/app/core/components/notification-page/notification-page.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1wYWdlL25vdGlmaWNhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vdGlmaWNhdGlvbi1wYWdlX19jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vdGlmaWNhdGlvbi1wYWdlX19pY29uIHtcbiAgZm9udC1zaXplOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLXBhZ2VfX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 548:
/*!****************************************************************!*\
  !*** ./src/app/core/components/progress/progress.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressComponent": () => (/* binding */ ProgressComponent)
/* harmony export */ });
/* harmony import */ var _shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/store/shared.actions */ 8481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-progressbar */ 5669);




class ProgressComponent {
  constructor(store, ngProgress) {
    this.store = store;
    this.ngProgress = ngProgress;
  }
  ngOnInit() {
    this.progressRef = this.ngProgress.ref();
    this.progressRef.started.subscribe(() => this.store.dispatch((0,_shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_0__.loadingOn)()));
    this.progressRef.completed.subscribe(() => this.store.dispatch((0,_shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_0__.loadingOff)()));
  }
  ngOnDestroy() {
    this.progressRef.destroy();
  }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) {
  return new (t || ProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__.NgProgress));
};
ProgressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProgressComponent,
  selectors: [["app-progress"]],
  decls: 1,
  vars: 0,
  template: function ProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ng-progress");
    }
  },
  dependencies: [ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__.NgProgressComponent],
  encapsulation: 2
});

/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _app_store_app_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-store/app-store.reducers */ 293);
/* harmony import */ var _app_store_app_store_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-store/app-store.effects */ 4304);
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/error-handler.service */ 5289);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ 2756);
/* harmony import */ var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/progress/progress.component */ 548);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-progressbar */ 5669);
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-progressbar/http */ 3662);



















class CoreModule {}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [..._interceptors__WEBPACK_IMPORTED_MODULE_4__.httpInterceptorProviders, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ErrorHandler,
    useClass: _services_error_handler_service__WEBPACK_IMPORTED_MODULE_3__.ErrorHandlerService
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
  //  ngrx
  _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreModule.forRoot(_app_store_app_store_reducers__WEBPACK_IMPORTED_MODULE_1__.appReducers, {
    runtimeChecks: {
      strictStateImmutability: false,
      strictActionImmutability: false
    }
  }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.EffectsModule.forRoot(_app_store_app_store_effects__WEBPACK_IMPORTED_MODULE_2__.appEffects), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
  }),
  // ngProgess
  ngx_progressbar__WEBPACK_IMPORTED_MODULE_12__.NgProgressModule.withConfig({
    spinner: false
  }), ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__.NgProgressHttpModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CoreModule, {
    declarations: [_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__.ProgressComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__.StoreDevtoolsModule, ngx_progressbar__WEBPACK_IMPORTED_MODULE_12__.NgProgressModule, ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__.NgProgressHttpModule],
    exports: [_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__.ProgressComponent]
  });
})();

/***/ }),

/***/ 3302:
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/action.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionInterceptor": () => (/* binding */ ActionInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);





class ActionInterceptor {
  constructor(router) {
    this.router = router;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
        const responseStatusCode = event.status;
        this.statusCodeHandler(responseStatusCode);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
        const errorStatusCode = error.status;
        this.statusCodeHandler(errorStatusCode);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  statusCodeHandler(code) {
    switch (code) {
      case 401:
        this.router.navigate(['/login']);
        break;
    }
  }
}
ActionInterceptor.ɵfac = function ActionInterceptor_Factory(t) {
  return new (t || ActionInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ActionInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ActionInterceptor,
  factory: ActionInterceptor.ɵfac
});

/***/ }),

/***/ 2756:
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpInterceptorProviders": () => (/* binding */ httpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _message_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.interceptor */ 238);
/* harmony import */ var _action_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action.interceptor */ 3302);



const httpInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: _message_interceptor__WEBPACK_IMPORTED_MODULE_0__.MessageInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: _action_interceptor__WEBPACK_IMPORTED_MODULE_1__.ActionInterceptor,
  multi: true
}];

/***/ }),

/***/ 238:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/message.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageInterceptor": () => (/* binding */ MessageInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/error.service */ 5801);
/* harmony import */ var _shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/notification-bar.service */ 992);






class MessageInterceptor {
  constructor(errorService, notificationService) {
    this.errorService = errorService;
    this.notificationService = notificationService;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
        const responseData = event.body;
        if (responseData && responseData.message && !event.url.includes('/err-logs')) {
          this.notificationService.showSuccess(responseData.message);
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
        const errorMsg = this.errorService.getServerMessage(error);
        this.notificationService.showError(errorMsg);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }));
  }
}
MessageInterceptor.ɵfac = function MessageInterceptor_Factory(t) {
  return new (t || MessageInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_error_service__WEBPACK_IMPORTED_MODULE_0__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_1__.NotificationBarService));
};
MessageInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MessageInterceptor,
  factory: MessageInterceptor.ɵfac
});

/***/ }),

/***/ 5289:
/*!********************************************************!*\
  !*** ./src/app/core/services/error-handler.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerService": () => (/* binding */ ErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ 4080);




class ErrorHandlerService extends _angular_core__WEBPACK_IMPORTED_MODULE_2__.ErrorHandler {
  constructor(loggerService) {
    super();
    this.loggerService = loggerService;
  }
  handleError(error) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      this.loggerService.logError(error);
    }
    super.handleError(error);
  }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) {
  return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerService));
};
ErrorHandlerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ErrorHandlerService,
  factory: ErrorHandlerService.ɵfac
});

/***/ }),

/***/ 5801:
/*!************************************************!*\
  !*** ./src/app/core/services/error.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorService": () => (/* binding */ ErrorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ErrorService {
  getClientMessage(error) {
    return error.message || error.toString();
  }
  getServerMessage(error) {
    return error.error && error.error.message || error.statusText;
  }
}
ErrorService.ɵfac = function ErrorService_Factory(t) {
  return new (t || ErrorService)();
};
ErrorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ErrorService,
  factory: ErrorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4080:
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerService": () => (/* binding */ LoggerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class LoggerService {
  constructor(http) {
    this.http = http;
  }
  logError(error) {
    const errMessage = this.createErrMessage(error);
    this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/err-logs`, errMessage).subscribe();
  }
  createErrMessage(error) {
    const date = new Date().toISOString();
    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
      return {
        date,
        type: 'HTTP ERR',
        message: error.message,
        status: error.status
      };
    } else if (error instanceof TypeError) {
      return {
        date,
        type: 'TYPE ERR',
        message: error.message
      };
    } else if (error instanceof Error) {
      return {
        date,
        type: 'GENERAL ERR',
        message: error.message
      };
    } else {
      return {
        date,
        type: 'UNKNOWN ERR',
        message: error.message
      };
    }
  }
}
LoggerService.ɵfac = function LoggerService_Factory(t) {
  return new (t || LoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
LoggerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoggerService,
  factory: LoggerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 208:
/*!**************************************************************!*\
  !*** ./src/app/features/posts/services/posts-api.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsApiService": () => (/* binding */ PostsApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



const POSTS_API_ENDPOINT = '/posts';
class PostsApiService {
  constructor(http) {
    this.http = http;
  }
  createItem(post) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${POSTS_API_ENDPOINT}`, post);
  }
  readItems() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${POSTS_API_ENDPOINT}`);
  }
  readItem(id) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${POSTS_API_ENDPOINT}/${id}`);
  }
  updateItem(id, changes) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${POSTS_API_ENDPOINT}/${id}`, changes);
  }
  deleteItem(id) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${POSTS_API_ENDPOINT}/${id}`);
  }
}
PostsApiService.ɵfac = function PostsApiService_Factory(t) {
  return new (t || PostsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
PostsApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PostsApiService,
  factory: PostsApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4256:
/*!***************************************************************!*\
  !*** ./src/app/features/posts/services/upload-api.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesApiService": () => (/* binding */ FilesApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



const FILES_API_ENDPOINT = '/files';
class FilesApiService {
  constructor(http) {
    this.http = http;
  }
  createItem(file) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${FILES_API_ENDPOINT}`, file);
  }
  readItems() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${FILES_API_ENDPOINT}`);
  }
  readItem(id) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${FILES_API_ENDPOINT}/${id}`);
  }
  updateItem(id, changes) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${FILES_API_ENDPOINT}/${id}`, changes);
  }
  deleteItem(id) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${FILES_API_ENDPOINT}/${id}`);
  }
}
FilesApiService.ɵfac = function FilesApiService_Factory(t) {
  return new (t || FilesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
FilesApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FilesApiService,
  factory: FilesApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6684:
/*!*******************************************************!*\
  !*** ./src/app/features/posts/store/files.reducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filesReducer": () => (/* binding */ filesReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _upload_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.actions */ 5776);
/* harmony import */ var _upload_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.state */ 6505);



const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_upload_state__WEBPACK_IMPORTED_MODULE_1__.initialFilesState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_upload_actions__WEBPACK_IMPORTED_MODULE_0__.createFilesItemSuccess, (state, file) => {
  return _upload_state__WEBPACK_IMPORTED_MODULE_1__.filesAdapter.addOne(file.file, state);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_upload_actions__WEBPACK_IMPORTED_MODULE_0__.readFilesSuccess, (state, {
  files
}) => {
  return _upload_state__WEBPACK_IMPORTED_MODULE_1__.filesAdapter.setAll(files, state);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_upload_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFilesItem, (state, {
  id
}) => _upload_state__WEBPACK_IMPORTED_MODULE_1__.filesAdapter.removeOne(id, state)));
function filesReducer(state, action) {
  return reducer(state, action);
}
//

/***/ }),

/***/ 5786:
/*!*******************************************************!*\
  !*** ./src/app/features/posts/store/posts.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPostsItem": () => (/* binding */ createPostsItem),
/* harmony export */   "createPostsItemFail": () => (/* binding */ createPostsItemFail),
/* harmony export */   "createPostsItemSuccess": () => (/* binding */ createPostsItemSuccess),
/* harmony export */   "deletePostsItem": () => (/* binding */ deletePostsItem),
/* harmony export */   "deletePostsItemFail": () => (/* binding */ deletePostsItemFail),
/* harmony export */   "deletePostsItemSuccess": () => (/* binding */ deletePostsItemSuccess),
/* harmony export */   "readPosts": () => (/* binding */ readPosts),
/* harmony export */   "readPostsFail": () => (/* binding */ readPostsFail),
/* harmony export */   "readPostsItem": () => (/* binding */ readPostsItem),
/* harmony export */   "readPostsItemFail": () => (/* binding */ readPostsItemFail),
/* harmony export */   "readPostsItemSuccess": () => (/* binding */ readPostsItemSuccess),
/* harmony export */   "readPostsSuccess": () => (/* binding */ readPostsSuccess),
/* harmony export */   "updatePostsItem": () => (/* binding */ updatePostsItem),
/* harmony export */   "updatePostsItemFail": () => (/* binding */ updatePostsItemFail),
/* harmony export */   "updatePostsItemSuccess": () => (/* binding */ updatePostsItemSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

// CRUD
// Create Post
const createPostsItem = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Create Post', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createPostsItemSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Create Create Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createPostsItemFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Create Create Fail');
// Read Posts
const readPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Read Posts');
const readPostsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Read Posts Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const readPostsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Read Posts Fail');
// Read Post
const readPostsItem = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Read Post', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const readPostsItemSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Read Post Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const readPostsItemFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Read Post Fail');
// Update Post
const updatePostsItem = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Update Post', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePostsItemSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Update Post Success');
const updatePostsItemFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Update Post Fail');
// Delete Post
const deletePostsItem = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Delete Post', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePostsItemSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Delete Post Success');
const deletePostsItemFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Posts] Delete Post Fail');

/***/ }),

/***/ 7487:
/*!*******************************************************!*\
  !*** ./src/app/features/posts/store/posts.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsEffects": () => (/* binding */ PostsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.actions */ 5786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_posts_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/posts-api.service */ 208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);








class PostsEffects {
  constructor(postsService, actions$, router) {
    this.postsService = postsService;
    this.actions$ = actions$;
    this.router = router;
    // CRUD
    this.createPost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.createPostsItem.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      post
    }) => this.postsService.createItem(post).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => ({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.createPostsItemSuccess.type,
      post: response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.createPostsItemFail.type
    }))))));
    this.readPosts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPosts.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.postsService.readItems().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => ({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPostsSuccess.type,
      posts: response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPostsFail.type
    }))))));
    this.readPost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPostsItem.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      id
    }) => this.postsService.readItem(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => ({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPostsItemSuccess.type,
      post: response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPostsItemFail.type
    }))))));
    this.updatePost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.updatePostsItem.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      updatePost
    }) => this.postsService.updateItem(updatePost.id, updatePost.changes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => ({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.updatePostsItemSuccess.type,
      post: response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.updatePostsItemFail.type
    }))))));
    this.deletePost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.deletePostsItem.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      id
    }) => this.postsService.deleteItem(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => ({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.deletePostsItemSuccess.type,
      post: response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _posts_actions__WEBPACK_IMPORTED_MODULE_0__.deletePostsItemFail.type
    }))))));
    this.navigate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.createPostsItemSuccess.type, _posts_actions__WEBPACK_IMPORTED_MODULE_0__.updatePostsItemSuccess.type, _posts_actions__WEBPACK_IMPORTED_MODULE_0__.deletePostsItemSuccess.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(({
      user
    }) => this.router.navigate(['/', 'posts']))), {
      dispatch: false
    });
  }
}
PostsEffects.ɵfac = function PostsEffects_Factory(t) {
  return new (t || PostsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_posts_api_service__WEBPACK_IMPORTED_MODULE_1__.PostsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
PostsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: PostsEffects,
  factory: PostsEffects.ɵfac
});

/***/ }),

/***/ 1937:
/*!*******************************************************!*\
  !*** ./src/app/features/posts/store/posts.reducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postsReducer": () => (/* binding */ postsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _posts_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.state */ 3128);
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.actions */ 5786);



const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_posts_state__WEBPACK_IMPORTED_MODULE_0__.initialPostsState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.createPostsItemSuccess, (state, {
  post
}) => _posts_state__WEBPACK_IMPORTED_MODULE_0__.postsAdapter.addOne(post, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.readPostsSuccess, (state, {
  posts
}) => _posts_state__WEBPACK_IMPORTED_MODULE_0__.postsAdapter.setAll(posts, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.readPostsSuccess, (state, {
  posts
}) => ({
  ...state,
  allPossibleTags: Array.from(new Set(posts.reduce((result, item) => (result.push(...item.tags), result), [])))
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.readPostsItemSuccess, (state, {
  post
}) => _posts_state__WEBPACK_IMPORTED_MODULE_0__.postsAdapter.upsertOne(post, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.updatePostsItem, (state, {
  updatePost
}) => _posts_state__WEBPACK_IMPORTED_MODULE_0__.postsAdapter.updateOne(updatePost, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.deletePostsItem, (state, {
  id
}) => _posts_state__WEBPACK_IMPORTED_MODULE_0__.postsAdapter.removeOne(id, state)));
function postsReducer(state, action) {
  return reducer(state, action);
}

/***/ }),

/***/ 3128:
/*!*****************************************************!*\
  !*** ./src/app/features/posts/store/posts.state.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialPostsState": () => (/* binding */ initialPostsState),
/* harmony export */   "postsAdapter": () => (/* binding */ postsAdapter)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ 1904);

const postsAdapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__.createEntityAdapter)({
  selectId: item => item.id,
  sortComparer: false
});
const initialPostsState = postsAdapter.getInitialState({
  allPossibleTags: []
});

/***/ }),

/***/ 5776:
/*!********************************************************!*\
  !*** ./src/app/features/posts/store/upload.actions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilesItem": () => (/* binding */ createFilesItem),
/* harmony export */   "createFilesItemFail": () => (/* binding */ createFilesItemFail),
/* harmony export */   "createFilesItemSuccess": () => (/* binding */ createFilesItemSuccess),
/* harmony export */   "deleteFilesItem": () => (/* binding */ deleteFilesItem),
/* harmony export */   "deleteFilesItemFail": () => (/* binding */ deleteFilesItemFail),
/* harmony export */   "deleteFilesItemSuccess": () => (/* binding */ deleteFilesItemSuccess),
/* harmony export */   "readFiles": () => (/* binding */ readFiles),
/* harmony export */   "readFilesFail": () => (/* binding */ readFilesFail),
/* harmony export */   "readFilesItem": () => (/* binding */ readFilesItem),
/* harmony export */   "readFilesItemFail": () => (/* binding */ readFilesItemFail),
/* harmony export */   "readFilesItemSuccess": () => (/* binding */ readFilesItemSuccess),
/* harmony export */   "readFilesSuccess": () => (/* binding */ readFilesSuccess),
/* harmony export */   "updateFilesItem": () => (/* binding */ updateFilesItem),
/* harmony export */   "updateFilesItemFail": () => (/* binding */ updateFilesItemFail),
/* harmony export */   "updateFilesItemSuccess": () => (/* binding */ updateFilesItemSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

// CRUD
// Create File
const createFilesItem = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Create File', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createFilesItemSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Create Create Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createFilesItemFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Create Create Fail');
// Read Files
const readFiles = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Read Files');
const readFilesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Read Files Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const readFilesFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Read Files Fail');
// Read File
const readFilesItem = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Read File', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const readFilesItemSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Read File Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const readFilesItemFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Read File Fail');
// Update File
const updateFilesItem = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Update File', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateFilesItemSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Update File Success');
const updateFilesItemFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Update File Fail');
// Delete File
const deleteFilesItem = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Delete File', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteFilesItemSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Delete File Success');
const deleteFilesItemFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Files] Delete File Fail');

/***/ }),

/***/ 4819:
/*!********************************************************!*\
  !*** ./src/app/features/posts/store/upload.effects.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadEffects": () => (/* binding */ UploadEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _upload_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.actions */ 5776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_upload_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/upload-api.service */ 4256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);








class UploadEffects {
  constructor(filesService, actions$, router) {
    this.filesService = filesService;
    this.actions$ = actions$;
    this.router = router;
    // CRUD
    this.createFile$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_upload_actions__WEBPACK_IMPORTED_MODULE_0__.createFilesItem.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      file
    }) => {
      return this.filesService.createItem(file).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        return {
          type: _upload_actions__WEBPACK_IMPORTED_MODULE_0__.createFilesItemSuccess.type,
          file: response
        };
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
        type: _upload_actions__WEBPACK_IMPORTED_MODULE_0__.createFilesItemFail.type
      })));
    })));
    this.readFiles$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_upload_actions__WEBPACK_IMPORTED_MODULE_0__.readFiles.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.filesService.readItems().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => ({
      type: _upload_actions__WEBPACK_IMPORTED_MODULE_0__.readFilesSuccess.type,
      files: response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _upload_actions__WEBPACK_IMPORTED_MODULE_0__.readFilesSuccess.type
    }))))));
    this.deletePost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_upload_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFilesItem.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({
      id
    }) => this.filesService.deleteItem(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => ({
      type: _upload_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFilesItemSuccess.type,
      file: response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      type: _upload_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFilesItemFail.type
    }))))));
    this.navigate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_upload_actions__WEBPACK_IMPORTED_MODULE_0__.createFilesItemSuccess.type, _upload_actions__WEBPACK_IMPORTED_MODULE_0__.updateFilesItemSuccess.type, _upload_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFilesItemSuccess.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(({
      user
    }) => this.router.navigate(['/', 'upload']))), {
      dispatch: false
    });
  }
}
UploadEffects.ɵfac = function UploadEffects_Factory(t) {
  return new (t || UploadEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_upload_api_service__WEBPACK_IMPORTED_MODULE_1__.FilesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
UploadEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: UploadEffects,
  factory: UploadEffects.ɵfac
});

/***/ }),

/***/ 6505:
/*!******************************************************!*\
  !*** ./src/app/features/posts/store/upload.state.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filesAdapter": () => (/* binding */ filesAdapter),
/* harmony export */   "initialFilesState": () => (/* binding */ initialFilesState)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ 1904);

const filesAdapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__.createEntityAdapter)({
  selectId: item => {
    return item.id;
  },
  sortComparer: false
});
const initialFilesState = filesAdapter.getInitialState({});

/***/ }),

/***/ 4931:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/chips-multi-select/chips-multi-select.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChipsMultiSelectComponent": () => (/* binding */ ChipsMultiSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-chips */ 9257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Subject */ 8094);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);












function ChipsMultiSelectComponent_mat_chip_3_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ChipsMultiSelectComponent_mat_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChipsMultiSelectComponent_mat_chip_3_Template_mat_chip_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.toggleSelection(_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChipsMultiSelectComponent_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}
function ChipsMultiSelectComponent_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function ChipsMultiSelectComponent_input_5_Template_input_matChipInputTokenEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.addChip($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx_r2.separatorKeysCodes)("matChipInputAddOnBlur", true);
  }
}
class ChipsMultiSelectComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.input = true;
    this.valueCahnged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.value = [];
    this.disabled = false;
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.COMMA];
    this.onChipAdded$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    this.destroy$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.items$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.loadPosts(), this.onChipAdded$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.scan)((items, event) => {
      switch (event.type) {
        case 'loaded':
          return event.items;
        case 'added':
          return [...items, event.item];
      }
    }, []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadPosts() {
    return this.options$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(items => ({
      type: 'loaded',
      items
    })));
  }
  ngAfterViewInit() {
    this.selectChips(this.value);
    this.chipList.chipSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(event => event.source)).subscribe(chip => {
      if (chip.selected) {
        this.value = [...this.value, chip.value];
      } else {
        this.value = this.value.filter(o => o !== chip.value);
      }
      this.propagateChange(this.value);
    });
  }
  toggleSelection(chip) {
    if (!this.disabled) chip.toggleSelected(true);
  }
  writeValue(value) {
    if (this.chipList && value) {
      this.selectChips(value);
    } else if (value) {
      this.value = value;
    }
  }
  selectChips(value) {
    this.chipList.chips.forEach(chip => chip.deselect());
    const chipsToSelect = this.chipList.chips.filter(c => value.includes(c.value));
    chipsToSelect.forEach(chip => chip.select());
    this.cdr.detectChanges();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {}
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  propagateChange(value) {
    if (this.onChange) {
      this.onChange(value);
      this.valueCahnged.next(value);
    }
  }
  addChip(event) {
    let input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      this.value.push(value.trim());
      this.onChipAdded$.next({
        type: 'added',
        item: value.trim()
      });
    }
    if (input) {
      input.value = '';
    }
  }
}
ChipsMultiSelectComponent.ɵfac = function ChipsMultiSelectComponent_Factory(t) {
  return new (t || ChipsMultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
ChipsMultiSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ChipsMultiSelectComponent,
  selectors: [["app-chips-multi-select"]],
  viewQuery: function ChipsMultiSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_9__.MatLegacyChipList, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chipList = _t.first);
    }
  },
  inputs: {
    input: "input",
    options$: ["options", "options$"]
  },
  outputs: {
    valueCahnged: "valueCahnged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NG_VALUE_ACCESSOR,
    useExisting: ChipsMultiSelectComponent,
    multi: true
  }])],
  decls: 6,
  vars: 4,
  consts: [["selectable", "", "multiple", "", "aria-label", "Fish selection"], ["myChipList", ""], ["test-id", "chip", 3, "value", "click", 4, "ngFor", "ngForOf"], [3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd", 4, "ngIf"], ["test-id", "chip", 3, "value", "click"], ["c", "matChip"], [4, "ngIf"], [3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"]],
  template: function ChipsMultiSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-chip-list", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChipsMultiSelectComponent_mat_chip_3_Template, 4, 3, "mat-chip", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChipsMultiSelectComponent_input_5_Template, 1, 3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.items$));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLegacyFormField, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_9__.MatLegacyChipList, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_9__.MatLegacyChip, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_9__.MatLegacyChipInput, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["mat-form-field[_ngcontent-%COMP%] { width: 100% };\n/*# sourceURL=webpack://./src/app/shared/components/chips-multi-select/chips-multi-select.component.ts */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hpcHMtbXVsdGktc2VsZWN0L2NoaXBzLW11bHRpLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJLGlCQUFpQixZQUFZLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBtYXQtZm9ybS1maWVsZCB7IHdpZHRoOiAxMDAlIH07XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 9077:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);




class ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
  return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_DIALOG_DATA));
};
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmDialogComponent,
  selectors: [["app-confirm-dialog"]],
  decls: 10,
  vars: 7,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "confirm-dialog__actions"], ["mat-flat-button", "", 3, "mat-dialog-close"], ["mat-flat-button", "", 3, "mat-dialog-close", "color"]],
  template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title || "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.btnCancel || "Cancel", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true)("color", "primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.btnOk || "OK", " ");
    }
  },
  dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButton, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogClose, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogTitle, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogContent, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogActions],
  styles: [".confirm-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceURL=webpack://./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtLWRpYWxvZ19fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 217:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/notification-bar/notification-bar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationBarComponent": () => (/* binding */ NotificationBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





class NotificationBarComponent {
  constructor(data, snackBar) {
    this.data = data;
    this.snackBar = snackBar;
  }
}
NotificationBarComponent.ɵfac = function NotificationBarComponent_Factory(t) {
  return new (t || NotificationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatLegacySnackBar));
};
NotificationBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotificationBarComponent,
  selectors: [["app-notification"]],
  decls: 7,
  vars: 1,
  consts: [[1, "notification"], [1, "notification__text"], [1, "notification__action"], ["mat-icon-button", "", 1, "notification__action-button", 3, "click"], [1, "notification__action-icon"]],
  template: function NotificationBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationBarComponent_Template_button_click_4_listener() {
        return ctx.snackBar.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");
    }
  },
  dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: [".notification[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.notification__text[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.notification__action[_ngcontent-%COMP%] {\n  margin: -2px -4px -2px 8px;\n}\n\n.notification__action-button[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  line-height: 1;\n}\n\n.notification__action-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.65;\n}\n/*# sourceURL=webpack://./src/app/shared/components/notification-bar/notification-bar.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWJhci9ub3RpZmljYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubm90aWZpY2F0aW9uX190ZXh0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ubm90aWZpY2F0aW9uX19hY3Rpb24ge1xuICBtYXJnaW46IC0ycHggLTRweCAtMnB4IDhweDtcbn1cblxuLm5vdGlmaWNhdGlvbl9fYWN0aW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubm90aWZpY2F0aW9uX19hY3Rpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3BhY2l0eTogMC42NTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5641:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/page-header-back/page-header-back.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderBackComponent": () => (/* binding */ PageHeaderBackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_router_history_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/router-history.service */ 2000);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





class PageHeaderBackComponent {
  constructor(router, routerHistory) {
    this.router = router;
    this.routerHistory = routerHistory;
  }
  onBackClick() {
    this.router.navigateByUrl(this.routerHistory.getLatestFrom(this.link) || this.link);
  }
}
PageHeaderBackComponent.ɵfac = function PageHeaderBackComponent_Factory(t) {
  return new (t || PageHeaderBackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_router_history_service__WEBPACK_IMPORTED_MODULE_0__.RouterHistoryService));
};
PageHeaderBackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PageHeaderBackComponent,
  selectors: [["app-page-header-back"]],
  inputs: {
    link: "link",
    ariaLabel: "ariaLabel"
  },
  decls: 3,
  vars: 1,
  consts: [["mat-icon-button", "", "color", "primary", 3, "click"]],
  template: function PageHeaderBackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageHeaderBackComponent_Template_button_click_0_listener() {
        return ctx.onBackClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
    }
  },
  dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3593:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/page-header-title/page-header-title.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderTitleComponent": () => (/* binding */ PageHeaderTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class PageHeaderTitleComponent {}
PageHeaderTitleComponent.ɵfac = function PageHeaderTitleComponent_Factory(t) {
  return new (t || PageHeaderTitleComponent)();
};
PageHeaderTitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageHeaderTitleComponent,
  selectors: [["app-page-header-title"]],
  inputs: {
    addons: "addons"
  },
  ngContentSelectors: _c0,
  decls: 5,
  vars: 1,
  consts: [[1, "page-header-title"], [1, "mat-headline", "page-header__heading", "page-header-title__heading"], [1, "page-header__addons"]],
  template: function PageHeaderTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.addons);
    }
  },
  styles: [".page-header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.page-header-title__heading[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 6px;\n}\n/*# sourceURL=webpack://./src/app/shared/components/page-header-title/page-header-title.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1oZWFkZXItdGl0bGUvcGFnZS1oZWFkZXItdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlci10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucGFnZS1oZWFkZXItdGl0bGVfX2hlYWRpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2802:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class PageHeaderComponent {}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
  return new (t || PageHeaderComponent)();
};
PageHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageHeaderComponent,
  selectors: [["app-page-header"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "mat-toolbar-single-row", "page-header"]],
  template: function PageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".page-header[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.22);\n}\n/*# sourceURL=webpack://./src/app/shared/components/page-header/page-header.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8397:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/wrap-iframe/app-iframe.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IframePageComponent": () => (/* binding */ IframePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-header/page-header.component */ 2802);
/* harmony import */ var _page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-header-title/page-header-title.component */ 3593);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/safe-pipe */ 4052);





class IframePageComponent {}
IframePageComponent.ɵfac = function IframePageComponent_Factory(t) {
  return new (t || IframePageComponent)();
};
IframePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: IframePageComponent,
  selectors: [["app-iframe"]],
  inputs: {
    src: "src",
    title: "title"
  },
  decls: 6,
  vars: 5,
  consts: [["ariaLabel", "Back to homepage", 3, "link"], [3, "src"]],
  template: function IframePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-page-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-header-back", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-page-header-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "iframe", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "safe");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("link", "/dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, ctx.src), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
    }
  },
  dependencies: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderBackComponent, _page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderTitleComponent, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe],
  styles: ["iframe[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  width: 100%;\n  height: calc(100vh - 64px - 60.5px - 10px - 64px);\n}\n\ndiv[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceURL=webpack://./src/app/shared/components/wrap-iframe/app-iframe.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvd3JhcC1pZnJhbWUvYXBwLWlmcmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1lIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCAtIDYwLjVweCAtIDEwcHggLSA2NHB4KTtcbn1cblxuZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 2632:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/back-button.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonDirective": () => (/* binding */ BackButtonDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


class BackButtonDirective {
  constructor(location) {
    this.location = location;
  }
  onClick() {
    this.location.back();
  }
}
BackButtonDirective.ɵfac = function BackButtonDirective_Factory(t) {
  return new (t || BackButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location));
};
BackButtonDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: BackButtonDirective,
  selectors: [["", "appBackButton", ""]],
  hostBindings: function BackButtonDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackButtonDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }
});

/***/ }),

/***/ 4144:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/input-debounce.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputDebounceDirective": () => (/* binding */ InputDebounceDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 823);




class InputDebounceDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.delayedInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.elementRef.nativeElement, 'input').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => this.elementRef.nativeElement.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(800)).subscribe(input => this.delayedInput.next(input));
  }
}
InputDebounceDirective.ɵfac = function InputDebounceDirective_Factory(t) {
  return new (t || InputDebounceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
InputDebounceDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: InputDebounceDirective,
  selectors: [["", "appInput", ""]],
  outputs: {
    delayedInput: "delayedInput"
  }
});

/***/ }),

/***/ 746:
/*!**********************************************!*\
  !*** ./src/app/shared/interceptors/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sharedInterceptorProviders": () => (/* binding */ sharedInterceptorProviders)
/* harmony export */ });
const sharedInterceptorProviders = [];

/***/ }),

/***/ 4872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 7101);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-chips */ 9257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




















class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButtonModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatLegacySnackBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_6__.MatLegacyInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatLegacyCheckboxModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormFieldModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_10__.MatLegacyListModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_11__.MatLegacyMenuModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_12__.MatLegacyCardModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_14__.MatLegacyTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_16__.MatLegacyPaginatorModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__.MatLegacyDialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_19__.MatLegacyChipsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButtonModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatLegacySnackBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_6__.MatLegacyInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatLegacyCheckboxModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormFieldModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_10__.MatLegacyListModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_11__.MatLegacyMenuModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_12__.MatLegacyCardModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_14__.MatLegacyTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_16__.MatLegacyPaginatorModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__.MatLegacyDialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_19__.MatLegacyChipsModule]
  });
})();

/***/ }),

/***/ 6732:
/*!*************************************************!*\
  !*** ./src/app/shared/models/snackbar.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSnackBarConfig": () => (/* binding */ defaultSnackBarConfig),
/* harmony export */   "errorSnackBarConfig": () => (/* binding */ errorSnackBarConfig),
/* harmony export */   "successSnackBarConfig": () => (/* binding */ successSnackBarConfig)
/* harmony export */ });
const defaultSnackBarConfig = {
  duration: 2000,
  panelClass: ['app-snack-bar']
};
const successSnackBarConfig = {
  duration: 2000,
  announcementMessage: 'Success.',
  panelClass: ['app-snack-bar', 'app-snack-bar_success'],
  verticalPosition: 'top'
};
const errorSnackBarConfig = {
  duration: 10000,
  announcementMessage: 'An unknown error occurred.',
  panelClass: ['app-snack-bar', 'app-snack-bar_error'],
  verticalPosition: 'top'
};

/***/ }),

/***/ 5030:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/byte.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BytesPipe": () => (/* binding */ BytesPipe)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ 4750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class BytesPipe {
  transform(input, decimal = 0, from = 'bytes', to) {
    if (!((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isNumberFinite)(input) && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isNumberFinite)(decimal) && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(decimal) && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isPositive)(decimal))) {
      return input;
    }
    let bytes = input;
    let unit = from;
    while (unit !== 'bytes') {
      bytes *= 1024;
      unit = BytesPipe.formats[unit].prev;
    }
    if (to) {
      const format = BytesPipe.formats[to];
      const result = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.toDecimal)(BytesPipe.calculateResult(format, bytes), decimal);
      return BytesPipe.formatResult(result, to);
    }
    for (const key in BytesPipe.formats) {
      if (BytesPipe.formats.hasOwnProperty(key)) {
        const format = BytesPipe.formats[key];
        if (bytes < format.max) {
          const result = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.toDecimal)(BytesPipe.calculateResult(format, bytes), decimal);
          return BytesPipe.formatResult(result, key);
        }
      }
    }
  }
  static formatResult(result, unit) {
    return `${result} ${unit}`;
  }
  static calculateResult(format, bytes) {
    const prev = format.prev ? BytesPipe.formats[format.prev] : undefined;
    return prev ? bytes / prev.max : bytes;
  }
}
BytesPipe.formats = {
  bytes: {
    max: 1024
  },
  kilobytes: {
    max: Math.pow(1024, 2),
    prev: 'bytes'
  },
  megabytes: {
    max: Math.pow(1024, 3),
    prev: 'kilobytes'
  },
  gigabytes: {
    max: Math.pow(1024, 4),
    prev: 'gigabytes'
  },
  terabytes: {
    max: Number.MAX_SAFE_INTEGER,
    prev: 'terabytes'
  }
};
BytesPipe.ɵfac = function BytesPipe_Factory(t) {
  return new (t || BytesPipe)();
};
BytesPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "bytes",
  type: BytesPipe,
  pure: true
});

/***/ }),

/***/ 4052:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe-pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true
});

/***/ }),

/***/ 992:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/notification-bar.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationBarService": () => (/* binding */ NotificationBarService)
/* harmony export */ });
/* harmony import */ var _components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/notification-bar/notification-bar.component */ 217);
/* harmony import */ var _models_snackbar_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/snackbar.model */ 6732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);




class NotificationBarService {
  constructor(snackBar, zone) {
    this.snackBar = snackBar;
    this.zone = zone;
  }
  showInfo(message, duration) {
    return this.show(_models_snackbar_model__WEBPACK_IMPORTED_MODULE_1__.defaultSnackBarConfig, message, duration);
  }
  showSuccess(message, duration) {
    return this.show(_models_snackbar_model__WEBPACK_IMPORTED_MODULE_1__.successSnackBarConfig, message, duration);
  }
  showError(message, duration) {
    return this.show(_models_snackbar_model__WEBPACK_IMPORTED_MODULE_1__.errorSnackBarConfig, message, duration);
  }
  show(defaultConfig, message, duration) {
    const snackBarConfig = duration ? {
      ...defaultConfig,
      duration
    } : defaultConfig;
    let ref;
    if (message) {
      this.zone.run(() => ref = this.snackBar.openFromComponent(_components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_0__.NotificationBarComponent, {
        ...snackBarConfig,
        data: {
          text: message
        }
      }));
    }
    return ref;
  }
  dismiss(snackBarRef) {
    return snackBarRef.dismiss();
  }
}
NotificationBarService.ɵfac = function NotificationBarService_Factory(t) {
  return new (t || NotificationBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatLegacySnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
};
NotificationBarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: NotificationBarService,
  factory: NotificationBarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2000:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/router-history.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterHistoryService": () => (/* binding */ RouterHistoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RouterHistoryService {
  constructor() {
    this.urls = [];
  }
  push(url) {
    this.urls.unshift(url);
  }
  getLatestFrom(patternUrl) {
    return this.urls.find(url => url.indexOf(patternUrl) === 0);
  }
}
RouterHistoryService.ɵfac = function RouterHistoryService_Factory(t) {
  return new (t || RouterHistoryService)();
};
RouterHistoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: RouterHistoryService,
  factory: RouterHistoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3537:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/unsaved-changes.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsavedChangesGuard": () => (/* binding */ UnsavedChangesGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/confirm-dialog/confirm-dialog.component */ 9077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);




class UnsavedChangesGuard {
  constructor(dialog) {
    this.dialog = dialog;
  }
  canDeactivate(component) {
    if (component.canDeactivate()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
    }
    const dialogRef = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
      data: {
        title: 'Confirm Navigation',
        message: 'You have unsaved changes. Are you sure you want to leave this page?',
        btnCancel: 'Stay on this Page',
        btnOk: 'Leave this Page'
      }
    });
    return dialogRef.afterClosed();
  }
}
UnsavedChangesGuard.ɵfac = function UnsavedChangesGuard_Factory(t) {
  return new (t || UnsavedChangesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialog));
};
UnsavedChangesGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UnsavedChangesGuard,
  factory: UnsavedChangesGuard.ɵfac
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 4872);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors */ 746);
/* harmony import */ var _directives_back_button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/back-button.directive */ 2632);
/* harmony import */ var _directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/input-debounce.directive */ 4144);
/* harmony import */ var _services_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/unsaved-changes.guard */ 3537);
/* harmony import */ var _components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notification-bar/notification-bar.component */ 217);
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-header/page-header.component */ 2802);
/* harmony import */ var _components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-header-title/page-header-title.component */ 3593);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 9077);
/* harmony import */ var _components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chips-multi-select/chips-multi-select.component */ 4931);
/* harmony import */ var _pipes_byte_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/byte.pipe */ 5030);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/safe-pipe */ 4052);
/* harmony import */ var _components_wrap_iframe_app_iframe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/wrap-iframe/app-iframe.component */ 8397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
















class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  providers: [..._interceptors__WEBPACK_IMPORTED_MODULE_1__.sharedInterceptorProviders, _services_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_4__.UnsavedChangesGuard],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_directives_back_button_directive__WEBPACK_IMPORTED_MODULE_2__.BackButtonDirective, _directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_3__.InputDebounceDirective, _components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_5__.NotificationBarComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialogComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__.PageHeaderComponent, _components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_7__.PageHeaderBackComponent, _components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_8__.PageHeaderTitleComponent, _components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_10__.ChipsMultiSelectComponent, _components_wrap_iframe_app_iframe_component__WEBPACK_IMPORTED_MODULE_13__.IframePageComponent, _pipes_byte_pipe__WEBPACK_IMPORTED_MODULE_11__.BytesPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule],
    exports: [_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _directives_back_button_directive__WEBPACK_IMPORTED_MODULE_2__.BackButtonDirective, _directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_3__.InputDebounceDirective, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__.PageHeaderComponent, _components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_7__.PageHeaderBackComponent, _components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_8__.PageHeaderTitleComponent, _components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_10__.ChipsMultiSelectComponent, _components_wrap_iframe_app_iframe_component__WEBPACK_IMPORTED_MODULE_13__.IframePageComponent, _pipes_byte_pipe__WEBPACK_IMPORTED_MODULE_11__.BytesPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe]
  });
})();

/***/ }),

/***/ 8481:
/*!************************************************!*\
  !*** ./src/app/shared/store/shared.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIsOnline": () => (/* binding */ checkIsOnline),
/* harmony export */   "loadingOff": () => (/* binding */ loadingOff),
/* harmony export */   "loadingOn": () => (/* binding */ loadingOn),
/* harmony export */   "setIsOnline": () => (/* binding */ setIsOnline)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const checkIsOnline = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shared/isOnline] Check Is Online');
const setIsOnline = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shared/isOnline] Set Is Online', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadingOn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shared/Loading] API Loading...');
const loadingOff = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shared/Loading] API Loaded');

/***/ }),

/***/ 3235:
/*!************************************************!*\
  !*** ./src/app/shared/store/shared.effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedEffects": () => (/* binding */ SharedEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.actions */ 8481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_notification_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notification-bar.service */ 992);







class SharedEffects {
  constructor(actions$, notificationService) {
    this.actions$ = actions$;
    this.notificationService = notificationService;
    this.ref = null;
    this.checkIsOnline$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_shared_actions__WEBPACK_IMPORTED_MODULE_0__.checkIsOnline.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(navigator.onLine), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(window, 'online').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mapTo)(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(window, 'offline').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mapTo)(false)));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(isOnline => {
      this.showHideNotification(isOnline);
      return {
        isOnline,
        type: _shared_actions__WEBPACK_IMPORTED_MODULE_0__.setIsOnline.type
      };
    })));
  }
  showHideNotification(isOnline) {
    if (!isOnline) {
      this.ref = this.notificationService.showError('You are currently offline.', 999999);
    } else if (this.ref) {
      this.notificationService.dismiss(this.ref);
    }
  }
}
SharedEffects.ɵfac = function SharedEffects_Factory(t) {
  return new (t || SharedEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_1__.NotificationBarService));
};
SharedEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: SharedEffects,
  factory: SharedEffects.ɵfac
});

/***/ }),

/***/ 2886:
/*!************************************************!*\
  !*** ./src/app/shared/store/shared.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sharedReducer": () => (/* binding */ sharedReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _shared_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.state */ 6347);
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.actions */ 8481);



const sharedReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_shared_state__WEBPACK_IMPORTED_MODULE_0__.initialSharedState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shared_actions__WEBPACK_IMPORTED_MODULE_1__.checkIsOnline, state => ({
  ...state,
  isOnline: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shared_actions__WEBPACK_IMPORTED_MODULE_1__.setIsOnline, (state, {
  isOnline
}) => ({
  ...state,
  isOnline
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shared_actions__WEBPACK_IMPORTED_MODULE_1__.loadingOn, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shared_actions__WEBPACK_IMPORTED_MODULE_1__.loadingOff, state => ({
  ...state,
  loading: false
})));

/***/ }),

/***/ 6347:
/*!**********************************************!*\
  !*** ./src/app/shared/store/shared.state.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialSharedState": () => (/* binding */ initialSharedState)
/* harmony export */ });
const initialSharedState = {
  isOnline: false,
  loading: false
};

/***/ }),

/***/ 4750:
/*!***************************************!*\
  !*** ./src/app/shared/utils/utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isNumberFinite": () => (/* binding */ isNumberFinite),
/* harmony export */   "isPositive": () => (/* binding */ isPositive),
/* harmony export */   "toDecimal": () => (/* binding */ toDecimal)
/* harmony export */ });
function isNumber(value) {
  return typeof value === 'number';
}
function isNumberFinite(value) {
  return isNumber(value) && isFinite(value);
}
// Not strict positive
function isPositive(value) {
  return value >= 0;
}
function isInteger(value) {
  // No rest, is an integer
  return value % 1 === 0;
}
function toDecimal(value, decimal) {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// Default environment file
const environment = {
  production: false,
  baseUrl: 'http://localhost:3000/api'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map