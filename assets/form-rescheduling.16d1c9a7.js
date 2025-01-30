var c=Object.defineProperty;var d=(i,s,t)=>s in i?c(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var l=(i,s,t)=>(d(i,typeof s!="symbol"?s+"":s,t),t);import{C as p,c as e,p as h,u as a}from"./index.d57021e8.js";/* empty css                 */import{m as u}from"./map-actions.609b7ae0.js";const[g,y]=a(""),[b,f]=a(""),[v,N]=a(""),[_,T]=a(""),[S,P]=a(""),[m,D]=a(""),[x,L]=a(""),[k,w]=a("");class M extends p{constructor(){super(...arguments);l(this,"base_url","lecturer/dashboard")}render(){return e("div",{className:"intro-y"},e("div",{className:"card shadow-sm mb-3"},e("form",{action:"",method:"POST",onSubmit:this.submit},e("div",{className:"card-header"},e("h5",{className:"card-title"},"Jadwalkan Ulang")),e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-sm-6"},e("input",{type:"hidden",name:"schedule_id",value:this.query("sch_id")}),e("div",{className:"form-group mb-3"},e("label",{htmlFor:"employee-id"},"Dosen Pengajar ",e("span",{className:"text-danger"},"*")," "),e("select",{name:"employee_id",id:"employee-id",className:"form-control js-choices"},e("option",{value:""},"Pilih Dosen Pengajar"),this.teachingLecturers.map(t=>e("option",{selected:t.employee.id==g,value:t.employee.id},`${t.employee.front_title?`${t.employee.front_title}.`:""}${t.employee.name}${t.employee.back_title?`, ${t.employee.back_title}`:""}`)))),e("div",{className:"form-group mb-3"},e("label",{htmlFor:"date"},"Tanggal Jadwal ",e("span",{className:"text-danger"},"*")),e("input",{name:"date",type:"date",className:"form-control flatpickr-date",id:"date",placeholder:"Tanggal Jadwal",value:v})),e("div",{className:"form-group mb-3"},e("label",{htmlFor:"time-start"},"Waktu Mulai ",e("span",{className:"text-danger"},"*")),e("select",{name:"time_start",id:"time-start",className:"form-control js-choices"},e("option",{value:""},"Pilih Waktu Mulai"),this.timeSlots.map(t=>e("option",{value:t.time,selected:t.time==_},t.time)))),e("div",{className:"form-group mb-3"},e("label",{htmlFor:"time-end"},"Waktu Selesai ",e("span",{className:"text-danger"},"*")),e("select",{name:"time_end",id:"time-end",className:"form-control js-choices"},e("option",{value:""},"Pilih Waktu Selesai"),this.timeSlots.map(t=>e("option",{value:t.time,selected:t.time==S},t.time))))),e("div",{className:"col-sm-6"},e("div",{className:"form-group mb-3"},e("label",{htmlFor:"meeting-type-id"},"Jenis Pertemuan ",e("span",{className:"text-danger"},"*")),e("select",{name:"meeting_type_id",id:"meeting-type-id",className:"form-control js-choices",value:b},e("option",{value:""},"Pilih Jenis Pertemuan"),this.meetingTypes.map(t=>e("option",{value:t.hashid},t.name)))),e("div",{className:"form-group mb-3"},e("label",{htmlFor:"learning-method"},"Metode Pembelajaran ",e("span",{className:"text-danger"},"*")),e("select",{name:"learning_method",id:"learning-method",className:"form-control js-choices"},e("option",{value:"online",selected:m=="online"},"Online"),e("option",{value:"offline",selected:m=="offline"},"Offline"),e("option",{value:"hybrid",selected:m=="hybrid"},"Hybrid"))),e("div",{className:"form-group mb-3"},e("label",{htmlFor:"room-id"},"Ruang Kuliah"),e("select",{name:"room_id",id:"room-id",className:"form-control js-choices"},e("option",{value:""},"Pilih Ruang Kuliah"),this.rooms.map(t=>e("option",{selected:t.hashid==x,value:t.hashid},t.name," ",t.location?` - ${t.location}`:"")))),e("div",{className:"form-group mb-3"},e("label",{htmlFor:"location"},"Lokasi"),e("input",{name:"location",type:"text",className:"form-control",id:"location",placeholder:"Lokasi",value:k}))))),e("div",{className:"card-footer text-end mb-3"},e("button",{type:"submit",className:"btn btn-primary"},e("i",{class:"las la-save me-2"})," Simpan")))))}async componentWillMount(){this.id=this.$router.params.classScheduleId,console.log(this.query("sch_id")),this.id?await this.fetchClassScheduleData():(y(""),N(""),T(""),P(""),f(""),L(""),w("")),await this.fetchTeachingLecturer()}async fetchTeachingLecturer(){var o,n,r;const{data:t}=await this.getData({model:["teachingLecturers","getMeetingTypes","getRooms","getTimeSlots"],where:[{college_class_id:this.$router.params.id}]});this.meetingTypes=(n=(o=t==null?void 0:t.getMeetingTypes)==null?void 0:o.original)==null?void 0:n.meetingTypes,this.teachingLecturers=t.teachingLecturers,this.rooms=t.getRooms.original.rooms,this.timeSlots=(r=t==null?void 0:t.getTimeSlots)==null?void 0:r.original.timeSlots}async submit(t){t.preventDefault();let o;o=await h(`${this.base_url}/class_rescheduling`,t.target),o.status==200&&this.$router.pushState("/apps/lecturer/dashboard")}}l(M,"defaultProps",{...u(["getData"]),onsubmit:null,title:"Untitled Modal",teachingLecturers:[],meetingTypes:[],timeSlots:[],academicPeriods:[],rooms:[],studyProgramId:"",id:null});export{M as default};
