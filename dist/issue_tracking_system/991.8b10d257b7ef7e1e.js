"use strict";(self.webpackChunkissue_tracking_system=self.webpackChunkissue_tracking_system||[]).push([[991],{991:(P,p,n)=>{n.r(p),n.d(p,{PostsModule:()=>M});var b=n(6895),h=n(4006),v=n(9170),t=n(4650);class y{}y.\u0275fac=function(e){return new(e||y)},y.\u0275cmp=t.Xpm({type:y,selectors:[["app-posts"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},dependencies:[v.lC],changeDetection:0});var _=n(5359),d=n(5786),u=n(3128);const{selectAll:c}=u.N.getSelectors(),m=(0,_.ZF)("posts"),l=(0,_.P1)(m,c),o=a=>(0,_.P1)(m,e=>e.entities[a]),r=(0,_.P1)(m,a=>a.allPossibleTags);var s=n(4850),f=n(9818),S=n(7392),E=n(2903),O=n(3238),x=n(2802),k=n(5641),D=n(3593),H=n(9521),L=n(9923),B=n(839),q=n(6787),X=n(7057),z=n(2014);var et=n(7625),Z=n(8455);function rt(a,e){1&a&&(t.TgZ(0,"mat-icon"),t._uU(1,"check"),t.qZA())}function ot(a,e){if(1&a){const i=t.EpF();t.TgZ(0,"mat-chip",4,5),t.NdJ("click",function(){t.CHM(i);const C=t.MAs(1),T=t.oxw();return t.KtG(T.toggleSelection(C))}),t.YNc(2,rt,2,0,"mat-icon",6),t._uU(3),t.qZA()}if(2&a){const i=e.$implicit,g=t.MAs(1);t.Q6J("value",i),t.xp6(2),t.Q6J("ngIf",g.selected),t.xp6(1),t.hij(" ",i," ")}}function nt(a,e){if(1&a){const i=t.EpF();t.TgZ(0,"input",7),t.NdJ("matChipInputTokenEnd",function(C){t.CHM(i);const T=t.oxw();return t.KtG(T.addChip(C))}),t.qZA()}if(2&a){const i=t.oxw(),g=t.MAs(2);t.Q6J("matChipInputFor",g)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",!0)}}class U{constructor(e){this.cdr=e,this.input=!0,this.valueCahnged=new t.vpe,this.value=[],this.disabled=!1,this.separatorKeysCodes=[H.K5,H.OC],this.onChipAdded$=new B.t,this.destroy$=new X.Subject}ngOnInit(){this.items$=(0,q.T)(this.loadPosts(),this.onChipAdded$).pipe((0,z.R)((e,i)=>{switch(i.type){case"loaded":return i.items;case"added":return[...e,i.item]}},[]),function W(a,e,i){let g;return g=a&&"object"==typeof a?a:{bufferSize:a,windowTime:e,refCount:!1,scheduler:i},C=>C.lift(function tt({bufferSize:a=Number.POSITIVE_INFINITY,windowTime:e=Number.POSITIVE_INFINITY,refCount:i,scheduler:g}){let C,w,T=0,Q=!1,$=!1;return function(Pt){let Y;T++,!C||Q?(Q=!1,C=new B.t(a,e,g),Y=C.subscribe(this),w=Pt.subscribe({next(R){C.next(R)},error(R){Q=!0,C.error(R)},complete(){$=!0,w=void 0,C.complete()}}),$&&(w=void 0)):Y=C.subscribe(this),this.add(()=>{T--,Y.unsubscribe(),Y=void 0,w&&!$&&i&&0===T&&(w.unsubscribe(),w=void 0,C=void 0)})}}(g))}(1))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}loadPosts(){return this.options$.pipe((0,s.U)(e=>({type:"loaded",items:e})))}ngAfterViewInit(){this.selectChips(this.value),this.chipList.chipSelectionChanges.pipe((0,et.R)(this.destroy$),(0,s.U)(e=>e.source)).subscribe(e=>{this.value=e.selected?[...this.value,e.value]:this.value.filter(i=>i!==e.value),this.propagateChange(this.value)})}toggleSelection(e){this.disabled||e.toggleSelected(!0)}writeValue(e){this.chipList&&e?this.selectChips(e):e&&(this.value=e)}selectChips(e){this.chipList.chips.forEach(g=>g.deselect()),this.chipList.chips.filter(g=>e.includes(g.value)).forEach(g=>g.select()),this.cdr.detectChanges()}registerOnChange(e){this.onChange=e}registerOnTouched(e){}setDisabledState(e){this.disabled=e}propagateChange(e){this.onChange&&(this.onChange(e),this.valueCahnged.next(e))}addChip(e){let i=e.input,g=e.value;(g||"").trim()&&(this.value.push(g.trim()),this.onChipAdded$.next({type:"added",item:g.trim()})),i&&(i.value="")}}function st(a,e){if(1&a){const i=t.EpF();t.TgZ(0,"app-chips-multi-select",11),t.NdJ("valueCahnged",function(C){t.CHM(i);const T=t.oxw(2);return t.KtG(T.applyFilter(C))}),t.qZA()}if(2&a){const i=t.oxw(2);t.Q6J("formControl",i.filter)("options",i.options$)("input",!1)}}U.\u0275fac=function(e){return new(e||U)(t.Y36(t.sBO))},U.\u0275cmp=t.Xpm({type:U,selectors:[["app-chips-multi-select"]],viewQuery:function(e,i){if(1&e&&t.Gf(L.ir,5),2&e){let g;t.iGM(g=t.CRH())&&(i.chipList=g.first)}},inputs:{input:"input",options$:["options","options$"]},outputs:{valueCahnged:"valueCahnged"},features:[t._Bn([{provide:h.JU,useExisting:U,multi:!0}])],decls:6,vars:4,consts:[["selectable","","multiple","","aria-label","Fish selection"],["myChipList",""],["test-id","chip",3,"value","click",4,"ngFor","ngForOf"],[3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd",4,"ngIf"],["test-id","chip",3,"value","click"],["c","matChip"],[4,"ngIf"],[3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-form-field")(1,"mat-chip-list",0,1),t.YNc(3,ot,4,3,"mat-chip",2),t.ALo(4,"async"),t.YNc(5,nt,1,3,"input",3),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,2,i.items$)),t.xp6(2),t.Q6J("ngIf",i.input))},dependencies:[b.sg,b.O5,S.Hw,Z.v_,L.ir,L.lw,L.IP,b.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%};{%BLOCK%}"],changeDetection:0});const it=function(a){return["/","posts",a]};function ct(a,e){if(1&a&&(t.TgZ(0,"mat-list-item",12)(1,"mat-icon",13),t._uU(2,"event_note"),t.qZA(),t.TgZ(3,"div",14),t._uU(4),t.qZA()()),2&a){const i=e.$implicit;t.Q6J("routerLink",t.VKq(2,it,i.id)),t.xp6(4),t.Oqu(i.title)}}const at=function(){return["/","posts","create"]};function ut(a,e){if(1&a){const i=t.EpF();t.TgZ(0,"div")(1,"app-page-header"),t._UZ(2,"app-page-header-back",1),t.TgZ(3,"app-page-header-title",2),t._uU(4,"Posts List"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,st,1,3,"app-chips-multi-select",4),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){t.CHM(i);const C=t.oxw();return t.KtG(C.onRefresh())}),t.TgZ(9,"mat-icon"),t._uU(10,"refresh"),t.qZA()()(),t.TgZ(11,"div",6)(12,"button",7)(13,"mat-icon"),t._uU(14,"add"),t.qZA()()(),t.TgZ(15,"div",8)(16,"mat-list",9),t.YNc(17,ct,5,4,"mat-list-item",10),t.qZA()()()}if(2&a){const i=e.ngIf,g=t.oxw();t.xp6(2),t.Q6J("link","/dashboard"),t.xp6(1),t.Q6J("addons",i.length),t.xp6(3),t.Q6J("ngIf",t.lcZ(7,5,g.options$).length),t.xp6(6),t.Q6J("routerLink",t.DdM(7,at)),t.xp6(5),t.Q6J("ngForOf",i)}}class A{constructor(e,i){this.store=e,this.cdr=i,this.filter=new h.p4([]),e.dispatch((0,d.O9)()),this.posts$=this.store.pipe((0,_.Ys)(l)),this.options$=this.store.pipe((0,_.Ys)(r))}onRefresh(){this.store.dispatch((0,d.O9)())}applyFilter(e){this.posts$=this.store.pipe((0,_.Ys)(l),(0,s.U)(i=>i.filter(g=>{if(!e.length)return!0;let C=!0;for(let T of e)g.tags.includes(T)||(C=!1);return C}))),this.cdr.detectChanges()}}A.\u0275fac=function(e){return new(e||A)(t.Y36(_.yh),t.Y36(t.sBO))},A.\u0275cmp=t.Xpm({type:A,selectors:[["app-posts-list"]],decls:2,vars:3,consts:[[4,"ngIf"],["ariaLabel","Back to homepage",3,"link"],[3,"addons"],[1,"posts-filter"],[3,"formControl","options","input","valueCahnged",4,"ngIf"],["mat-icon-button","","color","primary","aria-label","Reload",1,"ml-auto",3,"click"],[1,"floating-action"],["mat-fab","","color","primary","aria-label","Add new item",3,"routerLink"],[1,"page-content"],[1,"pt-0"],["test-id","list-item","mat-ripple","",3,"routerLink",4,"ngFor","ngForOf"],[3,"formControl","options","input","valueCahnged"],["test-id","list-item","mat-ripple","",3,"routerLink"],["mat-list-icon","","color","accent"],["mat-line",""]],template:function(e,i){1&e&&(t.YNc(0,ut,18,8,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.posts$))},dependencies:[b.sg,b.O5,v.rH,h.JJ,h.oH,f.eB,S.Hw,E.Zj,E.oh,O.X2,E.ap,O.wG,x.q,k.x,D.S,U,b.Ov],styles:[".post-item__date[_ngcontent-%COMP%]{opacity:.5}.posts-filter[_ngcontent-%COMP%]{width:70%;padding:0 16px;margin-top:10px}.page-header-title[_ngcontent-%COMP%]{white-space:nowrap!important}.mat-icon[_ngcontent-%COMP%]{color:#1a231d}.floating-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#918e8e}.floating-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#dcdcdc!important}  .mat-chip.mat-standard-chip{background-color:#918e8e7d;color:#000000de}  .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#0000009e;color:#fff}  .mat-focus-indicator.mat-icon-button.mat-button-base.mat-primary{color:#000}  .posts-filter .mat-form-field-underline{display:none}  mat-form-field .mat-chip-list-wrapper{flex-wrap:nowrap;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none}  mat-form-field .mat-chip-list-wrapper::-webkit-scrollbar{display:none}"],changeDetection:0});var N=n(9875),G=n(9203),K=n(8377);function pt(a,e){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Title of Post is required "),t.qZA())}function lt(a,e){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Body of Post is required "),t.qZA())}const ht=function(){return["/","posts"]};class I{constructor(e,i,g){this.formBuilder=e,this.store=i,this.notification=g}ngOnInit(){this.postForm=this.createPostCreateFormGroup(),this.options$=this.store.pipe((0,_.Ys)(r)),console.log("PostForm: ",this.postForm.controls.title)}onPostFormSubmit(){this.postForm.valid?this.store.dispatch((0,d.S6)({post:this.postForm.value})):this.notification.showError("Form contains errors. Fix it and try again.")}createPostCreateFormGroup(){return this.formBuilder.group({date:[new Date,h.kI.required],title:["dd",h.kI.required],body:["",h.kI.required],tags:[[]]})}canDeactivate(){return!this.postForm.dirty}}I.\u0275fac=function(e){return new(e||I)(t.Y36(h.QS),t.Y36(_.yh),t.Y36(N.S))},I.\u0275cmp=t.Xpm({type:I,selectors:[["app-post-create"]],decls:28,vars:11,consts:[["ariaLabel","Back to Posts List",3,"link"],[1,"page-content"],[1,"squeeze"],[3,"formGroup","submit"],[1,"w-100"],["matInput","","maxlength","40",3,"formControlName"],["title",""],[4,"ngIf"],["align","end"],["matInput","","rows","10",3,"formControlName"],[3,"formControlName","options"],[1,"text-right"],["test-id","cancel-btn","mat-button","","type","button",3,"routerLink"],["test-id","submit-btn","mat-flat-button","","color","primary","type","submit"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div")(1,"app-page-header"),t._UZ(2,"app-page-header-back",0),t.TgZ(3,"app-page-header-title"),t._uU(4,"Post Create"),t.qZA()(),t.TgZ(5,"div",1)(6,"div",2)(7,"mat-card")(8,"form",3),t.NdJ("submit",function(){return i.onPostFormSubmit()}),t.TgZ(9,"mat-form-field",4)(10,"mat-label"),t._uU(11,"Post Title"),t.qZA(),t._UZ(12,"input",5,6),t.YNc(14,pt,2,0,"mat-error",7),t.TgZ(15,"mat-hint",8),t._uU(16),t.qZA()(),t.TgZ(17,"mat-form-field",4)(18,"mat-label"),t._uU(19,"Body"),t.qZA(),t._UZ(20,"textarea",9),t.YNc(21,lt,2,0,"mat-error",7),t.qZA(),t._UZ(22,"app-chips-multi-select",10),t.TgZ(23,"div",11)(24,"button",12),t._uU(25,"Cancel"),t.qZA(),t.TgZ(26,"button",13),t._uU(27,"Submit"),t.qZA()()()()()()()),2&e){const g=t.MAs(13);t.xp6(2),t.Q6J("link","/posts/list"),t.xp6(6),t.Q6J("formGroup",i.postForm),t.xp6(4),t.Q6J("formControlName","title"),t.xp6(2),t.Q6J("ngIf",i.postForm.get("title").hasError("required")),t.xp6(2),t.hij("",g.value.length," / 40"),t.xp6(4),t.Q6J("formControlName","body"),t.xp6(1),t.Q6J("ngIf",i.postForm.get("body").hasError("required")),t.xp6(1),t.Q6J("formControlName","tags")("options",i.options$),t.xp6(2),t.Q6J("routerLink",t.DdM(10,ht))}},dependencies:[b.O5,v.rH,h._Y,h.Fj,h.JJ,h.JL,h.nD,h.sg,h.u,f.eB,Z.nI,Z.v_,Z.pH,Z.$V,G.k0,K.S$,x.q,k.x,D.S,U],styles:[".text-right[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{background-color:#0a2a42!important}"],changeDetection:0});var dt=n(2654);function ft(a,e){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Title of Post is required "),t.qZA())}function bt(a,e){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Body of Post is required "),t.qZA())}const mt=function(){return["/","posts"]};function _t(a,e){if(1&a){const i=t.EpF();t.TgZ(0,"div")(1,"app-page-header"),t._UZ(2,"app-page-header-back",1),t.TgZ(3,"button",2),t.NdJ("click",function(){const T=t.CHM(i).ngIf,w=t.oxw();return t.KtG(w.delete(T.id))}),t.TgZ(4,"mat-icon"),t._uU(5,"delete"),t.qZA()()(),t.TgZ(6,"div",3)(7,"div",4)(8,"mat-card")(9,"form",5),t.NdJ("submit",function(){t.CHM(i);const C=t.oxw();return t.KtG(C.onPostFormSubmit())}),t.TgZ(10,"mat-form-field",6)(11,"mat-label"),t._uU(12,"Post Title"),t.qZA(),t._UZ(13,"input",7,8),t.YNc(15,ft,2,0,"mat-error",0),t.TgZ(16,"mat-hint",9),t._uU(17),t.qZA()(),t.TgZ(18,"mat-form-field",6)(19,"mat-label"),t._uU(20,"Body"),t.qZA(),t._UZ(21,"textarea",10),t.YNc(22,bt,2,0,"mat-error",0),t.qZA(),t._UZ(23,"app-chips-multi-select",11),t.TgZ(24,"div",12)(25,"button",13),t._uU(26,"Cancel"),t.qZA(),t.TgZ(27,"button",14),t._uU(28,"Submit"),t.qZA()()()()()()()}if(2&a){const i=t.MAs(14),g=t.oxw();t.xp6(2),t.Q6J("link","/posts/list"),t.xp6(7),t.Q6J("formGroup",g.postForm),t.xp6(4),t.Q6J("formControlName","title"),t.xp6(2),t.Q6J("ngIf",g.postForm.get("title").hasError("required")),t.xp6(2),t.hij("",i.value.length," / 40"),t.xp6(4),t.Q6J("formControlName","body"),t.xp6(1),t.Q6J("ngIf",g.postForm.get("body").hasError("required")),t.xp6(1),t.Q6J("formControlName","tags")("options",g.options$),t.xp6(2),t.Q6J("routerLink",t.DdM(10,mt))}}class F{constructor(e,i,g,C){this.activatedRoute=e,this.formBuilder=i,this.store=g,this.notification=C,this.subscriptions=new dt.w}ngOnInit(){const e=this.activatedRoute.snapshot.paramMap.get("id");console.log("id::::: ",e),this.post$=this.store.pipe((0,_.Ys)(o(e))),this.subscriptions.add(this.post$.subscribe(i=>{this.postForm=this.createPostFormGroup(i),i||this.store.dispatch((0,d.Zp)({id:e}))})),this.options$=this.store.pipe((0,_.Ys)(r))}onPostFormSubmit(){this.postForm.valid?this.store.dispatch((0,d._x)({updatePost:{id:this.postForm.controls.id.value,changes:this.postForm.value}})):this.notification.showError("Form contains errors. Fix it and try again.")}delete(e){this.store.dispatch((0,d.pT)({id:e}))}canDeactivate(){return!this.postForm.dirty}ngOnDestroy(){this.subscriptions.unsubscribe()}createPostFormGroup(e){return this.formBuilder.group({id:[e?e.id:null,h.kI.required],title:[e?e.title:"",h.kI.required],body:[e?e.body:"",h.kI.required],tags:[e?e.tags:[],h.kI.required]})}}F.\u0275fac=function(e){return new(e||F)(t.Y36(v.gz),t.Y36(h.QS),t.Y36(_.yh),t.Y36(N.S))},F.\u0275cmp=t.Xpm({type:F,selectors:[["app-post-update"]],decls:2,vars:3,consts:[[4,"ngIf"],["ariaLabel","Back to Posts List",3,"link"],["mat-icon-button","","color","warn","aria-label","Delete Post",1,"ml-auto",3,"click"],[1,"page-content"],[1,"squeeze"],[3,"formGroup","submit"],[1,"w-100"],["matInput","","maxlength","40",3,"formControlName"],["title",""],["align","end"],["matInput","","rows","10",3,"formControlName"],[3,"formControlName","options"],[1,"text-right"],["mat-button","","type","button",3,"routerLink"],["mat-flat-button","","color","primary","type","submit"]],template:function(e,i){1&e&&(t.YNc(0,_t,29,11,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.post$))},dependencies:[b.O5,v.rH,h._Y,h.Fj,h.JJ,h.JL,h.nD,h.sg,h.u,f.eB,S.Hw,Z.nI,Z.v_,Z.pH,Z.$V,G.k0,K.S$,x.q,k.x,U,b.Ov],styles:["mat-icon[_ngcontent-%COMP%]{height:20px;width:20px;font-size:20px;margin-right:5px}.text-right[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{background-color:#0a2a42!important}"],changeDetection:0});var yt=n(2986);const gt=function(a){return["/","posts",a,"update"]};function vt(a,e){if(1&a){const i=t.EpF();t.TgZ(0,"div")(1,"app-page-header"),t._UZ(2,"app-page-header-back",1),t.TgZ(3,"app-page-header-title"),t._uU(4),t.qZA(),t.TgZ(5,"button",2)(6,"mat-icon"),t._uU(7,"edit"),t.qZA()(),t.TgZ(8,"button",3),t.NdJ("click",function(){const T=t.CHM(i).ngIf,w=t.oxw();return t.KtG(w.delete(T.id))}),t.TgZ(9,"mat-icon"),t._uU(10,"delete"),t.qZA()()(),t._UZ(11,"div",4),t.qZA()}if(2&a){const i=e.ngIf;t.xp6(2),t.Q6J("link","/posts/list"),t.xp6(2),t.Oqu(i.title),t.xp6(1),t.Q6J("routerLink",t.VKq(4,gt,i.id)),t.xp6(6),t.Q6J("innerHTML",i.body,t.oJD)}}class J{constructor(e,i){this.activatedRoute=e,this.store=i}ngOnInit(){this.postId=this.activatedRoute.snapshot.params.id,this.post$=this.store.pipe((0,_.Ys)(o(this.postId))),this.post$.pipe((0,yt.q)(1)).subscribe(e=>!e&&this.store.dispatch((0,d.Zp)({id:this.postId})))}delete(e){this.store.dispatch((0,d.pT)({id:e}))}}J.\u0275fac=function(e){return new(e||J)(t.Y36(v.gz),t.Y36(_.yh))},J.\u0275cmp=t.Xpm({type:J,selectors:[["app-post-details"]],decls:2,vars:3,consts:[[4,"ngIf"],["ariaLabel","Back to Posts List",3,"link"],["mat-icon-button","","color","primary","aria-label","Edit Post",1,"ml-auto",3,"routerLink"],["mat-icon-button","","color","warn","aria-label","Delete Post",3,"click"],["test-id","page-content",1,"page-content",3,"innerHTML"]],template:function(e,i){1&e&&(t.YNc(0,vt,12,6,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.post$))},dependencies:[b.O5,v.rH,f.eB,S.Hw,x.q,k.x,D.S,b.Ov],styles:[".page-header-title[_ngcontent-%COMP%]{white-space:nowrap}"],changeDetection:0});var V=n(2125);const St=[{path:"",component:y,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:A},{path:"create",component:I,canDeactivate:[V.O]},{path:":id/update",component:F,canDeactivate:[V.O]},{path:":id",component:J}]}];class j{}j.\u0275fac=function(e){return new(e||j)},j.\u0275mod=t.oAB({type:j}),j.\u0275inj=t.cJS({imports:[v.Bz.forChild(St),v.Bz]});var Ct=n(8806);class M{}M.\u0275fac=function(e){return new(e||M)},M.\u0275mod=t.oAB({type:M}),M.\u0275inj=t.cJS({imports:[b.ez,j,h.UX,Ct.m]})},5742:(P,p,n)=>{Object.defineProperty(p,"__esModule",{value:!0});var b=n(1557),h=n(4802),v=n(7448),t=n(7302),y=n(4072),_=function(){function u(c){this._isScalar=!1,c&&(this._subscribe=c)}return u.prototype.lift=function(c){var m=new u;return m.source=this,m.operator=c,m},u.prototype.subscribe=function(c,m,l){var o=this.operator,r=h.toSubscriber(c,m,l);if(r.add(o?o.call(r,this.source):this.source||y.config.useDeprecatedSynchronousErrorHandling&&!r.syncErrorThrowable?this._subscribe(r):this._trySubscribe(r)),y.config.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable&&(r.syncErrorThrowable=!1,r.syncErrorThrown))throw r.syncErrorValue;return r},u.prototype._trySubscribe=function(c){try{return this._subscribe(c)}catch(m){y.config.useDeprecatedSynchronousErrorHandling&&(c.syncErrorThrown=!0,c.syncErrorValue=m),b.canReportError(c)?c.error(m):console.warn(m)}},u.prototype.forEach=function(c,m){var l=this;return new(m=d(m))(function(o,r){var s;s=l.subscribe(function(f){try{c(f)}catch(S){r(S),s&&s.unsubscribe()}},r,o)})},u.prototype._subscribe=function(c){var m=this.source;return m&&m.subscribe(c)},u.prototype[v.observable]=function(){return this},u.prototype.pipe=function(){for(var c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return 0===c.length?this:t.pipeFromArray(c)(this)},u.prototype.toPromise=function(c){var m=this;return new(c=d(c))(function(l,o){var r;m.subscribe(function(s){return r=s},function(s){return o(s)},function(){return l(r)})})},u.create=function(c){return new u(c)},u}();function d(u){if(u||(u=y.config.Promise||Promise),!u)throw new Error("no Promise impl found");return u}p.Observable=_},7350:(P,p,n)=>{Object.defineProperty(p,"__esModule",{value:!0});var b=n(4072),h=n(2422);p.empty={closed:!0,next:function(v){},error:function(v){if(b.config.useDeprecatedSynchronousErrorHandling)throw v;h.hostReportError(v)},complete:function(){}}},7057:function(P,p,n){var l,b=this&&this.__extends||(l=function(o,r){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,f){s.__proto__=f}||function(s,f){for(var S in f)f.hasOwnProperty(S)&&(s[S]=f[S])})(o,r)},function(o,r){function s(){this.constructor=o}l(o,r),o.prototype=null===r?Object.create(r):(s.prototype=r.prototype,new s)});Object.defineProperty(p,"__esModule",{value:!0});var h=n(5742),v=n(3281),t=n(6052),y=n(1233),_=n(9576),d=n(2858),u=function(l){function o(r){var s=l.call(this,r)||this;return s.destination=r,s}return b(o,l),o}(v.Subscriber);p.SubjectSubscriber=u;var c=function(l){function o(){var r=l.call(this)||this;return r.observers=[],r.closed=!1,r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return b(o,l),o.prototype[d.rxSubscriber]=function(){return new u(this)},o.prototype.lift=function(r){var s=new m(this,this);return s.operator=r,s},o.prototype.next=function(r){if(this.closed)throw new y.ObjectUnsubscribedError;if(!this.isStopped)for(var s=this.observers,f=s.length,S=s.slice(),E=0;E<f;E++)S[E].next(r)},o.prototype.error=function(r){if(this.closed)throw new y.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=r,this.isStopped=!0;for(var s=this.observers,f=s.length,S=s.slice(),E=0;E<f;E++)S[E].error(r);this.observers.length=0},o.prototype.complete=function(){if(this.closed)throw new y.ObjectUnsubscribedError;this.isStopped=!0;for(var r=this.observers,s=r.length,f=r.slice(),S=0;S<s;S++)f[S].complete();this.observers.length=0},o.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},o.prototype._trySubscribe=function(r){if(this.closed)throw new y.ObjectUnsubscribedError;return l.prototype._trySubscribe.call(this,r)},o.prototype._subscribe=function(r){if(this.closed)throw new y.ObjectUnsubscribedError;return this.hasError?(r.error(this.thrownError),t.Subscription.EMPTY):this.isStopped?(r.complete(),t.Subscription.EMPTY):(this.observers.push(r),new _.SubjectSubscription(this,r))},o.prototype.asObservable=function(){var r=new h.Observable;return r.source=this,r},o.create=function(r,s){return new m(r,s)},o}(h.Observable);p.Subject=c;var m=function(l){function o(r,s){var f=l.call(this)||this;return f.destination=r,f.source=s,f}return b(o,l),o.prototype.next=function(r){var s=this.destination;s&&s.next&&s.next(r)},o.prototype.error=function(r){var s=this.destination;s&&s.error&&this.destination.error(r)},o.prototype.complete=function(){var r=this.destination;r&&r.complete&&this.destination.complete()},o.prototype._subscribe=function(r){return this.source?this.source.subscribe(r):t.Subscription.EMPTY},o}(c);p.AnonymousSubject=m},9576:function(P,p,n){var t,b=this&&this.__extends||(t=function(y,_){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,u){d.__proto__=u}||function(d,u){for(var c in u)u.hasOwnProperty(c)&&(d[c]=u[c])})(y,_)},function(y,_){function d(){this.constructor=y}t(y,_),y.prototype=null===_?Object.create(_):(d.prototype=_.prototype,new d)});Object.defineProperty(p,"__esModule",{value:!0});var v=function(t){function y(_,d){var u=t.call(this)||this;return u.subject=_,u.subscriber=d,u.closed=!1,u}return b(y,t),y.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var _=this.subject,d=_.observers;if(this.subject=null,d&&0!==d.length&&!_.isStopped&&!_.closed){var u=d.indexOf(this.subscriber);-1!==u&&d.splice(u,1)}}},y}(n(6052).Subscription);p.SubjectSubscription=v},3281:function(P,p,n){var m,b=this&&this.__extends||(m=function(l,o){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,s){r.__proto__=s}||function(r,s){for(var f in s)s.hasOwnProperty(f)&&(r[f]=s[f])})(l,o)},function(l,o){function r(){this.constructor=l}m(l,o),l.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)});Object.defineProperty(p,"__esModule",{value:!0});var h=n(9607),v=n(7350),t=n(6052),y=n(2858),_=n(4072),d=n(2422),u=function(m){function l(o,r,s){var f=m.call(this)||this;switch(f.syncErrorValue=null,f.syncErrorThrown=!1,f.syncErrorThrowable=!1,f.isStopped=!1,arguments.length){case 0:f.destination=v.empty;break;case 1:if(!o){f.destination=v.empty;break}if("object"==typeof o){o instanceof l?(f.syncErrorThrowable=o.syncErrorThrowable,f.destination=o,o.add(f)):(f.syncErrorThrowable=!0,f.destination=new c(f,o));break}default:f.syncErrorThrowable=!0,f.destination=new c(f,o,r,s)}return f}return b(l,m),l.prototype[y.rxSubscriber]=function(){return this},l.create=function(o,r,s){var f=new l(o,r,s);return f.syncErrorThrowable=!1,f},l.prototype.next=function(o){this.isStopped||this._next(o)},l.prototype.error=function(o){this.isStopped||(this.isStopped=!0,this._error(o))},l.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},l.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,m.prototype.unsubscribe.call(this))},l.prototype._next=function(o){this.destination.next(o)},l.prototype._error=function(o){this.destination.error(o),this.unsubscribe()},l.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},l.prototype._unsubscribeAndRecycle=function(){var o=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=o,this},l}(t.Subscription);p.Subscriber=u;var c=function(m){function l(o,r,s,f){var S=m.call(this)||this;S._parentSubscriber=o;var E,O=S;return h.isFunction(r)?E=r:r&&(E=r.next,s=r.error,f=r.complete,r!==v.empty&&(O=Object.create(r),h.isFunction(O.unsubscribe)&&S.add(O.unsubscribe.bind(O)),O.unsubscribe=S.unsubscribe.bind(S))),S._context=O,S._next=E,S._error=s,S._complete=f,S}return b(l,m),l.prototype.next=function(o){if(!this.isStopped&&this._next){var r=this._parentSubscriber;_.config.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,o)&&this.unsubscribe():this.__tryOrUnsub(this._next,o)}},l.prototype.error=function(o){if(!this.isStopped){var r=this._parentSubscriber,s=_.config.useDeprecatedSynchronousErrorHandling;if(this._error)s&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,o),this.unsubscribe()):(this.__tryOrUnsub(this._error,o),this.unsubscribe());else if(r.syncErrorThrowable)s?(r.syncErrorValue=o,r.syncErrorThrown=!0):d.hostReportError(o),this.unsubscribe();else{if(this.unsubscribe(),s)throw o;d.hostReportError(o)}}},l.prototype.complete=function(){var o=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var s=function(){return o._complete.call(o._context)};_.config.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,s),this.unsubscribe()):(this.__tryOrUnsub(s),this.unsubscribe())}else this.unsubscribe()}},l.prototype.__tryOrUnsub=function(o,r){try{o.call(this._context,r)}catch(s){if(this.unsubscribe(),_.config.useDeprecatedSynchronousErrorHandling)throw s;d.hostReportError(s)}},l.prototype.__tryOrSetError=function(o,r,s){if(!_.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,s)}catch(f){return _.config.useDeprecatedSynchronousErrorHandling?(o.syncErrorValue=f,o.syncErrorThrown=!0,!0):(d.hostReportError(f),!0)}return!1},l.prototype._unsubscribe=function(){var o=this._parentSubscriber;this._context=null,this._parentSubscriber=null,o.unsubscribe()},l}(u);p.SafeSubscriber=c},6052:(P,p,n)=>{Object.defineProperty(p,"__esModule",{value:!0});var b=n(5019),h=n(2556),v=n(9607),t=n(2142),y=function(){function d(u){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,u&&(this._ctorUnsubscribe=!0,this._unsubscribe=u)}return d.prototype.unsubscribe=function(){var u;if(!this.closed){var c=this,m=c._parentOrParents,l=c._ctorUnsubscribe,o=c._unsubscribe,r=c._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,m instanceof d)m.remove(this);else if(null!==m)for(var s=0;s<m.length;++s)m[s].remove(this);if(v.isFunction(o)){l&&(this._unsubscribe=void 0);try{o.call(this)}catch(O){u=O instanceof t.UnsubscriptionError?_(O.errors):[O]}}if(b.isArray(r)){s=-1;for(var S=r.length;++s<S;){var E=r[s];if(h.isObject(E))try{E.unsubscribe()}catch(x){u=u||[],x instanceof t.UnsubscriptionError?u=u.concat(_(x.errors)):u.push(x)}}}if(u)throw new t.UnsubscriptionError(u)}},d.prototype.add=function(u){var c=u;if(!u)return d.EMPTY;switch(typeof u){case"function":c=new d(u);case"object":if(c===this||c.closed||"function"!=typeof c.unsubscribe)return c;if(this.closed)return c.unsubscribe(),c;if(!(c instanceof d)){var m=c;(c=new d)._subscriptions=[m]}break;default:throw new Error("unrecognized teardown "+u+" added to Subscription.")}var l=c._parentOrParents;if(null===l)c._parentOrParents=this;else if(l instanceof d){if(l===this)return c;c._parentOrParents=[l,this]}else{if(-1!==l.indexOf(this))return c;l.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[c]:o.push(c),c},d.prototype.remove=function(u){var c=this._subscriptions;if(c){var m=c.indexOf(u);-1!==m&&c.splice(m,1)}},d.EMPTY=((u=new d).closed=!0,u),d;var u}();function _(d){return d.reduce(function(u,c){return u.concat(c instanceof t.UnsubscriptionError?c.errors:c)},[])}p.Subscription=y},4072:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0});var n=!1;p.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(b){if(b){var h=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+h.stack)}else n&&console.log("RxJS: Back to a better error behavior. Thank you. <3");n=b},get useDeprecatedSynchronousErrorHandling(){return n}}},7448:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.observable="function"==typeof Symbol&&Symbol.observable||"@@observable"},2858:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),p.$$rxSubscriber=p.rxSubscriber},1233:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0});var n=function(){function b(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return b.prototype=Object.create(Error.prototype),b}();p.ObjectUnsubscribedError=n},2142:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0});var n=function(){function b(h){return Error.call(this),this.message=h?h.length+" errors occurred during unsubscription:\n"+h.map(function(v,t){return t+1+") "+v.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=h,this}return b.prototype=Object.create(Error.prototype),b}();p.UnsubscriptionError=n},1557:(P,p,n)=>{Object.defineProperty(p,"__esModule",{value:!0});var b=n(3281);p.canReportError=function h(v){for(;v;){var _=v.destination;if(v.closed||v.isStopped)return!1;v=_&&_ instanceof b.Subscriber?_:null}return!0}},2422:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.hostReportError=function n(b){setTimeout(function(){throw b},0)}},6610:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.identity=function n(b){return b}},5019:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.isArray=Array.isArray||function(n){return n&&"number"==typeof n.length}},9607:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.isFunction=function n(b){return"function"==typeof b}},2556:(P,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.isObject=function n(b){return null!==b&&"object"==typeof b}},7302:(P,p,n)=>{Object.defineProperty(p,"__esModule",{value:!0});var b=n(6610);function v(t){return 0===t.length?b.identity:1===t.length?t[0]:function(_){return t.reduce(function(d,u){return u(d)},_)}}p.pipe=function h(){for(var t=[],y=0;y<arguments.length;y++)t[y]=arguments[y];return v(t)},p.pipeFromArray=v},4802:(P,p,n)=>{Object.defineProperty(p,"__esModule",{value:!0});var b=n(3281),h=n(2858),v=n(7350);p.toSubscriber=function t(y,_,d){if(y){if(y instanceof b.Subscriber)return y;if(y[h.rxSubscriber])return y[h.rxSubscriber]()}return y||_||d?new b.Subscriber(y,_,d):new b.Subscriber(v.empty)}}}]);