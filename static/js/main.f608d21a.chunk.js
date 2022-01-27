(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},22:function(e,a,t){e.exports=t(37)},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),r=t.n(c),s=t(16),i=(t(27),t(2)),m=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],E=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,s=m.includes(c)?c:m[0],E=o.includes(r)?r:o[0];return l.a.createElement(i.b,{to:"/Contact",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(E),onClick:n,type:t},a))};t(33);var u=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),m=Object(s.a)(r,2),o=m[0],u=m[1],g=function(){return c(!1)},p=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:g},l.a.createElement("i",{class:"fas fa-bolt"}),"B"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-links",onClick:g},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/Skills",className:"nav-links",onClick:g},"Skills")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/Experience",className:"nav-links",onClick:g},"Experience")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/Contact",className:"nav-links-mobile",onClick:g},"Contact"))),o&&l.a.createElement(E,{buttonStyle:"btn--outline"},"CONTACT ME"))))};t(11),t(12);var g=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__container"},l.a.createElement("div",{className:"cards__item__infotext"},l.a.createElement("h5",{className:"cards__item__text"},e.text),l.a.createElement("br",null),l.a.createElement(i.b,{className:"cards__item__link",to:e.path},l.a.createElement("div",{className:"btn--primary"},"See Projects ",l.a.createElement("i",{className:"far fa-play-circle"}))),l.a.createElement("br",null),l.a.createElement("h5",{className:"cards__item__text"},e.text1))))};var p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement("a",{className:"cards__item__link",href:e.path,title:"Instagram"},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"",src:e.src})),l.a.createElement("div",{className:"cards__item__infotext"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var d=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"About Me"),l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement("div",{className:"cards__portrait"},l.a.createElement("div",{className:"cards__portrait"},l.a.createElement("img",{src:"images/goodlookin.jpg",alt:""}))),l.a.createElement(g,{text:"As someone who has been coding since the age of 14, I consider myself an experienced programmer. I\u2019ve done a variety of projects in different fields in Computer Science, my most notable ones are the Note taking android app(Checkmate) and an interactive web book website. \r What I can bring to the table is a deep understanding in Object Oriented Programming,HTML/CSS,  javascript, typescript, MongoDB and Firebase. \r I also have experience in python, R, and the agile development workflow from my past internships and courses at Boston University.",path:"/experience",text1:"I am a fast learner, especially when I come to develop a passion for the subject. My favorite method of learning is pair programming as we can not only share and exchange our knowledge but also create a sense of understanding and comradeship. \r One of my strengths is having the ability to recognize who is best at doing what while working in a team environment and I often use that intuition to maximize efficiency and productivity."}))),l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"My Hobbies"),l.a.createElement("br",null),l.a.createElement("div",{className:"cards__container"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(p,{src:"images/ski1.png",text:"From basketball to skiing, theres no sport that I would elude from competing in.",label:"Sports",path:"https://www.instagram.com/kevinguo76/"}),l.a.createElement(p,{src:"images/aerial.png",text:"I can do both portrait and aerial photography, contact me if you want to do a photoshoot!",label:"Photography",path:"https://www.instagram.com/kevinguo76/"}),l.a.createElement(p,{src:"images/webdesign.png",text:"If you would like me to help you design your website, contact me, I give friends discounts!",label:"Web Design",path:"https://www.instagram.com/kevinguo76/"})))))};t(34);var h=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-2.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"Kevin Guo"),l.a.createElement("p",null,"Software Engineer, Web Developer and Student"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(E,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"Contact ",l.a.createElement("i",{className:"far fa-play-circle"}))))};t(35);var b=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{className:"input-areas"},l.a.createElement("div",{className:"footer-subscription"},l.a.createElement("h2",null,"Want to do a Photoshoot? Send your insta link and I'll get back to you!"),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Insta URL"}),l.a.createElement(E,{buttonStyle:"btn--outline"},"Send")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement("a",{href:"https://www.instagram.com/itskevinguo/",title:"Instagram"},"Instagram"),l.a.createElement("a",{href:"https://mkorostoff.github.io/1-pixel-wealth/?fbclid=IwAR3RTNt6OVmcrzYKjqOPzaYB0bpQPH_8hUtmeGjJ4rTWj6uhLCd1hOzC6pE",title:"Pixel Wealth"}," Pixel Wealth"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},l.a.createElement("i",{class:"fas fa-bolt"}),"B")),l.a.createElement("small",{class:"website-rights"},"Kevin Guo \xa9 2022"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(i.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(d,null),l.a.createElement(b,null))},f=t(3),_=t(1);var k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"icons__item"},l.a.createElement("a",{className:"cards__item__link",href:e.path,title:e.path},l.a.createElement("img",{className:"cards__item__icon",alt:"",src:e.src}),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h1",{className:"cards__item__largetext"},e.text)))))},w=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement(_.a,{className:"category-title"},l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Title,{className:"card-title"},"Programming Languages"),l.a.createElement("hr",null),l.a.createElement(_.a.Text,{className:"card-text"},l.a.createElement(k,{src:"images/skills/java.svg",text:"Java",path:"https://en.wikipedia.org/wiki/Java_(programming_language)"}),l.a.createElement(k,{src:"images/skills/python.svg",text:"Python",path:"https://www.python.org/"}),l.a.createElement(k,{src:"images/skills/R.png",text:"R",path:"https://www.rstudio.com/"}),l.a.createElement(k,{src:"images/skills/typescript.svg",text:"Typescript",path:"https://www.typescriptlang.org/"}),l.a.createElement(k,{src:"images/skills/javascript.svg",text:"Javascript",path:"https://www.javascript.com/"})))),l.a.createElement(_.a,{className:"category-title"},l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Title,{className:"card-title"},"Frontend"),l.a.createElement("hr",null),l.a.createElement(_.a.Text,{className:"card-text"},l.a.createElement(k,{src:"images/skills/html-5.svg",text:"HTML5",path:"https://en.wikipedia.org/wiki/HTML5"}),l.a.createElement(k,{src:"images/skills/css3.svg",text:"CSS3",path:"https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1"}),l.a.createElement(k,{src:"images/skills/react.svg",text:"React JS",path:"https://reactjs.org/"}),l.a.createElement(k,{src:"images/skills/material-ui-1.svg",text:"Material-UI",path:"https://material-ui.com/"}),l.a.createElement(k,{src:"images/skills/bootstrap-4.svg",text:"Bootstrap",path:"https://getbootstrap.com/"})))),l.a.createElement(_.a,{className:"category-title"},l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Title,{className:"card-title"},"Backend"),l.a.createElement("hr",null),l.a.createElement(_.a.Text,{className:"card-text"},l.a.createElement(k,{src:"images/skills/nodejs.svg",text:"Node JS",path:"https://nodejs.org/en/"}),l.a.createElement(k,{src:"images/skills/Django.svg",text:"Django",path:"https://www.djangoproject.com/"}),l.a.createElement(k,{src:"images/skills/Springboot.png",text:"Springboot",path:"https://spring.io/"})))),l.a.createElement(_.a,{className:"category-title"},l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Title,{className:"card-title"},"Databases"),l.a.createElement("hr",null),l.a.createElement(_.a.Text,{className:"card-text"},l.a.createElement(k,{src:"images/skills/mongodb.svg",text:"Mongo DB",path:"https://www.mongodb.com/"}),l.a.createElement(k,{src:"images/skills/postgresql.svg",text:"Postgresql",path:"https://www.postgresql.org/"}),l.a.createElement(k,{src:"images/skills/firebasefull.png",text:"Firebase",path:"https://firebase.google.com/"})))),l.a.createElement(_.a,{className:"category-title"},l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Title,{className:"card-title"},"Hosting Platforms"),l.a.createElement("hr",null),l.a.createElement(_.a.Text,{className:"card-text"},l.a.createElement(k,{src:"images/skills/heroku.svg",text:"Heroku",path:"https://www.heroku.com/"}),l.a.createElement(k,{src:"images/skills/github.svg",text:"Github Pages",path:"https://pages.github.com/"})))))};function N(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"services"}),l.a.createElement(w,null),l.a.createElement(b,null))}var x=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement("a",{className:"cards__item__link",href:e.path,title:"Instagram"},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__project",alt:"",src:e.src})),l.a.createElement("div",{className:"cards__item__infotext"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var y=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement(_.a,{className:"category-title"},l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Title,{className:"card-title"},"Projects"),l.a.createElement("hr",null),l.a.createElement(_.a.Text,{className:"card-text"},l.a.createElement("div",{className:"cards__container"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(x,{src:"images/checkmate_logo.png",text:"Checkmate - a Note taking android app",label:"Checkmate",path:"https://www.youtube.com/watch?v=zKhZutb--Yc"}),l.a.createElement(x,{src:"images/fractalist.png",text:"Fractalist - Generate unique fractals with spotify playlists",label:"Fractalist",path:"https://quence-dev.github.io/fractalist/index.html"}),l.a.createElement(x,{src:"images/melspec.png",text:"Social Sentiment Project - using machine learning to analyze sentiment in audio clips",label:"Social Sentiment Project",path:"https://github.com/ksapru/BU-SocialSentiment583"}),l.a.createElement(x,{src:"images/beahero.png",text:"Be a Hero - a choose your own adventure book website",label:"Be a Hero",path:"https://kmi.eshuwu.net/"})))))))};function S(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"experience"},"Experience"),l.a.createElement(y,null),l.a.createElement(b,null))}var j=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("div",{className:"cards__portrait"},l.a.createElement("img",{src:"images/goodlookin.jpg",alt:""}),l.a.createElement("br",null),l.a.createElement(_.a,{className:"category-title"},l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Title,{className:"card-title"},"Contact Info: (I will most likely respond to emails)"),l.a.createElement("hr",null),l.a.createElement(_.a.Text,{className:"card-text"},l.a.createElement(k,{src:"images/insta.png",text:"kevinguo76",path:"https://www.instagram.com/itskevinguo/"}),l.a.createElement(k,{src:"images/gmaillogo.png",text:"kg76@bu.edu",path:"gmail.com"}),l.a.createElement(k,{src:"images/linkedin.png",text:"",path:"https://www.linkedin.com/in/kevin-guo-a24123196/"})))))))};function C(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement(b,null))}var I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(u,null),l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0,component:v}),l.a.createElement(f.a,{path:"/Skills",component:N}),l.a.createElement(f.a,{path:"/Experience",component:S}),l.a.createElement(f.a,{path:"/Contact",component:C}))))};r.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f608d21a.chunk.js.map