(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[6],{12:function(e,n,t){"use strict";n.a={defaultPath:"/auth/signin-1",basename:"/",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-light",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},18:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(){return r.a.createElement("div",{className:"loader-bg"},r.a.createElement("div",{className:"loader-track"},r.a.createElement("div",{className:"loader-fill"})))}},21:function(e,n,t){"use strict";n.a=function(e){return e.children}},34:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(23),c=t.n(i),u=t(13),o=t(22),l=t(49),s=t(8),d=t(9),m=t(11),f=t(10),b=t(46),p=t(50),O=t(30),v=t.n(O),h=(t(43),t(18)),g=t(21),E=t(47),j=function(e){Object(m.a)(t,e);var n=Object(f.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),y=Object(E.a)(j),L=[{path:"/auth/signup-1",exact:!0,name:"Signup 1",component:r.a.lazy((function(){return Promise.all([t.e(2),t.e(16)]).then(t.bind(null,275))}))},{path:"/auth/signin-1",exact:!0,name:"Signin 1",component:r.a.lazy((function(){return Promise.all([t.e(2),t.e(15)]).then(t.bind(null,276))}))}],k=v()({loader:function(){return Promise.all([t.e(8),t.e(13)]).then(t.bind(null,283))},loading:h.a}),T=function(e){Object(m.a)(t,e);var n=Object(f.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=L.map((function(e,n){return e.component?r.a.createElement(b.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return r.a.createElement(e.component,n)}}):null}));return r.a.createElement(g.a,null,r.a.createElement(y,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(h.a,null)},r.a.createElement(p.a,null,e,r.a.createElement(b.a,{path:"/",component:k})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(16),S=t(3),w=t(6),x=t(12),A=Object(S.a)(Object(S.a)({isOpen:[],isTrigger:[]},x.a),{},{isFullScreen:!1}),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0,t=[],a=[];switch(n.type){case w.b:return Object(S.a)(Object(S.a)({},e),{},{collapseMenu:!e.collapseMenu});case w.c:if("sub"===n.menu.type){a=e.isOpen;var r=(t=e.isTrigger).indexOf(n.menu.id);r>-1&&(a=a.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),-1===r&&(a=[].concat(Object(C.a)(a),[n.menu.id]),t=[].concat(Object(C.a)(t),[n.menu.id]))}else{a=e.isOpen;var i=e.isTrigger.indexOf(n.menu.id);t=-1===i?[n.menu.id]:[],a=-1===i?[n.menu.id]:[]}return Object(S.a)(Object(S.a)({},e),{},{isOpen:a,isTrigger:t});case w.g:return Object(S.a)(Object(S.a)({},e),{},{isOpen:a,isTrigger:t});case w.f:if("sub"===n.menu.type){a=e.isOpen;var c=(t=e.isTrigger).indexOf(n.menu.id);return c>-1&&(a=a.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),Object(S.a)(Object(S.a)({},e),{},{isOpen:a,isTrigger:t})}return Object(S.a)({},e);case w.d:return Object(S.a)(Object(S.a)({},e),{},{isFullScreen:!e.isFullScreen});case w.e:return Object(S.a)(Object(S.a)({},e),{},{isFullScreen:!1});case w.a:return Object(S.a)(Object(S.a)({},e),{},{layout:n.layout});default:return e}},B=Object(u.b)(N),F=r.a.createElement(o.a,{store:B},r.a.createElement(l.a,{basename:x.a.basename},r.a.createElement(T,null)));c.a.render(F,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return c})),t.d(n,"a",(function(){return u})),t.d(n,"g",(function(){return o})),t.d(n,"f",(function(){return l}));var a="COLLAPSE_MENU",r="COLLAPSE_TOGGLE",i="FULL_SCREEN",c="FULL_SCREEN_EXIT",u="CHANGE_LAYOUT",o="NAV_CONTENT_LEAVE",l="NAV_COLLAPSE_LEAVE"}},[[34,7,9]]]);
//# sourceMappingURL=main.9f69576a.chunk.js.map