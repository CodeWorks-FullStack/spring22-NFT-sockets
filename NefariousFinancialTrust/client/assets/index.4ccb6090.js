import{r as j,c as y,a as p,o as d,b as _,d as s,e as g,F as B,w as A,f as E,t as m,g as T,h as V,i as H,j as U,k as z,S as $,l as M,p as S,m as C,n as K}from"./vendor.429513e6.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}};Y();const i=j({user:{},account:{},campaigns:[],campaign:null,donations:[],myDonations:[]});var v=(n,e)=>{for(const[t,o]of e)n[t]=o;return n};const F={name:"App",setup(){return{appState:y(()=>i)}}};function W(n,e,t,o,a,r){const c=p("Navbar"),l=p("router-view");return d(),_(B,null,[s("header",null,[g(c)]),s("main",null,[g(l)])],64)}var G=v(F,[["render",W]]);const Q={props:{campaign:{type:Object,required:!0}},setup(n){return{hasDonated:y(()=>!!i.myDonations.find(t=>t.campaignId==n.campaign.id))}}},Z={class:"col-md-4 mb-3"},J={class:"bg-light shadow rounded p-2"},X={key:0,class:"mdi mdi-star text-warning"},ee={class:"clip-text mt-2"},te={class:"m-0"},ne={class:"d-flex mt-4 align-items-center"},oe=["src","alt"],ae={class:"ms-2"};function se(n,e,t,o,a,r){const c=p("router-link");return d(),_("div",Z,[g(c,{to:{name:"CampaignPage",params:{id:t.campaign.id}}},{default:A(()=>[s("div",J,[s("h1",null,[E(m(t.campaign.title)+" ",1),o.hasDonated?(d(),_("i",X)):T("",!0)]),s("p",ee,m(t.campaign.description),1),s("h5",te,"Goal: $"+m(t.campaign.goal),1),s("div",ne,[s("img",{src:t.campaign.creator.picture,alt:t.campaign.creator.picture},null,8,oe),s("h6",ae,m(t.campaign.creator.name),1)])])]),_:1},8,["to"])])}var re=v(Q,[["render",se],["__scopeId","data-v-88b2db6a"]]),ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re});const ie={props:{donation:{type:Object,required:!0}},setup(){return{}}},ue={class:"row"},le={class:"col"},de={class:"d-flex align-items-center"},_e=["src","alt"],me={class:"ms-2 pe-5 border-end border-dark"},pe={class:"col"},ge={class:"d-flex align-items-center amount"};function he(n,e,t,o,a,r){return d(),_("div",ue,[s("div",le,[s("div",de,[s("img",{src:t.donation.donor.picture,alt:t.donation.donor.name},null,8,_e),s("h6",me,m(t.donation.donor.name),1)])]),s("div",pe,[s("div",ge,[s("h6",null,"$"+m(t.donation.amount),1)])])])}var fe=v(ie,[["render",he],["__scopeId","data-v-53873b25"]]),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe});const D=window.location.origin.includes("localhost"),P=D?"http://localhost:3000":"",be="dev-geue0lhy.us.auth0.com",ye="https://mark-dev.com",we="NM80zhquib2VaNIlqci7Zt6tgu7BwUTx",xe="modulepreload",O={},Ae="/",w=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${Ae}${o}`,o in O)return;O[o]=!0;const a=o.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":xe,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((l,q)=>{c.addEventListener("load",l),c.addEventListener("error",q)})})).then(()=>e())};function ke(n){switch(n){case"./pages/AboutPage.vue":return w(()=>import("./AboutPage.6949892b.js"),["assets/AboutPage.6949892b.js","assets/vendor.429513e6.js"]);case"./pages/AccountPage.vue":return w(()=>import("./AccountPage.5169ea10.js"),["assets/AccountPage.5169ea10.js","assets/vendor.429513e6.js"]);case"./pages/CampaignPage.vue":return w(()=>import("./CampaignPage.e5ea2414.js"),["assets/CampaignPage.e5ea2414.js","assets/CampaignPage.3bc1ef29.css","assets/vendor.429513e6.js","assets/CampaignsService.a5e76767.js"]);case"./pages/HomePage.vue":return w(()=>import("./HomePage.f7c56097.js"),["assets/HomePage.f7c56097.js","assets/vendor.429513e6.js","assets/CampaignsService.a5e76767.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}function x(n){return()=>ke(`./pages/${n}.vue`)}const Ee=[{path:"/",name:"Home",component:x("HomePage")},{path:"/about",name:"About",component:x("AboutPage")},{path:"/campaign/:id",name:"CampaignPage",component:x("CampaignPage")},{path:"/account",name:"Account",component:x("AccountPage"),beforeEnter:U}],I=V({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:H(),routes:Ee});function b(n,e){if(D)console[n](`[${n}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(n){case"log":case"assert":return}console[n](`[${n}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const h={log(){b("log",arguments)},error(){b("error",arguments)},warn(){b("warn",arguments)},assert(){b("assert",arguments)},trace(){b("trace",arguments)}},f=z.create({baseURL:P,timeout:8e3});class Te{async getAccount(){try{const e=await f.get("/account");i.account=e.data}catch(e){h.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const $e=new Te;class Se{async createDonation(e){const t=await f.post("api/donations",e),o=i.donations.findIndex(r=>r.id==t.data.id);o!=-1?i.donations.splice(o,1,t.data):i.donations.push(t.data);const a=i.myDonations.findIndex(r=>r.id==t.data.id);a!=-1?i.myDonations.splice(a,1,t.data):i.myDonations.push(t.data)}async getDonationsByAccount(){const e=await f.get("account/donations");i.myDonations=e.data}}const Ce=new Se;class De{static async confirm(e="Are you sure?",t="You won't be able to revert this!",o="warning",a="Yes, delete it!"){try{return!!(await $.fire({title:e,text:t,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:a})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",o="top-end",a=3e3,r=!0){$.fire({title:e,icon:t,position:o,timer:a,timerProgressBar:r,toast:!0,showConfirmButton:!1})}}const Pe={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Oe{constructor(e=!1,t=P){}on(e,t){var o;return(o=this.socket)==null||o.on(e,t.bind(this)),this}onConnected(e){h.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){h.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(Pe.authenticate,e)}onError(e){h.error("[SOCKET_ERROR]",e)}enqueue(e,t){h.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){h.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class Ie extends Oe{constructor(){super();this.on("error",this.onError)}onError(e){De.toast(e.message,"error")}}const N=new Ie,u=M({domain:be,clientId:we,audience:ye,useRefreshTokens:!0,onRedirectCallback:n=>{I.push(n&&n.targetUrl?n.targetUrl:window.location.pathname)}});u.on(u.AUTH_EVENTS.AUTHENTICATED,async function(){f.defaults.headers.authorization=u.bearer,f.interceptors.request.use(Ne),i.user=u.user,await $e.getAccount(),N.authenticate(u.bearer),await Ce.getDonationsByAccount()});async function Ne(n){if(!u.isAuthenticated)return n;const e=u.identity.exp*1e3,t=e<Date.now(),o=e<Date.now()+1e3*60*60*12;return t?await u.loginWithPopup():o&&(await u.getTokenSilently(),f.defaults.headers.authorization=u.bearer,N.authenticate(u.bearer)),n}const Le={setup(){return{user:y(()=>i.user),account:y(()=>i.account),async login(){u.loginWithPopup()},async logout(){u.logout({returnTo:window.location.origin})}}}},L=n=>(S("data-v-f7b5cf20"),n=n(),C(),n),Re={class:"navbar-text"},qe={key:1,class:"dropdown my-2 my-lg-0"},je={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Be={key:0},Ve=["src"],He={class:"mx-3 text-success lighten-30"},Ue={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},ze=L(()=>s("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),Me=L(()=>s("i",{class:"mdi mdi-logout"},null,-1)),Ke=E(" logout "),Ye=[Me,Ke];function Fe(n,e,t,o,a,r){const c=p("router-link");return d(),_("span",Re,[o.user.isAuthenticated?(d(),_("div",qe,[s("div",je,[o.account.picture?(d(),_("div",Be,[s("img",{src:o.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,Ve),s("span",He,m(o.account.name),1)])):T("",!0)]),s("div",Ue,[g(c,{to:{name:"Account"}},{default:A(()=>[ze]),_:1}),s("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...l)=>o.logout&&o.logout(...l))},Ye)])])):(d(),_("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...l)=>o.login&&o.login(...l))}," Login "))])}var We=v(Le,[["render",Fe],["__scopeId","data-v-f7b5cf20"]]),Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:We});const Qe={setup(){return{}}},k=n=>(S("data-v-5d969976"),n=n(),C(),n),Ze={class:"navbar navbar-expand-lg navbar-dark bg-dark px-3"},Je=k(()=>s("div",{class:"d-flex align-items-center"},[s("h1",null,"N"),s("small",null,"efarious"),s("h1",null,"F"),s("small",null,"inancial"),s("h1",null,"T"),s("small",null,"rust")],-1)),Xe=k(()=>s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1)),et={class:"collapse navbar-collapse",id:"navbarText"},tt=k(()=>s("ul",{class:"navbar-nav me-auto"},null,-1));function nt(n,e,t,o,a,r){const c=p("router-link"),l=p("Login");return d(),_("nav",Ze,[g(c,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:A(()=>[Je]),_:1}),Xe,s("div",et,[tt,g(l)])])}var ot=v(Qe,[["render",nt],["__scopeId","data-v-5d969976"]]),at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ot});function st(n){Object.entries({"./components/Campaign.vue":ce,"./components/Donation.vue":ve,"./components/Login.vue":Ge,"./components/Navbar.vue":at}).forEach(([t,o])=>{const a=o.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");n.component(a,o.default)})}const R=K(G);st(R);R.use(I).mount("#app");export{i as A,De as P,v as _,f as a,Ce as d,h as l};
