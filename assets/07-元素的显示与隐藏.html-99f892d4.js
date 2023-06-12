import{_ as i,o as d,c as e,e as t}from"./app-f0751a91.js";const l={},a=t('<h1 id="元素的显示与隐藏" tabindex="-1"><a class="header-anchor" href="#元素的显示与隐藏" aria-hidden="true">#</a> 元素的显示与隐藏</h1><p>类似网站广告，当我们点击关闭就不见了，但是我们重新刷新页面，会重新出现！本质：让一个元素在页面中隐藏或者显示出来。</p><h3 id="_1-display-属性" tabindex="-1"><a class="header-anchor" href="#_1-display-属性" aria-hidden="true">#</a> 1. display 属性</h3><ul><li><code>display</code> 属性用于设置一个元素应如何显示。</li><li><code>display： none;</code> 隐藏对象</li><li><code>display ： block;</code> 除了转换为块级元素之外，同时还有显示元素的意思 display 隐藏元素后，不再占有原来的位置。</li></ul><p>后面应用及其广泛，搭配 JS 可以做很多的网页特效。</p><h3 id="_2-visibility-可见性" tabindex="-1"><a class="header-anchor" href="#_2-visibility-可见性" aria-hidden="true">#</a> 2. visibility 可见性</h3><ul><li>visibility 属性用于指定一个元素应可见还是隐藏。- - visibility : visible;元素可视</li><li>visibility : hidden;元素隐藏</li><li>visibility 隐藏元素后，继续占有原来的位置</li></ul><p>如果隐藏元素想要原来位置，就用 <code>visibility ： hidden</code><br>如果隐藏元素不想要原来位置，就用 <code>display ： none</code> （用处更多重点）</p><h3 id="_3-overflow-溢出" tabindex="-1"><a class="header-anchor" href="#_3-overflow-溢出" aria-hidden="true">#</a> 3.overflow 溢出</h3><p>overflow 属性指定了如果内容溢出一个元素的框（超过其指定高度及宽度）时，会发生什么。</p><table><thead><tr><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>visible</td><td>不剪切内容也不添加滚动条</td></tr><tr><td>hidden</td><td>不显示超过对象尺寸的内容</td></tr><tr><td>scroll</td><td>超出的部分隐藏掉不管超出内容否，总是显示滚动条</td></tr><tr><td>auto</td><td>超出自动显示滚动条，不超出不显示滚动条</td></tr></tbody></table><p>一般情况下，我们都不想让溢出的内容显示出来，因为溢出的部分会影响布局。但是如果有定位的盒子，请慎用<code>overflowhidden</code> 因为它会隐藏多余的部分。</p>',12),o=[a];function r(s,c){return d(),e("div",null,o)}const n=i(l,[["render",r],["__file","07-元素的显示与隐藏.html.vue"]]);export{n as default};
