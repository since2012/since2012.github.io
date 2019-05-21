(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{120:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"spring动态注入bean"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring动态注入bean","aria-hidden":"true"}},[t._v("#")]),t._v(" spring动态注入bean")]),n("h2",{attrs:{id:"使用的-registersingleton-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用的-registersingleton-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用的 registerSingleton 方法")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("registerBean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),n("br"),t._v("\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 获取BeanFactory")]),n("br"),t._v("\tDefaultListableBeanFactory defaultListableBeanFactory "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DefaultListableBeanFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ctx"),n("br"),t._v("\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getAutowireCapableBeanFactory")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 动态注册bean.")]),n("br"),t._v("\tdefaultListableBeanFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("registerSingleton")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br")])]),n("h2",{attrs:{id:"另外一种"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#另外一种","aria-hidden":"true"}},[t._v("#")]),t._v(" 另外一种")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("ApplicationContext ac "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" WebApplicationContextUtils"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getRequiredWebApplicationContext")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getServletContext")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("br"),t._v("ConfigurableApplicationContext context "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConfigurableApplicationContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ac"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("br"),n("span",{attrs:{class:"token comment"}},[t._v("//Bean的实例工厂  ")]),n("br"),t._v("DefaultListableBeanFactory dbf "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DefaultListableBeanFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getBeanFactory")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("br"),n("span",{attrs:{class:"token comment"}},[t._v("//Bean构建  BeanService.class 要创建的Bean的Class对象  ")]),n("br"),t._v("BeanDefinitionBuilder dataSourceBuider "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeanDefinitionBuilder"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("genericBeanDefinition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BeanService"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("br"),n("span",{attrs:{class:"token comment"}},[t._v("//向里面的属性注入值，提供get set方法  ")]),n("br"),t._v("dataSourceBuider"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addPropertyValue")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"msg"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"hello "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("br"),n("span",{attrs:{class:"token comment"}},[t._v('//dataSourceBuider.setParentName("");  同配置 parent  ')]),n("br"),n("span",{attrs:{class:"token comment"}},[t._v('//dataSourceBuider.setScope("");   同配置 scope  ')]),n("br"),n("span",{attrs:{class:"token comment"}},[t._v("//将实例注册spring容器中   bs 等同于  id配置  ")]),n("br"),t._v("dbf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("registerBeanDefinition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"bs"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataSourceBuider"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getBeanDefinition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("br")])]),n("blockquote",[n("p",[t._v('注要使用刚注册的 必须通过   getBean("xx")的方式 。这种方式还多用于在'),n("strong",[t._v("过滤器")]),t._v("中获取容器对象，因为spring不能为"),n("strong",[t._v("过滤器")]),t._v("注入任何属性")])]),n("h2",{attrs:{id:"另外一种方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#另外一种方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 另外一种方法")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("registerBean2")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Class"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" beanClass"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("br"),t._v("\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 获取BeanFactory")]),n("br"),t._v("\tDefaultListableBeanFactory defaultListableBeanFactory "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DefaultListableBeanFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ctx"),n("br"),t._v("\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getAutowireCapableBeanFactory")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 创建bean信息.")]),n("br"),t._v("\tBeanDefinitionBuilder beanDefinitionBuilder "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeanDefinitionBuilder"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("genericBeanDefinition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanClass"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("br"),t._v("\t"),n("span",{attrs:{class:"token comment"}},[t._v('// beanDefinitionBuilder.addPropertyValue("name","张三");')]),n("br"),n("br"),t._v("\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 动态注册bean.")]),n("br"),t._v("\tdefaultListableBeanFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("registerBeanDefinition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" beanDefinitionBuilder"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getBeanDefinition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("br"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("br")])])])}],!1,null,null,null);a.default=e.exports}}]);