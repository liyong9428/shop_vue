webpackJsonp([1],{"/ccY":function(a,t){},"97dx":function(a,t){},CguK:function(a,t){},JsOw:function(a,t){},NAlg:function(a,t){},NHnr:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("ZuV/");var s=e("37Xn"),i=(e("JRZP"),e("LK01")),r=(e("k3b4"),e("+2ln")),n=(e("9++/"),e("QhyB")),o=(e("3AsM"),e("7ZPY")),c=(e("3Lne"),e("SSsa")),l=(e("RgoE"),e("0KWt")),d=(e("qVvv"),e("8aUD")),v=(e("zP7x"),e("rD0v")),m=(e("1E9F"),e("2Ux5")),u=e("7+uW"),p={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"footer"},[e("van-tabbar",{attrs:{"active-color":"#d22d7c"},model:{value:a.active,callback:function(t){a.active=t},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"wap-home",to:"/"}},[a._v("首页")]),a._v(" "),e("van-tabbar-item",{attrs:{icon:"bars",to:"/class"}},[a._v("分类")]),a._v(" "),e("van-tabbar-item",{attrs:{icon:"cart",to:"/cart"}},[a._v("购物车")]),a._v(" "),e("van-tabbar-item",{attrs:{icon:"manager",to:"/person"}},[a._v("我的")])],1)],1)},staticRenderFns:[]};var _={components:{Tabbar:e("VU/8")({data:function(){return{active:0}}},p,!1,function(a){e("CguK")},"data-v-a4707a6c",null).exports}},f={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("Tabbar")],1)},staticRenderFns:[]};var y=e("VU/8")(_,f,!1,function(a){e("/ccY")},null,null).exports,g=e("NYxO");u.a.use(g.a);var b=new g.a.Store({state:{msg:"msg675767"}}),w=e("/ocq"),h=e("W1GH"),x=e.n(h),C=e("mtWM"),z=e.n(C),N=(e("mgS3"),e("7QTg")),S={render:function(){var a=this.$createElement;return(this._self._c||a)("div")},staticRenderFns:[]};var k=e("VU/8")({},S,!1,function(a){e("mzZT")},"data-v-4c560754",null).exports,E={data:function(){return{banner:[],category:[],adverte:"",recommend:[],floors:[],hotGoods:[]}},created:function(){var a=this;z.a.get("https://www.easy-mock.com/mock/5c9726dad1eeba73b8527408/shop/shop",{}).then(function(t){200==t.status&&(console.log(t.data),a.banner=t.data.data.slides,a.category=t.data.data.category,a.adverte=t.data.data.advertesPicture.PICTURE_ADDRESS,a.recommend=t.data.data.recommend,a.hotGoods=t.data.data.hotGoods,a.floors=[{name:t.data.data.floorName.floor1,body:t.data.data.floor1},{name:t.data.data.floorName.floor2,body:t.data.data.floor2},{name:t.data.data.floorName.floor3,body:t.data.data.floor3}])}).catch(function(a){console.error(a)})},components:{swiper:N.swiper,swiperSlide:N.swiperSlide,GoodsList:k},filters:{price:function(a,t){return x.a.formatMoney(a,t)}}},R={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"home"},[e("van-row",{staticClass:"search-bar"},[e("van-col",{staticClass:"icon",attrs:{span:"3"}},[e("van-icon",{attrs:{name:"location",size:"0.6rem"}})],1),a._v(" "),e("van-col",{staticClass:"input",attrs:{span:"16"}},[e("input",{attrs:{type:"text",placeholder:"商城"}})]),a._v(" "),e("van-col",{staticClass:"btn",attrs:{span:"5"}},[e("van-button",{attrs:{type:"primary",size:"mini"}},[a._v("搜索")])],1)],1),a._v(" "),e("div",{staticClass:"swipe-box"},[e("van-swipe",{attrs:{autoplay:2e3}},a._l(a.banner,function(a,t){return e("van-swipe-item",{key:t},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.image,expression:"item.image"}],attrs:{width:"100%"}})])}),1)],1),a._v(" "),e("div",{staticClass:"category"},a._l(a.category,function(t,s){return e("div",{key:s,staticClass:"item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],attrs:{width:"100%"}}),a._v(" "),e("span",[a._v(a._s(t.mallCategoryName))])])}),0),a._v(" "),e("div",{staticClass:"adverte"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.adverte,expression:"adverte"}],attrs:{width:"100%"}})]),a._v(" "),e("div",{staticClass:"recommend"},[e("h2",[a._v("商品推荐")]),a._v(" "),e("swiper",{staticStyle:{"border-top":"1px solid #ebebeb"},attrs:{options:{slidesPerView:"auto"}}},a._l(a.recommend,function(t,s){return e("swiper-slide",{key:s,staticClass:"recommend_box",staticStyle:{"border-right":"1px solid #ebebeb"}},[e("div",{staticClass:"Img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],attrs:{alt:t.goodsName,width:"100%"}})]),a._v(" "),e("p",{staticClass:"name"},[a._v(a._s(t.goodsName))]),a._v(" "),e("p",{staticClass:"mall-price"},[a._v(a._s(a._f("price")(t.mallPrice,"￥")))]),a._v(" "),e("p",{staticClass:"price"},[a._v(a._s(a._f("price")(t.price,"￥")))])])}),1)],1),a._v(" "),e("div",{staticClass:"floor"},a._l(a.floors,function(t,s){return e("dl",{key:s},[e("dt",[e("i",[a._v(a._s(s+1)+"F")]),a._v(" "),e("span",[a._v(a._s(t.name))])]),a._v(" "),e("div",{staticClass:"body"},[e("dd",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.body[0].image,expression:"item.body[0].image"}],attrs:{width:"100%"}})]),a._v(" "),e("dd",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.body[1].image,expression:"item.body[1].image"}],staticStyle:{"border-bottom":"1px solid #eaeaea"},attrs:{width:"100%"}}),a._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.body[2].image,expression:"item.body[2].image"}],attrs:{width:"100%"}})]),a._v(" "),a._l(t.body.slice(3),function(a,t){return e("dd",{key:t},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.image,expression:"key.image"}],attrs:{alt:"",width:"100%"}})])})],2)])}),0),a._v(" "),e("div",{staticClass:"hot"},[e("h3",[a._v("热卖商品")]),a._v(" "),e("van-list",{staticClass:"goods"},[e("van-row",{attrs:{gutter:"10"}},a._l(a.hotGoods,function(t,s){return e("van-col",{key:s,attrs:{span:"12"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],attrs:{width:"100%"}}),a._v(" "),e("p",{staticClass:"name"},[a._v(a._s(t.name))]),a._v(" "),e("p",{staticClass:"price"},[a._v(a._s(a._f("price")(t.price,"￥")))])])}),1)],1)],1)],1)},staticRenderFns:[]};var U=e("VU/8")(E,R,!1,function(a){e("xpSE")},"data-v-a4dee384",null).exports;u.a.use(w.a);var P=new w.a({routes:[{path:"/",component:U}]});u.a.use(s.a).use(i.a).use(r.a).use(n.a).use(o.a).use(c.a).use(l.a).use(d.a).use(v.a).use(m.a),u.a.config.productionTip=!1,new u.a({el:"#app",store:b,router:P,components:{App:y},template:"<App/>"})},RUOb:function(a,t){},W0KU:function(a,t){},ZZgd:function(a,t){},mgS3:function(a,t){},mzZT:function(a,t){},nsZj:function(a,t){},sKgQ:function(a,t){},xpSE:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.5981e1515f456910a098.js.map