(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bac56bb0"],{"0bad8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"shop-area section-padding-0-100 bg-white",attrs:{"element-loading-text":t.loadingText,"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"shop-filters mb-30 d-flex align-items-center justify-content-between pt-2"},[r("div",[r("h6",[t._v("Showing "+t._s(t.startRow+1)+"–"+t._s(t.endRow)+" of "+t._s(t.filtered.length)+" results")])]),t._e()])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3"},[r("div",{staticClass:"single-widget-area"},[r("h5",{staticClass:"widget-title"},[t._v("Catagories")]),r("ul",{staticClass:"cata-list shop-page"},t._l(t.categories,(function(e,n){return r("li",{key:n},[r("a",{staticStyle:{cursor:"pointer","text-decoration":"underline"},on:{click:function(e){return t.changeCategory(n)}}},[t._v(t._s(n)+" ("+t._s(e.results)+")")])])})),0)])]),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[r("div",{staticClass:"row",attrs:{id:"products"}},t._l(t.pager,(function(e,n){return r("div",{key:n,staticClass:"col-12 col-sm-6 col-lg-4"},[r("div",{staticClass:"single-product-area mb-50"},[r("div",{staticClass:"product-thumbnail"},[r("img",{attrs:{src:e.imageUrl[0],alt:""}}),r("div",{staticClass:"product-meta-data"},[r("a",{attrs:{title:"Add To Cart"},on:{click:function(r){return t.handleAddCart(e.id)}}},[r("svg-icon",{attrs:{"icon-class":"shopping-cart-add"}})],1)])]),r("div",{staticClass:"product-desc text-center pt-4"},[r("a",{staticClass:"product-title",attrs:{href:"#"}},[t._v(t._s(e.title))]),r("h6",{staticClass:"price"},[t._v(" "+t._s(t._f("money")(e.price))+" "),r("span",{staticClass:"text-danger"},[t._v(t._s(t._f("money")(e.origin_price)))])])])])])})),0),r("nav",[r("ul",{staticClass:"pagination mb-0 mt-50"},t._l(t.pages,(function(e,n){return r("li",{key:n,staticClass:"page-item",class:e===t.currentPage?"active":""},[r("a",{staticClass:"page-link",on:{click:function(r){return t.changePage(e)}}},[t._v(t._s(e))])])})),0)])])])])])},a=[],i=(r("4de4"),r("4160"),r("a630"),r("d81d"),r("fb6a"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("ade3"));function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){if(Array.isArray(t))return o(t)}r("a4d3"),r("e01a"),r("d28b");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("b0c0"),r("25f0");function l(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return s(t)||c(t)||l(t)||d()}var f=r("8ad9"),g=r("3dd1"),p=r.n(g),h=(r("415b"),"All products"),v={loading:"資料載入中",joinCart:"加入購物車中"},y={data:function(){return{img:{backgroundImage:"url(".concat(r("118d"),")")},loading:!1,loadingText:v.loading,products:[],filteredProducts:[],categories:{},pageRow:12,currentPage:1,category:"",pagination:{},showCart:!1,cartDataList:[]}},computed:{filtered:function(){var t=this;return t.category&&t.category!==h?t.products.filter((function(e){return e.category===t.category})):t.products},calculatorPagination:function(){var t=this.filtered.length,e=(this.currentPage-1)*this.pageRow,r=e+this.pageRow;r>t&&(r=t);var n=parseInt(t/this.pageRow);return t%this.pageRow!==0&&n++,{pages:n,startRow:e,endRow:r}},pages:function(){return this.calculatorPagination.pages},startRow:function(){return this.calculatorPagination.startRow},endRow:function(){return this.calculatorPagination.endRow},pager:function(){return this.filtered.slice(this.startRow,this.endRow)}},created:function(){var t=this;this.loadingText=v.loading,this.loading=!0,this.fetchProducts(1).then((function(){var e=t.pagination.total_pages;return Promise.all(Array.from(Array(e),(function(t,e){return e+1})).slice(1).map((function(e){return t.fetchProducts(e)})))})).then((function(){t.assort()})).finally((function(){t.loading=!1})),this.periodCart()},methods:{fetchProducts:function(t){var e=this;return f["g"].getAll(t).then((function(t){var r;t.data.length>0&&((r=e.products).push.apply(r,u(t.data)),e.pagination=t.meta.pagination);return Promise.resolve()}))},assort:function(){var t=Object(i["a"])({},h,{results:this.products.length});this.products.forEach((function(e){t[e.category]?t[e.category].results+=1:t[e.category]={results:1}})),this.categories=t},changePage:function(t){this.currentPage=t},changeCategory:function(t){this.category=t,this.currentPage=1},handleAddCart:function(t){var e=this;this.loadingText=v.joinCart,this.loading=!0,f["h"].postCart(t,1).then((function(t){e.cartDataList.push(t),p.a.fire("Good job","加入購物車成功","success")})).catch((function(t){p.a.fire("Oops...",t.errors[0],"error")})).finally((function(){e.loading=!1}))},periodCart:function(){var t=this;f["h"].getCart().then((function(e){return t.cartDataList=e.data,Promise.resolve()})).then((function(){setTimeout((function(){t.periodCart()}),1e3)}))}}},b=y,m=(r("d17a"),r("2877")),C=Object(m["a"])(b,n,a,!1,null,"4e41ddfa",null);e["default"]=C.exports},"118d":function(t,e,r){t.exports=r.p+"img/18.404729fe.jpg"},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),i=r("7dd0"),o="String Iterator",s=a.set,c=a.getterFor(o);i(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"415b":function(t,e,r){},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),i=r("9bdd"),o=r("e95a"),s=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,d,u,f,g,p=a(t),h="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,b=void 0!==y,m=l(p),C=0;if(b&&(y=n(y,v>2?arguments[2]:void 0,2)),void 0==m||h==Array&&o(m))for(e=s(p.length),r=new h(e);e>C;C++)g=b?y(p[C],C):p[C],c(r,C,g);else for(u=m.call(p),f=u.next,r=new h;!(d=f.call(u)).done;C++)g=b?i(u,y,[d.value,C],!0):d.value,c(r,C,g);return r.length=C,r}},"7b72":function(t,e,r){},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},d17a:function(t,e,r){"use strict";var n=r("7b72"),a=r.n(n);a.a},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),d=i.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};l(f,d);var g=f.prototype=d.prototype;g.constructor=f;var p=g.toString,h="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(o(u,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),d=r("b622"),u=r("1dde"),f=r("ae40"),g=u("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),h=d("species"),v=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!g||!p},{slice:function(t,e){var r,n,d,u=c(this),f=s(u.length),g=o(t,f),p=o(void 0===e?f:e,f);if(i(u)&&(r=u.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(u,g,p);for(n=new(void 0===r?Array:r)(y(p-g,0)),d=0;g<p;g++,d++)g in u&&l(n,d,u[g]);return n.length=d,n}})}}]);
//# sourceMappingURL=chunk-bac56bb0.34a68eea.js.map