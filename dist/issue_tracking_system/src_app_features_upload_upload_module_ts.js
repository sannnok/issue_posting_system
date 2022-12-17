"use strict";
(self["webpackChunkissue_tracking_system"] = self["webpackChunkissue_tracking_system"] || []).push([["src_app_features_upload_upload_module_ts"],{

/***/ 2302:
/*!*********************************************************!*\
  !*** ./src/app/features/posts/store/files.selectors.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectFileById": () => (/* binding */ selectFileById),
/* harmony export */   "selectFiles": () => (/* binding */ selectFiles)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _upload_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.state */ 6505);


const {
  selectAll
} = _upload_state__WEBPACK_IMPORTED_MODULE_0__.filesAdapter.getSelectors();
const selectFilesState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('files');
const selectFiles = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFilesState, selectAll);
const selectFileById = fileId => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFilesState, postsState => postsState.entities[fileId]);

/***/ }),

/***/ 7410:
/*!***********************************************************************************!*\
  !*** ./src/app/features/upload/components/file-details/file-details.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileDetailsComponent": () => (/* binding */ FileDetailsComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var src_app_features_posts_store_files_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/posts/store/files.selectors */ 2302);
/* harmony import */ var src_app_features_posts_store_upload_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/posts/store/upload.actions */ 5776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header-title/page-header-title.component */ 3593);













