(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,c,t){},16:function(e,c,t){},17:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),o=t(3),a=t.n(o),s=(t(15),t(4)),l=t(5),i=t(7),p=t(6),m=t(8),u=(t(16),t(1)),d=function(e){var c=Object(n.useState)(),t=Object(u.a)(c,2),o=t[0],a=t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"align-middle h-100"},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Player One"),r.a.createElement("h5",{className:"text-center text-danger mt-3"},o)),r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement("button",{className:" ml-2 btn-primary",onClick:function(e){e.sciccor1=!1,e.paper1=!1,e.rock1=!0,e.rock1&&(a("You Selected Rock"),console.log("checking the rock by clicking it"))}},"Rock"),r.a.createElement("button",{className:" ml-2 btn-primary",onClick:function(e){e.rock1=!1,e.paper1=!1,e.sciccor1=!0,e.sciccor1&&(a("You Selected Sciccor"),console.log("checking the sciccor by clicking it"))}},"Scissor"),r.a.createElement("button",{className:" ml-2 btn-primary",onClick:function(e){e.sciccor1=!1,e.rock1=!1,e.paper1=!0,e.paper1&&(a("You Selected Paper"),console.log("checking the paper by clicking it"))}},"Paper"))))},k=function(e){var c=Object(n.useState)(),t=Object(u.a)(c,2),o=t[0],a=t[1],s=Object(n.useState)(),l=Object(u.a)(s,2),i=l[0],p=l[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center text-success mb-3 mt-3"},i),r.a.createElement("h1",{className:"text-center"},"Player Two"),r.a.createElement("h5",{className:"text-center text-danger mt-3"},o)),r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement("button",{className:"ml-2 btn-primary",onClick:function(e){e.sciccor2=!1,e.paper2=!1,e.rock2=!0,e.rock2&&e.rock1?(console.log("first person Select Rock and Second Also Select Rock then it will be tie "),p("IT's Tie"),a("You Selected Rock")):e.rock2&&e.sciccor1?(a("You Selected Rock"),p("Player Two Win"),console.log("If first person select Scissor and second person select Rock then Rock will win")):e.rock2&&e.paper1?(a("You Selected Rock"),p("Player One Win"),console.log("If first person select Paper and second person select Rock then Paper will win")):alert("Its Player One Turn")}},"Rock"),r.a.createElement("button",{className:" ml-2 btn-primary",onClick:function(e){e.rock2=!1,e.paper2=!1,e.sciccor2=!0,e.sciccor2&&e.sciccor1?(a("You Selected Scissor"),p("IT's Tie"),console.log("If first person select Sciccor and second person select Sciccor as well then It is TIE")):e.sciccor2&&e.rock1?(a("You Selected Scissor"),p("Player One Win"),console.log("If first person select rock and second person select Sciccor then it is rock wins")):e.sciccor2&&e.paper1?(a("You Selected Scissor"),p("Player Two Win"),console.log("If first person select paper and second person select Sciccor then Sciccor Wins")):alert("Its Player One Turn")}},"Sciccor"),r.a.createElement("button",{className:"ml-2 btn-primary",onClick:function(e){e.rock2=!1,e.sciccor2=!1,e.paper2=!0,e.paper2&&e.rock1?(a("You Selected Paper"),p("Player Two Win"),console.log("if second person selects the paper and first person select the rock then paper win")):e.paper2&&e.sciccor1?(a("You Selected Paper"),p("Player One Win"),console.log("if second person selects the paper and first person select the sciccor then sciccor win")):e.paper2&&e.paper1?(a("You Selected Paper"),p("IT's Tie"),console.log("if second person selects the paper and first person also select paper then its TIE")):alert("Its Player One Turn")}},"Paper")))},h=function(e){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"mt-5 btn-primary",onClick:e.onclick},"New Game"))},f=function(e){function c(){var e;return Object(s.a)(this,c),(e=Object(i.a)(this,Object(p.a)(c).call(this))).starting=function(){return{rock1:!1,sciccor1:!1,paper1:!1,rock2:!1,sciccor2:!1,paper2:!1}},e.NewgameHandler=function(){window.location.reload(!0)},e.state=e.starting(),e}return Object(m.a)(c,e),Object(l.a)(c,[{key:"render",value:function(){return r.a.createElement("div",{className:"container central"},r.a.createElement(h,{onclick:this.NewgameHandler}),r.a.createElement(d,{rock1:this.state.rock1,sciccor1:this.state.sciccor1,paper1:this.state.paper1}),r.a.createElement(k,{rock2:this.state.rock2,sciccor2:this.state.sciccor2,paper2:this.state.paper2}))}}]),c}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,c,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.d225bee2.chunk.js.map