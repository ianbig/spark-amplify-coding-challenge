_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"9f/o":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var r=n("MX0m"),a=n.n(r),c=n("q1tI"),i=n.n(c),o=n("8Kt/"),s=n.n(o),u=n("1OyB"),l=n("vuIU"),f=n("JX7q"),h=n("Ji7U"),p=n("md7G"),g=n("foSv"),m=i.a.createElement;function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(g.a)(e);if(t){var a=Object(g.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var v=function(e){Object(h.a)(n,e);var t=d(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return m("div",{className:""},this.props.number," of ",this.props.type,' "',this.props.title,'" found in ',this.props.year)}}]),n}(i.a.Component),y=n("lnGS"),b=n.n(y),j=i.a.createElement;function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(g.a)(e);if(t){var a=Object(g.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var _=function(e){Object(h.a)(n,e);var t=O(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handleClick=r.handleClick.bind(Object(f.a)(r)),r}return Object(l.a)(n,[{key:"handleClick",value:function(e){var t=e.target.parentNode.getAttribute("id");sessionStorage.setItem("imdbID",t),window.location.href="/movieDetail"}},{key:"addDefaultSrc",value:function(e){e.target.src="../error.jpg"}},{key:"render",value:function(){var e=this,t=this.props.result;t||(window.location.href="/error");var n=t.map((function(t){return j("div",{key:t.imdbID,id:t.imdbID,className:b.a.flex_item,onClick:e.handleClick},j("img",{src:t.Poster,className:b.a.imgprop,onError:e.addDefaultSrc}),j("div",null,t.Title))}));return j("div",{className:b.a.container},j("div",{className:b.a.flex_container},n))}}]),n}(i.a.Component),k=i.a.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(g.a)(e);if(t){var a=Object(g.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var P=function(e){Object(h.a)(n,e);var t=w(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={currentPage:r.props.currentPage},r.goToPage=r.goToPage.bind(Object(f.a)(r)),r.handleKeyUp=r.handleKeyUp.bind(Object(f.a)(r)),r.changePageNum=r.changePageNum.bind(Object(f.a)(r)),r}return Object(l.a)(n,[{key:"goToPage",value:function(e){this.setState({currentPage:e}),this.props.goToPage(e)}},{key:"changePageNum",value:function(e){console.log(e.target.value),this.setState({currentPage:e.target.value})}},{key:"handleKeyUp",value:function(e,t){var n=e.target.value;console.log("value: "+n);var r=e||window.event;13===(r.keyCode||r.which||r.charCode)&&(isNaN(n)?alert("Please input number"):n>t||null===n||""===n.trim()?alert("Please input valid page number"):(window.location.hash="#".concat(n),this.goToPage(parseInt(n,10))))}},{key:"render",value:function(){var e=this,t=Math.ceil(this.props.total/10);return k("div",{className:"jsx-369339817"},k("a",{href:"####",onClick:function(){return e.goToPage(e.state.currentPage-1)},className:"jsx-369339817"}," pre "),k("span",{className:"jsx-369339817"},k("input",{type:"text",onChange:this.changePageNum,onKeyUp:function(n){return e.handleKeyUp(n,t)},className:"jsx-369339817"})," / ",t),k("a",{href:"####",onClick:function(){return e.goToPage(e.state.currentPage+1)},className:"jsx-369339817"}," next "),k(a.a,{id:"369339817"},["input.jsx-369339817{width:2vw;height:2vh;}"]))}}]),n}(i.a.Component),x=n("uve7"),N=i.a.createElement;function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(g.a)(e);if(t){var a=Object(g.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var S=function(e){Object(h.a)(n,e);var t=R(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={numberOfResult:0,title:"",year:"",result:[],type:"",page:1,pageSize:10},r.handleMovClick=r.handleMovClick.bind(Object(f.a)(r)),r}return Object(l.a)(n,[{key:"_OnResponse",value:function(e){return e.json()}},{key:"_OnError",value:function(){window.location.href="/error"}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("url");Object(x.trackPromise)(fetch(t).then(this._OnResponse).then((function(t){e.setState({numberOfResult:t.totalResults,result:t.Search,title:sessionStorage.getItem("title"),year:sessionStorage.getItem("year"),type:sessionStorage.getItem("type")})})).catch(this._OnError))}},{key:"handleMovClick",value:function(e){var t=this,n=sessionStorage.getItem("url");n=n+"&page="+e,fetch(n).then(this._OnResponse).then((function(n){t.setState({result:n.Search,page:e})})).catch(this._OnError)}},{key:"render",value:function(){var e=this;return N("div",null,N("h3",null,"Current page: ",this.state.page),N(v,{number:this.state.numberOfResult,type:this.state.type,title:this.state.title,year:this.state.year}),N(_,{result:this.state.result}),N(P,{currentPage:this.state.page,total:this.state.numberOfResult,goToPage:function(t){return e.handleMovClick(t)}}))}}]),n}(i.a.Component),C=n("jkUL"),D=n.n(C),I=i.a.createElement,E=function(e){return Object(x.usePromiseTracker)().promiseInProgress&&I("div",{style:{width:"100%",height:"100%",display:"flex",justfyContent:"center",alignItems:"center"}},I(D.a,{type:"ThreeDots",color:"#2BAD60",height:"100",width:"100"}))};function T(){return I("div",{className:"jsx-2424701627 container"},I(s.a,null,I("title",{className:"jsx-2424701627"},"OMDB DEMO"),I("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-2424701627"})),I("main",{className:"jsx-2424701627"},I("header",{className:"jsx-2424701627"},I("a",{href:"/",className:"jsx-2424701627"},I("img",{src:"https://i.ibb.co/nMs3GBm/homepage.png",alt:"arrow",border:"0",className:"jsx-2424701627 link"}))),I(E,null),I(S,null),I("footer",{className:"jsx-2424701627"})),I(a.a,{id:"2424701627"},[".link.jsx-2424701627{width:10vw;height:10vh;margin:.3em;-webkit-text-decoration:none;text-decoration:none;color:black;}"]))}},lnGS:function(e,t,n){e.exports={container:"resultImg_container__2Q7H5",flex_container:"resultImg_flex_container__JCqnf",flex_item:"resultImg_flex_item__2pb6G",imgprop:"resultImg_imgprop__2QF2A"}},mLsO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resultPage",function(){return n("9f/o")}])}},[["mLsO",0,1,2]]]);