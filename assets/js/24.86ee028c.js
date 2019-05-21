(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{108:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"日志打印"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志打印","aria-hidden":"true"}},[t._v("#")]),t._v(" 日志打印")]),n("p",[t._v("开发中日志这个问题，每个公司都强调，也制定了一大堆规范，但根据实际情况看，效果不是很明显，主要是这个东西不好测试和考核，没有日志功能一样跑啊。")]),n("p",[t._v("但编程活久见，开发久了，总会遇到“这个问题生产环境上能重现，但是没有日志，业务很复杂，不知道哪一步出错了？” 这个时候，怎么办？ 还能怎么办，发个版本，就是把所有地方加上日志，没有任何新功能，然后在让用户重现一遍，拿下日志来看，哦，原来是这个问题。")]),n("p",[t._v("有没有很熟悉的感觉？")]),n("p",[t._v("还有一种情况，我们系统有3*5=15个节点，出了问题找日志真是痛苦，一个一个机器翻，N分钟后终于找到了，找到了后发现好多相似日志，一个一个排查；日志有了，发现逻辑很复杂，不知道走到那个分支，只能根据逻辑分析，半天过去了，终于找到了原因。。。一个问题定位就过去了2个小时，变更时间过去了一半。。。")]),n("h2",{attrs:{id:"日志要求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志要求","aria-hidden":"true"}},[t._v("#")]),t._v(" 日志要求")]),n("p",[t._v("所以我对日志的最少有以下2点要求：")]),n("p",[t._v("1 能找到那个机器")]),n("p",[t._v("2 能找到用户做了什么")]),n("h2",{attrs:{id:"配置nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置nginx")]),n("p",[t._v("针对第一点，我修改了一下nginx的配置文件，让返回头里面返回是那个机器处理的。")]),n("p",[t._v("nginx的基本配置，大家查阅一下资料就知道。简单配置如下（生产环境比这个完善）")]),n("p",[n("img",{attrs:{src:a(58),alt:"nginx配置"}})]),n("p",[t._v("效果如图，返回了处理的节点：")]),n("p",[n("img",{attrs:{src:a(57),alt:"效果图"}})]),n("p",[t._v("第二点，要知道用户做了什么。用户信息是很重要的一个信息，能帮助海量日志里面能快速找到目标日志。一开始要求开发人员打印的时候带上用户，但是发现这个落地不容易，开发人员打印日志都经常忘记，更加不用说日志上加上用户信息，我也不可能天天看代码。所以找了一下log4j的配置，果然log4j有个叫MDC(Mapped Diagnostic Context)的类（技术上使用了ThreadLocal实现，重点技术）。具体使用方法请自行查询。具体使用如下：")]),n("h2",{attrs:{id:"userfilter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#userfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" UserFilter")]),n("p",[t._v("filter中得到用户信息，并放入MDC，记住filter后要清理掉（因为tomcat线程池线程重用的原因）。")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**"),n("br"),t._v(" * 用户信息相关的filter"),n("br"),t._v(" * "),n("br"),t._v(" * @author 晓风轻 https://xwjie.github.io/PLMCodeTemplate/"),n("br"),t._v(" *"),n("br"),t._v(" */")]),n("br"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("UserFilter")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Filter")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FilterConfig filterConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" ServletException "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("doFilter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ServletRequest request"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ServletResponse response"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("br"),t._v("      FilterChain chain"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" IOException"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ServletException "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// 得到用户个人相关的信息（登陆的用户，用户的语言）")]),n("br"),t._v("    "),n("span",{attrs:{class:"token function"}},[t._v("fillUserInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpServletRequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" request"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      chain"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("doFilter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      "),n("span",{attrs:{class:"token comment"}},[t._v("// 由于tomcat线程重用，记得清空")]),n("br"),t._v("      "),n("span",{attrs:{class:"token function"}},[t._v("clearAllUserInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("clearAllUserInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    UserUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("clearAllUserInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fillUserInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpServletRequest request"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// 用户信息")]),n("br"),t._v("    String user "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getUserFromSession")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      UserUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setUser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// 语言信息")]),n("br"),t._v("    String locale "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getLocaleFromCookies")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// 放入到threadlocal，同一个线程任何地方都可以拿出来")]),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locale "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      UserUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setLocale")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String "),n("span",{attrs:{class:"token function"}},[t._v("getLocaleFromCookies")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpServletRequest request"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    Cookie"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" cookies "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getCookies")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookies "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" cookies"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KEY_LANG"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("equals")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookies"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cookies"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getValue")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String "),n("span",{attrs:{class:"token function"}},[t._v("getUserFromSession")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpServletRequest request"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    HttpSession session "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getSession")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// 从session中获取用户信息放到工具类中")]),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" session"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KEY_USER"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("destroy")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br")])]),n("h2",{attrs:{id:"用户工具类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用户工具类","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户工具类")]),n("p",[t._v("用户信息放入MDC：")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**"),n("br"),t._v(" * 用户工具类"),n("br"),t._v(" * "),n("br"),t._v(" * @author 晓风轻 https://xwjie.github.io/PLMCodeTemplate/"),n("br"),t._v(" *"),n("br"),t._v(" */")]),n("br"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("UserUtil")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" ThreadLocal"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" tlUser "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ThreadLocal")]),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" ThreadLocal"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" tlLocale "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ThreadLocal")]),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" Locale "),n("span",{attrs:{class:"token function"}},[t._v("initialValue")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      "),n("span",{attrs:{class:"token comment"}},[t._v("// 语言的默认值")]),n("br"),t._v("      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CHINESE"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String KEY_LANG "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"lang"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String KEY_USER "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"user"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("setUser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String userid"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    tlUser"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userid"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// 把用户信息放到log4j")]),n("br"),t._v("    MDC"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KEY_USER"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userid"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("/**"),n("br"),t._v("   * 如果没有登录，返回null"),n("br"),t._v("   * "),n("br"),t._v("   * @return"),n("br"),t._v("   */")]),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" String "),n("span",{attrs:{class:"token function"}},[t._v("getUserIfLogin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tlUser"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("/**"),n("br"),t._v("   * 如果没有登录会抛出异常"),n("br"),t._v("   * "),n("br"),t._v("   * @return"),n("br"),t._v("   */")]),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" String "),n("span",{attrs:{class:"token function"}},[t._v("getUser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    String user "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tlUser"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("      "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("UnloginException")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("setLocale")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    "),n("span",{attrs:{class:"token function"}},[t._v("setLocale")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Locale")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("setLocale")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Locale locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    tlLocale"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Locale "),n("span",{attrs:{class:"token function"}},[t._v("getLocale")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tlLocale"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("br"),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("clearAllUserInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("    tlUser"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("remove")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("    tlLocale"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("remove")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("    MDC"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("remove")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KEY_USER"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br")])]),n("h2",{attrs:{id:"log4j配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#log4j配置","aria-hidden":"true"}},[t._v("#")]),t._v(" log4j配置")]),n("p",[t._v("增加用户信息变量，%X{user}")]),n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Appenders --\x3e")]),n("br"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("console"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.log4j.ConsoleAppender"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("br"),t._v("  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Target"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("System.out"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),n("br"),t._v("  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("layout")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.log4j.PatternLayout"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("br"),t._v("    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ConversionPattern"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("br"),t._v("      "),n("span",{attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[%t]%-d{MM-dd HH:mm:ss,SSS} %-5p:%X{user} - %c - %m%n"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),n("br"),t._v("  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("layout")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("br"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("appender")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("br")])]),n("h2",{attrs:{id:"日志要求-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志要求-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 日志要求")]),n("p",[t._v("我做好上面2步后，对开发人员的日志只有3点要求：")]),n("ol",[n("li",[t._v("修改（包括新增）操作必须打印日志")])]),n("p",[t._v("大部分问题都是修改导致的。数据修改必须有据可查。")]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("条件分支必须打印条件值，重要参数必须打印")])]),n("p",[t._v("尤其是分支条件的参数，打印后就不用分析和猜测走那个分支了，很重要！如下面代码里面的userType，一定要打印值，因为他"),n("strong",[t._v("决定了代码走那个分支")]),t._v("。")]),n("p",[n("img",{attrs:{src:a(56),alt:"log"}})]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("数据量大的时候需要打印数据量")])]),n("p",[t._v("前后打印日志和最后的数据量，主要用于分析性能，能从日志中知道查询了多少数据用了多久。这点是建议。自己视情况而决定是否打印，我一般建议打印。")]),n("h2",{attrs:{id:"日志效果图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志效果图","aria-hidden":"true"}},[t._v("#")]),t._v(" 日志效果图")]),n("p",[t._v("加上 我的编码习惯 - Controller规范 这篇文章的AOP，最后的日志如下：")]),n("p",[n("img",{attrs:{src:a(55),alt:"log"}})]),n("p",[t._v("其实日志的级别我到不是很关注，还没有到关注这步到时候。开发组长需要做好后勤工作（前面2步），然后制定简单规则，规则太多太能落实了。")]),n("h2",{attrs:{id:"新手建议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新手建议","aria-hidden":"true"}},[t._v("#")]),t._v(" 新手建议")]),n("p",[t._v("日志这个东西，更多是靠自觉，项目组这么多人，我也不可能一个一个给大家看代码，然后叫你加日志。我分析了一下，为什么有些人没有打印日志的习惯，说了多次都改不过来。我建议大家养成下面的习惯，这样你的日志就会改善多了！")]),n("p",[t._v("1.不要依赖debug，多依赖日志。")]),n("p",[t._v("别人面对对象编程，你面对debug编程。有些人无论什么语言，最后都变成了面对debug编程。哈哈。这个习惯非常非常不好！debug会让你写代码的时候偷懒不打日志，而且很浪费时间。改掉这个恶习。")]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("代码开发测试完成之后不要急着提交，先跑一遍看看日志是否看得懂。")])]),n("p",[t._v("日志是给人看的，只要热爱编程的人才能成为合格程序员，不要匆匆忙忙写完功能测试ok就提交代码，日志也是功能的一部分。要有精益求精的工匠精神！")])])}],o=a(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=r.exports},55:function(t,s,a){t.exports=a.p+"assets/img/log4.d61daa80.jpg"},56:function(t,s,a){t.exports=a.p+"assets/img/log3.f314b4d0.jpg"},57:function(t,s,a){t.exports=a.p+"assets/img/log2.20fea8e6.jpg"},58:function(t,s,a){t.exports=a.p+"assets/img/log1.059e5ab9.jpg"}}]);