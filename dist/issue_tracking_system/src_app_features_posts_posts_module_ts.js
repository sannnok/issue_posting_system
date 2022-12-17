"use strict";
(self["webpackChunkissue_tracking_system"] = self["webpackChunkissue_tracking_system"] || []).push([["src_app_features_posts_posts_module_ts"],{

/***/ 9432:
/*!********************************************************************************!*\
  !*** ./src/app/features/posts/components/post-create/post-create.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCreateComponent": () => (/* binding */ PostCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/posts.actions */ 5786);
/* harmony import */ var _store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/posts.selectors */ 5114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/notification-bar.service */ 992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-header-title/page-header-title.component */ 3593);
/* harmony import */ var _shared_components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/chips-multi-select/chips-multi-select.component */ 4931);


















function PostCreateComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Title of Post is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PostCreateComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Body of Post is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/", "posts"];
};
class PostCreateComponent {
  constructor(formBuilder, store, notification) {
    this.formBuilder = formBuilder;
    this.store = store;
    this.notification = notification;
  }
  ngOnInit() {
    this.postForm = this.createPostCreateFormGroup();
    this.options$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllTags));
    console.log('PostForm: ', this.postForm.controls['title']);
  }
  onPostFormSubmit() {
    if (this.postForm.valid) {
      this.store.dispatch((0,_store_posts_actions__WEBPACK_IMPORTED_MODULE_0__.createPostsItem)({
        post: this.postForm.value
      }));
    } else {
      this.notification.showError('Form contains errors. Fix it and try again.');
    }
  }
  createPostCreateFormGroup() {
    return this.formBuilder.group({
      date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      title: ['dd', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      tags: [[]]
    });
  }
  canDeactivate() {
    return !this.postForm.dirty;
  }
}
PostCreateComponent.ɵfac = function PostCreateComponent_Factory(t) {
  return new (t || PostCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_2__.NotificationBarService));
};
PostCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PostCreateComponent,
  selectors: [["app-post-create"]],
  decls: 28,
  vars: 11,
  consts: [["ariaLabel", "Back to Posts List", 3, "link"], [1, "page-content"], [1, "squeeze"], [3, "formGroup", "submit"], [1, "w-100"], ["matInput", "", "maxlength", "40", 3, "formControlName"], ["title", ""], [4, "ngIf"], ["align", "end"], ["matInput", "", "rows", "10", 3, "formControlName"], [3, "formControlName", "options"], [1, "text-right"], ["test-id", "cancel-btn", "mat-button", "", "type", "button", 3, "routerLink"], ["test-id", "submit-btn", "mat-flat-button", "", "color", "primary", "type", "submit"]],
  template: function PostCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "app-page-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-page-header-back", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-page-header-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Post Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 1)(6, "div", 2)(7, "mat-card")(8, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function PostCreateComponent_Template_form_submit_8_listener() {
        return ctx.onPostFormSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field", 4)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Post Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, PostCreateComponent_mat_error_14_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-hint", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 4)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Body");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "textarea", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PostCreateComponent_mat_error_21_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "app-chips-multi-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11)(24, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("link", "/posts/list");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.postForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlName", "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.postForm.get("title").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _r0.value.length, " / 40");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlName", "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.postForm.get("body").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlName", "tags")("options", ctx.options$);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLegacyHint, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_14__.MatLegacyInput, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_15__.MatLegacyCard, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderBackComponent, _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_5__.PageHeaderTitleComponent, _shared_components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_6__.ChipsMultiSelectComponent],
  styles: [".text-right[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  background-color: #0a2a42 !important;\n}\n/*# sourceURL=webpack://./src/app/features/posts/components/post-create/post-create.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcG9zdHMvY29tcG9uZW50cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yaWdodCBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMmE0MiAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 4299:
/*!**********************************************************************************!*\
  !*** ./src/app/features/posts/components/post-details/post-details.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDetailsComponent": () => (/* binding */ PostDetailsComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_posts_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/posts.selectors */ 5114);
/* harmony import */ var _store_posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/posts.actions */ 5786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header-title/page-header-title.component */ 3593);













