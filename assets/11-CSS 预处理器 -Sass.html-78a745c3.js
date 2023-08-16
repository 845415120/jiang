import{_ as t,r as o,o as i,c as l,b as s,d as n,e,a as p}from"./app-03f59e97.js";const r={},c=s("h1",{id:"sass",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sass","aria-hidden":"true"},"#"),n(" Sass")],-1),d={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},u=p('<h2 id="什么是-css-预处理器" tabindex="-1"><a class="header-anchor" href="#什么是-css-预处理器" aria-hidden="true">#</a> 什么是 CSS 预处理器？</h2><p>CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题 例如你可以在 CSS 中使用<strong>变量</strong>、<strong>简单的逻辑程序</strong>、<strong>函数</strong> 可以让你的 CSS <strong>更加简洁</strong>、<strong>适应性更强</strong>、<strong>可读性更佳</strong>，<strong>更易于代码的维护</strong>等诸多好处</p><h2 id="sass-和-scss-有什么区别" tabindex="-1"><a class="header-anchor" href="#sass-和-scss-有什么区别" aria-hidden="true">#</a> Sass 和 SCSS 有什么区别？</h2><p>Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：</p><ol><li>文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名</li><li>语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(😉，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。</li></ol><h2 id="sass-scss-和纯-css-写法差很多吗" tabindex="-1"><a class="header-anchor" href="#sass-scss-和纯-css-写法差很多吗" aria-hidden="true">#</a> Sass/SCSS 和纯 CSS 写法差很多吗？</h2><p><strong>Sass 和 CSS 写法有差别：不带大括号</strong><strong>SCSS 和 CSS 写法无差别</strong></p><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="sass的安装" tabindex="-1"><a class="header-anchor" href="#sass的安装" aria-hidden="true">#</a> Sass的安装</h2><p>sass引擎是用Ruby语言开发的，因此在安装 Sass 前，需要先安装Ruby 下面来讲一下 Windows 下的安装Sass的步骤。</p><h3 id="第一步-安装ruby-windows环境" tabindex="-1"><a class="header-anchor" href="#第一步-安装ruby-windows环境" aria-hidden="true">#</a> 第一步：安装Ruby（windows环境）</h3>',11),v={href:"http://rubyinstaller.org/downloads/",target:"_blank",rel:"noopener noreferrer"},k=s("img",{src:"https://cdn.nlark.com/yuque/0/2023/png/34220974/1681638674576-af1303e7-cd3e-4ac2-ab10-91d8202cbbe3.png#averageHue=%23eeecea&clientId=ua27c65ad-8578-4&id=FfpNI&originHeight=398&originWidth=513&originalType=binary&ratio=1&rotation=0&showTitle=false&size=42024&status=done&style=none&taskId=u0626163e-7212-4ab1-8d06-17d141dbbf6&title=",alt:"image.png"},null,-1),m=s("code",null,"ruby -v",-1),b=s("img",{src:"https://cdn.nlark.com/yuque/0/2023/png/34220974/1681638674553-e9acbff1-4698-414b-b062-0c677819bf86.png#averageHue=%230e0d0d&clientId=ua27c65ad-8578-4&id=a991V&originHeight=162&originWidth=668&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24307&status=done&style=none&taskId=ubc867cc7-9d80-418f-b76d-4d91c5efcb2&title=",alt:"image.png"},null,-1),h=p(`<h3 id="第二步-安装-sass" tabindex="-1"><a class="header-anchor" href="#第二步-安装-sass" aria-hidden="true">#</a> 第二步：安装 Sass</h3><p>1、通过命令安装 Sass</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>gem install sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),g={href:"http://rubygems.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"http://rubygems.org/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://rubygems.org/gems/sass",target:"_blank",rel:"noopener noreferrer"},f={href:"http://rubygems.org/gems/sass%EF%BC%89%E4%B8%8B%E8%BD%BD%E4%B8%8B%E6%9D%A5%EF%BC%8C%E7%84%B6%E5%90%8E%E5%9C%A8%E5%91%BD%E4%BB%A4%E7%BB%88%E7%AB%AF%E8%BE%93%E5%85%A5%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},S=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>gem install <span class="token operator">&lt;</span>手功输入安装的文件路径<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看sass版本的命令为:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> sass -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>升级sass版本的命令为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> gem update sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>gem uninstall sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),j={href:"https://www.w3cplus.com/sassguide/install.html",target:"_blank",rel:"noopener noreferrer"},w=p('<h1 id="sass-语法格式" tabindex="-1"><a class="header-anchor" href="#sass-语法格式" aria-hidden="true">#</a> Sass 语法格式</h1><p>Sass 最初语法格式 缩进要求非常严格。另外其不带有任何的分号和大括号 注：这种语法格式对于前端人员都不太容易接受，而且容易出错。</p><h3 id="_1、scss语法格式" tabindex="-1"><a class="header-anchor" href="#_1、scss语法格式" aria-hidden="true">#</a> 1、SCSS语法格式</h3><p>SCSS 是 Sass 的新语法格式从外形上来判断他和 CSS 长得几乎是一模一样，代码都包裹在一对大括号里，并且末尾结束处都有一个分号。其文件名格式常常以“.scss”为扩展名。 “.sass”只能使用 Sass 老语法规则（缩进规则），“.scss”使用的是 Sass 的新语法规则，也就是 SCSS 语法规则（类似 CSS 语法格式）。</p><h1 id="sass-编译" tabindex="-1"><a class="header-anchor" href="#sass-编译" aria-hidden="true">#</a> Sass 编译</h1><p>常常有人会问，使用 Sass 进行开发，那么是不是直接通过“<link>”引用“.scss”或“.sass”文件呢？ 在项目中还是引用“.css”文件 Sass 只不过是做为一个预处理工具，提前帮你做事情，只有你需要时候，他才有攻效。 因为 Sass 开发之后，要让 Web 页面能调用 Sass 写好的东西，就得有这么一个过程，这个过程就称之为 Sass 编译过程。Sass 的编译有多种方法： 命令编译 GUI工具编译</p>',6),_={href:"http://koala-app.com/",target:"_blank",rel:"noopener noreferrer"},C={href:"http://compass.kkbox.com/",target:"_blank",rel:"noopener noreferrer"},$=p(`<p>自动化编译</p><h2 id="sass不同样式风格的输出方法" tabindex="-1"><a class="header-anchor" href="#sass不同样式风格的输出方法" aria-hidden="true">#</a> Sass不同样式风格的输出方法</h2><ol><li><strong>嵌套输出方式 nested</strong></li></ol><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642398479-aad8d9f3-d8ea-4cd5-85be-31e410229f12.png#averageHue=%23faf9f8&amp;clientId=ua27c65ad-8578-4&amp;from=paste&amp;id=u1b59ec66&amp;originHeight=296&amp;originWidth=488&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=50331&amp;status=done&amp;style=none&amp;taskId=u905c01e3-b93e-4c80-b093-bfbab50dcaf&amp;title=" alt="image.png"></p><ol start="2"><li><strong>展开输出方式 expanded</strong></li></ol><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642427300-5b65881d-6950-4326-b887-14ccfaa11f8a.png#averageHue=%23f9f8f6&amp;clientId=ua27c65ad-8578-4&amp;from=paste&amp;id=ubf5076bc&amp;originHeight=281&amp;originWidth=485&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=55842&amp;status=done&amp;style=none&amp;taskId=u0ee009d7-6d66-4d00-8922-ce40f09e777&amp;title=" alt="image.png"></p><ol start="3"><li><strong>紧凑输出方式 compact</strong></li></ol><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642459586-c7700781-e9fe-4362-b64d-4e0e645bec19.png#averageHue=%23faf9f8&amp;clientId=ua27c65ad-8578-4&amp;from=paste&amp;id=u35e83de6&amp;originHeight=299&amp;originWidth=802&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=60825&amp;status=done&amp;style=none&amp;taskId=u342b3101-378a-4959-9c47-836f47d192f&amp;title=" alt="image.png"></p><ol start="4"><li><strong>压缩输出方式 compressed</strong></li></ol><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642487857-4a6f4f71-1332-47bf-8af7-c533e542c2e4.png#averageHue=%23faf9f8&amp;clientId=ua27c65ad-8578-4&amp;from=paste&amp;id=ub961b43b&amp;originHeight=401&amp;originWidth=666&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=61955&amp;status=done&amp;style=none&amp;taskId=u56b284a3-1ab9-4089-9cb3-fd420d24a08&amp;title=" alt="image.png"></p><h1 id="sass的基本特性" tabindex="-1"><a class="header-anchor" href="#sass的基本特性" aria-hidden="true">#</a> Sass的基本特性</h1><h2 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量" aria-hidden="true">#</a> 声明变量</h2><p>定义变量的语法： 在有些编程语言中（如，JavaScript）声明变量都是使用关键词“var”开头，但是在 Sass 不使用这个关键词，而是使用大家都喜欢的美元符号“$”开头。我想用一张图来解释，我一直坚信，一图胜千言万语： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1681642729173-b79c51d0-e86c-495e-9cbc-04087f627f14.png#averageHue=%23b8d9ef&amp;clientId=ua27c65ad-8578-4&amp;from=paste&amp;id=uc2d8c39d&amp;originHeight=307&amp;originWidth=787&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=391833&amp;status=done&amp;style=none&amp;taskId=u8956ae3a-ffdc-4927-854f-655b4b855ef&amp;title=" alt="image.png"></p><h3 id="默认变量" tabindex="-1"><a class="header-anchor" href="#默认变量" aria-hidden="true">#</a> 默认变量</h3><p>sass 的默认变量仅需要在值后面加上 !default 即可。 sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">$baseLineHeight</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token literal-property property">$baseLineHeight</span><span class="token operator">:</span> <span class="token number">1.5</span> <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span>
body<span class="token punctuation">{</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> $baseLineHeight<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

编译后的css代码：
body<span class="token punctuation">{</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部变量和全局变量" tabindex="-1"><a class="header-anchor" href="#局部变量和全局变量" aria-hidden="true">#</a> 局部变量和全局变量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//SCSS</span>
<span class="token literal-property property">$color</span><span class="token operator">:</span> orange <span class="token operator">!</span><span class="token keyword">default</span><span class="token punctuation">;</span><span class="token comment">//定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)</span>
<span class="token punctuation">.</span>block <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> $color<span class="token punctuation">;</span><span class="token comment">//调用全局变量</span>
<span class="token punctuation">}</span>
em <span class="token punctuation">{</span>
  <span class="token literal-property property">$color</span><span class="token operator">:</span> red<span class="token punctuation">;</span><span class="token comment">//定义局部变量</span>
  a <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> $color<span class="token punctuation">;</span><span class="token comment">//调用局部变量</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
span <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> $color<span class="token punctuation">;</span><span class="token comment">//调用全局变量</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h2><p>Sass 的嵌套分为三种：</p><h3 id="选择器嵌套" tabindex="-1"><a class="header-anchor" href="#选择器嵌套" aria-hidden="true">#</a> 选择器嵌套</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>header<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>nav<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span>“##”<span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span>“##”<span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span>“##”<span class="token operator">&gt;</span>Blog<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>header<span class="token operator">&gt;</span>

<span class="token comment">//css:</span>
nav a <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

header nav a <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span>green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//Sass</span>
nav <span class="token punctuation">{</span>
  a <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>

    header <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span>green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性嵌套" tabindex="-1"><a class="header-anchor" href="#属性嵌套" aria-hidden="true">#</a> 属性嵌套</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>box <span class="token punctuation">{</span>
    border<span class="token operator">-</span>top<span class="token operator">:</span> 1px solid red<span class="token punctuation">;</span>
    border<span class="token operator">-</span>bottom<span class="token operator">:</span> 1px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

在 Sass 中我们可以这样写：
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">top</span><span class="token operator">:</span> 1px solid red<span class="token punctuation">;</span>
   <span class="token literal-property property">bottom</span><span class="token operator">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="伪类嵌套" tabindex="-1"><a class="header-anchor" href="#伪类嵌套" aria-hidden="true">#</a> 伪类嵌套</h3><p>其实伪类嵌套和属性嵌套非常类似，只不过他需要借助<code>&amp;</code>符号一起配合使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>clearfix<span class="token punctuation">{</span>
<span class="token operator">&amp;</span><span class="token operator">:</span>before<span class="token punctuation">,</span>
<span class="token operator">&amp;</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&amp;</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
    <span class="token literal-property property">clear</span><span class="token operator">:</span>both<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

编译出来的 <span class="token constant">CSS</span>：

<span class="token literal-property property">clearfix</span><span class="token operator">:</span>before<span class="token punctuation">,</span> <span class="token punctuation">.</span>clearfix<span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>clearfix<span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">clear</span><span class="token operator">:</span> both<span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合宏" tabindex="-1"><a class="header-anchor" href="#混合宏" aria-hidden="true">#</a> 混合宏</h2><p>当你的样式变得越来越复杂，需要重复使用大段的样式时，使用变量就无法达到我们目了。这个时候 Sass 中的混合宏就会变得非常有意义 在 Sass 中，使用“@mixin”来声明一个混合宏</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@mixin border<span class="token operator">-</span>radius<span class="token punctuation">{</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 @mixin 是用来声明混合宏的关键词，有点类似 CSS 中的 @media、@font-face 一样。border-radius 是混合宏的名称。大括号里面是复用的样式代码。</p><h3 id="带参数混合宏" tabindex="-1"><a class="header-anchor" href="#带参数混合宏" aria-hidden="true">#</a> 带参数混合宏</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@mixin border<span class="token operator">-</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">$radius</span><span class="token operator">:</span>5px</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> $radius<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> $radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂的混合宏" tabindex="-1"><a class="header-anchor" href="#复杂的混合宏" aria-hidden="true">#</a> 复杂的混合宏</h3><p>你可以在大括号里面写上带有逻辑关系</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@mixin box<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span><span class="token parameter">$shadow<span class="token operator">...</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  @<span class="token keyword">if</span> <span class="token function">length</span><span class="token punctuation">(</span>$shadow<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
    @include <span class="token function">prefixer</span><span class="token punctuation">(</span>box<span class="token operator">-</span>shadow<span class="token punctuation">,</span> $shadow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> @<span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token literal-property property">$shadow</span><span class="token operator">:</span><span class="token number">0</span> <span class="token number">0</span> 4px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    @include <span class="token function">prefixer</span><span class="token punctuation">(</span>box<span class="token operator">-</span>shadow<span class="token punctuation">,</span> $shadow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用混合宏" tabindex="-1"><a class="header-anchor" href="#调用混合宏" aria-hidden="true">#</a> 调用混合宏</h3><p>在 Sass 中通过 @mixin 关键词声明了一个混合宏，那么在实际调用中，其匹配了一个关键词“@include”来调用声明好的混合宏。 例如在你的样式中定义了一个圆角的混合宏“border-radius”:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@<span class="token function">mixin</span> <span class="token punctuation">(</span>声明<span class="token punctuation">)</span> border<span class="token operator">-</span>radius<span class="token punctuation">{</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
在一个按钮中要调用定义好的混合宏“border<span class="token operator">-</span>radius”，可以这样使用：

button <span class="token punctuation">{</span>
    @<span class="token function">include</span> <span class="token punctuation">(</span>调用<span class="token punctuation">)</span> border<span class="token operator">-</span>radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

这个时候编译出来的 <span class="token constant">CSS</span><span class="token operator">:</span>
button <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传参" tabindex="-1"><a class="header-anchor" href="#传参" aria-hidden="true">#</a> 传参</h3><p>Sass 的混合宏有一个强大的功能，可以传参，那么在 Sass 中传参主要有以下几种情形：</p><h4 id="传一个不带值的参数" tabindex="-1"><a class="header-anchor" href="#传一个不带值的参数" aria-hidden="true">#</a> 传一个不带值的参数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@mixin border<span class="token operator">-</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token parameter">$radius</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> $radius<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> $radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  @include border<span class="token operator">-</span><span class="token function">radius</span><span class="token punctuation">(</span>3px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

编译出来的 <span class="token constant">CSS</span><span class="token operator">:</span>
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传一个带值的参数" tabindex="-1"><a class="header-anchor" href="#传一个带值的参数" aria-hidden="true">#</a> 传一个带值的参数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@mixin border<span class="token operator">-</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">$radius</span><span class="token operator">:</span>3px</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> $radius<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> $radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  @include border<span class="token operator">-</span>radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

编译出来的 <span class="token constant">CSS</span><span class="token operator">:</span>
<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传多个参数" tabindex="-1"><a class="header-anchor" href="#传多个参数" aria-hidden="true">#</a> 传多个参数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@mixin <span class="token function">center</span><span class="token punctuation">(</span><span class="token parameter">$width<span class="token punctuation">,</span>$height</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">.</span>box<span class="token operator">-</span>center <span class="token punctuation">{</span>
  @include <span class="token function">center</span><span class="token punctuation">(</span>500px<span class="token punctuation">,</span>300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  有一个特别的参数“…”。当混合宏传的参数过多之时，可以使用参数来替代，如：
@mixin box<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span><span class="token parameter">$shadows<span class="token operator">...</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合宏的不足" tabindex="-1"><a class="header-anchor" href="#混合宏的不足" aria-hidden="true">#</a> 混合宏的不足</h3><p>混合宏在实际编码中给我们带来很多方便之处，特别是对于复用重复代码块。但其最大的不足之处是会生成冗余的代码块。比如在不同的地方调用一个相同的混合宏时。如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@mixin border<span class="token operator">-</span>radius<span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  @include border<span class="token operator">-</span>radius<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  @include border<span class="token operator">-</span>radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
示例在“<span class="token punctuation">.</span>box”和“<span class="token punctuation">.</span>btn”中都调用了定义好的“border<span class="token operator">-</span>radius”混合宏。先来看编译出来的 <span class="token constant">CSS</span>：
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例明显可以看出，Sass 在调用相同的混合宏时，并不能智能的将相同的样式代码块合并在一起。这也是 Sass 的混合宏最不足之处。</p><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1681645555088-15389b50-ada3-4be1-9e64-1a77003ab8b0.png#averageHue=%23f7f6f6&amp;clientId=ua27c65ad-8578-4&amp;from=paste&amp;id=u3cde16a7&amp;originHeight=449&amp;originWidth=791&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=244191&amp;status=done&amp;style=none&amp;taskId=u553a3582-a4d1-4be8-8e89-d7fee312b9f&amp;title=" alt="image.png"> 图中代码显示“.col-sub .block li,.col-extra .block li” 继承了 “.item-list ul li”选择器的 “padding : 0;” 和 “ul li” 选择器中的 “list-style : none outside none;”以及 * 选择器中的 “box-sizing:inherit;”。</p><p>在 Sass 中也具有继承一说，也是继承类中的样式代码块。在 Sass 中是通过关键词 “@extend”来继承已存在的类样式块，从而实现代码的继承</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//SCSS</span>
<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 6px 10px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn<span class="token operator">-</span>primary <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f36<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  @extend <span class="token punctuation">.</span>btn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn<span class="token operator">-</span>second <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> orange<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  @extend <span class="token punctuation">.</span>btn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//CSS</span>
<span class="token punctuation">.</span>btn<span class="token punctuation">,</span> <span class="token punctuation">.</span>btn<span class="token operator">-</span>primary<span class="token punctuation">,</span> <span class="token punctuation">.</span>btn<span class="token operator">-</span>second <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 6px 10px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="占位符" tabindex="-1"><a class="header-anchor" href="#占位符" aria-hidden="true">#</a> 占位符 %</h2><p>% 声明的代码，如果不被 @extend 调用的话，不会产生任何代码。来看一个演示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">%</span>mt5 <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">%</span>pt5<span class="token punctuation">{</span>
  padding<span class="token operator">-</span>top<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
只有通过 @extend 调用才会产生代码：
<span class="token comment">//SCSS</span>
<span class="token operator">%</span>mt5 <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">%</span>pt5<span class="token punctuation">{</span>
  padding<span class="token operator">-</span>top<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  @extend <span class="token operator">%</span>mt5<span class="token punctuation">;</span>
  @extend <span class="token operator">%</span>pt5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>block <span class="token punctuation">{</span>
  @extend <span class="token operator">%</span>mt5<span class="token punctuation">;</span>

  span <span class="token punctuation">{</span>
    @extend <span class="token operator">%</span>pt5<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//CSS</span>
<span class="token punctuation">.</span>btn<span class="token punctuation">,</span> <span class="token punctuation">.</span>block <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn<span class="token punctuation">,</span> <span class="token punctuation">.</span>block span <span class="token punctuation">{</span>
  padding<span class="token operator">-</span>top<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 @extend 调用的占位符，编译出来的代码会将相同的代码合并在一起。这也是我们希望看到的效果，也让你的代码变得更为干净。</p><h1 id="混合宏-vs-继承-vs-占位符" tabindex="-1"><a class="header-anchor" href="#混合宏-vs-继承-vs-占位符" aria-hidden="true">#</a> 混合宏 VS 继承 VS 占位符</h1><p>什么时候用混合宏，什么时候用继承，什么时候使用占位符？ <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1681646070278-d9b79400-7398-4ac4-8384-3b4dc86c054c.png#averageHue=%23d8d7d7&amp;clientId=ua27c65ad-8578-4&amp;from=paste&amp;id=u1527bcef&amp;originHeight=364&amp;originWidth=794&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=36443&amp;status=done&amp;style=none&amp;taskId=u91d1e7e8-7868-4fe0-9bb2-0b1a5ce8129&amp;title=" alt="image.png"></p><h2 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值#{}</h2><p>使用 CSS 预处理器语言的一个主要原因是想使用 Sass 获得一个更好的结构体系。比如说你想写更干净的、高效的和面向对象的 CSS。Sass 中的插值(Interpolation)就是重要的一部分。让我们看一下下面的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">$properties</span><span class="token operator">:</span> <span class="token punctuation">(</span>margin<span class="token punctuation">,</span> padding<span class="token punctuation">)</span><span class="token punctuation">;</span>
@mixin set<span class="token operator">-</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">$side<span class="token punctuation">,</span> $value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    @each $prop <span class="token keyword">in</span> $properties <span class="token punctuation">{</span>
        #<span class="token punctuation">{</span>$prop<span class="token punctuation">}</span><span class="token operator">-</span>#<span class="token punctuation">{</span>$side<span class="token punctuation">}</span><span class="token operator">:</span> $value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>box <span class="token punctuation">{</span>
    @include set<span class="token operator">-</span><span class="token function">value</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> 14px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

它可以让变量和属性工作的很完美，上面的代码编译成 <span class="token constant">CSS</span>：
<span class="token punctuation">.</span>login<span class="token operator">-</span>box <span class="token punctuation">{</span>
    margin<span class="token operator">-</span>top<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
    padding<span class="token operator">-</span>top<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sass注释" tabindex="-1"><a class="header-anchor" href="#sass注释" aria-hidden="true">#</a> Sass注释</h2><p>1、类似 CSS 的注释方式，使用 ”/<em>”开头，结属使用 ”</em>/ ” 2、类似 JavaScript 的注释方式，使用“//” 两者区别，前者会在编译出来的 CSS 显示，后者在编译出来的 CSS 中不会显示</p><h2 id="sass-数据类型" tabindex="-1"><a class="header-anchor" href="#sass-数据类型" aria-hidden="true">#</a> [Sass]数据类型</h2><p>Sass 和 JavaScript 语言类似，也具有自己的数据类型，在 Sass 中包含以下几种数据类型：</p><ul><li>数字: 如，1、 2、 13、 10px；</li><li>字符串：有引号字符串或无引号字符串，如，&quot;foo&quot;、 &#39;bar&#39;、 baz；</li><li>颜色：如，blue、 #04a3f9、 rgba(255,0,0,0.5)；</li><li>布尔型：如，true、 false；</li><li>空值：如，null；</li><li>值列表：用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-serif。</li></ul><h2 id="sass-字符串" tabindex="-1"><a class="header-anchor" href="#sass-字符串" aria-hidden="true">#</a> [Sass]字符串</h2>`,70),q={href:"http://sass-lang.com'",target:"_blank",rel:"noopener noreferrer"},H=p(`<h2 id="sass-值列表" tabindex="-1"><a class="header-anchor" href="#sass-值列表" aria-hidden="true">#</a> [Sass]值列表</h2><p>所谓值列表 (lists) 是指 Sass 如何处理 CSS 中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">margin</span><span class="token operator">:</span> 10px 15px <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>font<span class="token operator">-</span>face<span class="token operator">:</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>像上面这样通过空格或者逗号分隔的一系列的值。 事实上，独立的值也被视为值列表——只包含一个值的值列表。 Sass列表函数（Sass list functions）赋予了值列表更多功能（Sass进级会有讲解）：</p><ol><li>nth函数（nth function） 可以直接访问值列表中的某一项；</li><li>join函数（join function） 可以将多个值列表连结在一起；</li><li>append函数（append function） 可以在值列表中添加值；</li><li>@each规则（@each rule） 则能够给值列表中的每个项目添加样式。</li></ol><h1 id="sass运算" tabindex="-1"><a class="header-anchor" href="#sass运算" aria-hidden="true">#</a> Sass运算</h1><p>程序中的运算是常见的一件事情，但在 CSS 中能做运算的，到目前为止仅有 calc() 函数可行。但在 Sass 中，运算只是其基本特性之一。</p><h2 id="加法-减法" tabindex="-1"><a class="header-anchor" href="#加法-减法" aria-hidden="true">#</a> 加法/减法</h2><p>加法运算是 Sass 中运算中的一种，在变量或属性中都可以做加法运算。如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 20px <span class="token operator">+</span> 8in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

编译出来的 <span class="token constant">CSS</span><span class="token operator">:</span>
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 788px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

但对于携带不同类型的单位时，在 Sass 中计算会报错，如下例所示：
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 20px <span class="token operator">+</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
编译的时候，编译器会报错：“Incompatible units<span class="token operator">:</span> <span class="token string">&#39;em&#39;</span> and ‘px&#39;<span class="token punctuation">.</span>”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="乘法" tabindex="-1"><a class="header-anchor" href="#乘法" aria-hidden="true">#</a> 乘法</h2><p>Sass 中的乘法运算和前面介绍的加法与减法运算还略有不同。虽然他也能够支持多种单位（比如 em ,px , %），但当一个单位同时声明两个值时会有问题。比如下面的示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span>10px <span class="token operator">*</span> 2px<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
编译的时候报“20px<span class="token operator">*</span>px isn&#39;t a valid <span class="token constant">CSS</span> value<span class="token punctuation">.</span>”错误信息。

如果进行乘法运算时，两个值单位相同时，只需要为一个数值提供单位即可。上面的示例可以修改成：
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 10px <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

编译出来的 <span class="token constant">CSS</span><span class="token operator">:</span>
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

但对于携带不同类型的单位时，在 Sass 中计算会报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="除法" tabindex="-1"><a class="header-anchor" href="#除法" aria-hidden="true">#</a> 除法</h2><p>Sass 的乘法运算规则也适用于除法运算。不过除法运算还有一个特殊之处。众所周知“<strong>/</strong>”符号在 CSS 中已做为一种符号使用。因此在 Sass 中做除法运算时，直接使用“/”符号做为除号时，将不会生效，编译时既得不到我们需要的效果，也不会报错。一起先来看一个简单的示例： 给运算的外面添加一个小括号( )</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">(</span>100px <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

编译出来的 <span class="token constant">CSS</span> 如下：
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面情况带有小括号，“/”符号会当作除法运算符之外，如果“/”符号在已有的数学表达式中时，也会被认作除法符号。如下面示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> 2in<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
编译出来的<span class="token constant">CSS</span>：

<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 242px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，在 Sass 除法运算中，当用变量进行除法运算时，“/”符号也会自动被识别成除法，如下例所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">$width</span><span class="token operator">:</span> 1000px<span class="token punctuation">;</span>
<span class="token literal-property property">$nums</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token punctuation">.</span>item <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> $width <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>list <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> $width <span class="token operator">/</span> $nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
编译出来的<span class="token constant">CSS</span><span class="token operator">:</span>

<span class="token punctuation">.</span>item <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>list <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综合上述，”/ ”符号被当作除法运算符时有以下几种情况： • 如果数值或它的任意部分是存储在一个变量中或是函数的返回值。 • 如果数值被圆括号包围。 • 如果数值是另一个数学表达式的一部分。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//SCSS</span>
p <span class="token punctuation">{</span>
  <span class="token literal-property property">font</span><span class="token operator">:</span> 10px<span class="token operator">/</span>8px<span class="token punctuation">;</span>             <span class="token comment">// 纯 CSS，不是除法运算</span>
  <span class="token literal-property property">$width</span><span class="token operator">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> $width<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>            <span class="token comment">// 使用了变量，是除法运算</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>        <span class="token comment">// 使用了函数，是除法运算</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">(</span>500px<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 使用了圆括号，是除法运算</span>
  margin<span class="token operator">-</span>left<span class="token operator">:</span> 5px <span class="token operator">+</span> 8px<span class="token operator">/</span>2px<span class="token punctuation">;</span> <span class="token comment">// 使用了加（+）号，是除法运算</span>
<span class="token punctuation">}</span>

编译出来的<span class="token constant">CSS</span>
p <span class="token punctuation">{</span>
  <span class="token literal-property property">font</span><span class="token operator">:</span> 10px<span class="token operator">/</span>8px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>left<span class="token operator">:</span> 9px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sass 的除法运算还有一个情况。我们先回忆一下，在乘法运算时，如果两个值带有相同单位时，做乘法运算时，出来的结果并不是我们需要的结果。但在除法运算时，如果两个值带有相同的单位值时，除法运算之后会得到一个不带单位的数值。如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">(</span>1000px <span class="token operator">/</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
编译出来的<span class="token constant">CSS</span>如下：
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量计算" tabindex="-1"><a class="header-anchor" href="#变量计算" aria-hidden="true">#</a> 变量计算</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$content<span class="token operator">-</span>width<span class="token operator">:</span> 720px<span class="token punctuation">;</span>
$sidebar<span class="token operator">-</span>width<span class="token operator">:</span> 220px<span class="token punctuation">;</span>
<span class="token literal-property property">$gutter</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>

<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> $content<span class="token operator">-</span>width <span class="token operator">+</span> $sidebar<span class="token operator">-</span>width <span class="token operator">+</span> $gutter<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

编译出来的<span class="token constant">CSS</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 960px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色运算" tabindex="-1"><a class="header-anchor" href="#颜色运算" aria-hidden="true">#</a> 颜色运算</h2><p>所有算数运算都支持颜色值，并且是分段运算的。也就是说，红、绿和蓝各颜色分段单独进行运算。如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>p <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">010203</span> <span class="token operator">+</span> #<span class="token number">040506</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符运算" tabindex="-1"><a class="header-anchor" href="#字符运算" aria-hidden="true">#</a> 字符运算</h2><p>在 Sass 中可以通过加法符号“+”来对字符串进行连接。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">$content</span><span class="token operator">:</span> <span class="token string">&quot;Hello&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;Sass!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span>box<span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot; #{$content} &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

编译出来的<span class="token constant">CSS</span>：
<span class="token punctuation">.</span>box<span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot; Hello Sass! &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以直接通过 +，把字符连接在一起：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> e <span class="token operator">+</span> <span class="token operator">-</span>resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

编译出来的<span class="token constant">CSS</span><span class="token operator">:</span>
div <span class="token punctuation">{</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> e<span class="token operator">-</span>resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串 通过 + 拼接 结果转换为前一个字符串形式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">p</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Foo &quot;</span> <span class="token operator">+</span> Bar<span class="token punctuation">;</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span> <span class="token operator">+</span> <span class="token string">&quot;serif&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

编译出来的 <span class="token constant">CSS</span>：
<span class="token literal-property property">p</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Foo Bar&quot;</span><span class="token punctuation">;</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function I(B,E){const a=o("ExternalLinkIcon");return i(),l("div",null,[c,s("p",null,[s("a",d,[n("Sass: Syntactically Awesome Style Sheets"),e(a)])]),u,s("p",null,[n("下载地址："),s("a",v,[n("http://rubyinstaller.org/downloads/"),e(a)]),n(" 貌似网络很慢，不一定能下载成功~ 安装时，记得勾选“环境变量”： "),k,n(" 安装完ruby之后，在命令行中输入"),m,n("，查看ruby的的版本： "),b]),h,s("p",null,[n("2.本地安装 Sass 可以到 "),s("a",g,[n("Rubygems"),e(a)]),n("("),s("a",x,[n("http://rubygems.org/"),e(a)]),n(") 网站上将 "),s("a",y,[n("Sass 的安装包"),e(a)]),n("（"),s("a",f,[n("http://rubygems.org/gems/sass）下载下来，然后在命令终端输入："),e(a)])]),S,s("p",null,[n("参考链接："),s("a",j,[n("https://www.w3cplus.com/sassguide/install.html"),e(a)])]),w,s("ol",null,[s("li",null,[n("Koala ("),s("a",_,[n("http://koala-app.com/"),e(a)]),n(")")]),s("li",null,[n("Compass.app（"),s("a",C,[n("http://compass.kkbox.com/"),e(a)]),n("）")])]),$,s("p",null,[n(`支持 CSS 的两种字符串类型： 有引号字符串 (quoted strings)，如 "Lucida Grande" 、'`),s("a",q,[n("http://sass-lang.com'"),e(a)]),n("； 无引号字符串 (unquoted strings)，如 sans-serifbold。")]),H])}const z=t(r,[["render",I],["__file","11-CSS 预处理器 -Sass.html.vue"]]);export{z as default};
