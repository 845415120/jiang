import{_ as a,o as n,c as s,a as t}from"./app-599c9e37.js";const e={},p=t(`<h2 id="css简介" tabindex="-1"><a class="header-anchor" href="#css简介" aria-hidden="true">#</a> CSS简介</h2><p>CSS是层叠样式表（CascadingStyleSheets）的简称。<br>CSS也是一种标记语言。<br>CSS主要用于设置HTML页面中的文本内容（字体、大小、对齐方式）、图片的外形（宽高、边框样式、边距等）以及版面的布局和外观显示样式。·<br>HTML呈现结构，CSS决定样式，结构与样式分离。</p><h2 id="css-引用方式" tabindex="-1"><a class="header-anchor" href="#css-引用方式" aria-hidden="true">#</a> CSS 引用方式</h2><p>按照 CSS 书写的位置不同，CSS 样式表可以分为三大类：</p><ol><li>行内样式表（行内式）</li><li>内部样式表（嵌入式）</li><li>外部样式表（链接式）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div style=&quot;color: red; font-size: 12px&quot;&gt;行内样式表&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>外部样式表（链接式）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;css文件路径&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="css基础选择器" tabindex="-1"><a class="header-anchor" href="#css基础选择器" aria-hidden="true">#</a> CSS基础选择器</h1><p>基础选择器包括：标签选择器、类选择器、id选择器和通配符选择器</p><h3 id="标签选择器" tabindex="-1"><a class="header-anchor" href="#标签选择器" aria-hidden="true">#</a> 标签选择器</h3><p>直接用HTML标签名作为选择器，按标签名称分类，<strong>为页面某一类标签指定统一的CSS样式。</strong><br>语法</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>标签名 {
    属性1： 属性值1;
    属性2： 属性值2;
    属性3： 属性值3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点<br>标签选择器可以把某一标签全部选择出来，快速为同类型标签设置统一样式。<br>缺点<br>不能设置差异化样式，只能选择全部当前标签。</p><h3 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h3><p>差异化选择不同标签，单独选一个或者某个标签。<br>语法<br>使用<code>class</code>属性来调用class类，样式点定义，结构类调用，一个或多个，开发最常用。<br>类选择器用<code>.</code>号显示。<br>注意</p><ol><li>类选择器用<code>.</code>标识，紧跟类名。</li><li>小写，使用<code>-</code>连接单词。</li><li>不要用纯数字、中文。</li><li>命名有意义。</li></ol><h4 id="类选择器-多类名" tabindex="-1"><a class="header-anchor" href="#类选择器-多类名" aria-hidden="true">#</a> 类选择器-多类名</h4><p>类名间用空格分开</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>class-name1 class-name2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> id选择器</h3><p>id选择器可以为标有特定id的HTML元素指定特定的样式。<br>HTML元素以id属性来设置id选择器，用<code>#</code>来定义。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>#id名 {
    属性1: 属性值1;
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样式<code>#</code>定义，结构id调用，别人切勿使用。<br>id选择器与类选择器的区别</p><ol><li>类选择器可以被多个元素调用。</li><li>id选择器只能允许一个标签调用。</li><li>类选择器使用的较多，id选择器用于唯一特性的标签。</li></ol><h3 id="通配符选择器" tabindex="-1"><a class="header-anchor" href="#通配符选择器" aria-hidden="true">#</a> 通配符选择器</h3><p>语法</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>* {
    属性1: 属性值1;
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用<code>*</code>定义通配符选择器，选取页面中所有标签。</li><li>不需要调用，自动给所有标签。</li><li>特殊情况使用</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>* {
    margin: 0;
    padding: 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="css复合选择器" tabindex="-1"><a class="header-anchor" href="#css复合选择器" aria-hidden="true">#</a> CSS复合选择器</h1><p>由基础选择器组合而成,复合选择器总结</p><table><thead><tr><th>选择器</th><th>作用</th><th>特征</th><th>使用情况</th><th>隔开符号及用法</th></tr></thead><tbody><tr><td>后代选择器</td><td>用来选择后代元素</td><td>可以是子孙后代</td><td>较多</td><td>符号是空格 <code>.nav a</code></td></tr><tr><td>子代选择器</td><td>选择最近一级元素</td><td>只能选亲儿子</td><td>较少</td><td>符号是大于 <code>.nav&gt;p</code></td></tr><tr><td>并集选择器</td><td>选择某些相同样式的元素</td><td>可以用于集体声明</td><td>较多</td><td>符号是逗号，<code>.nav, a</code></td></tr><tr><td>链接伪类选择器</td><td>选择不同状态的链接</td><td>跟链接相关</td><td>较多</td><td>重点记住<code>a{}</code><br>和<code>a:hover{}</code></td></tr><tr><td>:focus 选择器</td><td>选择获得光标的表单</td><td>跟表单相关</td><td>较少</td><td>记住<code>input:focus</code><br>用法</td></tr></tbody></table><h3 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器" aria-hidden="true">#</a> 后代选择器</h3><p>后代选择器又称为包含选择器，可以选择父元素里的子元素。写法是将外层标签写在前面，内层标签写在后面，中间空格分开。<br><strong>语法</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">元素1 元素2</span> <span class="token punctuation">{</span> 样式声明<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>上述语法表示选择元素 1 里面所有的元素 2</li><li>可以连续嵌套，比如可以是孙子等</li><li>元素 1、2 可以是任何基础标签</li></ul><h3 id="子选择器" tabindex="-1"><a class="header-anchor" href="#子选择器" aria-hidden="true">#</a> 子选择器</h3><p>子元素选择器（子选择器）只能选择作为元素作为元素的最近一级子元素。简单理解就是选亲儿子。<br><strong>语法</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">元素1 &gt; 元素2</span> <span class="token punctuation">{</span> 样式声明<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>元素之间用大于号 <code>&gt;</code> 隔开</li><li>1 为父级。二为子级，最终选择的是元素 2</li><li>元素 2 必须是亲儿子。</li></ul><h3 id="并集选择器" tabindex="-1"><a class="header-anchor" href="#并集选择器" aria-hidden="true">#</a> 并集选择器</h3><p>并集选择器可以选择多组标签，同时为他们定义相同的样式。通常用于集体声明。<br>并集选择器是各选择器通过英文逗号 <code>,</code> 连接而成，任何形式的选择器都可以作为并集选择器的一部分。<br><strong>语法</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">元素1, 元素2</span> <span class="token punctuation">{</span> 样式声明<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h3><p>伪类选择器用于向某些选择器添加特殊的效果。<br>伪类选择器书写最大特点是用冒号 <code>:</code> 表示。<br>伪类选择器种类多，比如链接伪类选择器、结构选择器等。</p><h4 id="链接伪类选择器" tabindex="-1"><a class="header-anchor" href="#链接伪类选择器" aria-hidden="true">#</a> 链接伪类选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">a</span><span class="token punctuation">:</span>link <span class="token comment">/*选择所有未被访问的链接*/</span>
<span class="token property">a</span><span class="token punctuation">:</span>visited <span class="token comment">/*选择所有已被访问的链接*/</span>
<span class="token property">a</span><span class="token punctuation">:</span>hover <span class="token comment">/*选择鼠标指针位于其上的链接*/</span>
<span class="token property">a</span><span class="token punctuation">:</span>active <span class="token comment">/*选择活动链接（鼠标按下未弹起的链接）*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong></p><ol><li>确保样式生效，要按照 LVHA 的顺序声明：link,visited,hover, active。</li><li>a 链接在浏览器中有默认样式，所以实际开发都需要给链接单独指定样式。</li></ol><p><strong>开发中实际写法</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #369<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="focus-伪类选择器" tabindex="-1"><a class="header-anchor" href="#focus-伪类选择器" aria-hidden="true">#</a> focus 伪类选择器</h4><p><code>:focus</code> 伪类选择器用于获取焦点的表单元素。<br>焦点就是光标，一般情况 <code>&lt;input&gt;</code> 类表单元素才能获取，因此这个选择器也主要针对表单元素来说。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他标准伪类选择器" tabindex="-1"><a class="header-anchor" href="#其他标准伪类选择器" aria-hidden="true">#</a> 其他标准伪类选择器</h4><p>1.<code>first-child</code> <br><code>:first-child</code> 是 CSS 伪类，表示父元素的第一个子元素。<br>2. <code>last-child</code><br><code>:last-child</code> CSS 伪类 代表父元素的最后一个子元素。<br>3. <code>nth-child(n)</code>(odd) 匹配奇数 (even) 匹配偶数<br><code>:nth-child(an+b)</code> 这个 CSS 伪类首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从 1 开始排序，选择的结果为 CSS 伪类 <code>:nth-child</code>括号中表达式 <code>(an+b)</code> 匹配到的元素集合 <code>(n=0，1，2，3...)</code><br>4. <code>:not(p)</code><br><code>:not()</code> 用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）。</p><h3 id="css-伪元素选择器" tabindex="-1"><a class="header-anchor" href="#css-伪元素选择器" aria-hidden="true">#</a> CSS 伪元素选择器</h3><ol start="5"><li><code>::after (:after)</code><br> <code>::after</code> 用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合 <code>content</code> 属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素。</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.exciting-text::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;- 让人兴兴兴奋!&quot;</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们几乎可以用想要的任何方法给 <code>content</code> 属性里的文字和图片的加上样式.<br>6. <code>::before (:before)</code><br>CSS 中，<code>::before</code> 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 <code>content</code> 属性来为一个元素添加修饰性的内容。此元素默认为行内元素。<br>使用 <code>::before</code> 伪元素的一个简单示例就是用于加入引号。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q</span><span class="token punctuation">&gt;</span></span>一些引用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q</span><span class="token punctuation">&gt;</span></span>, 他说, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q</span><span class="token punctuation">&gt;</span></span>比没有好。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q</span><span class="token punctuation">&gt;</span></span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">q::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;«&quot;</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">q::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;»&quot;</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css3-选择器" tabindex="-1"><a class="header-anchor" href="#css3-选择器" aria-hidden="true">#</a> CSS3 选择器</h2><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3><p>属性选择器的标志性符号是 []。<br>格式：</p><h4 id="e-title-选中页面的e元素-并且e存在-title-属性即可" tabindex="-1"><a class="header-anchor" href="#e-title-选中页面的e元素-并且e存在-title-属性即可" aria-hidden="true">#</a> E[title] 选中页面的E元素，并且E存在 title 属性即可</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">img[alt]</span> <span class="token punctuation">{</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>图片url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>图片url<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
此例，将会命中第一张图片，因为匹配到了alt属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-title-abc-选中页面的e元素-并且e需要带有title属性-且属性值完全等于abc" tabindex="-1"><a class="header-anchor" href="#e-title-abc-选中页面的e元素-并且e需要带有title属性-且属性值完全等于abc" aria-hidden="true">#</a> E[title=&quot;abc&quot;]选中页面的E元素，并且E需要带有title属性，且属性值完全等于abc</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">input[type=&quot;text&quot;]</span> <span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-attr-val-选择具有-att-属性且属性值为-用空格分隔的字词列表-其中一个等于-val-的e元素" tabindex="-1"><a class="header-anchor" href="#e-attr-val-选择具有-att-属性且属性值为-用空格分隔的字词列表-其中一个等于-val-的e元素" aria-hidden="true">#</a> E[attr~=val] 选择具有 att 属性且属性值为：用空格分隔的字词列表，其中一个等于 val 的E元素</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">div[class~=&quot;a&quot;]</span> <span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
此例，将会命中1, 3两个div，因为匹配到了class属性，且属性值中有一个值为a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-title-abc-选中页面的e元素-并且e需要带有-title-属性-属性值以-abc-开头" tabindex="-1"><a class="header-anchor" href="#e-title-abc-选中页面的e元素-并且e需要带有-title-属性-属性值以-abc-开头" aria-hidden="true">#</a> E[title^=&quot;abc&quot;] 选中页面的E元素，并且E需要带有 title 属性,属性值以 abc 开头</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">div[class^=&quot;a&quot;]</span> <span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>acb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bac<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
此例，将会命中1, 2两个div，因为匹配到了class属性，且属性值以a开头
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-title-abc-选中页面的e元素-并且e需要带有-title-属性-属性值以-abc-结尾" tabindex="-1"><a class="header-anchor" href="#e-title-abc-选中页面的e元素-并且e需要带有-title-属性-属性值以-abc-结尾" aria-hidden="true">#</a> E[title$=&quot;abc&quot;] 选中页面的E元素，并且E需要带有 title 属性,属性值以 abc 结尾</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">div[class$=&quot;c&quot;]</span> <span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>acb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bac<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
此例，将会命中1, 3两个div，因为匹配到了class属性，且属性值以c结尾
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-title-abc-选中页面的e元素-并且e需要带有-title-属性-属性值任意位置包含abc" tabindex="-1"><a class="header-anchor" href="#e-title-abc-选中页面的e元素-并且e需要带有-title-属性-属性值任意位置包含abc" aria-hidden="true">#</a> E[title*=&quot;abc&quot;] 选中页面的E元素，并且E需要带有 title 属性,属性值任意位置包含abc</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">div[class*=&quot;b&quot;]</span> <span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>acb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bac<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
此例，将会命中所有div，因为匹配到了class属性，且属性值中都包含了b

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-attr-val-表示要么是一个单独的属性值-要么这个属性值是以-分隔的" tabindex="-1"><a class="header-anchor" href="#e-attr-val-表示要么是一个单独的属性值-要么这个属性值是以-分隔的" aria-hidden="true">#</a> E[attr |=val] 表示要么是一个单独的属性值，要么这个属性值是以“-”分隔的</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">div[class|=&quot;a&quot;]</span> <span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a-test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b-test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
在这个例子中，前2个div将会被命中：
第1个div，拥有class属性，并且值为a，所以被命中；
第2个div，拥有class属性，值是a开头并紧跟着连接符“-”，所以被命中；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80),l=[p];function c(o,i){return n(),s("div",null,l)}const d=a(e,[["render",c],["__file","02-CSS样式表和选择器.html.vue"]]);export{d as default};
