(self.webpackChunkjosugoar_github_io=self.webpackChunkjosugoar_github_io||[]).push([[691],{9540:function(e,t,a){const r=a(3361),l=a(4852);for(const s of Object.keys(r)){const e=(e,t,a)=>{const r=[],n=l({},t,a);a&&((a.width||a.height)&&(n.width=a.width?a.width:parseInt(a.height)*t.width/t.height,n.height=a.height?a.height:parseInt(a.width)*t.height/t.width),a.class&&(n.class=`octicon octicon-${s} ${a.class}`,n.class.trim()),a["aria-label"]&&(n["aria-label"]=a["aria-label"],n.role="img",delete n["aria-hidden"]));for(const l of Object.keys(n))r.push(`${l}="${n[l]}"`);return r.join(" ").trim()};r[s].symbol=s;for(const t of Object.keys(r[s].heights))r[s].heights[t].options={version:"1.1",width:r[s].heights[t].width,height:parseInt(t),viewBox:`0 0 ${r[s].heights[t].width} ${t}`,class:`octicon octicon-${s}`,"aria-hidden":"true"};r[s].toSVG=function(t={}){const{height:a,width:l}=t,c=n(Object.keys(r[s].heights),a||l||16);return`<svg ${e(r[s],r[s].heights[c].options,t)}>${r[s].heights[c].path}</svg>`}}function n(e,t){return e.map((e=>parseInt(e,10))).reduce(((e,a)=>a<=t?a:e),e[0])}e.exports=r},4852:function(e){"use strict";e.exports=Object.assign},1858:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(7294),l=a(9540);var n=e=>{let{color:t,name:a}=e;return r.createElement("span",{className:"f6 my-1 ml-0"},r.createElement("span",{className:"repo-language-color",style:{backgroundColor:t}})," ",r.createElement("span",{itemProp:"programmingLanguage"},a))};var s=e=>{let{nodes:t}=e;return r.createElement("div",{className:"p-3"},r.createElement("ul",{className:"d-flex flex-wrap f6 list-style-none color-text-secondary"},t.map((e=>{let{id:t,...a}=e;return r.createElement("li",{className:"mb-2 mr-4",key:t},r.createElement(n,a))}))))};var c=e=>{let{topic:{name:t}}=e;return r.createElement("span",{className:"topic-tag f6 mb-2",title:"Topic: "+t},t)};var o=e=>{let{nodes:t}=e;return r.createElement("div",{className:"d-flex flex-wrap border-bottom border-gray-light px-3 pt-2 pb-2"},t.map(((e,a)=>{let{id:l,...n}=e;return r.createElement(r.Fragment,{key:l},r.createElement(c,n),a<t.length-1&&" ")})))};var m=e=>{let{description:t,languages:a,name:n,openGraphImageUrl:c,repositoryTopics:m,url:i,usesCustomOpenGraphImage:d}=e;return r.createElement("article",{className:"border rounded-1 box-shadow bg-gray-light my-4"},d&&r.createElement("a",{className:"overflow-hidden flex-items-center rounded-top-1 border-black-fade border-bottom d-flex position-relative",style:{maxHeight:275},href:i,target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{className:"d-block width-full",style:{maxHeight:275,objectFit:"contain"},loading:"lazy",src:c,alt:n})),r.createElement("div",{className:"px-3"},r.createElement("div",{className:"d-flex flex-justify-between my-3"},r.createElement("div",{className:"d-flex flex-auto"},r.createElement("span",{dangerouslySetInnerHTML:{__html:l.repo.toSVG({class:"color-text-primary mr-2"})},style:{marginTop:2}}),r.createElement("h1",{className:"f3 color-text-secondary text-normal lh-condensed"},r.createElement("a",{className:"text-bold",href:i,target:"_blank",rel:"noopener noreferrer"},n))))),r.createElement("div",{className:"tabnav px-3 mb-0"},r.createElement("nav",{className:"tabnav-tabs","aria-label":"Repository menu"},r.createElement("a",{"aria-current":"true",href:i,className:"tabnav-tab f6 px-2 py-1",target:"_blank",rel:"noopener noreferrer"},r.createElement("span",{dangerouslySetInnerHTML:{__html:l.code.toSVG({class:"color-text-primary"})}})," ","Code"))),r.createElement("div",{className:"border-bottom bg-white"},r.createElement("div",{className:"px-3 pt-3"},r.createElement("p",{className:"color-text-secondary mb-0"}),r.createElement("div",null,t),r.createElement("p",null)),r.createElement(o,m),r.createElement(s,a)))};var i=e=>{let{nodes:t}=e;return r.createElement("div",{className:"col-md-8",style:{margin:"auto"}},t.map((e=>{let{id:t,...a}=e;return r.createElement(m,Object.assign({key:t},a))})))};var d=e=>{let{avatarUrl:t,bio:a,login:l,name:n,url:s}=e;return r.createElement("div",{className:"flex-shrink-0 col-12 col-md-3 pt-4 position-md-sticky user-profile",style:{top:0}},r.createElement("div",{itemScope:!0,itemType:"http://schema.org/Person"},r.createElement("div",{className:"clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0"},r.createElement("div",{className:"position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0",style:{zIndex:4}},r.createElement("a",{className:"d-block",href:s,target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{className:"avatar avatar-user width-full border bg-white",style:{height:"auto"},alt:l,src:t,width:"260",height:"260"}))),r.createElement("div",{className:"vcard-names-container float-left col-10 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3",style:{position:"sticky"}},r.createElement("h1",{className:"vcard-names pl-2 pl-md-0"},r.createElement("span",{className:"vcard-fullname d-block overflow-hidden",itemProp:"name"},n),r.createElement("span",{className:"vcard-username d-block",itemProp:"additionalName"},l)))),r.createElement("div",{className:"d-flex flex-column"},r.createElement("div",{className:"d-flex flex-column d-md-block"},a&&r.createElement("div",{className:"user-profile-bio f4"},r.createElement("div",null,a))))))};var h=e=>{let{data:{github:{viewer:{pinnedItems:t,...a}}}}=e;return r.createElement("main",null,r.createElement("title",null,a.name?a.login+" ("+a.name+")":a.login),r.createElement("div",{className:"container-xl px-5 px-md-4 px-lg-5"},r.createElement("div",{className:"gutter-condensed flex-column flex-md-row d-flex mx-md-2 mx-lg-3"},r.createElement(d,a),r.createElement(i,t))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1ba5d7bbea56859c7f9f.js.map