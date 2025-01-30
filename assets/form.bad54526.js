var _=Object.defineProperty;var P=(s,t,a)=>t in s?_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;var v=(s,t,a)=>(P(s,typeof t!="symbol"?t+"":t,a),a);import{C as S,c as e,r as D,h as T,g as n,p as x,u as l}from"./index.d57021e8.js";import{m as C}from"./map-actions.609b7ae0.js";const r="lecture/judicial-participants",[w,m]=l(""),[I,d]=l(""),[k,u]=l(""),[J,p]=l(""),[K,y]=l(""),[Y,h]=l(""),[R,j]=l(""),[q,N]=l(""),[M,b]=l(""),[f,g]=l("");let U=0;class z extends S{render(){var t,a,c,o;return e("div",{className:"intro-y"},e("div",{className:"container"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0 title"},(a=(t=this.meta)==null?void 0:t.title)!=null?a:"Untitled Page"),e("div",{className:"page-title-right"},e("ol",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item"},"Perkuliahan"),e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.lecture.course"},"Mata Kuliah")),e("li",{className:"breadcrumb-item active title"},(o=(c=this.meta)==null?void 0:c.title)!=null?o:"Untitled Page")))))),e("div",{className:"card intro-y"},e("div",{className:"card-body"},e("form",{enctype:"multipart/form-data",onsubmit:this.submit},e("h5",{className:""},"Data Yudisium"),e("hr",null),e("div",{className:"mb-3"},e("div",{className:"row"},e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{htmlFor:"student",className:"from-label"},"Mahasiswa  ",e("span",{className:"text-danger"},"*")),e("select",{name:"student_id",id:"student",className:"form-control js-choices",onChange:i=>g(i.target.value)},e("option",{value:f==null?"":K},f==null?"Pilih Mahasiswa":f))),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"name",className:"form-label"},"Nama MK ",e("i",{className:"text-danger"},"*")," "),e("input",{type:"text",id:"name",className:"form-control ",name:"name",placeholder:"Nama MK",autocomplete:"off"})),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"judicial-period",className:"form-label"},"Periode Yudisium ",e("i",{className:"text-danger"},"*")," "),e("select",{name:"judicial_period_id",id:"academic-period",className:"form-control js-choices",onChange:i=>u(i.target.value)},e("option",{value:""},"Pilih Periode Yudisium"),this.judicialPeriods.map(i=>e("option",{value:i.id,selected:k==i.id},i.name)))),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"transcript-date",className:"form-label"},"Tgl. Transkrip ",e("i",{className:"text-danger"},"*")," "),e("input",{type:"text",id:"transcript-date",className:"form-control flatpickr-date",name:"transcript_date",placeholder:"Tanggal Transkrip",autocomplete:"off",onChange:i=>N(i.target.value),value:q})),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"decree-date",className:"form-label"},"Tgl. SK Yudisium ",e("i",{className:"text-danger"},"*")," "),e("input",{type:"text",id:"decree-date",className:"form-control flatpickr-date",name:"decree_date",placeholder:"Tanggal SK Yudisium",autocomplete:"off",onChange:i=>d(i.target.value),value:I})),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"transcript-number",className:"form-label"},"No. Transkrip ",e("i",{className:"text-danger"},"*")," "),e("input",{type:"text",id:"transcript-number",className:"form-control ",name:"transcript_number",placeholder:"No. Transkrips",autocomplete:"off",value:R})),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"decree-number",className:"form-label"},"No. SK Yudisium ",e("i",{className:"text-danger"},"*")," "),e("input",{type:"text",id:"decree-number",className:"form-control ",name:"decree_number",placeholder:"No. SK Yudisium",autocomplete:"off",onChange:i=>m(i.target.value),value:w})),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"certificate-number",className:"form-label"},"No. Ijazah Nasional (PIN) ",e("i",{className:"text-danger"},"*")," "),e("input",{type:"text",id:"certificate-number",className:"form-control ",name:"certificate_number",placeholder:"No.Ijazah Nasional",onChange:i=>h(i.target.value),value:Y,autocomplete:"off"})),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"certificate-date",className:"form-label"},"Tgl. Ijazah ",e("i",{className:"text-danger"},"*")," "),e("input",{type:"text",id:"certificate-date",className:"form-control flatpickr-date",name:"certificate_date",placeholder:"Tanggal Ijazah",autocomplete:"off",onChange:i=>b(i.target.value),value:M})),e("div",{className:"col-sm-6 col-12 mb-3"},e("label",{for:"nirl",className:"form-label"},"NIRL",e("i",{className:"text-danger"},"*")," "),e("input",{type:"text",id:"nirl",className:"form-control ",name:"nirl",placeholder:"NIRL",autocomplete:"off",onChange:i=>p(i.target.value),value:J})))),e("h5",{className:"mb-3"},"Syarat Yudisium"),e("hr",null),e("table",{className:"table table-bordered"},e("thead",null,e("tr",null,e("th",null,"No."),e("th",null,"Syarat Yudisium"),e("th",null,"File Upload"),e("th",null,"Keterangan"),e("th",null,"Tgl. Validasi"),e("th",null))),e("tbody",null,this.judicialRequirements.map(i=>e("tr",null,e("td",null,++U),e("td",null,i.name,e("input",{type:"hidden",name:"judicial_requirement_id[]",value:i.id})),e("td",null,i.is_upload?e("input",{type:"file",name:`attachment-${i.id}`,id:""}):e("span",{className:"badge bg-primary"},"Tidak Perlu Upload")),e("td",null,e("textarea",{name:`description-${i.id}`,id:"",cols:"30",rows:"2",className:"form-control",value:i.description})),e("td",null,"-"),e("td",null,e("input",{type:"checkbox",name:"",id:"",checked:this.isToggledAll})))))),e("div",{className:"card-footer text-end"},e("router-name",{className:"btn btn-dark mx-1",name:"apps.lecture.course"},"Kembali"),e("button",{className:"btn btn-primary",type:"submit","data-form-loading":!0},e("i",{className:"bx bx-save"})," Simpan")))))))}async componentWillMount(){D();const{status:t,data:a}=await this.getData({model:["getJudicialPeriods"]});t==200&&(p(""),y(""),h(""),j(""),N(""),u(""),b(""),m(""),d(""),g(null),this.judicialPeriods=a.getJudicialPeriods.original.judicialPeriods),await this.fetchData(),this.$router.params.id&&this.gData()}componentDidMount(){this.$router.params.id||T();const t=$(".js-choices");t[0].choices.passedElement.element.addEventListener("search",async a=>{var c;if(t[0].choices.clearChoices(),a.detail.value.length>2){const{data:o}=await n(`${r}/search-student?name=${encodeURI(a.detail.value)}`,{hideSuccessNotification:!0,hideLoadingBar:!0});(c=o.students)!=null&&c.length&&(t[0].choices.clearChoices(),t[0].choices.setChoices(o.students.map(i=>({value:i.id,label:i.nim+" - "+i.name}))))}})}async fetchData(){var a;const t=await n(`${r}/get-requirements`,{hideSuccessNotification:!0});this.judicialRequirements=((a=t==null?void 0:t.data)==null?void 0:a.judicial_requirement)||[]}async gData(){const{data:t}=await n(`${r}/${this.$router.params.id}`,{hideSuccessNotification:!0});let a=t.judicial_participant;this.setState(()=>{p(a.nirl),h(a.certificate_number),j(a.transcript_number),N(a.transcript_date),u(a.judicial_period.id),b(a.certificate_date),m(a.decree_number),d(a.decree_date),g(a.student.nim+" - "+a.student.name),y(a.student.id),this.judicialRequirements=t.JudicialParticipantRequirement})}async submit(t){t.preventDefault();let a;new FormData(t.target),this.$router.params.id?a=await x(`${r}/${this.$router.params.id}/update`,t.target):a=await x(`${r}`,t.target),a.status==200&&this.$router.pushState("/apps/lecture/judicial")}async getRoles(){const{data:t}=await n(`${r}/get-roles`,{hideSuccessNotification:!0});this.setState(()=>{this.roles=t.data})}}v(z,"defaultProps",{...C(["getStudyPrograms","getData"]),judicialRequirements:[],isDisabled:!1,isToggledAll:!1,judicialPeriods:[]});export{z as default};
