webpackJsonp([1],{"/7OC":function(t,e){},"023F":function(t,e){},"1o5q":function(t,e){},"2Tuf":function(t,e){},"4diO":function(t,e){},"87B8":function(t,e){},"9n10":function(t,e){},"9yVE":function(t,e){},JRKE:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("qidV")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n    \t"+this._s(this.city)+"\n    \t"),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    \t旅游信息/酒店/景点\n\t")])}]};var h=i("VU/8")(d,u,!1,function(t){i("xo64")},"data-v-025a04a8",null).exports,p={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("VU/8")(p,m,!1,function(t){i("kwTf")},"data-v-8ed5c7ec",null).exports,f={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},[i("div",{staticClass:"icons"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var y=i("VU/8")(f,_,!1,function(t){i("vGmy")},"data-v-b16c063c",null).exports,C={name:"HomeRecommend",props:{list:Array}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("ul",t._l(t.list,function(e,s){return i("router-link",{key:s,staticClass:"item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    热门推荐\n  ")])}]};var w=i("VU/8")(C,g,!1,function(t){i("2Tuf")},"data-v-6372ef99",null).exports,b={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("\n    周末去哪儿玩~~\n  ")]),t._v(" "),i("ul",t._l(t.list,function(e,s){return i("li",{key:s,staticClass:"item"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("O1N+")},"data-v-4c58855a",null).exports,$=i("mtWM"),S=i.n($),E={name:"Home",components:{HomeHeader:h,HomeSwiper:v,HomeIcons:y,HomeRecommend:w,HomeWeekend:x},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){S.a.get("https://easy-mock.com/mock/5cd2cc415110c02a69f7b506/goEverywhere-show/index.json/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!=this.city&&(this.lastCity=this.city,this.getHomeInfo())}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var I=i("VU/8")(E,L,!1,function(t){i("mtpe")},null,null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])])],1)},staticRenderFns:[]};var N=i("VU/8")({name:"CityHeader"},T,!1,function(t){i("JRKE")},"data-v-1cd62792",null).exports,O=i("GQaK"),A={name:"CitySearch",props:{cities:Object},data:function(){return{keyWord:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{keyWord:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){-1==i.spell.indexOf(t.keyWord)&&-1==i.name.indexOf(t.keyWord)||e.push(i.name)});t.list=e},100)}},mounted:function(){this.scroll=new O.a(this.$refs.search)}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市城市名或拼音"},domProps:{value:t.keyWord},on:{input:function(e){e.target.composing||(t.keyWord=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyWord,expression:"keyWord"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e)}}},[t._v(t._s(e))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有搜索到该数据")])],2)])])},staticRenderFns:[]};var H=i("VU/8")(A,F,!1,function(t){i("4diO")},"data-v-21ee4075",null).exports,R={name:"CityList",props:{cities:Object,hot:Array,letter:String},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},computed:c()({},Object(l.c)(["city"])),methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new O.a(this.$refs.wrapper,{click:!0})}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e,s){return i("div",{key:s,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n      "+t._s(e.name)+"\n      ")])}),0)])})],2)])},staticRenderFns:[]};var V=i("VU/8")(R,U,!1,function(t){i("/7OC")},"data-v-7d57db32",null).exports,j={name:"CityAlphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},20))},handleTouchEnd:function(){this.touchStatus=!1}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var G={name:"City",components:{CityHeader:N,CitySearch:H,CityList:V,CityAlphabet:i("VU/8")(j,D,!1,function(t){i("TA2N")},"data-v-62b399d8",null).exports},data:function(){return{hot:[],cities:{},letter:""}},methods:{getCityInfo:function(){S.a.get("https://easy-mock.com/mock/5cd2cc415110c02a69f7b506/goEverywhere-show/city.json/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.hot=e.hotCities,this.cities=e.cities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hot,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var M=i("VU/8")(G,W,!1,function(t){i("023F")},"data-v-7cb75684",null).exports,B={name:"CommonGallary",data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},props:{gallaryImgs:{type:Array,default:function(){return[]}}},methods:{handleGallaryClose:function(){this.$emit("close")}}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClose}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.gallaryImgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var z={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var P={name:"DetailBanner",components:{CommonGallary:i("VU/8")(B,q,!1,function(t){i("manc")},"data-v-7e836094",null).exports,fadeAnimation:i("VU/8")({name:"fadeAnimation"},z,!1,function(t){i("o9Sz")},"data-v-c0de80ee",null).exports},props:{bannerImg:String,gallaryImgs:Array,sightName:String},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),t._m(0)])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{gallaryImgs:t.gallaryImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n      19\n    ")])}]};var J=i("VU/8")(P,Y,!1,function(t){i("1o5q")},"data-v-3d3406d0",null).exports,K={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScorollTop:function(){var t=document.body.scrollTop||document.documentElement.scrollTop;if(t>50){var e=t/140;this.opacityStyle.opacity=e>140?1:e,this.showAbs=!1}else this.showAbs=!0}},created:function(){window.addEventListener("scroll",this.handleScorollTop)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScorollTop)}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[this._v("\n    景点详情\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])])])],1)],1)},staticRenderFns:[]};var X=i("VU/8")(K,Q,!1,function(t){i("9yVE")},"data-v-ce6d8a3c",null).exports,Z={name:"DetailList",props:{categoryList:Array}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.categoryList,function(e,s){return i("div",{key:s,staticClass:"item border-bottom"},[i("div",{staticClass:"item-title"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",[i("detail-list",{attrs:{categoryList:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var et={name:"Detail",components:{DetailBanner:J,DetailHeader:X,DetailList:i("VU/8")(Z,tt,!1,function(t){i("jisn")},"data-v-89818e4a",null).exports},data:function(){return{bannerImg:"",categoryList:[],gallaryImgs:[],sightName:""}},methods:{getDtailInfo:function(){S.a.get("https://easy-mock.com/mock/5cd2cc415110c02a69f7b506/goEverywhere-show/detail.json/detail.json",{params:{id:this.$route.params.id}}).then(this.getDtailInfoSucc)},getDtailInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.bannerImg=e.bannerImg,this.categoryList=e.categoryList,this.gallaryImgs=e.gallaryImgs,this.sightName=e.sightName}}},mounted:function(){this.getDtailInfo()}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-header"),this._v(" "),e("detail-banner",{attrs:{bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs,sightName:this.sightName}}),this._v(" "),e("div",{staticClass:"scroll-bottom"},[e("detail-list",{attrs:{categoryList:this.categoryList}})],1)],1)},staticRenderFns:[]};var st=i("VU/8")(et,it,!1,function(t){i("87B8")},"data-v-642c8b40",null).exports;s.a.use(r.a);var nt=new r.a({routes:[{path:"/",name:"Home",component:I},{path:"/city",name:"City",component:M},{path:"/detail/:id",name:"Detail",component:st}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),at=i("v5o6"),rt=i.n(at),ot=i("F3EI"),ct=i.n(ot),lt=(i("j1ja"),"重庆");try{localStorage.city&&(lt=localStorage.city)}catch(t){}var dt={city:lt},ut={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var ht=new l.a.Store({state:dt,actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:ut});i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,rt.a.attach(document.body),s.a.use(ct.a),new s.a({el:"#app",router:nt,store:ht,components:{App:a},template:"<App/>"})},"O1N+":function(t,e){},TA2N:function(t,e){},TzC8:function(t,e){},jisn:function(t,e){},kwTf:function(t,e){},manc:function(t,e){},mtpe:function(t,e){},o9Sz:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},qidV:function(t,e){},v2ns:function(t,e){},vGmy:function(t,e){},xo64:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.90a1af56ef551d020e06.js.map