var v=Object.defineProperty;var x=(s,e,t)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var r=(s,e,t)=>(x(s,typeof e!="symbol"?e+"":e,t),t);import{A as y,a as m,C as f,c as a,r as c,h as b,g as w,p as u,d as k,u as N}from"./index.d57021e8.js";import{i as D}from"./datatable.4b22066f.js";import{B as K}from"./button.d257158a.js";/* empty css                 */import"./jquery.4c77f39d.js";const T=(s,e)=>({url:y+"/master/disabilities",table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,id:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender:(t,i,n,l)=>`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${n.hashid}">
                    </div>`},{title:"No",data:"id",name:"id",searchable:!1,orderable:!1,width:"5%",mRender:(t,i,n,l)=>l.row+l.settings._iDisplayStart+1},{title:"Nama Kebutuhan Khusus",data:"name",name:"name"},{title:"",data:"hashid",name:"id",searchable:!1,orderable:!1,sClass:"text-center nowrap",mRender:(t,i,n,l)=>{var o="";return m().includes("update-disabilities")&&(o+=`<button type="button" class="btn btn-outline-primary btn-sm mx-1" data-toggle="edit" data-id="${t}"><i class="bx bx-edit-alt"></i></button>`),m().includes("delete-disabilities")&&(o+=`<button type="button" class="btn btn-outline-danger btn-sm mx-1" data-toggle="delete" data-id="${t}"><i class="bx bx-trash"></i></button>`),o}}],callback:()=>{$('button[data-toggle="edit"]').unbind().on("click",function(t){t.preventDefault(),s($(this).data("id"))}),$('button[data-toggle="delete"]').unbind().on("click",function(t){t.preventDefault(),e($(this).data("id"))})}});class g extends f{render(){return a("div",{className:"modal fade",id:"disability-modal",role:"dialog"},a("div",{className:"modal-dialog",role:"document"},a("div",{className:"modal-content"},a("form",{onsubmit:this.props.onsubmit},a("div",{className:"modal-header bg-light pb-2"},a("h5",{className:"modal-title"},this.props.title)),a("div",{className:"modal-body"},a("div",{className:"mb-3"},a("label",{htmlFor:"name",className:"form-label"},"Nama Kebutuhan Khusus ",a("i",{className:"text-danger"},"*")),a("input",{type:"text",name:"name",placeholder:"Nama Kebutuhan Khusus",autoComplete:"off",id:"name",className:"form-control"}))),a("div",{className:"modal-footer"},a("button",{type:"button",className:"btn btn-light","data-bs-dismiss":"modal"},"Batal"),a("button",{type:"submit",className:"btn btn-primary","data-form-loading":!0},a("i",{className:"bx bx-save"})," Simpan"))))))}}r(g,"defaultProps",{onsubmit:null,title:"Untitled Modal"});const[C,h]=N("Tambah Kebutuhan Khusus"),[p,P]=N(""),d="master/disabilities";class L extends f{render(){var e,t;return a("div",{className:"intro-y"},a("div",{className:"row"},a("div",{className:"col-12"},a("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},a("h4",{className:"mb-sm-0"},(e=this.meta.title)!=null?e:"Untitled Page"),a("div",{className:"page-title-right"},a("div",{className:"breadcrumb"},a("li",{className:"breadcrumb-item"},a("router-link",{link:"apps.dashboard"},"Dashboard")),a("li",{className:"breadcrumb-item"},"Data Pelengkap"),a("li",{className:"breadcrumb-item"},"Biodata"),a("li",{className:"breadcrumb-item active"},(t=this.meta.title)!=null?t:"Untitled Page")))))),a("div",{className:"card"},a("div",{className:"card-header border-0"},a("div",{className:"text-sm-end text-center"},a("div",{className:"dt-actions d-inline"}),a(K,{data:{redirect:!1,onclick:this.createData,refresh:!0,filter:!1,permission:"create-disabilities",title:"Tambah Kebutuhan Khusus"}}))),a("div",{className:"card-body"},a("div",{className:"table-responsive table-card mb-1"},a("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))),a(g,{onsubmit:this.submit,title:C}))}componentDidMount(){this.table=D("#dataTable",T(this.editData,this.deleteData))}createData(){h("Tambah Kebutuhan Khusus"),c(),b(),$("#disability-modal").modal("show")}async editData(e){h("Edit Kebutuhan Khusus"),c(),b(),this.showLoading();const t=await w(`${d}/${e}`,{hideSuccessNotification:!0}),{disability:i}=t.data;this.hideLoading(),t.status==200&&(P(i.hashid),this.updateValue("name",i.name),$("#disability-modal").modal("show"))}async submit(e){e.preventDefault();let t;p==""?t=await u(`${d}`,e.target):t=await u(`${d}/${p}`,e.target),t.status==200&&(this.$router.reload(),this.table.ajax.reload())}async deleteData(e){let{isConfirmed:t}=await this.showConfirm();if(t){this.showLoading();const i=await k(`${d}/${e}`);this.hideLoading(),i.status==200&&this.table.ajax.reload()}}}r(L,"defaultProps",{table:null});export{L as default};
