(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{598:function(e,t,a){"use strict";a.r(t);a(166),a(342),a(9),a(2),a(59),a(27),a(4),a(21);var r=a(0),n=a.n(r),l=a(595),i=a(39),s=a(597),c=a(596),o=a(605),m=a(606),u=a(222);function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.pageContext.data,a=t.reply,r=t.description,p=t.providers,f=t.otherCodes,E=t.spamFilters,h=Object(l.orderBy)(p,[function(e){return e.name.toLowerCase()}]),y=Object(l.orderBy)(E,[function(e){return e.name.toLowerCase()}]),v=Object(l.orderBy)(f,[function(e){return e.reply}]),N=Object(l.orderBy)([].concat(d(p),d(E)),[function(e){return e.name.toLowerCase()}]);return n.a.createElement(s.a,null,n.a.createElement(c.a,{title:a+" SMTP code"}),n.a.createElement("div",{className:"masthead"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"masthead_title"},"SMTP Code ",a),""!==r&&n.a.createElement("p",{className:"masthead_description",dangerouslySetInnerHTML:{__html:r}}),n.a.createElement(m.a,{list:N,identifierKey:"id",labelKey:"name"}))),n.a.createElement(u.a,{updateOnScroll:!0}),n.a.createElement("div",{className:"container u-push-top"},h.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"response-list-header"},"Email service providers"),n.a.createElement(o.a,{list:h,titleKey:"id",titleLabelKey:"name",titleSlugPrefix:"/provider"})),y.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"response-list-header u-push-top"},"Spam filters services"),n.a.createElement(o.a,{list:y,titleKey:"id",titleLabelKey:"name",titleSlugPrefix:"/spamfilter"})),n.a.createElement("h3",{className:"response-list-header u-push-top"},"Other SMTP codes"),n.a.createElement("div",{className:"sub-section"},n.a.createElement("ul",{className:"columns-3 columns-diamond"},v.map((function(e){return n.a.createElement("li",{key:e.reply},n.a.createElement(i.a,{to:"/code"+e.slug},e.reply))}))))))}},605:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(39),i=a(221);t.a=function(e){var t=e.list,a=e.titleLabelKey,r=e.titleKey,l=e.titleSlugPrefix,i=e.identifierPrefix,o=void 0===i?"":i;return n.a.createElement(n.a.Fragment,null,t.map((function(e){return n.a.createElement(s,{key:e[r],identifierPrefix:o,identifier:e[r],label:e[a],titleSlugPrefix:l},e.responses.map((function(t){return n.a.createElement(c,{key:t.status,data:t,code:e[r],identifierPrefix:o})})))})))};var s=function(e){var t=e.children,a=e.identifier,r=e.identifierPrefix,i=e.label,s=""+r+a,c="#"+s,o=e.titleSlugPrefix+"/"+a;return n.a.createElement("section",{className:"response-list"},n.a.createElement("h3",{className:"response-list_name",id:s},n.a.createElement("a",{href:c,className:"response-list_name-anchor"},i),n.a.createElement(l.a,{to:o,className:"response-list_name-link"},"All ",i," codes →")),n.a.createElement("div",{className:"response-list_items"},t),n.a.createElement("a",{href:"#top",className:"response-list_top"},"↑ Back to top"))},c=function(e){var t=e.data,a=e.code,r=e.identifierPrefix,l=t.status,s=t.response,c=i.codeAnchor({identifierPrefix:r,code:a,status:l}),o="#"+c;return n.a.createElement("div",{id:c,className:"response-list_item"},n.a.createElement("a",{href:o,className:"response-list_item-anchor"},n.a.createElement("span",null,"#")),n.a.createElement("p",{className:"response-label"},s))}},606:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.list,a=e.identifierKey,r=e.identifierPrefix,l=void 0===r?"":r,i=e.labelKey;return n.a.createElement("div",{className:"jump"},n.a.createElement("h4",null,"Jump to ↓"),n.a.createElement("ul",{className:"columns-3"},t.map((function(e){return n.a.createElement("li",{key:e[a]},n.a.createElement("a",{href:"#"+l+e[a]},e[i]))}))))}}}]);
//# sourceMappingURL=component---src-templates-code-js-df70002ace5b223b9273.js.map