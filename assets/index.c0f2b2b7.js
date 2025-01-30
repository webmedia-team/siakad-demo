var k=Object.defineProperty;var f=(d,e,i)=>e in d?k(d,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[e]=i;var N=(d,e,i)=>(f(d,typeof e!="symbol"?e+"":e,i),i);import{C as y,g as b,c as t}from"./index.d57021e8.js";import{H as x}from"./header-component.e9afed59.js";class U extends y{async componentWillMount(){const{status:e,data:i}=await b("student/general/student-semester",{hideSuccessNotification:!0});e==200&&(this.academicPeriod=i.academicPeriods)}render(){var e,i;return t("div",{className:"intro-y"},t("div",{className:"row"},t("div",{className:"col-12"},t("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},t("h4",{className:"mb-sm-0"},(e=this.meta.title)!=null?e:"Untitled Page"),t("div",{className:"page-title-right"},t("div",{className:"breadcrumb"},t("li",{className:"breadcrumb-item"},t("router-link",{link:"apps.dashboard"},"Dashboard")),t("li",{className:"breadcrumb-item active"},"Akademik"),t("li",{className:"breadcrumb-item active"},(i=this.meta.title)!=null?i:"Untitled Page")))))),t(x,null),t("div",{className:"card shadow-sm"},t("div",{className:"card-header"},t("div",{className:"col-lg-3 col-md-5 col-sm-8 col-10"},t("select",{className:"form-control js-choices",name:"academic_period_id",onChange:this.getScoreData},this.academicPeriod.map(s=>t("option",{value:s.hashid,selected:s.is_use},s.name))))),t("div",{className:"card-body"},t("div",{className:"table-card mb-3",id:"loaderData"},t("div",{className:"table-responsive"},t("table",{className:"table table-bordered table-striped",cellpadding:"10"},t("thead",{className:"bg-light"},t("th",{width:"20"},"No."),t("th",null,"Kode"),t("th",null,"Mata Kuliah"),t("th",{width:"90"},"UTS"),t("th",{width:"90"},"UAS"),t("th",{width:"90"},"Tugas"),t("th",{width:"90"},"Kuis"),t("th",{width:"90"},"KHD"),t("th",{width:"90"},"Prak"),t("th",{width:"90"},"NA"),t("th",{width:"90"},"UP"),t("th",{width:"90"},"NHU"),t("th",{width:"90"},"NH")),t("tbody",{id:"renderData"},t("tr",{key:""},t("td",{colspan:"13",className:"text-center text-muted py-4"},t("lord-icon",{src:"https://cdn.lordicon.com/bbnkwdur.json",trigger:"loop",colors:"primary:#405189,secondary:#0ab39c",style:"width:75px;height:75px"}),t("h6",{className:"text-center"},"Tidak ada data yang dapat ditampilkan."))))))),t("i",{className:"text-black-50"},"*Catatan :",t("br",null),t("ul",null,t("li",null,"UTS : Ujian Tengah Semester"),t("li",null,"UAS : Ujian Akhir semester"),t("li",null,"TUGAS : Nilai Tugas"),t("li",null,"KUIS : Nilai Kuis"),t("li",null,"KHD : Nilai Kehadiran"),t("li",null,"PRAK : Nilai Praktikum"),t("li",null,"NA : Nilai Akhir"),t("li",null,"UP : Nilai UP (Jika NA gagal)"),t("li",null,"NHU : Nilai Huruf hasil sebelum UP (Dari NA, nilai sementara sebelum ditampilkan ke mahasiswa"),t("li",null,"NH : Nilai Huruf termasuk UP (Nilai yang digunakan untuk rapat kenaikan)."))))))}componentDidMount(){this.getScoreData()}async getScoreData(){let e=$('*[name="academic_period_id"]').val();$("#loaderData").waitMe({effect:"win8",bg:"rgba(255, 255, 255, .8)",color:"#6691e7",text:"Mengambil data..."});const{status:i,data:s}=await b(`student/academic/grade/${e}/get-score`,{hideSuccessNotification:!0});if(i==200){var l="";s.scores.length>0?s.scores.map((a,w)=>{var c,r,n,o,m,h,u,g,p;l+=`
                        <tr>
                            <td width="20">${parseInt(w)+1}</td>
                            <td>${a.course_code}</td>
                            <td>${a.course_name}</td>
                            <td width="90">${(c=a.mid_exam)!=null?c:0}</td>
                            <td width="90">${(r=a.final_exam)!=null?r:0}</td>
                            <td width="90">${(n=a.coursework)!=null?n:0}</td>
                            <td width="90">${(o=a.quiz)!=null?o:0}</td>
                            <td width="90">${(m=a.attendance)!=null?m:0}</td>
                            <td width="90">${(h=a.practice)!=null?h:0}</td>
                            <td width="90">${(u=a.score)!=null?u:0}</td>
                            <td width="90">${(g=a.final_score==a.score?0:a.final_score)!=null?g:0}</td>
                            <td width="90">${a.grade==0?a.final_grade:a.grade}</td>
                            <td width="90">${(p=a.final_grade)!=null?p:0}</td>
                        </tr>
                    `}):l+=`
                    <tr key="">
                        <td colspan="13" class="text-center text-muted py-4">
                            <lord-icon src="https://cdn.lordicon.com/bbnkwdur.json" 
                                trigger="loop" 
                                colors="primary:#405189,secondary:#0ab39c" 
                                style="width:75px;height:75px"></lord-icon>
                            <h6 class="text-center">Tidak ada data yang dapat ditampilkan.</h6>
                        </td>
                    </tr>
                `,$("#renderData").html(l)}$("#loaderData").waitMe("hide")}}N(U,"defaultProps",{academicPeriod:[]});export{U as default};
