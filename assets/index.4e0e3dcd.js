var n=Object.defineProperty;var m=(i,t,a)=>t in i?n(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var d=(i,t,a)=>(m(i,typeof t!="symbol"?t+"":t,a),a);import{A as p,C as u,c as e,p as l,S as c}from"./index.d57021e8.js";import{i as h}from"./datatable.4b22066f.js";import{B as f}from"./button.d257158a.js";import{m as b}from"./map-actions.609b7ae0.js";import"./jquery.4c77f39d.js";const g=()=>({url:`${p}/feeder/lecture/teaching-lecturer`,table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,id:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender(i,t,a,r){return`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${a.id}">
                    </div>`}},{title:"No",data:"id",name:"id",searchable:!1,orderable:!1,width:"5%",mRender(i,t,a,r){return r.row+r.settings._iDisplayStart+1}},{title:"Semester",data:"college_class.academic_period_id",name:"academic_period_id",mRender:function(i,t,a){return a.college_class.academic_period.name}},{title:"Nama Dosen",data:"employee.name",name:"employee_id",mRender:(i,t,a)=>` ${a.employee.front_title==null?"":a.employee.front_title+". "}
                                            ${i||"-"}${a.employee.back_title==null?"":", "+a.employee.back_title}`},{title:"Program Studi",data:"college_class.study_program",name:"study_program_id",mRender:i=>{var t,a,r;return`${(a=(t=i==null?void 0:i.education_level)==null?void 0:t.code)!=null?a:""} - ${(r=i==null?void 0:i.name)!=null?r:""}`}},{title:"Mata Kuliah",data:"college_class.course",name:"course_id",mRender:(i,t,a)=>i.code+" - "+i.name},{title:"SKS MK",data:"college_class.credit_total",name:"college_class.credit_total"},{title:"Nama Kelas",data:"college_class",name:"college_class_id",mRender:function(i,t,a){return i.name}},{title:"SKS Dosen",data:"credit_total",name:"credit_total"},{title:"Status",data:"feeder_id",name:"feeder_id",mRender:(i,t,a,r)=>{let s=`<span class="badge p-1 badge-soft-${i!=null?"success":"warning"} text-uppercase">
                        <i class="${i!=null?"ri-checkbox-circle-fill":"ri-alert-fill"} me-1 align-middle fs-16"></i>
                        ${i!=null?"Sudah Sync":"Belum Sync"}
                    </span>`;return a.feeder_description!=null&&(s+=`<br>
                            <span class="badge p-1 badge-soft-danger mt-2">
                                <i class="ri-error-warning-fill me-1 align-middle fs-16"></i>
                                ${a.feeder_description}
                            </span>
                        `),s}}],callback:()=>{},options:{}}),o="feeder/employee/teaching-lecturer/sync";class y extends u{render(){return e("div",{className:"intro-y"},e("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},e("h4",{className:"mb-sm-0"},this.meta.title)),e("div",{className:"card dt-filter-card"},e("div",{className:"card-body"},e("div",{className:"row"},e("div",{className:"col-4"},e("label",{htmlFor:""},"Program Studi"),e("select",{name:"study_program_id",id:"study-program-id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih Prodi"),this.studyPrograms.map(t=>e("option",{value:t.id},t.education_level.code," - ",t.name)))),e("div",{className:"col-4"},e("label",{htmlFor:""},"Periode Akademik"),e("select",{name:"academic_period_id",id:"academic-period-id",className:"from-control js-choices dt-filter-input"},e("option",{value:""},"Pilih Tahun Akademik"),this.academicPeriods.map(t=>e("option",{value:t.id},t.name)))),e("div",{className:"col-4"},e("label",{htmlFor:""},"Sync"),e("select",{name:"sync",id:"sync",className:"from-control js-choices dt-filter-input"},e("option",{value:"all",selected:!0},"Semua"),e("option",{value:"0"},"Sudah Sync"),e("option",{value:"1"},"Belum Sync")))))),e("div",{className:"card shadow-sm mb-3"},e("div",{className:"card-header border-0"},e("div",{className:"row"},e("div",{className:"text-sm-end text-center"},e("div",{className:"dt-actions d-inline"}),e(f,{data:{refresh:!0,create:!1,filter:!0}}),e("div",{className:"dropdown d-inline"},e("button",{className:"btn btn-primary dropdown-toggle","data-bs-toggle":"dropdown"},e("i",{className:"bx bx-sync"})," Sync Feeder"),e("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1","data-popper-placement":"bottom-start",style:"position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px);"},e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.downloadData},e("i",{className:"bx bx-download"})," Tarik Data Feeder"),e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.uploadData},e("i",{className:"bx bx-upload"})," Upload Data"),e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.updateData},e("i",{className:"bx bx-refresh"})," Update Data"),e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:this.deleteData},e("i",{className:"bx bx-trash"})," Delete Data")))))),e("div",{className:"card-body"},e("div",{className:"table-responsive table-card mb-1"},e("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))}componentDidMount(){this.table=h("#dataTable",g())}async componentWillMount(){const{data:t}=await this.getData({model:["studyPrograms"]}),a=await this.getAcademicPeriods("is_active=true");this.studyPrograms=t.studyPrograms,this.academicPeriods=a.data.academicPeriods}async downloadData(){let t,a=new FormData;a.append("act","getTeachingLecturer"),t=await l(`${o}`,a,{},!1),t.status==200&&(this.$router.reload(),this.table.ajax.reload)}async uploadData(){var t=window.checkedDataIds;let a;if($(".dt-checkbox:checked").length<1){let r=new FormData;r.append("act","uploadTeachingLecturer"),r.append("study_program_id",$("#study-program-id").val()),r.append("academic_period_id",$("#academic-period-id").val()),r.append("sync",$("#sync").val()),a=await l(`${o}`,r,{},!1)}else{let r=new FormData;r.append("act","uploadTeachingLecturer");for(const s of t)r.append("teachingLecturer[]",s);a=await l(`${o}`,r,{},!1)}a.status==200&&(this.$router.reload(),this.table.ajax.reload)}async updateData(){var t=window.checkedDataIds;let a,r=new FormData;if($(".dt-checkbox:checked").length<1)c.fire({title:"Update Feeder gagal!",text:"Anda harus memilih Dosen Ajar",icon:"error",confirmButtonColor:"#d1403b"});else{r.append("act","updateTeachingLecturer");for(const s of t)r.append("teachingLecturer[]",s);a=await l(`${o}`,r,{},!1),a.status==200&&(this.$router.reload(),this.table.ajax.reload)}}async deleteData(){var t=window.checkedDataIds;let a,r=new FormData;if($(".dt-checkbox:checked").length<1)c.fire({title:"Update Feeder gagal!",text:"Anda harus memilih Dosen Ajar",icon:"error",confirmButtonColor:"#d1403b"});else{r.append("act","deleteTeachingLecturer");for(const s of t)r.append("teachingLecturer[]",s);a=await l(`${o}`,r,{},!1),a.status==200&&(this.$router.reload(),this.table.ajax.reload)}}}d(y,"defaultProps",{...b(["getStudyPrograms","getData","getAcademicPeriods"]),table:null,studyPrograms:[],academicPeriods:[]});export{y as default};
