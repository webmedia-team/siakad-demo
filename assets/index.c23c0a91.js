var d=Object.defineProperty;var c=(i,e,a)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var n=(i,e,a)=>(c(i,typeof e!="symbol"?e+"":e,a),a);import{A as m,B as o,C as u,c as t,u as b}from"./index.d57021e8.js";import{i as p}from"./datatable.4b22066f.js";import{B as h}from"./button.d257158a.js";import{H as f}from"./header-component.014babac.js";import{m as g}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const y=i=>({url:m+"/lecturer/schedule/schedule-semesters",table:[{title:"",data:null,name:"id",searchable:!1,orderable:!1,width:"2%",sClass:"text-center",mRender:(e,a,l,r)=>""},{title:"No",data:null,name:null,searchable:!1,orderable:!1,width:"5%",mRender:(e,a,l,r)=>r.row+r.settings._iDisplayStart+1},{title:"Kode",data:"course_code",name:"course_code"},{title:"Mata Kuliah",data:"course.name",name:"course.name"},{title:"Bobot (SKS)",data:"credit_total",name:"credit_total",mRender:function(e){return e+" sks"}},{title:"Kelas",data:"name",name:"name"},{title:"Program Studi",data:"study_program.name",name:"study_program_id",mRender:function(e,a,l){return l.study_program.education_level.code+" - "+e}},{title:"Hari",data:"id",name:"id",mRender:function(e,a,l){let r="";return l.weekly_schedule.length>0?(l.weekly_schedule.forEach(s=>{r+=`<li>${s.day.name} - ${s.time_start.split(":")[0]+":"+s.time_start.split(":")[1]+" s/d "+s.time_end.split(":")[0]+":"+s.time_end.split(":")[1]}</li>`}),`<ul className="list-unstyled">
                            ${r}
                        </ul>`):"-"}},{title:"Ruangan",data:"id",name:"id",mRender:function(e,a,l){let r="";return l.weekly_schedule.length>0?(l.weekly_schedule.forEach(s=>{r+=`<li>${s.room.name} - ${s.room.location}</li>`}),`<ul className="list-unstyled">
                            ${r}
                        </ul>`):"-"}},{title:"Metode Pertemuan",data:"id",name:"id",mRender:function(e,a,l){let r="";return l.weekly_schedule.length>0?(l.weekly_schedule.forEach(s=>{r+=`<li>${s.learning_method.toUpperCase()}</li>`}),`<ul className="list-unstyled">
                            ${r}
                        </ul>`):"-"}},{title:"",data:"id",name:"id",searchable:!1,orderable:!1,sClass:"text-center nowrap",mRender:(e,a,l,r)=>{var s="";return l.college_contract!=null&&(s+=`<a href="${o}/storage/documents/college-contracts/${l.college_contract.attachment}" target="_blank" class="btn btn-outline-primary btn-sm mx-1" ><i class="mdi mdi-file-document-multiple-outline"></i></a>`),s+=`<button type="button" class="btn btn-outline-warning btn-sm mx-1" data-toggle="detail" data-id="${e}"><i class="mdi mdi-eye"></i></button>`,s}}],callback:()=>{$('button[data-toggle="detail"]').unbind().on("click",function(e){e.preventDefault(),i($(this).data("id"))})},options:{}});b("");class _ extends u{render(){var e,a;return t("div",{className:"intro-y"},t("div",{className:"row"},t("div",{className:"col-12"},t("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},t("h4",{className:"mb-sm-0"},(e=this.meta.title)!=null?e:"Untitled Page"),t("div",{className:"page-title-right"},t("div",{className:"breadcrumb"},t("li",{className:"breadcrumb-item"},t("router-link",{link:"apps.dashboard"},"Dashboard")),t("li",{className:"breadcrumb-item"},"Jadwal"),t("li",{className:"breadcrumb-item active"},(a=this.meta.title)!=null?a:"Untitled Page")))))),t(f,null),t("div",{className:"card"},t("div",{className:"card-header border-0"},t("div",{className:"text-sm-end text-center"},t("div",{className:"dt-actions d-inline"}),t(h,{data:{refresh:!0,filter:!1,create:!1}}))),t("div",{className:"card-body"},t("div",{className:"table-responsive table-card mb-1"},t("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=p("#dataTable",y(this.detailData))}async detailData(e){this.$router.pushName("apps.lecturer.lecture.college-class.schedule.class-detail",{id:e})}}n(_,"defaultProps",{...g(["getData"]),studyPrograms:[],table:null});export{_ as default};
