(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{394:function(n,e,t){"use strict";t.r(e);var r,i=t(1),o=t.n(i),a=t(43),c=t.n(a),l=t(36),s=t(5),d=t(41),m=t(6),b=t.p+"static/media/avatar.c4ee4a8d.jpg",j=t(0);var h,p=m.b.nav(r||(r=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  border-right: 1px solid var(--border-color);\n  .avatar {\n    width: 100%;\n    border-bottom: 1px solid var(--border-color);\n    text-align: center;\n    padding: 1rem 0;\n    img {\n      width: 70%;\n      border-radius: 50%;\n      border: 8px solid var(--border-color);\n    }\n  }\n\n  .nav-items {\n    width: 100%;\n    text-align: center;\n    .active-class {\n      background-color: var(--primary-color-light);\n      color: white;\n    }\n    li {\n      display: block;\n      a {\n        display: block;\n        padding: 0.45rem 0;\n        position: relative;\n        z-index: 10;\n        text-transform: uppercase;\n        transition: all 0.4s ease-in-out;\n        font-weight: 600;\n        letter-spacing: 1px;\n        &:hover {\n          cursor: pointer;\n          color: var(--white-color);\n        }\n        &::before {\n          content: '';\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 0;\n          height: 50%;\n          background-color: var(--primary-color);\n          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);\n          opacity: 0.21;\n          z-index: -1;\n        }\n      }\n\n      a:hover::before {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n\n  footer {\n    border-top: 1px solid var(--border-color);\n    width: 100%;\n    p {\n      padding: 1.3rem 0;\n      font-size: 1.1rem;\n      display: block;\n      text-align: center;\n    }\n  }\n"]))),g=function(){return Object(j.jsxs)(p,{children:[Object(j.jsx)("div",{className:"avatar",children:Object(j.jsx)("img",{src:b,alt:""})}),Object(j.jsxs)("ul",{className:"nav-items",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/about",activeClassName:"active-class ",exact:!0,children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/resume",activeClassName:"active-class ",exact:!0,children:"Resume"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/portfolios",activeClassName:"active-class",exact:!0,children:"Portfolios"})})," ",Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/blogs",activeClassName:"active-class",exact:!0,children:"Blogs"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/contact",activeClassName:"active-class",exact:!0,children:"Contact"})})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{children:"@2021 My Portfolio Website "})})]})};var x=m.b.div(h||(h=Object(s.a)(["\n  width: 16.3rem;\n  position: fixed;\n  height: 100vh;\n  background-color: var(--sidebar-dark-color);\n  overflow: hidden;\n  transition: all 0.4s ease-in-out;\n  @media screen and (max-width: 1200px) {\n    transform: translateX(-100%);\n    z-index: 20;\n  }\n"]))),u=function(n){var e=n.navToggle;return Object(j.jsx)(x,{className:"".concat(e?"nav-toggle":""),children:Object(j.jsx)(g,{})})},f=t(120),v=t.n(f);var O,w=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v.a,{width:"100%",height:"100vh",params:{particles:{number:{value:109,density:{enable:!0,value_area:1200}},color:{value:"#636e72"},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:6}},line_linked:{enable:!1,distance:150,opacity:.9,width:1,shadow:{enable:!0,color:"#e74c3c",blur:5}},move:{enable:!0,random:!0,speed:.6,attract:{rotateX:600,rotateY:1200}},size:{value:4,random:!0,anim:{speed:40,size_min:.1}},opacity:{value:.8,anim:{speed:1,opacity_min:.1}}}}})})},y=t(121),k=t.n(y),N=t(125),z=t.n(N),F=t(66),S=t.n(F),A=t(126),C=t.n(A);var T,E,I=m.b.header(O||(O=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n\n  .p-particles-js {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .typography {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    width: 80%;\n    .icons {\n      display: flex;\n      justify-content: center;\n      margin-top: 1rem;\n      .icon {\n        border: 2px solid var(--border-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        transition: all 0.4s ease-in-out;\n        cursor: pointer;\n        &:hover {\n          /* background-color: var(--primary-color); */\n          border: 2px solid var(--primary-color);\n          color: var(--primary-color);\n        }\n        &:not(:last-child) {\n          margin-right: 1rem;\n        }\n        svg {\n          margin: 0.5rem;\n        }\n      }\n      .i-facebook {\n        &:hover {\n          border: 2px solid lightblue;\n          color: lightblue;\n        }\n      }\n      .i-github {\n        &:hover {\n          border: 2px solid green;\n          color: green;\n        }\n      }\n      .i-linkedin {\n        &:hover {\n          border: 2px solid blueviolet;\n          color: blueviolet;\n        }\n      }\n      .i-twitter {\n        &:hover {\n          border: 2px solid blue;\n          color: blue;\n        }\n      }\n    }\n  }\n"]))),B=function(){return Object(j.jsxs)(I,{children:[Object(j.jsx)("div",{className:"p-particles-js",children:Object(j.jsx)(w,{})}),Object(j.jsxs)("div",{className:"typography",children:[Object(j.jsxs)("h1",{children:["Hi I'm ",Object(j.jsx)("span",{children:" Shikshya Gautam"})]}),Object(j.jsx)("p",{children:"Hello Everyone there!. I'm an undergraduate student currently exploring my knowledge in the field of tech. I'm currentl studying BSC.CSIT(Bachelors Of Computer Science And Information Technology) in Tribhuvan University. I'm exploring my knowledge to work as a FullStack Developer and a Network Engineer."}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("a",{href:"https://www.facebook.com/shiksha.gautam.921",className:"icon i-facebook",children:Object(j.jsx)(k.a,{})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/shiksha-gautam-668751167/",className:"icon i-linkedin",children:Object(j.jsx)(z.a,{})}),Object(j.jsx)("a",{href:"https://github.com/Education-08-15",className:"icon i-github",children:Object(j.jsx)(S.a,{})}),Object(j.jsx)("a",{href:"https://twitter.com/Shikshy74393916",className:"icon i-twitter",children:Object(j.jsx)(C.a,{})})]})]})]})},H=t.p+"static/media/resume.fb48c176.jpg",P=t(127),D=t(128),L=t(140),M=t(138),G=t(129),R=function(n){Object(L.a)(t,n);var e=Object(M.a)(t);function t(){var n;Object(P.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).pdfGenerate=function(){var n=new G.a("landscape","px","a4","false");n.addImage(b,"PNG",65,20,500,400),n.addPage(),n.save("a.pdf")},n}return Object(D.a)(t,[{key:"render",value:function(){return Object(j.jsx)(U,{onClick:this.pdfGenerate,children:"Download Cv"})}}]),t}(i.Component),U=m.b.a(T||(T=Object(s.a)(["\n  background-color: var(--primary-color);\n  padding: 0.8rem 2.5rem;\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  font-size: inherit;\n  text-transform: uppercase;\n  position: relative;\n  transition: all 0.4s ease-in-out;\n  &::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0.2rem;\n    left: 0;\n    bottom: 0;\n    opacity: 0.7;\n    transition: all 0.4s ease-in-out;\n  }\n\n  &:hover::after {\n    width: 100%;\n    background-color: var(--white-color);\n  }\n"]))),J=R;var V,_=m.b.div(E||(E=Object(s.a)(["\n  margin-top: 5rem;\n  display: flex;\n  @media screen and (max-width: 1000px) {\n    flex-direction: column;\n    .left-content {\n      margin-bottom: 2rem;\n    }\n  }\n  .left-content {\n    width: 100%;\n    img {\n      width: 95%;\n      object-fit: cover;\n    }\n  }\n  .right-content {\n    width: 100%;\n    h4 {\n      font-size: 2rem;\n      color: var(--white-color);\n      span {\n        font-size: 2rem;\n      }\n    }\n    .paragraph {\n      padding: 1rem 0;\n    }\n    .about-info {\n      display: flex;\n      padding-bottom: 1.4rem;\n      .info-title {\n        padding-right: 3rem;\n        p {\n          font-weight: 600;\n        }\n      }\n      .info-title,\n      .info {\n        p {\n          padding: 0.3rem 0;\n        }\n      }\n    }\n  }\n"]))),W=function(){return Object(j.jsxs)(_,{children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)("img",{src:H,alt:""})}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)("div",{className:"sub-title",children:Object(j.jsxs)("h4",{children:["I am ",Object(j.jsx)("span",{children:"Shikshya Gautam"})]})}),Object(j.jsx)("p",{className:"paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt officia voluptatibus eveniet dignissimos veniam suscipit laborum nulla provident labore! Lorem ipsum dolor sit, amet consectetur adipisicing elit."}),Object(j.jsxs)("div",{className:"about-info",children:[Object(j.jsxs)("div",{className:"info-title",children:[Object(j.jsx)("p",{children:"Full Name"}),Object(j.jsx)("p",{children:"Age"}),Object(j.jsx)("p",{children:"Nationality"}),Object(j.jsx)("p",{children:"Languages"}),Object(j.jsx)("p",{children:"Location"}),Object(j.jsx)("p",{children:"Service"})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("p",{children:": Shikshya Gautam"}),Object(j.jsx)("p",{children:": 23"}),Object(j.jsx)("p",{children:": Nepali"}),Object(j.jsx)("p",{children:": English, Nepali, Indian"}),Object(j.jsx)("p",{children:": Nepal, Bharatpur-11 Chitwan"}),Object(j.jsx)("p",{children:": Freelance"})]})]}),Object(j.jsx)(J,{title:"Download Cv"})]})]})};var Y,X,Q,q=m.b.div(V||(V=Object(s.a)(["\n  position: relative;\n  h2 {\n    color: var(--white-color);\n    font-size: 3rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    position: relative;\n    padding-bottom: 0.7rem;\n    &::before {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      width: 7.4rem;\n      height: 0.33rem;\n      background-color: var(--background-light-color);\n      border-radius: 15px;\n      left: 0;\n    }\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      width: 3.5rem;\n      height: 0.33rem;\n      background-color: var(--primary-color);\n      border-radius: 15px;\n      left: 0;\n    }\n    span {\n      font-weight: 900;\n      color: rgba(25, 29, 43, 0.44);\n      font-size: 5rem;\n      position: absolute;\n      left: 0;\n      top: 30%;\n      z-index: -1;\n      @media screen and (max-width: 620px) {\n        font-size: 4rem;\n      }\n      @media screen and (max-width: 496px) {\n        font-size: 3rem;\n      }\n      @media screen and (max-width: 370px) {\n        font-size: 2rem;\n      }\n    }\n  }\n"]))),K=function(n){var e=n.title,t=n.span;return Object(j.jsx)(q,{children:Object(j.jsxs)("h2",{children:[e," ",Object(j.jsx)("span",{children:t})]})})},Z=m.b.div(Y||(Y=Object(s.a)(["\n  padding: 5rem;\n  @media screen and (max-width: 642px) {\n    padding: 4rem;\n  }\n  /* @media screen and (max-width: 510px){\n        padding: 3rem;\n    } */\n  @media screen and (max-width: 571px) {\n    padding: 2rem 0.4rem;\n  }\n"]))),$=m.b.div(X||(X=Object(s.a)(["\n  padding: 5rem 0;\n"])));var nn,en=m.b.div(Q||(Q=Object(s.a)(["\n  padding: 2rem 1rem;\n  border-left: 6px solid var(--border-color);\n  background-color: var(--background-dark-grey);\n  position: relative;\n  width: 50%;\n  &:not(:first-child) {\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    left: 2rem;\n    border-width: 0.8rem;\n    top: 100%;\n    /* bottom: 0; */\n    border-style: solid;\n    border-color: var(--background-dark-grey) transparent transparent\n      var(--background-dark-grey);\n  }\n  p {\n    padding: 1rem 0;\n  }\n"]))),tn=function(n){var e=n.text;return Object(j.jsx)(en,{children:Object(j.jsx)("p",{children:e})})};var rn,on=m.b.section(nn||(nn=Object(s.a)(["\n  .reviews {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 1.5rem;\n    width: 100%;\n    @media screen and (max-width: 650px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n  }\n"]))),an=function(){return Object(j.jsxs)(on,{children:[Object(j.jsx)(K,{title:"Reviews",span:"Reviews"}),Object(j.jsx)($,{children:Object(j.jsxs)("div",{className:"reviews",children:[Object(j.jsx)(tn,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate suscipit ea totam voluptatum impedit, facere "}),Object(j.jsx)(tn,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate suscipit ea totam voluptatum impedit, facere "}),Object(j.jsx)(tn,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate suscipit ea totam voluptatum impedit, facere "})]})})]})};var cn,ln=m.b.div(rn||(rn=Object(s.a)(["\n  background-color: var(--background-dark-grey);\n  border-left: 1px solid var(--border-color);\n  border-top: 8px solid var(--border-color);\n  border-right: 1px solid var(--border-color);\n  border-bottom: 1px solid var(--border-color);\n  transition: all 0.4s ease-in-out;\n  &:hover {\n    border-top: 8px solid var(--primary-color);\n    transform: translateY(3px);\n  }\n  .container {\n    padding: 1.2rem;\n    h4 {\n      color: var(--white-color);\n      font-size: 1.6rem;\n      padding: 1rem 0;\n      position: relative;\n      &::after {\n        content: '';\n        width: 4rem;\n        background-color: var(--border-color);\n        height: 3px;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        border-radius: 10px;\n      }\n    }\n\n    p {\n      padding: 0.8rem 0;\n    }\n  }\n"]))),sn=function(n){var e=n.image,t=n.title,r=n.paragraph;return Object(j.jsx)(ln,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:e,alt:""}),Object(j.jsx)("h4",{children:t}),Object(j.jsx)("p",{children:r})]})})},dn=t.p+"static/media/design.b0dea6a3.svg",mn=t.p+"static/media/intelligence.191362ff.svg",bn=t.p+"static/media/game-dev.7e1a6c88.svg";var jn,hn=m.b.div(cn||(cn=Object(s.a)(["\n  services {\n    margin-top: 5rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 1.5rem;\n    @media screen and (max-width: 1000px) {\n      flex-direction: column;\n    }\n    @media screen and (max-width: 950px) {\n      grid-template-columns: repeat(2, 1fr);\n    }\n    @media screen and (max-width: 650px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n  }\n"]))),pn=function(){return Object(j.jsx)($,{children:Object(j.jsxs)(hn,{children:[Object(j.jsx)(K,{title:"Services",span:"services"}),Object(j.jsxs)("div",{className:"services",children:[Object(j.jsx)(sn,{image:dn,title:"Web Development",paragraph:"  "}),Object(j.jsx)("div",{className:"mid-card",children:Object(j.jsx)(sn,{image:mn,title:"Artificial Intelligence",paragraph:""})}),Object(j.jsx)(sn,{image:bn,title:"Game Development",paragraph:" "})]})]})})};var gn,xn=m.b.section(jn||(jn=Object(s.a)([""]))),un=function(){return Object(j.jsx)(Z,{children:Object(j.jsxs)(xn,{children:[Object(j.jsx)(K,{title:"About Me",span:"About Me"}),Object(j.jsx)(W,{}),Object(j.jsx)(pn,{children:" "}),Object(j.jsx)(an,{})]})})};var fn,vn=m.b.div(gn||(gn=Object(s.a)(["\n  .progress-bar {\n    display: flex;\n    align-items: center;\n    p {\n      padding-right: 1.1rem;\n    }\n    .progress {\n      position: relative;\n      width: 100%;\n      height: 0.4rem;\n      background-color: var(--border-color);\n      span {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        height: 100%;\n        background-color: var(--primary-color);\n      }\n    }\n  }\n"]))),On=function(n){var e=n.title,t=n.width,r=n.text;return Object(j.jsxs)(vn,{children:[Object(j.jsx)("h6",{children:e}),Object(j.jsxs)("div",{className:"progress-bar",children:[Object(j.jsx)("p",{children:r}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("span",{style:{width:t}})})]})]})};var wn,yn=m.b.section(fn||(fn=Object(s.a)(["\n  .skills {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-row-gap: 2rem;\n    grid-column-gap: 3rem;\n    @media screen and (max-width: 700px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n  }\n"]))),kn=function(){return Object(j.jsxs)(yn,{children:[Object(j.jsx)(K,{title:"My Skills",span:"my skills"}),Object(j.jsx)($,{children:Object(j.jsxs)("div",{className:"skills",children:[Object(j.jsx)(On,{title:"HTML5",width:"60%",text:"60%"}),Object(j.jsx)(On,{title:"CSS3",width:"60%",text:"60%"}),Object(j.jsx)(On,{title:"JAVASCRIPT",width:"65%",text:"65%"}),Object(j.jsx)(On,{title:"JAVA",width:"30%",text:"30%"}),Object(j.jsx)(On,{title:"React JS",width:"70%",text:"70%"}),Object(j.jsx)(On,{title:"Bash-Scripting",width:"50%",text:"50%"})]})})]})};var Nn,zn=m.b.div(wn||(wn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  p {\n    padding-right: 1rem;\n    svg {\n      font-size: 3rem;\n    }\n  }\n  h3 {\n    color: var(--white-color);\n    font-size: 2rem;\n  }\n"]))),Fn=function(n){var e=n.icon,t=n.title;return Object(j.jsxs)(zn,{children:[Object(j.jsx)("p",{children:e}),Object(j.jsx)("h3",{children:t})]})},Sn=t(130),An=t.n(Sn),Cn=t(131),Tn=t.n(Cn);var En,In=m.b.div(Nn||(Nn=Object(s.a)(["\n  display: flex;\n  @media screen and (max-width: 421px) {\n    p,\n    h5,\n    h6 {\n      font-size: 80%;\n    }\n  }\n  &:not(:last-child) {\n    padding-bottom: 3rem;\n  }\n  .left-content {\n    width: 50%;\n    padding-left: 20px;\n    position: relative;\n    &::before {\n      content: '';\n      position: absolute;\n      left: -10px;\n      top: 5px;\n      height: 15px;\n      width: 15px;\n      border-radius: 50%;\n      border: 2px solid var(--border-color);\n      background-color: var(--background-dark-color);\n    }\n    p {\n      display: inline-block;\n    }\n  }\n  .right-content {\n    padding-left: 5rem;\n    position: relative;\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 15px;\n      height: 2px;\n      width: 3rem;\n      background-color: var(--border-color);\n    }\n    h5 {\n      color: var(--primary-color);\n      font-size: 2rem;\n      padding-bottom: 0.4rem;\n    }\n    h6 {\n      padding-bottom: 0.6rem;\n      font-size: 1.5rem;\n    }\n  }\n"]))),Bn=function(n){var e=n.year,t=n.title,r=n.subTitle,i=n.text;return Object(j.jsxs)(In,{children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)("p",{children:e})}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)("h5",{children:t}),Object(j.jsx)("h6",{children:r}),Object(j.jsx)("p",{children:i})]})]})};var Hn=m.b.section(En||(En=Object(s.a)(["\n  .small-title {\n    padding-bottom: 3rem;\n  }\n  .u-small-title-margin {\n    margin-top: 4rem;\n  }\n\n  .resume-content {\n    border-left: 2px solid var(--border-color);\n  }\n"]))),Pn=function(){var n=Object(j.jsx)(An.a,{}),e=Object(j.jsx)(Tn.a,{});return Object(j.jsxs)(Hn,{children:[Object(j.jsx)(K,{title:"Resume",span:"resume"}),Object(j.jsxs)($,{children:[Object(j.jsx)("div",{className:"small-title",children:Object(j.jsx)(Fn,{icon:n,title:"Working Experience"})}),Object(j.jsxs)("div",{className:"resume-content",children:[Object(j.jsx)(Bn,{year:"2020 - present",title:"Fronted-Developer",subTitle:"Freelancer",text:"I am exploring my knowledge in the field of information technology as a freelencer in frontened developement."}),Object(j.jsx)(Bn,{year:"2021- Present",title:"Search Engine Optimization",subTitle:"Nepal Seo Company",text:" working as an intern "}),Object(j.jsx)(Bn,{year:"2021",title:"React Developer",subTitle:"Nepal Seo Company",text:"Intern. "})]}),Object(j.jsx)("div",{className:"small-title u-small-title-margin",children:Object(j.jsx)(Fn,{icon:e,title:"Educational Qualifications"})}),Object(j.jsxs)("div",{className:"resume-content ",children:[Object(j.jsx)(Bn,{year:"2002 - 2014",title:"School Leaving Certificate",subTitle:"Prerana Higher Secondary English Boarding School",text:" "}),Object(j.jsx)(Bn,{year:"2014 - 2016",title:"Science-Stream",subTitle:"Aroma College",text:" "}),Object(j.jsx)(Bn,{year:"2017 - present",title:"Bachelors Of Computer Science & Information Technology",subTitle:"Tribhuwan University",text:" "})]})]})]})};var Dn,Ln=function(){return Object(j.jsxs)(Z,{children:[Object(j.jsx)(kn,{}),Object(j.jsx)(Pn,{})]})},Mn=t(139),Gn=t.p+"static/media/maya-1.8f184556.jpg",Rn=t.p+"static/media/maya-4.98e8029e.jpg",Un=t.p+"static/media/maya-3.8bd072e0.jpg",Jn=[{id:1,category:"Python",image:Gn,link1:"https://www.google.com",link2:"https://www.google.com",title:"How To Use Python",text:"Numper one Programming language"},{id:2,category:"Python",image:Un,link1:"https://www.google.com",link2:"https://www.google.com",title:"How To Animate In Maya",text:"Number one Animation Application"},{id:3,category:"Javascript",image:Un,link1:"https://www.google.com",link2:"https://www.google.com",title:"How To Animate In Maya",text:"Number one Animation Application"},{id:4,category:"Animation",image:Rn,link1:"https://www.google.com",link2:"https://www.google.com",title:"How To Use Blender",text:"Free Animation Software"},{id:5,category:"Animation",image:Rn,link1:"https://www.google.com",link2:"https://www.google.com",title:"How To Use Blender",text:"Free Animation Software"}],Vn=t(132),_n=t.n(Vn);var Wn,Yn,Xn=m.b.div(Dn||(Dn=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  @media screen and (max-width: 920px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media screen and (max-width: 670px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .grid-item {\n    .portfolio-content {\n      display: block;\n      position: relative;\n      overflow: hidden;\n      h6 {\n        font-size: 1.5rem;\n      }\n      img {\n        width: 100%;\n        height: 30vh;\n        object-fit: cover;\n      }\n      ul {\n        transform: translateY(-600px);\n        transition: all 0.4s ease-in-out;\n        position: absolute;\n        left: 50%;\n        top: 40%;\n        opacity: 0;\n        li {\n          background-color: var(--border-color);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          padding: 1rem;\n          border-radius: 50%;\n          width: 3rem;\n          height: 3rem;\n          margin: 0 0.5rem;\n          transition: all 0.4s ease-in-out;\n          &:hover {\n            background-color: var(--primary-color);\n          }\n          a {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.4s ease-in-out;\n          }\n        }\n      }\n\n      .portfolio-image {\n        &::before {\n          content: '';\n          position: absolute;\n          left: 2%;\n          top: 4%;\n          height: 0;\n          width: 0;\n          transition: all 0.4s ease-in-out;\n        }\n      }\n      .portfolio-image:hover {\n        ul {\n          transform: translateY(0);\n          transform: translate(-50%, -50%);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          transition: all 0.4s ease-in-out;\n          opacity: 1;\n          li {\n            transition: all 0.4s ease-in-out;\n            &:hover {\n              background-color: var(--primary-color);\n            }\n            a {\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              transition: all 0.4s ease-in-out;\n            }\n          }\n\n          li:hover {\n            svg {\n              color: var(--white-color);\n            }\n          }\n          svg {\n            font-size: 2rem;\n          }\n        }\n        &::before {\n          height: calc(100% - 32%);\n          width: calc(100% - 4%);\n          background-color: white;\n          opacity: 0.9;\n          transform-origin: left;\n\n          transition: all 0.4s ease-in-out;\n        }\n      }\n    }\n  }\n"]))),Qn=function(n){var e=n.menuItem;return Object(j.jsx)(Xn,{children:e.map((function(n){return Object(j.jsx)("div",{className:"grid-item",children:Object(j.jsxs)("div",{className:"portfolio-content",children:[Object(j.jsxs)("div",{className:"portfolio-image",children:[Object(j.jsx)("img",{src:n.image,alt:""}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:n.link1,children:Object(j.jsx)(S.a,{})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:n.link2,children:Object(j.jsx)(_n.a,{})})})]})]}),Object(j.jsx)("h6",{children:n.title}),Object(j.jsx)("p",{children:n.text})]})},n.id)}))})};var qn=m.b.button(Wn||(Wn=Object(s.a)(["\n  outline: none;\n  border: none;\n  background-color: var(--background-light-color-2);\n  padding: 0.4rem 2rem;\n  font-size: inherit;\n  color: var(--white-color);\n  cursor: pointer;\n  transition: all 0.4s ease-in-out;\n  margin-bottom: 0.6rem;\n  &:active,\n  &:focus {\n    background-color: var(--primary-color);\n  }\n  &:hover {\n    background-color: var(--primary-color);\n  }\n\n  &:not(:last-child) {\n    margin-right: 0.6rem;\n  }\n"]))),Kn=m.b.div(Yn||(Yn=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 70%;\n  margin: 2.4rem auto;\n"]))),Zn=function(n){var e=n.filter,t=n.button;return Object(j.jsx)(Kn,{children:t.map((function(n,t){return Object(j.jsx)(qn,{onClick:function(){return e(n)},children:n},t)}))})},$n=["All"].concat(Object(Mn.a)(new Set(Jn.map((function(n){return n.category})))));var ne,ee=function(){var n=Object(i.useState)(Jn),e=Object(d.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)($n),a=Object(d.a)(o,1)[0];return Object(j.jsxs)(Z,{children:[Object(j.jsx)(K,{title:"Portfolios",span:"portfolios"}),Object(j.jsxs)($,{children:[Object(j.jsx)(Zn,{filter:function(n){if("All"!==n){var e=Jn.filter((function(e){return e.category===n}));r(e)}else r(Jn)},button:a}),Object(j.jsx)(Qn,{menuItem:t})]})]})},te=t.p+"static/media/blog1.aa2f074c.svg",re=t.p+"static/media/blog2.df7996bd.svg",ie=t.p+"static/media/blog3.969725e8.svg",oe=t.p+"static/media/blog4.60aa6cec.svg",ae=[{id:1,title:"How To Work from Home",date:"01",month:"April",image:te,link:"https://www.google.com/"},{id:2,title:"How To Use SEO Efficiently",date:"01",month:"April",image:re,link:"https://www.singlegrain.com/seo/effective-seo-techniques-that-work/"},{id:3,title:"How to choose a programming Language",date:"01",month:"April",image:ie,link:"https://www.freecodecamp.org/news/how-to-choose-a-programming-language-and-escape-tutorial-purgatory/"},{id:4,title:"How to choose roadmap for frontened-developer",date:"01",month:"April",image:oe,link:"https://roadmap.sh/frontend"},{id:5,title:"How to choose roadmap for backend-developer",date:"01",month:"April",image:oe,link:"https://roadmap.sh/backend"}];var ce,le=m.b.div(ne||(ne=Object(s.a)(["\n  .blog {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 2rem;\n    grid-row-gap: 3rem;\n    @media screen and (max-width: 770px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n    .blog-item {\n      background-color: var(--background-dark-grey);\n      padding: 1rem 1rem;\n    }\n    .image {\n      width: 100%;\n      height: 90%;\n      img {\n        width: 100%;\n        height: 90%;\n        object-fit: cover;\n        transition: all 0.4s ease-in-out;\n        &:hover {\n          cursor: pointer;\n\n          transform: rotate(3deg) scale() (1.1);\n        }\n      }\n    }\n    .title {\n      a {\n        font-size: 1.5rem;\n        padding: 2rem 0;\n        color: var(--white-color);\n        cursor: pointer;\n        transition: all 0.4s ease-in-out;\n        &:hover {\n          color: var(--primary-color);\n        }\n      }\n    }\n  }\n"]))),se=function(){return Object(j.jsx)(Z,{children:Object(j.jsxs)(le,{children:[Object(j.jsx)(K,{title:"Blogs",span:"Blogs"}),Object(j.jsx)($,{className:"blog",children:ae.map((function(n){return Object(j.jsxs)("div",{className:"blog-item",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:n.image,alt:""})}),Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("a",{href:n.link,children:n.title})})]},n.id)}))})]})})},de=t(133),me=t.n(de),be=t(134),je=t.n(be),he=t(135),pe=t.n(he);var ge,xe=m.b.div(ce||(ce=Object(s.a)(["\n  padding: 1.5rem 2rem;\n  background-color: var(--background-dark-grey);\n  display: flex;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 2.5rem;\n  }\n  .left-content {\n    padding: 1.5rem;\n    border: 1px solid var(--border-color);\n    font-size: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 1.5rem;\n    svg {\n      font-size: 2.3rem;\n    }\n  }\n\n  .right-content {\n    h6 {\n      color: var(--white-color);\n      font-size: 1.2rem;\n      padding-bottom: 0.6rem;\n    }\n    p {\n      padding: 0.1rem 0;\n    }\n  }\n"]))),ue=function(n){var e=n.title,t=n.icon,r=n.cont1,i=n.cont2;return Object(j.jsxs)(xe,{children:[Object(j.jsx)("div",{className:"left-content",children:t}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)("h6",{children:e}),Object(j.jsx)("p",{children:r}),Object(j.jsx)("p",{children:i})]})]})};var fe,ve=m.b.section(ge||(ge=Object(s.a)(["\n  .contact-section {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 2rem;\n    @media screen and (max-width: 978px) {\n      grid-template-columns: repeat(1, 1fr);\n      .f-button {\n        margin-bottom: 3rem;\n      }\n    }\n    .right-content {\n      display: grid;\n      grid-template-columns: repeat(1, 1fr);\n      @media screen and (max-width: 502px) {\n        width: 70%;\n      }\n    }\n    .contact-title {\n      h4 {\n        color: var(--white-color);\n        padding: 1rem 0;\n        font-size: 1.8rem;\n      }\n    }\n    .form {\n      width: 100%;\n      @media screen and (max-width: 502px) {\n        width: 100%;\n      }\n      .form-field {\n        margin-top: 2rem;\n        position: relative;\n        width: 100%;\n        label {\n          position: absolute;\n          left: 20px;\n          top: -19px;\n          display: inline-block;\n          background-color: var(--background-dark-color);\n          padding: 0 0.5rem;\n          color: inherit;\n        }\n        input {\n          border: 1px solid var(--border-color);\n          outline: none;\n          background: transparent;\n          height: 50px;\n          padding: 0 15px;\n          width: 100%;\n          color: inherit;\n        }\n        textarea {\n          background-color: transparent;\n          border: 1px solid var(--border-color);\n          outline: none;\n          color: inherit;\n          width: 100%;\n          padding: 0.8rem 1rem;\n        }\n      }\n    }\n  }\n"]))),Oe=function(){var n=Object(j.jsx)(me.a,{}),e=Object(j.jsx)(je.a,{}),t=Object(j.jsx)(pe.a,{});return Object(j.jsxs)(Z,{children:[Object(j.jsx)(K,{title:"Contact",span:"Contact"}),Object(j.jsx)(ve,{children:Object(j.jsxs)($,{className:"contact-section",children:[Object(j.jsxs)("div",{className:"left-content",children:[Object(j.jsx)("div",{className:"contact-title",children:Object(j.jsx)("h4",{children:"Get In Touch"})}),Object(j.jsxs)("form",{className:"form",children:[Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Enter your name*"}),Object(j.jsx)("input",{type:"text",id:"name"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Enter your email*"}),Object(j.jsx)("input",{type:"email",id:"email"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"subject",children:"Enter your subject"}),Object(j.jsx)("input",{type:"text",id:"subject"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"text-area",children:"Enter your Message*"}),Object(j.jsx)("textarea",{name:"textarea",id:"textarea",cols:"30",rows:"10"})]}),Object(j.jsx)("div",{className:"form-field f-button",children:Object(j.jsx)(J,{title:"Send Email"})})]})]}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)(ue,{title:"Phone",icon:n,cont1:"+977-9865194453"}),Object(j.jsx)(ue,{title:"Email",icon:e,cont1:"nanu.gautam2016@gmail.com",cont2:"shikshyagautamcsit2073@indrenicollege.edu.np"}),Object(j.jsx)(ue,{title:"Address",icon:t,cont1:"Bharatpur-11, Chitwan",cont2:"Nepal"})]})]})})]})},we=t(136),ye=t.n(we),ke=t(137),Ne=t.n(ke),ze=t(8),Fe=t(416),Se=t(415);var Ae,Ce=m.b.main(fe||(fe=Object(s.a)(["\n  position: relative;\n  margin-left: 16.3rem;\n  min-height: 100vh;\n  @media screen and (max-width: 1200px) {\n    margin-left: 0;\n  }\n  .lines {\n    position: absolute;\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    opacity: 0.4;\n    z-index: -1;\n    .line-1,\n    .line-2,\n    .line-3,\n    .line-4 {\n      width: 1px;\n      min-height: 100vh;\n      background-color: var(--border-color);\n    }\n  }\n"]))),Te=function(){var n=Object(i.useState)("dark-theme"),e=Object(d.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)(!1),a=Object(d.a)(o,2),c=a[0],l=a[1],s=Object(i.useState)(!1),m=Object(d.a)(s,2),b=m[0],h=m[1];return Object(i.useEffect)((function(){document.documentElement.className=t}),[t]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{navToggle:b}),Object(j.jsx)("div",{className:"theme",children:Object(j.jsxs)("div",{className:"light-dark-mode",children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)(ye.a,{})}),Object(j.jsx)("div",{className:"right-content",children:Object(j.jsx)(Fe.a,{value:"",checked:c,inputProps:{"aria-label":""},size:"medium",onClick:function(){"light-theme"===t?(r("dark-theme"),l(!1)):(r("light-theme"),l(!0))}})})]})}),Object(j.jsx)("div",{className:"ham-burger-menu",children:Object(j.jsx)(Se.a,{onClick:function(){return h(!b)},children:Object(j.jsx)(Ne.a,{})})}),Object(j.jsxs)(Ce,{children:[Object(j.jsxs)("div",{className:"lines",children:[Object(j.jsx)("div",{className:"line-1"}),Object(j.jsx)("div",{className:"line-2"}),Object(j.jsx)("div",{className:"line-3"}),Object(j.jsx)("div",{className:"line-4"})]}),Object(j.jsxs)(ze.c,{children:[Object(j.jsx)(ze.a,{path:"/",exact:!0,children:Object(j.jsx)(B,{})}),Object(j.jsx)(ze.a,{path:"/about",exact:!0,children:Object(j.jsx)(un,{})}),Object(j.jsx)(ze.a,{path:"/resume",exact:!0,children:Object(j.jsx)(Ln,{})}),Object(j.jsx)(ze.a,{path:"/portfolios",exact:!0,children:Object(j.jsx)(ee,{})}),Object(j.jsx)(ze.a,{path:"/blogs",exact:!0,children:Object(j.jsx)(se,{})}),Object(j.jsx)(ze.a,{path:"/contact",exact:!0,children:Object(j.jsx)(Oe,{})})]})]})]})},Ee=Object(m.a)(Ae||(Ae=Object(s.a)(["\n/* :root{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n\n} */\n\n.light-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #ff7675;\n    --background-dark-color: #F1F1F1;\n    --background-dark-grey: #e4e4e4;\n    --border-color: #cbced8;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #151515;\n    --font-light-color: #313131;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #E4E4E4;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n.dark-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    text-decoration: none;\n    font-family: 'Nunito', sans-serif;\n    font-size: 1.1rem;\n    \n}\n\nbody{\n    background-color: var(--background-dark-color);\n    color: var(--font-light-color);\n    transition: all .4s ease-in-out;\n}\n\nbody::-webkit-scrollbar{\n    width: 9px;\n    background-color: #383838;\n}\nbody::-webkit-scrollbar-thumb{\n    border-radius: 10px;\n    background-color: #6b6b6b;\n}\nbody::-webkit-scrollbar-track{\n    border-radius: 10px;\n    background-color: #383838;\n}\n\n\na{\n    font-family: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-size: 1rem;\n}\n\nh1{\n    font-size: 4rem;\n    color: var(--white-color);\n    span{\n        font-size: 4rem;\n        @media screen and (max-width: 502px){\n            font-size: 3rem\n        }\n    }\n    @media screen and (max-width: 502px){\n        font-size: 3rem\n    }\n}\n\nspan{\n    color: var(--primary-color);\n}\nh6{\n    color: var(--white-color);\n    font-size: 1.2rem;\n    padding-bottom: .6rem;\n}\n\n//Utilities\n.u-margin-bottom{\n    margin-bottom: 4rem;\n}\n\n\n//Floting Toggler\n.light-dark-mode{\n    position: fixed;\n    right: 0;\n    top: 50%;\n    background-color: var(--background-light-color-2);\n    width: 6.5rem;\n    height: 2.5rem;\n    z-index: 15;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg{\n      display: flex;\n      align-items: center;\n      font-size: 1.7rem;\n      color: var(--white-color);\n    }\n  }\n\n  //Nav Toggler\n  .ham-burger-menu{\n      position: absolute;\n      right: 5%;\n      top: 3%; \n      display: none;\n      z-index: 15;\n      svg{\n          font-size: 3rem;\n      }\n    }\n\n    .nav-toggle{\n        transform: translateX(0);\n        z-index: 20;\n    }\n  @media screen and (max-width:1200px){\n    .ham-burger-menu{\n        display: block;\n    }\n  }\n\n\n//Global Media Queries\n\n\n\n"])));c.a.render(Object(j.jsxs)(o.a.StrictMode,{children:[Object(j.jsx)(Ee,{}),Object(j.jsx)(l.a,{children:Object(j.jsx)(Te,{})})]}),document.getElementById("root"))}},[[394,1,2]]]);
//# sourceMappingURL=main.8ec4a217.chunk.js.map