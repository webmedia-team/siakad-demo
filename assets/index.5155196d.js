var n=Object.defineProperty;var l=(i,t,a)=>t in i?n(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var r=(i,t,a)=>(l(i,typeof t!="symbol"?t+"":t,a),a);import{A as m,C as c,c as e}from"./index.d57021e8.js";import{i as o}from"./datatable.4b22066f.js";import{B as u}from"./button.d257158a.js";import{H as p}from"./header-component.e9092edf.js";import{m as y}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const v=i=>({url:`${m}/portal/employees/${i}/activity?is_examiner=true`,table:[{title:"",data:null,name:"id",searchable:!1,orderable:!1,width:"2%",sClass:"text-center",mRender:(t,a,s,d)=>""},{title:"No",data:null,name:null,searchable:!1,orderable:!1,width:"5%",mRender:(t,a,s,d)=>d.row+d.settings._iDisplayStart+1},{title:"Periode Akademik",data:"student_activity.academic_period.name",name:"student_activity.academic_period.name"},{title:"Program Studi",data:"student_activity.study_program.name",name:"student_activity.study_program.name",mRender:function(t,a,s){return s.student_activity.study_program.education_level.code+" - "+t}},{title:"Mahasiswa",data:"student.name",name:"student.name",mRender:function(t,a,s){return s.student.nim+" - "+t}},{title:"Jenis Aktivitas",data:"student_activity.student_activity_category.name",name:"student_activity.student_activity_category.name"},{title:"Judul Aktivitas",data:"student_activity.name",name:"student_activity.name"},{title:"Tanggal SK",data:"student_activity.decree_date",name:"student_activity.decree_date"}],callback:()=>{},options:{order:[2,"desc"]}});class _ extends c{render(){var t;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},e("h4",{className:"mb-sm-0"},(t=this.meta.title)!=null?t:"Untitled Page")))),e(p,{employeeId:this.$router.params.id}),e("div",{className:"card"},e("div",{className:"card-header border-0"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(u,{data:{refresh:!0,filter:!1,create:!1}}))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=o("#dataTable",v(this.$router.params.id))}}r(_,"defaultProps",{...y(["getData"]),table:null});export{_ as default};
