(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(46)},32:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(23),l=a.n(o),s=(a(32),a(3)),r=a(4),i=a(6),m=a(5),p=a(7),u=a(17),h=(a(21),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=""!==this.props.className?"footer "+this.props.className:"footer animated fadeOutDown";return c.a.createElement("div",{className:e},c.a.createElement("div",{className:"wrap"},c.a.createElement("li",null,c.a.createElement("div",{className:"credit"},c.a.createElement("span",null,"Designed By"),c.a.createElement("img",{src:"./images/Faisal_Ahmed.jpg",align:"Faisal Ahmed"}),c.a.createElement("a",{href:"https://github.com/Faisal50x",target:"_blank"},c.a.createElement("h2",{className:"name"},"Faisal Ahmed"),c.a.createElement("div",{className:"title"},"Software Engineer")))),c.a.createElement("li",null,c.a.createElement("div",{className:"utilities"},c.a.createElement(u.a,{icon:"cog",className:"icon"}),c.a.createElement("span",null,"Settings")),c.a.createElement("div",{className:"utilities"},c.a.createElement(u.a,{icon:"bookmark",className:"icon"}),c.a.createElement("span",null,"Bookmark"))),c.a.createElement("li",null,c.a.createElement("div",{className:"share"},c.a.createElement("img",{src:"./icons/share.png",alt:"share_icon"})))))}}]),t}(n.Component)),d=a(24),g=a.n(d)()(),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={time:g.format("LTS"),day:g.format("dddd"),date:g.format("D, MMMM, YYYY")},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){var t=g.format("LT"),a=g.format("dddd"),n=g.format("D, MMMM, YYYY");e.setState({time:t,day:a,date:n})},1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return c.a.createElement("div",{className:"date_time"},c.a.createElement("span",{className:"time"},this.state.time),c.a.createElement("span",{className:"day"},this.state.day),c.a.createElement("span",{className:"date"},this.state.date))}}]),t}(n.Component),f=a(15),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"social_widget"},c.a.createElement("a",{href:"https://facebook.com",className:"Facebook items"},c.a.createElement("img",{src:"./icons/Facebook.png",alt:"Facebook"})),c.a.createElement("a",{href:"https://google.com.bd",className:"Google items"},c.a.createElement("img",{src:"./icons/google.png",alt:"Google"})),c.a.createElement("a",{href:"https://linkedin.com",className:"Linkedin items"},c.a.createElement("img",{src:"./icons/linkedin.png",alt:"linkedin"})),c.a.createElement("a",{href:"https://youtube.com",className:"Youtube items"},c.a.createElement("img",{src:"./icons/youtube.png",alt:"youtube"})),c.a.createElement("a",{href:"https://www.snapchat.com",className:"SnapChat items"},c.a.createElement("img",{src:"./icons/snapchat.png",alt:"snapchat"})),c.a.createElement("a",{href:"https://www.spotify.com",className:"Spotify items"},c.a.createElement("img",{src:"./icons/social-spotify.png",alt:"spotify"})),c.a.createElement("a",{href:"https://vimeo.com",className:"Vine items"},c.a.createElement("img",{src:"./icons/vimeo.png",alt:"vimeo"})),c.a.createElement("div",{className:"Amazon"},c.a.createElement("a",{href:"https://www.amazon.com",className:"Amazone items"},c.a.createElement("img",{src:"./icons/amazon.png",alt:"Amazon"})),c.a.createElement("a",{href:"https://quora.com",className:"Quora items"},c.a.createElement("img",{src:"./icons/quora.png",alt:"Quora"})),c.a.createElement("a",{href:"https://medium.com",className:"Medium items"},c.a.createElement("img",{src:"./icons/medium.png",alt:"spotify"}))),c.a.createElement("a",{href:"https://www.twitch.tv",className:"twitch items"},c.a.createElement("img",{src:"./icons/twitch.png",alt:"twitch"})))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={icons:["./icons/toogle_icon.png","./icons/home.png","./icons/chat.png","./icons/more.png"],expend:"toogle_wrap",collapse:"expend"},a.collapse=function(){"expend"===a.state.collapse?a.setState({collapse:"expend show animated flipInX",expend:"toogle_wrap hide"}):a.setState({collapse:"expend",expend:"toogle_wrap animated zoomIn"})},a.blank=function(){},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"left_side_widget"},c.a.createElement("div",{className:this.state.expend},this.state.icons.map(function(t,a){var n=a===e.state.icons.length-1?e.props.toogle:e.blank;if(0===a)return c.a.createElement("li",{className:"toogle_icon",key:a,onClick:e.collapse},c.a.createElement("img",{src:t,alt:"icon"}));if(a!==e.state.icons.length-1){var o=1!==a?"/contact":"/homify/";return c.a.createElement(f.b,{to:o},c.a.createElement("li",{key:a,onClick:n},c.a.createElement("img",{src:t,alt:"icon"})))}return c.a.createElement("li",{key:a,onClick:n,className:"more"},c.a.createElement("img",{src:t,alt:"icon"}))})),c.a.createElement("div",{className:this.state.collapse,onClick:this.collapse},c.a.createElement("img",{src:"./icons/expend_more.png",alt:"expend_more"})))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"home_wrap"},c.a.createElement(E,null),c.a.createElement("div",{className:"location"},"Dhaka, Bangladesh "),c.a.createElement(b,null))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Contact coming soon.")}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Page Not Found Thank you.")}}]),t}(n.Component),O=a(14),N=a(16),k=a(11);a(45);O.b.add(N.b,N.a,N.c);var C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={toogleFooterClass:""},a.toogleFooter=function(){var e=""===a.state.toogleFooterClass?"show animated fadeInUp":"";a.setState({toogleFooterClass:e})},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"wrap"},c.a.createElement(k.c,null,c.a.createElement(k.a,{path:"/homify/",component:w,exact:!0}),c.a.createElement(k.a,{path:"/contact",component:y}),c.a.createElement(k.a,{component:j})),c.a.createElement(v,{toogle:this.toogleFooter})),c.a.createElement(h,{className:this.state.toogleFooterClass}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.7bfa10c3.chunk.js.map