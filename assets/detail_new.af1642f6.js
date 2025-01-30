var n=Object.defineProperty;var u=(s,a,t)=>a in s?n(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var p=(s,a,t)=>(u(s,typeof a!="symbol"?a+"":a,t),t);import{C as h,g as v,c as e,B as b}from"./index.d57021e8.js";const y="portal/employees";class N extends h{async componentWillMount(){const{data:a}=await v(`${y}/${this.$router.params.id}`,{hideSuccessNotification:!0});this.employee=a.employee}render(){var a,t,l,i,m,r,o,d,c;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0"},(a=this.meta.title)!=null?a:"Untitled Page"),e("div",{className:"page-title-right"},e("ol",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item"},"Portal"),e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.portal.employees"},"Pegawai")),e("li",{className:"breadcrumb-item active"},(t=this.meta.title)!=null?t:"Untitled Page")))))),e("div",{className:"row"},e("div",{className:"col-lg-3 col-md-4"},e("div",{class:"card shadow-sm"},e("div",{class:"card-body p-4"},e("div",{class:"text-center"},e("div",{class:"profile-user position-relative d-inline-block mx-auto  mb-4"},e("img",{src:`${b}/storage/images/employees/${((l=this.employee)==null?void 0:l.picture)||"default_employee_pic.jpg"}`,class:"rounded-circle avatar-xl img-thumbnail user-profile-image",alt:"employee picture"})),e("h5",{class:"fs-16 mb-1"},((i=this.employee)==null?void 0:i.front_title)!=null?(m=this.employee)==null?void 0:m.front_title:""," ",(r=this.employee)==null?void 0:r.name,((o=this.employee)==null?void 0:o.back_title)!=null?", "+((d=this.employee)==null?void 0:d.back_title):""),e("p",{class:"text-muted mb-0"},(c=this.employee)==null?void 0:c.nip)))),e("div",{className:"card shadow-sm"},e("div",{className:"card-body p-0"},e("ul",{className:"nav-detail"},e("li",{className:"active","data-url-name":"apps.portal.employees.detail.employee-detail","data-id":this.$router.params.id},"Biodata"),e("li",{className:"","data-url-name":"apps.portal.employees.detail.teaching-lecturer","data-id":this.$router.params.id},"Aktivitas Mengajar Dosen"),e("li",{className:"","data-url-name":"apps.portal.employees.detail.advisor","data-id":this.$router.params.id},"Pembimbing Aktivitas"),e("li",{className:"","data-url-name":"apps.portal.employees.detail.examiner","data-id":this.$router.params.id},"Penguji Aktivitas"),e("li",{className:"","data-url-name":"apps.portal.employees.detail.schedule-semester","data-id":this.$router.params.id},"Jadwal Semester"))))),e("div",{className:"col-lg-9 col-md-8"},e("router-view",null))))}componentDidMount(){let a=this.$router.pushName,t=this.$router.params.id;$(".nav-detail > li").unbind().on("click",function(l){l.preventDefault(),$(".nav-detail").find(".active").removeClass("active"),$(this).addClass("active"),a($(this).data("url-name"),{id:t})})}}p(N,"defaultProps",{employee:null});export{N as default};
