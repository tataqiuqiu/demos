(function(e){function t(t){for(var o,i,u=t[0],l=t[1],c=t[2],s=0,v=[];s<u.length;s++)i=u[s],r[i]&&v.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d1e45ff7"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e),a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02db":function(e,t,n){"use strict";var o=n("247d"),r=n.n(o);r.a},"066f":function(e,t,n){},"214f":function(e,t,n){"use strict";var o=n("b951"),r=n.n(o);r.a},"247d":function(e,t,n){},"35d4":function(e,t,n){},"4b70":function(e,t,n){"use strict";var o=n("066f"),r=n.n(o);r.a},"4ccd":function(e,t,n){"use strict";var o=n("35d4"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"app"}},[n("router-view")],1),n("div",{attrs:{id:"app-test"}})])},a=[],i=(n("5c0b"),n("2877")),u={},l=Object(i["a"])(u,r,a,!1,null,null,null),c=l.exports,s=n("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},h=m,b=(n("02db"),Object(i["a"])(h,d,f,!1,null,"2c9cefa6",null)),g=b.exports,_={name:"home",components:{HelloWorld:g}},j=_,w=Object(i["a"])(j,p,v,!1,null,null,null),k=w.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("child",{attrs:{value:e.doc},on:{"update:value":function(t){e.doc=t}}}),n("div",[e._v("father： "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.doc,expression:"doc"}],attrs:{type:"text"},domProps:{value:e.doc},on:{input:function(t){t.target.composing||(e.doc=t.target.value)}}})]),n("div",[e._v("result： "),n("span",{domProps:{innerHTML:e._s(e.doc)}})])],1)},y=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("child： "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{type:"text"},domProps:{value:e.val},on:{input:[function(t){t.target.composing||(e.val=t.target.value)},e.iptInput]}})])},O=[],E={name:"Bb-child",props:{value:String},data:function(){return{val:this.value}},watch:{value:function(e){this.val=e}},methods:{iptInput:function(){this.$emit("update:value",this.val)}}},$=E,P=(n("cc54"),Object(i["a"])($,C,O,!1,null,"27a3009c",null)),S=P.exports,B={name:"Bb",components:{Child:S},data:function(){return{doc:"输入试试"}}},N=B,T=(n("4b70"),Object(i["a"])(N,x,y,!1,null,"6a8eca66",null)),A=T.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("child",{attrs:{value:e.doc},on:{input:e.oninput}}),n("div",[e._v("father： "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.doc,expression:"doc"}],attrs:{type:"text"},domProps:{value:e.doc},on:{input:function(t){t.target.composing||(e.doc=t.target.value)}}})]),n("div",[e._v("result： "),n("span",{domProps:{innerHTML:e._s(e.doc)}})])],1)},M=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("child： "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{type:"text"},domProps:{value:e.val},on:{input:[function(t){t.target.composing||(e.val=t.target.value)},e.iptInput]}})])},L=[],F={name:"Bb-child.2",props:{value:String},data:function(){return{val:this.value}},watch:{value:function(e){this.val=e}},methods:{iptInput:function(){this.$emit("input",this.val)}}},V=F,W=(n("a797"),Object(i["a"])(V,H,L,!1,null,"b49e1928",null)),q=W.exports,J={name:"Bb",components:{Child:q},data:function(){return{doc:"输入试试"}},methods:{oninput:function(e){this.doc=e}}},Y=J,z=(n("4ccd"),Object(i["a"])(Y,I,M,!1,null,"6513ff2c",null)),D=z.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lastline-space-ellipsis js-toggle-box",staticStyle:{width:"260px"},attrs:{title:"你让我只 fdkfjkdsjfdsj dfjdsfadf 5555555 aaaaaa 显示2行就只显示2行啊，你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊"}},[e._v("\n  你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊")])},K=[],Q=(n("214f"),{}),R=Object(i["a"])(Q,G,K,!1,null,"08890288",null),U=R.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{on:{click:e.CreateButtomCounter}},[e._v("点击加载组件")]),n("div",{attrs:{id:"root"}})])},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{on:{click:function(t){e.count++}}},[e._v("You clicked me "+e._s(e.count)+" times.")])},te=[],ne={name:"ButtonCounter",components:{},data:function(){return{count:0}}},oe=ne,re=Object(i["a"])(oe,ee,te,!1,null,"d30a8dde",null),ae=re.exports,ie=function(){var e=o["a"].component("button-counter",ae),t=(new e).$mount(),n=document.querySelector("#root");n.appendChild(t.$el)},ue={name:"VueAppComponent",methods:{CreateButtomCounter:ie}},le=ue,ce=(n("d213"),Object(i["a"])(le,X,Z,!1,null,"20266c58",null)),se=ce.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ButtonCounter")},ve=[],de={name:"VueAppComponent2",components:{ButtonCounter:ae}},fe=de,me=Object(i["a"])(fe,pe,ve,!1,null,null,null),he=me.exports;o["a"].use(s["a"]);var be=new s["a"]({mode:"hash",base:"/demos/vue/test/dist/",routes:[{path:"/home",name:"home",component:k},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/bb",name:"bidirectional-bindings",component:A},{path:"/bb2",name:"bidirectional-bindings-2",component:D},{path:"/2-line-ellipsis",name:"2-line-ellipsis",component:U},{path:"/app-component",name:"app-component",component:se},{path:"/app-component-2",name:"app-component-2",component:he}]}),ge=n("2f62");o["a"].use(ge["a"]);var _e=new ge["a"].Store({state:{},mutations:{},actions:{}}),je=n("9483");Object(je["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:be,store:_e,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},"9dd4":function(e,t,n){},"9f87":function(e,t,n){},a797:function(e,t,n){"use strict";var o=n("f0cb"),r=n.n(o);r.a},b951:function(e,t,n){},cc54:function(e,t,n){"use strict";var o=n("9f87"),r=n.n(o);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d213:function(e,t,n){"use strict";var o=n("9dd4"),r=n.n(o);r.a},f0cb:function(e,t,n){}});
//# sourceMappingURL=app.2cfeca78.js.map