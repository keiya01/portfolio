(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/thumbnail.79b1ce1a.jpg"},108:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(59),r=n.n(i),c=(n(73),n(21)),l=n(60),s=n.n(l),d=n(61),m=n(4),u=n(62),f=n.n(u),b="portfolio/works/",h=b+"GET_WORKS_START",p=b+"GET_WORKS_SUCCESS",g=b+"GET_WORKS_FAILED",w=b+"GET_WORKS_END",v={data:[],isFetching:!1};function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(m.a)({},e,{isFetching:!0});case p:var n=t.data;return Object(m.a)({},e,{data:n,isFetching:!0});case g:return Object(m.a)({},e,{error:t.error});case w:return Object(m.a)({},e,{isFetching:!1});default:return Object(m.a)({},e)}}var O=function(){return function(e,t){e({type:h}),f.a.get("https://script.google.com/macros/s/AKfycbx1zqRJTh_4qbfopWyGS-4rqibT5OUKc5V_pwz_m_9Xbqus3FZy/exec").then(function(t){e(function(e){return{type:p,data:e}}(t.data))}).catch(function(t){e({type:g,error:t})}).finally(function(){e({type:w})})}};var x=Object(c.d)(Object(c.c)({works:j}),Object(c.a)(d.a,s.a)),y=n(13),E=n(10),C=n(3),T=n(114),S=n(115),k=n(113),N=n(1),R=n(67),z=n(20),A=n(29),F=n(25),D=n(30),B=n(7),W=[],I=[],L=function(e){function t(e,n,a,o,i,r){var c,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(z.a)(this,t),(c=Object(A.a)(this,Object(F.a)(t).call(this,e,n,a,o,i,r))).drawCircle=function(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=Object(B.a)(Object(B.a)(c)),a=n.context,o=n.name,i=n.positionX,r=n.positionY,l=n.size,s=n.color,d=n.text;(c.setFillCanvas(),a.arc(i,r,l,0,2*Math.PI),a.fill(),t)&&(2===I.length&&(I=[]),I.push({name:o,x:i,y:r,size:l,color:s,text:d}),2===I.length&&(e=W=[]).push.apply(e,Object(R.a)(I)))},c.setShadow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(B.a)(Object(B.a)(c)).context;t.shadowColor="#555",t.shadowOffsetX=-.5,t.shadowOffsetY=null!==e?e:2,t.shadowBlur=null!==e?1:8},c.resetShadow=function(){var e=Object(B.a)(Object(B.a)(c)).context;e.shadowColor="#fff",e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowBlur=0},c.setTitle=function(){var e=Object(B.a)(Object(B.a)(c)),t=e.context,n=e.name,a=e.positionX,o=e.positionY;t.beginPath(),t.font="bold 40px Arial",t.fillStyle="#333",t.textAlign="center",t.fillText(n,a,o)},c.setText=function(){var e=Object(B.a)(Object(B.a)(c)),t=e.context,n=e.text,a=e.positionX,o=e.positionY;e.size;t.beginPath(),t.font="normal 25px \u6e38\u30b4\u30b7\u30c3\u30af",t.fillStyle="#555",t.textAlign="center",t.fillText(n,a,o+50)},c.clickAnimation=function(e,n,a){return function(o){var i=Object(B.a)(Object(B.a)(c)),r=i.context,l=i.name,s=i.size,d=i.positionY,m=window.innerHeight,u=window.innerWidth,f=s,b=d;if(f<=n-25)window.requestAnimationFrame(e);else{var h={};r.clearRect(0,0,2*u,2*m);for(var p=0;p<W.length;p++){var g=W[p],w=g.name,v=g.x,j=g.y,O=g.size,x=w===l,y=new t(r,w,v,x?b+2:j,x?f-3:O,g.color,g.text);x?(h=y,y.setShadow(.1)):y.setShadow(),y.drawCircle(),y.resetShadow(),y.setTitle(),y.setText()}window.requestAnimationFrame(h.clickAnimation(e,n,a))}}},c.transitionAnimation=function(e){return function(n){var a=e.windowHeight,o=e.windowWidth,i=Object(B.a)(Object(B.a)(c)),r=i.context,l=i.name,s=i.positionX,d=i.positionY,m=i.size,u=i.color;if(m>2*a&&m>2*o)switch(l){case"Works":return void e.history.push("/works");case"Blog":return void e.history.push("/blogs")}else{var f=m,b=55;null!==navigator.userAgent.toLowerCase().match(/android|iphone/)&&(b=35);var h=new t(r,l,s,d,f+b,u);h.drawCircle(!1),window.requestAnimationFrame(h.transitionAnimation(e))}}},c.onClick=function(e,t){var n=e.clientX,a=e.clientY,o=Object(B.a)(Object(B.a)(c)),i=(o.name,o.positionX),r=o.positionY,l=o.size,s=e.target.getBoundingClientRect(),d=2*n-s.left,m=2*a-s.top;return Math.pow(d-i,2)+Math.pow(m-r,2)<Math.pow(l,2)},c.text=l,c.canvasStore=[],c}return Object(D.a)(t,e),t}(function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"black";Object(z.a)(this,e),this.setFillCanvas=function(){var e=n.context,t=n.color;e.beginPath(),e.fillStyle=t},this.context=t,this.name=a,this.positionX=Math.floor(o),this.positionY=Math.floor(i),this.size=Math.floor(r),this.color=c});var Y=N.a.create({wrapper:{position:"relative",width:"100%",height:"100%"},titleWrapper:{display:"inline-block",position:"absolute",top:"10%",left:0,right:0,textAlign:"center"},movePosition:{"@media (max-width: 450px)":{top:"20%"}},infoTitle:{fontSize:50,fontWeight:"bold",color:"#fff"},fontResize:{"@media (max-width: 600px)":{fontSize:30}},canvas:{backgroundColor:"#e83e53"}});window.innerHeight,window.innerWidth<600&&window.innerWidth;var H={canvas:null,windowHeight:window.innerHeight,windowWidth:window.innerWidth,isCircleClicked:!1},M={handleChange:function(e){return function(e,t){return Object(E.a)({},e,t)}},onResize:function(e){return function(e,t){return{windowHeight:e,windowWidth:t}}}},q=function(e){return function(t){var n=2*e.windowHeight,a=2*e.windowWidth;t.height=n,t.width=a;var o=t.getContext("2d");o.clearRect(0,0,a,n);for(var i=[{name:"Blog",x:.34*a,y:.6*n,size:.25*a,color:"#fff",text:"\u5b66\u7fd2\u8a18\u9332"},{name:"Works",x:.66*a,y:.51*n,size:.25*a,color:"#fff",text:"\u4f5c\u54c1\u4e00\u89a7"}],r=navigator.userAgent.toLowerCase(),c=0;c<i.length;c++){var l=i[c],s=l.name,d=l.x,m=l.y,u=l.size,f=l.color,b=l.text,h=d,p=m,g=u;null===r.match(/android|iphone/)&&(h*="Blog"===s?1.25:.89,p*="Blog"===s?1.1:1.08,g*=a>1e3?.5:.65),null!==r.match(/ipad/)&&(h*="Blog"===s?.8:1.1,p*="Blog"===s?1:1.1,g=.25*a);var w=new L(o,s,h,p,g,f,b);w.setShadow(),w.drawCircle(),w.resetShadow(),w.setTitle(),w.setText()}}},_={componentDidMount:function(){var e=this.props,t=e.setCircle,n=(0,e.getRefs)().canvas;t(n),this.props.handleChange("canvas",n)},componentDidUpdate:function(){var e=this.props,t=e.onResize,n=e.canvas,a=e.setCircle;if(null!==n){var o=null;window.addEventListener("resize",function(){clearTimeout(o),o=setTimeout(function(){null!==navigator.userAgent.toLowerCase().match(/android|iphone/)?t(window.screen.height,window.screen.width):t(window.innerHeight,window.innerWidth),a(n)},100)})}}},P=Object(C.a)(Object(C.e)("GroupCircle"),Object(C.g)(H,M),Object(C.f)(function(e){return Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t,n){return e[n]=t}},getRefs:function(t){return function(){return e}}}}(),function(e){var t=!1;return{onCircleClick:function(e){return function(n){return function(a){var o=e.canvas;if(e.handleChange,e.isCircleClicked,!t){t=!0;for(var i=o.getContext("2d"),r=null,c=0;c<W.length;c++){var l=W[c],s=l.name,d=l.x,m=l.y,u=l.size,f=l.color,b=l.text,h=new L(i,s,d,m,u,f,b);h.onClick(a,n)&&(r=h)}null!==r&&window.requestAnimationFrame(r.clickAnimation(r.transitionAnimation(n),r.size,n))}}}}}}(),{setCircle:q})}),Object(y.b)(function(e){return Object(m.a)({},e)},function(e,t){return{}}),Object(C.b)(_),Object(C.c)(["canvas","windowHeight","windowWidth"]))(function(e){var t=e.setRef,n=e.onCircleClick,a=e.canvas,i=e.windowWidth,r=e.windowHeight;return null!==a&&a.addEventListener("click",n(e)),o.a.createElement("div",{className:Object(N.b)(Y.wrapper)},o.a.createElement("div",{className:Object(N.b)(Y.titleWrapper,Y.movePosition)},o.a.createElement("h3",{className:Object(N.b)(Y.infoTitle,Y.fontResize)},"Information")),o.a.createElement("canvas",{ref:function(e){return t(e,"canvas")},className:Object(N.b)(Y.canvas),style:{width:i,height:r}}))});var X=N.a.create({container:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",height:"100vh"},profileContainer:{display:"flex",margin:"0 auto",width:"90%",alignItems:"center",justifyContent:"center"},image:{width:70,height:70,borderRadius:"50%",objectFit:"cover",marginRight:20,border:"solid 1px #F9CDAD",animationName:[{from:{transform:"translate(55%, 0)"},to:{transform:"translate(0, 0)"}}],animationTimingFunction:"easy",animationDuration:"2s",animationDelay:"0s"},name:{fontSize:20,color:"#757575",fontWeight:600,animationName:[{from:{opacity:0},to:{opacity:1}}],animationTimingFunction:"easy",animationDuration:"4s",animationDelay:"0s"},descriptionContainer:{width:"90%",maxWidth:480,margin:"0 auto",paddingLeft:20,animationName:[{from:{opacity:0,transform:"translate(0, 100px)"},to:{opacity:1,transform:"translate(0, 0)"}}],animationDuration:"3s",animationTimingFunction:"ease",animationDelay:"2s"},descriptionText:{color:"#555",fontSize:15}}),G={handleChange:function(e){return function(e,t){return Object(E.a)({},e,t)}}},U=Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t){return function(n){return e[t]=n}}},getRefs:function(t){return function(){return e}}}}()),K={componentDidMount:function(){var e=(0,this.props.getRefs)().divDescription;setTimeout(function(){e.style.opacity=1},3500)}},J=Object(C.a)(Object(C.e)("HomeTopScreen"),Object(C.g)({},G),Object(C.f)(U),Object(y.b)(function(e){return Object(m.a)({},e)},function(e,t){return{}}),Object(C.b)(K),Object(C.c)([]))(function(e){return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:Object(N.b)(X.container)},o.a.createElement("div",{className:Object(N.b)(X.profileContainer),style:{paddingBottom:50}},o.a.createElement("img",{src:n(104),className:Object(N.b)(X.image)}),o.a.createElement("p",{className:Object(N.b)(X.name)},"Keiya Sasaki")),o.a.createElement("div",{className:Object(N.b)(X.descriptionContainer),style:{opacity:0},ref:e.setRef("divDescription")},o.a.createElement("table",{className:Object(N.b)(X.descriptionText)},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"\u751f\u5e74\u6708\u65e5"),o.a.createElement("td",null,"1999/02/10")),o.a.createElement("tr",null,o.a.createElement("td",{style:{width:"40%"}},"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u6b74"),o.a.createElement("td",null,"2017/06/01 \u301c \u73fe\u5728")),o.a.createElement("tr",null,o.a.createElement("td",null,"\u8a00\u8a9e"),o.a.createElement("td",null,"Ruby(Ruby on Rails), PHP(FuelPHP), Go, React, ReactNative")))),o.a.createElement("br",null),o.a.createElement("p",{className:Object(N.b)(X.descriptionText)},"\u3061\u306a\u307f\u306b\u3053\u306e\u30b5\u30a4\u30c8\u306fReact\u3067\u66f8\u3044\u3066\u3044\u307e\u3059\u3002"),o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#FC9D9A",fontWeight:"bold"}},"Career"),o.a.createElement("br",null),o.a.createElement("table",{className:Object(N.b)(X.descriptionText)},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"2017/06/01"),o.a.createElement("td",null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u5b66\u7fd2\u958b\u59cb")),o.a.createElement("tr",null,o.a.createElement("td",null,"2018/03/01"),o.a.createElement("td",null,"\u682a\u5f0f\u4f1a\u793eAppRuns\u3067\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u30a2\u30eb\u30d0\u30a4\u30c8")))))),o.a.createElement(P,{history:e.history}))}),Q=n(111);N.a.create({container:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",height:"100vh",backgroundColor:"#fff"},message:{textAlign:"center",color:"#FA776D",fontSize:25},link:{marginTop:30,textAlign:"center",color:"#4EA1D5",fontSize:16,textDecoration:"none"}});var V=n(14),Z=n(64),$=function(e){var t=e.icon,n=e.line,a=e.iconColor,i=t||"circle",r=!t&&10,c=t?"-1.3em":"-0.9em";return o.a.createElement("li",{className:Object(N.b)(te.contentListItem),style:{textIndent:c}},o.a.createElement(V.a,{icon:i,style:{color:a,fontSize:r,marginRight:5}}),n)},ee=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(A.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(i)))).nl2br=function(e,t,n){var a=/(\n)/g;return e.split(a).map(function(e,i){return e.match(a)?o.a.createElement("br",{key:i}):o.a.createElement($,{line:e,icon:t,iconColor:n,key:i})})},n}return Object(D.a)(t,e),Object(Z.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.technology,i=t.body,r=t.favorite,c=t.improvement,l=t.color,s=t.image,d=t.link,m=t.created_at,u=t.onShowItem;return o.a.createElement("div",{className:Object(N.b)(te.item),onClick:function(){return u(e.animation,e.filter,e.props)},style:{height:400,overflowY:"hidden"},ref:function(t){return e.animation=t}},s?o.a.createElement("img",{src:s,className:Object(N.b)(te.image)}):o.a.createElement("div",{className:Object(N.b)(te.noImage)},o.a.createElement("h3",{className:Object(N.b)(te.noImageText)},"No Image")),o.a.createElement("div",{className:Object(N.b)(te.contentContainer)},o.a.createElement("h3",{className:Object(N.b)(te.contentTitle),style:{color:l}},n),o.a.createElement("p",{className:Object(N.b)(te.createdAt)},"\u4f5c\u6210\u65e5: ",m),o.a.createElement("div",{style:{clear:"left"}}),o.a.createElement("p",{className:Object(N.b)(te.technologyContainer)},o.a.createElement("span",{style:{color:l}},"\u6280\u8853"),": ",a),o.a.createElement("ul",{className:Object(N.b)(te.contentList)},this.nl2br(i,"check",l)),o.a.createElement("p",{className:Object(N.b)(te.subTitle),style:{color:"#FA776D"}},o.a.createElement(V.a,{icon:"grin-squint",style:{marginRight:5}}),"\u304a\u6c17\u306b\u5165\u308a\u30dd\u30a4\u30f3\u30c8"),o.a.createElement("ul",{className:Object(N.b)(te.contentList)},this.nl2br(r)),o.a.createElement("p",{className:Object(N.b)(te.subTitle),style:{color:"#F9CDAD"}},o.a.createElement(V.a,{icon:"frown",style:{marginRight:5}}),"\u53cd\u7701\u70b9"),o.a.createElement("ul",{className:Object(N.b)(te.contentList)},this.nl2br(c)),o.a.createElement("div",{className:Object(N.b)(te.codeBtn)},o.a.createElement("a",{className:Object(N.b)(te.codeLink),href:d},o.a.createElement(V.a,{icon:["fab","github"],style:{fontSize:20,marginRight:5}}),"Github\u3092\u898b\u308b"))),o.a.createElement("div",{className:Object(N.b)(te.filter),ref:function(t){return e.filter=t}},o.a.createElement("h3",{className:Object(N.b)(te.filterText)},"\u3082\u3063\u3068\u898b\u308b")))}}]),t}(a.Component),te=N.a.create({item:{position:"relative",width:"90%",maxWidth:480,borderRadius:20,boxShadow:"2px 2px 10px #ddd, -2px -2px 10px #ddd",margin:"0 auto",backgroundColor:"#fff",cursor:"pointer"},image:{width:"100%",height:200,borderTopLeftRadius:20,borderTopRightRadius:20,objectFit:"contain",paddingBottom:3,borderBottom:"solid 1.5px #ccc"},noImage:{display:"flex",width:"100%",height:200,justifyContent:"center",alignItems:"center",borderTopLeftRadius:20,borderTopRightRadius:20,borderBottom:"solid 1.5px #ccc"},noImageText:{fontSize:25,color:"#ccc"},contentContainer:{height:"100%",padding:"20px"},contentTitle:{float:"left",fontSize:30,marginBottom:10},createdAt:{float:"right",fontSize:13,color:"#777"},technologyContainer:{fontSize:14,color:"#757575",textIndent:"-2.5em",wordWrap:"break-word",paddingLeft:35,marginTop:25,marginBottom:25},contentList:{listStyle:"none",padding:0,paddingLeft:20,marginTop:10,wordWrap:"break-word"},contentListItem:{fontSize:16,color:"#555"},subTitle:{fontSize:16,fontWeight:"bold",marginTop:35},codeBtn:{textAlign:"center",marginTop:50},codeLink:{fontSize:16,color:"#757575",textDecoration:"underline solid #757575"},filter:{position:"absolute",bottom:0,right:0,left:0,backgroundColor:"rgba(255, 255, 255, 0.9)",height:65,borderBottomLeftRadius:20,borderBottomRightRadius:20},filterText:{color:"#FA776D",fontSize:17,textAlign:"center",marginTop:20}});function ne(e){var t=e.uri,n=e.text;return o.a.createElement(Q.a,{to:t,style:{textDecoration:"none"}},o.a.createElement("div",{className:Object(N.b)(ae.btnContainer)},o.a.createElement("p",{className:Object(N.b)(ae.btnText)},n)))}var ae=N.a.create({btnContainer:{textDecoration:"none",width:"90%",height:"100%",maxWidth:375,margin:"0 auto",backgroundColor:"#FC9D9A",padding:"15px 0",textAlign:"center",borderRadius:10},btnText:{fontSize:16,color:"#fff"}});function oe(e){for(var t=e.data,n=e.item,a=[],o=0;o<t.length;o++)a.push(n(t[o],o));return a}function ie(){return o.a.createElement("div",{className:Object(N.b)(re.itemBackground)},o.a.createElement("div",{className:Object(N.b)(re.item)},o.a.createElement("div",{className:Object(N.b)(re.imageWrapper)}),o.a.createElement("div",{className:Object(N.b)(re.contentContainer)},o.a.createElement("div",{className:Object(N.b)(re.contentTitle)}),o.a.createElement("div",{className:Object(N.b)(re.createdAt)}),o.a.createElement("div",{style:{clear:"left"}}),o.a.createElement("div",{className:Object(N.b)(re.technologyContainer)}),o.a.createElement("div",{className:Object(N.b)(re.technologyContainer)}),o.a.createElement("div",{className:Object(N.b)(re.technologyContainer)}),o.a.createElement("div",{className:Object(N.b)(re.technologyContainer)}))))}var re=N.a.create({loading:{position:"fixed",top:0,bottom:0,left:0,right:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",zIndex:100},spinner:{fontSize:40,color:"#e83e53",display:"flex",textAlign:"center"},item:{position:"relative",width:"90%",maxWidth:480,height:400,borderRadius:20,boxShadow:"2px 2px 10px #ddd, -2px -2px 10px #ddd",margin:"0 auto",backgroundColor:"#fff"},imageWrapper:{width:"100%",height:200,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottom:"solid 1.5px #ddd"},contentContainer:{position:"relative",height:200,padding:20},loadingLine:{position:"absolute",top:0,bottom:0,width:3,backgroundColor:"#fff",animationName:[{from:{left:0},to:{left:"98%"}}],animationDuration:"1s",animationDelay:"0s",animationIterationCount:"infinite",animationTimingFunction:"ense-in-out"},contentTitle:{float:"left",width:"50%",height:10,borderRadius:5,backgroundColor:"#ddd",marginBottom:10},createdAt:{float:"right",width:"20%",height:5,borderRadius:2.5,backgroundColor:"#ddd"},technologyContainer:{width:"90%",height:5,borderRadius:2.5,backgroundColor:"#ddd",paddingLeft:35,margin:"0 auto",marginTop:25,marginBottom:25},itemBackground:{width:"100%",paddingBottom:100,backgroundColor:"rgba(255, 255, 255, 0.6)"}});var ce=N.a.create({container:{width:"100vw",height:"100vh",backgroundColor:"#fff",overflowY:"scroll"},titleContainer:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#fff",width:"100vw",height:"100vh"},title:{fontSize:80,marginTop:-80,color:"#e83e53",textAlign:"center",animationName:[{from:{letterSpacing:"20em"},to:{letterSpacing:"0.4em"}}],animationTimingFunction:"ease-in-out",animationDuration:"2s",animationDelay:"0s",animationFillMode:"forwards",paddingLeft:15,"@media(max-width: 375px)":{paddingLeft:5,fontSize:60,animationDuration:"1s"}},handDown:{opacity:0,position:"absolute",bottom:100,left:"48%",fontSize:40,color:"#FF9933",animationName:[{from:{opacity:1,transform:"translateY(0)"},to:{opacity:1,transform:"translateY(-70px)"}}],animationTimingFunction:"linear",animationDuration:"800ms",animationDelay:"2.5s",animationIterationCount:6,animationDirection:"alternate-reverse","@media(max-width: 375px)":{fontSize:27}},listContainer:{position:"fixed",top:0,bottom:0,left:0,right:0,paddingBottom:"5%",overflowY:"scroll"},tempBackground:{width:"100vw",height:"100vh"},list:{width:"100%",height:"100%",padding:"100px 0",backgroundColor:"rgba(255, 255, 255, 0.6)",boxShadow:"0 -2px 5px #ddd"},btnContainer:{width:"100%",backgroundColor:"rgba(255, 255, 255, 0.6)",paddingBottom:30},itemBackground:{width:"100%",paddingBottom:100,backgroundColor:"rgba(255, 255, 255, 0.6)"}}),le={handleChange:function(e){return function(e,t){return Object(E.a)({},e,t)}},onShowItem:function(e){return function(t,n,a){var o=function(e,t){e.style.height="400px",e.style.overflowY="hidden",t.style.display="block"};if("100%"===t.style.height)return o(t,n),{prevAnimation:null,prevFilter:null};var i=e.prevAnimation,r=e.prevFilter;i&&r&&o(i,r),t.style.height="100%",t.style.overflowY="none",n.style.display="none";var c=t.getBoundingClientRect(),l=a.getRefs("overflowScroll"),s=l.scrollTop+c.top;return l.scrollTop=s-30,{prevAnimation:t,prevFilter:n}}}},se=Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t){return function(n){return e[t]=n}}},getRefs:function(t){return function(t){return e[t]}}}}()),de=Object(C.a)(Object(C.e)("WorkTopScreen"),Object(C.g)({list:[],isFetching:!1,prevAnimation:null,prevFilter:null},le),Object(C.f)(se),Object(y.b)(function(e){var t=e.works;return{list:t.data,isFetching:t.isFetching}},function(e,t){return{}}),Object(C.b)({}),Object(C.c)(["list","isFetching"]))(function(e){var t=e.list,n=e.onShowItem,a=e.isFetching,i=e.setRef,r=e.getRefs;return o.a.createElement("div",{className:Object(N.b)(ce.container)},o.a.createElement("div",{className:Object(N.b)(ce.titleContainer)},o.a.createElement("h1",{className:Object(N.b)(ce.title)},"Works"),o.a.createElement(V.a,{icon:"hand-point-down",className:Object(N.b)(ce.handDown)})),o.a.createElement("div",{className:Object(N.b)(ce.listContainer),ref:i("overflowScroll")},o.a.createElement("div",{className:Object(N.b)(ce.tempBackground)}),a?o.a.createElement("div",{className:Object(N.b)(ce.list)},o.a.createElement(ie,null),o.a.createElement(ie,null),o.a.createElement(ie,null)):o.a.createElement("div",{className:Object(N.b)(ce.list)},o.a.createElement(oe,{data:t,item:function(e,t){return o.a.createElement("div",{className:Object(N.b)(ce.itemBackground),key:t},o.a.createElement(ee,Object.assign({onShowItem:n,key:t},e,{getRefs:r})))}}),o.a.createElement("div",{className:Object(N.b)(ce.btnContainer)},o.a.createElement(ne,{uri:"/blogs",text:"\u30d6\u30ed\u30b0\u3092\u898b\u308b \u2192"})))))}),me=function(e){var t=e.icon,n=e.line,a=e.iconColor;return o.a.createElement("li",{className:Object(N.b)(be.descriptionItem)},o.a.createElement(V.a,{icon:t,style:{color:a,marginRight:5}}),n)},ue=function(e,t,n){var a=/(\\n)/g;return e.split(a).map(function(e,i){return e.match(a)?o.a.createElement("br",{key:i}):o.a.createElement(me,{line:e,icon:t,iconColor:n,key:i})})};function fe(e){var t=e.title,n=e.children,a=e.color,i=e.uri,r=e.icon,c=e.iconColor;return console.log(n),o.a.createElement("div",{className:Object(N.b)(be.blogItem)},o.a.createElement("div",{className:Object(N.b)(be.descriptionContainer)},o.a.createElement("h3",{className:Object(N.b)(be.headerTitle),style:{color:a}},t),o.a.createElement("ul",{className:Object(N.b)(be.description)},ue(n,r,c)),o.a.createElement("p",{className:Object(N.b)(be.uriText),style:{color:a}},"URI ",o.a.createElement("a",{className:Object(N.b)(be.uri),href:i},i))))}var be=N.a.create({blogItem:{backgroundColor:"#fff",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 3px 10px #aaa"},headerTitle:{paddingBottom:30,fontSize:80,"@media(max-width: 450px)":{paddingBottom:10,fontSize:60}},descriptionContainer:{width:"90%",maxWidth:600},description:{padding:0,paddingLeft:30,fontSize:16,color:"#555",letterSpacing:"0.05em",listStyle:"none"},descriptionItem:{textIndent:"-1.8em"},uriText:{fontSize:16,fontWeight:"bold",paddingTop:30},uri:{color:"#3399FF",paddingLeft:5,fontWeight:"normal"}});var he=N.a.create({container:{zIndex:-100,backgroundColor:"#fff"},tempContainer:{width:"100vw",height:"100vh"},titleContainer:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",animationName:[{from:{backgroundColor:"#fff"},to:{backgroundColor:"#e83e53"}}],animationTimingFunction:"ease",animationDuration:"5s",animationDelay:"0s",animationFillMode:"forwards",boxShadow:"0 3px 5px #555"},title:{fontSize:80,marginTop:-80,color:"#fff",textAlign:"center",paddingLeft:15,letterSpacing:"0.5em","@media(max-width: 450px)":{paddingLeft:5,fontSize:60}},blogContainer:{width:"100%",height:"100%"},nextBtnContainer:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",boxShadow:"0 3px 5px #555"},appreciationContainer:{textAlign:"center"},appreciationText:{fontSize:30,color:"#e83e53",paddingBottom:100}}),pe={handleChange:function(e){return function(e,t){return Object(E.a)({},e,t)}}},ge=function(){return null!==navigator.userAgent.toLowerCase().match(/android|iphone/)?window.screen.height:window.innerHeight},we=Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t){return function(n){return e[t]=n}}},getRefs:function(t){return function(t){return e[t]}}}}(),function(){var e={};return{setContainer:function(t){return function(t){return function(n){return e[t]=n}}},getContainer:function(t){return function(){return e}}}}(),{scrollContainer:function(e){return function(e){var t=e.getContainer,n=ge(),a=t(),o=Object.keys(a).length,i=(window.document.scrollingElement||window.document.documentElement).scrollTop,r=Math.floor(i/n),c=a[r+1];if(c&&o!==r+1){var l=c.getBoundingClientRect();if(0!==r&&(i-=n*r),0!==r&&l.top>-10){console.log("scroll");var s=a[r];window.scrollTo(0,window.pageYOffset),s.style.top="-".concat(n-10,"px"),s.style.bottom="".concat(n-10,"px"),c.style.top="0px",c.style.bottom="0px"}c.style.top="-".concat(i,"px"),c.style.bottom="".concat(i,"px")}}},setShowSlideAnimation:function(e){return function(e){for(var t=ge(),n=Object.keys(e).length,a=1;a<n;a++){var o=e[a];o.style.top="-".concat(t,"px"),o.style.bottom="".concat(t,"px")}window.requestAnimationFrame(function e(t,n,a){return function(o){var i=ge();n-=80;var r=t[a];r?n<=0?(r.style.top="0px",r.style.bottom="0px",window.requestAnimationFrame(e(t,i,a-1))):(console.log(n),r.style.top="-".concat(n,"px"),r.style.bottom="".concat(n,"px"),window.requestAnimationFrame(e(t,n,a))):console.log("success!!!!")}}(e,t,n))}}}),ve={componentDidMount:function(){var e=this,t=this.props,n=t.scrollContainer,a=t.getContainer,o=t.getRefs,i=t.setShowSlideAnimation,r=ge(),c=o("container"),l=a();if(!c.style.height){var s=Object.keys(l).length;c.style.height="".concat(r*s,"px")}window.addEventListener("scroll",function(){n(e.props,r)}),setTimeout(function(){return i(l)},100)},componentWillUnmount:function(){}},je=Object(C.a)(Object(C.e)("BlogTopScreen"),Object(C.g)({},pe),Object(C.f)(we),Object(y.b)(function(e){return Object(m.a)({},e)},function(e,t){return{}}),Object(C.b)(ve),Object(C.c)([]))(function(e){var t=e.setContainer,n=e.setRef,a={position:"fixed",top:0,bottom:0,left:0,right:0};return o.a.createElement("div",{className:Object(N.b)(he.container),ref:n("container")},o.a.createElement("div",{ref:t(1),style:Object(m.a)({zIndex:4},a)},o.a.createElement("div",{className:Object(N.b)(he.titleContainer)},o.a.createElement("h1",{className:Object(N.b)(he.title)},"Blog"))),o.a.createElement("div",{ref:t(2),style:Object(m.a)({zIndex:3},a)},o.a.createElement(fe,{title:"Qiita",color:"#55c500",uri:"https://qiita.com/keiya01",icon:"laptop-code",iconColor:"#e83e53"},"Qiita\u3067\u306f\u65e5\u3005\u306e\u958b\u767a\u3067\u767a\u898b\u3057\u305f\u8ab2\u984c\u3078\u306e\u89e3\u6c7a\u65b9\u6cd5\u3084\u81ea\u5206\u306e\u8003\u3048\u3092\u307e\u3068\u3081\u305f\u3082\u306e\u3092\u63b2\u8f09\u3057\u3066\u3044\u307e\u3059\u3002\\n \u30e1\u30e2\u3068\u3044\u3046\u3088\u308a\u3082\u5916\u90e8\u3078\u306e\u60c5\u5831\u767a\u4fe1\u3092\u610f\u8b58\u3057\u3066\u304a\u308a\u3001\u51fa\u6765\u308b\u3060\u3051\u30af\u30aa\u30ea\u30c6\u30a3\u30fc\u3092\u9ad8\u304f\u3057\u3001 \u591a\u304f\u306e\u4eba\u304c\u7406\u89e3\u3067\u304d\u308b\u3088\u3046\u306a\u5185\u5bb9\u3067\u66f8\u304f\u3053\u3068\u3092\u5fc3\u304c\u3051\u3066\u3044\u307e\u3059\u3002\\n \u81ea\u5206\u306e\u305f\u3081\u3068\u3044\u3046\u3088\u308a\u3082\u4ed6\u8005\u306e\u305f\u3081\u306b\u66f8\u304f\u3068\u3044\u3046\u611f\u899a\u3067\u3042\u308b\u305f\u3081\u3001\u66d6\u6627\u306a\u90e8\u5206\u3084\u9593\u9055\u3063\u3066\u3044\u308b\u90e8\u5206\u304c\u306a\u3044\u304b\u3092\u78ba\u8a8d\u3057\u306a\u304c\u3089\u66f8\u3044\u3066\u3044\u307e\u3059\u3002\u305d\u3046\u3059\u308b\u3053\u3068\u3067\u81ea\u5206\u306e\u7406\u89e3\u304c\u3088\u308a\u6df1\u3044\u3082\u306e\u306b\u306a\u3063\u305f\u308a\u3001\u65b0\u305f\u306a\u767a\u898b\u304c\u3042\u3063\u305f\u308a\u3059\u308b\u306e\u3067Qiita\u306f\u3088\u308a\u591a\u304f\u306e\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u306e\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3068\u3057\u3066\u3082\u7a4d\u6975\u7684\u306b\u6d3b\u7528\u3057\u3066\u3044\u307e\u3059\u3002")),o.a.createElement("div",{ref:t(3),style:Object(m.a)({zIndex:2},a)},o.a.createElement(fe,{title:"Scrapbox",color:"#39ac86",uri:"https://scrapbox.io/CodingNote",icon:"laptop-code",iconColor:"#e83e53"},"Scrapbox\u306f\u958b\u767a\u306e\u4e2d\u3067\u6c17\u3065\u3044\u305f\u70b9\u3092\u7c21\u5358\u306b\u30e1\u30e2\u3057\u3066\u3044\u307e\u3059\u3002\\n \u5177\u4f53\u7684\u306b\u306f\u3001\u8a18\u4e8b\u3092\u8aad\u3093\u3067\u3044\u3066\u53c2\u8003\u306b\u306a\u3063\u305f\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u624b\u6cd5\u3084\u3001\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u306a\u3069\u306b\u5bfe\u3059\u308b\u81ea\u5206\u306a\u308a\u306e\u89e3\u91c8\u3001\u81ea\u5206\u304c\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3044\u3066\u96e3\u3057\u3044\u3068\u611f\u3058\u305f\u3053\u3068\u3092\u30e1\u30e2\u3068\u3057\u3066\u6b8b\u3057\u3066\u3044\u307e\u3059\u3002")),o.a.createElement("div",{ref:t(4),style:Object(m.a)({},a)},o.a.createElement("div",{className:Object(N.b)(he.nextBtnContainer)},o.a.createElement("div",{className:Object(N.b)(he.appreciationContainer)},o.a.createElement("h3",{className:Object(N.b)(he.appreciationText)},"Thank you :)")),o.a.createElement(ne,{text:"\u4f5c\u54c1\u3092\u898b\u308b \u2192",uri:"/works"}))))}),Oe=n(112);var xe=function(e){return e.children},ye={handleChange:function(e){return function(e,t){return Object(E.a)({},e,t)}}},Ee={componentDidUpdate:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},Ce=Object(C.a)(Object(C.e)("ScrollToTop"),Object(C.g)({},ye),Object(C.f)(function(e){return{}}),Oe.a,Object(C.b)(Ee),C.d)(Object(Oe.a)(xe));var Te=function(){return o.a.createElement(T.a,{basename:"/portfolio/#"},o.a.createElement(Ce,null,o.a.createElement(S.a,null,o.a.createElement(k.a,{path:"/works",component:de}),o.a.createElement(k.a,{path:"/blogs",component:je}),o.a.createElement(k.a,{exact:!0,path:"/",component:J}))))},Se={handleChange:function(e){return function(e,t){return Object(E.a)({},e,t)}}},ke=function(e){return function(){var e=window.location.href;e.includes("/#/")||("/"!==e.slice(-1)&&(e+="/"),window.location=e+"#/")}},Ne=Object(C.a)(Object(C.e)("AppRoute"),Object(C.g)({list:[]},Se),Object(C.f)(function(e){return{redirectHashUri:ke}}),Object(y.b)(function(e){return{list:e.works.data}},function(e,t){return{getWorks:function(){return e(O())}}}),Object(C.b)({componentWillMount:function(){var e=this.props,t=e.list,n=e.getWorks,a=e.redirectHashUri;0===t.length&&n(),a()}}),Object(C.c)([]))(Te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=n(23),ze=n(66),Ae=n(17);Re.b.add(ze.a,Ae.a,Ae.d,Ae.c,Ae.b,Ae.g,Ae.e,Ae.f),r.a.render(o.a.createElement(function(){return o.a.createElement(y.a,{store:x},o.a.createElement(Ne,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,n){e.exports=n(108)},73:function(e,t,n){}},[[68,2,1]]]);
//# sourceMappingURL=main.3ed76f21.chunk.js.map