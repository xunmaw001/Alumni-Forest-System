(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shumulingqu-add-or-update"],{"7f3c":function(r,e,t){"use strict";t.r(e);var i=t("88c0"),o=t.n(i);for(var n in i)"default"!==n&&function(r){t.d(e,r,(function(){return i[r]}))}(n);e["default"]=o.a},"88c0":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("96cf");var o=i(t("3b8d")),n=i(t("e2b1")),a={data:function(){return{ruleForm:{shumubianhao:"",suoshumu:"",suoshuke:"",shumutupian:"",shumumingcheng:"",zhanghao:"",nianjizhuanye:"",xingming:"",sfsh:"",shhf:""},user:{},ro:{shumubianhao:!1,suoshumu:!1,suoshuke:!1,shumutupian:!1,shumumingcheng:!1,zhanghao:!1,nianjizhuanye:!1,xingming:!1,sfsh:!1,shhf:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(e){var t,i,o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(i=r.sent,this.user=i.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.nianjizhuanye=this.user.nianjizhuanye,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=16;break}return this.ruleForm.id=e.id,r.next=14,this.$api.info("shumulingqu",this.ruleForm.id);case 14:i=r.sent,this.ruleForm=i.data;case 16:if(!e.cross){r.next=55;break}o=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(o);case 19:if((r.t1=r.t0()).done){r.next=55;break}if(n=r.t1.value,"shumubianhao"!=n){r.next=25;break}return this.ruleForm.shumubianhao=o[n],this.ro.shumubianhao=!0,r.abrupt("continue",19);case 25:if("suoshumu"!=n){r.next=29;break}return this.ruleForm.suoshumu=o[n],this.ro.suoshumu=!0,r.abrupt("continue",19);case 29:if("suoshuke"!=n){r.next=33;break}return this.ruleForm.suoshuke=o[n],this.ro.suoshuke=!0,r.abrupt("continue",19);case 33:if("shumutupian"!=n){r.next=37;break}return this.ruleForm.shumutupian=o[n],this.ro.shumutupian=!0,r.abrupt("continue",19);case 37:if("shumumingcheng"!=n){r.next=41;break}return this.ruleForm.shumumingcheng=o[n],this.ro.shumumingcheng=!0,r.abrupt("continue",19);case 41:if("zhanghao"!=n){r.next=45;break}return this.ruleForm.zhanghao=o[n],this.ro.zhanghao=!0,r.abrupt("continue",19);case 45:if("nianjizhuanye"!=n){r.next=49;break}return this.ruleForm.nianjizhuanye=o[n],this.ro.nianjizhuanye=!0,r.abrupt("continue",19);case 49:if("xingming"!=n){r.next=53;break}return this.ruleForm.xingming=o[n],this.ro.xingming=!0,r.abrupt("continue",19);case 53:r.next=19;break;case 55:this.styleChange();case 56:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shumutupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.shumutupian=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.id){r.next=5;break}return r.next=3,this.$api.update("shumulingqu",this.ruleForm);case 3:r.next=7;break;case 5:return r.next=7,this.$api.add("shumulingqu",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,o=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,o=o>9?o:"0"+o,"".concat(t,"-").concat(i,"-").concat(o)},toggleTab:function(r){this.$refs[r].show()}}};e.default=a},c603:function(r,e,t){"use strict";var i=t("fbce"),o=t.n(i);o.a},c92b:function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-07ccc490]{padding:%?20?%}.content[data-v-07ccc490]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-07ccc490]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-07ccc490]{width:%?180?%}.avator[data-v-07ccc490]{width:%?150?%;height:%?60?%}.right-input[data-v-07ccc490]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-07ccc490]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-07ccc490]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-07ccc490]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-07ccc490]{border:0}.cu-form-group uni-input[data-v-07ccc490]{padding:0 %?30?%}.uni-input[data-v-07ccc490]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-07ccc490]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-07ccc490]::after{line-height:%?88?%}.select .uni-input[data-v-07ccc490]{line-height:%?88?%}.input .right-input[data-v-07ccc490]{line-height:%?88?%}',""]),r.exports=e},d3e0:function(r,e,t){"use strict";var i,o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("树木编号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shumubianhao,placeholder:"树木编号"},model:{value:r.ruleForm.shumubianhao,callback:function(e){r.$set(r.ruleForm,"shumubianhao",e)},expression:"ruleForm.shumubianhao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("所属目")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.suoshumu,placeholder:"所属目"},model:{value:r.ruleForm.suoshumu,callback:function(e){r.$set(r.ruleForm,"suoshumu",e)},expression:"ruleForm.suoshumu"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("所属科")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.suoshuke,placeholder:"所属科"},model:{value:r.ruleForm.suoshuke,callback:function(e){r.$set(r.ruleForm,"suoshuke",e)},expression:"ruleForm.suoshuke"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.shumutupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[r._v("树木图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.shumutupian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.shumutupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("树木名称")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shumumingcheng,placeholder:"树木名称"},model:{value:r.ruleForm.shumumingcheng,callback:function(e){r.$set(r.ruleForm,"shumumingcheng",e)},expression:"ruleForm.shumumingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.zhanghao,placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("年级专业")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.nianjizhuanye,placeholder:"年级专业"},model:{value:r.ruleForm.nianjizhuanye,callback:function(e){r.$set(r.ruleForm,"nianjizhuanye",e)},expression:"ruleForm.nianjizhuanye"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return i}))},dd72:function(r,e,t){"use strict";t.r(e);var i=t("d3e0"),o=t("7f3c");for(var n in o)"default"!==n&&function(r){t.d(e,r,(function(){return o[r]}))}(n);t("c603");var a,u=t("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"07ccc490",null,!1,i["a"],a);e["default"]=s.exports},fbce:function(r,e,t){var i=t("c92b");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var o=t("4f06").default;o("2e2f0e42",i,!0,{sourceMap:!1,shadowMode:!1})}}]);