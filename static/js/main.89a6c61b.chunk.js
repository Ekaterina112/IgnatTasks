(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={nav:"Header_nav__1QGQa",item:"Header_item__1gBYG",activeLink:"Header_activeLink__2ANXR",bg:"Header_bg__1CH_4",homepage:"Header_homepage__1SrhS"}},,,,function(e,a,t){e.exports={canvas:"Message_canvas__DfXIL",form:"Message_form__1Tdb1",ava:"Message_ava__1NPEd",name:"Message_name__1sDu7",time:"Message_time__3nFEy",message:"Message_message__1w6u1"}},,function(e,a,t){e.exports={all:"Greeting_all__14FEN",notError:"Greeting_notError__21pgJ",error:"Greeting_error__eQWmP",button:"Greeting_button__25Dqm"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__HTItE",errorInput:"SuperInputText_errorInput__2HJM6",error:"SuperInputText_error__1Y267"}},,function(e,a,t){e.exports={name:"Affairs_name__2qT4X"}},function(e,a,t){e.exports={blue:"HW4_blue__3o5Mh",column:"HW4_column__eqpEn"}},function(e,a,t){e.exports={default:"SuperButton_default__3v85W",red:"SuperButton_red__6KwcD"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2nrJ-",spanClassName:"SuperCheckbox_spanClassName__1aN47"}},,,,,,,function(e,a,t){e.exports={App:"App_App__2QGO6"}},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/grumpy-cat.5bb062c0.jpg"},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(33),t(25)),u=t.n(o),m=t(5),i=t(3),s=t.n(i),E=t(1),d=t(7),p=t.n(d);var _=function(e){return r.a.createElement("div",{className:p.a.canvas},r.a.createElement("img",{src:e.avatar,className:p.a.ava}),r.a.createElement("div",{className:p.a.form},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.message},e.message),r.a.createElement("div",{className:p.a.time}," ",e.time," ")))},f="https://klike.net/uploads/posts/2019-07/1564314090_3.jpg",h="Kit Kat",v="Whats up, bro?",b="23:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:f,name:h,message:v,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=t(6),k=t(15),C=t.n(k);var O=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:C.a.name},e.affair.name),r.a.createElement("span",{className:C.a.name},e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var I=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(j),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),u=o[0],m=o[1],i=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"==e.priority})):"middle"===a?e.filter((function(e){return"middle"==e.priority})):"low"===a?e.filter((function(e){return"low"==e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(I,{data:i,setFilter:m,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(27),S=t(9),w=t.n(S),R=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?w.a.error:w.a.notError;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:w.a.button},"add"),r.a.createElement("span",null,c))},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(N.a)(l,2),o=c[0],u=c[1],m=Object(n.useState)(""),i=Object(N.a)(m,2),s=i[0],E=i[1],d=a.length;return r.a.createElement(R,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){""===o.trim()?E("You entered an empty value"):(alert("Hello ".concat(o.trim()," !")),t(o),u(""))},error:s,totalUsers:d})},J=t(42);var M=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:w.a.all},r.a.createElement("hr",null),"Enter Your Name",r.a.createElement(U,{users:t,addUserCallback:function(e){var a={_id:Object(J.a)(),name:e};l([a].concat(Object(y.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=t(8),L=t(13),P=t.n(L),T=function(e){e.value,e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,m=Object(H.a)(e,["value","type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(P.a.error," ").concat(u||""),s="".concat(c?P.a.errorInput:P.a.superInput," ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},m)),c&&r.a.createElement("span",{className:i},c))},A=t(16),D=t.n(A),F=t(17),G=t.n(F),W=function(e){var a=e.red,t=e.className,n=Object(H.a)(e,["red","className"]),l="".concat(a?G.a.red:G.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},K=t(18),B=t.n(K),Q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(B.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:B.a.spanClassName},l))};var X=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),m=Object(N.a)(u,2),i=m[0],s=m[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(T,{value:t,onChangeText:l,onEnter:o,error:c,className:D.a.blue}),r.a.createElement(W,{red:!0,onClick:o},"delete "),r.a.createElement(Q,{checked:i,onChangeChecked:s},"some text "),r.a.createElement(Q,{checked:i,onChange:function(e){return s(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(M,null),r.a.createElement(X,null))};var q=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:t(34),alt:"here is a cat",className:s.a.bg}),r.a.createElement("div",{className:s.a.homepage}," Please, return at",r.a.createElement("span",null,r.a.createElement(m.b,{to:Z.PRE_JUNIOR}," HOMEPAGE "))))};var $=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HELLO!"))};var z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"What's up?"))};var V=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"my CSS is beautiful, isn't it? ",String.fromCodePoint(128569)))},Z={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",MIDDLE:"/middle",SENIOR:"/senior"};var ee=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:Z.PRE_JUNIOR})}}),r.a.createElement(E.b,{path:Z.PRE_JUNIOR,render:function(){return r.a.createElement(Y,null)}}),"// add routes",r.a.createElement(E.b,{path:Z.JUNIOR,render:function(){return r.a.createElement($,null)}}),r.a.createElement(E.b,{path:Z.MIDDLE,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(E.b,{path:Z.SENIOR,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement(q,null)}})))};var ae=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:s.a.nav},r.a.createElement("span",{className:s.a.item},r.a.createElement(m.b,{to:Z.PRE_JUNIOR,activeClassName:s.a.activeLink},"PRE_JUNIOR")),r.a.createElement("span",{className:s.a.item},r.a.createElement(m.b,{to:Z.JUNIOR,activeClassName:s.a.activeLink},"JUNIOR")),r.a.createElement("span",{className:s.a.item},r.a.createElement(m.b,{to:Z.MIDDLE,activeClassName:s.a.activeLink},"MIDDLE")),r.a.createElement("span",{className:s.a.item},r.a.createElement(m.b,{to:Z.SENIOR,activeClassName:s.a.activeLink},"SENIOR"))))};var te=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(ae,null),r.a.createElement(ee,null)))};var ne=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:  "),r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.89a6c61b.chunk.js.map