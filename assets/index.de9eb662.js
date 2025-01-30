import{C as p,c as e,g,B as c}from"./index.d57021e8.js";class d extends p{render(){var i,l;return e("div",{className:"container intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},e("h4",{className:"mb-0"},(i=this.meta.title)!=null?i:"Untitled Page"),e("div",{className:"page-title-right"},e("div",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-link",{link:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item active"},(l=this.meta.title)!=null?l:"Untitled Page")))))),e("p",{className:"text-muted",id:"announcementResult"},"Halaman 1, menampilkan 0 data dari 0 hasil data."),e("div",{className:"row"},e("div",{className:"col-lg-8 col-sm-8 col-12",id:"renderAnnouncements",style:"min-height: 300px;"}),e("div",{className:"col-lg-4 col-sm-4 d-md-block d-none"},e("div",{className:"card"},e("div",{class:"card-body"},e("input",{type:"text",class:"form-control","data-provider":"flatpickr","data-date-format":"d M, Y","data-deafult-date":"today","data-inline-date":"true"}))))))}componentDidMount(){this.getAnnouncement()}async getAnnouncement(i=1){$("#renderAnnouncements").html(""),$("#renderAnnouncements").waitMe({effect:"win8",bg:"rgba(255, 255, 255, .2)",color:"#6691e7",text:"Mengambil data..."});const{status:l,data:a}=await g(`lecturer/announcements?last_page=${i}`,{hideSuccessNotification:!0});if($("#renderAnnouncements").waitMe("hide"),l==200){var s="";if($("#announcementResult").html(`Halaman ${a.last_page}, menampilkan ${parseInt(a.result_total)>10?10:a.result_total} data dari ${a.result_total} hasil data.`),a.result.length==0)s=`
                    <div class="col-md-6 col-sm-8 col-10 text-center mx-auto">
                        <img src="/assets/images/no-data.png" width="100%" alt="" />
                        <h5 class+"text-center">Tidak ada data pengumuman.</h5>
                    </div>`;else{if(a.result.forEach(t=>{s+=`
                        <div class="card shadow-sm mb-4">
                            <div class="card-body d-flex align-middle align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="${c}/storage/images/announcements/${t.thumbnail}" class="rounded img-fluid"
                                        style="height: 60px;" alt="" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-1 lh-base"><router-link link="/apps/student/announcements/${t.hashid}" class="text-reset">${t.title}</router-link></h6>
                                    <p class="text-muted fs-12 mb-2 small">${t.date_custom} <i
                                            class="mdi mdi-circle-medium align-middle mx-1"></i>${t.time_custom} WIB</p>
                                    <p class="mb-0">${t.message.length>=100?t.message.substring(0,80)+"...":t.message}</p>
                                </div>
                            </div>
                        </div>
                    `}),s+=`
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center pagination-lg">
                            <li class="page-item ${parseInt(a.last_page)>1?"":"disabled"}">
                                <a class="page-link pagination-event" href="javascript::void(0)" data-page="${parseInt(a.last_page)>1?parseInt(a.last_page-1):1}" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>`,parseInt(a.last_page)==parseInt(a.total_page))s+=`
                        <li class="page-item"><a class="page-link pagination-event" href="javascript::void(0)" data-page="1">1</a></li>
                        <li class="page-item disabled"><a class="page-link pagination-event" href="javascript::void(0)">...</a></li>
                        <li class="page-item ${parseInt(a.last_page)==parseInt(a.total_page)-1?"active":""}"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${parseInt(a.total_page)-1}">${parseInt(a.total_page)-1}</a></li>
                        <li class="page-item ${parseInt(a.last_page)==parseInt(a.total_page)?"active":""}"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${a.total_page}">${a.total_page}</a></li>
                    `;else if(parseInt(a.last_page)>=parseInt(a.total_page)-3&&parseInt(a.last_page)<=parseInt(a.total_page))s+=`
                            <li class="page-item ${parseInt(a.last_page)==parseInt(a.total_page)-3?"active":""}"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${parseInt(a.total_page)-3}">${parseInt(a.total_page)-3}</a></li>
                            <li class="page-item ${parseInt(a.last_page)==parseInt(a.total_page)-2?"active":""}"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${parseInt(a.total_page)-2}">${parseInt(a.total_page)-2}</a></li>
                            <li class="page-item ${parseInt(a.last_page)==parseInt(a.total_page)-1?"active":""}"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${parseInt(a.total_page)-1}">${parseInt(a.total_page)-1}</a></li>
                            <li class="page-item ${parseInt(a.last_page)==parseInt(a.total_page)?"active":""}"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${a.total_page}">${a.total_page}</a></li>
                        `;else if(parseInt(a.total_page)>4)s+=`
                                <li class="page-item active"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${a.last_page}">${a.last_page}</a></li>
                                <li class="page-item"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${parseInt(a.last_page)+1}">${parseInt(a.last_page)+1}</a></li>
                                <li class="page-item disabled"><a class="page-link pagination-event" href="javascript::void(0)">...</a></li>
                                <li class="page-item"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${a.total_page}">${a.total_page}</a></li>
                            `;else for(let t=a.last_page;t<=a.total_page;t++)s+=`<li class="page-item ${t==a.last_page?"active":""}"><a class="page-link pagination-event" href="javascript::void(0)" data-page="${t}">${t}</a></li>`;s+=`
                            <li class="page-item ${parseInt(a.total_page)>parseInt(a.last_page)?"":"disabled"}">
                                <a class="page-link pagination-event" href="javascript::void(0)" data-page="${parseInt(a.total_page)>parseInt(a.last_page)?parseInt(a.last_page)+1:1}" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                `}let n=this.getAnnouncement;$("#renderAnnouncements").html(s),$(".pagination-event").unbind().on("click",function(t){t.preventDefault(),n($(this).data("page"))})}}}export{d as default};
