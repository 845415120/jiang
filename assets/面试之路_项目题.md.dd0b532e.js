import{_ as s,o as a,c as n,U as e}from"./chunks/framework.4c05f43b.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"面试之路/项目题.md","filePath":"面试之路/项目题.md"}'),l={name:"面试之路/项目题.md"},p=e(`<h2 id="你写项目的时候碰到过印象里比较深刻的一些bug或困难-你怎么解决的" tabindex="-1">你写项目的时候碰到过印象里比较深刻的一些bug或困难，你怎么解决的？ <a class="header-anchor" href="#你写项目的时候碰到过印象里比较深刻的一些bug或困难-你怎么解决的" aria-label="Permalink to &quot;你写项目的时候碰到过印象里比较深刻的一些bug或困难，你怎么解决的？&quot;">​</a></h2><h2 id="_404" tabindex="-1">404 <a class="header-anchor" href="#_404" aria-label="Permalink to &quot;404&quot;">​</a></h2><p><strong>遇到的bug</strong>：当输入url中没有在路由配置中配置过的路径时，页面它会出现空白，并且浏览 器发出警告，如果我这个项目上线的话，可能会造成用户的体验不友好和搜索引擎不友 好。</p><p><strong>配置 404页面</strong> 解决办法：在路由配置中再配置一个404页面的路径，这样就能使用户不管怎么输入不合规 的url后，都会提示用户输错了网址。</p><div class="language-dotnetcli"><button title="Copy Code" class="copy"></button><span class="lang">dotnetcli</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">path: &#39;/404&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">name: &#39;NotFound&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">component: () =&gt; import(&#39;@/views/NotFound/Index.vue&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">// 所有未定义路由，全部重定向到404页</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">path: &#39;/:pathMatch(.*)&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">redirect: &#39;/404&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="搜索界面节流" tabindex="-1">搜索界面节流 <a class="header-anchor" href="#搜索界面节流" aria-label="Permalink to &quot;搜索界面节流&quot;">​</a></h2><p><strong>遇到的bug</strong>：在搜索界面的时候，当我一直点击搜索时，它会频繁的进行请求，造成了不必 要的性能损耗。</p><h2 id="图片和组件的懒加载" tabindex="-1">图片和组件的懒加载 <a class="header-anchor" href="#图片和组件的懒加载" aria-label="Permalink to &quot;图片和组件的懒加载&quot;">​</a></h2><p>我做的项目使用了很多的组件页面和大量的图片，导致在加载页面时耗时比较 久，以及在页面的切换时很多暂时不需要的页面组件一次性全部加载了，导致整个项目的 性能非常差。</p><p>解决办法： 图片懒加载：在App.vue中引入VueLazy并且使用app.use启用它，然后把图片中的src改成 v-lazy</p><p>页面组件懒加载：在router配置中的component，把直接在代码一开始引入组件页面，改 成箭头函数式引入。</p><div class="language-dotnetcli"><button title="Copy Code" class="copy"></button><span class="lang">dotnetcli</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">component: () =&gt; import(&#39;@/views/Home/Home.vue&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div><h2 id="axios响应拦截" tabindex="-1">axios响应拦截 <a class="header-anchor" href="#axios响应拦截" aria-label="Permalink to &quot;axios响应拦截&quot;">​</a></h2><p>遇到bug：我是使用mockjs来模拟后端的接口，当时我在设置端口的返回值时，我返回数据 有一个状态码以及把json数据中export出来的detail数据添加到data这个需要返回的数据 （代码如下），这导致我在获取接口里的数据时需要多.data(引用一层data)，当时我没意 识，结果一直获取不到数据。</p><div class="language-Vue"><button title="Copy Code" class="copy"></button><span class="lang">Vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Mock.mock(/\\/detail/, &#39;get&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">return {</span></span>
<span class="line"><span style="color:#A6ACCD;">code: 0, // 返回状态码</span></span>
<span class="line"><span style="color:#A6ACCD;">data: detail // 返回数据</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &quot;axios&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 响应拦截器</span></span>
<span class="line"><span style="color:#A6ACCD;">axios.interceptors.response.use((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">return res.data</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div>`,15),o=[p];function t(c,r,i,C,d,A){return a(),n("div",null,o)}const y=s(l,[["render",t]]);export{h as __pageData,y as default};
