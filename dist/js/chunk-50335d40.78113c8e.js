(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50335d40"],{"415b":function(s,S,J){},"552c":function(s,S,J){"use strict";J.r(S);var t=function(){var s=this,S=s.$createElement,t=s._self._c||S;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],attrs:{"element-loading-text":"加入購物車中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"section-heading text-center"},[t("p",[s._v("特色產品")]),s._m(0),t("img",{attrs:{src:""+J("bf75"),alt:""}})])])]),t("div",{staticClass:"row"},s._l(s.products,(function(S,J){return t("div",{key:J,staticClass:"col-12 col-sm-6 col-lg-3"},[t("div",{staticClass:"single-product-area mb-50 wow fadeInUp",attrs:{"data-wow-delay":"100ms"}},[t("div",{staticClass:"product-thumbnail"},[t("img",{attrs:{src:S.imageUrl[0],alt:""}}),t("span",{staticClass:"product-tags bg-danger"},[s._v("Hot")]),t("div",{staticClass:"product-meta-data"},[t("a",{attrs:{title:"Add To Cart"},on:{click:function(J){return s.handleAddCart(S.id)}}},[t("svg-icon",{attrs:{"icon-class":"shopping-cart-add"}})],1)])]),t("div",{staticClass:"product-desc text-center pt-4"},[t("a",{staticClass:"product-title",attrs:{href:"#"}},[s._v(s._s(S.title))]),t("h6",{staticClass:"price"},[s._v(" "+s._s(s._f("money")(S.price))+" "),t("span",{staticClass:"text-danger"},[s._v(s._s(s._f("money")(S.origin_price)))])])])])])})),0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"gotoshop-btn text-center wow fadeInUp",attrs:{"data-wow-delay":"900ms"}},[t("router-link",{staticClass:"btn famie-btn",attrs:{to:"/shop"}},[s._v("更多商品")])],1)])])])])},a=[function(){var s=this,S=s.$createElement,J=s._self._c||S;return J("h2",[J("span",[s._v("我們的產品")]),s._v(" 是高品質")])}],i=(J("d3b7"),J("8ad9")),A=J("3dd1"),n=J.n(A),e=(J("415b"),{name:"OurProducts",data:function(){return{loading:!1,products:[]}},created:function(){var s=this;i["g"].getAll(this.randomInteger(1,20),4).then((function(S){s.products=S.data}))},methods:{handleAddCart:function(s){var S=this;this.loading=!0,i["h"].postCart(s,1).then((function(s){S.cartDataList.push(s),n.a.fire("Good job","加入購物車成功","success")})).catch((function(s){n.a.fire("Oops...",s.errors[0],"error")})).finally((function(){S.loading=!1}))},randomInteger:function(s,S){return Math.floor(Math.random()*(S-s+1))+s}}}),o=e,r=J("2877"),c=Object(r["a"])(o,t,a,!1,null,null,null);S["default"]=c.exports},bf75:function(s,S){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAAUCAMAAAAUTTn7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACAVBMVEUAAAB3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSJ3sSLh4eEAAACM8XwRAAAAqHRSTlMAAQsFAwIEEBkUDQYSOgk7grfa49/XvKFxRRou02kVCC+t+vzqu4hfRCcbGBwqU86gckMtJBZY5fDi4Njpsvvk1sGfTVHy6L2NjJq0+Feb85cMJtzGWSgKXXCGxfew/v2ilslUMH2z2+719vHAYkE9ZKztPiuYamhzVTMOMXSViuy/q8Nti4nEd2cXbu9PIZ3r+RElhTVlfHlcD67Uz8e4kGMgsR9KdQeKwkIZAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAf5JREFUSMdjYKAyYMRgMDEzookAmSzMrIzEGzpAgJERhQPksrCiK2FjY2NmG/xewekvdg5OLgiLjZuZZWh4hIeXD+oPhE+Y+QUEhYRFRMXEJSSlhog/QEBaRlZOHsKEOVpBUWkFDCirqKqpa2hqaWnr6A60UwkCvRUr9A0MjYxNTGEiZuYr0IGFpZW1je1AO5UgEAA71s7ewdHJGSzg4gpxv5u7k4enl7c1LI58fAfaqQSBHyL0/QMCGRiCgsHskNCwcE6jiMgor+gYiGws90A7lSAwADs0Ll5ZGUglcLMkgrhJyZwpqWnpGZlZmRbZ8WAVGRoD7VLCwAPs0pzcvPyCwqIVxSXZQF6pvFSiEmqOiS9joH55tpIqAGFeOdipjhWVVdUMNe61ZUBOHYNzMHrur6epI6gEahpguaWxVpOhpGnFimaulkw0n8S3Dv7MAgRsAggni7TJta+wKulAjxT/TpaBdiZxoCsJydWOwiskGLp7UL0i1DvQbiQa9PVPmAh0sVJWDKgoy5nEwDh5ioM/zCM+VlE6A+1CYgGodJo6bfqUGeUzIyIFV/hUgkVm9QrMTpozd978BQsXIasc5ADZiXyL29mAApBWZvUS7UAkNaxDIM9A/ALtaS1dhjX4GVGa0UMDLJfjQHgPwRhivgA7mYWLEdXtwLhgpF2HEgBMszpYQqnt7AAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-50335d40.78113c8e.js.map