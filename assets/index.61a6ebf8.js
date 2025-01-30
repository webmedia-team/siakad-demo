var c=Object.defineProperty;var n=(i,a,t)=>a in i?c(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var o=(i,a,t)=>(n(i,typeof a!="symbol"?a+"":a,t),t);import{A as m,C as p,c as e,p as d,S as u}from"./index.d57021e8.js";import{i as y}from"./datatable.4b22066f.js";import{B as v}from"./button.d257158a.js";import{m as b}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const f=()=>({url:`${m}/feeder/student/student-activity-supervisor`,table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,id:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender(i,a,t,s){return`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${t.id}">
                    </div>`}},{title:"No",data:"id",name:"id",searchable:!1,orderable:!1,width:"5%",mRender(i,a,t,s){return s.row+s.settings._iDisplayStart+1}},{title:"NIDN",data:"employee.nidn",name:"employee_id"},{title:"Nama Dosen",data:"employee.name",name:"employee_id",mRender:function(i,a,t){return` ${t.employee.front_title==null?"":t.employee.front_title+". "}
                                            ${i||"-"}${t.employee.back_title==null?"":", "+t.employee.back_title}`}},{title:"Program Studi",data:"student_activity.study_program",name:"student_activity.study_program_id",mRender:i=>{var a,t,s;return`${(t=(a=i==null?void 0:i.education_level)==null?void 0:a.code)!=null?t:""} - ${(s=i==null?void 0:i.name)!=null?s:""}`}},{title:"Jenis",data:"role_type",name:"role_type",mRender:function(i,a,t){let s=null;switch(i){case"0":s="Pembimbing ke-"+t.number;break;case"1":s="Penguji ke-"+t.number;break;default:s="-";break}return s}},{title:"Kategori Kegiatan",data:"activity_category.name",name:"activity_category_id"},{title:"Nomor SK",data:"student_activity.decree_number",name:"student_activity.decree_number"},{title:"Tanggal SK",data:"student_activity.decree_date",name:"student_activity.decree_date"},{title:"Status",data:"feeder_id",name:"feeder_id",mRender:(i,a,t,s)=>{let l=`<span class="badge p-1 badge-soft-${i!=null?"success":"warning"} text-uppercase">
                        <i class="${i!=null?"ri-checkbox-circle-fill":"ri-alert-fill"} me-1 align-middle fs-16"></i>
                        ${i!=null?"Sudah Sync":"Belum Sync"}
                    </span>`;return t.feeder_description!=null&&(l+=`<br>
                            <span class="badge p-1 badge-soft-danger mt-2">
                                <i class="ri-error-warning-fill me-1 align-middle fs-16"></i>
                                ${t.feeder_description}
                            </span>
                        `),l}}],callback:()=>{},options:{}}),r="feeder/student/sync";class h extends p{render(){return e("div",{className:"intro-y"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0"},this.meta.title)),e("div",{className:"card dt-filter-card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-3"},e("label",{htmlFor:""},"Program Studi"),e("select",{name:"study_program_id",id:"study-program-id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih Prodi"),this.studyPrograms.map(a=>e("option",{value:a.id},a.education_level.code," - ",a.name)))),e("div",{className:"col-3"},e("label",{htmlFor:""},"Periode Akademik"),e("select",{name:"academic_period_id",id:"academic-period-id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih Tahun Akademik"),this.academicPeriods.map(a=>e("option",{value:a.id},a.name)))),e("div",{className:"col-2"},e("label",{htmlFor:""},"Jenis Aktivitas"),e("select",{name:"student_activity_category_id",id:"student-activity-category-id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih Jenis Aktivitas"),this.activityTypes.map(a=>e("option",{value:a.id},a.name)))),e("div",{className:"col-2"},e("label",{htmlFor:""},"Peran"),e("select",{name:"role_type",id:"role-type",className:"from-control js-choices dt-filter-input"},e("option",{value:"all",selected:!0},"Semua"),e("option",{value:"0"},"Pembimbing"),e("option",{value:"1"},"Penguji"))),e("div",{className:"col-2"},e("label",{htmlFor:""},"Sync"),e("select",{name:"sync",id:"sync",className:"from-control js-choices dt-filter-input"},e("option",{value:"all",selected:!0},"Semua"),e("option",{value:"0"},"Sudah Sync"),e("option",{value:"1"},"Belum Sync")))))),e("div",{className:"card shadow-sm mb-3"},e("div",{className:"card-header border-0"},e("div",{className:"row"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(v,{data:{refresh:!0,create:!1,filter:!0}}),e("div",{className:"dropdown d-inline"},e("button",{className:"btn btn-primary dropdown-toggle","data-bs-toggle":"dropdown"},e("i",{className:"bx bx-sync"})," Sync Feeder"),e("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1","data-popper-placement":"bottom-start",style:"position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px);"},e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.downloadData},e("i",{className:"bx bx-download"})," Tarik Data Feeder"),e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.uploadData},e("i",{className:"bx bx-upload"})," Upload Data"),e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.deleteData},e("i",{className:"bx bx-trash"})," Delete Data")))))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=y("#dataTable",f())}async componentWillMount(){const{data:a}=await this.getData({model:["studyPrograms","getStudentActivityCategories"]}),t=await this.getAcademicPeriods("is_active=true");this.studyPrograms=a.studyPrograms,this.academicPeriods=t.data.academicPeriods,this.activityTypes=a.getStudentActivityCategories.original.studentActivityCategories}async downloadData(){let a,t=new FormData;t.append("act","getStudentActivitySupervisor"),a=await d(`${r}`,t,{},!1),a.status==200&&(this.$router.reload(),this.table.ajax.reload)}async uploadData(){let a,t=new FormData;var s=window.checkedDataIds;if(t.append("act","uploadStudentActivitySupervisor"),$(".dt-checkbox:checked").length<1)t.append("study_program_id",$("#study-program-id").val()),t.append("academic_period_id",$("#academic-period-id").val()),t.append("student_activity_category_id",$("#student-activity-category-id").val()),t.append("role_type",$("#role-type").val()),t.append("sync",$("#sync").val()),a=await d(`${r}`,t,{},!1);else{for(const l of s)t.append("studentActivitySupervisor[]",l);a=await d(`${r}`,t,{},!1)}a.status==200&&(this.$router.reload(),this.table.ajax.reload)}async deleteData(){var a=window.checkedDataIds;if($(".dt-checkbox:checked").length<1)u.fire({title:"Delete Feeder gagal!",text:"Anda harus memilih Aktivitas",icon:"error",confirmButtonColor:"#d1403b"});else{let t,s=new FormData;s.append("act","deleteStudentActivitySupervisor");for(const l of a)s.append("studentActivitySupervisor[]",l);t=await d(`${r}`,s,{},!1),t.status==200&&(this.$router.reload(),this.table.ajax.reload)}}}o(h,"defaultProps",{...b(["getStudyPrograms","getData","getAcademicPeriods"]),table:null,studyPrograms:[],academicPeriods:[],activityTypes:[]});export{h as default};
