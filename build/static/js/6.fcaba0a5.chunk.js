(this.webpackJsonpuniprojex=this.webpackJsonpuniprojex||[]).push([[6],{162:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return f})),a.d(t,"a",(function(){return h})),a.d(t,"d",(function(){return v}));var n=a(176),r=a.n(n),c=a(177),o=a(12),s=a(178),i=a.n(s).a.create({baseURL:"https://helixlive.herokuapp.com"}),u="/auth/login",l="/meeting",m=a(26),d=(a(48),function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post(u,e);case 2:n=t.sent,a({type:o.e,payload:n.data.user}),200==n.status&&(c=n.data.user,localStorage.setItem("id",c._id),localStorage.setItem("name",c.name),localStorage.setItem("email",c.email),localStorage.setItem("phone",c.phone),localStorage.setItem("user_plan",c.user_plan),localStorage.setItem("containerId",c.containerId),window.location.href="/dashboard");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get(l,{params:e});case 2:n=t.sent,a({type:o.b,payload:n.data.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get(l,{params:e});case 2:n=t.sent,a({type:o.c,payload:n.data.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post(l,e);case 2:n=t.sent,a({type:o.a,payload:n.data.data.room}),n.data.data.room.id,200==n.status&&m.a.push("/dashboard");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get(l,{params:e});case 2:n=t.sent,a({type:o.d,payload:n.data.data.conference});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},191:function(e,t,a){"use strict";var n=a(16),r=a(17),c=a(18),o=a(19),s=a(0),i=a.n(s);a(192),s.Component},192:function(e,t,a){},253:function(e,t,a){},363:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(17),c=a(18),o=a(19),s=a(0),i=a.n(s),u=a(360),l=a(358),m=(a(253),a(45)),d=a(162),p=a(26),f=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e="https://mail.google.com/mail/?view=cm&fs=1&to=ashishume@gmail.com&cc=gauravclb96@gmail.com&su=".concat("Regarding new connection","&body=").concat("I want a new Connection");return i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("span",null,"Need new connection?"),"\xa0",i.a.createElement("a",{href:e,target:"_blank"},"Contact us"))}}]),a}(s.Component),h=a(11),v=(a(191),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).onSubmit=function(t){e.props.signIn(t)},e.renderError=function(e){var t=e.error;if(e.touched&&t)return i.a.createElement("small",{className:"error-message"},t)},e.renderField=function(t){return i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:t.input.name},"Meeting Name"),i.a.createElement("input",Object.assign({autoComplete:"off"},t.input)),e.renderError(t.meta))},e.renderPassword=function(t){return i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:t.input.name},"Password"),i.a.createElement("input",Object.assign({type:"password",autoComplete:"off"},t.input)),e.renderError(t.meta))},e}return Object(r.a)(a,[{key:"render",value:function(){return localStorage.getItem("id")&&p.a.push("/dashboard"),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("br",null),i.a.createElement("div",{className:"inner-container"},i.a.createElement("div",{className:"ui cards"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(h.a,{to:"/"},"Back Home")),i.a.createElement("h2",null,"Login"),i.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit)},i.a.createElement("div",{className:"ui form"},i.a.createElement(u.a,{component:this.renderField,name:"email"}),i.a.createElement(u.a,{component:this.renderPassword,name:"password"}),i.a.createElement("button",{className:"fluid ui green button"},"Login"),i.a.createElement(f,null)))))))))),i.a.createElement("div",{className:"footer-container"},i.a.createElement("span",{className:"footer"},i.a.createElement("p",null,"Created by"," ",i.a.createElement("a",{className:"link",href:"https://www.linkedin.com/in/ashishume/",target:"_blank"},i.a.createElement("b",null,"Ashish Debnath"))))))}}]),a}(s.Component)),b=Object(m.b)("",{signIn:d.e})(v);t.default=Object(l.a)({form:"LoginForm",validate:function(e){var t={};return e.email||(t.name="Email is required"),e.password||(t.room_type="Password is required"),t}})(b)}}]);
//# sourceMappingURL=6.fcaba0a5.chunk.js.map