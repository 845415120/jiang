import{_ as n,o as a,c as s,f as e,a as i}from"./app-03f59e97.js";const l={},c=i(`<h1 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h1><ul><li>顺序结构</li><li>选择结构：if 语句、switch 语句</li><li>循环结构：while 语句、for 语句</li></ul><h2 id="_1-顺序结构" tabindex="-1"><a class="header-anchor" href="#_1-顺序结构" aria-hidden="true">#</a> 1.顺序结构</h2><p>按照代码的先后顺序，依次执行。<br></p><h2 id="_2-选择结构" tabindex="-1"><a class="header-anchor" href="#_2-选择结构" aria-hidden="true">#</a> 2.选择结构</h2><h2 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> if-else</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 条件为真时，做的事情</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 条件为假时，做的事情</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch-case" tabindex="-1"><a class="header-anchor" href="#switch-case" aria-hidden="true">#</a> switch-case</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">case</span> 值<span class="token number">1</span>：
  语句体<span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">break</span><span class="token punctuation">;</span>

 <span class="token keyword">case</span> 值<span class="token number">2</span>：
  语句体<span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token operator">...</span>
 <span class="token operator">...</span>

 <span class="token keyword">default</span>：
  语句体 n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-循环" tabindex="-1"><a class="header-anchor" href="#_3-循环" aria-hidden="true">#</a> 3.循环</h2><h3 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h3><p>语法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span>①初始化表达式<span class="token punctuation">;</span> ②条件表达式<span class="token punctuation">;</span> ④更新表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
 ③循环体
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>①执行初始化表达式，初始化变量（初始化表达式只会执行一次）

②执行条件表达式，判断是否执行循环：
 如果为true，则执行循环③
 如果为false，终止循环

④执行更新表达式，更新表达式执行完毕继续重复②
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
 循环体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while语句在执行时，先对条件表达式进行求值判断：

 如果值为true，则执行循环体：
  循环体执行完毕后，继续对表达式进行判断
  如果为true，则继续执行循环体，以此类推

 如果值为false，则终止循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果有必要的话，我们可以使用 break 来终止循环</strong>。</p><h3 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while" aria-hidden="true">#</a> do...while</h3><p>语法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">do</span><span class="token punctuation">{</span>
 循环体
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="break-与-continue" tabindex="-1"><a class="header-anchor" href="#break-与-continue" aria-hidden="true">#</a> break 与 continue</h3><ul><li><code>break</code>：跳出当前循环，不再进行当前循环。</li><li><code>continue</code>：跳过本轮循环，进行当前循环的下一轮。</li><li><code>break</code> 与 <code>continue</code> 均可配合 <code>label</code> 语句使用来跳转循环。</li></ul>`,25);function t(d,p){return a(),s("div",null,[e(` ---
prev:       '/Javascript/03-运算符.md',
next:  '/Javascript/05-数组.md',
--- `),c])}const o=n(l,[["render",t],["__file","04-流程控制.html.vue"]]);export{o as default};
