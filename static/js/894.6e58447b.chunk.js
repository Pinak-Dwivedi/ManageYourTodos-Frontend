"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[894],{894:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(165),o=r(861),n=r(439),s=r(791),d=r(689),l=r(725),c=r(73),i=r(184);function u(){var e=(0,s.useContext)(l.Z),t=e.authUser,r=e.isAuthenticated,u=e.loading,h=e.setLoading,f=(0,s.useState)(""),m=(0,n.Z)(f,2),p=m[0],x=m[1],b=(0,s.useState)(""),y=(0,n.Z)(b,2),T=y[0],v=y[1],g=(0,s.useState)({}),j=(0,n.Z)(g,2),N=j[0],Z=j[1],k=(0,s.useRef)(),C=(0,s.useRef)(),S=(0,d.s0)(),w=(0,d.TH)(),E=null!=w.state?w.state.userId:null;function A(){return(A=(0,o.Z)((0,a.Z)().mark((function e(r){var o,n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),r.preventDefault(),e.prev=2,e.next=5,fetch("".concat("http://localhost:3001","/todos?userId=").concat(E),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({title:p,body:T})});case 5:return o=e.sent,e.next=8,o.json();case 8:if(n=e.sent,Z({}),n.success){e.next=12;break}throw n;case 12:"admin"===t.role&&S(-1),S("/dashboard"),h(!1),c.ZP.success(n.message),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),h(!1),"object"===typeof e.t0.error?(s={},e.t0.error.forEach((function(e){for(var t in e)s[t]=e[t][0]})),Z(s)):c.ZP.error(e.t0.error);case 22:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}return(0,s.useEffect)((function(){r||S("/"),k.current.style.height="1px",k.current.style.height=1+k.current.scrollHeight+"px",C.current.style.height="1px",C.current.style.height=5+C.current.scrollHeight+"px"}),[p,T]),(0,i.jsx)("div",{className:"addTodo-container",children:(0,i.jsxs)("form",{className:"addTodo-form",onSubmit:function(e){if(u)return!1;!function(e){A.apply(this,arguments)}(e)},children:[(0,i.jsx)("div",{className:"addTodo-heading",children:"Add Todo"}),(0,i.jsxs)("div",{className:"addTodo-form-field",children:[(0,i.jsx)("label",{className:"addTodo-form-label",htmlFor:"title",children:"Title"}),(0,i.jsx)("textarea",{ref:k,className:"addTodo-form-textarea",type:"text",id:"title",name:"title",placeholder:"Enter Title",value:p,required:!0,onChange:function(e){return x(e.target.value)}}),(0,i.jsx)("span",{className:"addTodo-form-error",children:N.title})]}),(0,i.jsxs)("div",{className:"addTodo-form-field",children:[(0,i.jsx)("label",{className:"addTodo-form-label",htmlFor:"body",children:"Body"}),(0,i.jsx)("textarea",{ref:C,className:"addTodo-form-textarea",type:"text",id:"body",name:"body",placeholder:"Enter Body",value:T,required:!0,onChange:function(e){return v(e.target.value)}}),(0,i.jsx)("span",{className:"addTodo-form-error",children:N.body})]}),(0,i.jsx)("button",{className:"addTodo-form-submitButton",type:"submit",children:"Add Todo"})]})})}}}]);
//# sourceMappingURL=894.6e58447b.chunk.js.map