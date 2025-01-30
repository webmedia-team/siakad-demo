var n=Object.defineProperty;var m=(i,a,t)=>a in i?n(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var c=(i,a,t)=>(m(i,typeof a!="symbol"?a+"":a,t),t);import{A as p,C as u,c as e,p as r,S as l}from"./index.d57021e8.js";import{i as h}from"./datatable.4b22066f.js";import{B as f}from"./button.d257158a.js";import{m as v}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const b=()=>({url:`${p}/feeder/student/student-activity`,table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,id:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender(i,a,t,s){return`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${t.id}">
                    </div>`}},{title:"No",data:"id",name:"id",searchable:!1,orderable:!1,width:"5%",mRender(i,a,t,s){return s.row+s.settings._iDisplayStart+1}},{title:"Program Studi",data:"study_program",name:"study_program_id",mRender:i=>{var a,t,s;return`${(t=(a=i==null?void 0:i.education_level)==null?void 0:a.code)!=null?t:""} - ${(s=i==null?void 0:i.name)!=null?s:""}`}},{title:"Semester",data:"academic_period.name",name:"academic_period_id"},{title:"Jenis",data:"student_activity_category.name",name:"student_activity_category_id"},{title:"Judul",data:"name",name:"name"},{title:"Nomor SK",data:"decree_number",name:"decree_number"},{title:"Tanggal SK",data:"decree_date",name:"decree_date"},{title:"Status",data:"feeder_id",name:"feeder_id",mRender:(i,a,t,s)=>{let d=`<span class="badge p-1 badge-soft-${i!=null?"success":"warning"} text-uppercase">
                        <i class="${i!=null?"ri-checkbox-circle-fill":"ri-alert-fill"} me-1 align-middle fs-16"></i>
                        ${i!=null?"Sudah Sync":"Belum Sync"}
                    </span>`;return t.feeder_description!=null&&(d+=`<br>
                            <span class="badge p-1 badge-soft-danger mt-2">
                                <i class="ri-error-warning-fill me-1 align-middle fs-16"></i>
                                ${t.feeder_description}
                            </span>
                        `),d}}],callback:()=>{},options:{}}),o="feeder/student/sync";class y extends u{render(){return e("div",{className:"intro-y"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0"},this.meta.title)),e("div",{className:"card dt-filter-card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-3"},e("label",{htmlFor:""},"Program Studi"),e("select",{name:"study_program_id",id:"study-program-id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih Prodi"),this.studyPrograms.map(a=>e("option",{value:a.id},a.education_level.code," - ",a.name)))),e("div",{className:"col-3"},e("label",{htmlFor:""},"Periode Akademik"),e("select",{name:"academic_period_id",id:"academic-period-id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih Tahun Akademik"),this.academicPeriods.map(a=>e("option",{value:a.id},a.name)))),e("div",{className:"col-3"},e("label",{htmlFor:""},"Jenis Aktivitas"),e("select",{name:"student_activity_category_id",id:"student-activity-category-id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih Jenis Aktivitas"),this.activityTypes.map(a=>e("option",{value:a.id},a.name)))),e("div",{className:"col-3"},e("label",{htmlFor:""},"Sync"),e("select",{name:"sync",id:"sync",className:"from-control js-choices dt-filter-input"},e("option",{value:"all",selected:!0},"Semua"),e("option",{value:"0"},"Sudah Sync"),e("option",{value:"1"},"Belum Sync")))))),e("div",{className:"card shadow-sm mb-3"},e("div",{className:"card-header border-0"},e("div",{className:"row"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(f,{data:{refresh:!0,create:!1,filter:!0}}),e("div",{className:"dropdown d-inline"},e("button",{className:"btn btn-primary dropdown-toggle","data-bs-toggle":"dropdown"},e("i",{className:"bx bx-sync"})," Sync Feeder"),e("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1","data-popper-placement":"bottom-start",style:"position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px);"},e("a",{class:"dropdown-item",href:"javascript:void(0)",onClick:this.downloadData},e("i",{className:"bx bx-download"})," Tarik Data Feeder"),e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.uploadData},e("i",{className:"bx bx-upload"})," Upload Data"),e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.updateData},e("i",{className:"bx bx-refresh"})," Update Data"),e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.deleteData},e("i",{className:"bx bx-trash"})," Delete Data")))))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=h("#dataTable",b())}async componentWillMount(){const{data:a}=await this.getData({model:["studyPrograms","getStudentActivityCategories"]}),t=await this.getAcademicPeriods("is_active=true");this.studyPrograms=a.studyPrograms,this.academicPeriods=t.data.academicPeriods,this.activityTypes=a.getStudentActivityCategories.original.studentActivityCategories}async downloadData(){let a,t=new FormData;t.append("act","getStudentActivity"),a=await r(`${o}`,t,{},!1),a.status==200&&(this.$router.reload(),this.table.ajax.reload)}async uploadData(){let a,t=new FormData;var s=window.checkedDataIds;if(t.append("act","uploadStudentActivity"),$(".dt-checkbox:checked").length<1)t.append("study_program_id",$("#study-program-id").val()),t.append("academic_period_id",$("#academic-period-id").val()),t.append("student_activity_category_id",$("#student-activity-category-id").val()),t.append("sync",$("#sync").val()),a=await r(`${o}`,t,{},!1);else{for(const d of s)t.append("studentActivity[]",d);a=await r(`${o}`,t,{},!1)}a.status==200&&(this.$router.reload(),this.table.ajax.reload)}async updateData(){var a=window.checkedDataIds;if($(".dt-checkbox:checked").length<1)l.fire({title:"Ubah Feeder gagal!",text:"Anda harus memilih Aktivitas",icon:"error",confirmButtonColor:"#d1403b"});else{let t,s=new FormData;s.append("act","updateStudentActivity");for(const d of a)s.append("studentActivity[]",d);t=await r(`${o}`,s,{},!1),t.status==200&&(this.$router.reload(),this.table.ajax.reload)}}async deleteData(){var a=window.checkedDataIds;if($(".dt-checkbox:checked").length<1)l.fire({title:"Delete Feeder gagal!",text:"Anda harus memilih Aktivitas",icon:"error",confirmButtonColor:"#d1403b"});else{let t,s=new FormData;s.append("act","deleteStudentActivity");for(const d of a)s.append("studentActivity[]",d);t=await r(`${o}`,s,{},!1),t.status==200&&(this.$router.reload(),this.table.ajax.reload)}}}c(y,"defaultProps",{...v(["getStudyPrograms","getData","getAcademicPeriods"]),table:null,studyPrograms:[],academicPeriods:[],activityTypes:[]});export{y as default};
