(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(n,e,t){n.exports=t(12)},,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var r=t(0),u=t.n(r),l=t(2),a=t.n(l),c=t(3);t(10);function o(n,e){for(var t=n.length,r=function(n){return n.reduce(function(n,t){return n&&t===e},!0)},u=function(t){if(r(n[t])||r(n.map(function(n){return n[t]})))return{v:e}},l=0;l<t;++l){var a=u(l);if("object"===typeof a)return a.v}var c=[0,1,2].map(function(e){return n[e][e]}),o=[2,1,0].map(function(e,t){return n[e][t]});return r(c)||r(o)?e:n.reduce(function(n,e){return n&&e.reduce(function(n,e){return n&&e},!0)},!0)?"No Player":null}function i(n,e){if("new_game"===e)return{turn:"X",board:[[null,null,null],[null,null,null],[null,null,null]],winner:null};var t=e.i,r=e.j,u=n.board,l=n.turn;return u[t][r]?n:(u[t][r]=l,{board:u,turn:"X"===l?"O":"X",winner:o(u,l)})}t(11);a.a.render(u.a.createElement(function(){var n=Object(r.useReducer)(i,{turn:"X",board:[[null,null,null],[null,null,null],[null,null,null]],winner:null}),e=Object(c.a)(n,2),t=e[0],l=e[1];return window.Game={state:t,dispatch:l},u.a.createElement(u.a.Fragment,null,u.a.createElement("header",null,u.a.createElement("h1",null,"Tic Tac Toe"),u.a.createElement("h3",null,t.winner?"".concat(t.winner," Wins!"):"".concat(t.turn,"'s Turn")),t.winner&&u.a.createElement("button",{onClick:function(){return l("new_game")}},"Play Again")),u.a.createElement("div",{id:"board"},t.board.map(function(n,e){return u.a.createElement("div",{className:"row",key:e+n.join("")},n.map(function(n,r){return u.a.createElement("div",{className:"square",key:"".concat(e).concat(r).concat(n)},u.a.createElement("button",{onClick:function(){return l({i:e,j:r})},disabled:!!t.winner},n))}))})))},null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.af4b1f0a.chunk.js.map