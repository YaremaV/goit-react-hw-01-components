(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22,"color":"#A52A2A"},{"id":"id-2","label":".pdf","percentage":4,"color":"#FFFF00"},{"id":"id-3","label":".mp3","percentage":17,"color":"#00FFFF"},{"id":"id-4","label":".psd","percentage":47,"color":"#FF00FF"},{"id":"id-5","label":".pdf","percentage":10,"color":"#00FF00"}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,c,a){},,function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){"use strict";a.r(c);var t=a(1),n=a.n(t),s=a(4),i=a.n(s),r=(a(12),a(0)),l=function(e){var c=e.name,a=e.tag,t=e.location,n=e.avatar,s=e.followers,i=e.views,l=e.likes;return Object(r.jsxs)("div",{className:"profile",children:[Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("img",{src:n,alt:n,className:"avatar"}),Object(r.jsx)("p",{className:"name",children:c}),Object(r.jsxs)("p",{className:"tag",children:["@",a]}),Object(r.jsx)("p",{className:"location",children:t})]}),Object(r.jsxs)("ul",{className:"stats",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"label",children:"Followers"}),Object(r.jsx)("span",{className:"quantity",children:s})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"label",children:"Views"}),Object(r.jsx)("span",{className:"quantity",children:i})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"label",children:"Likes"}),Object(r.jsx)("span",{className:"quantity",children:l})]})]})]})};a(14);function d(e){var c=e.stats;return Object(r.jsxs)("section",{className:"statistics",children:[Object(r.jsx)("h2",{className:"title",children:"Upload stats"}),Object(r.jsx)("ul",{className:"stat-list",children:c.map((function(e){return Object(r.jsxs)("li",{className:"item",style:{backgroundColor:e.color},children:[Object(r.jsx)("span",{className:"label",children:e.label}),Object(r.jsxs)("span",{className:"percentage",children:[e.percentage,"%"]})]},e.id)}))})]})}a(15);function o(e){var c=e.avatar,a=e.name,t=e.isOnline;e.id;return Object(r.jsxs)("li",{className:"FriendItem",children:[Object(r.jsx)("span",{className:"status",children:t}),Object(r.jsx)("img",{className:"FriendAvatar",src:c,alt:c,width:"75"}),Object(r.jsx)("p",{className:"name",children:a})]})}a(16);function b(e){var c=e.friends;return Object(r.jsx)("ul",{className:"friend-list",children:c.map((function(e){return Object(r.jsx)(o,{avatar:e.avatar,name:e.name,isOnline:e.isOnline},e.id)}))})}function j(e){e.id;var c=e.type,a=e.amount,t=e.currency;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:a}),Object(r.jsx)("td",{children:t})]})}a(17);function u(e){var c=e.items;return Object(r.jsxs)("table",{className:"transaction-history",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Currency"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsx)(j,{type:e.type,amount:e.amount,currency:e.currency},e.id)}))})]})}var p=a(2),m=a(5),f=a(6),h=a(7),O=(a(18),function(e){var c=e.children;return Object(r.jsx)("div",{className:"Container",children:c})}),y=function(e){var c=e.children;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(O,{children:c})})};function x(){return Object(r.jsxs)(y,{children:[Object(r.jsx)(l,{name:p.name,tag:p.tag,location:p.location,avatar:p.avatar,stats:p.stats,followers:p.stats.followers,views:p.stats.views,likes:p.stats.likes}),Object(r.jsx)(d,{title:"Upload stats",stats:m}),Object(r.jsx)(b,{friends:f}),Object(r.jsx)(u,{items:h})]})}a(19);i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d51656af.chunk.js.map