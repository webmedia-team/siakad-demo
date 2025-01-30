var d=Object.defineProperty;var c=(l,t,a)=>t in l?d(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;var r=(l,t,a)=>(c(l,typeof t!="symbol"?t+"":t,a),a);import{A as o,C as n,c as e,g as m,u}from"./index.d57021e8.js";import{i as b}from"./datatable.4b22066f.js";import{B as p}from"./button.d257158a.js";import{H as f}from"./header-component.e9afed59.js";import{m as h}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const N=()=>({url:o+"/student/academic/student-courses",table:[{title:"",data:null,name:"id",searchable:!1,orderable:!1,width:"2%",sClass:"text-center",mRender:(l,t,a,i)=>""},{title:"No",data:null,name:null,searchable:!1,orderable:!1,width:"5%",mRender:(l,t,a,i)=>i.row+i.settings._iDisplayStart+1},{title:"Periode Akademik",data:"academic_period.name",name:"academic_period.name"},{title:"Kode",data:"course.code",name:"course.code"},{title:"Nama Mata Kuliah",data:"course.name",name:"course.name"},{title:"Nama Kelas",data:"name",name:"name"},{title:"Bobot (SKS)",data:"credit_total",name:"credit_total"},{title:"Dosen Pengajar",data:"teaching_lecturer",name:"teaching_lecturer",mRender:function(l,t,a){let i="";if(a.teaching_lecturer.length>0)a.teaching_lecturer.forEach(s=>{i+=`<li>${s.employee.front_title==null?"":s.employee.front_title} ${s.employee.name}${s.employee.back_title==null?"":", "+s.employee.back_title}</li>`});else return"-";return`<ul style="margin-left:-20px">
                        ${i}
                    </ul>`}}],callback:()=>{},options:{order:[2,"asc"]}});u("");const v="student/general/student-semester";class g extends n{render(){var t,a;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},e("h4",{className:"mb-sm-0"},(t=this.meta.title)!=null?t:"Untitled Page"),e("div",{className:"page-title-right"},e("div",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-link",{link:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item"},"Akademik"),e("li",{className:"breadcrumb-item active"},(a=this.meta.title)!=null?a:"Untitled Page")))))),e(f,null),e("div",{className:"card dt-filter-card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-12"},e("label",{htmlFor:""},"Periode Akademik"),e("select",{name:"academic_period_id",id:"",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),e("option",{value:"all"},"Semua Periode Akademik"),this.academicPeriods.map(i=>e("option",{value:i.id},i.name))))))),e("div",{className:"card"},e("div",{className:"card-header border-0"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(p,{data:{refresh:!0,filter:!0,create:!1}}))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}async componentWillMount(){const{status:t,data:a}=await m(`${v}`,{hideSuccessNotification:!0});this.academicPeriods=a.academicPeriods}componentDidMount(){this.table=b("#dataTable",N())}}r(g,"defaultProps",{...h(["getData"]),academicPeriods:[],table:null});export{g as default};
