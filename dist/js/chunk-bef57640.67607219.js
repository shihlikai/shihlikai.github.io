(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bef57640"],{9953:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":t.loadingText,"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"el-pagination is-background"},[i("ul",{staticClass:"el-pager"},[i("li",{staticClass:"number active"},[t._v("總筆數："+t._s(t.pagination.total))])])]),i("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pagination.count,"page-count":t.pagination.total_pages},on:{"current-change":t.handleCurrentChange}}),i("div",{staticStyle:{position:"absolute",right:"0px","margin-right":"20px"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleCreateClick}},[t._v("新增產品")])],1)],1),i("div",{staticStyle:{height:"20px"}}),i("el-table",{attrs:{data:t.products,"row-style":t.handleRowStyle}},[i("el-table-column",{attrs:{width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return i("div",{},[i("el-image",{staticStyle:{height:"100px",width:"100px"},attrs:{src:t.row.imageUrl[0]}})],1)}}])},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v("圖片")])]),i("el-table-column",{attrs:{prop:"category",label:"分類",width:"120"}}),i("el-table-column",{attrs:{prop:"title",label:"產品名稱"}}),i("el-table-column",{attrs:{prop:"origin_price",label:"原價",width:"80"}}),i("el-table-column",{attrs:{prop:"price",label:"售價",width:"80"}}),i("el-table-column",{attrs:{width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return i("div",{},[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.handleEditClick(e)}}},[t._v("編輯")]),i("el-button",{attrs:{type:"danger"},on:{click:function(i){return t.handleDeleteClick(e)}}},[t._v("刪除")])],1)}}])},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v("編輯")])])],1),i("el-drawer",{ref:"drawer",staticStyle:{height:"100%"},attrs:{visible:t.dialog,"with-header":!1,"wrapper-closable":!1,direction:"rtl",size:"60%"},on:{"update:visible":function(e){t.dialog=e}}},[i("div",{staticStyle:{height:"100%",width:"100%",padding:"10px","text-align":"center"}},[i("el-form",{attrs:{model:t.form}},[i("div",{staticStyle:{display:"flex"}},[i("div",{staticStyle:{width:"50%","padding-right":"20px"}},[i("el-form-item",{attrs:{label:"輸入圖片網址"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.imageUrl[0],callback:function(e){t.$set(t.form.imageUrl,0,e)},expression:"form.imageUrl[0]"}})],1),i("div",{staticStyle:{border:"#1abc9c solid 1px"}},[i("el-image",{staticStyle:{width:"100%"},attrs:{lazy:!0,src:t.form.imageUrl[0]}})],1)],1),i("div",{staticStyle:{width:"50%"}},[i("el-form-item",{attrs:{label:"標題"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),i("div",{staticStyle:{display:"flex"}},[i("el-form-item",{staticStyle:{width:"50%","padding-right":"20px"},attrs:{label:"分類"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),i("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"單位"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1)],1),i("div",{staticStyle:{display:"flex"}},[i("el-form-item",{staticStyle:{width:"50%","padding-right":"20px"},attrs:{label:"原價"}},[i("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,"controls-position":"right"},model:{value:t.form.origin_price,callback:function(e){t.$set(t.form,"origin_price",e)},expression:"form.origin_price"}})],1),i("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"售價"}},[i("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,"controls-position":"right"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1)],1),i("el-form-item",{attrs:{label:"產品描述"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},autocomplete:"off"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),i("el-form-item",{attrs:{label:"說明內容"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},autocomplete:"off",resize:"none"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),i("el-form-item",{staticStyle:{"text-align":"left"}},[t._v(" 是否啟用 "),i("el-switch",{attrs:{"active-value":!0,"inactive-value":!1,"inactive-color":"#F56C6C"},model:{value:t.form.enabled,callback:function(e){t.$set(t.form,"enabled",e)},expression:"form.enabled"}})],1)],1)])]),i("div",{staticStyle:{"margin-top":"10px"}},[i("el-button",{on:{click:t.cancelForm}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmitClick}},[t._v("確 定")])],1)],1)])],1)},a=[],o=(i("dca8"),i("d3b7"),i("8ad9")),r="商品列表讀取中",l="商品資料更新中",c="商品資料刪除中",s={origin_price:1,price:1,enabled:!0,imageUrl:[]};Object.freeze(s);var u={data:function(){return{loadingText:r,loading:!0,dialog:!1,products:[],pagination:{},form:this.deepCopy(s)}},created:function(){this.fetchProducts()},methods:{handleRowStyle:function(t){var e=t.row,i=(t.rowIndex,e.enabled);if(!i)return{backgroundColor:"#E6A23C",color:"#303133"}},fetchProducts:function(t){var e=this;return new Promise((function(i){e.loadingText=r,e.loading=!0,Object(o["b"])(t).then((function(t){var i=t.data,n=t.meta;e.products=i,e.pagination=n.pagination})).finally((function(){e.loading=!1,i()}))}))},handleCurrentChange:function(t){this.fetchProducts(t)},handleEditClick:function(t){var e=t.row;this.form=this.deepCopy(e),this.dialog=!0},handleDeleteClick:function(t){var e=this,i=t.row;return this.$confirm("".concat(i.title," 商品資料?"),"確認刪除",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((function(){return new Promise((function(t){e.loadingText=c,e.loading=!0,Object(o["a"])(i.id).then((function(){return e.updateProductsList()})).finally((function(){e.loading=!1,t()}))}))}))},handleSubmitClick:function(){var t=this;return new Promise((function(e){t.loadingText=l,t.loading=!0;var i,n=t.form.id;i=n?Object(o["c"])(n,t.form):Object(o["e"])(t.form),i.then((function(e){return t.updateProductsList()})).then((function(){t.$refs.drawer.closeDrawer()})).finally((function(){t.loading=!1,e()}))}))},handleCreateClick:function(){this.form=this.deepCopy(s),this.dialog=!0},cancelForm:function(){this.loading=!1,this.dialog=!1},updateProductsList:function(){return this.fetchProducts(this.pagination.current_page)},deepCopy:function(t){return JSON.parse(JSON.stringify(t))}}},d=u,f=(i("b9e6"),i("2877")),p=Object(f["a"])(d,n,a,!1,null,null,null);e["default"]=p.exports},b086:function(t,e,i){},b9e6:function(t,e,i){"use strict";var n=i("b086"),a=i.n(n);a.a},bb2f:function(t,e,i){var n=i("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},dca8:function(t,e,i){var n=i("23e7"),a=i("bb2f"),o=i("d039"),r=i("861d"),l=i("f183").onFreeze,c=Object.freeze,s=o((function(){c(1)}));n({target:"Object",stat:!0,forced:s,sham:!a},{freeze:function(t){return c&&r(t)?c(l(t)):t}})},f183:function(t,e,i){var n=i("d012"),a=i("861d"),o=i("5135"),r=i("9bf2").f,l=i("90e3"),c=i("bb2f"),s=l("meta"),u=0,d=Object.isExtensible||function(){return!0},f=function(t){r(t,s,{value:{objectID:"O"+ ++u,weakData:{}}})},p=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,s)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[s].objectID},m=function(t,e){if(!o(t,s)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[s].weakData},g=function(t){return c&&b.REQUIRED&&d(t)&&!o(t,s)&&f(t),t},b=t.exports={REQUIRED:!1,fastKey:p,getWeakData:m,onFreeze:g};n[s]=!0}}]);
//# sourceMappingURL=chunk-bef57640.67607219.js.map