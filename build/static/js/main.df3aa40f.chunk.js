(this.webpackJsonptesting_react2=this.webpackJsonptesting_react2||[]).push([[0],{43:function(n,e,t){},69:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),o=t.n(c),a=t(33),i=t.n(a),u=t(12),l=t(5),b=(t(43),t(4)),x=Object(c.createContext)(),d=function(n){var e=Object(c.useState)("white"),t=Object(b.a)(e,2),o=t[0],a=t[1];return Object(r.jsx)(x.Provider,{value:[o,a],children:n.children})},s=Object(c.createContext)(),j=function(n){var e=Object(c.useState)([]),t=Object(b.a)(e,2),o=t[0],a=t[1];return Object(r.jsx)(s.Provider,{value:[o,a],children:n.children})},p=t(2),h=t(3);function f(){var n=Object(p.a)(["\n  background: url(",") no-repeat\n    fixed;\n  color: ",";\n  background-size: cover;\n  min-height: 100%;\n  width: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.4;\n  box-sizing: border-box;\n"]);return f=function(){return n},n}var g=h.a.div(f(),(function(n){return n.currentTheme.backgroundImage}),(function(n){return n.currentTheme.textColor})),O=t.p+"static/media/background.34715a72.jpg",m=t.p+"static/media/background2.5cb5f4d9.jpg",v=t.p+"static/media/main.dd31117f.jpg",k={junk:{togglerTextColor:"grey",togglerTextBackgroundColor:"white",togglerTextColorHover:"white",togglerTextBackgroundColorHover:"grey",backgroundImage:m,mainImage:v,textColor:"grey",textColorOnHover:"black",cardBackgroundColor:"grey"},blade:{togglerTextColor:"lightblue",togglerTextBackgroundColor:"white",togglerTextColorHover:"white",togglerTextBackgroundColorHover:"lightblue",backgroundImage:O,mainImage:v,textColor:"lightblue",textColorOnHover:"palevioletred",cardBackgroundColor:"palevioletred"}},C=Object(c.createContext)(["junk",function(){}]),w=function(n){var e=Object(c.useState)("junk");return Object(r.jsx)(C.Provider,{value:e,children:n.children})};function y(){var n=Object(p.a)(["\n  font-weight: bold;\n"]);return y=function(){return n},n}function T(){var n=Object(p.a)(["\n  font-size: 1em;\n  padding: 7px 10px;\n  border-radius: 10px;\n  border: 1px solid grey;\n  cursor: pointer;\n  height: 75%;\n  align-self: center;\n  color: ",";\n  background: ",";\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n"]);return T=function(){return n},n}var B=h.a.button(T(),(function(n){return n.currentTheme.togglerTextColor}),(function(n){return n.currentTheme.togglerTextBackgroundColor}),(function(n){return n.currentTheme.togglerTextColorHover}),(function(n){return n.currentTheme.togglerTextBackgroundColorHover})),z=h.a.span(y()),H=function(){var n=Object(c.useContext)(C),e=Object(b.a)(n,2),t=e[0],o=e[1],a=Object(c.useContext)(C)[0],i=k[a];return Object(r.jsxs)(B,{onClick:function(){o("junk"===t?"blade":"junk")},currentTheme:i,title:"switch theme",children:["Theme: ",Object(r.jsx)(z,{children:"junk"===t?"Grey":"Blue"})]})};function S(){var n=Object(p.a)(["\n  color: ",";\n  text-decoration: none;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 2em;\n  border-radius: 20px;\n  visibility: ",";\n  &:hover {\n    color: ",";\n  }\n"]);return S=function(){return n},n}function I(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 5px;\n"]);return I=function(){return n},n}function P(){var n=Object(p.a)(["\n  color: ",";\n  font-size: 4em;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  padding-left: 3%;\n"]);return P=function(){return n},n}function N(){var n=Object(p.a)(["\n  text-align: center;\n"]);return N=function(){return n},n}var A=h.a.div(N()),D=h.a.h1(P(),(function(n){return n.currentTheme.textColor})),M=h.a.div(I()),E=Object(h.a)(u.b)(S(),(function(n){return n.currenttheme.textColor}),(function(n){return Object(l.e)().pathname===n.to?"hidden":""}),(function(n){return n.currenttheme.textColorOnHover})),F=function(n){var e=Object(c.useContext)(C)[0],t=k[e];return Object(r.jsxs)(A,{className:"navBar",children:[Object(r.jsx)(D,{currentTheme:t,children:"Reactomon"}),Object(r.jsx)(M,{children:Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(E,{currenttheme:t,to:"/",children:"Main Page"}),Object(r.jsx)(E,{currenttheme:t,to:"/pokemons",children:"Pokemons"}),Object(r.jsx)(E,{currenttheme:t,to:"/types",children:"Types"}),Object(r.jsx)(E,{currenttheme:t,to:"/catched",children:"Catched"}),Object(r.jsx)(E,{currenttheme:t,to:"/#",children:"About"}),Object(r.jsx)(H,{})]})})]})};function G(){var n=Object(p.a)(["\n  font-size: 2em;\n  margin-top: 3%;\n  color: ",";\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  text-align: center;\n"]);return G=function(){return n},n}function J(){var n=Object(p.a)(["\n  margin-top: 3%;\n  font-size: 4em;\n  color: ",";\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  text-align: center;\n"]);return J=function(){return n},n}var _=h.a.h1(J(),(function(n){return n.currentTheme.textColor})),L=h.a.p(G(),(function(n){return n.currentTheme.textColor})),R=function(n){var e=Object(c.useContext)(C)[0],t=k[e];return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{currentTheme:t,children:"This is the Main Page"}),Object(r.jsx)(L,{currentTheme:t,children:"Choose from the links above to navigate to the desired page"})]})},q=t(17);function K(){var n=Object(p.a)(["\n  padding: 3px;\n  border-radius: 10px;\n  font-weight: bold;\n"]);return K=function(){return n},n}function Q(){var n=Object(p.a)(["\n  margin: 1%;\n  font-size: 1em;\n  font-weight: bold;\n  color: white;\n  text-decoration: none;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  text-align: center;\n  &:hover {\n    color: palevioletred;\n  }\n"]);return Q=function(){return n},n}function U(){var n=Object(p.a)(["\n  font-size: 1em;\n  margin: 1%;\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  text-align: center;\n"]);return U=function(){return n},n}function V(){var n=Object(p.a)(["\n  font-family: arial;\n  /* display: inline-block; */\n  border: solid black 2px;\n  border-radius: 20px;\n  height: 100px;\n  width: 175px;\n  text-align: center;\n  margin: 5px 0;\n  padding: 10px;\n  background-color: ",";\n  opacity: 0.9;\n  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.4);\n  transition: 0.3s;\n  &:hover {\n    box-shadow: 16px 16px 32px 0 rgba(0, 0, 0, 0.9);\n  }\n"]);return V=function(){return n},n}var W=h.a.div(V(),(function(n){return n.currentTheme.cardBackgroundColor})),X=h.a.p(U()),Y=Object(h.a)(u.b)(Q()),Z=h.a.button(K()),$=function(n){var e=n.pokemon,t=e.name,a=e.url.match("/[0-9]+/").toString().replaceAll("/",""),i=Object(c.useState)("Catch"),u=Object(b.a)(i,2),l=u[0],x=u[1],d=Object(c.useContext)(s),j=Object(b.a)(d,2),p=j[0],h=j[1],f=Object(c.useContext)(C)[0],g=k[f];return Object(r.jsx)(W,{currentTheme:g,children:Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsxs)(X,{children:["Name: ",t]}),Object(r.jsx)(X,{children:Object(r.jsx)(Y,{to:"/pokemon/".concat(a),children:"Details"})}),n.button?Object(r.jsx)(Z,{onClick:function(){p.filter((function(e){return e.name===n.pokemon.name})).length<1?(h((function(e){return[].concat(Object(q.a)(e),[n.pokemon])})),x("Catched")):x("Already catched!")},children:l}):""]})})},nn=t(37),en=t.n(nn),tn=function(n){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),r=t[0],o=t[1],a=Object(c.useState)([]),i=Object(b.a)(a,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){var e=!0;return en.a.get(n).then((function(n){e&&l(n.data)})).then((function(){u!==[]&&o(!1)})),function(){return e=!1}}),[n,u]),[r,u]};function rn(){var n=Object(p.a)(["\n  display: inline-flex;\n  margin: 1% 2.5%;\n"]);return rn=function(){return n},n}var cn=h.a.div(rn()),on=function(n){var e=tn("https://pokeapi.co/api/v2/pokemon"),t=Object(b.a)(e,2),o=t[0],a=t[1];Object(c.useContext)(C)[0];return o?Object(r.jsx)("div",{className:"detailItem",children:Object(r.jsx)("p",{children:"Problem occurred during loading!"})}):a.results.map((function(n,e){return Object(r.jsx)(cn,{children:Object(r.jsx)($,{pokemon:n,button:!0})},e)}))};function an(){var n=Object(p.a)(["\n  color: ",";\n"]);return an=function(){return n},n}function un(){var n=Object(p.a)(["\n  margin: 1%;\n  font-size: 1em;\n  font-weight: bold;\n  color: white;\n  text-decoration: none;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  text-align: center;\n  &:hover {\n    color: ",";\n  }\n"]);return un=function(){return n},n}function ln(){var n=Object(p.a)(["\n  font-size: 1em;\n  margin: 1%;\n  color: white;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  text-align: center;\n"]);return ln=function(){return n},n}function bn(){var n=Object(p.a)(["\n  font-family: arial;\n  border: solid black 1px;\n  border-radius: 15px;\n  height: 80px;\n  width: 250px;\n  text-align: center;\n  margin: 5px 0;\n  background-color: ",";\n  opacity: 0.9;\n  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.4);\n  transition: 0.3s;\n  &:hover {\n    box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.9);\n  }\n"]);return bn=function(){return n},n}var xn=h.a.div(bn(),(function(n){return n.currentTheme.cardBackgroundColor})),dn=h.a.p(ln()),sn=h.a.a(un(),(function(n){return n.index%3===0?"blue":n.index%3===1?"orange":"red"})),jn=h.a.span(an(),(function(n){return n.index%3===0?"cyan":n.index%3===1?"yellow":"pink"})),pn=function(n){var e=n.type,t=e.name,o=e.url,a=Object(c.useContext)(C)[0],i=k[a];return Object(r.jsxs)(xn,{currentTheme:i,children:[Object(r.jsxs)(dn,{name:t,children:["Type name:"," ",Object(r.jsx)(jn,{index:n.index,name:t,children:t})," "]}),Object(r.jsxs)(dn,{children:["Original detail:"," ",Object(r.jsx)(sn,{index:n.index,href:o,children:"Go to page"})]})]})};function hn(){var n=Object(p.a)(["\n  display: inline-flex;\n  margin: 1% 2%;\n"]);return hn=function(){return n},n}var fn=h.a.div(hn()),gn=function(n){var e=tn("https://pokeapi.co/api/v2/type"),t=Object(b.a)(e,2),o=t[0],a=t[1];Object(c.useContext)(C)[0];return o?Object(r.jsx)("div",{className:"detailItem",children:Object(r.jsx)("p",{children:"Problem occurred during loading!"})}):a.results.map((function(n,e){return Object(r.jsx)(fn,{children:Object(r.jsx)(pn,{type:n,index:e})},e)}))};function On(){var n=Object(p.a)(["\n  color: ",";\n  font-weight: bold;\n"]);return On=function(){return n},n}function mn(){var n=Object(p.a)(["\n  font-size: 1.2em;\n  margin: 2%;\n  color: ",";\n  transition: 1s;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n  text-align: center;\n"]);return mn=function(){return n},n}var vn=h.a.p(mn(),(function(n){return n.color})),kn=h.a.span(On(),(function(n){return n.color})),Cn=function(n){var e=Object(c.useContext)(x)[0];Object(c.useContext)(C)[0];return Object(r.jsx)("div",{className:"simpleData",children:Object(r.jsxs)(vn,{color:e,children:[Object(r.jsx)(kn,{color:e,children:n.attribute+": "}),n.simpleData.toString()]})})};function wn(){var n=Object(p.a)(["\n  padding: 3px;\n  border-radius: 10px;\n  font-weight: bold;\n"]);return wn=function(){return n},n}function yn(){var n=Object(p.a)(["\n  font-family: arial;\n  /* display: inline-block; */\n  border: solid black 2px;\n  border-radius: 20px;\n  height: 375px;\n  width: 500px;\n  text-align: center;\n  margin: 15px 0;\n  padding: 10px;\n  background-color: ",";\n  opacity: 0.9;\n  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.4);\n  transition: 0.3s;\n  &:hover {\n    box-shadow: 16px 16px 32px 0 rgba(0, 0, 0, 0.9);\n    background-color: white;\n    transition: 1s;\n  }\n"]);return yn=function(){return n},n}function Tn(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Tn=function(){return n},n}var Bn=h.a.div(Tn()),zn=h.a.div(yn(),(function(n){return n.currentTheme.cardBackgroundColor})),Hn=h.a.button(wn()),Sn=function(n){var e=Object(c.useState)(null),t=Object(b.a)(e,2),a=t[0],i=t[1];null===a&&i(n.match.params.id);var u="https://pokeapi.co/api/v2/pokemon/".concat(a),l=tn(u),d=Object(b.a)(l,2),j=d[0],p=d[1],h=Object(c.useContext)(x)[1],f=Object(c.useState)("Catch"),g=Object(b.a)(f,2),O=g[0],m=g[1],v=Object(c.useContext)(s),w=Object(b.a)(v,2),y=w[0],T=w[1],B=Object(c.useContext)(C)[0],z=k[B];return j?Object(r.jsx)("div",{className:"detailItem",children:Object(r.jsx)("p",{children:"Problem occurred during loading!"})}):Object(r.jsx)(Bn,{children:Object(r.jsx)(o.a.Fragment,{children:Object(r.jsxs)(zn,{currentTheme:z,onMouseEnter:function(){h((function(n){return"rgba(255, 115, 110, 0.9)"}))},onMouseLeave:function(){h((function(n){return"white"}))},children:[Object.entries(p).map((function(n,e){var t=Object(b.a)(n,2),c=t[0],o=t[1];return"number"===typeof o||"string"===typeof o||"boolean"===typeof o?Object(r.jsx)(Cn,{attribute:c,simpleData:o},c):""})),Object(r.jsx)(Hn,{onClick:function(){y.filter((function(n){return n.name===p.name})).length<1?(T((function(n){return[].concat(Object(q.a)(n),[{name:p.name,url:u+"/"}])})),m("Catched")):m("Already catched!")},children:O})]},a)})})};function In(){var n=Object(p.a)(["\n  display: inline-flex;\n  margin: 1% 2.5%;\n"]);return In=function(){return n},n}var Pn=h.a.div(In()),Nn=function(n){var e=Object(c.useContext)(s)[0];Object(c.useContext)(C)[0];return e.map((function(n,e){return Object(r.jsx)(Pn,{children:Object(r.jsx)($,{pokemon:n,button:!1})},e)}))},An=function(n){var e=Object(c.useContext)(C)[0],t=k[e];return Object(r.jsx)(w,{children:Object(r.jsx)(d,{children:Object(r.jsx)(j,{children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(g,{currentTheme:t,children:[Object(r.jsx)(F,{}),Object(r.jsx)(l.a,{exact:!0,path:"/",component:R}),Object(r.jsx)(l.a,{path:"/pokemons",component:on}),Object(r.jsx)(l.a,{path:"/types",component:gn}),Object(r.jsx)(l.a,{path:"/pokemon/:id",component:Sn}),Object(r.jsx)(l.a,{path:"/catched",component:Nn})]})})})})})};i.a.render(Object(r.jsx)(An,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.df3aa40f.chunk.js.map