import{_ as o,r as t,o as l,c as i,b as n,d as e,e as r,a as s}from"./app-599c9e37.js";const c={},p=s('<h1 id="javascript起步" tabindex="-1"><a class="header-anchor" href="#javascript起步" aria-hidden="true">#</a> JavaScript起步</h1><p>JavaScript 是一种脚本，一门编程语言，它可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，而是实时的内容更新，交互式的地图，2D/3D 动画，滚动播放的视频等等.它是标准 Web 技术蛋糕的第三层</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>JavaScript 语言核心之上所构建的功能更令人兴奋。应用程序接口（Application Programming Interfaces（<strong>API</strong>））将为你的代码提供额外的超能力。</p><p>API 是已经建立好的一套代码组件，可以让开发者实现原本很难甚至无法实现的程序。就像现成的家具套件之于家居建设，用一些已经切好的木板组装一个书柜，显然比自己设计，寻找合适的木材，裁切至合适的尺寸和形状，找到正确尺寸的螺钉，再组装成书柜要简单得多。</p><p>API 通常分为两类。<br><strong>浏览器 API</strong> 内建于 web 浏览器中，它们可以将数据从周边计算机环境中筛选出来，还可以做实用的复杂工作。例如：</p>',6),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.google.cn/maps",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API",target:"_blank",rel:"noopener noreferrer"},u={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.chromeexperiments.com/webgl",target:"_blank",rel:"noopener noreferrer"},b={href:"https://webglsamples.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery",target:"_blank",rel:"noopener noreferrer"},A={href:"http://chrisdavidmills.github.io/snapshot/",target:"_blank",rel:"noopener noreferrer"},I=n("p",null,[n("strong",null,"第三方 API"),e(" 并没有默认嵌入浏览器中，一般要从网上取得它们的代码和信息。比如：")],-1),P={href:"https://dev.twitter.com/overview/documentation",target:"_blank",rel:"noopener noreferrer"},w={href:"https://open.weibo.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://developers.google.com/maps/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://lbs.amap.com/",target:"_blank",rel:"noopener noreferrer"},z=s(`<h1 id="二-js输入输出语句" tabindex="-1"><a class="header-anchor" href="#二-js输入输出语句" aria-hidden="true">#</a> 二,JS输入输出语句</h1><ul><li>控制台输出：console.log() 打印日志</li><li>弹窗 :<code>alert(&#39;你好&#39;);</code></li><li>弹出输入框：prompt()语句 <code>prompt(&#39;请输入你的名字：&#39;);</code></li></ul><h1 id="三-js-书写位置" tabindex="-1"><a class="header-anchor" href="#三-js-书写位置" aria-hidden="true">#</a> 三,JS 书写位置</h1><ol><li><strong>行内式</strong>：写在标签内部。</li><li><strong>内嵌式</strong>（内联式）：写在 head 标签中。</li><li><strong>外链式</strong>：引入外部 JS 文件。</li></ol><h1 id="四-常量-字面量" tabindex="-1"><a class="header-anchor" href="#四-常量-字面量" aria-hidden="true">#</a> 四,常量（字面量）</h1><ul><li>数字常量（数值常量）</li><li>字符串常量</li><li>布尔常量</li><li>自定义常量</li></ul><h1 id="五-变量" tabindex="-1"><a class="header-anchor" href="#五-变量" aria-hidden="true">#</a> 五,变量</h1><p>变量是程序在内存中申请的一块用来存放数据的空间。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//ES5</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;江江&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 定义一个名为 name 的变量。name是变量名。</span>
<span class="token comment">//ES6</span>
<span class="token keyword">const</span> name <span class="token operator">=</span><span class="token string">&#39;江江&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 定义一个常量</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">// 定义一个变量</span>

<span class="token comment">//只声明，不赋值</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果：undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <br></h3><h1 id="六-变量命名规范" tabindex="-1"><a class="header-anchor" href="#六-变量命名规范" aria-hidden="true">#</a> 六,变量命名规范</h1><ul><li>由字母（A—Za—z）、数字（0—9）、下划线（）、美元符号（5）组成，如： usrAge， num01， name</li><li>严格区分大小写。var app；和var App；是两个变量</li><li>不能以数字开头。18age是错误的</li><li>不能是关键字、保留字。例如： var， for， while</li><li>变量名必须有意义。MMD BBD nl— age</li><li>遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。myFirstName推荐翻译网站：有道爱词霸</li><li>尽量不要使用 <code>name</code> 作为变量名</li></ul><h2 id="_1-标识符" tabindex="-1"><a class="header-anchor" href="#_1-标识符" aria-hidden="true">#</a> 1.标识符</h2><p><strong>标识符</strong>：在 JS 中所有的可以由我们<strong>自主命名</strong>的都可以称之为标识符。包括：<strong>变量名、函数名、属性名、参数名</strong>都是属于标识符。</p><h2 id="_2-关键字" tabindex="-1"><a class="header-anchor" href="#_2-关键字" aria-hidden="true">#</a> 2.关键字</h2><p><strong>关键字</strong>：被JS赋予了特殊含义的单词。也就是说，关键字是 JS 本身已经使用了的单词，我们不能再用它们充当变量名、函数名等标识符。关键字在开发工具中会显示特殊的颜色。</p><h2 id="_3-保留字" tabindex="-1"><a class="header-anchor" href="#_3-保留字" aria-hidden="true">#</a> 3.保留字</h2><p><strong>保留字</strong>：实际上就是预留的“关键字”。它们虽然现在还不是关键字，但是未来可能会成为关键字。同样不能用它们当充当变量名、函数名等标识符。</p>`,18);function C(M,N){const a=t("ExternalLinkIcon");return l(),i("div",null,[p,n("ul",null,[n("li",null,[n("a",d,[e("文档对象模型 API（DOM（Document Object Model）API）"),r(a)]),e(" 能通过创建、移除和修改 HTML，为页面动态应用新样式等手段来操作 HTML 和 CSS。比如当某个页面出现了一个弹窗，或者显示了一些新内容（像上文小 demo 中看到那样），这就是 DOM 在运行。")]),n("li",null,[n("a",h,[e("地理位置 API（Geolocation API）"),r(a)]),e(" 获取地理信息。这就是为什么 "),n("a",_,[e("谷歌地图"),r(a)]),e(" 可以找到你的位置，而且标示在地图上。")]),n("li",null,[n("a",m,[e("画布（Canvas）"),r(a)]),e(" 和 "),n("a",u,[e("WebGL"),r(a)]),e(" API 可以创建生动的 2D 和 3D 图像。人们正运用这些 web 技术制作令人惊叹的作品。参见 "),n("a",g,[e("Chrome Experiments"),r(a)]),e(" 以及 "),n("a",b,[e("webglsamples"),r(a)]),e("。")]),n("li",null,[e("诸如 "),n("a",v,[e("HTMLMediaElement"),r(a)]),e(" 和 "),n("a",f,[e("WebRTC"),r(a)]),e(" 等 "),n("a",k,[e("影音类 API"),r(a)]),e(" 让你可以利用多媒体做一些非常有趣的事，比如在网页中直接播放音乐和影片，或用自己的网络摄像头获取录像，然后在其他人的电脑上展示（试用简易版 "),n("a",A,[e("截图 demo"),r(a)]),e(" 以理解这个概念）。")])]),I,n("ul",null,[n("li",null,[n("a",P,[e("Twitter API"),r(a)]),e("、"),n("a",w,[e("新浪微博 API"),r(a)]),e(" 可以在网站上展示最新推文之类。")]),n("li",null,[n("a",x,[e("谷歌地图 API"),r(a)]),e("、"),n("a",S,[e("高德地图 API"),r(a)]),e(" 可以在网站嵌入定制的地图等等。")])]),z])}const j=o(c,[["render",C],["__file","00-JavaScript起步.html.vue"]]);export{j as default};
