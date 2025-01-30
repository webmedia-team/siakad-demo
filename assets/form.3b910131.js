var K=Object.defineProperty;var S=(l,a,s)=>a in l?K(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s;var w=(l,a,s)=>(S(l,typeof a!="symbol"?a+"":a,s),s);import{C as $,c as e,g as L,p as A}from"./index.d57021e8.js";import{m as T}from"./map-actions.609b7ae0.js";/* empty css                 */const d="student-affair/achievements";class G extends ${render(){var a,s,m,n,o,c,r,h,p,u,v,b,g,N,f,y,_,k,P,j,F,x,O;return e("div",{className:"intro-y"},e("div",{className:"container"},e("div",{className:"row"},e("div",{className:"col-12"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0 title"},(s=(a=this.meta)==null?void 0:a.title)!=null?s:"Untitled Page"),e("div",{className:"page-title-right"},e("ol",{className:"breadcrumb"},e("li",{className:"breadcrumb-item"},e("router-name",{name:"apps.dashboard"},"Dashboard")),e("li",{className:"breadcrumb-item"},"Kemahasiswaan"),e("li",{className:"breadcrumb-item"},"Prestasi"),e("li",{className:"breadcrumb-item active"},(m=this.meta.title)!=null?m:"Untitled Page")))))),e("div",{className:"card intro-y"},e("div",{className:"card-body"},e("form",{enctype:"multipart/form-data",onsubmit:this.submit},e("div",{className:"row"},e("div",{className:"col-lg-6"},e("div",{className:"mb-3"},e("label",{htmlFor:"name"},"Nama Prestasi"),e("input",{type:"text",id:"name",value:(n=this.data)==null?void 0:n.name,className:"form-control",name:"name",placeholder:"Nama Prestasi"})),e("div",{className:"mb-3"},e("label",{htmlFor:"name_en"},"Nama Prestasi(En)"),e("input",{type:"text",value:(o=this.data)==null?void 0:o.name_en,id:"name_en",className:"form-control",name:"name_en",placeholder:"Nama Prestasi(En)"})),e("div",{className:"mb-3"},e("label",{htmlFor:"student"},"Nama Mahasiswa"),e("select",{name:"student",id:"student",className:"form-control js-choices"},e("option",{value:""},"Pilih"),this.students.map(t=>{var i;return e("option",{value:t.id,selected:Object.keys(this.data).length>0&&((i=this.data)==null?void 0:i.student_id)==t.id},t.name)}))),e("div",{className:"mb-3"},e("label",{htmlFor:"achievement-group"},"Kelompok Prestasi"),e("select",{name:"achievement_group",id:"achievement-group",className:"form-control js-choices"},e("option",{value:""},"Pilih"),this.achievementGroups.map(t=>{var i;return e("option",{value:t.id,selected:Object.keys(this.data).length>0&&((i=this.data)==null?void 0:i.achievement_group_id)==t.id},t.name)}))),e("div",{className:"mb-3"},e("label",{htmlFor:"academic-period"},"Periode"),e("select",{name:"academic_period",id:"academic-period",className:"form-control js-choices"},e("option",{value:""},"Pilih"),this.academicPeriods.map(t=>{var i;return e("option",{value:t.id,selected:Object.keys(this.data).length>0&&((i=this.data)==null?void 0:i.academic_period_id)==t.id},t.name)}))),e("div",{className:"mb-3"},e("label",{htmlFor:"achievement-level"},"Tingkat Prestasi"),e("select",{name:"achievement_level",id:"achievement-level",className:"form-control js-choices"},e("option",{value:""},"Pilih"),this.achievementLevels.map(t=>{var i;return e("option",{value:t.id,selected:Object.keys(this.data).length>0&&((i=this.data)==null?void 0:i.achievement_level_id)==t.id},t.name)}))),e("div",{className:"mb-3"},e("label",{htmlFor:"rate"},"Peringkat Prestasi"),e("select",{name:"rate",id:"rate",className:"form-control"},e("option",{value:""},"Pilih"),e("option",{value:"1",selected:Object.keys(this.data).length>0&&((c=this.data)==null?void 0:c.rating)==1},"1"),e("option",{value:"2",selected:Object.keys(this.data).length>0&&((r=this.data)==null?void 0:r.rating)==2},"2"),e("option",{value:"3",selected:Object.keys(this.data).length>0&&((h=this.data)==null?void 0:h.rating)==3},"3"),e("option",{value:"4",selected:Object.keys(this.data).length>0&&((p=this.data)==null?void 0:p.rating)==4},"4"),e("option",{value:"5",selected:Object.keys(this.data).length>0&&((u=this.data)==null?void 0:u.rating)==5},"5"))),e("div",{className:"mb-3"},e("label",{htmlFor:"event-type"},"Jenis Kegiatan"),e("select",{name:"event_type",id:"event-type",className:"form-control"},e("option",{value:""},"Pilih"),e("option",{value:"1",selected:Object.keys(this.data).length>0&&((v=this.data)==null?void 0:v.event_type)==1},"Akademik"),e("option",{value:"2",selected:Object.keys(this.data).length>0&&((b=this.data)==null?void 0:b.event_type)==2},"Non-Akademik"))),e("div",{className:"mb-3"},e("label",{htmlFor:"position"},"Jabatan"),e("input",{type:"text",value:(g=this.data)==null?void 0:g.position,className:"form-control",name:"position",id:"position",placeholder:"Jabatan"}))),e("div",{className:"col-lg-6"},e("div",{className:"mb-3"},e("label",{htmlFor:"location"},"Lokasi"),e("input",{type:"text",value:(N=this.data)==null?void 0:N.location,className:"form-control",name:"location",id:"location",placeholder:"Lokasi"})),e("div",{className:"mb-3"},e("label",{htmlFor:"organizer"},"Penyelenggara"),e("input",{type:"text",className:"form-control",name:"organizer",id:"organizer",value:(f=this.data)==null?void 0:f.organizer,placeholder:"Penyelenggara"})),e("div",{className:"mb-3"},e("label",{htmlFor:""},"Tanggal Mulai Kegiatan"),e("input",{type:"text",className:"form-control flatpickr-date",name:"date_start",value:(y=this.data)==null?void 0:y.date_start})),e("div",{className:"mb-3"},e("label",{htmlFor:""},"Tanggal Akhir Kegiatan"),e("input",{type:"text",value:(_=this.data)==null?void 0:_.date_end,className:"form-control flatpickr-date",name:"date_end"})),e("div",{className:"mb-3"},e("label",{htmlFor:""},"No SK"),e("input",{type:"text",className:"form-control",placeholder:"No SK",name:"decree_number",value:(k=this.data)==null?void 0:k.decree_number})),e("div",{className:"mb-3"},e("label",{htmlFor:""},"Tanggal SK"),e("input",{type:"text",className:"form-control flatpickr-date",name:"decree_date",placeholder:"Tanggal SK",value:(P=this.data)==null?void 0:P.decree_date})),e("div",{className:"mb-3"},e("label",{htmlFor:"is_valid"},"Valid"),e("select",{name:"is_valid",id:"is_valid",className:"form-control"},e("option",{value:"true",selected:Object.keys(this.data).length>0&&((j=this.data)==null?void 0:j.is_valid)==!0},"Iya"),e("option",{value:"false",selected:Object.keys(this.data).length>0&&((F=this.data)==null?void 0:F.is_valid)==!1},"Tidak"))),e("div",{className:"mb-3"},e("label",{htmlFor:""},"Tampil Di SKPI"),e("select",{name:"is_show_skpi",id:"is_show_skpi",className:"form-control"},e("option",{value:"true",selected:Object.keys(this.data).length>0&&((x=this.data)==null?void 0:x.is_show_skpi)==!0},"Iya"),e("option",{value:"false",selected:Object.keys(this.data).length>0&&((O=this.data)==null?void 0:O.is_show_skpi)==!1},"Tidak")))),e("div",{className:"mb-3"},e("label",{for:"file",className:"form-label"},"File Pendukung"),e("br",null),e("input",{type:"file",name:"file",id:"file",className:"filepond"}),e("code",{className:""},"jpeg, jpg dan png"))),e("div",{className:"card-footer text-end"},e("router-name",{className:"btn btn-dark mx-1",name:"app.student-affair.achievement"},"Kembali"),e("button",{className:"btn btn-primary",type:"submit","data-form-loading":!0},e("i",{className:"bx bx-save"})," Simpan")))))))}async componentWillMount(){const[a,s,m,n]=await Promise.all([this.getStudents("student_status_id=A"),this.getAcademicPeriods("is_active=true"),this.getAchievementGroups(),this.getAchievementLevels()]);if(this.achievementGroups=m.data.achievementGroups,this.students=a.data.students,this.academicPeriods=s.data.academicPeriods,this.achievementLevels=n.data.achievementLevels,this.$router.params.id){const{data:o}=await L(`${d}/${this.$router.params.id}/show`,{hideSuccessNotification:!0});this.data=o.achievement,console.log(this.data.name)}}async submit(a){a.preventDefault();let s;this.$router.params.id?s=await A(`${d}/${this.$router.params.id}/update`,a.target):s=await A(`${d}`,a.target),s.status==200&&this.$router.pushState("/apps/student-affair/achievement")}}w(G,"defaultProps",{...T(["getAchievementGroups","getStudents","getAcademicPeriods","getAchievementLevels"]),table:null,data:[],achievementGroups:[],students:[],academicPeriods:[],achievementLevels:[]});export{G as default};
