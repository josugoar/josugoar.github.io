(self.webpackChunkjosugoar_github_io=self.webpackChunkjosugoar_github_io||[]).push([[691],{5100:function(e,t,a){for(var r=a(5364),n=a(6494),l=function(){var e=i[c],t=function(t,a,r){var l=[],c=n({},a,r);r&&((r.width||r.height)&&(c.width=r.width?r.width:parseInt(r.height)*a.width/a.height,c.height=r.height?r.height:parseInt(r.width)*a.height/a.width),r.class&&(c.class="octicon octicon-".concat(e," ").concat(r.class),c.class.trim()),r["aria-label"]&&(c["aria-label"]=r["aria-label"],c.role="img",delete c["aria-hidden"]));for(var i=0,o=Object.keys(c);i<o.length;i++){var s=o[i];l.push("".concat(s,'="').concat(c[s],'"'))}return l.join(" ").trim()};r[e].symbol=e;for(var a=0,l=Object.keys(r[e].heights);a<l.length;a++){var s=l[a];r[e].heights[s].options={version:"1.1",width:r[e].heights[s].width,height:parseInt(s),viewBox:"0 0 ".concat(r[e].heights[s].width," ").concat(s),class:"octicon octicon-".concat(e),"aria-hidden":"true"}}r[e].toSVG=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.height,l=a.width,c=o(Object.keys(r[e].heights),n||l||16);return"<svg ".concat(t(r[e],r[e].heights[c].options,a),">").concat(r[e].heights[c].path,"</svg>")}},c=0,i=Object.keys(r);c<i.length;c++)l();function o(e,t){return e.map((function(e){return parseInt(e,10)})).reduce((function(e,a){return a<=t?a:e}),e[0])}e.exports=r},2339:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(5100),c=function(e){var t=e.color,a=e.name;return n.createElement("span",{className:"f6 my-1 ml-0"},n.createElement("span",{className:"repo-language-color",style:{backgroundColor:t}})," ",n.createElement("span",{itemProp:"programmingLanguage"},a))},i=function(e){var t=e.nodes;return n.createElement("div",{className:"p-3"},n.createElement("ul",{className:"d-flex flex-wrap f6 list-style-none text-gray"},t.map((function(e){var t=e.id,a=r(e,["id"]);return n.createElement("li",{className:"mb-2 mr-4",key:t},n.createElement(c,a))}))))},o=function(e){var t=e.topic.name;return n.createElement("span",{className:"topic-tag f6 mb-2",title:"Topic: "+t},t)},s=function(e){var t=e.nodes;return n.createElement("div",{className:"d-flex flex-wrap border-bottom border-gray-light px-3 pt-2 pb-2"},t.map((function(e){var t=e.id,a=r(e,["id"]);return n.createElement(o,Object.assign({key:t},a))})))},m=function(e){var t=e.description,a=e.languages,r=e.name,c=e.openGraphImageUrl,o=e.repositoryTopics,m=e.url,d=e.usesCustomOpenGraphImage;return n.createElement("article",{className:"border rounded-1 box-shadow bg-gray-light mb-4"},d&&n.createElement("a",{className:"overflow-hidden flex-items-center rounded-top-1 border-black-fade border-bottom d-flex position-relative",style:{maxHeight:275},href:m,target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{className:"d-block width-full",loading:"lazy",src:c,alt:r,width:640})),n.createElement("div",{className:"px-3"},n.createElement("div",{className:"d-flex flex-justify-between my-3"},n.createElement("div",{className:"d-flex flex-auto"},n.createElement("span",{dangerouslySetInnerHTML:{__html:l.repo.toSVG({class:"text-gray-dark mr-2"})},style:{marginTop:2}}),n.createElement("h1",{className:"f3 text-gray text-normal lh-condensed"},n.createElement("a",{className:"text-bold",href:m,target:"_blank",rel:"noopener noreferrer"},r))))),n.createElement("div",{className:"tabnav px-3 mb-0"},n.createElement("nav",{className:"tabnav-tabs","aria-label":"Repository menu"},n.createElement("a",{"aria-current":"true",href:m,className:"tabnav-tab f6 px-2 py-1",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{dangerouslySetInnerHTML:{__html:l.code.toSVG({class:"text-gray-dark"})}})," ","Code"))),n.createElement("div",{className:"border-bottom bg-white"},n.createElement("div",{className:"px-3 pt-3"},n.createElement("p",{className:"text-gray mb-0"}),n.createElement("div",null,t),n.createElement("p",null)),n.createElement(s,o),n.createElement(i,a)))},d=function(e){var t=e.nodes;return n.createElement("div",{className:"col-md-8 col-lg-7 py-4",style:{margin:"auto"}},t.map((function(e){var t=e.id,a=r(e,["id"]);return n.createElement(m,Object.assign({key:t},a))})))},h=function(e){var t=e.avatarUrl,a=e.bio,r=e.login,l=e.name,c=e.url;return n.createElement("div",{className:"flex-shrink-0 col-12 col-md-3 pt-4 position-md-sticky",style:{height:"100%",top:0}},n.createElement("div",{itemScope:!0,itemType:"http://schema.org/Person"},n.createElement("div",{className:"clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0"},n.createElement("div",{className:"position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0",style:{zIndex:4}},n.createElement("a",{className:"d-block",href:c,target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{className:"avatar avatar-user width-full border bg-white",style:{height:"auto"},alt:r,src:t,width:"260",height:"260"}))),n.createElement("div",{className:"vcard-names-container float-left col-10 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3",style:{position:"sticky"}},n.createElement("h1",{className:"vcard-names pl-2 pl-md-0"},n.createElement("span",{className:"vcard-fullname d-block overflow-hidden",itemProp:"name"},l),n.createElement("span",{className:"vcard-username d-block",itemProp:"additionalName"},r)))),n.createElement("div",{className:"d-flex flex-column"},n.createElement("div",{className:"d-flex flex-column d-md-block"},a&&n.createElement("div",{className:"user-profile-bio f4"},n.createElement("div",null,a))))))},u=function(e){var t=e.data.github.viewer,a=t.pinnedItems,l=r(t,["pinnedItems"]);return n.createElement("main",null,n.createElement("title",null,l.name?l.login+" ("+l.name+")":l.login),n.createElement("div",{className:"container-xl px-3 px-md-4 px-lg-5"},n.createElement("div",{className:"gutter-condensed gutter-lg flex-column flex-md-row d-flex"},n.createElement(h,l),n.createElement(d,a))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a0db73dda3731d6edeee.js.map