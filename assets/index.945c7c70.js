var p=Object.defineProperty;var c=(l,t,a)=>t in l?p(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;var m=(l,t,a)=>(c(l,typeof t!="symbol"?t+"":t,a),a);import{C as r,c as e,B as d}from"./index.d57021e8.js";import{m as u}from"./map-actions.609b7ae0.js";class y extends r{async componentWillMount(){const t={model:["getEmployeeTypes","getEmployeeStatuses","getEmployeeActiveStatuses"]},{status:a,data:s}=await this.getData(t);a==200&&(this.EmployeeTypes=s.getEmployeeTypes.original.employeeTypes,this.EmployeeStatuses=s.getEmployeeStatuses.original.employeeStatuses,this.EmployeeActiveStatus=s.getEmployeeActiveStatuses.original.employeeActiveStatuses)}render(){var t,a;return e("div",{class:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{class:"mb-sm-0"},(t=this.meta.title)!=null?t:"Untitled Page"),e("div",{className:"page-title-right"},e("div",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-link",{link:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item"},"Laporan"),e("li",{className:"breadcrumb-item"},"Dosen"),e("li",{className:"breadcrumb-item active"},(a=this.meta.title)!=null?a:"Untitled Page")))))),e("div",{className:"card col-5",style:{marginLeft:440}},e("form",{onSubmit:this.handleSubmit},e("div",{className:"card-body "},e("div",{className:"mb-3"},e("label",{htmlFor:""},"Jenis Pegawai ",e("span",{className:"text-danger"})),e("select",{name:"employee_types_id",id:"employee_types_id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),this.EmployeeTypes.map(s=>e("option",{value:s.id},s.name)))),e("div",{className:"mb-3"},e("label",{htmlFor:""},"Status Pegawai ",e("span",{className:"text-danger"})),e("select",{name:"employee_statuses_id",id:"employee_statuses_id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),this.EmployeeStatuses.map(s=>e("option",{value:s.id},s.name)))),e("div",{className:"mb-3"},e("label",{htmlFor:""},"Status Aktif Pegawai ",e("span",{className:"text-danger"})),e("select",{name:"employee_sctive_statuses_id",id:"employee_sctive_statuses_id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),this.EmployeeActiveStatus.map(s=>e("option",{value:s.hashid},s.name))))),e("div",{className:"card-footer text-end"},e("button",{className:"btn btn-primary",type:"submit","data-form-loading":!0},"Cetak")))))}handleSubmit(t){t.preventDefault();let a=$('select[name="employee_types_id"]').val(),s=$('select[name="employee_statuses_id"]').val(),n=$('select[name="employee_sctive_statuses_id"]').val();const o=`${d}/api/v1/report/employees/print?employee_types_id=${a}&employee_statuses_id=${s}&employee_sctive_statuses_id=${n}`,i=window.open(`${o}`,"_blank","resizable=yes,scrollbars=yes,status=yes");i&&(i.opener=null,i.location=`${o}`,i.addEventListener("beforeunload",function(){i.location=`${o}`}))}}m(y,"defaultProps",{...u(["getData"]),table:null,EmployeeTypes:[],EmployeeStatuses:[],EmployeeActiveStatus:[]});export{y as default};
