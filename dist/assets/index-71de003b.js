import{d as g,o as r,c as u,F,r as C,u as T,t as A,a as _,b as w,e,f as b,n as v,p as $,g as S,_ as k,h as B}from"./index-19299d4b.js";const H="/da-blog/home/hill1.png",L="/da-blog/home/hill2.png",N="/da-blog/home/hill3.png",V="/da-blog/home/hill4.png",Y="/da-blog/home/hill5.png",q="/da-blog/home/tree.png",E="/da-blog/home/leaf.png",z="/da-blog/home/plant.png",G=[{title:"第一章"},{title:"第2章"},{title:"第3章"}],O={class:"blog"},P=g({__name:"blog",setup(n){return(a,c)=>(r(),u("div",O,[(r(!0),u(F,null,C(T(G),t=>(r(),u("div",{key:t.title,style:{}},A(t.title),1))),128))]))}});const h=n=>($("data-v-7a542488"),n=n(),S(),n),R={class:"a"},j=h(()=>e("div",null,[e("h1",null,"高级撞色设计")],-1)),J=[j],K=h(()=>e("div",null,[e("h1",null,"高级撞色设计")],-1)),Q=[K],U=h(()=>e("div",null,[e("h1",null,"高级撞色设计")],-1)),W=[U],X=h(()=>e("div",null,[e("h1",null,"高级撞色设计")],-1)),Z=[X],ee=g({__name:"menu",setup(n){const a=_(),c=i=>{console.log(i),a.value=i},t=()=>{a.value=""};return w(()=>{}),(i,o)=>(r(),u("div",{class:"menu",onClick:c},[e("div",R,[e("div",null,[b(P)])]),e("div",{class:v(["b",a.value=="b"&&"full"]),onMouseenter:o[0]||(o[0]=d=>c("b")),onMouseleave:t},J,34),e("div",{class:v(["c",a.value=="c"&&"full"]),onMouseenter:o[1]||(o[1]=d=>c("c")),onMouseleave:t},Q,34),e("div",{class:v(["d",a.value=="d"&&"full"]),onMouseenter:o[2]||(o[2]=d=>c("d")),onMouseleave:t},W,34),e("div",{class:v(["e",a.value=="e"&&"full"]),onMouseenter:o[3]||(o[3]=d=>c("e")),onMouseleave:t},Z,34)]))}});const oe=k(ee,[["__scopeId","data-v-7a542488"]]),l=n=>($("data-v-e39a6a8e"),n=n(),S(),n),te={class:"scoll"},se=B('<header data-v-e39a6a8e><h2 class="logo" data-v-e39a6a8e>Logo</h2><nav class="navigation" data-v-e39a6a8e><a href="#" class="active" data-v-e39a6a8e>Home</a><a href="/da-blog/test" data-v-e39a6a8e>test</a><a href="#" data-v-e39a6a8e>Service</a><a href="#" data-v-e39a6a8e>Contact</a></nav></header>',1),le={class:"parallax"},ne=l(()=>e("img",{src:L,id:"hill2"},null,-1)),ae=l(()=>e("img",{src:N,id:"hill3"},null,-1)),ie=l(()=>e("img",{src:q,id:"tree"},null,-1)),ce=l(()=>e("span",{class:"flower"},"Flower",-1)),_e=l(()=>e("span",null," Sun",-1)),de=l(()=>e("span",null," Rainbow",-1)),re=[ce,_e,de],ue=l(()=>e("img",{src:z,id:"plant"},null,-1)),pe=l(()=>e("span",{class:"iconfont icon-xiangxia"},null,-1)),ve=l(()=>e("span",{class:"iconfont icon-xiangxia"},null,-1)),he=l(()=>e("span",{class:"iconfont icon-xiangxia"},null,-1)),me=[pe,ve,he],fe={class:"sec"},ge=l(()=>e("h2",null,"Hope everything goes your way",-1)),xe=g({__name:"index",setup(n){const a=_(!0),c=_(),t=_(null),i=_(null),o=_(null),d=_(null),m=_(null),M=()=>{const s=document.body.clientHeight,f=window.pageYOffset,I=s+f,D=+new Date,x=3e3;function p(){const y=+new Date-D;window.scrollTo(0,f+s*(y/x)),p.timer=requestAnimationFrame(p),y>=x&&(window.scrollTo(0,I),cancelAnimationFrame(p.timer))}requestAnimationFrame(p)};return w(()=>{window.addEventListener("scroll",()=>{let s=window.scrollY;a.value=s==0,t.value&&(t.value.style.marginTop=s*1.5+"px"),i.value&&(i.value.style.top=s*-1.5+"px"),i.value&&(i.value.style.left=s*1.5+"px"),m.value&&(m.value.style.left=s*1.5+"px"),d.value&&(d.value.style.left=s*-1.5+"px"),o.value&&(o.value.style.top=s*.5+"px")})}),(s,f)=>(r(),u("div",te,[se,e("section",le,[e("img",{src:H,id:"hill1",ref_key:"hill1",ref:o},null,512),ne,ae,e("img",{src:V,id:"hill4",ref_key:"hill4",ref:d},null,512),e("img",{src:Y,id:"hill5",ref_key:"hill5",ref:m},null,512),ie,e("h2",{ref_key:"text",ref:t,id:"text"},re,512),e("img",{src:E,ref_key:"leaf",ref:i,id:"leaf"},null,512),ue,e("div",{ref_key:"downScollDom",ref:c,class:"downScoll",onClick:M},me,512)]),e("section",fe,[ge,b(oe)])]))}});const we=k(xe,[["__scopeId","data-v-e39a6a8e"]]);export{we as default};