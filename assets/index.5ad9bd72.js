var n=Object.defineProperty;var u=(i,t,s)=>t in i?n(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var l=(i,t,s)=>(u(i,typeof t!="symbol"?t+"":t,s),s);import{C as p,c as a,B as h}from"./index.d57021e8.js";import{m as _}from"./map-actions.609b7ae0.js";class b extends p{async componentWillMount(){const t={model:["studentStatuses","academicYears","studyPrograms","academicPeriods"]},{status:s,data:e}=await this.getData(t);s==200&&(this.academicPeriods=e.academicPeriods,this.AcademicYear=e.academicYears,this.studyPrograms=e.studyPrograms,this.studentStatuses=e.studentStatuses)}render(){var t,s;return a("div",{class:"intro-y"},a("div",{className:"row"},a("div",{className:"col-12"},a("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},a("h4",{class:"mb-sm-0"},(t=this.meta.title)!=null?t:"Untitled Page"),a("div",{className:"page-title-right"},a("div",{className:"breadcrumb"},a("li",{className:"breadcrumb-item"},a("router-link",{link:"apps.dashboard"},"Dashboard")),a("li",{className:"breadcrumb-item"},"Laporan"),a("li",{className:"breadcrumb-item"},"Administrasi"),a("li",{className:"breadcrumb-item active"},(s=this.meta.title)!=null?s:"Untitled Page")))))),a("div",{className:"card col-5",style:{marginLeft:440}},a("form",{onSubmit:this.handleSubmit},a("div",{className:"card-body "},a("div",{className:"mb-3"},a("label",{htmlFor:""},"Periode Akademik",a("span",{className:"text-danger"},"*")),a("select",{name:"academic_period_id",id:"academic_period_id",className:"from-control js-choices dt-filter-input",required:!0},a("option",{value:""},"Pilih"),this.academicPeriods.map(e=>a("option",{value:e.id},e.name)))),a("div",{className:"mb-3"},a("label",{htmlFor:""},"Program Studi",a("span",{className:"text-danger"},"*")),a("select",{name:"study_program_id",id:"study_program_id",className:"from-control js-choices dt-filter-input",required:!0},a("option",{value:""},"Pilih"),this.studyPrograms.map(e=>a("option",{value:e.id},e.education_level.code," - ",e.name)))),a("div",{className:"mb-3"},a("label",{htmlFor:""},"Angkatan",a("span",{className:"text-danger"},"*")),a("select",{name:"academic_year_id",id:"academic_year_id",className:"from-control js-choices dt-filter-input",required:!0},a("option",{value:""},"Pilih"),this.AcademicYear.map(e=>a("option",{value:e.id},e.name)))),a("div",{className:"mb-3"},a("label",{htmlFor:""},"Status Semester",a("span",{className:"text-danger"},"*")),a("select",{name:"student_status_id",id:"student_status_id",className:"from-control js-choices dt-filter-input",required:!0},a("option",{value:""},"Pilih"),a("option",{value:"NA"},"NA"),this.studentStatuses.map(e=>{if(e.id!=="L")return a("option",{value:e.id},e.name)}))),a("div",{className:"mb-3"},a("label",{htmlFor:""},"Jumlah Mahasisawa",a("span",{className:"text-danger"},"*")),a("select",{name:"student_total",id:"student_total",className:"from-control js-choices dt-filter-input",required:!0},a("option",{value:""},"Pilih"),a("option",{value:"5"},"5 Mahasiswa"),a("option",{value:"10"},"10 Mahasiswa"),a("option",{value:"15"},"15 Mahasiswa"),a("option",{value:"20"},"20 Mahasiswa"),a("option",{value:"25"},"25 Mahasiswa"),a("option",{value:"30"},"30 Mahasiswa"),a("option",{value:"35"},"35 Mahasiswa"),a("option",{value:"40"},"40 Mahasiswa"),a("option",{value:"45"},"45 Mahasiswa"),a("option",{value:"50"},"50 Mahasiswa")))),a("div",{className:"card-footer text-end"},a("button",{className:"btn btn-primary",type:"submit","data-form-loading":!0},"Cetak")))))}handleSubmit(t){t.preventDefault();let s=$('select[name="student_total"]').val(),e=$('select[name="academic_year_id"]').val(),r=$('select[name="study_program_id"]').val(),m=$('select[name="student_status_id"]').val(),c=$('select[name="academic_period_id"]').val();const o=`${h}/api/v1/report/student/student-semester-status/print?student_total=${s}&academic_year_id=${e}&student_status_id=${m}&academic_period_id=${c}&study_program_id=${r}`,d=window.open(`${o}`,"_blank","resizable=yes,scrollbars=yes,status=yes");d&&(d.opener=null,d.location=`${o}`,d.addEventListener("beforeunload",function(){d.location=`${o}`}))}}l(b,"defaultProps",{..._(["getAcademicYears","getMajors","getAcademicPeriods","getData"]),table:null,AcademicYear:[],studentStatuses:[],studyPrograms:[],academicPeriods:[]});export{b as default};
