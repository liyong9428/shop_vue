webpackJsonp([1],{"/ccY":function(a,e){},"8sPh":function(a,e){},"97dx":function(a,e){},JsOw:function(a,e){},NAlg:function(a,e){},NHnr:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("ZuV/");var s=t("37Xn"),i=(t("JRZP"),t("LK01")),r=(t("k3b4"),t("+2ln")),n=(t("9++/"),t("QhyB")),o=(t("3AsM"),t("7ZPY")),c=(t("3Lne"),t("SSsa")),d=(t("RgoE"),t("0KWt")),l=(t("qVvv"),t("8aUD")),v=(t("zP7x"),t("rD0v")),m=(t("1E9F"),t("2Ux5")),u=t("7+uW"),p={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"footer"},[t("router-link",{attrs:{to:"/"}},[t("van-icon",{attrs:{name:"wap-home",size:"0.48rem"}}),a._v(" "),t("span",[a._v("首页")])],1),a._v(" "),t("router-link",{attrs:{to:"/bars"}},[t("van-icon",{attrs:{name:"bars",size:"0.48rem"}}),a._v(" "),t("span",[a._v("分类")])],1),a._v(" "),t("router-link",{attrs:{to:"/cart"}},[t("van-icon",{attrs:{name:"cart",size:"0.48rem"}}),a._v(" "),t("span",[a._v("购物车")])],1),a._v(" "),t("router-link",{attrs:{to:"/person"}},[t("van-icon",{attrs:{name:"manager",size:"0.48rem"}}),a._v(" "),t("span",[a._v("我的")])],1)],1)},staticRenderFns:[]};var _={components:{Tabbar:t("VU/8")({data:function(){return{active:0}}},p,!1,function(a){t("h0ys")},"data-v-e3623d8c",null).exports}},f={render:function(){var a=this.$createElement,e=this._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("Tabbar")],1)},staticRenderFns:[]};var y=t("VU/8")(_,f,!1,function(a){t("/ccY")},null,null).exports,g=t("NYxO");u.a.use(g.a);var b=new g.a.Store({state:{msg:"msg675767"}}),h=t("/ocq"),w=t("W1GH"),z=t.n(w),C=t("mtWM"),x=t.n(C),N=(t("mgS3"),t("7QTg")),k={render:function(){var a=this.$createElement;return(this._self._c||a)("div")},staticRenderFns:[]};var S=t("VU/8")({},k,!1,function(a){t("mzZT")},"data-v-4c560754",null).exports,P={data:function(){return{banner:[],category:[],adverte:"",recommend:[],floors:[],hotGoods:[]}},created:function(){var a=this;x.a.get("https://www.easy-mock.com/mock/5c9726dad1eeba73b8527408/shop/shop",{}).then(function(e){200==e.status&&(console.log(e.data),a.banner=e.data.data.slides,a.category=e.data.data.category,a.adverte=e.data.data.advertesPicture.PICTURE_ADDRESS,a.recommend=e.data.data.recommend,a.hotGoods=e.data.data.hotGoods,a.floors=[{name:e.data.data.floorName.floor1,body:e.data.data.floor1},{name:e.data.data.floorName.floor2,body:e.data.data.floor2},{name:e.data.data.floorName.floor3,body:e.data.data.floor3}])}).catch(function(a){console.error(a)})},components:{swiper:N.swiper,swiperSlide:N.swiperSlide,GoodsList:S},filters:{price:function(a,e){return z.a.formatMoney(a,e)}}},R={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"home"},[t("van-row",{staticClass:"search-bar"},[t("van-col",{staticClass:"icon",attrs:{span:"3"}},[t("van-icon",{attrs:{name:"location",size:"0.6rem"}})],1),a._v(" "),t("van-col",{staticClass:"input",attrs:{span:"16"}},[t("input",{attrs:{type:"text",placeholder:"商城"}})]),a._v(" "),t("van-col",{staticClass:"btn",attrs:{span:"5"}},[t("van-button",{attrs:{type:"primary",size:"mini"}},[a._v("搜索")])],1)],1),a._v(" "),t("div",{staticClass:"swipe-box"},[t("van-swipe",{attrs:{autoplay:2e3}},a._l(a.banner,function(a,e){return t("van-swipe-item",{key:e},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.image,expression:"item.image"}],attrs:{width:"100%"}})])}),1)],1),a._v(" "),t("div",{staticClass:"category"},a._l(a.category,function(e,s){return t("div",{key:s,staticClass:"item"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}],attrs:{width:"100%"}}),a._v(" "),t("span",[a._v(a._s(e.mallCategoryName))])])}),0),a._v(" "),t("div",{staticClass:"adverte"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.adverte,expression:"adverte"}],attrs:{width:"100%"}})]),a._v(" "),t("div",{staticClass:"recommend"},[t("h2",[a._v("商品推荐")]),a._v(" "),t("swiper",{staticStyle:{"border-top":"1px solid #ebebeb"},attrs:{options:{slidesPerView:"auto"}}},a._l(a.recommend,function(e,s){return t("swiper-slide",{key:s,staticClass:"recommend_box",staticStyle:{"border-right":"1px solid #ebebeb"}},[t("div",{staticClass:"Img"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}],attrs:{alt:e.goodsName,width:"100%"}})]),a._v(" "),t("p",{staticClass:"name"},[a._v(a._s(e.goodsName))]),a._v(" "),t("p",{staticClass:"mall-price"},[a._v(a._s(a._f("price")(e.mallPrice,"￥")))]),a._v(" "),t("p",{staticClass:"price"},[a._v(a._s(a._f("price")(e.price,"￥")))])])}),1)],1),a._v(" "),t("div",{staticClass:"floor"},a._l(a.floors,function(e,s){return t("dl",{key:s},[t("dt",[t("i",[a._v(a._s(s+1)+"F")]),a._v(" "),t("span",[a._v(a._s(e.name))])]),a._v(" "),t("div",{staticClass:"body"},[t("dd",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.body[0].image,expression:"item.body[0].image"}],attrs:{width:"100%"}})]),a._v(" "),t("dd",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.body[1].image,expression:"item.body[1].image"}],staticStyle:{"border-bottom":"1px solid #eaeaea"},attrs:{width:"100%"}}),a._v(" "),t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.body[2].image,expression:"item.body[2].image"}],attrs:{width:"100%"}})]),a._v(" "),a._l(e.body.slice(3),function(a,e){return t("dd",{key:e},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.image,expression:"key.image"}],attrs:{alt:"",width:"100%"}})])})],2)])}),0),a._v(" "),t("div",{staticClass:"hot"},[t("h3",[a._v("热卖商品")]),a._v(" "),t("van-list",{staticClass:"goods"},[t("van-row",a._l(a.hotGoods,function(e,s){return t("van-col",{key:s,attrs:{span:"12"}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}],attrs:{width:"100%"}}),a._v(" "),t("p",{staticClass:"name"},[a._v(a._s(e.name))]),a._v(" "),t("p",{staticClass:"price"},[a._v(a._s(a._f("price")(e.price,"￥")))])])}),1)],1)],1)],1)},staticRenderFns:[]};var U=t("VU/8")(P,R,!1,function(a){t("8sPh")},"data-v-bd3d7fca",null).exports;u.a.use(h.a);var E=new h.a({routes:[{path:"/",component:U}]});u.a.use(s.a).use(i.a).use(r.a).use(n.a).use(o.a).use(c.a).use(d.a).use(l.a).use(v.a).use(m.a),u.a.config.productionTip=!1,new u.a({el:"#app",store:b,router:E,components:{App:y},template:"<App/>"})},RUOb:function(a,e){},W0KU:function(a,e){},ZZgd:function(a,e){},h0ys:function(a,e){},mgS3:function(a,e){},mzZT:function(a,e){},nsZj:function(a,e){},sKgQ:function(a,e){}},["NHnr"]);
//# sourceMappingURL=app.42f65ace5e1970309cfa.js.map