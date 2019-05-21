(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{98:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"controller规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller规范","aria-hidden":"true"}},[t._v("#")]),t._v(" Controller规范")]),a("p",[t._v("第一篇文章中，我贴了2段代码，第一个是原生态的，第2段是我指定了接口定义规范，使用AOP技术之后最终交付的代码，从15行到1行，自己感受一下。今天来说说大家关注的AOP如何实现。")]),a("p",[t._v("先说说Controller规范，主要的内容是就是"),a("a",{attrs:{href:"http://www.imooc.com/article/27664",target:"_blank",rel:"noopener noreferrer"}},[t._v("接口定义")]),t._v("里面的内容，你只要遵循里面的规范，controller就问题不大，除了这些，还有另外的几点：")]),a("h2",{attrs:{id:"统一返回resultbean对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一返回resultbean对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 统一返回ResultBean对象")]),a("p",[t._v("所有函数返回统一的ResultBean/PageResultBean格式，原因见我的接口定义这个贴。没有统一格式，AOP无法玩，更加重要的是前台代码很不好写。当然类名你可以按照自己喜好随便定义，如就叫Result。")]),a("p",[t._v("大家都知道，前台代码很难写好做到重用，而我们返回相同数据结构后，前台代码可以这样写（方法handlerResult的重用）：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 查询所有配置项记录")]),a("br"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fetchAllConfigs")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("  $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getJSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'config/all'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("handlerResult")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" renderConfigs"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("br"),a("br"),a("span",{attrs:{class:"token comment"}},[t._v("// 根据id删除配置项")]),a("br"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("deleteConfig")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("  $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("post")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'config/delete'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("    id "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" id"),a("br"),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'delete result'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("handlerResult")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fetchAllConfigs"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("br"),a("br"),a("span",{attrs:{class:"token comment"}},[t._v("/**"),a("br"),t._v("  * 后台返回相同的数据结构，前台的代码才好写才能重用"),a("br"),t._v("  * @param result： ajax返回的结果"),a("br"),t._v("  * @param fn： 成功的处理函数（传入data）"),a("br"),t._v("  */")]),a("br"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("handlerResult")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 成功执行操作，失败提示原因")]),a("br"),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("br"),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 没有登陆异常，重定向到登陆页面")]),a("br"),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("showError")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"没有登录"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("br"),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 参数校验出错，直接提示")]),a("br"),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("showError")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("br"),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 没有权限，显示申请权限电子流")]),a("br"),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("showError")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"没有权限"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("br"),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("br"),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("// 不应该出现的异常，应该重点关注")]),a("br"),t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("showError")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("br"),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("br"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("br")])]),a("h2",{attrs:{id:"resultbean不允许往后传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resultbean不允许往后传","aria-hidden":"true"}},[t._v("#")]),t._v(" ResultBean不允许往后传")]),a("p",[t._v("ResultBean/PageResultBean是controller专用的，不允许往后传！往其他地方传之后，可读性立马下降，和传map，json好不了多少。")]),a("h2",{attrs:{id:"controller只做参数格式的转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller只做参数格式的转换","aria-hidden":"true"}},[t._v("#")]),t._v(" Controller只做参数格式的转换")]),a("p",[t._v("Controller做参数格式的转换，不允许把json，map这类对象传到services去，也不允许services返回json、map。写过代码都知道，map，json这种格式灵活，但是可读性差（\n编码一时爽，重构火葬场）。如果放业务数据，每次阅读起来都十分困难，需要从头到尾看完才知道里面有什么，是什么格式。定义一个bean看着工作量多了，但代码清晰多了。")]),a("h2",{attrs:{id:"参数不允许出现request，response-这些对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数不允许出现request，response-这些对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数不允许出现Request，Response 这些对象")]),a("p",[t._v("和json/map一样，主要是可读性差的问题。一般情况下不允许出现这些参数，除非要操作流。")]),a("h2",{attrs:{id:"不需要打印日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不需要打印日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 不需要打印日志")]),a("p",[t._v("日志在AOP里面会打印，而且我的建议是大部分日志在Services这层打印。")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("晓风轻建议")]),a("p",[t._v("Contorller只做参数格式转换，如果没有参数需要转换的，那么就一行代码。日志/参数校验/权限判断建议放到service里面，毕竟controller基本无法重用，而service重用较多。而我们的单元测试也不需要测试controller，直接测试service即可。")])]),a("p",[t._v("规范里面大部分是 "),a("strong",[t._v("不要做的项多，要做的比较少")]),t._v("，落地比较容易。")])])}],!1,null,null,null);s.default=o.exports}}]);