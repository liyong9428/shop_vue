webpackJsonp([1],{"/ccY":function(a,t){},"97dx":function(a,t){},Civf:function(a,t){},JsOw:function(a,t){},NAlg:function(a,t){},NHnr:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("3Lne");var s=e("SSsa"),n=(e("ZuV/"),e("37Xn")),i=(e("JRZP"),e("LK01")),r=(e("3AsM"),e("7ZPY")),c=(e("zP7x"),e("rD0v")),o=(e("k3b4"),e("+2ln")),v=(e("qVvv"),e("8aUD")),l=(e("RgoE"),e("0KWt")),u=(e("1E9F"),e("2Ux5")),d=e("7+uW"),m={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("van-tabbar",{attrs:{"active-color":"#d22d7c"},model:{value:a.active,callback:function(t){a.active=t},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"wap-home",to:"/"}},[a._v("首页")]),a._v(" "),e("van-tabbar-item",{attrs:{icon:"bars",to:"/class"}},[a._v("分类")]),a._v(" "),e("van-tabbar-item",{attrs:{icon:"cart",to:"/cart"}},[a._v("购物车")]),a._v(" "),e("van-tabbar-item",{attrs:{icon:"manager",to:"/person"}},[a._v("我的")])],1)},staticRenderFns:[]};var p={components:{Tabbar:e("VU/8")({data:function(){return{active:0}}},m,!1,function(a){e("gygq")},"data-v-892b775c",null).exports}},_={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("Tabbar")],1)},staticRenderFns:[]};var b=e("VU/8")(p,_,!1,function(a){e("/ccY")},null,null).exports,g=e("NYxO");d.a.use(g.a);var f=new g.a.Store({state:{msg:"msg675767"}}),w=e("/ocq"),y=(e("mgS3"),e("mtWM")),h=e.n(y),C=e("7QTg"),x={data:function(){return{banner:[],category:[],adverte:"",recommend:[]}},created:function(){var a=this;h.a.get("https://www.easy-mock.com/mock/5c9726dad1eeba73b8527408/shop/shop",{}).then(function(t){200==t.status&&(console.log(t.data),a.banner=t.data.data.slides,a.category=t.data.data.category,a.adverte=t.data.data.advertesPicture.PICTURE_ADDRESS,a.recommend=t.data.data.recommend)}).catch(function(a){console.error(a)})},components:{swiper:C.swiper,swiperSlide:C.swiperSlide}},z={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("van-row",{staticClass:"search-bar"},[e("van-col",{staticClass:"icon",attrs:{span:"3"}},[e("van-icon",{attrs:{name:"location",size:"0.6rem"}})],1),a._v(" "),e("van-col",{staticClass:"input",attrs:{span:"16"}},[e("input",{attrs:{type:"text",placeholder:"商城"}})]),a._v(" "),e("van-col",{staticClass:"btn",attrs:{span:"5"}},[e("van-button",{attrs:{type:"primary",size:"mini"}},[a._v("搜索")])],1)],1),a._v(" "),e("div",{staticClass:"swipe-box"},[e("van-swipe",{attrs:{autoplay:2e3}},a._l(a.banner,function(a,t){return e("van-swipe-item",{key:t},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.image,expression:"item.image"}],attrs:{width:"100%"}})])}),1)],1),a._v(" "),e("div",{staticClass:"category"},a._l(a.category,function(t,s){return e("div",{key:s,staticClass:"item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],attrs:{width:"100%"}}),a._v(" "),e("span",[a._v(a._s(t.mallCategoryName))])])}),0),a._v(" "),e("div",{staticClass:"adverte"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.adverte,expression:"adverte"}],attrs:{width:"100%"}})]),a._v(" "),e("div",{staticClass:"recommend"},[e("h2",[a._v("商品推荐")]),a._v(" "),e("swiper",{staticStyle:{"border-top":"1px solid #ebebeb"},attrs:{options:{slidesPerView:"auto"}}},a._l(a.recommend,function(t,s){return e("swiper-slide",{key:s,staticClass:"recommend_box",staticStyle:{"border-right":"1px solid #ebebeb"}},[e("div",{staticClass:"Img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],attrs:{alt:t.goodsName,width:"100%"}})]),a._v(" "),e("p",{staticClass:"name"},[a._v(a._s(t.goodsName))]),a._v(" "),e("p",{staticClass:"mall-price"},[a._v("￥ "+a._s(t.mallPrice))]),a._v(" "),e("p",{staticClass:"price"},[a._v("￥ "+a._s(t.price))])])}),1)],1)],1)},staticRenderFns:[]};var N=e("VU/8")(x,z,!1,function(a){e("Civf")},"data-v-62b66bc1",null).exports;d.a.use(w.a);var S=new w.a({routes:[{path:"/",component:N}]});d.a.use(s.a).use(n.a).use(i.a).use(r.a).use(c.a).use(o.a).use(v.a).use(l.a).use(u.a),d.a.config.productionTip=!1,new d.a({el:"#app",store:f,router:S,components:{App:b},template:"<App/>"})},RUOb:function(a,t){},W0KU:function(a,t){},gygq:function(a,t){},mgS3:function(a,t){},nsZj:function(a,t){},sKgQ:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.04063adb8e6b401ddee0.js.map