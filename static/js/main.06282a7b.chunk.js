(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(t,e,n){t.exports=n(71)},56:function(t,e,n){},69:function(t,e,n){t.exports=n.p+"static/media/thumbnail.79b1ce1a.jpg"},71:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(44),r=n.n(a),c=(n(56),n(9)),l=n(15),s=n(11),u=n(10),d=n(12),h=n(7),f=n(21),m=n(45),b=n.n(m),w=n(46),p=n(14),g="portfolio/window/RESIZE_WINDOW",O={windowHeight:window.innerHeight,windowWidth:window.innerWidth<600?window.innerWidth:600};function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:var n=e.windowHeight,i=e.windowWidth;return Object(p.a)({},t,{windowHeight:n,windowWidth:i});default:return Object(p.a)({},t)}}var v=Object(f.d)(Object(f.c)({window:j}),Object(f.a)(w.a,b.a)),x=n(18),y=n(16),E=n(3),C=n(74),W=n(75),R=n(50),k=n(4),z=[],F=[],T=function(t){function e(t,n,i,o,a,r){var l,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(c.a)(this,e),(l=Object(s.a)(this,Object(u.a)(e).call(this,t,n,i,o,a,r))).drawCircle=function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=Object(k.a)(Object(k.a)(l)),i=n.context,o=n.name,a=n.positionX,r=n.positionY,c=n.size,s=n.color,u=n.text;(l.setFillCanvas(),i.arc(a,r,c,0,2*Math.PI),i.fill(),console.log("temp: ",F.length,F),e)&&(2===F.length&&(F=[]),F.push({name:o,x:a,y:r,size:c,color:s,text:u}),2===F.length&&((t=z=[]).push.apply(t,Object(R.a)(F)),console.log("option: ",z)))},l.setShadow=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=Object(k.a)(Object(k.a)(l)).context;e.shadowColor="#555",e.shadowOffsetX=-.5,e.shadowOffsetY=null!==t?t:2,e.shadowBlur=null!==t?1:8},l.resetShadow=function(){var t=Object(k.a)(Object(k.a)(l)).context;t.shadowColor="#fff",t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0},l.setTitle=function(){var t=Object(k.a)(Object(k.a)(l)),e=t.context,n=t.name,i=t.positionX,o=t.positionY;e.beginPath(),e.font="bold 22px Franklin Gothic Medium",e.fillStyle="#333",e.textAlign="center",e.fillText(n,i,o)},l.setText=function(){var t=Object(k.a)(Object(k.a)(l)),e=t.context,n=t.text,i=t.positionX,o=t.positionY;t.size;e.beginPath(),e.font="normal 13px sans-serif",e.fillStyle="#555",e.textAlign="center",e.fillText(n,i,o+30)},l.clickAnimation=function(t,n,i){return function(o){var a=Object(k.a)(Object(k.a)(l)),r=a.context,c=a.name,s=a.size,u=a.positionY,d=window.innerHeight,h=window.innerWidth,f=s,m=u;if(f<=n-25)return console.log("next!!!"),void window.requestAnimationFrame(t);var b={};r.clearRect(0,0,h,d);for(var w=0;w<z.length;w++){var p=z[w],g=p.name,O=p.x,j=p.y,v=p.size,x=p.color,y=p.text,E=g===c,C=E?f-3:v,W=E?m+2:j;console.log(W,C);var R=new e(r,g,O,W,C,x,y);E?(b=R,R.setShadow(.1)):R.setShadow(),R.drawCircle(),R.resetShadow(),R.setTitle(),R.setText()}window.requestAnimationFrame(b.clickAnimation(t,n,i))}},l.transitionAnimation=function(t,n){return function(n){var i=t.windowHeight,o=t.windowWidth,a=Object(k.a)(Object(k.a)(l)),r=a.context,c=a.name,s=a.positionX,u=a.positionY,d=a.size,h=a.color;if(d>i&&d>o)switch(c){case"Works":return void t.history.push("/portfolio/works");case"Blogs":return void t.history.push("/portfolio/blogs")}else{var f=new e(r,c,s,u,d+20,h);f.drawCircle(!1),window.requestAnimationFrame(f.transitionAnimation(t))}}},l.onClick=function(t,e){var n=t.clientX,i=t.clientY,o=Object(k.a)(Object(k.a)(l)),a=(o.name,o.positionX),r=o.positionY,c=o.size,s=t.target.getBoundingClientRect(),u=n-s.left,d=i-s.top;return Math.pow(u-a,2)+Math.pow(d-r,2)<Math.pow(c,2)},l.text=d,l.canvasStore=[],l}return Object(d.a)(e,t),e}(function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"black";Object(c.a)(this,t),this.setFillCanvas=function(){var t=n.context,e=(n.name,n.positionX,n.positionY,n.color);t.beginPath(),t.fillStyle=e},this.context=e,this.name=i,this.positionX=o,this.positionY=a,this.size=r,this.color=l}),H=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.setRef,n=t.onCircleClick,i=t.canvas,a=(t.onResize,t.setCircle,t.windowHeight),r=t.windowWidth;t.children;null!==i&&i.addEventListener("click",n(this.props));return o.a.createElement("div",{className:Object(h.b)(S.wrapper)},o.a.createElement("div",{className:Object(h.b)(S.titleWrapper)},o.a.createElement("h3",{className:Object(h.b)(S.infoTitle,S.fontResize)},"Information")),o.a.createElement("canvas",{ref:function(t){return e(t,"canvas")},className:Object(h.b)(S.canvas),width:r,height:a}))}}]),e}(i.Component),S=h.a.create({wrapper:{position:"relative",width:"100%",height:"100%",backgroundColor:"#FF0066"},titleWrapper:{display:"inline-block",position:"absolute",top:"10%",left:0,right:0,textAlign:"center"},infoTitle:{fontSize:50,fontWeight:"bold",color:"#fff"},fontResize:{"@media (max-width: 600px)":{fontSize:30}},canvas:{backgroundColor:"#FF0066"}}),N=H,A={canvas:null,windowHeight:window.innerHeight,windowWidth:window.innerWidth},D={handleChange:function(t){return function(t,e){return Object(y.a)({},t,e)}},onResize:function(t){return function(t,e){return console.log(t,e),{windowHeight:t,windowWidth:e}}}},B=Object(p.a)({},function(){var t={};return{setRef:function(e){return function(e,n){return t[n]=e}},getRefs:function(e){return function(){return t}}}}(),{setCircle:function(t){return function(e){var n=t.windowHeight,i=t.windowWidth,o=e.getContext("2d");o.clearRect(0,0,i,n);for(var a=[{name:"Blogs",x:.34*i,y:.6*n,size:.25*i,color:"#fff",text:"\u5b66\u3073\u306e\u8a18\u9332"},{name:"Works",x:.66*i,y:.51*n,size:.25*i,color:"#fff",text:"\u4f5c\u54c1\u4e00\u89a7"}],r=navigator.userAgent.toLowerCase(),c=0;c<a.length;c++){var l=a[c],s=l.name,u=l.x,d=l.y,h=l.size,f=l.color,m=l.text,b=u,w=d,p=h;null===r.match(/android|iphone/)&&(b*="Blogs"===s?1.25:.89,w*="Blogs"===s?1.1:1.08,p*=i>1e3?.5:.65),null!==r.match(/ipad/)&&(b*="Blogs"===s?.8:1.1,w*="Blogs"===s?1:1.1,p=.25*i);var g=new T(o,s,b,w,p,f,m);g.setShadow(),g.drawCircle(),g.resetShadow(),g.setTitle(),g.setText()}}},onCircleClick:function(t){return function(e){return function(n){for(var i=t.canvas.getContext("2d"),o=null,a=0;a<z.length;a++){var r=z[a],c=r.name,l=r.x,s=r.y,u=r.size,d=r.color,h=r.text,f=new T(i,c,l,s,u,d,h);f.onClick(n,e)&&(o=f)}null!==o&&window.requestAnimationFrame(o.clickAnimation(o.transitionAnimation(e),o.size,e))}}}}),Y={componentDidMount:function(){var t=this.props,e=t.setCircle,n=(0,t.getRefs)().canvas;e(n),this.props.handleChange("canvas",n)},componentDidUpdate:function(){var t=this.props,e=t.onResize,n=t.canvas,i=t.setCircle;if(null!==n){var o=null;window.addEventListener("resize",function(){clearTimeout(o),o=setTimeout(function(){e(window.innerHeight,window.innerWidth),i(n)},100)})}}},X=Object(E.a)(Object(E.d)("GroupCircle"),Object(E.f)(A,D),Object(E.e)(B),Object(x.b)(function(t){return Object(p.a)({},t)},function(t,e){return{}}),Object(E.b)(Y),Object(E.c)(["canvas","windowHeight","windowWidth"]))(N),P=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return console.log(this.props),o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:Object(h.b)(M.container)},o.a.createElement("div",{className:Object(h.b)(M.profileContainer),style:{paddingBottom:50}},o.a.createElement("img",{src:n(69),className:Object(h.b)(M.image)}),o.a.createElement("p",{className:Object(h.b)(M.name)},"Keiya Sasaki")),o.a.createElement("div",{className:Object(h.b)(M.descriptionContainer),style:{opacity:0},ref:this.props.setRef("divDescription")},o.a.createElement("table",{className:Object(h.b)(M.descriptionText)},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"\u751f\u5e74\u6708\u65e5"),o.a.createElement("td",null,"1999/02/10")),o.a.createElement("tr",null,o.a.createElement("td",{style:{width:"40%"}},"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u6b74"),o.a.createElement("td",null,"2017/06/01 \u301c \u73fe\u5728")),o.a.createElement("tr",null,o.a.createElement("td",null,"\u8a00\u8a9e"),o.a.createElement("td",null,"Ruby(Ruby on Rails), PHP(FuelPHP), Go, React, ReactNative")))),o.a.createElement("br",null),o.a.createElement("p",{className:Object(h.b)(M.descriptionText)},"\u3061\u306a\u307f\u306b\u3053\u306e\u30b5\u30a4\u30c8\u306fReact\u3067\u66f8\u3044\u3066\u3044\u307e\u3059\u3002"),o.a.createElement("br",null),o.a.createElement("span",{style:{fontWeight:"bold"}},"Career"),o.a.createElement("br",null),o.a.createElement("table",{className:Object(h.b)(M.descriptionText)},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"2017/06/01"),o.a.createElement("td",null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u5b66\u7fd2\u958b\u59cb")),o.a.createElement("tr",null,o.a.createElement("td",null,"2018/03/01"),o.a.createElement("td",null,"\u682a\u5f0f\u4f1a\u793eAppRuns\u3067\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u30a2\u30eb\u30d0\u30a4\u30c8")))))),o.a.createElement(X,{history:this.props.history}))}}]),e}(i.Component),M=h.a.create({container:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",height:"100vh"},profileContainer:{display:"flex",margin:"0 auto",width:"90%",alignItems:"center",justifyContent:"center"},image:{width:70,height:70,borderRadius:"50%",objectFit:"cover",marginRight:20,border:"solid 1px #FFFF00",animationName:[{from:{transform:"translate(55%, 0)"},to:{transform:"translate(0, 0)"}}],animationTimingFunction:"easy",animationDuration:"2s",animationDelay:"0s"},name:{fontSize:20,color:"#333",fontWeight:600,animationName:[{from:{opacity:0},to:{opacity:1}}],animationTimingFunction:"easy",animationDuration:"4s",animationDelay:"0s"},descriptionContainer:{width:"90%",maxWidth:480,margin:"0 auto",paddingLeft:20,animationName:[{from:{opacity:0,transform:"translate(0, 100px)"},to:{opacity:1,transform:"translate(0, 0)"}}],animationDuration:"3s",animationTimingFunction:"ease",animationDelay:"2s"},descriptionText:{color:"#555",fontSize:15}}),I=P,q={handleChange:function(t){return function(t,e){return Object(y.a)({},t,e)}}},L=Object(p.a)({},function(){var t={};return{setRef:function(e){return function(e){return function(n){return t[e]=n}}},getRefs:function(e){return function(){return t}}}}()),G={componentDidMount:function(){var t=(0,this.props.getRefs)().divDescription;setTimeout(function(){t.style.opacity=1},3500)}},J=Object(E.a)(Object(E.d)("HomeTopScreen"),Object(E.f)({},q),Object(E.e)(L),Object(x.b)(function(t){return Object(p.a)({},t)},function(t,e){return{}}),Object(E.b)(G),Object(E.c)([]))(I),K=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement(C.a,null,o.a.createElement(i.Fragment,null,o.a.createElement(W.a,{exact:!0,path:"/portfolio",component:J}),o.a.createElement(W.a,{path:"/portfolio/works",component:J}),o.a.createElement(W.a,{path:"/portfolio/blogs",component:J})))}}]),e}(i.Component),U={handleChange:function(t){return function(t,e){return Object(y.a)({},t,e)}}},Z=Object(E.a)(Object(E.d)("AppRoute"),Object(E.f)({},U),Object(E.e)(function(t){return{}}),Object(x.b)(function(t){var e=t.window;return{windowHeight:e.windowHeight,windowWidth:e.windowWidth}},function(t,e){return{}}),Object(E.b)({}),Object(E.c)([]))(K),$=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement(x.a,{store:v},o.a.createElement(Z,null))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[51,2,1]]]);
//# sourceMappingURL=main.06282a7b.chunk.js.map