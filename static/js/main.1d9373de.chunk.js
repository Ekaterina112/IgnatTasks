(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{101:function(e,t,a){},108:function(e,t,a){e.exports=a.p+"static/media/grumpy-cat.5bb062c0.jpg"},114:function(e,t,a){e.exports=a.p+"static/media/833.2a8ff6bb.gif"},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(101),a(83)),u=a.n(o),i=a(25),m=a(20),s=a.n(m),E=a(14),d=a(39),h=a.n(d);var f=function(e){return r.a.createElement("div",{className:h.a.canvas},r.a.createElement("img",{src:e.avatar,className:h.a.ava}),r.a.createElement("div",{className:h.a.form},r.a.createElement("div",{className:h.a.name},e.name),r.a.createElement("div",{className:h.a.message},e.message),r.a.createElement("div",{className:h.a.time}," ",e.time," ")))},p=a(12),v=a(15),b=a.n(v),_="https://klike.net/uploads/posts/2019-07/1564314090_3.jpg",g="Kit Kat",O="Whats up, bro?",k="23:00";var C=function(){var e=Object(p.c)((function(e){return e.theme}));return r.a.createElement("div",{className:b.a[e.theme]},"homeworks 1",r.a.createElement("hr",null),r.a.createElement(f,{avatar:_,name:g,message:O,time:k}))},N=a(8),j=a(63),y=a.n(j);var x=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:y.a.name},e.affair.name),r.a.createElement("span",{className:y.a.name},e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var S=function(e){var t=e.data.map((function(t){return r.a.createElement(x,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var R=function(){var e=Object(n.useState)(w),t=Object(N.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("all"),o=Object(N.a)(l,2),u=o[0],i=o[1],m=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"==e.priority})):"middle"===t?e.filter((function(e){return"middle"==e.priority})):"low"===t?e.filter((function(e){return"low"==e.priority})):e}(a,u);return r.a.createElement("div",null,"homeworks 2",r.a.createElement("hr",null),r.a.createElement(S,{data:m,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}))},I=a(43),H=a(64),L=a.n(H),T=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,c=e.error,l=e.totalUsers,o=c?L.a.error:L.a.notError,u=Object(p.c)((function(e){return e.theme}));return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",null,c),r.a.createElement("button",{onClick:n,className:b.a[u.theme]},"add"),r.a.createElement("span",null,l))},P=function(e){var t=e.users,a=e.addUserCallback,c=Object(n.useState)(""),l=Object(N.a)(c,2),o=l[0],u=l[1],i=Object(n.useState)(""),m=Object(N.a)(i,2),s=m[0],E=m[1],d=t.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){""===o.trim()?E("You entered an empty value"):(alert("Hello ".concat(o.trim()," !")),a(o),u(""))},error:s,totalUsers:d})},M=a(171);var A=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],c=t[1],l=Object(p.c)((function(e){return e.theme}));return r.a.createElement("div",{className:b.a[l.theme]},"homework 3",r.a.createElement("hr",null),"Enter Your Name",r.a.createElement(P,{users:a,addUserCallback:function(e){var t={_id:Object(M.a)(),name:e};c([t].concat(Object(I.a)(a)))}}))},W=a(19),D=a(57),J=a.n(D),U=function(e){e.value,e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,c=e.onEnter,l=e.error,o=e.className,u=e.spanClassName,i=Object(W.a)(e,["value","type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(J.a.error," ").concat(u||""),s="".concat(l?J.a.errorInput:J.a.superInput," ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&c&&c()},className:s},i)),l&&r.a.createElement("span",{className:m},l))},F=a(65),G=a.n(F),B=a(66),K=a.n(B),z=function(e){var t=e.red,a=e.className,n=Object(W.a)(e,["red","className"]),c="".concat(t?K.a.red:K.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:c},n))},Q=a(67),X=a.n(Q),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),l=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(X.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},l)),c&&r.a.createElement("span",{className:X.a.spanClassName},c))};var q=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],c=t[1],l=a?"":"error",o=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(N.a)(u,2),m=i[0],s=i[1],E=Object(p.c)((function(e){return e.theme}));return r.a.createElement("div",null,"homeworks 4",r.a.createElement("hr",null),r.a.createElement("div",{className:"".concat(G.a.column," ").concat(b.a[E.theme])},r.a.createElement(U,{value:a,onChangeText:c,onEnter:o,error:l,className:G.a.blue}),r.a.createElement(z,{red:!0,onClick:o},"delete "),r.a.createElement(Y,{checked:m,onChangeChecked:s},"some text "),r.a.createElement(Y,{checked:m,onChange:function(e){return s(e.currentTarget.checked)}})))},V=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,c=e.spanProps,l=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(N.a)(o,2),i=u[0],m=u[1],E=c||{},d=E.children,h=E.onDoubleClick,f=E.className,v=Object(W.a)(E,["children","onDoubleClick","className"]),_="".concat(s.a.entered," ").concat(f),g=Object(p.c)((function(e){return e.theme}));return r.a.createElement("div",{className:b.a[g.theme]},i?r.a.createElement(U,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),h&&h(e)},className:_},v),d||l.value))};function Z(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function $(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}Z("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,"homeworks 6",r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(V,{value:a,onChangeText:c,spanProps:{children:a?void 0:"enter text here..."}})),r.a.createElement(z,{onClick:function(){Z("editable-span-value",a)}},"save"),r.a.createElement(z,{onClick:function(){c($("editable-span-value",a))}},"restore"))};var te=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(R,null),r.a.createElement(A,null),r.a.createElement(q,null),r.a.createElement(ee,null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:a(108),alt:"here is a cat"}),r.a.createElement("div",{className:s.a.homepage}," Please, return at",r.a.createElement("span",null,r.a.createElement(i.b,{to:ze.PRE_JUNIOR}," HOMEPAGE "))))},ne=a(174),re=a(175),ce=a(169),le=function(e){var t=e.options,a=(e.onChange,e.value),n=e.onChangeOption,c=(Object(W.a)(e,["options","onChange","value","onChangeOption"]),t?t.map((function(e,t){return r.a.createElement("option",{key:t,value:e,selected:e},e)})):[]);return r.a.createElement(ne.a,{variant:"outlined"},r.a.createElement(re.a,{htmlFor:"outlined-age-native-simple"},'"click here"'),r.a.createElement(ce.a,{native:!0,value:a,onChange:function(e){n&&n(e.target.value)},label:"click here",inputProps:{name:"age",id:"age-native-simple"}},c))},oe=a(170),ue=function(e){e.type;var t=e.name,a=e.options,n=e.value,c=(e.onChange,e.onChangeOption),l=(Object(W.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.target.value)}),o=a?a.map((function(e,a){return console.log(t),r.a.createElement("label",{key:t+"-"+a},r.a.createElement(oe.a,{checked:e===n,onChange:l,value:e,color:"default",name:t}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ie=["x","y","z"];var me=function(){var e=Object(n.useState)(ie[1]),t=Object(N.a)(e,2),a=t[0],c=t[1],l=function(e){c(e)},o=Object(p.c)((function(e){return e.theme}));return r.a.createElement("div",{className:b.a[o.theme]},"homeworks 7",r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(le,{options:ie,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ue,{name:"radio",options:ie,value:a,onChangeOption:l})))},se=function(e,t){switch(t.type){case"sort":if("up"===t.payload)return Object(I.a)(e).sort((function(e,t){return e.name>t.name?1:-1}));if("down"===t.payload)return Object(I.a)(e).sort((function(e,t){return e.name<t.name?1:-1}));case"check":return Object(I.a)(e).filter((function(e){return e.age>t.payload}));default:return e}},Ee=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(n.useState)(Ee),t=Object(N.a)(e,2),a=t[0],c=t[1],l=a.map((function(e){return r.a.createElement("div",{key:e._id},"name: ".concat(e.name,",age ").concat(e.age))}));return r.a.createElement("div",null,"homeworks 8",r.a.createElement("hr",null),l,r.a.createElement("div",null,r.a.createElement(z,{onClick:function(){return c(se(Ee,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(z,{onClick:function(){return c(se(Ee,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(z,{onClick:function(){return c(se(Ee,{type:"check",payload:18}))}}," check 18")))},he=a(70),fe=a.n(he),pe=a(58),ve=a.n(pe);var be=function(){var e=Object(n.useState)(0),t=Object(N.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(N.a)(l,2),u=o[0],i=o[1],m=Object(n.useState)(!1),s=Object(N.a)(m,2),E=s[0],d=s[1],h=function(){clearInterval(a)},f=u,p=fe()().subtract(10,"days").calendar();return r.a.createElement("div",{className:ve.a.body},r.a.createElement("div",{className:ve.a.clock,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},f),E&&r.a.createElement("div",{className:ve.a.date},p),r.a.createElement(z,{onClick:function(){h();var e=window.setInterval((function(){i(fe()().format("LTS"))}),1e3);c(e)}},"start"),r.a.createElement(z,{onClick:h},"stop"))};var _e=function(){var e=Object(p.c)((function(e){return e.theme}));return r.a.createElement("div",{className:b.a[e.theme]},"homeworks 9",r.a.createElement("hr",null),r.a.createElement(be,null))},ge=a(44),Oe={isLoad:!1},ke=function(e){return{type:"WORK",isLoad:e}};var Ce=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.load})).isLoad;return r.a.createElement("div",null,"homeworks 10",r.a.createElement("hr",null),t?r.a.createElement("img",{src:a(114),alt:"here is \u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430"}):r.a.createElement("div",null,r.a.createElement(z,{onClick:function(){e(ke(!0)),setTimeout((function(){e(ke(!1))}),2e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ne=a(53),je=a.n(Ne),ye=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,c=Object(W.a)(e,["type","onChange","onChangeRange","className"]),l="".concat(je.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:l},c)))},xe=a(173);function Se(e){return"".concat(e)}var we=function(e){var t=e.onChangeRange,a=e.value;return r.a.createElement(xe.a,{style:{color:"grey",width:500},value:a,onChange:function(e,a){t&&t(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:Se})};var Re=function(){var e=Object(n.useState)(0),t=Object(N.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(100),o=Object(N.a)(l,2),u=o[0],i=o[1],m=Object(p.c)((function(e){return e.theme}));return r.a.createElement("div",{className:b.a[m.theme]},"homeworks 11",r.a.createElement("hr",null),r.a.createElement("div",{className:je.a.range},r.a.createElement("div",null,r.a.createElement("span",{className:b.a[m.theme+"-text"]},a),r.a.createElement(ye,{value:a,onChangeRange:c}),r.a.createElement("span",{className:b.a[m.theme+"-text"]},u)),r.a.createElement(we,{value:[a,u],onChangeRange:function(e){Array.isArray(e)&&(c(e[0]),i(e[1]))}})))};var Ie=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HELLO!"),r.a.createElement(me,null),r.a.createElement(de,null),r.a.createElement(_e,null),r.a.createElement(Ce,null),r.a.createElement(Re,null))},He={theme:"green",themes:["blue","red","green"]};var Le=function(){var e=Object(p.c)((function(e){return e.theme})),t=Object(p.b)();return r.a.createElement("div",{className:b.a[e.theme]},r.a.createElement("hr",null),r.a.createElement("span",{className:b.a[e.theme+"-text"]},"homeworks 12"),r.a.createElement(ue,{options:e.themes,value:e.theme,onChangeOption:function(e){t(function(e){return{type:"CHANGE_COLOR",theme:e}}(e))}}),r.a.createElement("hr",null))};var Te=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"What's up?"),r.a.createElement(Le,null))},Pe=a(89),Me=a.n(Pe).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/auth/test"}),Ae=function(e){return Me.post("",{success:e}).then((function(e){return e.data}))},We=a(176),De=a(172),Je=a(168),Ue=a(166),Fe=a(167),Ge=function(){var e=Object(n.useState)("just check ".concat(String.fromCodePoint(10084),"  and push the button")),t=Object(N.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(N.a)(l,2),u=o[0],i=o[1];return r.a.createElement("div",null,"result of response: ",a,r.a.createElement("hr",null),r.a.createElement(We.a,{control:r.a.createElement(De.a,{icon:r.a.createElement(Ue.a,null),checkedIcon:r.a.createElement(Fe.a,null),name:"checkedH",onChange:function(e){i(e.currentTarget.checked)}}),label:"thanks for tasks"}),r.a.createElement(Je.a,{onClick:function(){console.log(u),Ae(u).then((function(e){return c(e.errorText)})).catch((function(e){c(e.response.data.errorText)}))},variant:"contained",color:"secondary"},"Send request"))};var Be=function(){return r.a.createElement(Ge,null)};var Ke=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"my CSS is beautiful, isn't it? ",String.fromCodePoint(128569)),r.a.createElement(Be,null))},ze={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",MIDDLE:"/middle",SENIOR:"/senior"};var Qe=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:ze.PRE_JUNIOR})}}),r.a.createElement(E.b,{path:ze.PRE_JUNIOR,render:function(){return r.a.createElement(te,null)}}),"// add routes",r.a.createElement(E.b,{path:ze.JUNIOR,render:function(){return r.a.createElement(Ie,null)}}),r.a.createElement(E.b,{path:ze.MIDDLE,render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(E.b,{path:ze.SENIOR,render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement(ae,null)}})))};var Xe=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:s.a.nav},r.a.createElement("span",{className:s.a.item},r.a.createElement(i.b,{to:ze.PRE_JUNIOR,activeClassName:s.a.activeLink},"PRE_JUNIOR")),r.a.createElement("span",{className:s.a.item},r.a.createElement(i.b,{to:ze.JUNIOR,activeClassName:s.a.activeLink},"JUNIOR")),r.a.createElement("span",{className:s.a.item},r.a.createElement(i.b,{to:ze.MIDDLE,activeClassName:s.a.activeLink},"MIDDLE")),r.a.createElement("span",{className:s.a.item},r.a.createElement(i.b,{to:ze.SENIOR,activeClassName:s.a.activeLink},"SENIOR"))))};var Ye=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(Xe,null),r.a.createElement(Qe,null)))};var qe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:  "),r.a.createElement(Ye,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ve=a(45),Ze=Object(Ve.b)({load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WORK":return Object(ge.a)(Object(ge.a)({},e),{},{isLoad:t.isLoad});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COLOR":return Object(ge.a)(Object(ge.a)({},e),{},{theme:t.theme});default:return e}}}),$e=Object(Ve.c)(Ze),et=$e;window.store=$e,l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:et},r.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,a){e.exports={blue:"HW12_blue__3emRz","blue-text":"HW12_blue-text__3CzTf",red:"HW12_red__OGGRh","red-text":"HW12_red-text__1nXyM",green:"HW12_green__3KGBz","green-text":"HW12_green-text__3MFxR",yellow:"HW12_yellow__2IuKM","yellow-text":"HW12_yellow-text__2QSNA"}},20:function(e,t,a){e.exports={nav:"Header_nav__1QGQa",item:"Header_item__1gBYG",activeLink:"Header_activeLink__2ANXR",bg:"Header_bg__1CH_4",homepage:"Header_homepage__1SrhS",entered:"Header_entered___Dnz7"}},39:function(e,t,a){e.exports={canvas:"Message_canvas__DfXIL",form:"Message_form__1Tdb1",ava:"Message_ava__1NPEd",name:"Message_name__1sDu7",time:"Message_time__3nFEy",message:"Message_message__1w6u1"}},53:function(e,t,a){e.exports={range:"SuperRange_range__bVP-S"}},57:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__HTItE",errorInput:"SuperInputText_errorInput__2HJM6",error:"SuperInputText_error__1Y267"}},58:function(e,t,a){e.exports={body:"Clock_body__1FYQZ",clock:"Clock_clock__2lbzL",date:"Clock_date__2Ry9y",btn:"Clock_btn__1ZjPV"}},63:function(e,t,a){e.exports={name:"Affairs_name__2qT4X"}},64:function(e,t,a){e.exports={all:"Greeting_all__14FEN",notError:"Greeting_notError__21pgJ",error:"Greeting_error__eQWmP",button:"Greeting_button__25Dqm"}},65:function(e,t,a){e.exports={blue:"HW4_blue__3o5Mh",column:"HW4_column__eqpEn"}},66:function(e,t,a){e.exports={default:"SuperButton_default__3v85W",red:"SuperButton_red__6KwcD",spanSix:"SuperButton_spanSix__1Tfj3"}},67:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2nrJ-",spanClassName:"SuperCheckbox_spanClassName__1aN47"}},83:function(e,t,a){e.exports={App:"App_App__2QGO6"}},96:function(e,t,a){e.exports=a(132)}},[[96,1,2]]]);
//# sourceMappingURL=main.1d9373de.chunk.js.map