var P=Object.defineProperty;var w=(l,s,t)=>s in l?P(l,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[s]=t;var k=(l,s,t)=>(w(l,typeof s!="symbol"?s+"":s,t),t);import{C as T,c as e,p as x,g as j}from"./index.d57021e8.js";import{m as A}from"./map-actions.609b7ae0.js";const n="lecture/theses";class S extends T{render(){var s,t,o,r,c,d,m,p,u,h,N,b,f,g,_,v,y;return e("div",{className:"intro-y"},e("div",{className:"container"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0 title"},(t=(s=this.meta)==null?void 0:s.title)!=null?t:"Untitled Page"),e("div",{className:"page-title-right"},e("ol",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item"},"Perkuliahan"),e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.lecture.theses"},"Daftar Tugas Akhir")),e("li",{className:"breadcrumb-item active title"},(r=(o=this.meta)==null?void 0:o.title)!=null?r:"Untitled Page")))))),e("form",{onsubmit:this.submit},e("div",{className:"card intro-y"},e("div",{className:"card-header"},e("h5",{className:"card-title"},"Informasi Tugas Akhir")),e("div",{className:"card-body"},e("div",{className:"row mt-3"},e("div",{className:"col-md-6"},e("div",{className:"form-group mb-3"},e("label",{for:"student",className:"form-label"},"Mahasiswa ",e("span",{className:"text-danger"},"*")),e("select",{name:"student",id:"student",className:"form-control js-choices"},e("option",{value:""},"Pilih Mahasiswa"),this.students.map(a=>{var i;return e("option",{value:a.id,selected:Object.keys(this.data).length>0&&((i=this.data)==null?void 0:i.student_id)==a.id},a.nim," - ",a.name)})))),e("div",{className:"col-md-6"},e("div",{className:"form-group mb-3"},e("div",{className:"form-group mb-3"},e("label",{for:"academic_period",className:"form-label"},"Periode Akademik ",e("span",{className:"text-danger"},"*")),e("select",{name:"academic_period",id:"academic_period",className:"form-control js-choices"},e("option",{value:""},"Pilih Periode Akademik"),this.academicPeriods.map(a=>{var i;return e("option",{value:a.id,selected:Object.keys(this.data).length>0&&((i=this.data)==null?void 0:i.academic_period_id)==a.id},a.name)})))))),e("div",{className:"row"},e("div",{className:"col-md-6"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"topic",className:"form-label"},"Topik ",e("span",{className:"text-danger"},"*")),e("textarea",{name:"topic",id:"topic",className:"form-control",placeholder:"Topik",cols:"30",rows:"2"},(c=this.data)==null?void 0:c.topic))),e("div",{className:"col-md-6"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"topic_en",className:"form-label"},"Topik (EN)"),e("textarea",{name:"topic_en",id:"topic_en",className:"form-control",placeholder:"Topik (EN)",cols:"30",rows:"2"},(d=this.data)==null?void 0:d.topic_en)))),e("div",{className:"row"},e("div",{className:"col-md-6"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"title",className:"form-label"},"Judul ",e("span",{className:"text-danger"},"*")),e("textarea",{name:"title",id:"title",className:"form-control",placeholder:"Judul",cols:"30",rows:"2"},(m=this.data)==null?void 0:m.title))),e("div",{className:"col-md-6"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"title_en",className:"form-label"},"Judul (EN)"),e("textarea",{name:"title_en",id:"title_en",className:"form-control",placeholder:"Judul (EN)",cols:"30",rows:"2"},(p=this.data)==null?void 0:p.title_en)))),e("div",{className:"row"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"abstract",className:"form-label"},"Abstrak ",e("span",{className:"text-danger"},"*")),e("textarea",{name:"abstract",id:"abstract",className:"form-control",placeholder:"Abstrak",cols:"30",rows:"4"},(u=this.data)==null?void 0:u.abstract))),e("div",{className:"row"},e("div",{className:"col-md-4"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"decree_date",className:"form-label"},"Tanggal SK ",e("span",{className:"text-danger"},"*")),e("input",{type:"text",value:(h=this.data)==null?void 0:h.decree_date,className:"form-control flatpickr-date",placeholder:"Tanggal SK",name:"decree_date",id:"decree_date",autoComplete:"off"}))),e("div",{className:"col-md-4"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"decree_number",className:"form-label"},"Nomor SK ",e("span",{className:"text-danger"},"*")),e("input",{type:"text",value:(N=this.data)==null?void 0:N.decree_number,className:"form-control",name:"decree_number",placeholder:"Nomor SK",id:"drecree_number",autoComplete:"off"}))),e("div",{className:"col-md-4"},e("div",{className:"form-group mb-3"},e("label",{for:"thesis_type",className:"form-label"},"Jenis Tugas Akhir ",e("span",{className:"text-danger"},"*")),e("select",{name:"thesis_type",id:"thesis_type",className:"form-control js-choices"},e("option",{value:""},"Pilih Jenis TA"),e("option",{value:"1",selected:Object.keys(this.data).length>0&&((b=this.data)==null?void 0:b.thesis_type)=="1"},"Skripsi / Tugas Akhir"),e("option",{value:"2",selected:Object.keys(this.data).length>0&&((f=this.data)==null?void 0:f.thesis_type)=="2"},"Tesis"),e("option",{value:"3",selected:Object.keys(this.data).length>0&&((g=this.data)==null?void 0:g.thesis_type)=="3"},"Disertasi"))))),e("div",{className:"row"},e("div",{className:"col-md-4"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"filing_date",className:"form-label"},"Tanggal Pengajuan ",e("span",{className:"text-danger"},"*")),e("input",{type:"text",value:(_=this.data)==null?void 0:_.filing_date,className:"form-control flatpickr-date",placeholder:"Tanggal Pengajuan",name:"filing_date",id:"filing_date",autoComplete:"off"}))),e("div",{className:"col-md-4"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"start_date",className:"form-label"},"Tanggal Mulai ",e("span",{className:"text-danger"},"*")),e("input",{type:"text",value:(v=this.data)==null?void 0:v.start_date,className:"form-control flatpickr-date",placeholder:"Tanggal Mulai",name:"start_date",id:"start_date",autoComplete:"off"}))),e("div",{className:"col-md-4"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"finish_date",value:(y=this.data)==null?void 0:y.finish_date,className:"form-label"},"Tanggal Selesai ",e("span",{className:"text-danger"},"*")),e("input",{type:"text",className:"form-control flatpickr-date",placeholder:"Tanggal Selesai",name:"finish_date",id:"finish_date",autoComplete:"off"}))))),e("div",{className:"card-header"},e("h5",{className:"card-title"},"Dosen Pembimbing")),e("div",{className:"card-body"},e("div",{className:"row mt-3"},e("div",{className:"col-md-6"},e("div",{className:"form-group mb-3"},e("label",{for:"employee_1",className:"form-label"},"Dosen Pembimbing 1 ",e("span",{className:"text-danger"},"*")),e("select",{name:"employee_1",id:"employee_1",className:"form-control js-choices"},e("option",{value:""},"Pilih Dosen Pembimbing 1"),this.employees.map(a=>e("option",{value:a.id,selected:Object.keys(this.employee1).length>0&&this.employee1==a.id},a.front_title==null?"":a.front_title," ",a.name,a.back_title==null?"":", "+a.back_title))))),e("div",{className:"col-md-6"},e("div",{className:"form-group mb-3"},e("div",{className:"form-group mb-3"},e("label",{for:"employee_2",className:"form-label"},"Dosen Pembimbing 2 ",e("span",{className:"text-danger"},"*")),e("select",{name:"employee_2",id:"employee_2",className:"form-control js-choices"},e("option",{value:""},"Pilih Dosen Pembimbing 2"),this.employees.map(a=>e("option",{value:a.id,selected:Object.keys(this.employee2).length>0&&this.employee2==a.id},a.front_title==null?"":a.front_title," ",a.name,a.back_title==null?"":", "+a.back_title)))))))),e("div",{className:"card-footer text-end"},e("router-name",{className:"btn btn-dark mx-1",name:"apps.lecture.theses"},"Kembali"),e("button",{className:"btn btn-primary",type:"submit","data-form-loading":!0},e("i",{className:"bx bx-save"})," Simpan"))))))}async submit(s){s.preventDefault();let t;this.$router.params.id?t=await x(`${n}/${this.$router.params.id}`,s.target):t=await x(`${n}`,s.target),t.status==200&&this.$router.pushName("apps.lecture.theses")}async componentWillMount(){const s=this.getStudents("student_status_id=A"),t=this.getAcademicPeriods("is_active=true"),o=this.getEmployees(),[r,c,d]=await Promise.all([s,t,o]);if(this.academicPeriods=c.data.academicPeriods,this.students=r.data.students,this.employees=d.data.employees,this.$router.params.id){const{data:m}=await j(`${n}/${this.$router.params.id}`,{hideSuccessNotification:!0});this.data=m.data.thesis,this.employee1=m.data.employee_1,this.employee2=m.data.employee_2}}}k(S,"defaultProps",{...A(["getStudents","getAcademicPeriods","getEmployees"]),data:[],academicPeriods:[],students:[],employees:[],employee1:[],employee2:[]});export{S as default};
