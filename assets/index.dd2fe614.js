var g=Object.defineProperty;var b=(i,e,s)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var o=(i,e,s)=>(b(i,typeof e!="symbol"?e+"":e,s),s);import{C as u,c as t,g as c,p as n,u as m}from"./index.d57021e8.js";import{m as N}from"./map-actions.609b7ae0.js";/* empty css                 */import{M as _}from"./form-generate-student.4e7d17b9.js";class h extends u{render(){return t("div",{className:"modal fade",id:"status-semester-modal",role:"dialog"},t("div",{className:"modal-dialog",role:"document"},t("div",{className:"modal-content"},t("form",{onsubmit:this.props.onsubmit},t("div",{className:"modal-header bg-light pb-2"},t("h5",{className:"modal-title"},this.props.title)),t("div",{className:"modal-body"},t("div",{className:"mb-3"},t("label",{htmlFor:"studyProgram",className:"from-label"},"Program Studi  ",t("span",{className:"text-danger"},"*")),t("select",{name:"studyProgram",id:"studyProgram",className:"form-control js-choices"},t("option",{value:""},"Pilih"),this.props.studyProgram.map(e=>t("option",{value:e.program_study},e.program_study_name))))),t("div",{className:"modal-footer"},t("button",{type:"button",className:"btn btn-light","data-bs-dismiss":"modal"},"Batal"),t("button",{type:"submit",className:"btn btn-primary","data-form-loading":!0},t("i",{className:"bx bx-save"})," Simpan"))))))}}o(h,"defaultProps",{onsubmit:null,title:"Untitled Modal",academicPeriods:[],studyProgram:[]});class p extends u{render(){return t("div",{className:"modal fade",id:"status-semester-modal-recalculate",role:"dialog"},t("div",{className:"modal-dialog",role:"document"},t("div",{className:"modal-content"},t("form",{onsubmit:this.props.onsubmit},t("div",{className:"modal-header bg-light pb-2"},t("h5",{className:"modal-title"},this.props.title)),t("div",{className:"modal-body"},t("div",{className:"mb-3"},t("label",{htmlFor:"studyProgram",className:"from-label"},"Program Studi  ",t("span",{className:"text-danger"},"*")),t("select",{name:"studyProgram",id:"studyProgram",className:"form-control js-choices"},t("option",{value:""},"Pilih"),this.props.studyProgram.map(e=>t("option",{value:e.program_study},e.program_study_name))))),t("div",{className:"modal-footer"},t("button",{type:"button",className:"btn btn-light","data-bs-dismiss":"modal"},"Batal"),t("button",{type:"submit",className:"btn btn-primary","data-form-loading":!0},t("i",{className:"bx bx-save"})," Simpan"))))))}}o(p,"defaultProps",{onsubmit:null,title:"Untitled Modal",academicPeriods:[],studyProgram:[]});m("");const[y,M]=m("Generate Status Semester"),[k,j]=m("Input Aktivitas Perkuliahan Mahasiswa"),[f,v]=m("Hitung Ulang Status Semester"),d="lecture/administration/status-semester";class x extends u{render(){var e,s;return t("div",{className:"intro-y"},t("div",{className:"row"},t("div",{className:"col-12"},t("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},t("h4",{className:"mb-sm-0"},(e=this.meta.title)!=null?e:"Untitled Page"),t("div",{className:"page-title-right"},t("div",{className:"breadcrumb"},t("li",{className:"breadcrumb-item"},t("router-link",{link:"apps.dashboard"},"Dashboard")),t("li",{className:"breadcrumb-item"},"Perkuliahan"),t("li",{className:"breadcrumb-item"},"Administrasi"),t("li",{className:"breadcrumb-item active"},(s=this.meta.title)!=null?s:"Untitled Page")))))),t(_,{onsubmit:this.generateStudentSubmit,title:k,studyProgram:this.data,academicPeriods:this.academicPeriods,studentStatus:this.studentStatus,finances:this.finances}),t("div",{className:"card"},t("div",{className:"card-header"},t("div",{className:"row"},t("div",{className:"col-12"},t("div",{className:"form-group"},t("label",{htmlFor:"academicPeriod"},"Periode Akademik"),t("select",{name:"academicPeriod",id:"academicPeriod",onChange:()=>this.filterTotalStudent(),className:"form-control js-choices"},t("option",{value:""},"Pilih"),this.academicPeriods.map(a=>t("option",{value:a.id},a.name))))))),t("div",{className:"card-body"},t("div",{className:"text-sm-end text-center"},t("button",{className:"btn btn-primary ms-2",onClick:()=>this.showModal("")},t("i",{className:"bx bx-check-square"})," Generate Status Semester"),t("button",{className:"btn btn-light ms-2",onClick:()=>this.showModalRecalculate("")},t("i",{className:"bx bx-sync"})," Hitung Ulang"),t("button",{className:"btn btn-warning ms-2",onClick:()=>this.showModalGenerateStudent("")},t("i",{className:"bx bx-check-square"})," Input AKM")),t("div",{className:"mt-3"},t("table",{className:"table align-middle table-nowarp mb-0",width:"100%"},t("thead",{className:"bg-light text-center"},t("tr",null,t("th",{rowSpan:2},"Program Studi"),t("th",{colSpan:7},"Jumlah Mahasiswa")),t("tr",null,t("th",null,"Aktif"),t("th",null,"Cuti"),t("th",null,"Drop Out/Dikeluarkan"),t("th",null,"Kampus Merdeka"),t("th",null,"Lulus"),t("th",null,"Non Aktif"),t("th",null,"Belum Memiliki AKM"))),t("tbody",{id:"body-table"},this.data.map(a=>t("tr",null,t("td",null,a.program_study_name),t("td",{className:"text-center"},t("a",{className:"text-dark",href:"javascript:void(0);",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"A")},a.total_aktif)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"C")},a.total_cuti)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"3")},a.total_do)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"M")},a.total_kampus_merdeka)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"1")},a.total_lulus)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"N")},a.total_non_aktif)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"nothing")},a.total_no_akm))))))),t(h,{onsubmit:this.generateSubmit,title:y,studyProgram:this.data}),t(p,{onsubmit:this.recalculateSubmit,title:f,studyProgram:this.data}))))}componentDidMount(){const e=$(".js-choices");e[0].choices.passedElement.element.addEventListener("search",async s=>{var a;if(e[0].choices.clearChoices(),s.detail.value.length>2){const{data:r}=await c(`${d}/single-search?name=${encodeURI(s.detail.value)}`,{hideSuccessNotification:!0,hideLoadingBar:!0});(a=r.students)!=null&&a.length&&(e[0].choices.clearChoices(),e[0].choices.setChoices(r.students.map(l=>({value:l.id,label:l.nim+" - "+l.name}))))}})}async componentWillMount(){const{data:e}=await c(`${d}`,{hideSuccessNotification:!0}),s=await this.getAcademicPeriods("is_active=true"),a=await this.getStudentStatuses("is_college=true");this.data=e.data,this.finances=e.finance,this.academicPeriods=s.data.academicPeriods,this.studentStatus=a.data.studentStatuses}showModal(e){$("#status-semester-modal").modal("show")}showModalRecalculate(e){$("#status-semester-modal-recalculate").modal("show")}async showModalGenerateStudent(e){$("#status-semester-modal-student").modal("show")}async detailAkm(e,s,a,r){this.$router.pushState(`/apps/lecture/administration/status-semester/detail-students/${s}/${a}/${r}`)}async generateSubmit(e){e.preventDefault(),this.showLoading(),(await n(`${d}/generate`,e.target)).status==200&&(this.hideLoading(),this.$router.reload())}async recalculateSubmit(e){e.preventDefault(),(await n(`${d}/recalculate`,e.target)).status==200&&this.$router.reload()}async generateStudentSubmit(e){e.preventDefault(),(await n(`${d}/generate-student`,e.target)).status==200&&this.$router.reload()}async filterTotalStudent(e){const{data:s}=await c(`${d}?academicPriod=${$("#academicPeriod").val()}`,{hideSuccessNotification:!0});this.data=s.data,$("#body-table").html(this.data.map(a=>t("tr",null,t("td",null,a.program_study_name),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"A")},a.total_aktif)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"C")},a.total_cuti)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"3")},a.total_do)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"M")},a.total_kampus_merdeka)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"1")},a.total_lulus)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"N")},a.total_non_aktif)),t("td",{className:"text-center"},t("a",{href:"javascript:void(0);",className:"text-dark",onClick:()=>this.detailAkm(`${a.program_study_name}`,`${a.program_study}`,`${a.period_id}`,"nothing")},a.total_no_akm)))))}}o(x,"defaultProps",{...N(["getData","getAcademicPeriods","getStudents","getStudentStatuses"]),studyPrograms:[],academicPeriods:[],studentStatus:[],students:[],finances:[],data:[],table:null});export{x as default};
