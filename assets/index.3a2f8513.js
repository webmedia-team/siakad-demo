var o=Object.defineProperty;var m=(r,a,e)=>a in r?o(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e;var d=(r,a,e)=>(m(r,typeof a!="symbol"?a+"":a,e),e);import{A as u,a as c,C as b,c as t,d as p}from"./index.d57021e8.js";import{i as h}from"./datatable.4b22066f.js";import{B as f}from"./button.d257158a.js";import"./jquery.4c77f39d.js";const g=(r,a)=>({url:u+"/portal/announcements",table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,id:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender:(e,s,i,n)=>`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${i.hashid}">
                    </div>`},{title:"No",data:"id",name:"id",searchable:!1,orderable:!1,width:"5%",mRender:(e,s,i,n)=>n.row+n.settings._iDisplayStart+1},{title:"Diperuntukan Untuk",data:"intended_for",name:"intended_for",mRender:(e,s,i,n)=>e==""||e==null?"-":e},{title:"Judul",data:"title",name:"title",mRender:(e,s,i,n)=>`
                        <div class="d-flex align-items-center">
                            <div class="me-3" style="width: 100px;height: 100px;border-radius: 50%;">
                                <img src="${i.thumbnail}" width="100%">
                            </div>
                            <div>
                                <strong>${e}</strong>
                                <p class="mb-0 pb-0 text-muted small"><hr /></p>
                            </div>
                        </div>
                    `},{title:"Pesan",data:"message",name:"message"},{title:"Lampiran",data:"attachment",name:"attachment",mRender:(e,s,i,n)=>{let l="-";return e==null||e==""?l="-":l=`<a href="${e}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary"><i class="bx bxs-file"></i></a>`,l}},{title:"Prioritas?",data:"is_priority",name:"is_priority",mRender:(e,s,i,n)=>`<i class="bx bxs-${e==!0?"check":"minus"}-circle text-${e==!0?"success":"danger"} bx-bold"></i>`},{title:"Status",data:"is_active",name:"is_active",mRender:(e,s,i,n)=>`<span class="badge badge-soft-${e==!0?"success":"danger"} text-uppercase">${e==!0?"Aktif":"Tidak Aktif"}</span>`},{title:"",data:"hashid",name:"id",searchable:!1,orderable:!1,sClass:"text-center nowrap",mRender:(e,s,i,n)=>{var l="";return c().includes("update-announcements")&&(l+=`<button type="button" class="btn btn-outline-primary btn-sm mx-1" data-toggle="edit" data-id="${e}"><i class="bx bx-edit-alt"></i></button>`),c().includes("delete-announcements")&&(l+=`<button type="button" class="btn btn-outline-danger btn-sm mx-1" data-toggle="delete" data-id="${e}"><i class="bx bx-trash"></i></button>`),l}}],callback:()=>{$('button[data-toggle="edit"]').unbind().on("click",function(e){e.preventDefault(),r($(this).data("id"))}),$('button[data-toggle="delete"]').unbind().on("click",function(e){e.preventDefault(),a($(this).data("id"))})}}),v="portal/announcements";class x extends b{render(){var a,e;return t("div",{class:"intro-y"},t("div",{className:"row"},t("div",{className:"col-12"},t("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},t("h4",{class:"mb-sm-0"},(a=this.meta.title)!=null?a:"Untitled Page"),t("div",{className:"page-title-right"},t("div",{className:"breadcrumb"},t("li",{className:"breadcrumb-item"},t("router-link",{link:"apps.dashboard"},"Dashboard")),t("li",{className:"breadcrumb-item"},"Portal"),t("li",{className:"breadcrumb-item active"},(e=this.meta.title)!=null?e:"Untitled Page")))))),t("div",{className:"card"},t("div",{className:"card-header border-0"},t("div",{className:"text-sm-end text-center"},t("div",{className:"dt-actions d-inline"}),t(f,{data:{redirect:!0,target:"apps.portal.announcements.create",filter:!1,permission:"create-announcements",refresh:!0,title:"Tambah Pengumuman"}}))),t("div",{className:"card-body"},t("div",{className:"table-responsive table-card mb-1"},t("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=h("#dataTable",g(this.updateData,this.deleteData))}async updateData(a){this.$router.pushName("apps.portal.announcements.edit",{id:a})}async deleteData(a){let{isConfirmed:e}=await this.showConfirm();if(e){this.showLoading();const s=await p(`${v}/${a}`);this.hideLoading(),s.status==200&&this.table.ajax.reload()}}}d(x,"defaultProps",{table:null});export{x as default};
