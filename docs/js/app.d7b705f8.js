(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"376f3f0a"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-blog-app/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"21a2":function(t,e,n){"use strict";n("d9e0")},2875:function(t,e,n){"use strict";n("b7ef")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"front-img"},[n("div",{staticClass:"img-chunk"},[n("Sidebar",{attrs:{id:"sidebar-1"}}),n("b-jumbotron",{attrs:{id:"title-jumbo"}},[n("h1",{staticStyle:{"font-family":"titleFont","font-size":"5rem"}},[t._v(" The Post ")])])],1)]),n("router-view")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],attrs:{id:"sidebar-btn"}},[n("b-icon",{attrs:{icon:"list"}}),t._v(" Options ")],1),n("b-sidebar",{attrs:{id:"sidebar-1",title:"Options",shadow:""}},[n("div",{staticClass:"px-3 py-2"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("About ")]),t.showAddArticleLink?n("router-link",{attrs:{to:"/articleadder"}},[t._v("Add Article")]):t._e()],1),n("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"I'm an Administrador"}},[n("label",[n("b",[t._v("Password:")])]),n("div",{staticStyle:{display:"flex","flex-direction":"row"}},[n("b-input",{staticStyle:{width:"12rem"},attrs:{type:"text"},model:{value:t.inputPassword,callback:function(e){t.inputPassword=e},expression:"inputPassword"}}),n("b-button",{on:{click:function(e){return t.PasswordCheck()}}},[t._v("Check")])],1)]),n("p",[t._v('(Password: "letmepass")')])],1)])],1)},s=[],c=n("5530"),l=n("2f62"),u={data:function(){return{inputPassword:""}},methods:{displayArticleAdder:function(){this.$store.commit("DISPLAY_ADD_ARTICLE_LINK")},PasswordCheck:function(){this.inputPassword==this.$store.state.moderatorPassword?this.displayArticleAdder():alert("Wrong password, try again")}},computed:Object(c["a"])({},Object(l["c"])(["showAddArticleLink"]))},d=u,f=(n("a1ae"),n("2877")),p=Object(f["a"])(d,o,s,!1,null,"61102fb5",null),b=p.exports;window.addEventListener("load",(function(){alert("Este proyecto es solamente para practicar código, puede contener información falsa")}));var m={components:{Sidebar:b}},v=m,h=(n("034f"),Object(f["a"])(v,i,a,!1,null,null,null)),A=h.exports,_=(n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticStyle:{"text-align":"left","margin-left":"30px"}},[t._v("Recomended Articles")]),t._l(t.articles,(function(t){return n("ArticleCard",{key:t.id,staticClass:"ArticleCard",attrs:{article:t}})}))],2)},w=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"article-link",attrs:{to:{name:"ArticleShow",params:{id:t.article.id}}}},[n("div",{staticClass:"article-box"},[n("h3",[t._v(t._s(t.article.title))]),n("h5",{staticStyle:{color:"gray"}},[t._v(t._s(t.article.subtitle))])])])],1)},j=[],O={props:{article:Object}},C=O,x=(n("e889"),Object(f["a"])(C,y,j,!1,null,"4739e9d4",null)),P=x.exports,E={computed:Object(c["a"])({},Object(l["c"])(["articles"])),components:{ArticleCard:P},created:function(){this.$store.dispatch("fetchArticles")}},S=E,k=(n("f7ba"),Object(f["a"])(S,g,w,!1,null,"6c83e9d4",null)),L=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h2",[t._v("Add a new blog post")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.addArticle()}}},[n("label",[t._v("Title:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("label",[t._v("Subtitle:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitle,expression:"subtitle"}],attrs:{type:"text"},domProps:{value:t.subtitle},on:{input:function(e){e.target.composing||(t.subtitle=e.target.value)}}}),n("label",[t._v("Article Content:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("label",[t._v("Image:")]),n("br"),n("button",{attrs:{type:"submit"}},[t._v("Post")])])])},I=[],R={data:function(){return{title:"",subtitle:"",content:"",id:Math.floor(1e7*Math.random())}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["createArticle"])),{},{addArticle:function(){var t=Object.create(null);t["title"]=this.title,t["subtitle"]=this.subtitle,t["content"]=this.content,t["id"]=this.id,this.createArticle(t),this.title="",this.subtitle="",this.content=""}})},D=R,$=(n("21a2"),Object(f["a"])(D,T,I,!1,null,"5d07c7a4",null)),M=$.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h3",[n("b",[n("i",[t._v(t._s(t.article.title))])])]),n("h5",{staticStyle:{color:"gray"}},[t._v(t._s(t.article.subtitle))]),n("br"),n("p",[t._v(t._s(t.article.content))])])},H=[],J=n("bc3a"),K=n.n(J),V=K.a.create({baseURL:"http://localhost:3000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),Y={getArticles:function(){return V.get("/articles")},getArticle:function(t){return V.get("/articles/"+t)},postArticle:function(t){return V.post("/articles",t)}},q={props:["id"],data:function(){return{article:{}}},created:function(){var t=this;Y.getArticle(this.id).then((function(e){t.article=e.data}))}},z=q,F=(n("2875"),Object(f["a"])(z,N,H,!1,null,"78dad94f",null)),U=F.exports;r["default"].use(_["a"]);var W=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/articleadder",name:"ArticleAdder",component:M},{path:"/articleshow",name:"ArticleShow",component:U,props:!0}],B=new _["a"]({mode:"history",base:"/vue-blog-app/",routes:W}),G=B;n("a434");r["default"].use(l["a"]);var Q=new l["a"].Store({state:{showAddArticleLink:!1,moderatorPassword:"letmepass",articles:[]},mutations:{DISPLAY_ADD_ARTICLE_LINK:function(t){t.showAddArticleLink=!0},SET_ARTICLES:function(t,e){t.articles=e},ADD_ARTICLE:function(t,e){t.articles.push(e)},REMOVE_ARTICLE:function(t,e){t.articles.splice(e,1)}},actions:{removeArticle:function(t,e){t.commit("REMOVE_ARTICLE",e)},createArticle:function(t,e){var n=t.commit;return Y.postArticle(e).then((function(){n("ADD_ARTICLE",e)}))},fetchArticles:function(t){var e=t.commit;Y.getArticles().then((function(t){e("SET_ARTICLES",t.data)}))}},modules:{}}),X=n("5f5b"),Z=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(X["a"]),r["default"].use(Z["a"]),r["default"].config.productionTip=!1,new r["default"]({router:G,store:Q,render:function(t){return t(A)}}).$mount("#app")},7322:function(t,e,n){},"85ec":function(t,e,n){},"8beb":function(t,e,n){},"94ab":function(t,e,n){},a1ae:function(t,e,n){"use strict";n("7322")},b7ef:function(t,e,n){},d9e0:function(t,e,n){},e889:function(t,e,n){"use strict";n("8beb")},f7ba:function(t,e,n){"use strict";n("94ab")}});
//# sourceMappingURL=app.d7b705f8.js.map