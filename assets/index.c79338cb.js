var u=Object.defineProperty;var p=(i,a,t)=>a in i?u(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var r=(i,a,t)=>(p(i,typeof a!="symbol"?a+"":a,t),t);import{A as b,a as n,C as m,c as e,p as h,d as f,r as v,h as N,u as g,B as y}from"./index.d57021e8.js";import{i as x}from"./datatable.4b22066f.js";import{B as w}from"./button.d257158a.js";import{m as _}from"./map-actions.609b7ae0.js";/* empty css                 */import"./jquery.4c77f39d.js";const k=(i,a)=>({url:b+"/lecture/theses",table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,id:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender:(t,s,o,d)=>`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${o.id}">
                    </div>`},{title:"No",data:"id",name:"id",searchable:!1,orderable:!1,width:"5%",mRender:(t,s,o,d)=>d.row+d.settings._iDisplayStart+1},{title:"Periode",data:"academic_period_id",name:"academic_period_id",mRender:function(t,s,o){return o.academic_period.name}},{title:"NIM",data:"student.nim",name:"student.nim"},{title:"Nama Mahasiswa",data:"student.name",name:"student.name"},{title:"Tanggal",data:"filing_date",name:"filing_date"},{title:"Topik",data:"topic",name:"topic"},{title:"Judul TA",data:"title",name:"title"},{title:"Pembimbing",data:"id",name:"id",mRender:function(t,s,o){let d="";return o.thesis_guidance.length>0&&o.thesis_guidance.forEach(l=>{d+=`<li>${l.employee.front_title==null?"":l.employee.front_title} ${l.employee.name}${l.employee.back_title==null?"":", "+l.employee.back_title}</li>`}),`<ul className="list-unstyled">
                        ${d}
                    </ul>`}},{title:"",data:"id",name:"id",searchable:!1,orderable:!1,sClass:"text-center nowrap",mRender:(t,s,o,d)=>{var l="";return n().includes("update-theses")&&(l+=`<button type="button" class="btn btn-outline-primary btn-sm mx-1" data-toggle="edit" data-id="${t}"><i class="bx bx-edit-alt"></i></button>`),n().includes("delete-theses")&&(l+=`<button type="button" class="btn btn-outline-danger btn-sm mx-1" data-toggle="delete" data-id="${t}"><i class="bx bx-trash"></i></button>`),l}}],callback:()=>{$('button[data-toggle="edit"]').unbind().on("click",function(t){t.preventDefault(),i($(this).data("id"))}),$('button[data-toggle="delete"]').unbind().on("click",function(t){t.preventDefault(),a($(this).data("id"))})}});class c extends m{render(){return e("div",{className:"modal fade",id:"form-import",role:"dialog"},e("div",{className:"modal-dialog",role:"document"},e("div",{className:"modal-content"},e("form",{encType:"multipart/form-data",onSubmit:this.props.onsubmit},e("div",{className:"modal-header bg-light pb-2"},e("h5",{className:"modal-title"},this.props.title)),e("div",{className:"modal-body"},e("div",{className:"mb-3"},e("button",{type:"button",onClick:this.props.ondownload,className:"btn btn-sm btn-primary"},e("i",{className:"bx bx-receipt"})," Template")),e("div",{id:""},e("div",{className:"mb-3"},e("label",{for:"file",className:"form-label"},"File Import"),e("br",null),e("input",{type:"file",name:"file_import",id:"file_import",className:"filepond",required:!0}),e("code",{className:""},"excel")))),e("div",{className:"modal-footer"},e("button",{type:"button",className:"btn btn-light","data-bs-dismiss":"modal"},"Batal"),e("button",{type:"submit",className:"btn btn-primary","data-form-loading":!0},e("i",{className:"bx bx-save"})," Simpan"))))))}}r(c,"defaultProps",{onsubmit:null,ondownload:null,title:"Untitled Modal"});const[P,T]=g("Import Tugas Akhir"),D="lecture/theses";class A extends m{async componentWillMount(){const{status:a,data:t}=await this.getData({model:["academicYears","studyPrograms","academicPeriods"]});a==200&&(this.academicYears=t.academicYears,this.studyPrograms=t.studyPrograms,this.academicPeriods=t.academicPeriods)}render(){return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0"},this.meta.title),e("div",{className:"page-title-right"},e("ol",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item active"},"Perkuliahan"),e("li",{className:"breadcrumb-item active"},this.meta.title)))))),e("div",{className:"card dt-filter-card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-sm-3"},e("div",{className:"mb-3"},e("label",{htmlFor:""},"Angkatan"),e("select",{name:"academic_year_id",className:"form-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),this.academicYears.map(a=>e("option",{value:a.id},a.name))))),e("div",{className:"col-sm-3"},e("div",{className:"mb-3"},e("label",{htmlFor:""},"Periode Akademik"),e("select",{name:"academic_period_id",className:"form-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),this.academicPeriods.map(a=>e("option",{value:a.id},a.name))))),e("div",{className:"col-sm-3"},e("div",{className:"mb-3"},e("label",{htmlFor:""},"Jenis TA"),e("select",{name:"thesis_type",className:"form-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),e("option",{value:"1"},"Skripsi / Tugas Akhir"),e("option",{value:"2"},"Tesis"),e("option",{value:"3"},"Disertasi")))),e("div",{className:"col-sm-3"},e("div",{className:"mb-3"},e("label",{htmlFor:""},"Program Studi"),e("select",{name:"study_program_id",className:"form-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),this.studyPrograms.map(a=>e("option",{value:a.id},a.education_level.code," - ",a.name)))))))),e("div",{className:"card"},e("div",{className:"card-header border-0"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(w,{data:{redirect:!0,target:"apps.lecture.theses.create",filter:!0,refresh:!0,permission:"create-theses",title:"Tambah Tugas Akhir"}}),e("div",{className:"dropdown d-inline"},e("button",{className:"btn btn-warning dropdown-toggle","data-bs-toggle":"dropdown"},e("i",{className:"bx bx-cog"})," Aksi"),e("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1","data-popper-placement":"bottom-start",style:"position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px);"},e("a",{class:"dropdown-item",href:"javascript: void(0)",onClick:()=>this.setImport("import")},"Import Tugas Akhir"))))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))),e(c,{title:P,onsubmit:this.submitSet,ondownload:this.downloadSet}))}componentDidMount(){this.table=x("#dataTable",k(this.updateData,this.deleteData))}async updateData(a){this.$router.pushName("apps.lecture.theses.edit",{id:a})}async submitSet(a){a.preventDefault();let t;t=await h("lecture/theses/excel",a.target),console.log(t),t.status==200&&(this.$router.reload(),this.table.ajax.reload())}async downloadSet(a){a.preventDefault();const t=`${y}/api/v1/theses/download-template-import-data`,s=window.open(`${t}`,"_blank","resizable=yes,scrollbars=yes,status=yes");s&&(s.opener=null,s.location=`${t}`,s.addEventListener("beforeunload",function(){s.location=`${t}`}),setTimeout(function(){s.close()},4e3))}async deleteData(a){const{isConfirmed:t}=await this.showConfirm();t&&(await f(`${D}/${a}`)).status==200&&this.table.ajax.reload()}setImport(){T("Import"),v(),N(),$("#form-import").modal("show")}}r(A,"defaultProps",{..._(["getData"]),table:null,academicYears:[],studyPrograms:[],academicPeriods:[]});export{A as default};
