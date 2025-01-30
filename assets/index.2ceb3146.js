var g=Object.defineProperty;var v=(i,t,a)=>t in i?g(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var c=(i,t,a)=>(v(i,typeof t!="symbol"?t+"":t,a),a);import{A as N,a as d,C as p,c as e,r as x,h as y,g as k,p as m,S as T,d as S,u as b}from"./index.d57021e8.js";import{m as _}from"./map-actions.609b7ae0.js";import{i as w}from"./datatable.4b22066f.js";import{B as D}from"./button.d257158a.js";/* empty css                 */import"./jquery.4c77f39d.js";const A=(i,t)=>({url:N+"/lecture/thesis-requirements",table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,id:"code",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender:(a,s,r,l)=>`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${r.id}">
                    </div>`},{title:"No",data:"hashid",name:"hashid",searchable:!1,orderable:!1,width:"5%",mRender:(a,s,r,l)=>l.row+l.settings._iDisplayStart+1},{title:"Nama Syarat Ujian",data:"name",name:"name"},{title:"Aktif?",data:"is_active",name:"is_active",mRender:(a,s,r,l)=>`<i class="bx bxs-${a==!0?"check":"minus"}-circle text-${a==!0?"success":"danger"} bx-bold"></i>`},{title:"Upload?",data:"is_upload",name:"is_upload",mRender:(a,s,r,l)=>`<i class="bx bxs-${a==!0?"check":"minus"}-circle text-${a==!0?"success":"danger"} bx-bold"></i>`},{title:"Tahap TA",data:"thesis_stage",name:"thesis_stage"},{title:"Jenis TA",data:"thesis_type",name:"thesis_type",mRender:function(a){return a==1?"Skripsi / TA":a==2?"Tesis":"Disertasi"}},{title:"",data:"hashid",name:"hashid",searchable:!1,orderable:!1,sClass:"text-center nowrap",mRender:(a,s,r,l)=>{var n="";return d().includes("update-thesis-requirements")&&(n+=`<button type="button" class="btn btn-outline-primary btn-sm mx-1" data-toggle="edit" data-id="${a}"><i class="bx bx-edit-alt"></i></button>`),d().includes("delete-thesis-requirements")&&(n+=`<button type="button" class="btn btn-outline-danger btn-sm mx-1" data-toggle="delete" data-id="${a}"><i class="bx bx-trash"></i></button>`),n}}],callback:()=>{$('button[data-toggle="edit"]').unbind().on("click",function(a){a.preventDefault(),i($(this).data("id"))}),$('button[data-toggle="delete"]').unbind().on("click",function(a){a.preventDefault(),t($(this).data("id"))})}});class f extends p{render(){return e("div",{className:"modal fade",id:"thesis-requirement-modal",role:"dialog"},e("div",{className:"modal-dialog",role:"document"},e("div",{className:"modal-content"},e("form",{onsubmit:this.props.onsubmit},e("div",{className:"modal-header bg-light pb-2"},e("h5",{className:"modal-title"},this.props.title)),e("div",{className:"modal-body"},e("div",{className:"mb-3"},e("label",{for:"name"},"Nama Syarat ",e("span",{className:"text-danger"},"*")),e("input",{type:"text",name:"name",className:"form-control",placeholder:"Nama Syarat",autocomplete:"off",id:"name"})),e("div",{className:"mb-3"},e("label",{for:"thesis-stage"},"Tahap ",e("span",{className:"text-danger"},"*")),e("select",{name:"thesis_stage",id:"thesis-stage",className:"form-control js-choices"},e("option",{value:""},"Pilih Tahap"),this.props.thesisStages.map(t=>e("option",{value:t.id},t.name)))),e("div",{className:"mb-3"},e("label",{for:"thesis-type"},"Jenis Tugas Akhir ",e("span",{className:"text-danger"},"*")),e("select",{name:"thesis_type",id:"thesis-type",className:"form-control js-choices"},e("option",{value:""},"Pilih Jenis Tugas Akhir"),e("option",{value:"1"},"Skripsi / TA"),e("option",{value:"2"},"Tesis"),e("option",{value:"3"},"Disertasi"))),e("div",{className:"mb-3"},e("label",{for:"name"},"Keterangan ",e("span",{className:"text-danger"},"*")),e("textarea",{name:"description",id:"description",className:"form-control",cols:"30",rows:"2"})),e("div",{className:"mb-3"},e("div",{className:"form-check"},e("input",{className:"form-check-input",name:"is_active",type:"checkbox",id:"is-active",checked:""}),e("label",{className:"form-check-label",for:"is-active"},"Aktif?"))),e("div",{className:"mb-3"},e("div",{className:"form-check"},e("input",{className:"form-check-input",name:"is_upload",type:"checkbox",id:"is-upload"}),e("label",{className:"form-check-label",for:"is-upload"},"Upload?")))),e("div",{className:"modal-footer"},e("button",{type:"button",className:"btn btn-light","data-bs-dismiss":"modal"},"Batal"),e("button",{type:"submit",className:"btn btn-primary","data-form-loading":!0},e("i",{className:"bx bx-save"})," Simpan"))))))}}c(f,"defaultProps",{onsubmit:null,title:"Untitled Modal",data:null,thesisStages:[]});const[j,u]=b("Tambah Syarat Ujian"),[h,B]=b(""),o="lecture/thesis-requirements";class U extends p{render(){var t,a;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0"},(t=this.meta.title)!=null?t:"Untitled Page"),e("div",{className:"page-title-right"},e("ol",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item"},"Perkuliahan"),e("li",{className:"breadcrumb-item"},"Tugas Akhir"),e("li",{className:"breadcrumb-item active"},(a=this.meta.title)!=null?a:"Untitled Page")))))),e("div",{className:"card dt-filter-card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-6"},e("label",{htmlFor:""},"Tahap TA"),e("select",{name:"thesis_stage_id",id:"thesis-stage-filter",className:"from-control js-choices dt-filter-input"},e("option",{value:"all",selected:!0},"Semua Tahap"),this.thesisStages.map(s=>e("option",{value:s.id},s.name)))),e("div",{className:"col-6"},e("label",{htmlFor:""},"Jenis TA"),e("select",{name:"thesis_type",id:"thesis-type-filter",className:"from-control js-choices dt-filter-input"},e("option",{value:"all",selected:!0},"Semua Jenis TA"),e("option",{value:"1"},"Skripsi / TA"),e("option",{value:"2"},"Tesis"),e("option",{value:"3"},"Disertasi")))))),e("div",{className:"card"},e("div",{className:"card-header border-0"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(D,{data:{redirect:!1,onclick:this.createData,refresh:!0,filter:!0,permission:"create-thesis-requirements",title:"Tambah Syarat Ujian"}}))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))),e(f,{thesisStages:this.thesisStages,onsubmit:this.submit,title:j}))}componentDidMount(){this.table=w("#dataTable",A(this.editData,this.deleteData))}async componentWillMount(){const{data:t}=await this.getData({model:["getThesisStages"]});this.thesisStages=t.getThesisStages.original.thesisStages}createData(){u("Tambah Syarat Ujian"),x(),y(),$("#thesis-requirement-modal").modal("show")}async editData(t){u("Edit Syarat Ujian"),this.showLoading();const a=await k(`${o}/${t}`,{hideSuccessNotification:!0}),{thesisRequirement:s}=a.data;this.hideLoading(),a.status==200&&(B(s.hashid),$('*[name="name"]').val(s.name),$('*[name="description"]').val(s.description),$('*[name="is_active"]').prop("checked",s.is_active==!0),$('*[name="is_upload"]').prop("checked",s.is_upload==!0),$(".js-choices")[2].choices.setChoiceByValue(s.thesis_stage_id.toString()),$(".js-choices")[3].choices.setChoiceByValue(s.thesis_type)),$("#thesis-requirement-modal").modal("show")}async submit(t){t.preventDefault();let a;h==""?a=await m(`${o}`,t.target):a=await m(`${o}/${h}`,t.target),a.status==200&&(this.$router.reload(),this.table.ajax.reload)}async deleteData(t){T.fire({title:"Hapus ?",icon:"question",text:"Data yang dihapus tidak dikembalikan!",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Ya, lanjutkan",cancelButtonText:"Batal",confirmButtonColor:"#d1403b"}).then(async a=>{a.isConfirmed&&(await S(`${o}/${t}`)).status==200&&this.table.ajax.reload()})}}c(U,"defaultProps",{..._(["getData"]),table:null,thesisStages:[]});export{U as default};
