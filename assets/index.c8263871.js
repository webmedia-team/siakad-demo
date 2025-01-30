var g=Object.defineProperty;var u=(i,e,a)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var m=(i,e,a)=>(u(i,typeof e!="symbol"?e+"":e,a),a);import{C as p,c as t,g as b}from"./index.d57021e8.js";import{m as y}from"./map-actions.609b7ae0.js";const f="lecture/college-class/recaps";class v extends p{render(){var e,a;return t("div",{class:"intro-y"},t("div",{className:"row"},t("div",{className:"col-12"},t("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},t("h4",{class:"mb-sm-0"},(e=this.meta.title)!=null?e:"Untitled Page"),t("div",{className:"page-title-right"},t("div",{className:"breadcrumb"},t("li",{className:"breadcrumb-item"},t("router-link",{link:"apps.dashboard"},"Dashboard")),t("li",{className:"breadcrumb-item"},"Perkuliahan"),t("li",{className:"breadcrumb-item"},"Data Kelas"),t("li",{className:"breadcrumb-item active"},(a=this.meta.title)!=null?a:"Untitled Page")))))),t("div",{className:"card"},t("div",{className:"card-body"},t("div",{className:"row"},t("div",{className:""},t("label",{htmlFor:""},"Tanggal"),t("input",{type:"text",autoComplete:"off",name:"date",className:"form-control flatpickr-date dt-filter-input",onChange:this.fetchData}))))),t("div",{className:"card"},t("div",{className:"card-header border-0"},t("div",{className:"text-sm-end text-center"},t("div",{className:"dt-actions d-inline"}))),t("div",{className:"card-body",id:"render-data",style:{minHeight:"300px"}},t("div",{class:"col-lg-3 col-sm-6 col-8 mx-auto"},t("img",{src:"/assets/images/no-data.png",width:"100%",alt:""})),t("h5",{class:"text-center",style:"font-weight: bold"},"Upps, tidak ada data pengunaan ruang hari ini"),t("p",{class:"col-lg-6 col-sm-9 col-11 text-muted text-center mx-auto mb-5"},"silahkan cek jadwal kelas hari ini untuk lebih detailnya."))))}async componentDidMount(){let e=this.getTodayDate();this.fetchData(e)}async fetchData(e){let a=$('input[name="date"]').val();if(typeof a>"u"&&(a=e),a!=""){$("#render-data").attr("style","min-height: 300px"),document.querySelector("#render-data").innerHTML="",$("#render-data").waitMe({effect:"win8",bg:"rgba(255, 255, 255, .7)",color:"#6691e7",text:"Mengambil data..."});const{data:s,status:n}=await b(`${f}?class_schedule_date=${a}`,{hideSuccessNotification:!0});if(this.class=s.data.class_schedules,this.room=s.data.rooms,$("#render-data").waitMe("hide"),n==200)if(this.class.length>0){const r=this.renderHtml(this.class,this.room);document.querySelector("#render-data").innerHTML=r}else $("#render-data").parent().find('button[type="button"]').hide(),$("#render-data").attr("style","min-height: 300px"),$("#render-data").append(`
                        <div class="col-lg-3 col-sm-6 col-8 mx-auto">
                            <img src="/assets/images/no-data.png" width="100%" alt="" />
                        </div>
                        <h5 class="text-center" style="font-weight: bold">Upps, tidak ada data pengunaan ruang</h5>
                        <p class="col-lg-6 col-sm-9 col-11 text-muted text-center mx-auto mb-5">
                                silahkan cek jadwal kelas hari ini untuk lebih detailnya    lanjut.
                        </p>
                    `)}}renderHtml(e,a){let s={};e.forEach((d,o)=>{const c=d.room.code;s.hasOwnProperty(c)?s[c].push(d):s[c]=[d]});let n="",r="";return a.forEach(d=>{const o=d.code,h=(s[o]||[]).map(l=>`<span 
              class="badge bg-primary me-2 p-2"
              data-toggle="tooltip" data-placement="top"
              title="
              ${l.meeting_type.name} ${l.college_class.course.name} - ${l.college_class.study_program.name}
              ${l.time_start.substring(0,5)} s.d ${l.time_end.substring(0,5)}"
            >
              ${l.college_class.name} ${l.time_start.substring(0,5)} s.d ${l.time_end.substring(0,5)}
            </span>`);n+=`
            <tbody>
              <tr>
                <td>${d.code} - ${d.name}</td>
                <td>${h.join("")}</td>
              </tr>
            </tbody>
          `}),r=`<div class="table-responsive table-card mb-1">
          <table class="table align-middle table-nowarp mb-0" width="100%">
            <thead class="table-light">
              <tr>
                <th>Ruang / Kelas</th>
                <th>Jadwal</th>
              </tr>
            </thead>
            ${n}
          </table>
        </div>`,r}getTodayDate(){const e=new Date,a=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${a}-${s}-${n}`}}m(v,"defaultProps",{...y(["getStudyPrograms"]),table:null,studyPrograms:null,class:[],room:[]});export{v as default};
