(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{106:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(25),a=n.n(r),c=(n(65),n(66),n(9)),s=n.n(c),l=n(15),p=n(7),d=n(48),u=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),g=n(148),b=n(150),f=n(49),h=n(52),x=n.n(h),m=(n(106),n(2)),j=Object(g.a)((function(e){return Object(b.a)({title:{color:"white",fontFmily:"Verdana, Arial, Helvetica, sans-serif",display:"flex",fontSize:"25px"},Poster:{objectFit:"contain",width:"100%",maxHeight:"150px",transition:"transform 450ms",marginRight:"10px","&:hover":{transform:"scale(1.08)"}},Posters:{display:"flex",overflowY:"hidden",overflowX:"scroll",padding:"20px","&::-webkit-scrollbar":{display:"none"}},largeSizePoster:{maxHeight:"250px"},popupBox:{position:"fixed",background:"#00000050",width:"100%",height:"150vh",top:"0",left:"0"},box:{position:"relative",width:"80%",margin:"0 auto",height:"80vh",maxHeight:"150vh",marginTop:"calc(90vh - 85vh - 0px)",background:"#111",borderRadius:"20px",padding:"20px",border:"1px solid #999",overflow:"auto"},closeicon:{content:"x",cursor:"pointer",position:"fixed",right:"calc(15% - 100px)",top:"calc(100vh - 85vh - 90px)",background:"#ededed",width:"25px",height:"25px",borderRadius:"50%",lineHeight:"20px",textAlign:"center",border:"1px solid #999",fontSize:"20px"}})}));var O=function(e){var t=j(),n=Object(o.useState)([]),i=Object(p.a)(n,2),r=i[0],a=i[1],c=Object(o.useState)(""),d=Object(p.a)(c,2),g=d[0],b=d[1],h=Object(o.useState)(!0),O=Object(p.a)(h,2),v=O[0],k=O[1];return Object(o.useEffect)((function(){function t(){return(t=Object(l.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get(e.resourceURL);case 2:n=t.sent,console.log("json>>",n.data.results),a(n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.resourceURL]),Object(m.jsxs)("div",{className:"Category",children:[Object(m.jsx)("h1",{className:t.title,children:e.title}),Object(m.jsx)("div",{className:t.Posters,children:r.map((function(n){return Object(m.jsx)("img",{className:"".concat(t.Poster," ").concat(e.realPoster&&t.largeSizePoster),src:"".concat("https://image.tmdb.org/t/p/original").concat(e.realPoster?n.poster_path:n.backdrop_path),onClick:function(){return function(e){k(!0),g&&b(""),x()(e.name||"",{tmdbId:e.id}).then((function(e){var t=new URLSearchParams(new URL(e).search);console.log("params>>",t.get("v")),b(t.get("v"))})).catch((function(e){console.log("error>>>>",e)}))}(n)},alt:n.name},n.id)}))}),g&&v&&Object(m.jsx)("div",{className:t.popupBox,children:Object(m.jsxs)("div",{className:t.box,children:[Object(m.jsx)("span",{className:t.closeicon,onClick:function(e){return k(!1)},children:"x"}),Object(m.jsx)(f.a,{className:"test",videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})})]})},v="1d29230b59fcc45d2d2e72d4ee4642c9",k={NetFlixOriginals:"/discover/tv?api_key=".concat(v),Trending:"/trending/all/week?api_key=".concat(v,"&with_networks=213"),Latest:"/movie/latest?api_key=".concat(v),ActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),ComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),HorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),RomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),Documentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99")},w=Object(g.a)((function(e){return Object(b.a)({Banner__content:{textAlign:"left",marginLeft:"10px",padding:"120px",height:"190px",width:"1000px"},MainBanner:{height:"448px",objectFit:"contain",color:"white"},title:{fontSize:"3rem",fontWeight:"800",paddingBottom:"0.3rem"},button:{cursor:"hidden",color:"#fff",outline:"none",border:"none",fontWeight:"800",borderRadius:"0.2vw",paddingLeft:"2rem",paddingRight:"2rem",marginRight:"1rem",paddingTop:"0.5rem",backgroundColor:"rgba(51,51,51,0.5)",paddingBottom:"0.5rem","&:hover":{color:"#000",backgroundColor:"#e6e6e6",transition:"all 0.2s"}},h4:{textAlign:"left",color:"#fff",fontSize:"16px",fontWeight:"500",marginTop:"26px"},fade:{height:"7.4rem",backgroundImage:"linear-gradient(180deg,transparent,rgba(37,37,37,.61),#111)",marginTop:"90px"}})}));var S=function(){var e=w(),t=Object(o.useState)([]),n=Object(p.a)(t,2),i=n[0],r=n[1];return Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get(k.NetFlixOriginals);case 2:t=e.sent,console.log("json banner>>",t.data.results[0]),r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),console.log("json banner>>",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)("header",{className:e.MainBanner,style:{backgroundSize:"cover",backgroundImage:'url("'.concat("https://image.tmdb.org/t/p/original").concat(i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(m.jsxs)("div",{className:e.Banner__content,children:[Object(m.jsx)("h1",{className:e.title,children:i.title||i.name||i.original_name}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{className:e.button,children:"play"}),Object(m.jsx)("button",{className:e.button,children:"My List"})]}),Object(m.jsx)("h4",{className:e.h4,children:i.overview})]}),Object(m.jsx)("div",{className:e.fade})]})},N=n(10),y=Object(g.a)((function(e){return Object(b.a)({logo:{position:"fixed",left:"0px",width:"150px",objectFit:"contain",paddingLeft:"20px"},login_background:{backgroundSize:"cover"},profilebutton:{position:"fixed",right:"20px",top:"20px",padding:"10px 20px",fontSize:"1 rem",color:"#fff",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer",backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:'url("https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png")',height:"40px",width:"40px"},home_background:{backgroundSize:"cover",backgroundColor:"black",width:"fit-content"}})}));function z(){var e=y(),t=Object(N.g)();return Object(m.jsxs)("div",{className:e.home_background,children:[Object(m.jsx)("div",{className:e.login_background,children:Object(m.jsx)("img",{className:e.logo,src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"})}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),t.push("/profile")},className:e.profilebutton}),Object(m.jsx)(S,{}),Object(m.jsx)(O,{title:"NETFLIX ORIGINALS",resourceURL:k.NetFlixOriginals,realPoster:!0}),Object(m.jsx)(O,{title:"Trending Now",resourceURL:k.Trending}),Object(m.jsx)(O,{title:"Action Movies",resourceURL:k.ActionMovies}),Object(m.jsx)(O,{title:"Comedy Movies",resourceURL:k.ComedyMovies}),Object(m.jsx)(O,{title:"Horror Movies",resourceURL:k.HorrorMovies}),Object(m.jsx)(O,{title:"Romance Movies",resourceURL:k.RomanceMovies}),Object(m.jsx)(O,{title:"Documentaries",resourceURL:k.Documentaries})]})}var R=n(36),_=(n(110),n(138),R.a.initializeApp({apiKey:"AIzaSyAAoHsUTrfuJra5CllzqKHjdUXqSwaVSCk",authDomain:"react-netflix-clone-9a6e4.firebaseapp.com",projectId:"react-netflix-clone-9a6e4",storageBucket:"react-netflix-clone-9a6e4.appspot.com",messagingSenderId:"755424850492",appId:"1:755424850492:web:857d25551a0dbd71a08939",measurementId:"G-67ZWW7R3D8"})),I=_.auth(),C=R.a.firestore(),A=Object(o.createContext)();function W(){return Object(o.useContext)(A)}function L(e){var t=e.children,n=Object(o.useState)(),i=Object(p.a)(n,2),r=i[0],a=i[1];Object(o.useEffect)((function(){return I.onAuthStateChanged((function(e){a(e),localStorage.setItem("user",JSON.stringify(e))}))}),[]);var c={user:r,SignUp:function(e,t){return I.createUserWithEmailAndPassword(e,t)},Login:function(e,t){return I.signInWithEmailAndPassword(e,t)},Logout:function(){return I.signOut()},ResetPassword:function(e){return I.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)}};return Object(m.jsx)(A.Provider,{value:c,children:t})}var T=n(30),B=n(58);function E(e){var t=e.component,n=Object(B.a)(e,["component"]),o=JSON.parse(localStorage.getItem("user"));return Object(m.jsx)(N.b,Object(T.a)(Object(T.a)({},n),{},{render:function(e){return o?Object(m.jsx)(t,Object(T.a)({},e)):Object(m.jsx)(N.a,{to:"/login"})}}))}var P=Object(g.a)((function(e){return Object(b.a)({login:{position:"relative",height:"100%",background:'url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg") center no-repeat',backgroundSize:"cover"},logo:{position:"fixed",left:"0px",width:"150px",objectFit:"contain",paddingLeft:"20px"},signInbutton:{position:"fixed",right:"20px",top:"20px",padding:"10px 20px",fontSize:"1 rem",color:"#fff",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer"},login_background:{},gredient:{width:"100%",zIndex:"1",height:"150vh",background:"rgba(0,0,0,0.8)"},body:{position:"absolute",top:"25%",marginLeft:"auto",marginRight:"auto",textAlign:"center",left:"20%",zIndex:1,color:"#fff",padding:"20px"},input:{padding:"10px",outlineWidth:"0",height:"50px",width:"50%",border:"none",maxWidth:"600px"},getstarted:{padding:"16px 20px",fontSize:"1rem",color:"#fff",backgroundColor:"#e50914",border:"none",fontWeight:"600"},inputform:{margin:"20px"}})}));function F(){var e=P(),t=Object(N.g)(),n=Object(o.useRef)();return Object(o.useEffect)((function(){}),[]),Object(m.jsxs)("div",{className:e.login,children:[Object(m.jsx)("div",{className:e.login_background,children:Object(m.jsx)("img",{className:e.logo,src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"})}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),t.push("/login")},className:e.signInbutton,children:"Sign In"}),Object(m.jsx)("div",{className:e.gredient}),Object(m.jsxs)("div",{className:e.body,children:[Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{style:{fontSize:"2.525rem",marginBottom:"20px"},children:"Unlimited films, TV programmes and more."}),Object(m.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"400",marginBottom:"30px"},children:"Watch anywhere.Cancel any time"}),Object(m.jsx)("h4",{style:{fontSize:"1.3rem",fontWeight:"400"},children:"Ready to watch? Enter your email to create or re-start your membership."})]}),Object(m.jsx)("div",{className:e.inputform,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),localStorage.setItem("email",JSON.stringify(n.current.value)),t.push("/signup")},children:[Object(m.jsx)("input",{className:e.input,ref:n,type:"email",placeholder:"Email Address",required:!0}),Object(m.jsx)("button",{type:"submit",className:e.getstarted,children:"GET STARTED >"})]})})]})]})}var D=n(14),U=n(149),M=Object(g.a)((function(e){return Object(b.a)({login:{position:"relative",height:"100%",background:'url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg") center no-repeat',backgroundSize:"cover"},logo:{position:"fixed",left:"0px",width:"150px",objectFit:"contain",paddingLeft:"20px"},signInbutton:{position:"fixed",right:"20px",top:"20px",padding:"10px 20px",fontSize:"1 rem",color:"#fff",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer"},login_background:{},gredient:{width:"100%",zIndex:"1",height:"100vh",background:"rgba(0,0,0,0.5)"},body:{position:"absolute",top:"10%",marginLeft:"auto",marginRight:"auto",textAlign:"center",left:"0",right:"0",zIndex:1,color:"#fff",padding:"20px"},signupform:{maxWidth:"450px",padding:"50px",marginLeft:"auto",marginRight:"auto",background:"rgba(0,0,0,.85)"},input:{outlineWidth:0,height:"40px",marginBottom:"14px",borderRadius:"5px",border:"none",padding:"5px 15px",color:"gray"},button:{padding:"16px 20px",fontSize:"1rem",color:"#fff",borderRadius:"5px",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer",marginTop:"20px"},h4:{textAlign:"left",color:"#737373",fontSize:"16px",fontWeight:"500",marginTop:"26px"},h41:{textAlign:"right",color:"#737373",fontSize:"16px",fontWeight:"500",marginTop:"26px"},h7:{textAlign:"left",marginTop:"11px",fontSize:"13px",color:"#8c8c8c"}})}));function H(){var e=M(),t=Object(o.useRef)(),n=Object(o.useRef)(),i=Object(o.useRef)(),r=Object(o.useState)(""),a=Object(p.a)(r,2),c=a[0],d=a[1],u=Object(o.useState)(!1),g=Object(p.a)(u,2),b=g[0],f=g[1],h=W(),x=h.SignUp,j=(h.user,Object(N.g)());function O(){return(O=Object(l.a)(s.a.mark((function e(o){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),n.current.value===i.current.value){e.next=3;break}return e.abrupt("return",d("password do not match"));case 3:return e.prev=3,d(""),f(!0),e.next=8,x(t.current.value,n.current.value);case 8:j.push("/homescreen"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),d(e.t0.message);case 14:f(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("email"));e&&(t.current.value=e)}),[]),Object(m.jsxs)("div",{className:e.login,children:[Object(m.jsx)("div",{className:e.login_background,children:Object(m.jsx)("img",{className:e.logo,src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"})}),Object(m.jsx)("div",{className:e.gredient}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),j.push("/login")},className:e.signInbutton,children:"Sign In"}),Object(m.jsx)("div",{className:e.body,children:Object(m.jsx)("div",{className:e.signupform,children:Object(m.jsxs)("form",{style:{display:"grid",flexDirection:"column"},onSubmit:function(e){return O.apply(this,arguments)},children:[Object(m.jsx)("h1",{style:{marginBottom:"40px",textAlign:"left"},children:"Sign Up"}),c&&Object(m.jsx)(U.a,{variant:"danger",children:c}),Object(m.jsx)("input",{className:e.input,ref:t,type:"email",placeholder:"Email",required:!0}),Object(m.jsx)("input",{className:e.input,ref:n,type:"password",placeholder:"Password",required:!0}),Object(m.jsx)("input",{className:e.input,ref:i,type:"password",placeholder:"Confirm Password",required:!0}),Object(m.jsx)("button",{disabled:b,className:e.button,type:"submit",children:"Sign Up"}),Object(m.jsx)("h4",{className:e.h41,children:Object(m.jsx)(D.b,{to:"/forgot-password",children:"Need Help?"})}),Object(m.jsx)("h6",{className:e.h7,children:"This page is protected by Google reCAPTCHA to ensure you're not a bot"})]})})})]})}var J=Object(g.a)((function(e){return Object(b.a)({login:{position:"relative",height:"100%",background:'url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg") center no-repeat',backgroundSize:"cover"},logo:{position:"fixed",left:"0px",width:"150px",objectFit:"contain",paddingLeft:"20px"},signInbutton:{position:"fixed",right:"20px",top:"20px",padding:"10px 20px",fontSize:"1 rem",color:"#fff",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer"},login_background:{},gredient:{width:"100%",zIndex:"1",height:"100vh",background:"rgba(0,0,0,0.5)"},body:{position:"absolute",top:"10%",marginLeft:"auto",marginRight:"auto",textAlign:"center",left:"0",right:"0",zIndex:1,color:"#fff",padding:"20px"},signupform:{maxWidth:"450px",padding:"50px",marginLeft:"auto",marginRight:"auto",background:"rgba(0,0,0,.85)"},input:{outlineWidth:0,height:"40px",marginBottom:"14px",borderRadius:"5px",border:"none",padding:"5px 15px",color:"gray"},button:{padding:"16px 20px",fontSize:"1rem",color:"#fff",borderRadius:"5px",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer",marginTop:"20px"},h4:{textAlign:"left",color:"#737373",fontSize:"16px",fontWeight:"500",marginTop:"26px"},h41:{textAlign:"right",color:"#737373",fontSize:"16px",fontWeight:"500",marginTop:"26px"},h7:{textAlign:"left",marginTop:"11px",fontSize:"13px",color:"#8c8c8c"}})}));function q(){var e=J(),t=Object(N.g)(),n=Object(o.useRef)(),i=Object(o.useRef)(),r=Object(o.useState)(""),a=Object(p.a)(r,2),c=a[0],d=a[1],u=Object(o.useState)(!1),g=Object(p.a)(u,2),b=g[0],f=g[1],h=W(),x=h.Login;h.user;function j(){return(j=Object(l.a)(s.a.mark((function e(o){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.preventDefault(),e.prev=1,d(""),f(!0),e.next=6,x(n.current.value,i.current.value);case 6:t.push("/homescreen"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),d(e.t0.message);case 12:f(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("email"));return e&&(n.current.value=e),localStorage.removeItem("email")}),[]),Object(m.jsxs)("div",{className:e.login,children:[Object(m.jsx)("div",{className:e.login_background,children:Object(m.jsx)("img",{className:e.logo,src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"})}),Object(m.jsx)("div",{className:e.gredient}),Object(m.jsx)("div",{className:e.body,children:Object(m.jsx)("div",{className:e.signupform,children:Object(m.jsxs)("form",{style:{display:"grid",flexDirection:"column"},onSubmit:function(e){return j.apply(this,arguments)},children:[Object(m.jsx)("h1",{style:{marginBottom:"40px",textAlign:"left"},children:"Sign In"}),c&&Object(m.jsx)(U.a,{variant:"danger",children:c}),Object(m.jsx)("input",{className:e.input,ref:n,type:"email",placeholder:"Email",required:!0}),Object(m.jsx)("input",{className:e.input,ref:i,type:"password",placeholder:"Password",required:!0}),Object(m.jsx)("button",{disabled:b,className:e.button,type:"submit",children:"Sign In"}),Object(m.jsx)("h4",{className:e.h41,children:Object(m.jsx)(D.b,{to:"/forgot-password",children:"Need Help?"})}),Object(m.jsxs)("h4",{className:e.h4,children:["New to netflix ?.",Object(m.jsx)(D.b,{to:"/",children:"Sign Up Now."})]}),Object(m.jsx)("h6",{className:e.h7,children:"This page is protected by Google reCAPTCHA to ensure you're not a bot"})]})})})]})}var G=Object(g.a)((function(e){return Object(b.a)({login:{position:"relative",height:"100%",background:'url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg") center no-repeat',backgroundSize:"cover"},logo:{position:"fixed",left:"0px",width:"150px",objectFit:"contain",paddingLeft:"20px"},signInbutton:{position:"fixed",right:"20px",top:"20px",padding:"10px 20px",fontSize:"1 rem",color:"#fff",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer"},login_background:{},gredient:{width:"100%",zIndex:"1",height:"100vh",background:"rgba(0,0,0,0.5)"},body:{position:"absolute",top:"10%",marginLeft:"auto",marginRight:"auto",textAlign:"center",left:"0",right:"0",zIndex:1,color:"#fff",padding:"20px"},signupform:{maxWidth:"450px",padding:"50px",marginLeft:"auto",marginRight:"auto",background:"rgba(0,0,0,.85)"},input:{outlineWidth:0,height:"40px",marginBottom:"14px",marginTop:"30px",borderRadius:"5px",border:"none",padding:"5px 15px",color:"gray"},button:{padding:"16px 20px",fontSize:"1rem",color:"#fff",borderRadius:"5px",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer",marginTop:"20px"},h4:{textAlign:"left",color:"#737373",fontSize:"16px",fontWeight:"500",marginTop:"10px"},h41:{textAlign:"right",color:"#737373",fontSize:"16px",fontWeight:"500",marginTop:"26px"},h7:{textAlign:"left",marginTop:"11px",fontSize:"13px",color:"#8c8c8c"}})}));function V(){var e=G(),t=Object(N.g)(),n=Object(o.useRef)(),i=Object(o.useState)(""),r=Object(p.a)(i,2),a=r[0],c=r[1],d=Object(o.useState)(!1),u=Object(p.a)(d,2),g=u[0],b=u[1],f=W(),h=f.ResetPassword,x=(f.user,Object(o.useState)("")),j=Object(p.a)(x,2),O=j[0],v=j[1];function k(){return(k=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c(""),v(""),b(!0),e.next=7,h(n.current.value);case 7:v("Check your inbox for further instructions"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),c(e.t0.message);case 13:b(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(m.jsxs)("div",{className:e.login,children:[Object(m.jsx)("div",{className:e.login_background,children:Object(m.jsx)("img",{className:e.logo,src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"})}),Object(m.jsx)("div",{className:e.gredient}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),t.push("/login")},className:e.signInbutton,children:"Sign In"}),Object(m.jsx)("div",{className:e.body,children:Object(m.jsx)("div",{className:e.signupform,children:Object(m.jsxs)("form",{style:{display:"grid",flexDirection:"column"},onSubmit:function(e){return k.apply(this,arguments)},children:[Object(m.jsx)("h1",{style:{marginBottom:"40px",textAlign:"left"},children:"Forgot Password"}),a&&Object(m.jsx)(U.a,{variant:"danger",children:a}),O&&Object(m.jsx)(U.a,{variant:"success",children:O}),Object(m.jsx)("h4",{className:e.h4,children:"We will send you an email with instructions on how to reset your password."}),Object(m.jsx)("input",{className:e.input,ref:n,type:"email",placeholder:"Name@Example.com",required:!0}),Object(m.jsx)("button",{disabled:g,className:e.button,type:"submit",children:"Email Me"})]})})})]})}var X=n(57),K=(n(117),n(33)),Y=n.n(K),Z=Object(g.a)((function(e){return Object(b.a)({planscreen:{},plan:{color:"#fff",textAlign:"left",display:"flex",justifyContent:"space-between",padding:"20px",opacity:"0.6","&: hover":{opacity:"1"}},button:{padading:"10px 20px",fontSize:"1rem",color:"#fff",backgroundColor:"#e50914",border:"none",cursor:"pointer",borderRadius:"5px",height:"40px"},h5:{textAlign:"left",fontSize:"20px",fontWeight:"600",color:"#fff"},h6:{textAlign:"left",fontSize:"15px",fontWeight:"400",color:"#fff"}})}));function Q(){var e=Object(o.useState)(null),t=Object(p.a)(e,2),n=t[0],i=t[1],r=Z();function a(e){e.preventDefault(),Object(X.alert)({title:"This feature is yet to Implement",lang:"en"})}return Object(o.useEffect)((function(){C.collection("products").where("active","==",!0).get().then((function(e){var t={};e.forEach(function(){var e=Object(l.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t[n.id]=n.data();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i(t)}))}),[]),console.log(n),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)("div",{className:r.planscreen,children:n&&Object.entries(n).map((function(e){var t=Object(p.a)(e,2),n=t[0],o=t[1];return Object(m.jsxs)("div",{className:r.plan,children:[Object(m.jsxs)("div",{className:r.info,children:[Object(m.jsx)("h5",{className:r.h5,children:o.name}),Object(m.jsx)("h6",{className:r.h6,children:o.description})]}),Object(m.jsx)("button",{onClick:a,className:r.button,children:"Subscribe"})]},n)}))}):Object(m.jsx)(Y.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})})}var $=Object(g.a)((function(e){return Object(b.a)({logo:{position:"fixed",left:"0px",width:"150px",objectFit:"contain",paddingLeft:"20px"},profilescreen:{height:"100vh",backgroundColor:"black"},profilebutton:{position:"fixed",right:"20px",top:"20px",padding:"10px 20px",fontSize:"1 rem",color:"#fff",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer",backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:'url("https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png")',height:"40px",width:"40px"},body:{display:"flex",flexDirection:"column",width:"50%",marginLeft:"auto",marginRight:"auto",paddingTop:"5%",maxWidth:"700px"},info:{display:"flex"},h2:{textAlign:"left",fontSize:"60px",fontWeight:"400",borderBottom:"1px solid #282c2d",marginBottom:"20px",color:"white"},details:{color:"white",marginLeft:"25px",flex:"1"},h21:{textAlign:"left",backgroundColor:"gray",padding:"15px",fontSize:"15px",paddingLeft:"20px"},signout:{padding:"10px 20px",fontSize:"1rem",marginTop:"5%",width:"100%",color:"#fff",backgroundColor:"#e50914",border:"none",cursor:"pointer",fontWeight:"600"},plans:{marginTop:"20px",backgroundColor:"black"},h3:{textAlign:"left",borderBottom:"1px solid #282c2d",paddingBottom:"10px"}})}));function ee(){var e=W(),t=e.Logout,n=e.user,i=Object(N.g)(),r=Object(o.useState)(""),a=Object(p.a)(r,2),c=a[0],d=a[1],u=$();function g(){return(g=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(""),e.next=4,t();case 4:localStorage.removeItem("user"),i.push("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){n&&localStorage.setItem("email",JSON.stringify(n.email))}),[]),Object(m.jsxs)("div",{className:u.profilescreen,children:[Object(m.jsx)("img",{onClick:function(e){e.preventDefault(),i.push("/homescreen")},className:u.logo,src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"}),Object(m.jsx)("button",{className:u.profilebutton}),Object(m.jsxs)("div",{className:u.body,children:[Object(m.jsx)("h2",{className:u.h2,children:"Edit Profile"}),Object(m.jsxs)("div",{className:u.info,children:[Object(m.jsx)("img",{style:{height:"100px"},src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:""}),Object(m.jsxs)("div",{className:u.details,children:[c&&Object(m.jsx)(U.a,{variant:"danger",children:c}),Object(m.jsxs)("h2",{className:u.h21,children:[n&&n.email," ",Object(m.jsx)(D.b,{to:"/edit-profile",style:{marginLeft:"400px"},children:"Edit"})]}),Object(m.jsxs)("div",{className:u.plans,children:[Object(m.jsx)("h3",{className:u.h3,children:"Plans"}),Object(m.jsx)(Q,{}),Object(m.jsx)("button",{onClick:function(){return g.apply(this,arguments)},className:u.signout,children:"Sign Out"})]})]})]})]})]})}var te=Object(g.a)((function(e){return Object(b.a)({login:{position:"relative",height:"100%",background:'url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg") center no-repeat',backgroundSize:"cover"},logo:{position:"fixed",left:"0px",width:"150px",objectFit:"contain",paddingLeft:"20px"},signInbutton:{position:"fixed",right:"20px",top:"20px",padding:"10px 20px",fontSize:"1 rem",color:"#fff",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer"},login_background:{},gredient:{width:"100%",zIndex:"1",height:"100vh",background:"rgba(0,0,0,0.5)"},body:{position:"absolute",top:"10%",marginLeft:"auto",marginRight:"auto",textAlign:"center",left:"0",right:"0",zIndex:1,color:"#fff",padding:"20px",width:"fit-content"},signupform:{maxWidth:"550px",padding:"50px",marginLeft:"auto",marginRight:"auto",background:"rgba(0,0,0,.85)"},input:{outlineWidth:0,height:"40px",marginBottom:"14px",marginTop:"30px",borderRadius:"5px",border:"none",padding:"5px 15px",color:"gray"},button:{padding:"16px 20px",fontSize:"1rem",color:"#fff",borderRadius:"5px",backgroundColor:"#e50914",fontWeight:"600",border:"none",cursor:"pointer",marginTop:"20px"},h4:{textAlign:"left",color:"#737373",fontSize:"16px",fontWeight:"500",marginTop:"10px"},h41:{textAlign:"right",color:"#737373",fontSize:"16px",fontWeight:"500",marginTop:"26px"},h7:{textAlign:"left",marginTop:"11px",fontSize:"13px",color:"#8c8c8c"}})}));function ne(){var e=te(),t=Object(N.g)(),n=Object(o.useState)(),i=Object(p.a)(n,2),r=i[0],a=i[1],c=Object(o.useRef)(),s=Object(o.useRef)(),l=Object(o.useRef)(),d=Object(o.useState)(""),u=Object(p.a)(d,2),g=u[0],b=u[1],f=Object(o.useState)(!1),h=Object(p.a)(f,2),x=h[0],j=h[1],O=Object(o.useState)(""),v=Object(p.a)(O,2),k=v[0],w=(v[1],W()),S=(w.user,w.updateEmail),y=w.updatePassword;return Object(o.useEffect)((function(){c.current.value=JSON.parse(localStorage.getItem("email")),a(JSON.parse(localStorage.getItem("email")))}),[]),Object(m.jsxs)("div",{className:e.login,children:[Object(m.jsx)("div",{className:e.login_background,children:Object(m.jsx)("img",{onClick:function(){t.push("/homescreen")},className:e.logo,src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"})}),Object(m.jsx)("div",{className:e.gredient}),Object(m.jsx)("div",{className:e.body,children:Object(m.jsx)("div",{className:e.signupform,children:Object(m.jsxs)("form",{style:{display:"grid",flexDirection:"column"},onSubmit:function(e){if(e.preventDefault(),s.current.value!==l.current.value)return b("password do not match");var n=[];c.current.value!=r&&n.push(S(c.current.value)),s.current.value&&l.current.value&&n.push(y(s.current.value)),Promise.all(n).then((function(){t.push("/profile")})).catch((function(){b("Failed to update the account")})).finally((function(){j(!1)})),localStorage.removeItem("email")},children:[Object(m.jsx)("h1",{style:{marginBottom:"40px",textAlign:"left"},children:"Update Email/Password"}),g&&Object(m.jsx)(U.a,{variant:"danger",children:g}),k&&Object(m.jsx)(U.a,{variant:"success",children:k}),Object(m.jsx)("input",{className:e.input,ref:c,type:"email",placeholder:"Name@Example.com",required:!0}),Object(m.jsx)("input",{className:e.input,ref:s,type:"password",placeholder:"Enter the new password to update"}),Object(m.jsx)("input",{className:e.input,ref:l,type:"password",placeholder:"confirm the new password"}),Object(m.jsx)("button",{disabled:x,className:e.button,type:"submit",children:"Update Details"})]})})})]})}var oe=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(D.a,{basename:"/React-Netflix-Clone",children:Object(m.jsx)(L,{children:Object(m.jsxs)(N.d,{children:[Object(m.jsx)(E,{path:"/homescreen",component:z}),Object(m.jsx)(E,{path:"/profile",component:ee}),Object(m.jsx)(E,{path:"/edit-profile",component:ne}),Object(m.jsx)(N.b,{exact:!0,path:"/",component:F}),Object(m.jsx)(N.b,{path:"/login",component:q}),Object(m.jsx)(N.b,{path:"/signup",component:H}),Object(m.jsx)(N.b,{path:"/forgot-password",component:V})]})})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),r(e),a(e)}))};n(136);a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(oe,{})}),document.getElementById("root")),ie()},65:function(e,t,n){},66:function(e,t,n){}},[[137,1,2]]]);
//# sourceMappingURL=main.7147c03d.chunk.js.map