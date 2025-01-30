var d=Object.defineProperty;var o=(i,e,s)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var n=(i,e,s)=>(o(i,typeof e!="symbol"?e+"":e,s),s);import{A as m,C as c,c as t}from"./index.d57021e8.js";import{i as u}from"./datatable.4b22066f.js";import{B as p}from"./button.d257158a.js";import{H as f}from"./header-component.e9092edf.js";import{m as h}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const y=i=>({url:`${m}/portal/employees/${i}/schedule-semester`,table:[{title:"",data:null,name:"id",searchable:!1,orderable:!1,width:"2%",sClass:"text-center",mRender:(e,s,a,l)=>""},{title:"No",data:null,name:null,searchable:!1,orderable:!1,width:"5%",mRender:(e,s,a,l)=>l.row+l.settings._iDisplayStart+1},{title:"Kode",data:"course.code",name:"course.code"},{title:"Mata Kuliah",data:"course.name",name:"course.name"},{title:"Bobot (SKS)",data:"credit_total",name:"credit_total",mRender:function(e){return e+" sks"}},{title:"Kelas",data:"name",name:"name"},{title:"Program Studi",data:"study_program.name",name:"study_program.name",mRender:function(e,s,a){return a.study_program.education_level.code+" - "+e}},{title:"Hari",data:"id",name:"id",mRender:function(e,s,a){let l="";return a.weekly_schedule.length>0?(a.weekly_schedule.forEach(r=>{l+=`<li>${r.day.name} - ${r.time_start.split(":")[0]+":"+r.time_start.split(":")[1]+" s/d "+r.time_end.split(":")[0]+":"+r.time_end.split(":")[1]}</li>`}),`<ul className="list-unstyled">
                            ${l}
                        </ul>`):"-"}},{title:"Ruangan",data:"id",name:"id",mRender:function(e,s,a){let l="";return a.weekly_schedule.length>0?(a.weekly_schedule.forEach(r=>{l+=`<li>${r.room.name} - ${r.room.location}</li>`}),`<ul className="list-unstyled">
                            ${l}
                        </ul>`):"-"}},{title:"Metode Pertemuan",data:"id",name:"id",mRender:function(e,s,a){let l="";return a.weekly_schedule.length>0?(a.weekly_schedule.forEach(r=>{l+=`<li>${r.learning_method.toUpperCase()}</li>`}),`<ul className="list-unstyled">
                            ${l}
                        </ul>`):"-"}}],callback:()=>{},options:{order:[2,"asc"]}});class b extends c{render(){var e;return t("div",{className:"intro-y"},t("div",{className:"row"},t("div",{className:"col-12"},t("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},t("h4",{className:"mb-sm-0"},(e=this.meta.title)!=null?e:"Untitled Page")))),t(f,{employeeId:this.$router.params.id}),t("div",{className:"card"},t("div",{className:"card-header border-0"},t("div",{className:"text-sm-end text-center"},t("div",{className:"dt-actions d-inline"}),t(p,{data:{refresh:!0,filter:!1,create:!1}}))),t("div",{className:"card-body"},t("div",{className:"table-responsive table-card mb-1"},t("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=u("#dataTable",y(this.$router.params.id))}}n(b,"defaultProps",{...h(["getData"]),table:null});export{b as default};
