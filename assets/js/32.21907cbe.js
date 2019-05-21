(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(t,s,a){"use strict";a.r(s);var r=a(0),v=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"如何应对需求变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何应对需求变更","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何应对需求变更")]),a("p",[t._v("我之前的文章 程序员你为什么这么累？ 中，我个人观点是加班原因是编码质量占了大部分因素，但是不少同学都不认为是代码质量导致的加班，都认为是不断的需求改动导致的加班。这位同学，说的好像别人的需求就不会变动似的！谁的需求不改动啊？不改动的能叫需求吗？哈哈。")]),a("p",[t._v("先看个程序员的段子娱乐一下")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("客户被绑，蒙眼，惊问：“想干什么?”"),a("br"),t._v("对方不语，鞭笞之，客户求饶：“别打，要钱?”"),a("br"),t._v("又一鞭，“十万够不?”"),a("br"),t._v("又一鞭，“一百万?”"),a("br"),t._v("又一鞭。客户崩溃：“你们TMD到底要啥?”"),a("br"),t._v("“要什么?我帮你做项目，写代码的时候也很想知道你TMD到底想要啥!”"),a("br")])]),a("p",[t._v("有没有可能存在明确的、不再改动的需求呢？其实很难的。以前我们公司是瀑布开发模式，需求阶段时间较长，需要输出完整的需求规范，还要评审几次然后才进入开发，这个时候，需求变更就比较少，但还是有；后来公司赶时髦改成了敏捷开发模式，文档大量简化，于是需求没有考虑清楚就开始开发，需求是边开发边变动。"),a("strong",[t._v("敏捷开发模式间接变成了加班开发模式")]),t._v("。")]),a("p",[t._v("关于需求变动，"),a("strong",[t._v("不同的角色定义很不一样")]),t._v("。BA觉得这个改动很正常，开发人员觉得就是个需求变更，两边各执一词，这种矛盾长期存在。")]),a("p",[t._v("我列举几种场景，大家觉得算不算需求变更？")]),a("ol",[a("li",[t._v("删除对象功能")])]),a("p",[t._v("一开始只能创建者删除，后面变更为管理员也可以删除，再后面变更了某个角色也可以删除。")]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("配置功能")])]),a("p",[t._v("一开始使用xml配置，后面修改为json格式，又或者修改为使用数据库配置。")]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("导出功能")])]),a("p",[t._v("一开始导出为excel格式，后面变更为导出json格式或者pdf格式。或者一开始导出20个字段，后面变更为导出30个字段。")]),a("p",[t._v("这些当然都是变更了，但这些真的就是我们加班加点的原因吗？！我们就没有办法只能任人宰割吗？！而我的观点刚好是，"),a("strong",[t._v("正是因为需求变更不可避免，所以我们才更应该把代码写简单，以对付各种各样的需求变化")]),t._v("。有以下几点心得建议：")]),a("h2",{attrs:{id:"把代码写到最简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把代码写到最简单","aria-hidden":"true"}},[t._v("#")]),t._v(" 把代码写到最简单")]),a("p",[t._v("最起码的要求，我之前一系列的文章说的就是这个。重要程度不需要再讲了。改1行简单代码和改10行复杂代码，工作量能一样吗？！测试一个20行的函数和测试一个2行的函数工作量能一样吗？！")]),a("p",[t._v("好比一个房子，你打扫的干干净净收拾得井井有条，将来房子里面的东西搬来搬去都比较简单；但如果你的房子垃圾堆一样，走进去都难（代码无法看），就更加不用说把东西搬动了（改代码）。")]),a("h2",{attrs:{id:"把可能变化的封装成函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把可能变化的封装成函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 把可能变化的封装成函数")]),a("p",[t._v("请阅读：函数编写建议。很重要的习惯，多思考多抽象和封装，小变更将无法伤害到你。主动思考，主动思考将来可能的各种场景。其实这个不难，你只要有这个意识就成功了一大步！")]),a("h2",{attrs:{id:"先做确定的需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先做确定的需求","aria-hidden":"true"}},[t._v("#")]),t._v(" 先做确定的需求")]),a("p",[t._v("多个功能中先做不会变的功能，一个功能中先做不会变的部分，兵法中叫攻其必救之地。你要知道哪些需求是所有人都明白看上去就很合理的需求，就先开始做，你觉得有争议的需求你可以放后面一点。同样，一个功能中你要知道哪些会变的，哪些是不会变的，不变的先做。")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("晓风轻习惯")]),a("p",[t._v("需求实现先后顺序应该难的/确定的先做。先做难的是需要把周期拉长，更多的时间设计；先做确定的是为了避免频繁的改动。")])]),a("p",[t._v("举例：每个系统都有导出功能，"),a("strong",[t._v("我们实现功能之前，先要考虑哪些功能是确定的，哪些功能是很可能变化的")]),t._v("？简单分析之后可以知道，从数据库库查询出来然后处理包装数据这是肯定要做的而且不会变的，这个应该先做；而导出为什么格式（xls还是pdf），导出的具体完整字段，字段的格式如何展示这些是会变的，这些你开始甚至都不需要仔细看需求，等要做的时候在确认可能需求都有不同的变化。你完全可以边做前面确定的导出功能边确认其他的细节，确认需求的时间越多，需求就越清晰，变更的概率就越小。")]),a("p",[t._v("多个功能中，我的习惯是先做最难的功能，最少要开始设计和思考，拉长功能开发周期。有些同学喜欢先做简单的，导致难的问题开发周期不够，后面加班加点也解决不了。加班其实是解决不了太多问题的。")]),a("blockquote",[a("p",[t._v("拖延症的一个好处就是，很多需求拖着拖着就不用做了，因为提出人发现了这个需求的不合理。所以先做合理确定的需求。")])]),a("h2",{attrs:{id:"解耦！解耦！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解耦！解耦！","aria-hidden":"true"}},[t._v("#")]),t._v(" 解耦！解耦！")]),a("p",[t._v("个人认为，"),a("strong",[t._v("解耦是编程里面重要的思想，解耦的关键在于：多引入“第三者”，不要直接发生关系")]),t._v("。spring的IoC最重要的价值不就是解耦吗？spring的容器不就是“第三者”吗？就像mvc一样，数据和视图要彻底的分离，否则业务代码里面有视图代码改起来是很痛苦的。")]),a("p",[t._v("我上面的"),a("code",[t._v("配置规范")]),t._v("里面的举例，bean的定义就是第三者，就是为了解耦。如导出功能里面，也要有中介。不要把查询数据，处理数据和导出数据都在一个函数一个循环里面做了。否则导出格式由xls改成pdf的时候，你相当于重写做了一遍功能。jms这些基于消息的都是解耦的思想，架构设计上要多用这些松耦合的设计。")]),a("h2",{attrs:{id:"数据结构上要考虑扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构上要考虑扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据结构上要考虑扩展")]),a("p",[t._v("由于是牵涉到表设计的时候，大家都知道改表结构很痛苦。很多时候，由于时间关系，一开始只做简单的功能，后面会慢慢丰富功能。这虽然不是变更，但是如果你一开始的时候不设计好，很可能后面版本需要大改动，数据库表都要推倒重来，"),a("strong",[t._v("比全新做还痛苦")]),t._v("，相信大家会有体会。所以，"),a("strong",[t._v("作为开发组长，做任何一个功能都要想到将来的发展，功能现在可以不做，但必须对将来的变化做到了然于胸")]),t._v("。")]),a("p",[t._v("我举几个例子。")]),a("ul",[a("li",[t._v("下载功能")])]),a("p",[t._v("工作量问题当前版本只需要显示总下载量。你要考虑将来会不会要列出所有的下载过的用户？如果不需要，可能用一个字段记录总数就可以；如果需要，那么就要用新表，就算现在做起来麻烦一点也不要后面来推翻数据库表设计。")]),a("ul",[a("li",[t._v("关系表相关的功能")])]),a("p",[t._v("牵涉到link的，现在是1对1，要考虑将来有没有可能1对n或者n对n。1对1用个外键就可以了，否则一开始就单独用一张link表。")]),a("ul",[a("li",[t._v("系统集成")])]),a("p",[t._v("现在只对接一个系统，要考虑将来会不会相同的业务对接多个系统？如果会，你应该直接上jms这种（虽然工作量加大了），不上jms这种的话，也要设计成"),a("strong",[t._v("被动接受")]),t._v("的集成方式，那么在增加新系统你都不需要怎么样改。（如果你主动请求的交互方式，多一个系统你就要多一个配置，多测试一遍，如果设计成被动接受的，就不需要什么配置和测试了。而很多时候，2个系统集成设计成主动被动都可以实现需求）")]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),a("p",[t._v("其实，我上面说的这些，概括起来，就是要"),a("strong",[t._v("主动思考，多走一步，不要被动接受看到的需求，要对需求的将来变化做好心中有数")]),t._v("。当然，你可以说这些变更都是小变，大变怎么办？大变还不给你加工作量，你就走人不干了吧，哪里有这么无良的老板！")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("晓风轻提醒")]),a("p",[t._v("每一个开发人员都应该思考：需求变动真的是我加班的最重要原因吗？我的代码是否写得足够好？需求变更里面，我能控制是什么，我不能控制的是什么？我应该做好什么的准备来拥抱需求的变更？")])])])}],!1,null,null,null);s.default=v.exports}}]);