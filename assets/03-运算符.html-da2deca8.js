import{_ as e,o as a,c as d,a as r}from"./app-599c9e37.js";const t={},i=r(`<h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1><h2 id="_1-算术运算符" tabindex="-1"><a class="header-anchor" href="#_1-算术运算符" aria-hidden="true">#</a> 1.算术运算符</h2><table><thead><tr><th><strong>运算符</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>+</td><td>加、字符串连接</td></tr><tr><td>-</td><td>减</td></tr><tr><td>*</td><td>乘</td></tr><tr><td>/</td><td>除</td></tr><tr><td>%</td><td>获取余数（取余、取模）</td></tr></tbody></table><h2 id="_2-递增-和递减-运算符" tabindex="-1"><a class="header-anchor" href="#_2-递增-和递减-运算符" aria-hidden="true">#</a> 2.递增++和递减--运算符</h2><h2 id="_3-比较运算符" tabindex="-1"><a class="header-anchor" href="#_3-比较运算符" aria-hidden="true">#</a> 3.比较运算符</h2><div class="language-- line-numbers-mode" data-ext="-"><pre class="language--"><code>- &lt; 小于号
- &gt;=  大于或等于
- &lt;=  小于或等于
- ==  等于
- === 全等于
- != 不等于
- !== 不全等于
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_4-逻辑运算符" aria-hidden="true">#</a> 4.逻辑运算符</h2><p>逻辑运算符有三个：</p><ul><li>&amp;&amp;： 与（且）。两个都为真，结果才为真。特点：一假则假。</li><li>|| ：或。只要有一个是真，结果就是真。特点：特点: 一真则真。</li><li>! ：非。对一个布尔值进行取反。特点: 真变假, 假变真。</li></ul><h2 id="_5-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_5-赋值运算符" aria-hidden="true">#</a> 5.赋值运算符</h2><ul><li><code>=</code> 直接赋值。比如 <code>var a = 5</code>。意思是，把 5 这个值，往 a 里面存一份。简称：把 5 赋值给 a。</li><li><code>+=</code>：比如 a += 5 等价于 a = a + 5。</li><li><code>-=</code>：比如 a -= 5 等价于 a = a - 5。</li><li><code>*=</code>：比如 a _ = 5 等价于 a = a -5。</li><li><code>/=</code>：比如 a /= 5 等价于 a = a / 5。</li><li><code>%=</code>：比如 a %= 5 等价于 a = a % 5。</li></ul><h2 id="_6-关于-与" tabindex="-1"><a class="header-anchor" href="#_6-关于-与" aria-hidden="true">#</a> 6.关于 == 与===</h2><h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h4><p>需要注意的是 <code>==</code> 和 <code>===</code> 的区别。</p><ul><li><code>==</code> 比较的时候<strong>只判断值</strong>，因为会进行隐式转换。值相等则返回 <code>true</code></li><li><code>===</code> 比较判断的时同时需要<strong>值相等</strong>和<strong>类型相同</strong>，两者均满足则返回 <code>true</code></li></ul><h2 id="_7-三目运算符" tabindex="-1"><a class="header-anchor" href="#_7-三目运算符" aria-hidden="true">#</a> 7.三目运算符</h2><p>三目运算符也叫三元运算符、条件运算符。<br>语法：<br>条件表达式 ? 语句1 : 语句2;<br><strong>执行流程</strong>——条件运算符在执行时，首先对条件表达式进行求值：</p><ul><li>如果该值为 true，则执行语句 1，并返回执行结果</li><li>如果该值为 false，则执行语句 2，并返回执行结果</li></ul>`,18),n=[i];function l(c,o){return a(),d("div",null,n)}const h=e(t,[["render",l],["__file","03-运算符.html.vue"]]);export{h as default};
