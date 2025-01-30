var c=Object.defineProperty;var m=(s,a,e)=>a in s?c(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e;var l=(s,a,e)=>(m(s,typeof a!="symbol"?a+"":a,e),e);import{A as u,a as o,C as b,c as t,S as p,d as f}from"./index.d57021e8.js";import{m as g}from"./map-actions.609b7ae0.js";import{i as h}from"./datatable.4b22066f.js";import{B as y}from"./button.d257158a.js";import"./jquery.4c77f39d.js";const v=(s,a)=>({url:u+"/master/study-programs",table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,name:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender:(e,r,i,n)=>`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${i.hashid}">
                    </div>`},{title:"No",data:null,name:null,searchable:!1,orderable:!1,width:"5%",mRender:(e,r,i,n)=>n.row+n.settings._iDisplayStart+1},{title:"Kode",data:"code",name:"code"},{title:"Nama Prodi",data:"name",name:"name",mRender:function(e,r,i){return i.education_level.code+" - "+e}},{title:"Nama Inggris",data:"name_en",name:"name_en"},{title:"Alias",data:"alias",name:"alias"},{title:"Jurusan",data:"major",name:"major"},{title:"Akreditasi",data:"acreditation",name:"acreditation",mRender:function(e,r,i){return e=="none"?"Belum Akreditasi":e}},{title:"SK Akreditasi",data:"acreditation_number",name:"acreditation_number",mRender:function(e,r,i){return e==null?"-":e}},{title:"Aktif",data:"is_active",name:"is_active",mRender:(e,r,i,n)=>`<span class="badge badge-soft-${e==!0?"success":"danger"} text-uppercase">${e==!0?"Aktif":"Tidak Aktif"}</span>`},{title:"",data:"id",name:"id",searchable:!1,orderable:!1,sClass:"text-center nowrap",mRender:(e,r,i,n)=>{var d="";return o().includes("update-study-programs")&&(d+=`<button type="button" class="btn btn-outline-primary btn-sm mx-1" data-toggle="edit" data-id="${e}"><i class="bx bx-edit-alt"></i></button>`),o().includes("delete-study-programs")&&(d+=`<button type="button" class="btn btn-outline-danger btn-sm mx-1" data-toggle="delete" data-id="${e}"><i class="bx bx-trash"></i></button>`),d}}],callback:()=>{$('button[data-toggle="edit"]').unbind().on("click",function(e){e.preventDefault(),s($(this).data("id"))}),$('button[data-toggle="delete"]').unbind().on("click",function(e){e.preventDefault(),a($(this).data("id"))})}}),k="master/study-programs";class x extends b{render(){var a,e;return t("div",{className:"intro-y"},t("div",{className:"row"},t("div",{className:"col-12"},t("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},t("h4",{className:"mb-sm-0"},(a=this.meta.title)!=null?a:"Untitled Page"),t("div",{className:"page-title-right"},t("ol",{className:"breadcrumb"},t("li",{className:"breadcrumb-item"},t("router-name",{name:"apps.dashboard"},"Dashboard")),t("li",{className:"breadcrumb-item"},"Data Pelengkap"),t("li",{className:"breadcrumb-item"},"Perguruan Tinggi"),t("li",{className:"breadcrumb-item active"},(e=this.meta.title)!=null?e:"Untitled Page")))))),t("div",{className:"card"},t("div",{className:"card-header border-0"},t("div",{className:"text-sm-end text-center"},t("div",{className:"dt-actions d-inline"}),t(y,{data:{redirect:!0,target:"apps.master.study-programs.create",refresh:!0,filter:!1,permission:"create-study-programs",title:"Tambah Program Studi"}}))),t("div",{className:"card-body"},t("div",{className:"table-responsive table-card mb-1"},t("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=h("#dataTable",v(this.updateData,this.deleteData))}async updateData(a){this.$router.pushName("apps.master.study-programs.edit",{id:a})}async deleteData(a){p.fire({title:"Hapus ?",icon:"question",text:"Data yang dihapus tidak dikembalikan!",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Ya, lanjutkan",cancelButtonText:"Batal",confirmButtonColor:"#d1403b"}).then(async e=>{e.isConfirmed&&(await f(`${k}/${a}`)).status==200&&this.table.ajax.reload()})}}l(x,"defaultProps",{...g(["getMajors","getEducationLevels"]),table:null});export{x as default};
