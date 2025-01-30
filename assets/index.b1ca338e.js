var be=Object.defineProperty;var ge=(h,p,a)=>p in h?be(h,p,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[p]=a;var x=(h,p,a)=>(ge(h,typeof p!="symbol"?p+"":p,a),a);import{C as ke,g as w,c as e,i as v,p as I}from"./index.d57021e8.js";class ye extends ke{constructor(){super(...arguments);x(this,"base_url","lecturer/lecture/student-grades")}async componentWillMount(){const{status:a,data:t}=await w(`${this.base_url}/get-courses`,{hideSuccessNotification:!0});a==200&&(this.courses=t.courses)}render(){var a;return e("div",{className:"intro-y"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0"},this.meta.title),e("div",{className:"page-title-right"},e("ol",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item active"},"Perkuliahan"),e("li",{className:"breadcrumb-item active"},this.meta.title)))))),e("div",{className:"card shadow-sm mb-3"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-sm-6 col-12"},e("div",{className:"mb-3"},e("label",null,"Matakuliah"),e("select",{className:"form-control js-choices",name:"course_id",onChange:this.fetchCollegeClasses},e("option",{value:"",key:""},"Pilih"),(a=this.courses)==null?void 0:a.map(t=>e("option",{value:t.id,key:""},t.code," - ",t.name))))),e("div",{className:"col-sm-6 col-12"},e("div",{className:"mb-3"},e("label",null,"Kelas Kuliah"),e("select",{className:"form-control js-choices",name:"college_class_id",onChange:this.fetchData},e("option",{value:"",key:""},"Pilih"))))))),e("div",{className:"card shadow-sm mb-3"},e("form",{onsubmit:this.submit},e("div",{className:"card-header border-0 text-end"},e("div",{className:"col-sm-12 text-sm-end text-center"},v("update-lecturer-student-grades")?e("button",{type:"button",className:"btn btn-success d-none publish",onClick:this.publishStudentGrade},e("i",{className:"bx bx-share"})," "):"",v("update-lecturer-student-grades")?e("button",{type:"button",className:"btn btn-dark mx-1 d-none lock-score",onClick:this.lockStudentGrade},e("i",{className:"bx bx-lock"})," "):"",v("update-lecturer-student-grades")?e("button",{className:"btn btn-primary d-none",type:"submit"},e("i",{className:"bx bx-save"})," Simpan"):"")),e("div",{className:"card-body",id:"renderData",style:"min-height: 300px;"},e("div",{className:"text-center mb-4"},e("lord-icon",{src:"https://cdn.lordicon.com/msoeawqm.json",trigger:"loop",colors:"primary:#66a1ee,secondary:#3080e8",style:"width:150px;height:150px"}),e("h5",{className:"text-muted mb-0"},"Opps! tidak ada yang dapat ditampilkan."))))),e("div",{class:"intro-y card shadow-sm p-2 mt-2"},e("div",{className:"card-body"},e("h5",{className:"fw-bold mb-3"},"Petunjuk Pengisian :"),e("ol",null,e("li",{className:"p-1"},"Pilih Periode Perkuliahan, Program Studi, Mata Kuliah dan Kelas untuk menentukan daftar nilai yang akan dibuka."),e("li",{className:"p-1"},"Tentukan presentase penilaian untuk kolom UTS, UAS, Tugas, Kuis, Kehadiran dan Praktikum dengan membuka menu kelas perkuliahan. Perubahan sebelumnya akan dibatalkan jika belum menekan tombol ",e("b",null,"Simpan"),"."),e("li",{className:"p-1"},"Terdapat 2 bagian pengisian yaitu ",e("b",null,"Nilai Utama")," (UTS, UAS, Tugas, Kuis, Kehadiran, Praktikum) dan ",e("b",null,"Nilai Up")," (Nilai yang digunakan pada saat Nilai Akhir tidak mencukupi)."),e("li",{className:"p-1"},"Kolom pengisian hanya menerima data nilai bulat dari angka 0 sampai 100."),e("li",{className:"p-1"},"Lakukan pengisian pada ",e("b",null,"Nilai Utama")," terlebih dahulu. Sebaiknya diisi lengkap (UTS, UAS, Tugas, Kuis, Kehadiran, Praktikum). Jika terdapat kolom yang tidak ingin diisi (dikosongi), maka kosongkan saja kolom tersebut dan setting kembali presentase nilainya."),e("li",{className:"p-1"},"Untuk mahasiswa yang terkena UP, masukkan nilai pada kolom ",e("b",null,"UP"),"."),e("li",{className:"p-1"},"Tekan tombol simpan untuk menyimpan data."),e("li",{className:"p-1"},e("b",null,"Nilai Huruf")," akan dihitung setelah data disimpan dan dihitung dari nilai akhir yang masuk (UP atau NA)."),e("li",{className:"p-1"},"Jika anda sudah benar - benar yakin bahwa nilai sudah dimasukkan semua dengan benar, maka untuk menjaga keamanan nilai, lakukan Penguncian nilai dengan menekan tombol ",e("b",null,"Kunci Nilai"),"."),e("li",{className:"p-1"},"Secara default nilai tidak akan diperlihatkan ke mahasiswa, apabila anda menginginkan untuk nilai tersebut dapat dilihat oleh mahasiswa/umum, silahkan klik tombol ",e("b",null,"Publish Nilai"),".")),e("i",{className:"text-black-50"},"*Catatan :",e("br",null),e("ul",null,e("li",null,"UTS : Ujian Tengah Semester"),e("li",null,"UAS : Ujian Akhir semester"),e("li",null,"TUGAS : Nilai Tugas"),e("li",null,"KUIS : Nilai Kuis"),e("li",null,"KHD : Nilai Kehadiran"),e("li",null,"PRAK : Nilai Praktikum"),e("li",null,"NA : Nilai Akhir"),e("li",null,"UP : Nilai UP (Jika NA gagal)"),e("li",null,"NHU : Nilai Huruf hasil sebelum UP (Dari NA, nilai sementara sebelum ditampilkan ke mahasiswa"),e("li",null,"NH : Nilai Huruf termasuk UP (Nilai yang digunakan untuk rapat kenaikan)."))))))}async fetchCollegeClasses(){var t;let a=$('*[name="course_id"').val();if(a!=""&&a!=null){const{status:u,data:s}=await w(`${this.base_url}/get-college-classes?course_id=${a}`,{hideSuccessNotification:!0});if(u==200){$(".js-choices")[1].choices.clearChoices(),$(".js-choices")[1].choices.clearStore(),$(".js-choices")[1].choices.clearInput();let o=[];(t=s==null?void 0:s.collegeClasses)==null||t.forEach(l=>{var c,r;o.push({value:l.id,label:l.name+" | "+((r=(c=l==null?void 0:l.lecture_system)==null?void 0:c.name)!=null?r:"-")+" | Peserta "+l.class_participant_count+" Orang"})}),$(".js-choices")[1].choices.setChoices(o)}}}async fetchData(){var u,s,o,l,c;let a=$('*[name="course_id"').val(),t=$('*[name="college_class_id"').val();if(a!=""&&a!=null&&t!=""&&t!=null){$("#renderData").attr("style","min-height: 300px"),$("#renderData").html(""),$("#renderData").waitMe({effect:"win8",bg:"rgba(255, 255, 255, .7)",color:"#6691e7",text:"Mengambil data..."});const{status:r,data:m}=await w(`${this.base_url}?course_id=${a}&college_class_id=${t}`,{hideSuccessNotification:!0});$("#renderData").waitMe("hide"),r==200&&(m.classParticipants.length>0?($("#renderData").parent().find('button[type="submit"]').removeClass("d-none"),$("#renderData").parent().find('button[type="submit"]').show(),$("#renderData").parent().find(".publish").append(`${(o=(s=(u=m.classParticipants[0])==null?void 0:u.student)==null?void 0:s.score[0])!=null&&o.is_publish?" Unpublish Nilai":" Publish Nilai"}`),$("#renderData").parent().find(".lock-score").append(`${(c=(l=m.classParticipants[0])==null?void 0:l.college_class)!=null&&c.is_lock_score?" Buka Nilai":" Kunci Nilai"}`),$("#renderData").parent().find('button[type="button"]').removeClass("d-none"),$("#renderData").parent().find('button[type="button"]').show(),$("#renderData").removeAttr("style"),document.querySelector("#renderData").innerHTML="",document.querySelector("#renderData").appendChild(this.renderHTML(m.scorePercentage,m.classParticipants))):($("#renderData").parent().find('button[type="submit"]').hide(),$("#renderData").attr("style","min-height: 300px"),$("renderData").append(`
                        <div className="text-center mb-4">
                            <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#66a1ee,secondary:#3080e8"
                                style="width:150px;height:150px">
                            </lord-icon>
                            <h5 className="text-muted mb-0">Opps! tidak ada yang dapat ditampilkan.</h5>
                        </div>
                    `)))}}renderHTML(a,t){var u,s,o,l,c,r,m,g,k,y,f,N,d,b,S,U,K,C,D,q,M,z,O,E;return e("div",{className:"table-card table-responsive"},e("table",{className:"table zero-configuration table-bordered"},e("thead",null,e("tr",null,e("th",{colSpan:2},"Setting Presentase"),e("th",{width:80},e("input",{type:"number",inputMode:"decimal",step:"any",min:0,max:100,className:"form-control",placeholder:"0",value:(u=a==null?void 0:a.mid_exam)!=null?u:0,name:"score_percentage_mid_exam",readOnly:!0,ref:(o=(s=t[0])==null?void 0:s.college_class)!=null&&o.is_lock_score?()=>{}:this.updateValueScorePercentage})),e("th",{width:80},e("input",{type:"number",inputMode:"decimal",step:"any",min:0,max:100,className:"form-control score-percentage-final-exam",placeholder:"0",value:(l=a==null?void 0:a.final_exam)!=null?l:0,name:"score_percentage_final_exam",readOnly:!0,ref:(r=(c=t[0])==null?void 0:c.college_class)!=null&&r.is_lock_score?()=>{}:this.updateValueScorePercentage})),e("th",{width:80},e("input",{type:"number",inputMode:"decimal",step:"any",min:0,max:100,className:"form-control score-percentage-coursework",placeholder:"0",value:(m=a==null?void 0:a.coursework)!=null?m:0,name:"score_percentage_coursework",readOnly:!0,ref:(k=(g=t[0])==null?void 0:g.college_class)!=null&&k.is_lock_score?()=>{}:this.updateValueScorePercentage})),e("th",{width:80},e("input",{type:"number",inputMode:"decimal",step:"any",min:0,max:100,className:"form-control score-percentage-quiz",placeholder:"0",value:(y=a==null?void 0:a.quiz)!=null?y:0,name:"score_percentage_quiz",readOnly:!0,ref:(N=(f=t[0])==null?void 0:f.college_class)!=null&&N.is_lock_score?()=>{}:this.updateValueScorePercentage})),e("th",{width:80},e("input",{type:"number",inputMode:"decimal",step:"any",min:0,max:100,className:"form-control score-percentage-attendance",placeholder:"0",value:(d=a==null?void 0:a.attendance)!=null?d:0,name:"score_percentage_attendance",readOnly:!0,ref:(S=(b=t[0])==null?void 0:b.college_class)!=null&&S.is_lock_score?()=>{}:this.updateValueScorePercentage})),e("th",{width:80},e("input",{type:"number",inputMode:"decimal",step:"any",min:0,max:100,className:"form-control score-percentage-practice",placeholder:"0",value:(U=a==null?void 0:a.practice)!=null?U:0,name:"score_percentage_practice",readOnly:!0,ref:(C=(K=t[0])==null?void 0:K.college_class)!=null&&C.is_lock_score?()=>{}:this.updateValueScorePercentage})),e("th",{width:80},e("input",{type:"number",inputMode:"decimal",step:"any",min:0,max:100,className:"form-control score-percentage-total",placeholder:"0",name:"score_percentage_total",value:parseInt((D=a==null?void 0:a.mid_exam)!=null?D:0)+parseInt((q=a==null?void 0:a.final_exam)!=null?q:0)+parseInt((M=a==null?void 0:a.coursework)!=null?M:0)+parseInt((z=a==null?void 0:a.quiz)!=null?z:0)+parseInt((O=a==null?void 0:a.attendance)!=null?O:0)+parseInt((E=a==null?void 0:a.practice)!=null?E:0),readOnly:!0}))),e("tr",{className:"table-light"},e("th",null,"No. "),e("th",null,"Nama"),e("th",null,"UTS"),e("th",null,"UAS"),e("th",null,"Tugas"),e("th",null,"Kuis"),e("th",null,"KHD"),e("th",null,"Prak"),e("th",null,"NA"),e("th",{width:80},"UP"),e("th",{width:80},"NHU"),e("th",{width:80},"NH"))),e("tbody",null,t.length>0?t==null?void 0:t.map((n,_)=>{var A,T,j,V,H,W,G,L,J,B,F,R,Q,X,Y,Z,P,ee,ae,te,ne,le,ie,se,re,oe,ce,ue,me,de,pe,_e,he;return e("tr",null,e("td",null,_+1),e("td",null,(A=n.student)==null?void 0:A.nim," - ",(T=n.student)==null?void 0:T.name,e("input",{type:"hidden",name:"student_id[]",id:"student",class:"form-control student",value:n.student_id})),e("td",{width:80},e("input",{type:"number",name:"mid_exam[]",inputMode:"decimal",step:"any",min:0,max:100,id:"mid_exam",class:"form-control mid_exam",placeholder:"0",autoComplete:"off",value:(H=(V=(j=n==null?void 0:n.student)==null?void 0:j.score[0])==null?void 0:V.mid_exam)!=null?H:0,onKeyDown:this.disableEnter,onKeyUp:i=>this.updateValue(i,_),readOnly:n.college_class.is_lock_score})),e("td",null,e("input",{type:"number",name:"final_exam[]",inputMode:"decimal",step:"any",min:0,max:100,id:"final_exam",class:"form-control final_exam",placeholder:"0",value:(L=(G=(W=n==null?void 0:n.student)==null?void 0:W.score[0])==null?void 0:G.final_exam)!=null?L:0,autoComplete:"off",onKeyDown:this.disableEnter,onKeyUp:i=>this.updateValue(i,_),readOnly:n.college_class.is_lock_score})),e("td",null,e("input",{type:"number",name:"coursework[]",inputMode:"decimal",step:"any",min:0,max:100,id:"coursework",class:"form-control coursework",placeholder:"0",autoComplete:"off",value:(F=(B=(J=n==null?void 0:n.student)==null?void 0:J.score[0])==null?void 0:B.coursework)!=null?F:0,onKeyDown:this.disableEnter,onKeyUp:i=>this.updateValue(i,_),readOnly:n.college_class.is_lock_score})),e("td",null,e("input",{type:"number",name:"quiz[]",inputMode:"decimal",step:"any",min:0,max:100,id:"quiz",class:"form-control quiz",placeholder:"0",value:(X=(Q=(R=n==null?void 0:n.student)==null?void 0:R.score[0])==null?void 0:Q.quiz)!=null?X:0,autoComplete:"off",onKeyDown:this.disableEnter,onKeyUp:i=>this.updateValue(i,_),readOnly:n.college_class.is_lock_score})),e("td",null,e("input",{type:"number",name:"attendance[]",inputMode:"decimal",step:"any",min:0,max:100,id:"attendance",class:"form-control attendance",placeholder:"0",value:(P=(Z=(Y=n==null?void 0:n.student)==null?void 0:Y.score[0])==null?void 0:Z.attendance)!=null?P:0,autoComplete:"off",onKeyDown:this.disableEnter,onKeyUp:i=>this.updateValue(i,_),readOnly:n.college_class.is_lock_score})),e("td",null,e("input",{type:"number",name:"practice[]",inputMode:"decimal",step:"any",min:0,max:100,id:"practice",class:"form-control practice",placeholder:"0",value:(te=(ae=(ee=n==null?void 0:n.student)==null?void 0:ee.score[0])==null?void 0:ae.practice)!=null?te:0,autoComplete:"off",onKeyDown:this.disableEnter,onKeyUp:i=>this.updateValue(i,_),readOnly:n.college_class.is_lock_score})),e("td",null,e("input",{type:"number",name:"score[]",inputMode:"decimal",step:"any",min:0,max:100,id:"score",class:"form-control score",placeholder:"0",value:(ie=(le=(ne=n==null?void 0:n.student)==null?void 0:ne.score[0])==null?void 0:le.score)!=null?ie:0,autoComplete:"off",readOnly:n.college_class.is_lock_score})),e("td",null,e("input",{type:"number",name:"remedial_score[]",inputMode:"decimal",step:"any",min:0,max:100,id:"remedial_score",class:"form-control remedial_score",placeholder:"0",autoComplete:"off",value:(oe=(re=(se=n==null?void 0:n.student)==null?void 0:se.score[0])==null?void 0:re.remedial_score)!=null?oe:0,readOnly:(ce=n.college_class)==null?void 0:ce.is_lock_score,onKeyUp:({target:i})=>i.value>100?i.value=100:i.value=i.value})),e("td",null,e("input",{type:"text",name:"grade[]",id:"grade",class:"form-control grade",placeholder:"E",value:(de=(me=(ue=n.student)==null?void 0:ue.score[0])==null?void 0:me.grade)!=null?de:"E",autoComplete:"off",readOnly:!0})),e("td",null,e("input",{type:"text",name:"final_grade[]",id:"final_grade",class:"form-control final_grade",placeholder:"E",value:(he=(_e=(pe=n==null?void 0:n.student)==null?void 0:pe.score[0])==null?void 0:_e.final_grade)!=null?he:"E",autoComplete:"off",readOnly:!0})))}):e("div",{className:"text-center mb-4"},e("lord-icon",{src:"https://cdn.lordicon.com/msoeawqm.json",trigger:"loop",colors:"primary:#66a1ee,secondary:#3080e8",style:"width:150px;height:150px"}),e("h5",{className:"text-muted mb-0"},"Opps! tidak ada yang dapat ditampilkan.")))))}async submit(a){a.preventDefault(),this.showWaiting(),await I(`${this.base_url}?college_class_id=${$('*[name="college_class_id"]').val()}`,a.target),this.hideWaiting()}disableEnter(a){if(a.keyCode==13)return a.preventDefault(),!1}updateValue(a,t){a.target.value>100&&$(a.target).val(100),a.target.value.length>1&&a.target.value.charAt(0)==0&&$(a.target).val(a.target.value.substring(1)),$('*[name="score_percentage_mid_exam"]').attr("readonly",!0),$('*[name="score_percentage_final_exam"]').attr("readonly",!0),$('*[name="score_percentage_coursework"]').attr("readonly",!0),$('*[name="score_percentage_quiz"]').attr("readonly",!0),$('*[name="score_percentage_attendance"]').attr("readonly",!0),$('*[name="score_percentage_practice"]').attr("readonly",!0);let u=$($('*[name="mid_exam[]"]')[t]).val()==""?0:$($('*[name="mid_exam[]"]')[t]).val(),s=$($('*[name="final_exam[]"]')[t]).val()==""?0:$($('*[name="final_exam[]"]')[t]).val(),o=$($('*[name="coursework[]"]')[t]).val()==""?0:$($('*[name="coursework[]"]')[t]).val(),l=$($('*[name="quiz[]"]')[t]).val()==""?0:$($('*[name="quiz[]"]')[t]).val(),c=$($('*[name="attendance[]"]')[t]).val()==""?0:$($('*[name="attendance[]"]')[t]).val(),r=$($('*[name="practice[]"]')[t]).val()==""?0:$($('*[name="practice[]"]')[t]).val(),m=$('*[name="score_percentage_mid_exam"]').val()==""?0:$('*[name="score_percentage_mid_exam"]').val(),g=$('*[name="score_percentage_final_exam"]').val()==""?0:$('*[name="score_percentage_final_exam"]').val(),k=$('*[name="score_percentage_coursework"]').val()==""?0:$('*[name="score_percentage_coursework"]').val(),y=$('*[name="score_percentage_quiz"]').val()==""?0:$('*[name="score_percentage_quiz"]').val(),f=$('*[name="score_percentage_attendance"]').val()==""?0:$('*[name="score_percentage_attendance"]').val(),N=$('*[name="score_percentage_practice"]').val()==""?0:$('*[name="score_percentage_practice"]').val(),d=parseInt(m)+parseInt(g)+parseInt(k)+parseInt(y)+parseInt(f)+parseInt(N),b=parseInt(u)*parseInt(m)/parseInt(d)+parseInt(s)*parseInt(g)/parseInt(d)+parseInt(o)*parseInt(k)/parseInt(d)+parseInt(l)*parseInt(y)/parseInt(d)+parseInt(c)*parseInt(f)/parseInt(d)+parseInt(r)*parseInt(N)/parseInt(d);$($('*[name="score[]"]')[t]).val(isNaN(b)?0:b>100?100:b.toFixed(2))}updateValueScorePercentage(a){$(a).unbind().on("dblclick",function(){$('*[name="score_percentage_mid_exam"]').attr("readonly",!0),$('*[name="score_percentage_final_exam"]').attr("readonly",!0),$('*[name="score_percentage_coursework"]').attr("readonly",!0),$('*[name="score_percentage_quiz"]').attr("readonly",!0),$('*[name="score_percentage_attendance"]').attr("readonly",!0),$('*[name="score_percentage_practice"]').attr("readonly",!0),$(a).attr("readonly",!1)}),$(a).on("keydown",function(t){if(t.keyCode==13)return $('*[name="score_percentage_mid_exam"]').attr("readonly",!0),$('*[name="score_percentage_final_exam"]').attr("readonly",!0),$('*[name="score_percentage_coursework"]').attr("readonly",!0),$('*[name="score_percentage_quiz"]').attr("readonly",!0),$('*[name="score_percentage_attendance"]').attr("readonly",!0),$('*[name="score_percentage_practice"]').attr("readonly",!0),t.preventDefault(),!1}),$(a).on("keyup",function(){$(a).val()>100&&$(a).val(100),$(a).val().length>1&&$(a).val().charAt(0)==0&&$(a).val($(a).val().substring(1));let t=$('*[name="score_percentage_mid_exam"]').val()==""?0:$('*[name="score_percentage_mid_exam"]').val(),u=$('*[name="score_percentage_final_exam"]').val()==""?0:$('*[name="score_percentage_final_exam"]').val(),s=$('*[name="score_percentage_coursework"]').val()==""?0:$('*[name="score_percentage_coursework"]').val(),o=$('*[name="score_percentage_quiz"]').val()==""?0:$('*[name="score_percentage_quiz"]').val(),l=$('*[name="score_percentage_attendance"]').val()==""?0:$('*[name="score_percentage_attendance"]').val(),c=$('*[name="score_percentage_practice"]').val()==""?0:$('*[name="score_percentage_practice"]').val(),r=parseInt(t)+parseInt(u)+parseInt(s)+parseInt(o)+parseInt(l)+parseInt(c);$('*[name="score_percentage_total"]').val(isNaN(r)?0:r>100?100:r)})}async lockStudentGrade(){this.showWaiting();const a=await I(`${this.base_url}/lock?college_class_id=${$('*[name="college_class_id"]').val()}`,{},{},!1);this.hideWaiting(),a.status==200&&this.$router.reload()}async publishStudentGrade(){this.showWaiting();const a=await I(`${this.base_url}/publish?college_class_id=${$('*[name="college_class_id"]').val()}`,{},{},!1);this.hideWaiting(),a.status==200&&this.$router.reload()}}x(ye,"defaultProps",{courses:null,collegeClasses:null});export{ye as default};