const _c0 = function (a2) {
  return ["/", "posts", a2, "update"];
};
function PostDetailsComponent_div_0_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostDetailsComponent_div_0_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const post_r1 = restoredCtx.ngIf;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.delete(post_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("link", "/posts/list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, post_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", post_r1.body, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
class PostDetailsComponent {
  constructor(activatedRoute, store) {
    this.activatedRoute = activatedRoute;
    this.store = store;
  }
  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params['id'];
    this.post$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)((0,_store_posts_selectors__WEBPACK_IMPORTED_MODULE_0__.selectPostById)(this.postId)));
    this.post$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(post => !post && this.store.dispatch((0,_store_posts_actions__WEBPACK_IMPORTED_MODULE_1__.readPostsItem)({
      id: this.postId
    })));
  }
  delete(postId) {
    this.store.dispatch((0,_store_posts_actions__WEBPACK_IMPORTED_MODULE_1__.deletePostsItem)({
      id: postId
    }));
  }
}
PostDetailsComponent.ɵfac = function PostDetailsComponent_Factory(t) {
  return new (t || PostDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
PostDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PostDetailsComponent,
  selectors: [["app-post-details"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["ariaLabel", "Back to Posts List", 3, "link"], ["mat-icon-button", "", "color", "primary", "aria-label", "Edit Post", 1, "ml-auto", 3, "routerLink"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete Post", 3, "click"], ["test-id", "page-content", 1, "page-content", 3, "innerHTML"]],
  template: function PostDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PostDetailsComponent_div_0_Template, 12, 6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.post$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderBackComponent, _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: [".page-header-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceURL=webpack://./src/app/features/posts/components/post-details/post-details.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcG9zdHMvY29tcG9uZW50cy9wb3N0LWRldGFpbHMvcG9zdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlci10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 8287:
/*!********************************************************************************!*\
  !*** ./src/app/features/posts/components/post-update/post-update.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostUpdateComponent": () => (/* binding */ PostUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/posts.actions */ 5786);
/* harmony import */ var _store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/posts.selectors */ 5114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/notification-bar.service */ 992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _shared_components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/chips-multi-select/chips-multi-select.component */ 4931);



















function PostUpdateComponent_div_0_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Title of Post is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PostUpdateComponent_div_0_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Body of Post is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/", "posts"];
};
function PostUpdateComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "app-page-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-page-header-back", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostUpdateComponent_div_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const post_r1 = restoredCtx.ngIf;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.delete(post_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "mat-card")(9, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function PostUpdateComponent_div_0_Template_form_submit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.onPostFormSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field", 6)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Post Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PostUpdateComponent_div_0_mat_error_15_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 6)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PostUpdateComponent_div_0_mat_error_22_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-chips-multi-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 12)(25, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("link", "/posts/list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.postForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _r2.value.length, " / 40");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("body").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", "tags")("options", ctx_r0.options$);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
  }
}
class PostUpdateComponent {
  constructor(activatedRoute, formBuilder, store, notification) {
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.store = store;
    this.notification = notification;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
  }
  ngOnInit() {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id::::: ', postId);
    this.post$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)((0,_store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPostById)(postId)));
    this.subscriptions.add(this.post$.subscribe(post => {
      this.postForm = this.createPostFormGroup(post);
      if (!post) {
        this.store.dispatch((0,_store_posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPostsItem)({
          id: postId
        }));
      }
    }));
    this.options$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllTags));
  }
  onPostFormSubmit() {
    if (this.postForm.valid) {
      this.store.dispatch((0,_store_posts_actions__WEBPACK_IMPORTED_MODULE_0__.updatePostsItem)({
        updatePost: {
          id: this.postForm.controls.id.value,
          changes: this.postForm.value
        }
      }));
    } else {
      this.notification.showError('Form contains errors. Fix it and try again.');
    }
  }
  delete(postId) {
    this.store.dispatch((0,_store_posts_actions__WEBPACK_IMPORTED_MODULE_0__.deletePostsItem)({
      id: postId
    }));
  }
  canDeactivate() {
    return !this.postForm.dirty;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  createPostFormGroup(post) {
    return this.formBuilder.group({
      id: [post ? post.id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      title: [post ? post.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      body: [post ? post.body : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      tags: [post ? post.tags : [], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
  }
}
PostUpdateComponent.ɵfac = function PostUpdateComponent_Factory(t) {
  return new (t || PostUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_2__.NotificationBarService));
};
PostUpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PostUpdateComponent,
  selectors: [["app-post-update"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["ariaLabel", "Back to Posts List", 3, "link"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete Post", 1, "ml-auto", 3, "click"], [1, "page-content"], [1, "squeeze"], [3, "formGroup", "submit"], [1, "w-100"], ["matInput", "", "maxlength", "40", 3, "formControlName"], ["title", ""], ["align", "end"], ["matInput", "", "rows", "10", 3, "formControlName"], [3, "formControlName", "options"], [1, "text-right"], ["mat-button", "", "type", "button", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", "type", "submit"]],
  template: function PostUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PostUpdateComponent_div_0_Template, 29, 11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.post$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLegacyHint, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_15__.MatLegacyInput, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_16__.MatLegacyCard, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderBackComponent, _shared_components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_5__.ChipsMultiSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.text-right[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  background-color: #0a2a42 !important;\n}\n/*# sourceURL=webpack://./src/app/features/posts/components/post-update/post-update.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcG9zdHMvY29tcG9uZW50cy9wb3N0LXVwZGF0ZS9wb3N0LXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udGV4dC1yaWdodCBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMmE0MiAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 7316:
/*!******************************************************************************!*\
  !*** ./src/app/features/posts/components/posts-list/posts-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsListComponent": () => (/* binding */ PostsListComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/posts.actions */ 5786);
/* harmony import */ var _store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/posts.selectors */ 5114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 2802);
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header-back/page-header-back.component */ 5641);
/* harmony import */ var _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header-title/page-header-title.component */ 3593);
/* harmony import */ var _shared_components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/chips-multi-select/chips-multi-select.component */ 4931);


















function PostsListComponent_div_0_app_chips_multi_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-chips-multi-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueCahnged", function PostsListComponent_div_0_app_chips_multi_select_6_Template_app_chips_multi_select_valueCahnged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.filter)("options", ctx_r2.options$)("input", false);
  }
}
const _c0 = function (a2) {
  return ["/", "posts", a2];
};
function PostsListComponent_div_0_mat_list_item_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list-item", 12)(1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "event_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, post_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r6.title);
  }
}
const _c1 = function () {
  return ["/", "posts", "create"];
};
function PostsListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "app-page-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-page-header-back", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "app-page-header-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Posts List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PostsListComponent_div_0_app_chips_multi_select_6_Template, 1, 3, "app-chips-multi-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostsListComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6)(12, "button", 7)(13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8)(16, "mat-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, PostsListComponent_div_0_mat_list_item_17_Template, 5, 4, "mat-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const posts_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("link", "/dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("addons", posts_r1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 5, ctx_r0.options$).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", posts_r1);
  }
}
class PostsListComponent {
  constructor(store, cdr) {
    this.store = store;
    this.cdr = cdr;
    this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl([]);
    store.dispatch((0,_store_posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPosts)());
    this.posts$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPosts));
    this.options$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllTags));
  }
  onRefresh() {
    this.store.dispatch((0,_store_posts_actions__WEBPACK_IMPORTED_MODULE_0__.readPosts)());
  }
  applyFilter(filterTags) {
    this.posts$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_posts_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPosts), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(posts => posts.filter(post => {
      if (!filterTags.length) return true;
      let ret = true;
      for (let filterTag of filterTags) {
        if (!post.tags.includes(filterTag)) ret = false;
      }
      return ret;
    })));
    this.cdr.detectChanges();
  }
}
PostsListComponent.ɵfac = function PostsListComponent_Factory(t) {
  return new (t || PostsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};
PostsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PostsListComponent,
  selectors: [["app-posts-list"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["ariaLabel", "Back to homepage", 3, "link"], [3, "addons"], [1, "posts-filter"], [3, "formControl", "options", "input", "valueCahnged", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "aria-label", "Reload", 1, "ml-auto", 3, "click"], [1, "floating-action"], ["mat-fab", "", "color", "primary", "aria-label", "Add new item", 3, "routerLink"], [1, "page-content"], [1, "pt-0"], ["test-id", "list-item", "mat-ripple", "", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "formControl", "options", "input", "valueCahnged"], ["test-id", "list-item", "mat-ripple", "", 3, "routerLink"], ["mat-list-icon", "", "color", "accent"], ["mat-line", ""]],
  template: function PostsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PostsListComponent_div_0_Template, 18, 8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.posts$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_14__.MatLegacyList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_14__.MatLegacyListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatLine, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_14__.MatLegacyListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRipple, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderBackComponent, _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderTitleComponent, _shared_components_chips_multi_select_chips_multi_select_component__WEBPACK_IMPORTED_MODULE_5__.ChipsMultiSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: [".post-item__date[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.posts-filter[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 0 16px;\n  margin-top: 10px;\n}\n\n.page-header-title[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: #1a231d;\n}\n\n.floating-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #918e8e;\n}\n.floating-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: gainsboro !important;\n}\n\n  .mat-chip.mat-standard-chip {\n  background-color: rgba(145, 142, 142, 0.49);\n  color: rgba(0, 0, 0, 0.87);\n}\n  .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: rgba(0, 0, 0, 0.62);\n  color: white;\n}\n  .mat-focus-indicator.mat-icon-button.mat-button-base.mat-primary {\n  color: black;\n}\n  .posts-filter .mat-form-field-underline {\n  display: none;\n}\n  mat-form-field .mat-chip-list-wrapper {\n  flex-wrap: nowrap;\n  overflow-y: scroll;\n  -ms-overflow-style: none; \n  scrollbar-width: none; \n}\n  mat-form-field .mat-chip-list-wrapper::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceURL=webpack://./src/app/features/posts/components/posts-list/posts-list.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcG9zdHMvY29tcG9uZW50cy9wb3N0cy1saXN0L3Bvc3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjtBQUFFO0VBQ0UsMkJBQUE7QUFFSjs7QUFJSTtFQUNFLDJDQUFBO0VBQ0EsMEJBQUE7QUFETjtBQUdJO0VBQ0UscUNBQUE7RUFDQSxZQUFBO0FBRE47QUFLRTtFQUNFLFlBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtBQUpKO0FBT0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsd0JBQUEsRUFBQSxnQkFBQTtFQUNBLHFCQUFBLEVBQUEsWUFBQTtBQU5KO0FBUUk7RUFDRSxhQUFBO0FBTk4iLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1pdGVtX19kYXRlIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucG9zdHMtZmlsdGVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGFnZS1oZWFkZXItdGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjMWEyMzFkO1xufVxuXG4uZmxvYXRpbmctYWN0aW9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MThlOGU7XG59XG4uZmxvYXRpbmctYWN0aW9uIGJ1dHRvbiBtYXQtaWNvbiB7XG4gIGNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxNDIsIDE0MiwgMC40OSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuOjpuZy1kZWVwIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtaWNvbi1idXR0b24ubWF0LWJ1dHRvbi1iYXNlLm1hdC1wcmltYXJ5IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuOjpuZy1kZWVwIC5wb3N0cy1maWx0ZXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG59XG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 9820:
/*!********************************************************!*\
  !*** ./src/app/features/posts/posts-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsRoutingModule": () => (/* binding */ PostsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.component */ 4012);
/* harmony import */ var _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/posts-list/posts-list.component */ 7316);
/* harmony import */ var _components_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/post-create/post-create.component */ 9432);
/* harmony import */ var _components_post_update_post_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/post-update/post-update.component */ 8287);
/* harmony import */ var _components_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/post-details/post-details.component */ 4299);
/* harmony import */ var _shared_services_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/unsaved-changes.guard */ 3537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [{
  path: '',
  component: _posts_component__WEBPACK_IMPORTED_MODULE_0__.PostsComponent,
  children: [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    component: _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_1__.PostsListComponent
  }, {
    path: 'create',
    component: _components_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_2__.PostCreateComponent,
    canDeactivate: [_shared_services_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_5__.UnsavedChangesGuard]
  }, {
    path: ':id/update',
    component: _components_post_update_post_update_component__WEBPACK_IMPORTED_MODULE_3__.PostUpdateComponent,
    canDeactivate: [_shared_services_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_5__.UnsavedChangesGuard]
  }, {
    path: ':id',
    component: _components_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_4__.PostDetailsComponent
  }]
}];
class PostsRoutingModule {}
PostsRoutingModule.ɵfac = function PostsRoutingModule_Factory(t) {
  return new (t || PostsRoutingModule)();
};
PostsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: PostsRoutingModule
});
PostsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PostsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 4012:
/*!***************************************************!*\
  !*** ./src/app/features/posts/posts.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsComponent": () => (/* binding */ PostsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class PostsComponent {}
