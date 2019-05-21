(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{65:function(t,e,a){t.exports=a.p+"assets/img/imooc2.655bf749.png"},66:function(t,e,a){t.exports=a.p+"assets/img/j2ee.e6025362.png"},67:function(t,e,a){t.exports=a.p+"assets/img/all.899480df.png"},68:function(t,e,a){t.exports=a.p+"assets/img/imooc.d8b5f5d7.png"},83:function(t,e,a){"use strict";a.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"ajax跨域完全讲解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ajax跨域完全讲解","aria-hidden":"true"}},[t._v("#")]),t._v(" Ajax跨域完全讲解")]),r("p",[r("strong",[t._v("慕课网视频倾情讲解，从原因到底层原理分析，好评如潮！欢迎观看，"),r("a",{attrs:{href:"https://www.imooc.com/learn/947",target:"_blank",rel:"noopener noreferrer"}},[t._v("去看看")])])]),r("p",[r("a",{attrs:{href:"https://www.imooc.com/learn/947",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a(68),alt:"评价"}})])]),r("h2",{attrs:{id:"大纲"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大纲","aria-hidden":"true"}},[t._v("#")]),t._v(" 大纲")]),r("p",[r("img",{attrs:{src:a(67),alt:"大纲"}})]),r("h2",{attrs:{id:"跨越产生原因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跨越产生原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨越产生原因")]),r("ul",[r("li",[t._v("必须是浏览器上发出的请求")])]),r("p",[t._v("其实就是浏览器多管闲事，觉得【可能】有安全问题，所以不允许。非浏览器发生的请求没有这个问题，如你在java代码中掉任何域都不可能报这个问题。")]),r("ul",[r("li",[t._v("必须是XMLHttpRequest请求")])]),r("p",[t._v("直接访问肯定是不会错误的。")]),r("ul",[r("li",[t._v("跨域")])]),r("p",[t._v("就是协议，域名，端口任何一个不同就算跨域。")]),r("blockquote",[r("p",[t._v("重点：跨域和异步请求是浏览器的概念，服务器没有跨域和异步请求的概念。")])]),r("h2",{attrs:{id:"解决思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决思路")]),r("p",[t._v("针对产生跨域的3个条件，我们有对应的解决方法。")]),r("ul",[r("li",[t._v("针对浏览器，指定参数让浏览器闭嘴，不检查。")])]),r("p",[t._v("以chrome为例，增加参数--disable-web-security --user-data-dir=C:\\MyChromeDevUserData 启动chrome即可解决，由于实际意义不大，不单独演示，大家有兴趣本机自己尝试即可。")]),r("ul",[r("li",[t._v("针对XMLHttpRequest请求，使用jsonp")])]),r("p",[t._v("jsonp是前后台的一个约定，约定了当请求带了指定参数的时候（默认是callback），返回的数据由json改成函数调用形式。jsonp弊端：")]),r("ol",[r("li",[t._v("服务器需要改动")]),r("li",[t._v("只支持get")])]),r("ul",[r("li",[t._v("针对跨越，有2种解决方式")])]),r("p",[r("img",{attrs:{src:a(66),alt:"j2ee架构"}})]),r("p",[t._v("先了解最基本j2ee架构。2种思路：")]),r("ol",[r("li",[t._v("支持跨域（被调用方解决）")])]),r("p",[t._v("基于http协议关于跨域的相关规定，再http头上返回相关支持跨域的信息。可以在Serverlt容器上用Filter上增加或者在中间服务器的nginx/apache上增加")]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("隐藏跨域（调用方解决）")])]),r("p",[t._v("就是配置反向代理，让跨域请求从请求方的中间服务器转出去。")]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),r("p",[t._v("这2种方式虽然最后可能都是修改中间服务器的nginx/apache，但出发点是完全不一样的，修改的配置内容也是完全不一样的。一定要理清楚！")])]),r("h2",{attrs:{id:"github地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github地址","aria-hidden":"true"}},[t._v("#")]),t._v(" github地址")]),r("p",[r("a",{attrs:{href:"https://github.com/xwjie/AjaxDemo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xwjie/AjaxDemo")])]),r("h2",{attrs:{id:"课程地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#课程地址","aria-hidden":"true"}},[t._v("#")]),t._v(" 课程地址")]),r("p",[t._v("点击图片进入视频学习")]),r("p",[r("a",{attrs:{href:"https://www.imooc.com/learn/947",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a(65),alt:""}})])])])}],s=a(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);e.default=i.exports}}]);