import{s as i,B as l,a as m,o,b as c,d as a,F as p,q as f,A as u}from"./vendor.429513e6.js";import{_ as g,A as v,l as _,P as b}from"./index.82ede532.js";import{c as B}from"./CampaignsService.366b614c.js";const C={name:"Home",setup(){const r=i(""),e=i([]);return l(()=>{let t=v.campaigns;r.value&&(t=t.filter(s=>s.status==r.value)),e.value=t}),l(async()=>{try{await B.getCampaigns()}catch(t){_.error(t),b.toast(t.message,"error")}}),{filterBy:r,filteredList:e}}},k={class:"container-fluid"},y={class:"row p-2"},q={class:"col-md-2"},w={class:"row p-2"};function x(r,e,t,s,A,h){const d=m("Campaign");return o(),c("div",k,[a("div",y,[a("div",q,[a("button",{class:"btn btn-info square-right",onClick:e[0]||(e[0]=n=>s.filterBy="")}," All "),a("button",{class:"btn btn-success square-right",onClick:e[1]||(e[1]=n=>s.filterBy="open")}," Open "),a("button",{class:"btn btn-danger square-left",onClick:e[2]||(e[2]=n=>s.filterBy="closed")}," Closed ")])]),a("div",w,[(o(!0),c(p,null,f(s.filteredList,n=>(o(),u(d,{key:n.id,campaign:n},null,8,["campaign"]))),128))])])}var S=g(C,[["render",x]]);export{S as default};