PostsComponent.ɵfac = function PostsComponent_Factory(t) {
  return new (t || PostsComponent)();
};
PostsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PostsComponent,
  selectors: [["app-posts"]],
  decls: 1,
  vars: 0,
  template: function PostsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 5345:
/*!************************************************!*\
  !*** ./src/app/features/posts/posts.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsModule": () => (/* binding */ PostsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts-routing.module */ 9820);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component */ 4012);
/* harmony import */ var _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/posts-list/posts-list.component */ 7316);
/* harmony import */ var _components_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/post-details/post-details.component */ 4299);
/* harmony import */ var _components_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/post-create/post-create.component */ 9432);
/* harmony import */ var _components_post_update_post_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/post-update/post-update.component */ 8287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










class PostsModule {}
PostsModule.ɵfac = function PostsModule_Factory(t) {
  return new (t || PostsModule)();
};
PostsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: PostsModule
});
PostsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PostsModule, {
    declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__.PostsComponent, _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_3__.PostsListComponent, _components_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_4__.PostDetailsComponent, _components_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__.PostCreateComponent, _components_post_update_post_update_component__WEBPACK_IMPORTED_MODULE_6__.PostUpdateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 5114:
/*!*********************************************************!*\
  !*** ./src/app/features/posts/store/posts.selectors.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAllTags": () => (/* binding */ selectAllTags),
/* harmony export */   "selectPostById": () => (/* binding */ selectPostById),
/* harmony export */   "selectPosts": () => (/* binding */ selectPosts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _posts_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.state */ 3128);


const {
  selectAll
} = _posts_state__WEBPACK_IMPORTED_MODULE_0__.postsAdapter.getSelectors();
const selectPostsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('posts');
const selectPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectPostsState, selectAll);
const selectPostById = postId => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectPostsState, postsState => postsState.entities[postId]);
const selectAllTags = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectPostsState, postsState => postsState.allPossibleTags);

/***/ })

}]);
//# sourceMappingURL=src_app_features_posts_posts_module_ts.js.map