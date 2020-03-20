(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{601:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(597),i=t(596),l=t(607),o=t(609);a.default=function(){return r.a.createElement(s.a,{invertHeader:!0},r.a.createElement(i.a,{title:"404: Page not found"}),r.a.createElement("div",{className:"container u-push-top"},r.a.createElement("h2",{className:"u-center"},"ಥ_ಥ",r.a.createElement("br",null),"This page has gone missing."),r.a.createElement("div",{className:"divider u-push-top"}),r.a.createElement(o.a,null),r.a.createElement(l.a,null)))}},607:function(e,a,t){"use strict";t(21);var n=t(608),r=t(0),s=t.n(r),i=t(39),l=t(595),o=t(221);a.a=function(){var e=n.data;return e=o.flatten(e.allEmailProvidersJson),e=Object(l.orderBy)(e,[function(e){return e.name.toLowerCase()}]),s.a.createElement("section",{className:"list-section"},s.a.createElement("div",{className:"list-section_title"},s.a.createElement("h3",null,"Email providers")),s.a.createElement("div",{className:"list-section_content"},s.a.createElement("p",null,"View SMTP responses for a specific email service provider."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},e.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(i.a,{to:"/provider/"+e.id},e.name))})))))}},608:function(e){e.exports=JSON.parse('{"data":{"allEmailProvidersJson":{"edges":[{"node":{"name":"Google","id":"google","slug":"/google"}},{"node":{"name":"Verizon","id":"verizon","slug":"/verizon"}},{"node":{"name":"AT&T","id":"att","slug":"/att"}},{"node":{"name":"Comcast","id":"comcast","slug":"/comcast"}},{"node":{"name":"Apple","id":"apple","slug":"/apple"}},{"node":{"name":"Mail.ru","id":"mailru","slug":"/mailru"}},{"node":{"name":"Microsoft","id":"microsoft","slug":"/microsoft"}},{"node":{"name":"Yandex","id":"yandex","slug":"/yandex"}},{"node":{"name":"Zoho","id":"zoho","slug":"/zoho"}},{"node":{"name":"Rambler","id":"rambler","slug":"/rambler"}}]}}}')},609:function(e,a,t){"use strict";var n=t(610),r=t(0),s=t.n(r),i=t(39),l=t(595),o=t(221);a.a=function(){var e=n.data;return e=o.flatten(e.allCodesJson),e=Object(l.orderBy)(e,[function(e){return e.reply}]),s.a.createElement("section",{className:"list-section"},s.a.createElement("div",{className:"list-section_title"},s.a.createElement("h3",null,"SMTP codes")),s.a.createElement("div",{className:"list-section_content"},s.a.createElement("h4",{className:"code-title"},"4.X.X Persistent transient failure"),s.a.createElement("p",null,"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},c(e,4).map((function(e){return d(e)}))),s.a.createElement("h4",{className:"code-title u-push-top"},"5.X.X permanent error"),s.a.createElement("p",null,"The mail server has encounted a permanent error. These errors will result in the SMTP connection being dropped. Re-sending will usually produce the same result."),s.a.createElement("ul",{className:"columns-3 columns-diamond"},c(e,5).map((function(e){return d(e)})))))};var c=function(e,a){return Object(l.filter)(e,(function(e){return Object(l.startsWith)(e.reply,a)}))},d=function(e){return s.a.createElement("li",{key:e.reply},s.a.createElement(i.a,{to:"/code/"+e.reply},e.reply))}},610:function(e){e.exports=JSON.parse('{"data":{"allCodesJson":{"edges":[{"node":{"id":"6ff34f9d-afb4-51cb-9ee2-cbfa81606158","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":421,"slug":"/421"}},{"node":{"id":"d5e00cb0-614c-50f5-9c89-74266cbd36b9","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":422,"slug":"/422"}},{"node":{"id":"27a838f2-6cd1-5a20-927b-a9d5449d5e7c","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":450,"slug":"/450"}},{"node":{"id":"fbe89a02-deff-5f06-a7c4-230216957bb7","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":451,"slug":"/451"}},{"node":{"id":"7b657fa1-ce18-59fc-8a7e-c81a690a5b29","description":"The mail server encountered a temporary failure. If the command is repeated without any change, it might be completed. Mail servers can use temporary failures like this to keep untrusted senders at bay.","reply":452,"slug":"/452"}},{"node":{"id":"cd652226-f5dc-51b2-8bb1-2e9d2cb2098c","description":"","reply":501,"slug":"/501"}},{"node":{"id":"76e1b796-0d43-576a-8d51-23f2e3e9aed9","description":"The transaction failed permanently. The server will not try to send the message again. The email was returned to you likely because the intended recipient\'s account has been suspended or deactivated.","reply":540,"slug":"/540"}},{"node":{"id":"e76b2378-9135-51a9-ae41-a5678435878c","description":"The transaction failed permanently. The server will not try to send the message again. ","reply":552,"slug":"/552"}},{"node":{"id":"14f5138c-e369-5cb0-8b33-41bf62236143","description":"The transaction failed permanently. The server will not try to send the message again. ","reply":553,"slug":"/553"}},{"node":{"id":"7858c1e9-591e-5c5f-b1ee-b9b014fc76f7","description":"The transaction failed permanently. The server will not try to send the message again. ","reply":554,"slug":"/554"}},{"node":{"id":"652f06df-7aea-535d-a62f-e9422c41368c","description":"The transaction failed permanently. The server will not try to send the message again. This is used as a general error code, so there are many reasons why you could be seeing it.<br><br>It’s common for email service providers to add a status code (5.1.1) after the SMTP reply code (smtp;550) for additional categorization of the issue.","reply":550,"slug":"/550"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-404-js-95a189a1e198a3d989b5.js.map