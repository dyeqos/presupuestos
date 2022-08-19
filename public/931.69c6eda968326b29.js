"use strict";(self.webpackChunkpresupuestoFrontend=self.webpackChunkpresupuestoFrontend||[]).push([[931],{931:(I,U,i)=>{i.r(U),i.d(U,{UsuariosModule:()=>G});var p=i(9808),e=i(3075),g=i(1083),t=i(5e3),c=i(4188),_=i(5626),u=i(2797),Z=i(7423),l=i(9224),f=i(7322),v=i(5245),C=i(7531),T=i(4107),A=i(508);function k(r,a){if(1&r&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&r){const o=a.$implicit;t.Q6J("value",o.uid),t.xp6(1),t.hij(" ",o.nombre," ")}}function q(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"mat-card")(1,"form",1),t.NdJ("ngSubmit",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.guardarUsuario())}),t.TgZ(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Mi Perfil"),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6,"Modificar"),t.qZA()(),t.TgZ(7,"mat-card-content")(8,"mat-form-field",2)(9,"mat-label"),t._uU(10,"Nombre"),t.qZA(),t._UZ(11,"input",3),t.TgZ(12,"mat-error"),t._uU(13," Revise el Nombre "),t.qZA()(),t.TgZ(14,"mat-form-field",2)(15,"mat-label"),t._uU(16,"Apellido Paterno"),t.qZA(),t._UZ(17,"input",4),t.TgZ(18,"mat-error"),t._uU(19," Revise el Apellido "),t.qZA()(),t.TgZ(20,"mat-form-field",2)(21,"mat-label"),t._uU(22,"Apellido Materno"),t.qZA(),t._UZ(23,"input",5),t.TgZ(24,"mat-error"),t._uU(25," Revise el Apellido "),t.qZA()(),t.TgZ(26,"mat-form-field",2)(27,"mat-label"),t._uU(28,"Correo"),t.qZA(),t._UZ(29,"input",6),t.TgZ(30,"mat-error"),t._uU(31," Revise el Correo "),t.qZA()(),t.TgZ(32,"mat-form-field",2)(33,"mat-label"),t._uU(34,"Rol de Usuario"),t.qZA(),t.TgZ(35,"mat-select",7),t.YNc(36,k,2,2,"mat-option",8),t.qZA(),t.TgZ(37,"mat-error"),t._uU(38," Revise el Rol de Usuario "),t.qZA()(),t.TgZ(39,"mat-form-field",2)(40,"mat-label"),t._uU(41,"Nuevo Password"),t.qZA(),t._UZ(42,"input",9),t.TgZ(43,"button",10),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.hide=!n.hide)}),t.TgZ(44,"mat-icon"),t._uU(45),t.qZA()(),t.TgZ(46,"mat-error"),t._uU(47," Contrase\xf1a m\xednima de 6 car\xe1cteres "),t.qZA()(),t.TgZ(48,"mat-form-field",2)(49,"mat-label"),t._uU(50,"Repetir Password"),t.qZA(),t._UZ(51,"input",11),t.TgZ(52,"button",10),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.hide2=!n.hide2)}),t.TgZ(53,"mat-icon"),t._uU(54),t.qZA()(),t.TgZ(55,"mat-error"),t._uU(56," No son iguales las contrase\xf1as "),t.qZA()()(),t.TgZ(57,"mat-card-actions")(58,"button",12),t._uU(59,"Guardar"),t.qZA()()()()}if(2&r){const o=t.oxw();t.xp6(1),t.Q6J("formGroup",o.formUsuario),t.xp6(35),t.Q6J("ngForOf",o.roles),t.xp6(6),t.Q6J("type",o.hide?"password":"text"),t.xp6(3),t.hij(" ",o.hide?"visibility_off":"visibility"," "),t.xp6(6),t.Q6J("type",o.hide2?"password":"text"),t.xp6(3),t.hij(" ",o.hide2?"visibility_off":"visibility"," ")}}let N=(()=>{class r{constructor(o,s,n,m){this.fb=o,this.usuarioService=s,this.parametrosService=n,this.vs=m,this.hide=!0,this.hide2=!0,this.formUsuario=this.fb.group({nombre:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30)]],paterno:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30)]],materno:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30)]],correo:["",[e.kI.required,e.kI.email]],rol:["",[e.kI.required]],password:["",[e.kI.required,e.kI.minLength(6)]],password2:["",[e.kI.required]]},{validators:[this.vs.contrasenaIgual("password","password2")]})}ngOnInit(){this.cargarRol(),this.cargarUsuario()}cargarRol(){this.parametrosService.getRoles().subscribe(o=>{!0===o.ok&&(this.roles=o.data)})}cargarUsuario(){this.usuarioService.getPerfil().subscribe(o=>{!0===o.ok&&(this.usuario=o.data,this.formUsuario.controls.nombre.setValue(this.usuario.nombre),this.formUsuario.controls.paterno.setValue(this.usuario.paterno),this.formUsuario.controls.materno.setValue(this.usuario.materno),this.formUsuario.controls.correo.setValue(this.usuario.correo),this.formUsuario.controls.rol.setValue(this.usuario.rol._id))})}guardarUsuario(){this.formUsuario.invalid?this.formUsuario.markAllAsTouched():(this.usuario.nombre=this.formUsuario.controls.nombre.value.trim().toUpperCase(),this.usuario.paterno=this.formUsuario.controls.paterno.value.trim().toUpperCase(),this.usuario.materno=this.formUsuario.controls.materno.value.trim().toUpperCase(),this.usuario.correo=this.formUsuario.controls.correo.value.trim().toLowerCase(),this.usuario.rol=this.formUsuario.controls.rol.value,this.usuario.password=this.formUsuario.controls.password.value,console.log("paso"),this.usuarioService.putUsuario(this.usuario).subscribe(o=>{}))}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(e.qu),t.Y36(c.i),t.Y36(_.u),t.Y36(u.o))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-perfil"]],decls:1,vars:1,consts:[[4,"ngIf"],["autocomplete","off",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","nombre"],["matInput","","formControlName","paterno"],["matInput","","formControlName","materno"],["matInput","","formControlName","correo"],["formControlName","rol"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","password","required","",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["matInput","","formControlName","password2","required","",3,"type"],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(o,s){1&o&&t.YNc(0,q,60,6,"mat-card",0),2&o&&t.Q6J("ngIf",s.usuario&&s.roles)},dependencies:[p.sg,p.O5,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.sg,e.u,Z.lW,l.a8,l.dk,l.dn,l.n5,l.$j,l.hq,f.TO,f.KE,f.hX,f.R9,v.Hw,C.Nt,T.gD,A.ey],styles:["mat-form-field[_ngcontent-%COMP%]{display:block;margin-top:10px}mat-card[_ngcontent-%COMP%]{max-width:500px;margin:auto}"]}),r})();var h=i(2349);function R(r,a){if(1&r&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&r){const o=a.$implicit;t.Q6J("value",o.uid),t.xp6(1),t.hij(" ",o.nombre," ")}}let x=(()=>{class r{constructor(o,s,n,m){this.data=o,this.dialogRef=s,this.fb=n,this.usuarioService=m,this.roles=this.data.roles,this.usuario=this.data.usuario||{},this.formUsuario=this.fb.group({nombre:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30)]],paterno:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30)]],materno:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30)]],correo:["",[e.kI.required,e.kI.email]],rol:["",[e.kI.required]],password:["123456",[e.kI.required,e.kI.minLength(6)]]})}ngOnInit(){this.cargarFormulario()}cargarFormulario(){this.usuario.uid&&(this.formUsuario.controls.nombre.setValue(this.usuario.nombre),this.formUsuario.controls.paterno.setValue(this.usuario.paterno),this.formUsuario.controls.materno.setValue(this.usuario.materno),this.formUsuario.controls.correo.setValue(this.usuario.correo),this.formUsuario.controls.rol.setValue(this.usuario.rol._id))}guardarUsuario(){this.formUsuario.invalid?this.formUsuario.markAllAsTouched():(this.usuario.nombre=this.formUsuario.controls.nombre.value.trim().toUpperCase(),this.usuario.paterno=this.formUsuario.controls.paterno.value.trim().toUpperCase(),this.usuario.materno=this.formUsuario.controls.materno.value.trim().toUpperCase(),this.usuario.correo=this.formUsuario.controls.correo.value.trim().toLowerCase(),this.usuario.rol=this.formUsuario.controls.rol.value,this.usuario.password=this.formUsuario.controls.password.value,void 0!==this.usuario.uid?this.usuarioService.putUsuario(this.usuario).subscribe(o=>{this.dialogRef.close(!0===o.ok)}):this.usuarioService.postUsuario(this.usuario).subscribe(o=>{this.dialogRef.close(!0===o.ok)}))}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(h.WI),t.Y36(h.so),t.Y36(e.qu),t.Y36(c.i))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-usuarios-modal"]],decls:45,vars:2,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","nombre"],["matInput","","formControlName","paterno"],["matInput","","formControlName","materno"],["matInput","","formControlName","correo"],["formControlName","rol"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(o,s){1&o&&(t.TgZ(0,"mat-card")(1,"form",0),t.NdJ("ngSubmit",function(){return s.guardarUsuario()}),t.TgZ(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Usuario"),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6,"Nuevo"),t.qZA()(),t.TgZ(7,"mat-dialog-content")(8,"mat-card-content")(9,"mat-form-field",1)(10,"mat-label"),t._uU(11,"Nombre"),t.qZA(),t._UZ(12,"input",2),t.TgZ(13,"mat-error"),t._uU(14," Revise el Nombre "),t.qZA()(),t.TgZ(15,"mat-form-field",1)(16,"mat-label"),t._uU(17,"Apellido Paterno"),t.qZA(),t._UZ(18,"input",3),t.TgZ(19,"mat-error"),t._uU(20," Revise el Apellido "),t.qZA()(),t.TgZ(21,"mat-form-field",1)(22,"mat-label"),t._uU(23,"Apellido Materno"),t.qZA(),t._UZ(24,"input",4),t.TgZ(25,"mat-error"),t._uU(26," Revise el Apellido "),t.qZA()(),t.TgZ(27,"mat-form-field",1)(28,"mat-label"),t._uU(29,"Correo"),t.qZA(),t._UZ(30,"input",5),t.TgZ(31,"mat-error"),t._uU(32," Revise el Correo "),t.qZA()(),t.TgZ(33,"mat-form-field",1)(34,"mat-label"),t._uU(35,"Rol de Usuario"),t.qZA(),t.TgZ(36,"mat-select",6),t.YNc(37,R,2,2,"mat-option",7),t.qZA(),t.TgZ(38,"mat-error"),t._uU(39," Revise el Rol de Usuario "),t.qZA()()()(),t.TgZ(40,"mat-card-actions")(41,"button",8),t._uU(42,"Cancelar"),t.qZA(),t.TgZ(43,"button",9),t._uU(44,"Guardar"),t.qZA()()()()),2&o&&(t.xp6(1),t.Q6J("formGroup",s.formUsuario),t.xp6(36),t.Q6J("ngForOf",s.roles))},dependencies:[p.sg,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,Z.lW,l.a8,l.dk,l.dn,l.n5,l.$j,l.hq,h.ZT,h.xY,f.TO,f.KE,f.hX,C.Nt,T.gD,A.ey],styles:["mat-form-field[_ngcontent-%COMP%]{display:block;margin-top:10px}"]}),r})();var y=i(4545),S=i(7261),d=i(4999);function M(r,a){1&r&&(t.TgZ(0,"th",13),t._uU(1," NOMBRE "),t.qZA())}function L(r,a){if(1&r&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&r){const o=a.$implicit;t.xp6(1),t.lnq("",o.nombre," ",o.paterno," ",o.materno,"")}}function P(r,a){1&r&&(t.TgZ(0,"th",13),t._uU(1," CORREO "),t.qZA())}function Y(r,a){if(1&r&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&r){const o=a.$implicit;t.xp6(1),t.hij(" ",o.correo," ")}}function w(r,a){1&r&&(t.TgZ(0,"th",13),t._uU(1," ROL DE USUARIO "),t.qZA())}function O(r,a){if(1&r&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&r){const o=a.$implicit;t.xp6(1),t.hij(" ",o.rol.nombre," ")}}function J(r,a){1&r&&(t.TgZ(0,"th",13),t._uU(1," OPCIONES "),t.qZA())}function B(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"td",14)(1,"button",15),t.NdJ("click",function(){const m=t.CHM(o).$implicit,b=t.oxw(2);return t.KtG(b.editar(m.uid))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",15),t.NdJ("click",function(){const m=t.CHM(o).$implicit,b=t.oxw(2);return t.KtG(b.eliminar(m.uid))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}function E(r,a){1&r&&t._UZ(0,"tr",16)}function F(r,a){1&r&&t._UZ(0,"tr",17)}function D(r,a){if(1&r&&(t.TgZ(0,"table",4),t.ynx(1,5),t.YNc(2,M,2,0,"th",6),t.YNc(3,L,2,3,"td",7),t.BQk(),t.ynx(4,8),t.YNc(5,P,2,0,"th",6),t.YNc(6,Y,2,1,"td",7),t.BQk(),t.ynx(7,9),t.YNc(8,w,2,0,"th",6),t.YNc(9,O,2,1,"td",7),t.BQk(),t.ynx(10,10),t.YNc(11,J,2,0,"th",6),t.YNc(12,B,7,0,"td",7),t.BQk(),t.YNc(13,E,1,0,"tr",11),t.YNc(14,F,1,0,"tr",12),t.qZA()),2&r){const o=t.oxw();t.Q6J("dataSource",o.usuariosList),t.xp6(13),t.Q6J("matHeaderRowDef",o.displayHeader),t.xp6(1),t.Q6J("matRowDefColumns",o.displayHeader)}}const Q=[{path:"",children:[{path:"",component:(()=>{class r{constructor(o,s,n,m){this.usuarioService=o,this.parametrosService=s,this._snackBar=n,this.dialog=m,this.displayHeader=["nombre","correo","rol","opcion"]}ngOnInit(){this.getUsuarios(),this.getRoles()}getRoles(){this.parametrosService.getRoles().subscribe(o=>{this.rolesList=!0===o.ok?o.data:[]})}getUsuarios(){this.usuarioService.getUsuarios().subscribe(o=>{this.usuariosList=!0===o.ok?o.data:[]})}abrirModal(){this.dialog.open(x,{width:"500px",disableClose:!0,data:{roles:this.rolesList}}).afterClosed().subscribe(o=>{!0===o?(this.getUsuarios(),this.abrirSnackBar("Registro Exitoso")):this.abrirSnackBar("Error al Registrar")})}editar(o){this.usuarioService.getUsuarios(o).subscribe(s=>{!0===s.ok&&this.dialog.open(x,{width:"500px",disableClose:!0,data:{roles:this.rolesList,usuario:s.data}}).afterClosed().subscribe(n=>{!0===n?(this.getUsuarios(),this.abrirSnackBar("Modificaci\xf3n Exitosa")):this.abrirSnackBar("Error al Modificar")})})}eliminar(o){this.dialog.open(y.m,{width:"250px",disableClose:!0,data:{titulo:"Borrar Usuario"}}).afterClosed().subscribe(n=>{!0===n&&this.usuarioService.deleteUsuario(o).subscribe(m=>{!0===m.ok&&(this.getUsuarios(),this.abrirSnackBar("Eliminaci\xf3n Exitosa"))})})}abrirSnackBar(o){this._snackBar.open(o.toString(),"Aceptar",{horizontalPosition:"end",verticalPosition:"top",duration:1500})}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(c.i),t.Y36(_.u),t.Y36(S.ux),t.Y36(h.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-usuarios"]],decls:11,vars:1,consts:[[1,"row"],[1,"titulo"],["mat-raised-button","","color","primary",1,"titulo",3,"click"],["mat-table","","class","mat-elevation-z8",3,"dataSource",4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","nombre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","correo"],["matColumnDef","rol"],["matColumnDef","opcion"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","accent",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h1")(2,"mat-icon",1),t._uU(3,"persons"),t.qZA(),t.TgZ(4,"span"),t._uU(5," Usuarios "),t.qZA(),t.TgZ(6,"button",2),t.NdJ("click",function(){return s.abrirModal()}),t.TgZ(7,"mat-icon"),t._uU(8,"person_add"),t.qZA(),t._uU(9," Agregar Usuario "),t.qZA()()(),t.YNc(10,D,15,3,"table",3)),2&o&&(t.xp6(10),t.Q6J("ngIf",s.usuariosList))},dependencies:[p.O5,Z.lW,v.Hw,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),r})()},{path:"mi-perfil",component:N},{path:"**",redirectTo:""}]}];let $=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.Bz.forChild(Q),g.Bz]}),r})();var j=i(898);let G=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[p.ez,$,e.UX,j.q]}),r})()},5626:(I,U,i)=>{i.d(U,{u:()=>t});var p=i(2340),e=i(5e3),g=i(520);let t=(()=>{class c{constructor(u){this.http=u,this.baseUrl=p.N.baseUrl+"/params"}getRoles(){return this.http.get(`${this.baseUrl}/roles`)}getTiposActivos(){return this.http.get(`${this.baseUrl}/tipos-activos`)}getBancos(){return this.http.get(`${this.baseUrl}/bancos`)}getTiposCuentas(){return this.http.get(`${this.baseUrl}/cuentas`)}getTiposIngresos(){return this.http.get(`${this.baseUrl}/ingresos`)}}return c.\u0275fac=function(u){return new(u||c)(e.LFG(g.eN))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);