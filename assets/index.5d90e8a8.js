var o=Object.defineProperty;var m=(s,a,i)=>a in s?o(s,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[a]=i;var l=(s,a,i)=>(m(s,typeof a!="symbol"?a+"":a,i),i);import{C as h,c as e,g as v}from"./index.d57021e8.js";import{m as b}from"./map-actions.609b7ae0.js";const u="portal/academic-calendar-monitorings";class N extends h{render(){var a,i,c,d;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0"},(a=this.meta.title)!=null?a:"Untitled Page"),e("div",{className:"page-title-right"},e("div",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-link",{link:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item"},"Portal"),e("li",{className:"breadcrumb-item"},"Kegiatan"),e("li",{className:"breadcrumb-item active"},(i=this.meta.title)!=null?i:"Untitled Page")))))),e("div",{className:"card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-12"},e("label",{htmlFor:"academic_period"},"Periode"),e("select",{name:"academic_period",id:"academic_period",className:"from-control js-choices",onChange:({target:t})=>this.getData()},e("option",{value:""},"Pilih"),(c=this.academicPeriods)==null?void 0:c.map(t=>e("option",{value:t.id},t.name))))))),e("div",{className:"row"},e("div",{className:"col-xl-3"},e("div",{className:"card border-0 card-h-100"},e("div",{className:"card-header"},e("span",{className:"card-title"},"Warna Kegiatan")),e("div",{className:"card body"},(d=this.academicActivities)==null?void 0:d.map((t,r)=>e("div",{id:"external-events"},e("div",{className:"external-event",style:{backgroundColor:t.color,color:"white"}},e("i",{className:"mdi mdi-checkbox-blank-circle font-size-11 me-2"}),t.name))),e("div",{id:"external-events"},e("div",{className:"external-event",style:{backgroundColor:"#474747",color:"white"}},e("i",{className:"mdi mdi-checkbox-blank-circle font-size-11 me-2"}),"Libur Nasional")),e("div",{id:"external-events"},e("div",{className:"external-event",style:{backgroundColor:"#5e2f2f",color:"white"}},e("i",{className:"mdi mdi-checkbox-blank-circle font-size-11 me-2"}),"Libur Akademik"))))),e("div",{className:"col-xl-9"},e("div",{className:"card card-h-100 border-0"},e("div",{className:"card-body"},e("div",{id:"calendar"}))))))}componentDidMount(){this.renderCalendar(),this.getData()}async componentWillMount(){const a=await this.getAcademicActivities();this.academicActivities=a.data.academicActivities;const i=await this.getAcademicPeriods("is_active=true");this.academicPeriods=i.data.academicPeriods}renderCalendar(a=[],i=null){function c(){return 768<=window.innerWidth&&window.innerWidth<1200?"timeGridWeek":window.innerWidth<=768?"listMonth":"dayGridMonth"}const d=document.querySelector("#calendar"),t=new FullCalendar.Calendar(d,{initialDate:i,timeZone:"local",editable:0,droppable:0,selectable:0,navLinks:!0,initialView:c(),locale:"id",themeSystem:"bootstrap",headerToolbar:{left:"prev,next",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},windowResize:function(r){var n=c();t.changeView(n)},events:a,eventReceive:function(r){}});t.render()}async getData(){var d;let a=$('select[name="academic_period"]').val();const{data:i}=await v(`${u}?academic_period=${a}`,{hideSuccessNotification:!0}),c=[];(d=i.academicCalendars)==null||d.map((t,r)=>{c.push({title:t.name,start:t.date_start,end:t.date_end,color:t.is_national_holiday==!0?"#474747":t.is_academic_holiday==!0?"#5e2f2f":t.academic_activity.color})}),console.log(i),this.renderCalendar(c,i.initialDate)}}l(N,"defaultProps",{...b(["getAcademicActivities","getAcademicPeriods"]),calendar:null,academicActivities:null,academicCalendars:[],academicPeriods:null});export{N as default};
