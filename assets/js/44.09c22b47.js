(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{86:function(r,a,t){"use strict";t.r(a);var e=t(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var r=this,a=r.$createElement,t=r._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm","aria-hidden":"true"}},[r._v("#")]),r._v(" jvm")]),t("h2",{attrs:{id:"card-table-write-barrier"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#card-table-write-barrier","aria-hidden":"true"}},[r._v("#")]),r._v(" card table / write barrier")]),t("p",[r._v("如果老年代的对象需要引用新生代的对象，会发生什么呢？")]),t("p",[r._v("为了解决这个问题，老年代中存在一个 card table ，它是一个512byte大小的块。所有老年代的对象指向新生代对象的引用都会被记录在这个表中。当针对新生代执行GC的时候，只需要查询 card table 来决定是否可以被回收，而"),t("strong",[r._v("不用查询整个老年代")]),r._v("。这个 card table 由一个 write barrier 来管理。write barrier 给GC带来了很大的性能提升，虽然由此可能带来一些开销，但完全是值得的。")]),t("h2",{attrs:{id:"伪共享-jdk8-注解和-jvm-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伪共享-jdk8-注解和-jvm-参数","aria-hidden":"true"}},[r._v("#")]),r._v(" 伪共享 jdk8 注解和 jvm 参数")]),t("h2",{attrs:{id:"反编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反编译","aria-hidden":"true"}},[r._v("#")]),r._v(" 反编译")]),t("p",[r._v("使用 "),t("code",[r._v("javap -c StringDemo.class")]),r._v(" 反编译看字节码。")])])}],!1,null,null,null);a.default=i.exports}}]);