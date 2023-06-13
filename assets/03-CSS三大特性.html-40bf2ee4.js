import{_ as a,o as t,c as e,a as s}from"./app-599c9e37.js";const n={},d=s(`<h1 id="css-三大特性" tabindex="-1"><a class="header-anchor" href="#css-三大特性" aria-hidden="true">#</a> CSS 三大特性</h1><p>层叠性、继承性、优先级。</p><h3 id="层叠性" tabindex="-1"><a class="header-anchor" href="#层叠性" aria-hidden="true">#</a> 层叠性</h3><p>相同选择器设置相同的样式，此时一个样式就会覆盖另一个冲突的样式。层叠性主要解决样式冲突的问题。<br>层叠性原则：</p><ul><li>样式冲突：遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式</li><li>样式不冲突，不会层叠</li></ul><h3 id="继承性" tabindex="-1"><a class="header-anchor" href="#继承性" aria-hidden="true">#</a> 继承性</h3><p>CSS 中子标签会继承父标签的某些样式，如<strong>文本颜色和字号。</strong></p><ul><li>恰当使用继承可以简化代码，降低 CSS 的复杂性</li><li>子元素可以继承父元素的样式（text-, font-, line-这些元素开头的可以继承，以及 color 属性）</li></ul><h4 id="行高的继承性" tabindex="-1"><a class="header-anchor" href="#行高的继承性" aria-hidden="true">#</a> 行高的继承性</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 12px/1.5 Microsoft Yahei<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>行高可以跟单位也可以不跟</li><li>如果子元素没有设置行高，则会继承父元素的行高为 1.5</li><li>此时子元素的行高是：当前子元素的文字大小*1.5</li><li>body 行高 1.5 这样写法最大优势就是里面的子元素可以根据文字大小自动调整行高</li></ul><h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h3><p>当一个元素指定多个选择器时，就会有有优先级的产生。</p><ul><li>选择器相同，则执行层叠性</li><li>选择器不同，则根据选择器权重执行</li></ul><p>选择器权重如下所示。</p><table><thead><tr><th>选择器</th><th>选择器权重</th></tr></thead><tbody><tr><td>继承或者<code>*</code></td><td><code>0,0,0,0</code></td></tr><tr><td>元素选择器</td><td><code>0,0,0,1</code></td></tr><tr><td>类选择器，伪类选择器</td><td><code>0,0,1,0</code></td></tr><tr><td>ID 选择器</td><td><code>0,1,0,0</code></td></tr><tr><td>行内样式 <code>style=&quot;&quot;</code></td><td><code>1,0,0,0</code></td></tr><tr><td><code>!important</code></td><td>∞ 无穷大</td></tr></tbody></table><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意</p><ul><li>继承的权重为 0，即使加了 important 权重也还是 0。</li><li>a 链接，浏览器默认指定了一个样式，蓝色，下划线，不会继承父级样式</li></ul><p><strong>复合选择器权重的叠加</strong><br>权重可以叠加，需要计算权重，但是没有进位。</p>`,20),i=[d];function l(c,o){return t(),e("div",null,i)}const p=a(n,[["render",l],["__file","03-CSS三大特性.html.vue"]]);export{p as default};
