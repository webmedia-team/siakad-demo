var d=Object.defineProperty;var l=(t,e,s)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var i=(t,e,s)=>(l(t,typeof e!="symbol"?e+"":e,s),s);import{A as o,C as c,c as a}from"./index.d57021e8.js";import{H as m}from"./header-component.12ae7606.js";import{i as u}from"./datatable.4b22066f.js";const b=t=>({url:`${o}/lecturer/lecture/college-class/${t}/class-participants`,table:[{title:"No",data:"id",name:"id",searchable:!1,orderable:!1,width:"5%",mRender:(e,s,n,r)=>r.row+r.settings._iDisplayStart+1},{title:"NIM",data:"student_nim",name:"student.nim"},{title:"Nama",data:"student.name",name:"student.name"},{title:"Jenis Kelamin",data:"student_gender",name:"student.gender",mRender:function(e){return e=="L"?"Laki-Laki":"Perempuan"}},{title:"Ketua Kelas",data:"is_class_coordinator",name:"is_class_coordinator",mRender(e,s,n){return`<i class="bx bxs-${e==!0?"check":"minus"}-circle text-${e==!0?"success":"danger"} bx-bold"></i>`}}],callback:()=>{},options:{order:[2,"asc"]}});class p extends c{render(){return a("div",{className:"intro-y"},a(m,{id:this.$router.params.id}),a("div",{className:"card shadow-sm mb-3"},a("div",{className:"card-header border-0"},a("div",{className:"row"},a("div",{className:"text-sm-end text-center"},a("div",{className:"dt-actions d-inline"})))),a("div",{className:"card-body"},a("div",{className:"table-responsive table-card mb-1"},a("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=u("#dataTable",b(this.$router.params.id))}}i(p,"defaultProps",{table:null});export{p as default};
