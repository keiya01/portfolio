(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,n){e.exports=n(71)},56:function(e,t,n){},69:function(e,t,n){e.exports=n.p+"static/media/thumbnail.79b1ce1a.jpg"},71:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(44),r=n.n(o),c=(n(56),n(9)),l=n(15),s=n(11),u=n(10),d=n(12),h=n(7),f=n(21),m=n(45),b=n.n(m),w=n(46),p=n(14),g="portfolio/window/RESIZE_WINDOW",O={windowHeight:window.innerHeight,windowWidth:window.innerWidth<600?window.innerWidth:600};function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var n=t.windowHeight,i=t.windowWidth;return Object(p.a)({},e,{windowHeight:n,windowWidth:i});default:return Object(p.a)({},e)}}var v=Object(f.d)(Object(f.c)({window:j}),Object(f.a)(w.a,b.a)),x=n(18),y=n(16),E=n(3),C=n(74),k=n(75),W=n(50),R=n(4),z=[],F=[],T=function(e){function t(e,n,i,a,o,r){var l,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(c.a)(this,t),(l=Object(s.a)(this,Object(u.a)(t).call(this,e,n,i,a,o,r))).drawCircle=function(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=Object(R.a)(Object(R.a)(l)),i=n.context,a=n.name,o=n.positionX,r=n.positionY,c=n.size,s=n.color,u=n.text;(l.setFillCanvas(),i.arc(o,r,c,0,2*Math.PI),i.fill(),console.log("temp: ",F.length,F),t)&&(2===F.length&&(F=[]),F.push({name:a,x:o,y:r,size:c,color:s,text:u}),2===F.length&&((e=z=[]).push.apply(e,Object(W.a)(F)),console.log("option: ",z)))},l.setShadow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(R.a)(Object(R.a)(l)).context;t.shadowColor="#555",t.shadowOffsetX=-.5,t.shadowOffsetY=null!==e?e:2,t.shadowBlur=null!==e?1:8},l.resetShadow=function(){var e=Object(R.a)(Object(R.a)(l)).context;e.shadowColor="#fff",e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowBlur=0},l.setTitle=function(){var e=Object(R.a)(Object(R.a)(l)),t=e.context,n=e.name,i=e.positionX,a=e.positionY;t.beginPath(),t.font="bold 22px Franklin Gothic Medium",t.fillStyle="#333",t.textAlign="center",t.fillText(n,i,a)},l.setText=function(){var e=Object(R.a)(Object(R.a)(l)),t=e.context,n=e.text,i=e.positionX,a=e.positionY;e.size;t.beginPath(),t.font="normal 13px sans-serif",t.fillStyle="#555",t.textAlign="center",t.fillText(n,i,a+30)},l.clickAnimation=function(e,n,i){return function(a){var o=Object(R.a)(Object(R.a)(l)),r=o.context,c=o.name,s=o.size,u=o.positionY,d=window.innerHeight,h=window.innerWidth,f=s,m=u;if(f<=n-25)window.requestAnimationFrame(e);else{var b={};r.clearRect(0,0,h,d);for(var w=0;w<z.length;w++){var p=z[w],g=p.name,O=p.x,j=p.y,v=p.size,x=p.color,y=p.text,E=g===c,C=E?f-3:v,k=E?m+2:j;console.log(k,C);var W=new t(r,g,O,k,C,x,y);E?(b=W,W.setShadow(.1)):W.setShadow(),W.drawCircle(),W.resetShadow(),W.setTitle(),W.setText()}window.requestAnimationFrame(b.clickAnimation(e,n,i))}}},l.transitionAnimation=function(e,n){return function(n){var i=e.windowHeight,a=e.windowWidth,o=Object(R.a)(Object(R.a)(l)),r=o.context,c=o.name,s=o.positionX,u=o.positionY,d=o.size,h=o.color;if(d>i&&d>a)switch(c){case"Works":return void e.history.push("/portfolio/works");case"Blogs":return void e.history.push("/portfolio/blogs")}else{var f=new t(r,c,s,u,d+20,h);f.drawCircle(!1),window.requestAnimationFrame(f.transitionAnimation(e))}}},l.onClick=function(e,t){var n=e.clientX,i=e.clientY,a=Object(R.a)(Object(R.a)(l)),o=(a.name,a.positionX),r=a.positionY,c=a.size,s=e.target.getBoundingClientRect(),u=n-s.left,d=i-s.top;return Math.pow(u-o,2)+Math.pow(d-r,2)<Math.pow(c,2)},l.text=d,l.canvasStore=[],l}return Object(d.a)(t,e),t}(function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"black";Object(c.a)(this,e),this.setFillCanvas=function(){var e=n.context,t=(n.name,n.positionX,n.positionY,n.color);e.beginPath(),e.fillStyle=t},this.context=t,this.name=i,this.positionX=a,this.positionY=o,this.size=r,this.color=l}),H=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.setRef,n=e.onCircleClick,i=e.canvas,o=(e.onResize,e.setCircle,e.windowHeight),r=e.windowWidth,c=(e.children,e.isCircleClicked);null===i||c||i.addEventListener("click",n(this.props));return a.a.createElement("div",{className:Object(h.b)(S.wrapper)},a.a.createElement("div",{className:Object(h.b)(S.titleWrapper)},a.a.createElement("h3",{className:Object(h.b)(S.infoTitle,S.fontResize)},"Information")),a.a.createElement("canvas",{ref:function(e){return t(e,"canvas")},className:Object(h.b)(S.canvas),width:r,height:o}))}}]),t}(i.Component),S=h.a.create({wrapper:{position:"relative",width:"100%",height:"100%",backgroundColor:"#FF0066"},titleWrapper:{display:"inline-block",position:"absolute",top:"10%",left:0,right:0,textAlign:"center"},infoTitle:{fontSize:50,fontWeight:"bold",color:"#fff"},fontResize:{"@media (max-width: 600px)":{fontSize:30}},canvas:{backgroundColor:"#FF0066"}}),N=H,A={canvas:null,windowHeight:window.innerHeight,windowWidth:window.innerWidth,isCircleClicked:!1},D={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}},onResize:function(e){return function(e,t){return console.log(e,t),{windowHeight:e,windowWidth:t}}}},B=function(e){return function(t){var n=e.windowHeight,i=e.windowWidth,a=t.getContext("2d");a.clearRect(0,0,i,n);for(var o=[{name:"Blogs",x:.34*i,y:.6*n,size:.25*i,color:"#fff",text:"\u5b66\u3073\u306e\u8a18\u9332"},{name:"Works",x:.66*i,y:.51*n,size:.25*i,color:"#fff",text:"\u4f5c\u54c1\u4e00\u89a7"}],r=navigator.userAgent.toLowerCase(),c=0;c<o.length;c++){var l=o[c],s=l.name,u=l.x,d=l.y,h=l.size,f=l.color,m=l.text,b=u,w=d,p=h;null===r.match(/android|iphone/)&&(b*="Blogs"===s?1.25:.89,w*="Blogs"===s?1.1:1.08,p*=i>1e3?.5:.65),null!==r.match(/ipad/)&&(b*="Blogs"===s?.8:1.1,w*="Blogs"===s?1:1.1,p=.25*i);var g=new T(a,s,b,w,p,f,m);g.setShadow(),g.drawCircle(),g.resetShadow(),g.setTitle(),g.setText()}}},Y={componentDidMount:function(){var e=this.props,t=e.setCircle,n=(0,e.getRefs)().canvas;t(n),this.props.handleChange("canvas",n)},componentDidUpdate:function(){var e=this.props,t=e.onResize,n=e.canvas,i=e.setCircle;if(null!==n){var a=null;window.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(function(){t(window.innerHeight,window.innerWidth),i(n)},100)})}}},X=Object(E.a)(Object(E.d)("GroupCircle"),Object(E.f)(A,D),Object(E.e)(function(e){return Object(p.a)({},function(){var e={};return{setRef:function(t){return function(t,n){return e[n]=t}},getRefs:function(t){return function(){return e}}}}(),function(e){var t=!1;return{onCircleClick:function(e){return function(n){return function(i){var a=e.canvas;if(e.handleChange,e.isCircleClicked,!t){t=!0;for(var o=a.getContext("2d"),r=null,c=0;c<z.length;c++){var l=z[c],s=l.name,u=l.x,d=l.y,h=l.size,f=l.color,m=l.text,b=new T(o,s,u,d,h,f,m);b.onClick(i,n)&&(r=b)}null!==r&&window.requestAnimationFrame(r.clickAnimation(r.transitionAnimation(n),r.size,n))}}}}}}(),{setCircle:B})}),Object(x.b)(function(e){return Object(p.a)({},e)},function(e,t){return{}}),Object(E.b)(Y),Object(E.c)(["canvas","windowHeight","windowWidth"]))(N),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props),a.a.createElement(i.Fragment,null,a.a.createElement("div",{className:Object(h.b)(M.container)},a.a.createElement("div",{className:Object(h.b)(M.profileContainer),style:{paddingBottom:50}},a.a.createElement("img",{src:n(69),className:Object(h.b)(M.image)}),a.a.createElement("p",{className:Object(h.b)(M.name)},"Keiya Sasaki")),a.a.createElement("div",{className:Object(h.b)(M.descriptionContainer),style:{opacity:0},ref:this.props.setRef("divDescription")},a.a.createElement("table",{className:Object(h.b)(M.descriptionText)},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u751f\u5e74\u6708\u65e5"),a.a.createElement("td",null,"1999/02/10")),a.a.createElement("tr",null,a.a.createElement("td",{style:{width:"40%"}},"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u6b74"),a.a.createElement("td",null,"2017/06/01 \u301c \u73fe\u5728")),a.a.createElement("tr",null,a.a.createElement("td",null,"\u8a00\u8a9e"),a.a.createElement("td",null,"Ruby(Ruby on Rails), PHP(FuelPHP), Go, React, ReactNative")))),a.a.createElement("br",null),a.a.createElement("p",{className:Object(h.b)(M.descriptionText)},"\u3061\u306a\u307f\u306b\u3053\u306e\u30b5\u30a4\u30c8\u306fReact\u3067\u66f8\u3044\u3066\u3044\u307e\u3059\u3002"),a.a.createElement("br",null),a.a.createElement("span",{style:{fontWeight:"bold"}},"Career"),a.a.createElement("br",null),a.a.createElement("table",{className:Object(h.b)(M.descriptionText)},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"2017/06/01"),a.a.createElement("td",null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u5b66\u7fd2\u958b\u59cb")),a.a.createElement("tr",null,a.a.createElement("td",null,"2018/03/01"),a.a.createElement("td",null,"\u682a\u5f0f\u4f1a\u793eAppRuns\u3067\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u30a2\u30eb\u30d0\u30a4\u30c8")))))),a.a.createElement(X,{history:this.props.history}))}}]),t}(i.Component),M=h.a.create({container:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",height:"100vh"},profileContainer:{display:"flex",margin:"0 auto",width:"90%",alignItems:"center",justifyContent:"center"},image:{width:70,height:70,borderRadius:"50%",objectFit:"cover",marginRight:20,border:"solid 1px #FFFF00",animationName:[{from:{transform:"translate(55%, 0)"},to:{transform:"translate(0, 0)"}}],animationTimingFunction:"easy",animationDuration:"2s",animationDelay:"0s"},name:{fontSize:20,color:"#333",fontWeight:600,animationName:[{from:{opacity:0},to:{opacity:1}}],animationTimingFunction:"easy",animationDuration:"4s",animationDelay:"0s"},descriptionContainer:{width:"90%",maxWidth:480,margin:"0 auto",paddingLeft:20,animationName:[{from:{opacity:0,transform:"translate(0, 100px)"},to:{opacity:1,transform:"translate(0, 0)"}}],animationDuration:"3s",animationTimingFunction:"ease",animationDelay:"2s"},descriptionText:{color:"#555",fontSize:15}}),I=P,q={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}}},L=Object(p.a)({},function(){var e={};return{setRef:function(t){return function(t){return function(n){return e[t]=n}}},getRefs:function(t){return function(){return e}}}}()),G={componentDidMount:function(){var e=(0,this.props.getRefs)().divDescription;setTimeout(function(){e.style.opacity=1},3500)}},J=Object(E.a)(Object(E.d)("HomeTopScreen"),Object(E.f)({},q),Object(E.e)(L),Object(x.b)(function(e){return Object(p.a)({},e)},function(e,t){return{}}),Object(E.b)(G),Object(E.c)([]))(I),K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(C.a,null,a.a.createElement(i.Fragment,null,a.a.createElement(k.a,{exact:!0,path:"/portfolio",component:J}),a.a.createElement(k.a,{path:"/portfolio/works",component:J}),a.a.createElement(k.a,{path:"/portfolio/blogs",component:J})))}}]),t}(i.Component),U={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}}},Z=Object(E.a)(Object(E.d)("AppRoute"),Object(E.f)({},U),Object(E.e)(function(e){return{}}),Object(x.b)(function(e){var t=e.window;return{windowHeight:t.windowHeight,windowWidth:t.windowWidth}},function(e,t){return{}}),Object(E.b)({}),Object(E.c)([]))(K),$=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(x.a,{store:v},a.a.createElement(Z,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,2,1]]]);
//# sourceMappingURL=main.6327782d.chunk.js.map