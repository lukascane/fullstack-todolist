(this["webpackJsonpLukasz Trzcinski"]=this["webpackJsonpLukasz Trzcinski"]||[]).push([[0],{202:function(e,t){},208:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=208},211:function(e,t){},213:function(e,t){},234:function(e,t){},236:function(e,t){},264:function(e,t){},266:function(e,t){},267:function(e,t){},272:function(e,t){},274:function(e,t){},280:function(e,t){},282:function(e,t){},301:function(e,t){},313:function(e,t){},316:function(e,t){},330:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(156),s=n.n(r),o=(n(163),n(8)),i=n(17),l=n(4),j=n(158),d=Object(a.createContext)(null),u=n(157),b=n(0);function h(e){var t=e.children,n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],s=c[1],i={todoList:r,onSubmitTodo:function(e,t,n,a,c){e.preventDefault(),s((function(e){var r=1;e.length>0&&(r=e.slice(-1)[0].id+1),e.forEach((function(e,t){return r=t?t+1:1}));var s={id:r,todo:t,date:n,category:a,desc:c};return[].concat(Object(j.a)(e),[s])}))},deleteTodo:function(e){s((function(t){return t.filter((function(t){return t.id!==e}))}))},getFromCategory:function(e){return r.filter((function(t){return t.category===e}))},sendMessage:function(e){var t=r.filter((function(t){return t.id==e})),n={todo:t[0].todo,date:t[0].date,category:t[0].category,desc:t[0].desc};u.a.send("service_v3nypmd","template_mr4t66v",n,"user_CGGDF9HyhEOLv9okgnrf4").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}};return Object(b.jsx)(d.Provider,{value:i,children:t})}function m(e){var t=e.item,n=Object(a.useContext)(d),c=n.deleteTodo,r=n.sendMessage;return Object(b.jsxs)("div",{className:"todo",children:[Object(b.jsxs)("h3",{children:[" ",t.todo," "]}),Object(b.jsxs)("h4",{children:[" ",t.date,Object(b.jsxs)(i.b,{to:"/category/".concat(t.category),className:"todoCategory",children:[" ",t.category," "]})]}),Object(b.jsxs)("p",{children:[" ",t.desc.substr(0,5),"... "]}),Object(b.jsx)("button",{onClick:function(){return c(t.id)},children:"Delete"}),Object(b.jsx)("button",{onClick:function(){return r(t.id)},className:"sendbutton",value:"Send Message",children:"Send"})]})}function O(){var e=Object(l.g)(),t=Object(l.f)(),n=(0,Object(a.useContext)(d).getFromCategory)(e.category);return console.log(n),Object(b.jsxs)("div",{className:"categoryContainer",children:[Object(b.jsx)("button",{className:"backButton",onClick:function(){return t("/")},children:"Back"}),Object(b.jsxs)("h1",{children:[" ",e.category," "]}),n.length>0?n.map((function(e){return Object(b.jsx)(m,{item:e},e.id)})):Object(b.jsx)("h2",{children:"Hey! there are no To Do's in this category"})]})}function x(e){return Object(b.jsxs)("form",{className:"form-container form-control-lg",onSubmit:e.onSubmit,children:[Object(b.jsx)("label",{htmlFor:"todo",children:"To Do:"}),Object(b.jsx)("input",{type:"text",name:"todo",id:"todo",placeholder:"e.g. Cook lunch",value:e.todo,onChange:e.onChangeTodo}),Object(b.jsx)("label",{htmlFor:"date",children:" Date: "}),Object(b.jsx)("input",{type:"date",id:"date",name:"date",value:e.date,onChange:e.onChangeDate}),Object(b.jsx)("label",{htmlFor:"category",children:"Category"}),Object(b.jsxs)("select",{id:"category",name:"category",value:e.category,onChange:e.onChangeCategory,children:[Object(b.jsx)("option",{value:"Daily",children:"Daily"}),Object(b.jsx)("option",{value:"Urgent",children:"Urgent"}),Object(b.jsx)("option",{value:"Not Frequent",children:"Not Frequent"})]}),Object(b.jsx)("label",{htmlFor:"description",children:"Description (optional)"}),Object(b.jsx)("textarea",{id:"description",name:"description",cols:"30",rows:"10",placeholder:"Write some description for the todo",value:e.desc,onChange:e.onChangeDesc}),Object(b.jsx)("button",{type:"submit",children:"Add To Do"})]})}function f(){var e=Object(a.useContext)(d).todoList;return Object(b.jsx)("div",{children:e.map((function(e){return Object(b.jsx)(m,{item:e},e.id)}))})}function g(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)("Daily"),u=Object(o.a)(j,2),h=u[0],m=u[1],O=Object(a.useState)(""),g=Object(o.a)(O,2),p=g[0],v=g[1],y=Object(a.useContext)(d).onSubmitTodo;return Object(b.jsxs)("div",{className:"landingContainer",children:[Object(b.jsx)("div",{className:"formCol",children:Object(b.jsx)(x,{todo:n,onChangeTodo:function(e){return c(e.target.value)},date:i,onChangeDate:function(e){return l(e.target.value)},category:h,onChangeCategory:function(e){return m(e.target.value)},desc:p,onChangeDesc:function(e){return v(e.target.value)},onSubmit:function(e){return y(e,n,i,h,p)}})}),Object(b.jsx)("div",{className:"todoCol",children:Object(b.jsx)(f,{})})]})}function p(){return Object(b.jsx)("div",{})}function v(){return Object(b.jsx)("div",{})}var y=n(50),N=n(28),C=n.n(N),w=n(51),k=n.n(w);n(90);var D=function(){var e=Object(l.f)(),t=Object(a.useContext)(F),n=(t.username,t.handleLogin);console.log(n);var c=function(){var t=Object(y.a)(C.a.mark((function t(n){var a,c,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=new FormData(n.target),c={username:a.get("username"),email:a.get("email"),password:a.get("password")},t.prev=3,t.next=6,k.a.post("http://localhost:4000/user/register",c,{withCredentials:!0});case 6:r=t.sent,console.log(r),200===r.status&&e("/login"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:" body",children:[Object(b.jsx)("h1",{children:"Register"}),Object(b.jsxs)("form",{onSubmit:c,children:[Object(b.jsxs)("div",{className:"container fs-4 pt-4",children:[Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{className:"form-control text-center fs-4",name:"username",type:"text",id:"username",placeholder:"Please type your username"})]}),Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{className:"form-control text-center fs-4",name:"password",type:"password",id:"password",placeholder:"Please type your password"})]}),Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{className:"form-control text-center fs-4",name:"email",type:"email",id:"email",placeholder:"Please type your email"})]})]}),Object(b.jsx)("button",{type:"submit",className:"btn-lg btn-outline-primary text-center",children:"Submit"})]})]})};var S=function(){var e=Object(l.f)(),t=function(){var t=Object(y.a)(C.a.mark((function t(n){var a,c,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=new FormData(n.target),c={username:a.get("username"),password:a.get("password")},t.prev=3,t.next=6,k.a.post("http://localhost:4000/user/register",c,{withCredentials:!0});case 6:r=t.sent,console.log(r),200===r.status&&e("/landing"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{className:"container fs-4 pt-4",children:[Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{className:"form-control text-center fs-4",name:"username",type:"text",id:"username",placeholder:"Please type your Username"})]}),Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{className:"form-control text-center fs-4",name:"password",type:"password",id:"password",placeholder:"Please type your password"})]})]}),Object(b.jsx)("button",{type:"submit",size:"lg",className:"btn-lg btn-outline-primary text-center",children:"Submit"})]})]})};var T=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Project made by Lukasz Trzcinski"})})};function L(){return Object(b.jsx)("footer",{children:Object(b.jsx)("span",{className:"footer span",children:"Copyright Lukasz Trzcinski "})})}var F=Object(a.createContext)({username:"",loggedIn:!1,handleLogin:function(){}});function P(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(b.jsx)(F.Provider,{value:{username:n,handleLogin:function(e){c(e||"")}},children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(h,{children:Object(b.jsx)("main",{className:"mainContainer container",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/landing",element:Object(b.jsx)(g,{})}),Object(b.jsx)(l.a,{path:"/",element:Object(b.jsx)(D,{})}),Object(b.jsx)(l.a,{path:"/register",element:Object(b.jsx)(D,{})}),Object(b.jsx)(l.a,{path:"/login",element:Object(b.jsx)(S,{})}),Object(b.jsx)(l.a,{path:"/about",element:Object(b.jsx)(T,{})}),Object(b.jsx)(l.a,{path:"/category/:category",element:Object(b.jsx)(O,{})}),Object(b.jsx)(l.a,{path:"/category/:category/:todoid",element:Object(b.jsx)(v,{})}),Object(b.jsx)(l.a,{path:"*",element:Object(b.jsx)(p,{})})]})})}),Object(b.jsx)(L,{})]})})}var z=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar  navbar-expand-lg navbar-dark shadow-5-strong",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand ",href:"landing",children:"Todo"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"register",children:"Register"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"login",children:"Login"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"about",children:"About"})})]})})]})})})};function E(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(z,{}),Object(b.jsx)(P,{})]})}n(330);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))}},[[331,1,2]]]);
//# sourceMappingURL=main.9bce9c26.chunk.js.map