var n=Object.defineProperty;var l=(i,a,t)=>a in i?n(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var d=(i,a,t)=>(l(i,typeof a!="symbol"?a+"":a,t),t);import{A as o,C as c,c as e,g as m}from"./index.d57021e8.js";import{i as u}from"./datatable.4b22066f.js";import{B as p}from"./button.d257158a.js";import{H as v}from"./header-component.7049c27c.js";import{m as b}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const f=i=>({url:`${o}/portal/college-students/${i}/score-conversion`,table:[{title:"",data:null,name:"id",searchable:!1,orderable:!1,width:"2%",sClass:"text-center",mRender:(a,t,s,r)=>""},{title:"No",data:null,name:null,searchable:!1,orderable:!1,width:"5%",mRender:(a,t,s,r)=>r.row+r.settings._iDisplayStart+1},{title:"Periode Akademik",data:"student_activity.academic_period.name",name:"student_activity.academic_period.name"},{title:"Jenis Kegiatan",data:"student_activity.student_activity_category.name",name:"student_activity.student_activity_category.name"},{title:"Mata Kuliah",data:"course.name",name:"course.name",mRender:function(a,t,s){return s.course.code+" - "+a}},{title:"SKS Konversi",data:"credit",name:"credit",mRender:function(a,t,s){return a+" sks"}},{title:"Nilai Angka",data:"score",name:"score"},{title:"Nilai Huruf",data:"grade",name:"grade"},{title:"Nilai Indeks",data:"index_score",name:"index_score"}],callback:()=>{}}),N="student/general/student-semester";class h extends c{render(){var a;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},e("h4",{className:"mb-sm-0"},(a=this.meta.title)!=null?a:"Untitled Page")))),e(v,{studentId:this.$router.params.id}),e("div",{className:"card dt-filter-card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-12"},e("label",{htmlFor:""},"Periode Akademik"),e("select",{name:"academic_period_id",id:"",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih"),e("option",{value:"all"},"Semua Periode Akademik"),this.academicPeriods.map(t=>e("option",{value:t.id},t.name))))))),e("div",{className:"card"},e("div",{className:"card-header border-0"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(p,{data:{refresh:!0,filter:!0,create:!1}}))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=u("#dataTable",f(this.$router.params.id))}async componentWillMount(){const{status:a,data:t}=await m(`${N}?id=${this.$router.params.id}`,{hideSuccessNotification:!0});this.academicPeriods=t.academicPeriods}}d(h,"defaultProps",{...b(["getData"]),table:null,academicPeriods:[]});export{h as default};
