(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/thumbnail.79b1ce1a.jpg"},108:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(59),r=n.n(o),c=(n(73),n(20)),l=n(60),s=n.n(l),u=n(61),m=n(5),d=n(62),f=n.n(d),h="portfolio/works/",b=h+"GET_WORKS_START",g=h+"GET_WORKS_SUCCESS",p=h+"GET_WORKS_FAILED",w=h+"GET_WORKS_END",v={data:[],isFetching:!1};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(m.a)({},e,{isFetching:!0});case g:var n=t.data;return Object(m.a)({},e,{data:n,isFetching:!0});case p:return Object(m.a)({},e,{error:t.error});case w:return Object(m.a)({},e,{isFetching:!1});default:return Object(m.a)({},e)}}var j=function(){return function(e,t){e({type:b}),f.a.get("https://script.google.com/macros/s/AKfycbx1zqRJTh_4qbfopWyGS-4rqibT5OUKc5V_pwz_m_9Xbqus3FZy/exec").then(function(t){e(function(e){return{type:g,data:e}}(t.data))}).catch(function(t){e({type:p,error:t})}).finally(function(){e({type:w})})}};var E=Object(c.d)(Object(c.c)({works:O}),Object(c.a)(u.a,s.a)),x=n(13),y=n(10),C=n(3),T=n(114),R=n(115),A=n(113),S=n(2),k=n(67),N=n(19),F=n(29),z=n(25),W=n(30),D=n(7),B=[],I=[],L=function(e){function t(e,n,a,i,o,r){var c,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(N.a)(this,t),(c=Object(F.a)(this,Object(z.a)(t).call(this,e,n,a,i,o,r))).drawCircle=function(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=Object(D.a)(Object(D.a)(c)),a=n.context,i=n.name,o=n.positionX,r=n.positionY,l=n.size,s=n.color,u=n.text;(c.setFillCanvas(),a.arc(o,r,l,0,2*Math.PI),a.fill(),t)&&(2===I.length&&(I=[]),I.push({name:i,x:o,y:r,size:l,color:s,text:u}),2===I.length&&(e=B=[]).push.apply(e,Object(k.a)(I)))},c.setShadow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(D.a)(Object(D.a)(c)).context;t.shadowColor="#555",t.shadowOffsetX=-.5,t.shadowOffsetY=null!==e?e:2,t.shadowBlur=null!==e?1:8},c.resetShadow=function(){var e=Object(D.a)(Object(D.a)(c)).context;e.shadowColor="#fff",e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowBlur=0},c.setTitle=function(){var e=Object(D.a)(Object(D.a)(c)),t=e.context,n=e.name,a=e.positionX,i=e.positionY;t.beginPath(),t.font="bold 40px Arial",t.fillStyle="#333",t.textAlign="center",t.fillText(n,a,i)},c.setText=function(){var e=Object(D.a)(Object(D.a)(c)),t=e.context,n=e.text,a=e.positionX,i=e.positionY;e.size;t.beginPath(),t.font="normal 25px \u6e38\u30b4\u30b7\u30c3\u30af",t.fillStyle="#555",t.textAlign="center",t.fillText(n,a,i+50)},c.clickAnimation=function(e,n,a){return function(i){var o=Object(D.a)(Object(D.a)(c)),r=o.context,l=o.name,s=o.size,u=o.positionY,m=window.innerHeight,d=window.innerWidth,f=s,h=u;if(f<=n-25)window.requestAnimationFrame(e);else{var b={};r.clearRect(0,0,2*d,2*m);for(var g=0;g<B.length;g++){var p=B[g],w=p.name,v=p.x,O=p.y,j=p.size,E=w===l,x=new t(r,w,v,E?h+2:O,E?f-3:j,p.color,p.text);E?(b=x,x.setShadow(.1)):x.setShadow(),x.drawCircle(),x.resetShadow(),x.setTitle(),x.setText()}window.requestAnimationFrame(b.clickAnimation(e,n,a))}}},c.transitionAnimation=function(e){return function(n){var a=e.windowHeight,i=e.windowWidth,o=Object(D.a)(Object(D.a)(c)),r=o.context,l=o.name,s=o.positionX,u=o.positionY,m=o.size,d=o.color;if(m>2*a&&m>2*i)switch(l){case"Works":return void e.history.push("/works");case"Blogs":return void e.history.push("/blogs")}else{var f=m,h=55;null!==navigator.userAgent.toLowerCase().match(/android|iphone/)&&(h=35);var b=new t(r,l,s,u,f+h,d);b.drawCircle(!1),window.requestAnimationFrame(b.transitionAnimation(e))}}},c.onClick=function(e,t){var n=e.clientX,a=e.clientY,i=Object(D.a)(Object(D.a)(c)),o=(i.name,i.positionX),r=i.positionY,l=i.size,s=e.target.getBoundingClientRect(),u=2*n-s.left,m=2*a-s.top;return Math.pow(u-o,2)+Math.pow(m-r,2)<Math.pow(l,2)},c.text=l,c.canvasStore=[],c}return Object(W.a)(t,e),t}(function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"black";Object(N.a)(this,e),this.setFillCanvas=function(){var e=n.context,t=(n.name,n.positionX,n.positionY,n.color);e.beginPath(),e.fillStyle=t},this.context=t,this.name=a,this.positionX=Math.floor(i),this.positionY=Math.floor(o),this.size=Math.floor(r),this.color=c});var Y=S.a.create({wrapper:{position:"relative",width:"100%",height:"100%"},titleWrapper:{display:"inline-block",position:"absolute",top:"10%",left:0,right:0,textAlign:"center"},movePosition:{"@media (max-width: 450px)":{top:"20%"}},infoTitle:{fontSize:50,fontWeight:"bold",color:"#fff"},fontResize:{"@media (max-width: 600px)":{fontSize:30}},canvas:{backgroundColor:"#FA776D"}});window.innerHeight,window.innerWidth<600&&window.innerWidth;var H={canvas:null,windowHeight:window.innerHeight,windowWidth:window.innerWidth,isCircleClicked:!1},_={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}},onResize:function(e){return function(e,t){return{windowHeight:e,windowWidth:t}}}},q=function(e){return function(t){var n=2*e.windowHeight,a=2*e.windowWidth;t.height=n,t.width=a;var i=t.getContext("2d");i.clearRect(0,0,a,n);for(var o=[{name:"Blogs",x:.34*a,y:.6*n,size:.25*a,color:"#fff",text:"\u5b66\u7fd2\u8a18\u9332"},{name:"Works",x:.66*a,y:.51*n,size:.25*a,color:"#fff",text:"\u4f5c\u54c1\u4e00\u89a7"}],r=navigator.userAgent.toLowerCase(),c=0;c<o.length;c++){var l=o[c],s=l.name,u=l.x,m=l.y,d=l.size,f=l.color,h=l.text,b=u,g=m,p=d;null===r.match(/android|iphone/)&&(b*="Blogs"===s?1.25:.89,g*="Blogs"===s?1.1:1.08,p*=a>1e3?.5:.65),null!==r.match(/ipad/)&&(b*="Blogs"===s?.8:1.1,g*="Blogs"===s?1:1.1,p=.25*a);var w=new L(i,s,b,g,p,f,h);w.setShadow(),w.drawCircle(),w.resetShadow(),w.setTitle(),w.setText()}}},X={componentDidMount:function(){var e=this.props,t=e.setCircle,n=(0,e.getRefs)().canvas;t(n),this.props.handleChange("canvas",n)},componentDidUpdate:function(){var e=this.props,t=e.onResize,n=e.canvas,a=e.setCircle;if(null!==n){var i=null;window.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(function(){null!==navigator.userAgent.toLowerCase().match(/android|iphone/)?t(window.screen.height,window.screen.width):t(window.innerHeight,window.innerWidth),a(n)},100)})}}},M=Object(C.a)(Object(C.e)("GroupCircle"),Object(C.g)(H,_),Object(C.f)(function(e){return Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t,n){return e[n]=t}},getRefs:function(t){return function(){return e}}}}(),function(e){var t=!1;return{onCircleClick:function(e){return function(n){return function(a){var i=e.canvas;if(e.handleChange,e.isCircleClicked,!t){t=!0;for(var o=i.getContext("2d"),r=null,c=0;c<B.length;c++){var l=B[c],s=l.name,u=l.x,m=l.y,d=l.size,f=l.color,h=l.text,b=new L(o,s,u,m,d,f,h);b.onClick(a,n)&&(r=b)}null!==r&&window.requestAnimationFrame(r.clickAnimation(r.transitionAnimation(n),r.size,n))}}}}}}(),{setCircle:q})}),Object(x.b)(function(e){return Object(m.a)({},e)},function(e,t){return{}}),Object(C.b)(X),Object(C.c)(["canvas","windowHeight","windowWidth"]))(function(e){var t=e.setRef,n=e.onCircleClick,a=e.canvas,o=e.windowWidth,r=e.windowHeight;return null!==a&&a.addEventListener("click",n(e)),i.a.createElement("div",{className:Object(S.b)(Y.wrapper)},i.a.createElement("div",{className:Object(S.b)(Y.titleWrapper,Y.movePosition)},i.a.createElement("h3",{className:Object(S.b)(Y.infoTitle,Y.fontResize)},"Information")),i.a.createElement("canvas",{ref:function(e){return t(e,"canvas")},className:Object(S.b)(Y.canvas),style:{width:o,height:r}}))});var P=S.a.create({container:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",height:"100vh"},profileContainer:{display:"flex",margin:"0 auto",width:"90%",alignItems:"center",justifyContent:"center"},image:{width:70,height:70,borderRadius:"50%",objectFit:"cover",marginRight:20,border:"solid 1px #F9CDAD",animationName:[{from:{transform:"translate(55%, 0)"},to:{transform:"translate(0, 0)"}}],animationTimingFunction:"easy",animationDuration:"2s",animationDelay:"0s"},name:{fontSize:20,color:"#757575",fontWeight:600,animationName:[{from:{opacity:0},to:{opacity:1}}],animationTimingFunction:"easy",animationDuration:"4s",animationDelay:"0s"},descriptionContainer:{width:"90%",maxWidth:480,margin:"0 auto",paddingLeft:20,animationName:[{from:{opacity:0,transform:"translate(0, 100px)"},to:{opacity:1,transform:"translate(0, 0)"}}],animationDuration:"3s",animationTimingFunction:"ease",animationDelay:"2s"},descriptionText:{color:"#555",fontSize:15}}),G={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}}},K=Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t){return function(n){return e[t]=n}}},getRefs:function(t){return function(){return e}}}}()),U={componentDidMount:function(){var e=(0,this.props.getRefs)().divDescription;setTimeout(function(){e.style.opacity=1},3500)}},J=Object(C.a)(Object(C.e)("HomeTopScreen"),Object(C.g)({},G),Object(C.f)(K),Object(x.b)(function(e){return Object(m.a)({},e)},function(e,t){return{}}),Object(C.b)(U),Object(C.c)([]))(function(e){return i.a.createElement(a.Fragment,null,i.a.createElement("div",{className:Object(S.b)(P.container)},i.a.createElement("div",{className:Object(S.b)(P.profileContainer),style:{paddingBottom:50}},i.a.createElement("img",{src:n(104),className:Object(S.b)(P.image)}),i.a.createElement("p",{className:Object(S.b)(P.name)},"Keiya Sasaki")),i.a.createElement("div",{className:Object(S.b)(P.descriptionContainer),style:{opacity:0},ref:e.setRef("divDescription")},i.a.createElement("table",{className:Object(S.b)(P.descriptionText)},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"\u751f\u5e74\u6708\u65e5"),i.a.createElement("td",null,"1999/02/10")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:"40%"}},"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u6b74"),i.a.createElement("td",null,"2017/06/01 \u301c \u73fe\u5728")),i.a.createElement("tr",null,i.a.createElement("td",null,"\u8a00\u8a9e"),i.a.createElement("td",null,"Ruby(Ruby on Rails), PHP(FuelPHP), Go, React, ReactNative")))),i.a.createElement("br",null),i.a.createElement("p",{className:Object(S.b)(P.descriptionText)},"\u3061\u306a\u307f\u306b\u3053\u306e\u30b5\u30a4\u30c8\u306fReact\u3067\u66f8\u3044\u3066\u3044\u307e\u3059\u3002"),i.a.createElement("br",null),i.a.createElement("span",{style:{color:"#FC9D9A",fontWeight:"bold"}},"Career"),i.a.createElement("br",null),i.a.createElement("table",{className:Object(S.b)(P.descriptionText)},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"2017/06/01"),i.a.createElement("td",null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u5b66\u7fd2\u958b\u59cb")),i.a.createElement("tr",null,i.a.createElement("td",null,"2018/03/01"),i.a.createElement("td",null,"\u682a\u5f0f\u4f1a\u793eAppRuns\u3067\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u30a2\u30eb\u30d0\u30a4\u30c8")))))),i.a.createElement(M,{history:e.history}))}),V=n(111);function Z(){return i.a.createElement("div",{className:Object(S.b)($.container)},i.a.createElement("h3",{className:Object(S.b)($.message)},"\u6e96\u5099\u4e2d\u3067\u3059..."),i.a.createElement(V.a,{to:"/",className:Object(S.b)($.link)},"\u30c8\u30c3\u30d7\u3078"))}var $=S.a.create({container:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100vw",height:"100vh",backgroundColor:"#fff"},message:{textAlign:"center",color:"#FA776D",fontSize:25},link:{marginTop:30,textAlign:"center",color:"#4EA1D5",fontSize:16,textDecoration:"none"}}),Q=n(64),ee=n(17),te=function(e){var t=e.icon,n=e.line,a=e.iconColor,o=t||"circle",r=!t&&10,c=t?"-1.3em":"-0.9em";return i.a.createElement("li",{className:Object(S.b)(ae.contentListItem),style:{textIndent:c}},i.a.createElement(ee.a,{icon:o,style:{color:a,fontSize:r,marginRight:5}}),n)},ne=function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(F.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).nl2br=function(e,t,n){var a=/(\\n)/g;return e.split(a).map(function(e,o){return e.match(a)?i.a.createElement("br",{key:o}):i.a.createElement(te,{line:e,icon:t,iconColor:n,key:o})})},n}return Object(W.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.technology,o=t.body,r=t.favorite,c=t.improvement,l=t.color,s=t.image,u=t.link,m=t.created_at,d=t.onShowItem;return i.a.createElement("div",{className:Object(S.b)(ae.item),onClick:function(){return d(e.animation,e.filter)},style:{height:400,overflowY:"hidden"},ref:function(t){return e.animation=t},ontouchstart:""},s?i.a.createElement("img",{src:s,className:Object(S.b)(ae.image)}):i.a.createElement("div",{className:Object(S.b)(ae.noImage)},i.a.createElement("h3",{className:Object(S.b)(ae.noImageText)},"No Image")),i.a.createElement("div",{className:Object(S.b)(ae.contentContainer)},i.a.createElement("h3",{className:Object(S.b)(ae.contentTitle),style:{color:l}},n),i.a.createElement("p",{className:Object(S.b)(ae.createdAt)},"\u4f5c\u6210\u65e5: ",m),i.a.createElement("div",{style:{clear:"left"}}),i.a.createElement("p",{className:Object(S.b)(ae.technologyContainer)},i.a.createElement("span",{style:{color:l}},"\u6280\u8853"),": ",a),i.a.createElement("ul",{className:Object(S.b)(ae.contentList)},this.nl2br(o,"check",l)),i.a.createElement("p",{className:Object(S.b)(ae.subTitle),style:{color:"#FA776D"}},i.a.createElement(ee.a,{icon:"grin-squint",style:{marginRight:5}}),"\u304a\u6c17\u306b\u5165\u308a\u30dd\u30a4\u30f3\u30c8"),i.a.createElement("ul",{className:Object(S.b)(ae.contentList)},this.nl2br(r)),i.a.createElement("p",{className:Object(S.b)(ae.subTitle),style:{color:"#F9CDAD"}},i.a.createElement(ee.a,{icon:"frown",style:{marginRight:5}}),"\u53cd\u7701\u70b9"),i.a.createElement("ul",{className:Object(S.b)(ae.contentList)},this.nl2br(c)),i.a.createElement("div",{className:Object(S.b)(ae.codeBtn)},i.a.createElement("a",{className:Object(S.b)(ae.codeLink),href:u},i.a.createElement(ee.a,{icon:["fab","github"],style:{fontSize:20,marginRight:5}}),"Github\u3092\u898b\u308b"))),i.a.createElement("div",{className:Object(S.b)(ae.filter),ref:function(t){return e.filter=t}},i.a.createElement("h3",{className:Object(S.b)(ae.filterText)},"\u3082\u3063\u3068\u898b\u308b")))}}]),t}(a.Component),ae=S.a.create({item:{position:"relative",width:"100%",borderRadius:20,boxShadow:"2px 2px 10px #ddd, -2px -2px 10px #ddd",marginBottom:20},image:{width:"100%",height:200,borderTopLeftRadius:20,borderTopRightRadius:20,objectFit:"contain",paddingBottom:3,borderBottom:"solid 1.5px #ccc"},noImage:{display:"flex",width:"100%",height:200,justifyContent:"center",alignItems:"center",borderTopLeftRadius:20,borderTopRightRadius:20,borderBottom:"solid 1.5px #ccc"},noImageText:{fontSize:25,color:"#F9CDAD"},contentContainer:{height:"100%",padding:"20px"},contentTitle:{float:"left",fontSize:30,marginBottom:10},createdAt:{float:"right",fontSize:13,color:"#777"},technologyContainer:{fontSize:14,color:"#757575",textIndent:"-2.5em",wordWrap:"break-word",paddingLeft:35,marginTop:25,marginBottom:25},contentList:{listStyle:"none",padding:0,paddingLeft:20,marginTop:10,wordWrap:"break-word"},contentListItem:{fontSize:16,color:"#555"},subTitle:{fontSize:16,fontWeight:"bold",marginTop:35},codeBtn:{textAlign:"center",marginTop:50},codeLink:{fontSize:16,color:"#757575",textDecoration:"underline solid #757575"},filter:{position:"absolute",bottom:0,right:0,left:0,backgroundColor:"rgba(255, 255, 255, 0.9)",height:65,borderBottomLeftRadius:20,borderBottomRightRadius:20},filterText:{color:"#FA776D",fontSize:17,textAlign:"center",marginTop:20}});S.a.create({btnContainer:{textDecoration:"none",width:"90%",height:"100%",maxWidth:375,margin:"0 auto",backgroundColor:"#FC9D9A",padding:"15px 0",textAlign:"center",borderRadius:10},btnText:{fontSize:16,color:"#fff"}});function ie(e){for(var t=e.data,n=e.item,a=[],i=0;i<t.length;i++)a.push(n(t[i],i));return a}function oe(){return i.a.createElement("div",{className:Object(S.b)(re.loading)},i.a.createElement(ee.a,{icon:"spinner",className:Object(S.b)(re.spinner),pulse:!0}))}var re=S.a.create({loading:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},spinner:{fontSize:40,color:"#FA776D",display:"flex",textAlign:"center"}});var ce=S.a.create({container:{width:"100%",height:"100%",backgroundColor:"#fff",paddingTop:80,paddingBottom:30},title:{textAlign:"center",color:"#FA776D",fontSize:30,marginBottom:50},list:{width:"90%",height:"100%",padding:"20px 0",maxWidth:480,margin:"0 auto"}}),le=function e(t,n){return function(a){var i=t-n-10;if(console.log(i-10),!(i<15&&i>-10)){t>n?n+=15:n-=15,window.scrollTo(0,n),window.requestAnimationFrame(e(t,n))}}},se={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}},onShowItem:function(e){return function(t,n){var a=function(e,t){e.style.height="400px",e.style.overflowY="hidden",t.style.display="block"};if("100%"===t.style.height){var i=t.getBoundingClientRect().top+window.pageYOffset;return a(t,n),window.requestAnimationFrame(le(i,window.pageYOffset)),{prevAnimation:null,prevFilter:null}}var o=e.prevAnimation,r=e.prevFilter;o&&r&&a(o,r),t.style.height="100%",t.style.overflowY="none",n.style.display="none";var c=t.getBoundingClientRect().top+window.pageYOffset;return window.requestAnimationFrame(le(c,window.pageYOffset)),{prevAnimation:t,prevFilter:n}}}},ue=Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t){return function(n){return e[t]=n}}},getRefs:function(t){return function(){return e}}}}()),me=Object(C.a)(Object(C.e)("WorkTopScreen"),Object(C.g)({list:[],isFetching:!1,prevAnimation:null,prevFilter:null},se),Object(C.f)(ue),Object(x.b)(function(e){var t=e.works;return{list:t.data,isFetching:t.isFetching}},function(e,t){return{}}),Object(C.b)({}),Object(C.c)(["list","isFetching"]))(function(e){var t=e.list,n=e.onShowItem,o=e.isFetching;return i.a.createElement(a.Fragment,null,o?i.a.createElement(oe,null):i.a.createElement("div",{className:Object(S.b)(ce.container)},i.a.createElement("h1",{className:Object(S.b)(ce.title)},"Works"),i.a.createElement("div",{className:Object(S.b)(ce.list)},i.a.createElement(ie,{data:t,item:function(e,t){return i.a.createElement(ne,Object.assign({onShowItem:n,key:t},e))}}))))});S.a.create({});var de={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}}},fe=Object(m.a)({},function(){var e={};return{setRef:function(t){return function(t){return function(n){return e[t]=n}}},getRefs:function(t){return function(){return e}}}}()),he=Object(C.a)(Object(C.e)("BlogTopScreen"),Object(C.g)({},de),Object(C.f)(fe),Object(x.b)(function(e){return Object(m.a)({},e)},function(e,t){return{}}),Object(C.b)({}),Object(C.c)([]))(function(){return i.a.createElement("div",null,i.a.createElement(Z,null))}),be=n(112);var ge=function(e){return e.children},pe={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}}},we={componentDidUpdate:function(e){console.log("scroll: ",e,this.props),this.props.location!==e.location&&window.scrollTo(0,0)}},ve=Object(C.a)(Object(C.e)("ScrollToTop"),Object(C.g)({},pe),Object(C.f)(function(e){return{}}),be.a,Object(C.b)(we),C.d)(Object(be.a)(ge));var Oe=function(){return i.a.createElement(T.a,{basename:"/portfolio/#"},i.a.createElement(ve,null,i.a.createElement(R.a,null,i.a.createElement(A.a,{path:"/works",component:me}),i.a.createElement(A.a,{path:"/blogs",component:he}),i.a.createElement(A.a,{exact:!0,path:"/",component:J}))))},je={handleChange:function(e){return function(e,t){return Object(y.a)({},e,t)}}},Ee=function(e){return function(){var e=window.location.href;e.includes("/#/")||("/"!==e.slice(-1)&&(e+="/"),window.location=e+"#/")}},xe=Object(C.a)(Object(C.e)("AppRoute"),Object(C.g)({list:[]},je),Object(C.f)(function(e){return{redirectHashUri:Ee}}),Object(x.b)(function(e){return{list:e.works.data}},function(e,t){return{getWorks:function(){return e(j())}}}),Object(C.b)({componentWillMount:function(){var e=this.props,t=e.list,n=e.getWorks,a=e.redirectHashUri;0===t.length&&n(),a()}}),Object(C.c)([]))(Oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=n(23),Ce=n(66),Te=n(21);ye.b.add(Ce.a,Te.a,Te.d,Te.c,Te.b,Te.e),r.a.render(i.a.createElement(function(){return i.a.createElement(x.a,{store:E},i.a.createElement(xe,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,n){e.exports=n(108)},73:function(e,t,n){}},[[68,2,1]]]);
//# sourceMappingURL=main.851687bc.chunk.js.map