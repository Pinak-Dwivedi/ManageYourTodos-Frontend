"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[461],{461:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var s=t(165),a=t(861),n=t(439),o=t(791),c=t(73),i=t(725),l=t(689),u=t(184);function d(){var e=(0,o.useContext)(i.Z),r=e.isAuthenticated,t=e.loading,d=e.setLoading,f=(0,o.useState)(""),m=(0,n.Z)(f,2),h=m[0],p=m[1],g=(0,o.useState)({}),x=(0,n.Z)(g,2),w=x[0],b=x[1];if(r)return(0,u.jsx)(l.Fg,{to:"/dashboard"});function v(){return(v=(0,a.Z)((0,s.Z)().mark((function e(r){var t,a,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),d(!0),e.prev=2,e.next=5,fetch("".concat("https://manage-your-todos-backend.onrender.com","/users/forgotpassword"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h})});case 5:return t=e.sent,e.next=8,t.json();case 8:if(a=e.sent,b({}),a.success){e.next=12;break}throw a;case 12:d(!1),c.ZP.success(a.message),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),d(!1),"object"===typeof e.t0.error?(n={},e.t0.error.forEach((function(e){for(var r in e)n[r]=e[r][0]})),b(n)):c.ZP.error(e.t0.error);case 20:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}return(0,u.jsx)("div",{className:"forgotPassword-container",children:(0,u.jsxs)("form",{className:"forgotPassword-form",onSubmit:function(e){t?e.preventDefault():function(e){v.apply(this,arguments)}(e)},children:[(0,u.jsx)("div",{className:"forgotPassword-heading",children:"Forgot Password"}),(0,u.jsxs)("div",{className:"forgotPassword-form-field",children:[(0,u.jsx)("label",{className:"forgotPassword-form-label",htmlFor:"email",children:"Email address"}),(0,u.jsx)("input",{className:"forgotPassword-form-input",type:"text",id:"email",name:"email",placeholder:"Enter Email",value:h,required:!0,onChange:function(e){return p(e.target.value)}}),(0,u.jsx)("span",{className:"forgotPassword-form-error",children:w.email})]}),(0,u.jsx)("button",{className:"forgotPassword-form-submitButton",type:"submit",children:"Send Email"})]})})}}}]);
//# sourceMappingURL=461.0389ea3d.chunk.js.map