const _c0 = function (a2) {
  return ["/", "upload", a2, "update"];
};
function FileDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-page-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-page-header-back", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-page-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 2)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FileDetailsComponent_div_0_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const file_r1 = restoredCtx.ngIf;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.delete(file_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "pre", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("link", "/upload/list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, file_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", file_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
class FileDetailsComponent {
  constructor(activatedRoute, store) {
    this.activatedRoute = activatedRoute;
    this.store = store;
  }
  ngOnInit() {
    this.fileId = this.activatedRoute.snapshot.params['id'];
    this.file$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)((0,src_app_features_posts_store_files_selectors__WEBPACK_IMPORTED_MODULE_0__.selectFileById)(this.fileId)));
    this.file$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(file => !file && this.store.dispatch((0,src_app_features_posts_store_upload_actions__WEBPACK_IMPORTED_MODULE_1__.readFilesItem)({
      id: this.fileId
    })));
  }
  delete(fileId) {
    this.store.dispatch((0,src_app_features_posts_store_upload_actions__WEBPACK_IMPORTED_MODULE_1__.deleteFilesItem)({
      id: fileId
    }));
  }
}
FileDetailsComponent.ɵfac = function FileDetailsComponent_Factory(t) {
  return new (t || FileDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
FileDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FileDetailsComponent,
  selectors: [["app-file-details"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["ariaLabel", "Back to Posts List", 3, "link"], ["mat-icon-button", "", "color", "primary", "aria-label", "Edit File", 1, "ml-auto", 3, "routerLink"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete File", 3, "click"], ["test-id", "page-content", 1, "page-content", 3, "innerHTML"]],
  template: function FileDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, FileDetailsComponent_div_0_Template, 12, 6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.file$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderBackComponent, _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4541:
/*!*****************************************************************************!*\
  !*** ./src/app/features/upload/components/file-list/file-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileListComponent": () => (/* binding */ FileListComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_features_posts_store_files_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/posts/store/files.selectors */ 2302);
/* harmony import */ var src_app_features_posts_store_upload_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/posts/store/upload.actions */ 5776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header-title/page-header-title.component */ 3593);
/* harmony import */ var _shared_pipes_byte_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/byte.pipe */ 5030);















const _c0 = function (a2) {
  return ["/", "upload", a2];
};
function FileListComponent_div_0_mat_list_item_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list-item", 9)(1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "event_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, file_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](file_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 4, file_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 6, file_r3.size));
  }
}
const _c1 = function () {
  return ["/dashboard"];
};
const _c2 = function () {
  return ["/", "upload", "create"];
};
function FileListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "app-page-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-page-header-back", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "app-page-header-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "File List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileListComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4)(9, "button", 5)(10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6)(13, "mat-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, FileListComponent_div_0_mat_list_item_14_Template, 11, 10, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const files_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("link", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("addons", files_r1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", files_r1);
  }
}
class FileListComponent {
  constructor(store, cdr) {
    this.store = store;
    this.cdr = cdr;
    store.dispatch((0,src_app_features_posts_store_upload_actions__WEBPACK_IMPORTED_MODULE_1__.readFiles)());
    this.files$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_features_posts_store_files_selectors__WEBPACK_IMPORTED_MODULE_0__.selectFiles));
  }
  onRefresh() {
    this.store.dispatch((0,src_app_features_posts_store_upload_actions__WEBPACK_IMPORTED_MODULE_1__.readFiles)());
    this.files$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_features_posts_store_files_selectors__WEBPACK_IMPORTED_MODULE_0__.selectFiles));
    this.cdr.detectChanges();
  }
}
FileListComponent.ɵfac = function FileListComponent_Factory(t) {
  return new (t || FileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};
FileListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FileListComponent,
  selectors: [["app-file-list"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["ariaLabel", "Back to homepage", 3, "link"], [3, "addons"], ["mat-icon-button", "", "color", "primary", "aria-label", "Reload", 1, "ml-auto", 3, "click"], [1, "floating-action"], ["mat-fab", "", "color", "primary", "aria-label", "Add new item", 3, "routerLink"], [1, "page-content"], [1, "pt-0"], ["test-id", "list-item", "mat-ripple", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["test-id", "list-item", "mat-ripple", "", 3, "routerLink"], ["mat-list-icon", "", "color", "accent"], ["mat-line", ""], [1, "property-date"], ["mat-line", "", 1, "property-size"]],
  template: function FileListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, FileListComponent_div_0_Template, 15, 6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.files$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_12__.MatLegacyList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_12__.MatLegacyListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatLine, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_12__.MatLegacyListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderBackComponent, _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _shared_pipes_byte_pipe__WEBPACK_IMPORTED_MODULE_5__.BytesPipe],
  styles: [".page-content[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   .property-size[_ngcontent-%COMP%] {\n  color: grey;\n}\n.page-content[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   .property-date[_ngcontent-%COMP%] {\n  font-size: smaller;\n}\n/*# sourceURL=webpack://./src/app/features/upload/components/file-list/file-list.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdXBsb2FkL2NvbXBvbmVudHMvZmlsZS1saXN0L2ZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRlbnQgbWF0LWxpc3QtaXRlbSAucHJvcGVydHktc2l6ZSB7XG4gIGNvbG9yOiBncmV5O1xufVxuLnBhZ2UtY29udGVudCBtYXQtbGlzdC1pdGVtIC5wcm9wZXJ0eS1kYXRlIHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 6196:
/*!*********************************************************************!*\
  !*** ./src/app/features/upload/components/files/files.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesComponent": () => (/* binding */ FilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FilesComponent {}
FilesComponent.ɵfac = function FilesComponent_Factory(t) {
  return new (t || FilesComponent)();
};
FilesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FilesComponent,
  selectors: [["app-files"]],
  decls: 1,
  vars: 0,
  template: function FilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 982:
/*!***********************************************************************!*\
  !*** ./src/app/features/upload/components/upload/upload.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadComponent": () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var src_app_features_posts_store_upload_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/posts/store/upload.actions */ 5776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);





const _c0 = ["preview"];
function UploadComponent_h2_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.fileName);
  }
}
class UploadComponent {
  constructor(cdr, store) {
    this.cdr = cdr;
    this.store = store;
    this.previewValue = 'No files currently selected for upload';
    this.fileName = '';
  }
  updateImageDisplay(file) {
    file.text().then(text => {
      this.previewValue = text;
      this.cdr.detectChanges();
    });
    this.fileName = file.name;
    this.selectedFile = file;
  }
  saveFile() {
    if (!this.selectedFile) return;
    this.selectedFile.text().then(t => {
      const saveFile = {
        id: Date.now().toString(),
        name: this.selectedFile.name,
        size: this.selectedFile.size,
        lastModified: this.selectedFile.lastModified,
        type: this.selectedFile.type,
        content: t
      };
      this.store.dispatch((0,src_app_features_posts_store_upload_actions__WEBPACK_IMPORTED_MODULE_0__.createFilesItem)({
        file: saveFile
      }));
    });
  }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) {
  return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
UploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UploadComponent,
  selectors: [["app-upload"]],
  viewQuery: function UploadComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
    }
  },
  decls: 14,
  vars: 2,
  consts: [[1, "form"], ["type", "button", "mat-raised-button", "", 3, "click"], ["type", "file", "id", "file", "name", "file", "accept", ".txt, plain/text", "hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], [1, "preview"], ["preview", ""], [4, "ngIf"], [1, "submit"], ["mat-button", "", 3, "click"]],
  template: function UploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Choose File");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_4_listener($event) {
        return ctx.updateImageDisplay($event.target.files[0]);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UploadComponent_h2_8_Template, 2, 1, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_12_listener() {
        return ctx.saveFile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.previewValue);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__.MatLegacyButton],
  styles: [".form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.form[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.form[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: lightgray;\n  padding: 16px;\n}\n.form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceURL=webpack://./src/app/features/upload/components/upload/upload.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdXBsb2FkL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUNOO0FBR0U7RUFDRSxZQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZm9ybSAucHJldmlldyB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLmZvcm0gLnByZXZpZXcgcHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5mb3JtIC5zdWJtaXQge1xuICBmbG9hdDogcmlnaHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 5959:
/*!**********************************************************!*\
  !*** ./src/app/features/upload/upload-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadRoutingModule": () => (/* binding */ UploadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_file_details_file_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/file-details/file-details.component */ 7410);
/* harmony import */ var _components_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/file-list/file-list.component */ 4541);
/* harmony import */ var _components_files_files_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/files/files.component */ 6196);
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/upload/upload.component */ 982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  component: _components_files_files_component__WEBPACK_IMPORTED_MODULE_2__.FilesComponent,
  children: [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    component: _components_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_1__.FileListComponent
  }, {
    path: 'create',
    component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__.UploadComponent
  }, {
    path: ':id',
    component: _components_file_details_file_details_component__WEBPACK_IMPORTED_MODULE_0__.FileDetailsComponent
  }]
}];
class UploadRoutingModule {}
UploadRoutingModule.ɵfac = function UploadRoutingModule_Factory(t) {
  return new (t || UploadRoutingModule)();
};
UploadRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: UploadRoutingModule
});
UploadRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UploadRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 4433:
/*!**************************************************!*\
  !*** ./src/app/features/upload/upload.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadModule": () => (/* binding */ UploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/upload/upload.component */ 982);
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-routing.module */ 5959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _components_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/file-list/file-list.component */ 4541);
/* harmony import */ var _components_files_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/files/files.component */ 6196);
/* harmony import */ var _components_file_details_file_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/file-details/file-details.component */ 7410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class UploadModule {}
UploadModule.ɵfac = function UploadModule_Factory(t) {
  return new (t || UploadModule)();
};
UploadModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: UploadModule
});
UploadModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UploadModule, {
    declarations: [_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent, _components_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_3__.FileListComponent, _components_files_files_component__WEBPACK_IMPORTED_MODULE_4__.FilesComponent, _components_file_details_file_details_component__WEBPACK_IMPORTED_MODULE_5__.FileDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_upload_upload_module_ts.js.map