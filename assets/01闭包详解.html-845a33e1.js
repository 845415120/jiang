import{_ as n,o as s,c as a,a as e}from"./app-03f59e97.js";const t={},p=e(`<h1 id="你不知道的javascript-上" tabindex="-1"><a class="header-anchor" href="#你不知道的javascript-上" aria-hidden="true">#</a> 你不知道的JavaScript(上)</h1><h1 id="作用域和闭包" tabindex="-1"><a class="header-anchor" href="#作用域和闭包" aria-hidden="true">#</a> 作用域和闭包</h1><h2 id="编译原理" tabindex="-1"><a class="header-anchor" href="#编译原理" aria-hidden="true">#</a> 编译原理</h2><p>程序中的一段源代码在执行之前会经历三个步骤</p><ul><li><p><strong>分词/词法分析</strong>（Tokenizing/Lexing）</p><p>这个过程会将由字符组成的字符串分解成（对编程语言来说）有意义的代码块，这些代码块被称为词法单元（token）。</p><p>例如，考虑程序 var a = 2;。这段程序通常会被分解成 为下面这些词法单元：var、a、=、2 、;。</p></li><li><p><strong>解析/语法分析</strong>（Parsing）</p><p>这个过程是将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法 结构的树</p><p>这个树被称为“抽象语法树”（Abstract Syntax Tree，AST）</p></li><li><p><strong>代码生成</strong></p><p>将AST 转换为可执行代码的过程称被称为代码生成。</p></li></ul><h2 id="javascript编译" tabindex="-1"><a class="header-anchor" href="#javascript编译" aria-hidden="true">#</a> JavaScript编译</h2><p>对于 JavaScript 来说，大部分情况下编译发生在代码执行前的几微秒（甚至更短！）的时 间内</p><ul><li><strong>引擎</strong><ul><li>从头到尾负责整个 JavaScript 程序的编译及执行过程</li></ul></li><li><strong>编译器</strong><ul><li>引擎的好朋友之一，负责语法分析及代码生成等脏活累活</li></ul></li><li><strong>作用域</strong><ul><li>引擎的另一位好朋友，负责收集并维护由所有声明的标识符（变量）组成的一系列查 询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span> 
<span class="token literal-property property">编译</span><span class="token operator">:</span>
<span class="token literal-property property">变量的赋值操作会执行两个动作</span><span class="token operator">:</span>

<span class="token keyword">var</span> a <span class="token constant">LHS</span>

a <span class="token operator">=</span> <span class="token number">2</span>  <span class="token constant">RHS</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译器" tabindex="-1"><a class="header-anchor" href="#编译器" aria-hidden="true">#</a> 编译器</h2><ul><li><strong>声明(LHS操作)</strong>：当遇到<code>var a</code>时，编译器会<strong>询问作用域</strong>是否已经有一个该名称的变量存在于当前作用域的集合中</li></ul><p><strong>存在</strong>：则忽略该声明，继续进行编译 <strong>不存在</strong>：要求当前作用域申明一个新的变量，并命名为a</p><ul><li><strong>赋值(RHS操作)</strong>：当遇到<code>a=2</code>这个赋值操作时，引擎会首先<strong>询问作用域</strong>，在当前作用域中是否存在一个叫a的变量。</li></ul><p><strong>存在</strong>：使用这个变量，并赋值 <strong>不存在</strong>：继续一层一层向外层作用域查找，直到一直找到这个变量。</p><h2 id="lhs和rhs" tabindex="-1"><a class="header-anchor" href="#lhs和rhs" aria-hidden="true">#</a> LHS和RHS</h2><p>当变量出现在赋值操作的左侧时进行 LHS 查询，出现在非左侧时进行 RHS 查询</p><p><strong>LHS</strong>：左侧查询<strong>变量</strong>容器本身</p><p>如果查找的目的是对变量进行赋值，那么就会使用 LHS 查询</p><p><strong>RHS</strong>：非左侧查询变量的<strong>值</strong></p><p>如果目的是获取变量的值，就会使用 RHS 查询。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">LHS</span><span class="token operator">:</span>
a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
这里对 a 的引用则是 <span class="token constant">LHS</span> 引用

<span class="token constant">RHS</span><span class="token operator">:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span><span class="token punctuation">;</span>
其中对 a 的引用是一个 <span class="token constant">RHS</span> 引用，因为这里 a 并没有赋予任何值。
相应地，需要查找并取得 a 的值，这样才能将值传递给 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span> <span class="token number">2</span> <span class="token punctuation">)</span>

<span class="token function">其中foo</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> 函数的调用需要对 foo 进行 <span class="token constant">RHS</span> 引用<span class="token punctuation">,</span>意味着“去找到 foo 的值并把它给我

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><p><strong>LHS</strong>：不成功的 LHS 引用会导致自动隐式 地创建一个全局变量（非严格模式下），</p><p>该变量使用 LHS 引用的目标作为标识符，或者抛 出 ReferenceError 异常（严格模式下）</p><p><strong>RHS</strong>：不成功的 RHS 引用会导致抛出 ReferenceError 异常。</p><h3 id="lhs和rhs小测" tabindex="-1"><a class="header-anchor" href="#lhs和rhs小测" aria-hidden="true">#</a> LHS和RHS小测</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>找出所有的 LHS 查询（这里有 3 处！）</li></ul><ol><li>c = ..;</li><li>a = 2（隐式变量分配）</li><li>b = ..</li></ol><ul><li>找出所有的 RHS 查询（这里有 4 处！） <ol><li>foo(2)</li><li>= a;</li><li>a .. --(a+b)</li><li>.. b</li></ol></li></ul><h2 id="作用域是什么" tabindex="-1"><a class="header-anchor" href="#作用域是什么" aria-hidden="true">#</a> 作用域是什么</h2><p>作用域就是根据名称来查找变量的一套规则。</p><h2 id="作用域嵌套" tabindex="-1"><a class="header-anchor" href="#作用域嵌套" aria-hidden="true">#</a> 作用域嵌套</h2><p>所谓作用域嵌套就是当一个块或者函数在另一个块或者函数中时，就会发生作用域嵌套。</p><p>作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量， 或抵达最外层的作用域（也就是全局作用域）为止。</p><p>查找规则</p><ul><li>在当前作用域中查找变量，例如上例中的变量b，没有找到时</li><li>往外层作用域中查找，一直到最顶层(全局作用域)为止，有则返回，无则报错(严格模式下</li></ul><h2 id="词法作用域" tabindex="-1"><a class="header-anchor" href="#词法作用域" aria-hidden="true">#</a> 词法作用域</h2><p>作用域共有两种主要的工作模型。第一种是最为普遍的，被大多数编程语言所采用的词法作用域</p><p><strong>词法作用域意味着作用域是由书写代码时函数声明的位置来决定的</strong></p><p>编译的<strong>词法分析阶段</strong> 基本能够知道全部标识符在哪里以及是如何声明的，从而能够预测在执行过程中如何对它 们进行查找</p><h3 id="遮蔽效应" tabindex="-1"><a class="header-anchor" href="#遮蔽效应" aria-hidden="true">#</a> 遮蔽效应</h3><p>作用域会在查找到第一个匹配的标识符时停止，所用在多层作用域嵌套时，内层的变量会屏蔽掉外层的同名变量，这叫变量的<strong>遮蔽效应</strong></p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function foo(){
  var a = 1;
  var var = function(){
    var a = 2;
    console.log(a); // 变量遮蔽，输出2
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="访问被遮蔽的变量" tabindex="-1"><a class="header-anchor" href="#访问被遮蔽的变量" aria-hidden="true">#</a> 访问被遮蔽的变量</h4><p>一般来说，全局变量会自动的变量全局对象(window)的属性，可以借助<code>window[]</code>或者<code>window.</code>的形式访问被遮蔽的全局变量。</p><h5 id="访问被遮蔽的变量案例" tabindex="-1"><a class="header-anchor" href="#访问被遮蔽的变量案例" aria-hidden="true">#</a> 访问被遮蔽的变量案例</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 变量遮蔽，输出3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span>   <span class="token comment">// 访问全局对象属性a，输出2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="欺骗词法" tabindex="-1"><a class="header-anchor" href="#欺骗词法" aria-hidden="true">#</a> 欺骗词法</h3><p>词法作用域完全由写代码期间函数所声明的位置来定义，怎样才能在运行时来“修 改”（也可以说欺骗）词法作用域呢</p><h4 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval</h4><p>JavaScript 中的 eval(..) 函数可以接受一个字符串为参数，并将其中的内容视为好像在书写时就存在于程序中这个位置的代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">str，b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 欺骗，解析成var a = 3;</span>
  <span class="token function">eval</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出3，1        </span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a，b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&#39;var a = 3;&#39;</span>，<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="with" tabindex="-1"><a class="header-anchor" href="#with" aria-hidden="true">#</a> with</h4><p>JavaScript 中另一个难以掌握（并且现在也不推荐使用）的用来欺骗词法作用域的功能是 with 关键字。</p><p>with 通常被当作重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>，
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>，
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token comment">// 重复单调的引用obj</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token comment">// with快捷引用</span>
<span class="token keyword">with</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  c <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本质上是通过将一个对象的引用当作作用域来处理，将对象的属性当作作 用域中的标识符来处理，从而创建了一个新的词法作用域</p><h4 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h4><p>这两个机制的副作用是引擎无法在编译时对作用域查找进行优化，因为引擎只能谨慎地认 为这样的优化是无效的。使用这其中任何一个机制都将导致代码运行变慢。<strong>不要使用它们。</strong></p><h2 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a> 函数作用域</h2><p><strong>定义</strong>：是指属于这个函数的全部变量都可以在整个函数的范围内使用及复用</p><h4 id="函数作用域隐藏内部变量和函数定义" tabindex="-1"><a class="header-anchor" href="#函数作用域隐藏内部变量和函数定义" aria-hidden="true">#</a> 函数作用域隐藏内部变量和函数定义</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数隐藏内部变量和函数定义的问题" tabindex="-1"><a class="header-anchor" href="#函数隐藏内部变量和函数定义的问题" aria-hidden="true">#</a> 函数隐藏内部变量和函数定义的问题</h4><ul><li>必须声明一个具名函数(foo)，意味着foo本身也污染了它所在的作用域。</li><li>必须显示的调用这个具名函数，才能运行其中的代码。</li></ul><h4 id="解决办法-立即执行函数表达式iife" tabindex="-1"><a class="header-anchor" href="#解决办法-立即执行函数表达式iife" aria-hidden="true">#</a> 解决办法(立即执行函数表达式IIFE)</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 此处为函数表达式，不是一个函数声明</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iife进阶用法" tabindex="-1"><a class="header-anchor" href="#iife进阶用法" aria-hidden="true">#</a> IIFE进阶用法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// IIFE进阶用法：函数传参</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">IIFE</span><span class="token punctuation">(</span><span class="token parameter">window</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匿名函数的缺点" tabindex="-1"><a class="header-anchor" href="#匿名函数的缺点" aria-hidden="true">#</a> 匿名函数的缺点</h4><ul><li>匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难。</li><li>因为没有函数名，当引用自身时，会比较麻烦。</li><li>没有函数名，可读性变差了</li></ul><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 始终给匿名函数一个函数名是一个很好的解决办法</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>，<span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="块作用域" tabindex="-1"><a class="header-anchor" href="#块作用域" aria-hidden="true">#</a> 块作用域</h2><h4 id="for和if没有块作用域" tabindex="-1"><a class="header-anchor" href="#for和if没有块作用域" aria-hidden="true">#</a> for和if没有块作用域</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 变量i泄露</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> bar<span class="token punctuation">;</span>
  <span class="token comment">// 输出2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 变量bar泄露，输出1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 变量foo泄露，输出2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="with块作用域的表现形式之一" tabindex="-1"><a class="header-anchor" href="#with块作用域的表现形式之一" aria-hidden="true">#</a> with块作用域的表现形式之一</h4><p>with从对象中创建出来的作用域仅在with声明中而非外部作用域中有效</p><h4 id="try-catch块作用域的表现形式之二" tabindex="-1"><a class="header-anchor" href="#try-catch块作用域的表现形式之二" aria-hidden="true">#</a> try/catch块作用域的表现形式之二</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span><span class="token punctuation">{</span>
  <span class="token keyword">undefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// err只在catch中有效</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 报错</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es6-let和-const块作用域的表现形式之三" tabindex="-1"><a class="header-anchor" href="#es6-let和-const块作用域的表现形式之三" aria-hidden="true">#</a> ES6 let和 const块作用域的表现形式之三</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 报错</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 报错，访问不到i</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量、函数提升" tabindex="-1"><a class="header-anchor" href="#变量、函数提升" aria-hidden="true">#</a> 变量、函数提升</h2><h4 id="变量声明会提升到它当前作用域的顶部" tabindex="-1"><a class="header-anchor" href="#变量声明会提升到它当前作用域的顶部" aria-hidden="true">#</a> 变量声明会提升到它当前作用域的顶部</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 示例</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 提升后</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 变量声明提升</span>
  <span class="token keyword">var</span> a<span class="token punctuation">;</span>
  a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数声明会提升到它当前作用域的顶部" tabindex="-1"><a class="header-anchor" href="#函数声明会提升到它当前作用域的顶部" aria-hidden="true">#</a> 函数声明会提升到它当前作用域的顶部</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 先调用</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 再声明</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 输出undefined</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 提升后相当于</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 此时a没有赋值，为undefined</span>
  <span class="token keyword">var</span> a<span class="token punctuation">;</span>
  <span class="token comment">// 输出undefined;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// a变量正式赋值</span>
  a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数调用</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数表达式不会被提升" tabindex="-1"><a class="header-anchor" href="#函数表达式不会被提升" aria-hidden="true">#</a> 函数表达式不会被提升</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 先调用，报错TypeError</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fun foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数会优先变量首先提升" tabindex="-1"><a class="header-anchor" href="#函数会优先变量首先提升" aria-hidden="true">#</a> 函数会优先变量首先提升</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 先调用</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 声明foo变量</span>
<span class="token keyword">var</span> foo<span class="token punctuation">;</span>
<span class="token comment">// 声明foo函数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 声明foo表达式</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 提升后相当于</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输出1</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 重复声明，忽略</span>
<span class="token keyword">var</span> foo<span class="token punctuation">;</span>

<span class="token comment">// 声明foo表达式</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// foo表达式覆盖前面的foo函数，输出2</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域闭包" tabindex="-1"><a class="header-anchor" href="#作用域闭包" aria-hidden="true">#</a> 作用域闭包</h2><h4 id="闭包定义" tabindex="-1"><a class="header-anchor" href="#闭包定义" aria-hidden="true">#</a> 闭包定义</h4><p>当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行</p><h4 id="闭包的第一种表现形式" tabindex="-1"><a class="header-anchor" href="#闭包的第一种表现形式" aria-hidden="true">#</a> 闭包的第一种表现形式</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo() {
var a = 2;
function bar() {
console.log( a );
}
return bar;
}
var baz = foo();
baz(); // 2 —— 朋友，这就是闭包的效果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数 bar() 的词法作用域能够访问 foo() 的内部作用域。</p><p>然后我们将 bar() 函数本身当作 一个值类型进行传递。</p><h4 id="闭包的第二种表现形式" tabindex="-1"><a class="header-anchor" href="#闭包的第二种表现形式" aria-hidden="true">#</a> 闭包的第二种表现形式</h4><p><strong>函数传递</strong>：无论通过何种手段将内部函数传递到它所在词法作用域之外，它都会持有队原始作用域的引用，无论在何处执行这个函数，都会产生闭包</p><p>当函数在别处被调用时都可以观察到 闭包</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
<span class="token function">bar</span><span class="token punctuation">(</span> baz <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 妈妈快看呀，这就是闭包！</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把内部函数 baz 传递给 bar，当调用这个内部函数时,它涵盖的 foo() 内部 作用域的闭包就可以观察到了，因为它能够访问 a。</p><h4 id="闭包的第三种表现形式" tabindex="-1"><a class="header-anchor" href="#闭包的第三种表现形式" aria-hidden="true">#</a> 闭包的第三种表现形式</h4><p><strong>回调函数</strong>：在<strong>定时器</strong>、<strong>事件监听</strong>、<strong>Ajax请求</strong>、跨窗口通信、Web Workers或者任何<strong>异步</strong>中，只要使用了<strong>回调函数</strong>，实际上就是在使用闭包</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> message <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">wait</span><span class="token punctuation">(</span> <span class="token string">&quot;Hello, closure!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将一个内部函数（名为 timer）传递给 setTimeout(..)。</p><p>timer 具有涵盖 wait(..) 作用域 的闭包，因此还保有对变量 message 的引用。</p><p>wait(..) 执行 1000 毫秒后，它的内部作用域并不会消失，timer 函数依然保有 wait(..) 作用域的闭包。</p><p>深入到引擎的内部原理中，内置的工具函数 setTimeout(..) 持有对一个参数的引用，这个 参数也许叫作 fn 或者 func，或者其他类似的名字。引擎会调用这个函数，在例子中就是 内部的 timer 函数，而词法作用域在这个过程中保持完整。</p><p>这就是闭包</p><h4 id="一个非典型的闭包案例" tabindex="-1"><a class="header-anchor" href="#一个非典型的闭包案例" aria-hidden="true">#</a> 一个非典型的闭包案例</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">IIFE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 输出2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么说是一个非典型的闭包案例？</p><ul><li>首先IIFE函数并不是在它本身词法作用域之外执行</li><li>其次变量a是通过普通的词法作用域查找而来，而不是闭包被发现</li></ul><p><strong>那么，IIFE到底是不是一个闭包？</strong> 是，IIFE的确创建了闭包。</p><h2 id="循环和闭包" tabindex="-1"><a class="header-anchor" href="#循环和闭包" aria-hidden="true">#</a> 循环和闭包</h2><p>要说明闭包，for 循环是最常见的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 经典for循环+闭包案例</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>，i<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 6 6 6 6 6 </span>
最终解决方案

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>，i<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1 2 3 4 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺陷是我们试图假设循环中的每个迭代在运行时都会给自己“捕获”一个 i 的副本。但是 根据作用域的工作原理，实际情况是尽管循环中的五个函数是在各个迭代中分别定义的， 但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个 i</p><ul><li>for循环，创建6个定时器，循环完毕后，i等于6</li><li>执行每一个定时器，输出i，而i此时等于6</li></ul><h4 id="改进一" tabindex="-1"><a class="header-anchor" href="#改进一" aria-hidden="true">#</a> 改进一</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 改进一: 使用IIFE</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>，i<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 6 6 6 6 6 </span>
<span class="token constant">IIFE</span>虽然创建了闭包作用域，但创建的的闭包作用域是空的
变量i依然是通过词法作用域向外查找，即i等于<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="改进二" tabindex="-1"><a class="header-anchor" href="#改进二" aria-hidden="true">#</a> 改进二</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 改进二: 使用IIFE，在闭包作用域中缓存变量</span>
<span class="token comment">// 结果：正确依次输出1 2 3 4 5 </span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>，i<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1 2 3 4 5</span>

<span class="token comment">//  使用IIFE，闭包传参</span>
<span class="token comment">// 结果：正确依次输出1 2 3 4 5 </span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>，i<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="最终解决方案" tabindex="-1"><a class="header-anchor" href="#最终解决方案" aria-hidden="true">#</a> 最终解决方案</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 结果：正确依次输出1 2 3 4 5 
for(let i=1;i&lt;=5;i++){
  setTimeout(function timer(){
    console.log(i)
  }，i*1000)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包的模块模式" tabindex="-1"><a class="header-anchor" href="#闭包的模块模式" aria-hidden="true">#</a> 闭包的模块模式</h2><p>要形成模块模式则需要两个必要的条件</p><ul><li>必须有外部的封闭函数，该函数至少被调用一次</li><li>封闭函数内部必须至少返回一个内部函数，这样才能在封闭函数作用域中形成闭包</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 一个闭包模块的案例
function CoolModule() {
  var a = 1;
  var b = 2 * a
  function _foo() {
    console.log(a)
  }
  function _bar() {
    console.log(b)
  }

  // 必要条件二：返回内部函数
  return {
    foo: _foo，
    bar: _bar
  }
}

// 必要条件一：被调用
var fun = CoolModule();
fun.foo(); // 输出1
fun.bar(); // 输出2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="闭包模块的单例模式" tabindex="-1"><a class="header-anchor" href="#闭包模块的单例模式" aria-hidden="true">#</a> 闭包模块的单例模式</h4><p>在上例中，封闭函数每被调用一次，都会创建一个新的模块实例，如何达到单例的目的呢 可以使用IIFE把封闭函数包裹起来，已达到单例的目的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 模块的单例模式
var fun = (function CoolModule(){
  var a = 1;
  var b = 2 * a
  function _foo() {
    console.log(a)
  }
  function _bar() {
    console.log(b)
  }

  // 必要条件二：返回内部函数
  return {
    foo: _foo，
    bar: _bar
  }
})();

fun.foo(); // 输出1
fun.bar(); // 输出2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h1><p>就好像从 JavaScript 中分离出来的一个充满神秘色彩的未开化世界，只有最勇敢的人 才能够到达那里。</p><p>但实际上它只是一个标准，显然就是关于如何在函数作为值按需传递的 词法环境中书写代码的。</p><p><strong>当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包</strong></p><p>如果没能认出闭包，也不了解它的工作原理，在使用它的过程中就很容易犯错，比如在循环中。但同时闭包也是一个非常强大的工具，可以用多种形式来实现模块等模式。</p>`,141),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","01闭包详解.html.vue"]]);export{r as default};
