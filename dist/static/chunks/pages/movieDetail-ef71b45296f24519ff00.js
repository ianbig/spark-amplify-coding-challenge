_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"3jbP":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movieDetail",function(){return n("e+7X")}])},"7zGf":function(e,t,n){e.exports={main:"movie_main__3r2T7",imgprop:"movie_imgprop__zoXN6",container:"movie_container__WiuNi",flex_container_img:"movie_flex_container_img__2oyec",flex_container_img_info:"movie_flex_container_img_info__39PGe",flex_item_head:"movie_flex_item_head__399MS",flex_item_info:"movie_flex_item_info__1lZ2G",flex_item_plot:"movie_flex_item_plot__1aRuU",infoContainer:"movie_infoContainer__3oQPP"}},"e+7X":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n("MX0m"),a=n.n(i),o=n("q1tI"),r=n.n(o),s=n("8Kt/"),c=n.n(s),l=n("1OyB"),m=n("vuIU"),u=n("Ji7U"),_=n("md7G"),f=n("foSv"),p=n("7zGf"),h=n.n(p),d=n("uve7"),v=r.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Object(_.a)(this,n)}}var x=function(e){Object(u.a)(n,e);var t=g(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={plot:"",poster:"",title:"",rating:"",votes:0,genre:"",actors:"",director:"",runtime:""},i}return Object(m.a)(n,[{key:"_OnReady",value:function(e){return e.json()}},{key:"_Error",value:function(){alert("Error in fetching")}},{key:"addDefaultSrc",value:function(e){e.target.src="../error.jpg"}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("imdbID"),n="https://www.omdbapi.com/?plot=full&apikey="+sessionStorage.getItem("APIkey")+"&i="+t;Object(d.trackPromise)(fetch(n).then(this._OnReady).then((function(t){e.setState({plot:t.Plot,poster:t.Poster,title:t.Title,rating:t.imdbRating,votes:t.imdbVotes,genere:t.Genre,actors:t.Actors,director:t.Director,runtime:t.Runtime})})).catch(this._Error))}},{key:"render",value:function(){return v("div",{className:h.a.container},v("div",{className:h.a.infoContainer},v("div",{className:h.a.flex_container_img},v("img",{className:h.a.imgprop,src:this.state.poster,onError:this.addDefaultSrc})),v("div",{className:h.a.flex_container_info},v("div",{className:h.a.flex_item_head},this.state.title),v("div",{className:h.a.flex_item_info},v("span",null,"Rating: ",this.state.rating," "),v("span",null,"IMDB Votes: ",this.state.votes," "),v("span",null,"Genre: ",this.state.genre),v("span",null,"Director: ",this.state.director),v("span",null,"Actors: ",this.state.actors),v("span",null,"Runtime: ",this.state.runtime)))),v("div",{className:h.a.flex_item_plot},v("section",null,this.state.plot)))}}]),n}(r.a.Component),j=n("jkUL"),y=n.n(j),N=r.a.createElement,b=function(e){return Object(d.usePromiseTracker)().promiseInProgress&&N("div",{style:{width:"100%",height:"100%",display:"flex",justfyContent:"center",alignItems:"center"}},N(y.a,{type:"ThreeDots",color:"#2BAD60",height:"100",width:"100"}))};function w(){return N("div",{className:"jsx-655160093 "+(h.a.root||"")},N(c.a,null,N("title",{className:"jsx-655160093"},"OMDB DEMO"),N("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-655160093"})),N("main",{className:"jsx-655160093 "+(h.a.main||"")},N(b,null),N("header",{className:"jsx-655160093"},N("a",{href:"/",className:"jsx-655160093"},N("img",{src:"https://i.ibb.co/nMs3GBm/homepage.png",alt:"loupe",border:"0",className:"jsx-655160093 link"}))),N(x,null),N("footer",{className:"jsx-655160093 "+(h.a.footer||"")},"Copyrighy(c) Example.com. All right reserved.")),N(a.a,{id:"655160093"},[".link.jsx-655160093{width:10vw;height:10vh;margin:.3em;-webkit-text-decoration:none;text-decoration:none;color:black;}"]))}}},[["3jbP",0,1,2]]]);