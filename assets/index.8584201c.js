var o=Object.defineProperty;var d=(l,a,t)=>a in l?o(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;var r=(l,a,t)=>(d(l,typeof a!="symbol"?a+"":a,t),t);import{A as c,C as m,c as e}from"./index.d57021e8.js";import{i as n}from"./datatable.4b22066f.js";import{B as p}from"./button.d257158a.js";import{H as u}from"./header-component.e9092edf.js";import{m as g}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const b=l=>({url:`${c}/portal/employees/${l}/teaching-lecturer`,table:[{title:"",data:null,name:"id",searchable:!1,orderable:!1,width:"2%",sClass:"text-center",mRender:(a,t,s,i)=>""},{title:"No",data:null,name:null,searchable:!1,orderable:!1,width:"5%",mRender:(a,t,s,i)=>i.row+i.settings._iDisplayStart+1},{title:"Periode Akademik",data:"college_class.academic_period.name",name:"college_class.academic_period.name"},{title:"Program Studi",data:"college_class.study_program.name",name:"college_class.study_program.name",mRender:function(a,t,s){return s.college_class.study_program.education_level.code+" - "+a}},{title:"Mata Kuliah",data:"college_class.course.name",name:"college_class.course.name",mRender:function(a,t,s){return s.college_class.course.code+" - "+a}},{title:"Kelas",data:"college_class.name",name:"college_class.name"},{title:"Rencana",data:"meeting_plan",name:"meeting_plan"},{title:"Realisasi",data:"meeting_realization",name:"meeting_realization"}],callback:()=>{},options:{order:[2,"desc"]}});class _ extends m{render(){var a;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},e("h4",{className:"mb-sm-0"},(a=this.meta.title)!=null?a:"Untitled Page")))),e(u,{employeeId:this.$router.params.id}),e("div",{className:"card dt-filter-card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-12"},e("label",{htmlFor:""},"Periode Akademik"),e("select",{name:"academic_period_id",id:"",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),e("option",{value:"all"},"Semua Periode Akademik"),this.academicPeriods.map(t=>e("option",{value:t.id},t.name))))))),e("div",{className:"card"},e("div",{className:"card-header border-0"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(p,{data:{refresh:!0,filter:!0,create:!1}}))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=n("#dataTable",b(this.$router.params.id))}async componentWillMount(){const{data:a}=await this.getData({model:["academicPeriods"]});this.academicPeriods=a.academicPeriods}}r(_,"defaultProps",{...g(["getData"]),table:null,academicPeriods:[]});export{_ as default};
