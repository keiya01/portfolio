(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(70)},55:function(e,t,n){},68:function(e,t,n){e.exports=n.p+"static/media/thumbnail.79b1ce1a.jpg"},70:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(44),c=n.n(a),r=(n(55),n(9)),l=n(14),s=n(11),u=n(10),h=n(12),d=n(7),w=n(21),b=n(45),f=n.n(b),p=n(46),m=n(18),j="portfolio/window/RESIZE_WINDOW",O={windowHeight:window.innerHeight,windowWidth:window.innerWidth<600?window.innerWidth:600};function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=t.windowHeight,i=t.windowWidth;return Object(m.a)({},e,{windowHeight:n,windowWidth:i});default:return Object(m.a)({},e)}}var v=Object(w.d)(Object(w.c)({window:g}),Object(w.a)(p.a,f.a)),C=n(17),x=n(15),y=n(3),E=n(73),k=n(74),W=n(8),H=[],z=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).drawCircle=function(){var e=Object(W.a)(Object(W.a)(n)),t=e.context,i=e.name,o=e.positionX,a=e.positionY,c=e.size,r=e.color;n.setFillCanvas(),t.arc(o,a,c,0,2*Math.PI),t.fill(),H.length<3&&H.push({name:i,x:o,y:a,size:c,color:r})},n.setShadow=function(){var e=Object(W.a)(Object(W.a)(n)).context;e.shadowColor="#eee",e.shadowBlur=.5,e.shadowOffsetX=-.5,e.shadowOffsetY=.5},n.setText=function(){var e=Object(W.a)(Object(W.a)(n)),t=e.context,i=e.name,o=e.positionX,a=e.positionY;t.beginPath(),t.font="bold 22px Franklin Gothic Medium",t.fillStyle="#333",t.textAlign="center",t.fillText(i,o,a+5)},n.startClickAnimation=function(e,i){return function(i){var o=e.windowHeight,a=e.windowWidth,c=Object(W.a)(Object(W.a)(n)),r=c.context,l=c.name,s=c.positionX,u=c.positionY,h=c.size,d=c.color;if(h>o&&h>a)switch(l){case"Portfolio":return void e.history.push("/portfolio");case"Blog":return void e.history.push("/blog")}else{var w=new t(r,l,s,u,h+20,d);w.drawCircle(),window.requestAnimationFrame(w.startClickAnimation(e))}}},n.onClick=function(e,t){var i=e.clientX,o=e.clientY,a=Object(W.a)(Object(W.a)(n)),c=(a.name,a.positionX),r=a.positionY,l=a.size,s=e.target.getBoundingClientRect(),u=i-s.left,h=o-s.top;Math.pow(u-c,2)+Math.pow(h-r,2)<Math.pow(l,2)&&window.requestAnimationFrame(n.startClickAnimation(t))},n}return Object(h.a)(t,e),t}(function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"black";Object(r.a)(this,e),this.setFillCanvas=function(){var e=n.context,t=(n.name,n.positionX,n.positionY,n.color);e.beginPath(),e.fillStyle=t},this.context=t,this.name=i,this.positionX=o,this.positionY=a,this.size=c,this.color=l}),R=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.setRef,n=e.onCircleClick,i=e.canvas,a=(e.onResize,e.setCircle,e.windowHeight),c=e.windowWidth;return null!==i&&i.addEventListener("click",n(this.props)),o.a.createElement("div",{className:Object(d.b)(A.wrapper)},o.a.createElement("canvas",{ref:function(e){return t(e,"canvas")},className:Object(d.b)(A.canvas),width:c,height:a}))}}]),t}(i.Component),A=d.a.create({wrapper:{width:"100%",height:"100%",backgroundColor:"#eee",textAlign:"center"},canvas:{display:"inline-block",backgroundColor:"#eee"}}),N=R,F={canvas:null,windowHeight:window.innerHeight,windowWidth:window.innerWidth<800?window.innerWidth:800},S={handleChange:function(e){return function(e,t){return Object(x.a)({},e,t)}},onResize:function(e){return function(e,t){return console.log(e,t),{windowHeight:e,windowWidth:t<800?t:800}}}},T=Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t,n){return e[n]=t}},getRefs:function(t){return function(){return e}}}}(),{setCircle:function(e){return function(t){var n=e.windowHeight,i=e.windowWidth,o=t.getContext("2d");o.clearRect(0,0,i,n);for(var a=[{name:"Blog",x:.35*i,y:.55*n,size:.25*i,color:"#fff"},{name:"Portfolio",x:.65*i,y:.42*n,size:.25*i,color:"#fff"}],c=navigator.userAgent.toLowerCase(),r=0;r<a.length;r++){var l=a[r],s=l.name,u=l.x,h=l.y,d=l.size,w=l.color,b=u,f=h,p=d;null===c.match(/android|iphone/)&&(p=.65*d),null!==c.match(/ipad/)&&(b=1*u,f=.8*h);var m=new z(o,s,b,f,p,w);m.drawCircle(),m.setShadow(),m.setText()}}},onCircleClick:function(e){return function(t){return function(n){for(var i=e.canvas.getContext("2d"),o=0;o<H.length;o++){var a=H[o],c=a.name,r=a.x,l=a.y,s=a.size,u=a.color;new z(i,c,r,l,s,u).onClick(n,t)}}}}}),X={componentDidMount:function(){var e=this.props,t=e.setCircle,n=(0,e.getRefs)().canvas;t(n),this.props.handleChange("canvas",n)},componentDidUpdate:function(){var e=this.props,t=e.onResize,n=e.canvas,i=e.setCircle;if(null!==n){var o=null;window.addEventListener("resize",function(){clearTimeout(o),o=setTimeout(function(){t(window.innerHeight,window.innerWidth),i(n)},100)})}}},Y=Object(y.a)(Object(y.d)("GroupCircle"),Object(y.f)(F,S),Object(y.e)(T),Object(C.b)(function(e){return Object(m.a)({},e)},function(e,t){return{}}),Object(y.b)(X),Object(y.c)(["canvas","windowHeight","windowWidth"]))(N),B=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:Object(d.b)(M.container)},o.a.createElement("div",{className:Object(d.b)(M.textContainer),style:{marginBottom:50}},o.a.createElement("img",{src:n(68),className:Object(d.b)(M.image)}),o.a.createElement("p",{className:Object(d.b)(M.name)},"Keiya Sasaki")),o.a.createElement("div",{className:Object(d.b)(M.textContainer)},o.a.createElement("p",{className:Object(d.b)(M.simpleText)},"about me"))),o.a.createElement(Y,{history:this.props.history}))}}]),t}(i.Component),M=d.a.create({container:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",height:"100vh"},image:{width:70,height:70,borderRadius:"50%",objectFit:"cover",marginRight:20},name:{fontSize:20,color:"#444",fontWeight:600},textContainer:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center"},simpleText:{textAlign:"left"}}),I=B,P={handleChange:function(e){return function(e,t){return Object(x.a)({},e,t)}}},D=Object(y.a)(Object(y.d)("HomeTopScreen"),Object(y.f)({},P),Object(y.e)(function(e){return{}}),Object(C.b)(function(e){return Object(m.a)({},e)},function(e,t){return{}}),Object(y.b)({}),Object(y.c)([]))(I),L=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a,null,o.a.createElement(i.Fragment,null,o.a.createElement(k.a,{exact:!0,path:"/",component:D}),o.a.createElement(k.a,{path:"/portfolio",component:D}),o.a.createElement(k.a,{path:"/profiel",component:D}),o.a.createElement(k.a,{path:"/blog",component:D})))}}]),t}(i.Component),q={handleChange:function(e){return function(e,t){return Object(x.a)({},e,t)}}},G=Object(y.a)(Object(y.d)("AppRoute"),Object(y.f)({},q),Object(y.e)(function(e){return{}}),Object(C.b)(function(e){var t=e.window;return{windowHeight:t.windowHeight,windowWidth:t.windowWidth}},function(e,t){return{}}),Object(y.b)({}),Object(y.c)([]))(L),J=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(C.a,{store:v},o.a.createElement(G,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,2,1]]]);
//# sourceMappingURL=main.807885bb.chunk.js.map