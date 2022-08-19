"use strict";(self.webpackChunkpresupuestoFrontend=self.webpackChunkpresupuestoFrontend||[]).push([[549],{7549:(X,Z,n)=>{n.r(Z),n.d(Z,{ActivosModule:()=>H});var u=n(9808),r=n(3075),I=n(898),C=n(1083),A=n(3737),F=n(4545),d=n(2349),_=n(5439),t=n(5e3),v=n(520),T=n(2340),M=n(6518);let b=(()=>{class i{constructor(o,e){this.http=o,this.authService=e,this.baseUrl=T.N.baseUrl}getActivo(o){return this.http.get(`${this.baseUrl}/activos/${o}`)}getActivos(){return this.http.get(`${this.baseUrl}/activos/`)}getCotizaciones(){return this.http.get(`${this.baseUrl}/activos/cotizacion/`)}postActivos(o){const e=`${this.baseUrl}/activos`,a=(new v.WM).set("x-token",this.authService.token);return this.http.post(e,o,{headers:a})}updateActivo(o){const e=`${this.baseUrl}/activos/cotizacion`,a=(new v.WM).set("x-token",this.authService.token);return this.http.put(e,o,{headers:a})}updateActivos(o){const e=`${this.baseUrl}/activos`,a=(new v.WM).set("x-token",this.authService.token);return this.http.put(e,o,{headers:a})}deleteActivo(o=""){const e=`${this.baseUrl}/activos/cotizacion`,a={headers:(new v.WM).set("x-token",this.authService.token).set("content-type","application/json"),body:{uid:o}};return this.http.delete(e,a)}}return i.\u0275fac=function(o){return new(o||i)(t.LFG(v.eN),t.LFG(M.e))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var x=n(7423),m=n(9224),h=n(6856),p=n(7322),k=n(7531),U=n(4107),S=n(508);function N(i,s){if(1&i&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&i){const o=s.$implicit;t.Q6J("value",o.uid),t.xp6(1),t.hij(" ",o.nombre," ")}}let y=(()=>{class i{constructor(o,e,a,c){this.data=o,this.dialogRef=e,this.fb=a,this.activoService=c,this.tipo_activo=this.data.tiposActivos,this.date=new Date,this.activo=this.data.activo||{},this.formActivo=this.fb.group({nombre:["",[r.kI.required,r.kI.minLength(3),r.kI.maxLength(30)]],detalle:["",[r.kI.required,r.kI.minLength(3),r.kI.maxLength(150)]],costo:["",[r.kI.required,r.kI.min(0)]],fecha:[{value:this.date,disabled:!0},[r.kI.required]],tipo_activo:["",[r.kI.required]]})}ngOnInit(){this.cargarFormulario()}cargarFormulario(){this.activo.uid&&(this.formActivo.controls.nombre.setValue(this.activo.nombre),this.formActivo.controls.detalle.setValue(this.activo.detalle),this.formActivo.controls.costo.setValue(this.activo.costo),this.formActivo.controls.tipo_activo.setValue(this.activo.tipo_activo._id),this.formActivo.controls.fecha.setValue(this.activo.fecha))}guardarActivo(){this.formActivo.invalid?this.formActivo.markAllAsTouched():(this.activo.nombre=this.formActivo.controls.nombre.value.trim().toUpperCase(),this.activo.detalle=this.formActivo.controls.detalle.value.trim().toUpperCase(),this.activo.tipo_activo=this.formActivo.controls.tipo_activo.value,this.activo.costo=this.formActivo.controls.costo.value,this.activo.fecha=_(this.formActivo.controls.fecha.value).format("YYYY-MM-DD"),void 0!==this.activo.uid?this.activoService.updateActivo(this.activo).subscribe(o=>{this.dialogRef.close(!0===o.ok)}):this.activoService.postActivos(this.activo).subscribe(o=>{this.dialogRef.close(!0===o.ok)}))}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(d.WI),t.Y36(d.so),t.Y36(r.qu),t.Y36(b))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-activos-modal"]],decls:55,vars:4,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","fecha",3,"matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["dp3",""],["matInput","","formControlName","nombre"],["formControlName","tipo_activo"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill","floatLabel","always"],["matInput","","type","number","placeholder","0","formControlName","costo",1,"example-right-align"],["matPrefix",""],["matSuffix",""],["matInput","","formControlName","detalle"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(o,e){if(1&o&&(t.TgZ(0,"mat-card")(1,"form",0),t.NdJ("ngSubmit",function(){return e.guardarActivo()}),t.TgZ(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Activo"),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6,"Nuevo"),t.qZA()(),t.TgZ(7,"mat-dialog-content")(8,"mat-card-content")(9,"mat-form-field",1)(10,"mat-label"),t._uU(11,"Fecha"),t.qZA(),t._UZ(12,"input",2),t.TgZ(13,"mat-hint"),t._uU(14,"DD/MM/YYYY"),t.qZA(),t._UZ(15,"mat-datepicker-toggle",3)(16,"mat-datepicker",4,5),t.TgZ(18,"mat-error"),t._uU(19," Revise la fecha "),t.qZA()(),t.TgZ(20,"mat-form-field",1)(21,"mat-label"),t._uU(22,"Nombre Activo"),t.qZA(),t._UZ(23,"input",6),t.TgZ(24,"mat-error"),t._uU(25," Revise el Nombre "),t.qZA()(),t.TgZ(26,"mat-form-field",1)(27,"mat-label"),t._uU(28,"Tipo de Activo"),t.qZA(),t.TgZ(29,"mat-select",7),t.YNc(30,N,2,2,"mat-option",8),t.qZA(),t.TgZ(31,"mat-error"),t._uU(32," Revise el Tipo del Activo "),t.qZA()(),t.TgZ(33,"mat-form-field",9)(34,"mat-label"),t._uU(35,"Costo Activo"),t.qZA(),t._UZ(36,"input",10),t.TgZ(37,"span",11),t._uU(38,"Bs.\xa0"),t.qZA(),t.TgZ(39,"span",12),t._uU(40,".00"),t.qZA(),t.TgZ(41,"mat-error"),t._uU(42," Revise el costo del activo "),t.qZA()(),t.TgZ(43,"mat-form-field",1)(44,"mat-label"),t._uU(45,"Detalle del Activo"),t.qZA(),t.TgZ(46,"textarea",13),t._uU(47,"            "),t.qZA(),t.TgZ(48,"mat-error"),t._uU(49," Revise el detalle del Activo "),t.qZA()()()(),t.TgZ(50,"mat-card-actions")(51,"button",14),t._uU(52,"Cancelar"),t.qZA(),t.TgZ(53,"button",15),t._uU(54,"Guardar"),t.qZA()()()()),2&o){const a=t.MAs(17);t.xp6(1),t.Q6J("formGroup",e.formActivo),t.xp6(11),t.Q6J("matDatepicker",a),t.xp6(3),t.Q6J("for",a),t.xp6(15),t.Q6J("ngForOf",e.tipo_activo)}},dependencies:[u.sg,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,x.lW,m.a8,m.dk,m.dn,m.n5,m.$j,m.hq,h.Mq,h.hl,h.nW,d.ZT,d.xY,p.TO,p.KE,p.bx,p.hX,p.qo,p.R9,k.Nt,U.gD,S.ey],styles:["mat-form-field[_ngcontent-%COMP%]{display:block;margin-top:10px}.example-right-align[_ngcontent-%COMP%]{text-align:right}input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none}input.example-right-align[_ngcontent-%COMP%]{-moz-appearance:textfield}"]}),i})();var q=n(7261),J=n(9069),L=n(4004),O=n(262),D=n(9646);let z=(()=>{class i{constructor(o,e){this.http=o,this.authService=e,this.baseUrl=T.N.baseUrl+"/compras"}postCompra(o,e){const a=`${this.baseUrl}/${o}`,c=(new v.WM).set("x-token",this.authService.token);return this.http.post(a,e,{headers:c}).pipe((0,L.U)(l=>l),(0,O.K)(l=>(0,D.of)({ok:l.error.ok,msg:l.error.msg})))}}return i.\u0275fac=function(o){return new(o||i)(t.LFG(v.eN),t.LFG(M.e))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function B(i,s){if(1&i&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&i){const o=s.$implicit;t.Q6J("value",o.uid),t.xp6(1),t.hij(" ",o.numero_cuenta+" | "+o.descripcion," ")}}let w=(()=>{class i{constructor(o,e,a,c,l,f){this.data=o,this.dialogRef=e,this._snackBar=a,this.fb=c,this.cs=l,this.cos=f,this.activo=this.data.nombreActivo||"",this.uid=this.data.uidActivo||"",this.hoy=new Date,this.formCompra=this.fb.group({lugar_compra:["",[r.kI.required,r.kI.minLength(5),r.kI.maxLength(50)]],cuenta:["",[r.kI.required]],fecha_compra:[{value:this.hoy,disabled:!0},[r.kI.required]]})}ngOnInit(){this.getCuentas()}getCuentas(){this.cs.getCuentas().subscribe(o=>{!0===o.ok&&(this.cuentas=o.data)})}guardarCompra(){this.formCompra.invalid?this.formCompra.markAllAsTouched():(this.movimiento={fecha_compra:_(this.formCompra.controls.fecha_compra.value).format("YYYY-MM-DD"),cuenta:this.formCompra.controls.cuenta.value,lugar_compra:this.formCompra.controls.lugar_compra.value.trim().toUpperCase()},this.cos.postCompra(this.uid,this.movimiento).subscribe(o=>{!0===o.ok?this.dialogRef.close(!0):this.abrirSnackBar(o.msg)}))}abrirSnackBar(o){this._snackBar.open(o.toString(),"Aceptar",{horizontalPosition:"end",verticalPosition:"top",duration:1500})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(d.WI),t.Y36(d.so),t.Y36(q.ux),t.Y36(r.qu),t.Y36(J.S),t.Y36(z))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-compra-modal"]],decls:42,vars:6,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","disabled","",3,"value"],["matInput","","formControlName","fecha_compra",3,"matDatepicker","max"],["matSuffix","",3,"for"],["disabled","false"],["dp1",""],["formControlName","cuenta"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","lugar_compra"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(o,e){if(1&o&&(t.TgZ(0,"mat-card")(1,"form",0),t.NdJ("ngSubmit",function(){return e.guardarCompra()}),t.TgZ(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Compra"),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6,"Nuevo"),t.qZA()(),t.TgZ(7,"mat-dialog-content")(8,"mat-card-content")(9,"mat-form-field",1)(10,"mat-label"),t._uU(11,"Nombre Producto"),t.qZA(),t._UZ(12,"input",2),t.qZA(),t.TgZ(13,"mat-form-field",1)(14,"mat-label"),t._uU(15,"Fecha Compra"),t.qZA(),t._UZ(16,"input",3),t.TgZ(17,"mat-hint"),t._uU(18,"DD/MM/YYYY"),t.qZA(),t._UZ(19,"mat-datepicker-toggle",4)(20,"mat-datepicker",5,6),t.TgZ(22,"mat-error"),t._uU(23," Revise la fecha "),t.qZA()(),t.TgZ(24,"mat-form-field",1)(25,"mat-label"),t._uU(26,"N\xb0 de Cuenta"),t.qZA(),t.TgZ(27,"mat-select",7),t.YNc(28,B,2,2,"mat-option",8),t.qZA(),t.TgZ(29,"mat-error"),t._uU(30," Revise el n\xfamero de cuenta "),t.qZA()(),t.TgZ(31,"mat-form-field",1)(32,"mat-label"),t._uU(33,"Lugar de compra"),t.qZA(),t._UZ(34,"input",9),t.TgZ(35,"mat-error"),t._uU(36," Revise el Nombre "),t.qZA()()()(),t.TgZ(37,"mat-card-actions")(38,"button",10),t._uU(39,"Cancelar"),t.qZA(),t.TgZ(40,"button",11),t._uU(41,"Guardar"),t.qZA()()()()),2&o){const a=t.MAs(21);t.xp6(1),t.Q6J("formGroup",e.formCompra),t.xp6(11),t.Q6J("value",e.activo),t.xp6(4),t.Q6J("matDatepicker",a)("max",e.hoy),t.xp6(3),t.Q6J("for",a),t.xp6(9),t.Q6J("ngForOf",e.cuentas)}},dependencies:[u.sg,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,x.lW,m.a8,m.dk,m.dn,m.n5,m.$j,m.hq,h.Mq,h.hl,h.nW,d.ZT,d.xY,p.TO,p.KE,p.bx,p.hX,p.R9,k.Nt,U.gD,S.ey],styles:["mat-form-field[_ngcontent-%COMP%]{display:block;margin-top:10px}"]}),i})();var P=n(5626),Y=n(5245),g=n(2525);function R(i,s){if(1&i){const o=t.EpF();t.TgZ(0,"div",8),t._uU(1),t._UZ(2,"span",9),t._uU(3),t.ALo(4,"number"),t.TgZ(5,"button",10)(6,"mat-icon"),t._uU(7,"more_vert"),t.qZA()(),t.TgZ(8,"mat-menu",null,11)(10,"button",12),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw(2);return t.KtG(l.comprar(c.uid))}),t.TgZ(11,"mat-icon"),t._uU(12,"shopping_cart"),t.qZA(),t.TgZ(13,"span"),t._uU(14,"Comprar"),t.qZA()(),t.TgZ(15,"button",12),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw(2);return t.KtG(l.editar(c.uid))}),t.TgZ(16,"mat-icon"),t._uU(17,"edit"),t.qZA(),t.TgZ(18,"span"),t._uU(19,"Modificar"),t.qZA()(),t.TgZ(20,"button",12),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw(2);return t.KtG(l.eliminar(c.uid))}),t.TgZ(21,"mat-icon"),t._uU(22,"delete"),t.qZA(),t.TgZ(23,"span"),t._uU(24,"Eliminar"),t.qZA()()()()}if(2&i){const o=s.$implicit,e=t.MAs(9);t.xp6(1),t.hij(" ",o.nombre," "),t.xp6(2),t.hij(" ",t.xi3(4,3,o.costo,"1.2-2")," Bs "),t.xp6(2),t.Q6J("matMenuTriggerFor",e)}}function $(i,s){if(1&i){const o=t.EpF();t.TgZ(0,"div",6),t.NdJ("cdkDropListDropped",function(a){t.CHM(o);const c=t.oxw();return t.KtG(c.drop(a))}),t.YNc(1,R,25,6,"div",7),t.qZA()}if(2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.activosList)}}function E(i,s){1&i&&(t.TgZ(0,"div",13),t._uU(1," Agrege activos para ser cotizados... "),t.qZA())}let Q=(()=>{class i{constructor(o,e,a,c){this.activoService=o,this._snackBar=e,this.dialog=a,this.parametrosService=c}ngOnInit(){this.getActivos(),this.getTiposActivos()}getTiposActivos(){this.parametrosService.getTiposActivos().subscribe(o=>{this.tiposActivos=!0===o.ok?o.data:[]})}drop(o){this.activosList.length>1&&o.previousIndex!=o.currentIndex&&((0,A.bA)(this.activosList,o.previousIndex,o.currentIndex),this.activosList.forEach((e,a)=>{e.posicion=a+1}),this.activoService.updateActivos(this.activosList).subscribe(e=>{!0!==e.ok&&this.abrirSnackBar("No se pudo Actualizar")}))}getActivos(){this.activoService.getCotizaciones().subscribe(o=>{!0===o.ok&&(this.activosList=o.data)})}editar(o){this.activoService.getActivo(o).subscribe(e=>{!0===e.ok&&this.dialog.open(y,{width:"500px",disableClose:!0,data:{tiposActivos:this.tiposActivos,activo:e.data}}).afterClosed().subscribe(a=>{!0===a?(this.getActivos(),this.abrirSnackBar("Modificaci\xf3n Exitosa")):this.abrirSnackBar("Error al Modificar")})})}comprar(o){var e;const a=null===(e=this.activosList.find(f=>f.uid==o))||void 0===e?void 0:e.nombre;this.dialog.open(w,{width:"500px",disableClose:!0,data:{nombreActivo:a,uidActivo:o}}).afterClosed().subscribe(f=>{!0===f&&(this.getActivos(),this.abrirSnackBar("Compra Exitosa"))})}eliminar(o){this.dialog.open(F.m,{width:"250px",disableClose:!0,data:{titulo:"Borrar Cotizaci\xf3n de Activo"}}).afterClosed().subscribe(a=>{!0===a&&this.activoService.deleteActivo(o).subscribe(c=>{!0===c.ok&&(this.getActivos(),this.abrirSnackBar("Eliminaci\xf3n Exitosa"))})})}abrirModal(){this.dialog.open(y,{width:"500px",disableClose:!0,data:{tiposActivos:this.tiposActivos}}).afterClosed().subscribe(e=>{!0===e?(this.getActivos(),this.abrirSnackBar("Registro Exitoso")):this.abrirSnackBar("Error al Registrar")})}abrirSnackBar(o){this._snackBar.open(o.toString(),"Aceptar",{horizontalPosition:"end",verticalPosition:"top",duration:1500})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(b),t.Y36(q.ux),t.Y36(d.uw),t.Y36(P.u))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-activos"]],decls:13,vars:2,consts:[[1,"row"],[1,"titulo"],["mat-raised-button","","color","primary",1,"titulo",3,"click"],["cdkDropList","","class","example-list",3,"cdkDropListDropped",4,"ngIf","ngIfElse"],["class","example-list"],["activoVacio",""],["cdkDropList","",1,"example-list",3,"cdkDropListDropped"],["class","example-box","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"example-box"],[1,"spacer"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"example-box"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"h1")(2,"mat-icon",1),t._uU(3,"store_mall_directory"),t.qZA(),t.TgZ(4,"span"),t._uU(5," Cotizaciones "),t.qZA(),t.TgZ(6,"button",2),t.NdJ("click",function(){return e.abrirModal()}),t.TgZ(7,"mat-icon"),t._uU(8,"add"),t.qZA(),t._uU(9," Agregar Activo "),t.qZA()()(),t.YNc(10,$,2,1,"div",3),t.YNc(11,E,2,0,"ng-template",4,5,t.W1O)),2&o){const a=t.MAs(12);t.xp6(10),t.Q6J("ngIf",e.activosList&&e.activosList.length>0)("ngIfElse",a)}},dependencies:[u.sg,u.O5,A.Wj,A.Zt,x.lW,Y.Hw,g.VK,g.OP,g.p6,u.JJ],styles:[".example-list[_ngcontent-%COMP%]{width:500px;max-width:100%;border:solid 1px #595959;min-height:60px;display:block;background:595959;border-radius:4px;overflow:hidden;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.example-box[_ngcontent-%COMP%]{background:#424242;padding:20px 10px;border-bottom:solid 1px #595959;color:#fff;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]}),i})();function j(i,s){if(1&i){const o=t.EpF();t.TgZ(0,"div",6),t._uU(1),t._UZ(2,"span",7),t._uU(3),t.ALo(4,"number"),t.TgZ(5,"button",8)(6,"mat-icon"),t._uU(7,"more_vert"),t.qZA()(),t.TgZ(8,"mat-menu",null,9)(10,"button",10),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw(2);return t.KtG(l.vender(c.uid))}),t.TgZ(11,"mat-icon"),t._uU(12,"shopping_cart"),t.qZA(),t.TgZ(13,"span"),t._uU(14,"Vender"),t.qZA()(),t.TgZ(15,"button",10),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw(2);return t.KtG(l.siniestro(c.uid))}),t.TgZ(16,"mat-icon"),t._uU(17,"edit"),t.qZA(),t.TgZ(18,"span"),t._uU(19,"Siniestro"),t.qZA()()()()}if(2&i){const o=s.$implicit,e=t.MAs(9);t.xp6(1),t.hij(" ",o.nombre," "),t.xp6(2),t.hij(" ",t.xi3(4,3,o.costo,"1.2-2")," Bs "),t.xp6(2),t.Q6J("matMenuTriggerFor",e)}}function G(i,s){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,j,20,6,"div",5),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.activosList)}}function W(i,s){1&i&&(t.TgZ(0,"div",11),t._uU(1," Compre activos para ser listados... "),t.qZA())}const K=[{path:"",children:[{path:"",component:(()=>{class i{constructor(o){this.actService=o}ngOnInit(){this.getActivos()}getActivos(){this.actService.getActivos().subscribe(o=>{this.activosList=!0===o.ok?o.data:[]})}vender(o){}siniestro(o){}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(b))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-mis-activos"]],decls:9,vars:2,consts:[[1,"row"],[1,"titulo"],[4,"ngIf","ngIfElse"],["class","example-list"],["activoVacio",""],["class","example-box","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"example-box"],[1,"spacer"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","disabled","true",3,"click"],[1,"example-box"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"h1")(2,"mat-icon",1),t._uU(3,"devices_other"),t.qZA(),t.TgZ(4,"span"),t._uU(5," Mis Activos "),t.qZA()()(),t.YNc(6,G,2,1,"div",2),t.YNc(7,W,2,0,"ng-template",3,4,t.W1O)),2&o){const a=t.MAs(8);t.xp6(6),t.Q6J("ngIf",e.activosList&&e.activosList.length>0)("ngIfElse",a)}},dependencies:[u.sg,u.O5,A.Zt,x.lW,Y.Hw,g.VK,g.OP,g.p6,u.JJ],styles:[".example-list[_ngcontent-%COMP%]{width:500px;max-width:100%;border:solid 1px #595959;min-height:60px;display:block;background:595959;border-radius:4px;overflow:hidden;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.example-box[_ngcontent-%COMP%]{background:#424242;padding:20px 10px;border-bottom:solid 1px #595959;color:#fff;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;font-size:14px}"]}),i})()},{path:"cotizacion",component:Q},{path:"**",redirectTo:""}]}];let V=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[C.Bz.forChild(K),C.Bz]}),i})(),H=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,V,r.UX,I.q]}),i})()}}]);