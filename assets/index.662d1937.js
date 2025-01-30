var o=Object.defineProperty;var m=(s,e,t)=>e in s?o(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var c=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{A as n,a as u,C as b,c as a,g as p,u as l}from"./index.d57021e8.js";import{i as h}from"./datatable.4b22066f.js";import"./jquery.4c77f39d.js";import{m as g}from"./map-actions.609b7ae0.js";const v=s=>({url:n+"/lecture/transcript",table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,id:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender:(e,t,i,r)=>`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${i.id}">
                    </div>`},{title:"No",data:"id",name:"id",searchable:!1,orderable:!1,width:"5%",mRender:(e,t,i,r)=>r.row+r.settings._iDisplayStart+1},{title:"Program Studi",data:"studyProgram",name:"studyProgram",mRender:function(e,t,i){return e}},{title:"Angkatan",data:"academicYear",name:"academicYear"},{title:"Periode Akademik",data:"periodName",name:"periodName"},{title:"Total Mahasiswa",data:"allStudent",name:"allStudent"},{title:"Total Transkrip",data:"totalStudent",name:"totalStudent"},{title:"",data:"id",name:"id",searchable:!1,orderable:!1,sClass:"text-center nowrap",mRender:(e,t,i,r)=>{var d="";return u().includes("update-transcripts")&&(d+=`<button type="button" class="btn btn-outline-primary btn-sm mx-1" data-toggle="edit" data-id="${i.id}" data-year="${i.idYear}"><i class="bx bx-edit-alt"></i></button>`),d}}],callback:()=>{$('button[data-toggle="edit"]').unbind().on("click",function(e){e.preventDefault(),s($(this).data("id"),$(this).data("year"))})}});l("Tambah Aktivitas Mahasiswa");l("");const y="lecture/transcript";class f extends b{render(){var e,t;return a("div",{className:"intro-y"},a("div",{className:"row"},a("div",{className:"col-12"},a("div",{className:"page-title-box d-sm-flex align-items center justify-content-between"},a("h4",{className:"mb-sm-0"},(e=this.meta.title)!=null?e:"Untitled Page"),a("div",{className:"page-title-right"},a("div",{className:"breadcrumb"},a("li",{className:"breadcrumb-item"},a("router-link",{link:"apps.dashboard"},"Dashboard")),a("li",{className:"breadcrumb-item"},"Perkuliahan"),a("li",{className:"breadcrumb-item active"},(t=this.meta.title)!=null?t:"Untitled Page"))))),a("div",{className:"col-12"},a("div",{className:"card"},a("div",{className:"card-body"},a("div",{className:"col-12 mb-3"},a("label",{htmlFor:""},"Program Studi"),a("select",{name:"study_program",className:"from-control js-choices dt-filter-input"},a("option",{value:""},"Pilih Prodi"),this.studyPrograms.map(i=>a("option",{value:i.id},i.education_level.code," - ",i.name)))),a("div",{className:"col-12"},a("label",{htmlFor:""},"Periode Angkatan"),a("select",{name:"academic_year",className:"from-control js-choices dt-filter-input"},a("option",{value:""},"Pilih Angkatan"),this.academicYears.map(i=>a("option",{value:i.id},i.name))))))),a("div",{className:"col-12"},a("div",{className:"card"},a("div",{className:"card-header border-0"}),a("div",{className:"card-body"},a("div",{className:"table-responsive table-card mb-1"},a("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))))))}componentDidMount(){this.table=h("#dataTable",v(this.editData))}async componentWillMount(){const{data:e}=await this.getData({model:["studyPrograms"]}),t=await this.getAcademicPeriods("is_active=true"),i=await this.getAcademicYears();this.studyPrograms=e.studyPrograms,this.academicPeriods=t.data.academicPeriods,this.academicYears=i.data.academicYears}async editData(e,t){(await p(`${y}/${e}/${t}`)).status==200&&(this.$router.reload(),this.table.ajax.reload())}}c(f,"defaultProps",{...g(["getStudyPrograms","getData","getAcademicPeriods","getAcademicYears"]),table:null,studyPrograms:[],academicPeriods:[],academicYears:[],activityTypes:[],activeAcademicPeriod:null});export{f as default};
