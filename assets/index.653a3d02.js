var c=Object.defineProperty;var o=(l,a,t)=>a in l?c(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;var s=(l,a,t)=>(o(l,typeof a!="symbol"?a+"":a,t),t);import{C as m,g as n,c as e}from"./index.d57021e8.js";import{H as u}from"./header-component.7049c27c.js";const h="student/general/student-semester";class p extends m{async componentWillMount(){const{status:a,data:t}=await n(`${h}?id=${this.$router.params.id}`,{hideSuccessNotification:!0});this.academicPeriods=t.academicPeriods}render(){var a;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},e("h4",{className:"mb-sm-0"},(a=this.meta.title)!=null?a:"Untitled Page")))),e(u,{studentId:this.$router.params.id}),e("div",{className:"card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-12"},e("label",{htmlFor:""},"Periode Akademik"),e("select",{name:"academic_period_id",className:"from-control js-choices dt-filter-input",onChange:t=>this.fetchData(t.target.value)},e("option",{value:""},"Pilih"),e("option",{value:"all"},"Semua Periode Akademik"),this.academicPeriods.map(t=>e("option",{value:t.id},t.name))))))),e("div",{className:"card"},e("div",{className:"card-header border-0"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}))),e("div",{className:"card-body",id:"renderData"},e("div",{className:"text-center mb-4"},e("lord-icon",{src:"https://cdn.lordicon.com/msoeawqm.json",trigger:"loop",colors:"primary:#66a1ee,secondary:#3080e8",style:"width:150px;height:150px"}),e("h5",{className:"text-muted mb-0"},"Opps! tidak ada yang dapat ditampilkan.")))))}async fetchData(a){let t=a;if(t!=""&&t!=null){$("#renderData").attr("style","min-height: 300px"),$("#renderData").html(""),$("#renderData").waitMe({effect:"win8",bg:"rgba(255, 255, 255, .7)",color:"#6691e7",text:"Mengambil data..."});const{status:i,data:d}=await n(`portal/college-students/${this.$router.params.id}/student-khs?academic_period_id=${a}`,{hideSuccessNotification:!0});$("#renderData").waitMe("hide"),i==200&&(d.data.khs.length>0?(document.querySelector("#renderData").innerHTML="",document.querySelector("#renderData").appendChild(this.renderHTML(d.data.khs,d.data.total_indexscore_credit,d.data.total_credit))):($("#renderData").parent().find('button[type="submit"]').hide(),$("#renderData").attr("style","min-height: 300px"),$("#renderData").append(`
                        <div class="text-center mb-4">
                            <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#66a1ee,secondary:#3080e8"
                                style="width:150px;height:150px">
                            </lord-icon>
                            <h5 class="text-muted mb-0">Opps! tidak ada yang dapat ditampilkan.</h5>
                        </div>
                    `)))}}renderHTML(a,t,i){return e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table align-middle table-nowarp mb-0",width:"100%",id:""},e("thead",{className:"bg-light"},e("tr",{key:""},e("th",null,"No."),e("th",null,"Kode"),e("th",null,"Matakuliah"),e("th",null,"HM"),e("th",null,"AM"),e("th",null,"K"),e("th",null,"M"))),e("tbody",null,a.map((d,r)=>e("tr",{key:""},e("td",null,r+1),e("td",null,d.code),e("td",null,d.name),e("td",null,d.final_grade),e("td",null,d.index_score),e("td",null,d.credit_total),e("td",null,d.index_score*d.credit_total))),e("tr",{className:"table-light"},e("td",null),e("td",{className:"text-center"},"Jumlah"),e("td",null),e("td",null),e("td",null),e("td",null,i),e("td",null,t)),e("tr",{className:"table-light"},e("td",null),e("td",{className:"text-center"},"Nilai Mutu Rata-Rata (M/K)"),e("td",null),e("td",null),e("td",null,(t/i).toFixed(2)),e("td",null),e("td",null)))))}}s(p,"defaultProps",{data:[],tabel:null,academicPeriods:[]});export{p as default};
