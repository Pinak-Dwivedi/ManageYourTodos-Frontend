"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[921],{921:function(e,s,r){r.r(s),r.d(s,{default:function(){return f}});var n=r(165),a=r(861),t=r(439),o=r(791),i=r(689),l=r(87),c=r(725),u=r(73),d=r(184);var f=function(){var e=(0,o.useContext)(c.Z),s=(e.authUser,e.setAuthUser),r=e.isAuthenticated,f=e.setIsAuthenticated,m=e.loading,h=e.setLoading,p=(0,o.useState)(""),g=(0,t.Z)(p,2),x=g[0],v=g[1],j=(0,o.useState)(""),N=(0,t.Z)(j,2),b=N[0],w=N[1],P=(0,o.useState)({}),k=(0,t.Z)(P,2),y=k[0],Z=k[1],A=(0,i.s0)();function S(){return(S=(0,a.Z)((0,n.Z)().mark((function e(r){var a,t,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,r.preventDefault(),e.next=5,fetch("".concat("http://localhost:3001","/users/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:x,password:b})});case 5:return a=e.sent,e.next=8,a.json();case 8:if(t=e.sent,Z({}),t.success){e.next=12;break}throw t;case 12:f(!0),s(t.user),A("/dashboard"),h(!1),u.ZP.success(t.message),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(1),f(!1),s({}),h(!1),"object"===typeof e.t0.error?(o={},e.t0.error.forEach((function(e){for(var s in e)o[s]=e[s][0]})),Z(o)):u.ZP.error(e.t0.error);case 25:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){if(r)return A("/dashboard")})),(0,d.jsx)("div",{className:"login-container",children:(0,d.jsxs)("form",{className:"login-form",onSubmit:function(e){if(m)return!1;!function(e){S.apply(this,arguments)}(e)},children:[(0,d.jsx)("div",{className:"login-heading",children:"Log In"}),(0,d.jsxs)("div",{className:"login-form-field",children:[(0,d.jsx)("label",{className:"login-form-label",htmlFor:"email",children:"Email address"}),(0,d.jsx)("input",{className:"login-form-input",type:"text",id:"email",name:"email",placeholder:"Enter Email",value:x,required:!0,onChange:function(e){return v(e.target.value)}}),(0,d.jsx)("span",{className:"login-form-error",children:y.email})]}),(0,d.jsxs)("div",{className:"login-form-field",children:[(0,d.jsx)("label",{className:"login-form-label",htmlFor:"password",children:"Password"}),(0,d.jsx)("input",{className:"login-form-input",type:"password",id:"password",name:"password",placeholder:"Enter Password",value:b,required:!0,onChange:function(e){return w(e.target.value)}}),(0,d.jsx)("span",{className:"login-form-error",children:y.password})]}),(0,d.jsx)("button",{className:"login-form-submitButton",type:"submit",children:"LogIn"}),(0,d.jsxs)("div",{className:"forgotPass-noAccount",children:[(0,d.jsxs)("div",{className:"forgotPass",children:["Forgot Passowrd? ",(0,d.jsx)(l.rU,{className:"forgotPass-noAccount-link",to:"/forgotpassword",children:"Forgot Password"})]}),(0,d.jsxs)("div",{className:"noAccount",children:["Do not have an accont? ",(0,d.jsx)(l.rU,{className:"forgotPass-noAccount-link",to:"/register",children:"SignUp"})]})]})]})})}}}]);
//# sourceMappingURL=921.3061f6a6.chunk.js.map