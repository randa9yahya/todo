(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),c=a.n(r),s=(a(20),a(12)),l=a(7),o=a(8),u=a(2),m=a(14),d=a(13),h=(a(21),a(22),a(9)),p=a(10);function v(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.upDate(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(h.a,{icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return i.a.createElement("div",null,i.a.createElement(p.a,{duration:300,easing:"ease-in-out"},t))}var f=a(4),k=a(11);f.b.add(k.a);var b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isSwitchOn:!1,items:[],currentItem:{text:"",key:""}},n.handleInput=n.handleInput.bind(Object(u.a)(n)),n.addItem=n.addItem.bind(Object(u.a)(n)),n.deleteItem=n.deleteItem.bind(Object(u.a)(n)),n.upDate=n.upDate.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(s.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"upDate",value:function(e,t){var a=this,n=this.state.items;n.map((function(i){i.key===t&&(i.text=e),a.setState({items:n})}))}},{key:"render",value:function(){var e=this,t=this.state.isSwitchOn;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"contact"},i.a.createElement("div",{className:t?"light-mode":"dark-mode"},i.a.createElement("div",null,i.a.createElement("button",{className:"text-black modeBtn",onClick:function(){return e.setState({isSwitchOn:!t})}},t?"D":"N")),i.a.createElement("div",{className:"app"},i.a.createElement("form",{className:"form",onSubmit:this.addItem},i.a.createElement("input",{className:"formIput",type:"text",placeholder:"ADD TASK",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem,upDate:this.upDate}),i.a.createElement("button",{type:"submit"},"Add New"))))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0a0c024a.chunk.js.map