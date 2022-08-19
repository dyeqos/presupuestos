"use strict";(self.webpackChunkpresupuestoFrontend=self.webpackChunkpresupuestoFrontend||[]).push([[792],{8792:(v,b,n)=>{n.r(b),n.d(b,{CuentasModule:()=>q});var l=n(9808),C=n(1083),s=n(3075),p=n(2349),t=n(5e3),m=n(2797),i=n(9069),c=n(7423),r=n(9224),f=n(7322),Z=n(7531),U=n(4107),A=n(508);function M(a,o){if(1&a&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.Q6J("value",e.uid),t.xp6(1),t.hij(" ",e.nombre," ")}}function x(a,o){if(1&a&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.Q6J("value",e.uid),t.xp6(1),t.hij(" ",e.nombre," ")}}function N(a,o){if(1&a&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.Q6J("value",e.uid),t.xp6(1),t.hij(" ",e.nombre," ")}}let T=(()=>{class a{constructor(e,u,h,g,_){this.data=e,this.vs=u,this.cs=h,this.fb=g,this.dialogRef=_,this.cuenta=this.data.cuenta||{},this.bancos=this.data.bancos,this.tipo_cuentas=this.data.cuentas,this.usuarios=this.data.usuarios,this.formCuenta=this.fb.group({banco:["",[s.kI.required]],numero_cuenta:["",[s.kI.required]],tipo_cuenta:["",[s.kI.required]],usuario:["",[s.kI.required]],descripcion:["",[s.kI.required]]},{validators:[this.vs.esNumero("numero_cuenta")]})}ngOnInit(){this.cargarFormulario()}cargarFormulario(){this.cuenta.uid&&(this.formCuenta.controls.banco.setValue(this.cuenta.banco._id),this.formCuenta.controls.numero_cuenta.setValue(this.cuenta.numero_cuenta),this.formCuenta.controls.tipo_cuenta.setValue(this.cuenta.tipo_cuenta._id),this.formCuenta.controls.usuario.setValue(this.cuenta.usuario._id),this.formCuenta.controls.descripcion.setValue(this.cuenta.descripcion))}guardarCuenta(){this.formCuenta.invalid?this.formCuenta.markAllAsTouched():(this.cuenta.banco=this.formCuenta.controls.banco.value,this.cuenta.numero_cuenta=this.formCuenta.controls.numero_cuenta.value,this.cuenta.tipo_cuenta=this.formCuenta.controls.tipo_cuenta.value,this.cuenta.usuario=this.formCuenta.controls.usuario.value,this.cuenta.descripcion=this.formCuenta.controls.descripcion.value.trim().toUpperCase(),void 0!==this.cuenta.uid?this.cs.putCuenta(this.cuenta).subscribe(e=>{this.dialogRef.close(!0===e.ok)}):this.cs.postCuenta(this.cuenta).subscribe(e=>{this.dialogRef.close(!0===e.ok)}))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.WI),t.Y36(m.o),t.Y36(i.S),t.Y36(s.qu),t.Y36(p.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-cuentas-modal"]],decls:47,vars:4,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],["appearance","fill"],["formControlName","banco"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","numero_cuenta"],["formControlName","tipo_cuenta"],["formControlName","usuario"],["matInput","","formControlName","descripcion"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(e,u){1&e&&(t.TgZ(0,"mat-card")(1,"form",0),t.NdJ("ngSubmit",function(){return u.guardarCuenta()}),t.TgZ(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Cuenta"),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6,"Nuevo"),t.qZA()(),t.TgZ(7,"mat-dialog-content")(8,"mat-card-content")(9,"mat-form-field",1)(10,"mat-label"),t._uU(11,"Banco"),t.qZA(),t.TgZ(12,"mat-select",2),t.YNc(13,M,2,2,"mat-option",3),t.qZA(),t.TgZ(14,"mat-error"),t._uU(15," Revise el Banco "),t.qZA()(),t.TgZ(16,"mat-form-field",1)(17,"mat-label"),t._uU(18,"N\xfamero de Cuenta"),t.qZA(),t._UZ(19,"input",4),t.TgZ(20,"mat-error"),t._uU(21," Revise el N\xfamero de Cuenta "),t.qZA()(),t.TgZ(22,"mat-form-field",1)(23,"mat-label"),t._uU(24,"Tipo de Cuenta"),t.qZA(),t.TgZ(25,"mat-select",5),t.YNc(26,x,2,2,"mat-option",3),t.qZA(),t.TgZ(27,"mat-error"),t._uU(28," Revise el Tipo de Cuenta "),t.qZA()(),t.TgZ(29,"mat-form-field",1)(30,"mat-label"),t._uU(31,"Usuario"),t.qZA(),t.TgZ(32,"mat-select",6),t.YNc(33,N,2,2,"mat-option",3),t.qZA(),t.TgZ(34,"mat-error"),t._uU(35," Revise el Usuario "),t.qZA()(),t.TgZ(36,"mat-form-field",1)(37,"mat-label"),t._uU(38,"Descripci\xf3n Cuenta"),t.qZA(),t._UZ(39,"input",7),t.TgZ(40,"mat-error"),t._uU(41," Revise la descripci\xf3n de la cuenta "),t.qZA()()()(),t.TgZ(42,"mat-card-actions")(43,"button",8),t._uU(44,"Cancelar"),t.qZA(),t.TgZ(45,"button",9),t._uU(46,"Guardar"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",u.formCuenta),t.xp6(12),t.Q6J("ngForOf",u.bancos),t.xp6(13),t.Q6J("ngForOf",u.tipo_cuentas),t.xp6(7),t.Q6J("ngForOf",u.usuarios))},dependencies:[l.sg,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,c.lW,r.a8,r.dk,r.dn,r.n5,r.$j,r.hq,p.ZT,p.xY,f.TO,f.KE,f.hX,Z.Nt,U.gD,A.ey],styles:["mat-form-field[_ngcontent-%COMP%]{display:block;margin-top:10px}"]}),a})();var O=n(5626),B=n(4188),D=n(7261),E=n(5245),d=n(4999);function L(a,o){1&a&&(t.TgZ(0,"th",13),t._uU(1," BANCO "),t.qZA())}function y(a,o){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.Oqu(e.banco.nombre)}}function R(a,o){1&a&&(t.TgZ(0,"th",13),t._uU(1," N\xb0 DE CUENTA "),t.qZA())}function S(a,o){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",e.numero_cuenta," ")}}function Y(a,o){1&a&&(t.TgZ(0,"th",13),t._uU(1," OPCIONES "),t.qZA())}function F(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"td",14)(1,"button",15),t.NdJ("click",function(){const g=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.editar(g.uid))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",16),t.NdJ("click",function(){const g=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.eliminar(g.uid))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}function P(a,o){1&a&&t._UZ(0,"tr",17)}function I(a,o){1&a&&t._UZ(0,"tr",18)}function k(a,o){if(1&a&&(t.TgZ(0,"table",5),t.ynx(1,6),t.YNc(2,L,2,0,"th",7),t.YNc(3,y,2,1,"td",8),t.BQk(),t.ynx(4,9),t.YNc(5,R,2,0,"th",7),t.YNc(6,S,2,1,"td",8),t.BQk(),t.ynx(7,10),t.YNc(8,Y,2,0,"th",7),t.YNc(9,F,7,0,"td",8),t.BQk(),t.YNc(10,P,1,0,"tr",11),t.YNc(11,I,1,0,"tr",12),t.qZA()),2&a){const e=t.oxw();t.Q6J("dataSource",e.cuentasList),t.xp6(10),t.Q6J("matHeaderRowDef",e.displayHeader),t.xp6(1),t.Q6J("matRowDefColumns",e.displayHeader)}}const J=[{path:"",children:[{path:"",component:(()=>{class a{constructor(e,u,h,g,_){this.ps=e,this.us=u,this.cs=h,this._snackBar=g,this.dialog=_,this.displayHeader=["banco","numero_cuenta","opcion"]}ngOnInit(){this.getCuentas(),this.getBancos(),this.getUsuarios(),this.getTipoCuentas()}getCuentas(){this.cs.getCuentas().subscribe(e=>{this.cuentasList=!0===e.ok?e.data:[]})}editar(e){this.cs.getCuentas(e).subscribe(u=>{!0===u.ok&&this.dialog.open(T,{width:"500px",disableClose:!0,data:{bancos:this.bancosList,usuarios:this.usuarioList,cuentas:this.tipoCuentasList,cuenta:u.data}}).afterClosed().subscribe(h=>{!0===h?(this.getCuentas(),this.abrirSnackBar("Modificaci\xf3n Exitosa")):!1===h&&this.abrirSnackBar("Error al Modificar")})})}eliminar(e){}abrirModal(){this.dialog.open(T,{width:"500px",disableClose:!0,data:{bancos:this.bancosList,usuarios:this.usuarioList,cuentas:this.tipoCuentasList}})}getBancos(){this.ps.getBancos().subscribe(e=>{this.bancosList=!0===e.ok?e.data:[]})}getUsuarios(){this.us.getUsuarios().subscribe(e=>{this.usuarioList=!0===e.ok?e.data:[]})}getTipoCuentas(){this.ps.getTiposCuentas().subscribe(e=>{this.tipoCuentasList=!0===e.ok?e.data:[]})}abrirSnackBar(e){this._snackBar.open(e.toString(),"Aceptar",{horizontalPosition:"end",verticalPosition:"top",duration:1500})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(O.u),t.Y36(B.i),t.Y36(i.S),t.Y36(D.ux),t.Y36(p.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-cuentas"]],decls:12,vars:1,consts:[[1,"row"],[1,"col"],[1,"titulo"],["mat-raised-button","","color","primary",3,"click"],["mat-table","","class","mat-elevation-z8 matTable",3,"dataSource",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","matTable",3,"dataSource"],["matColumnDef","banco"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","numero_cuenta"],["matColumnDef","opcion"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","accent",3,"click"],["mat-icon-button","","disabled","","color","accent",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,u){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1")(3,"mat-icon",2),t._uU(4,"credit_card"),t.qZA(),t.TgZ(5,"span"),t._uU(6," Cuentas "),t.qZA()(),t.TgZ(7,"button",3),t.NdJ("click",function(){return u.abrirModal()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA(),t._uU(10," Agregar Cuenta "),t.qZA()()(),t.YNc(11,k,12,3,"table",4)),2&e&&(t.xp6(11),t.Q6J("ngIf",u.cuentasList))},dependencies:[l.O5,c.lW,E.Hw,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk],styles:[".mat-column-numero_cuenta[_ngcontent-%COMP%], .mat-column-banco[_ngcontent-%COMP%]{padding-right:1px}.mat-column-opcion[_ngcontent-%COMP%]{text-align:right}"]}),a})()},{path:"**",redirectTo:""}]}];let $=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[C.Bz.forChild(J),C.Bz]}),a})();var Q=n(898);let q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[l.ez,$,s.UX,Q.q]}),a})()},9069:(v,b,n)=>{n.d(b,{S:()=>t});var l=n(520),C=n(2340),s=n(5e3),p=n(6518);let t=(()=>{class m{constructor(c,r){this.http=c,this.authService=r,this.baseUrl=C.N.baseUrl+"/cuentas"}getCuentas(c=""){return this.http.get(`${this.baseUrl}/${c}`)}getMisCuentas(){const c=`${this.baseUrl}/mis-cuentas`,r=(new l.WM).set("x-token",this.authService.token);return this.http.get(c,{headers:r})}postCuenta(c){const r=`${this.baseUrl}`,f=(new l.WM).set("x-token",this.authService.token);return this.http.post(r,c,{headers:f})}putCuenta(c){const r=`${this.baseUrl}`,f=(new l.WM).set("x-token",this.authService.token);return this.http.put(r,c,{headers:f})}}return m.\u0275fac=function(c){return new(c||m)(s.LFG(l.eN),s.LFG(p.e))},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},5626:(v,b,n)=>{n.d(b,{u:()=>p});var l=n(2340),C=n(5e3),s=n(520);let p=(()=>{class t{constructor(i){this.http=i,this.baseUrl=l.N.baseUrl+"/params"}getRoles(){return this.http.get(`${this.baseUrl}/roles`)}getTiposActivos(){return this.http.get(`${this.baseUrl}/tipos-activos`)}getBancos(){return this.http.get(`${this.baseUrl}/bancos`)}getTiposCuentas(){return this.http.get(`${this.baseUrl}/cuentas`)}getTiposIngresos(){return this.http.get(`${this.baseUrl}/ingresos`)}}return t.\u0275fac=function(i){return new(i||t)(C.LFG(s.eN))},t.\u0275prov=C.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);