var l=Object.defineProperty;var v=(d,r,u)=>r in d?l(d,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):d[r]=u;var i=(d,r,u)=>(v(d,typeof r!="symbol"?r+"":r,u),u);import{e as b,c as t,g as T,u as a}from"./index.d57021e8.js";const f="lecturer/lecture/college-class/schedule",[k,m]=a("-"),[D,c]=a("-"),[M,s]=a("-"),[w,o]=a("-"),[x,h]=a("-"),[E,p]=a("-"),[K,P]=a("0"),[A,y]=a("0"),[$,S]=a("-"),[H,_]=a("-"),[J,N]=a("-");class L extends b{render(){return this.resetData(),this.getCollegeClass(),t("div",{className:"card shadow-sm mb-3"},t("div",{className:"card-body"},t("div",{className:"row"},t("div",{className:"col-md-6"},t("table",{cellPadding:"10"},t("tr",null,t("th",null,"Periode Akademik"),t("td",null,k)),t("tr",null,t("th",null,"Program Studi"),t("td",null,D)),t("tr",null,t("th",null,"Mata Kuliah"),t("td",null,M," ")),t("tr",null,t("th",null,"Nama Kelas"),t("td",null,w)),t("tr",null,t("th",null,"Jumlah Pertemuan"),t("td",null,J)))),t("div",{className:"col-md-6"},t("table",{cellPadding:"10"},t("tr",null,t("th",null,"Sistem Perkuliahan"),t("td",null,x)),t("tr",null,t("th",null,"Peserta"),t("td",null,K,"/",E," Orang")),t("tr",null,t("th",null,"SKS"),t("td",null,A," sks")),t("tr",null,t("th",null,"Tgl. Mulai"),t("td",null,$)),t("tr",null,t("th",null,"Tgl. Selesai"),t("td",null,H)))))))}async getCollegeClass(){var e;const{status:r,data:u}=await T(`${f}/${this.props.id}`,{hideSuccessNotification:!0});if(r==200){var n=u.collegeClass;m(n.academic_period.name),c(n.study_program.education_level.code+" - "+n.study_program.name),s(n.course.code+" - "+n.course.name),o(n.name),p(n.capacity),h(((e=n==null?void 0:n.lecture_system)==null?void 0:e.name)||"-"),P((n==null?void 0:n.classParticipantCount)||"0"),y((n==null?void 0:n.credit_total)||"0"),S((n==null?void 0:n.date_start)||"-"),_((n==null?void 0:n.date_end)||"-"),N((n==null?void 0:n.number_of_meeting)||"0")}}resetData(){m("-"),c("-"),s("-"),p("-"),o("-"),h("-"),P("-"),y("-"),S("-"),_("-"),N("-")}}i(L,"defaultProps",{id:null});export{L as H};
