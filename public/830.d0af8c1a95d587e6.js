"use strict";(self.webpackChunkpresupuestoFrontend=self.webpackChunkpresupuestoFrontend||[]).push([[830],{6830:(M,c,e)=>{e.r(c),e.d(c,{AuthModule:()=>b});var d=e(9808),r=e(3075),u=e(1083),t=e(5e3),g=e(7261),f=e(6518),h=e(7423),m=e(7322),C=e(5245),v=e(7531);let Z=(()=>{class o{constructor(n,a,s,L){this.router=n,this._snackBar=a,this.fb=s,this.authService=L,this.hide=!0,this.formLogin=this.fb.group({usuario:["dyeqos@gmail.com",[r.kI.required,r.kI.email,r.kI.maxLength(30)]],password:["123456",[r.kI.required,r.kI.minLength(6),r.kI.maxLength(30)]]})}ngOnInit(){}ingresar(){if(this.formLogin.invalid)return void this.formLogin.markAllAsTouched();const{usuario:n,password:a}=this.formLogin.value;this.authService.login(n,a).subscribe(s=>{!0===s?this.router.navigate(["/dashboard"]):this.abrirSnackBar(0===s.status?"No hay conexi\xf3n con el Servidor":s.error.msg)})}abrirSnackBar(n){this._snackBar.open(n.toString(),"Aceptar",{horizontalPosition:"end",verticalPosition:"top",duration:1500})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(u.F0),t.Y36(g.ux),t.Y36(r.qu),t.Y36(f.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:20,vars:3,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],["appearance","legacy"],["matInput","","formControlName","usuario","type","email","required",""],["appearance","standard"],["matInput","","formControlName","password","required","",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit",1,"mt-4"],["mat-button","","routerLink","/auth/registro",1,"mt-4"]],template:function(n,a){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.ingresar()}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Correo"),t.qZA(),t._UZ(4,"input",2),t.TgZ(5,"mat-error"),t._uU(6," Formato de Correo Incorrecto "),t.qZA()(),t.TgZ(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"Password"),t.qZA(),t._UZ(10,"input",4),t.TgZ(11,"button",5),t.NdJ("click",function(){return a.hide=!a.hide}),t.TgZ(12,"mat-icon"),t._uU(13),t.qZA()(),t.TgZ(14,"mat-error"),t._uU(15," Contrase\xf1a m\xednima de 6 car\xe1cteres "),t.qZA()(),t.TgZ(16,"button",6),t._uU(17," Ingresar "),t.qZA(),t.TgZ(18,"button",7),t._uU(19," Crear cuenta "),t.qZA()()),2&n&&(t.Q6J("formGroup",a.formLogin),t.xp6(10),t.Q6J("type",a.hide?"password":"text"),t.xp6(3),t.hij(" ",a.hide?"visibility_off":"visibility"," "))},dependencies:[u.rH,h.lW,m.TO,m.KE,m.hX,m.R9,C.Hw,v.Nt,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:["mat-form-field[_ngcontent-%COMP%]{display:block}button[_ngcontent-%COMP%]{width:100%}"]}),o})();var l=e(9224),p=e(3954);const y=[{path:"",component:(()=>{class o{constructor(){this.registro="registro"}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-main"]],decls:11,vars:0,consts:[["cols","1","rowHeight","100%"],[1,"pt-5","pb-3","mat-elevation-z8"],[1,"fw-bold","fs-1"],[1,"mt-4"]],template:function(n,a){1&n&&(t.TgZ(0,"mat-grid-list",0)(1,"mat-grid-tile")(2,"mat-card",1)(3,"mat-card-header")(4,"mat-card-title")(5,"h1",2),t._uU(6,"HELLO."),t._UZ(7,"br"),t._uU(8," WELCOME BACK "),t.qZA()()(),t.TgZ(9,"mat-card-content",3),t._UZ(10,"router-outlet"),t.qZA()()()())},dependencies:[u.lC,l.a8,l.dk,l.dn,l.n5,p.Il,p.DX],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;text-align:left}"]}),o})(),children:[{path:"login",component:Z},{path:"registro",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-register"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"registro"),t.qZA())}}),o})()},{path:"**",redirectTo:"login"}]}];let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(y),u.Bz]}),o})();var T=e(898);let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[A,d.ez,T.q,r.UX]}),o})()}}]);