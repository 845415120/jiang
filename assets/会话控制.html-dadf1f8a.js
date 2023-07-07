import{_ as p,r as o,o as c,c as i,b as n,d as s,e as t,a}from"./app-03f59e97.js";const l={},u=a('<h1 id="会话控制" tabindex="-1"><a class="header-anchor" href="#会话控制" aria-hidden="true">#</a> 会话控制</h1><p>所谓会话控制就是 <code>对会话进行控制</code> HTTP 是一种无状态的协议，它没有办法区分多次的请求是否来自于同一个客户端，，<code>无法区分用户</code>而产品中又大量存在的这样的需求，所以我们需要通过 会话控制 来解决该问题常见的<code>会话控制</code>技术有三种:</p><ul><li>cookie</li><li>session</li><li>token</li></ul>',3),r={href:"https://www.npmjs.com/package/cookie-parser",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h2><h3 id="cookie-是什么" tabindex="-1"><a class="header-anchor" href="#cookie-是什么" aria-hidden="true">#</a> cookie 是什么</h3><blockquote><p>cookie 是 HTTP 服务器发送到用户浏览器并保存在本地的一小块数据</p></blockquote><p>cookie 是保存在浏览器端的一小块数据 cookie 是按照域名划分保存的 简单示例：</p><table><thead><tr><th>域名</th><th>cookie</th></tr></thead><tbody><tr><td>www.baidu.com</td><td>a=100; b=200</td></tr><tr><td>www.bilibili.com</td><td>xid=1020abce121; hm=112411213</td></tr><tr><td>jd.com</td><td>x=100; ocw=12414cce</td></tr></tbody></table><h3 id="cookie-的特点" tabindex="-1"><a class="header-anchor" href="#cookie-的特点" aria-hidden="true">#</a> cookie 的特点</h3><p>浏览器向服务器发送请求时，会自动将 <code>当前域名下</code> 可用的 cookie 设置在请求头中，然后传递给服务器</p><p>这个请求头的名字也叫 <code>cookie</code> ，所以将 cookie 理解为一个 HTTP 的请求头也是可以的</p><h3 id="cookie-的运行流程" tabindex="-1"><a class="header-anchor" href="#cookie-的运行流程" aria-hidden="true">#</a> cookie 的运行流程</h3><p>填写账号和密码校验身份，校验通过后下发 cookie 有了 cookie 之后，后续向服务器发送请求时，就会自动携带 cookie</p><h3 id="浏览器操作-cookie" tabindex="-1"><a class="header-anchor" href="#浏览器操作-cookie" aria-hidden="true">#</a> 浏览器操作 cookie</h3><p>浏览器操作 cookie 的操作，使用相对较少，大家了解即可</p><ol><li>禁用所有 cookie</li><li>删除 cookie</li><li>查看 cookie</li></ol><h3 id="cookie-的代码操作" tabindex="-1"><a class="header-anchor" href="#cookie-的代码操作" aria-hidden="true">#</a> cookie 的代码操作</h3><p>express 中可以使用 <code>cookie-parser</code> 进行处理</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//1. 安装 cookie-parser  npm i cookie-parser</span>
<span class="token comment">//2. 引入 cookieParser 包</span>
<span class="token keyword">const</span> cookieParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cookie-parser&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//3. 设置 cookieParser 中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">//4-1 设置 cookie</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/set-cookie&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token comment">// 不带时效性    会在浏览器关闭的时候，销毁</span>
 response<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;wangwu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 带时效性</span>
   response<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;23123456@qq.com&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">5</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//响应</span>
   response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Cookie的设置&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//4-2 读取 cookie</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/get-cookie&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//读取 cookie</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>cookies<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//响应体</span>
   response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Cookie的读取&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//4-3 删除cookie</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/delete-cookie&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token comment">//删除</span>
 response<span class="token punctuation">.</span><span class="token function">clearCookie</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">//响应</span>
 response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;cookie 的清除&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//4. 启动服务</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务已经启动....&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>不同浏览器中的 cookie 是相互独立的，不共享</p></blockquote><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h2><h3 id="session-是什么" tabindex="-1"><a class="header-anchor" href="#session-是什么" aria-hidden="true">#</a> session 是什么</h3><p>session 是保存在 服务器端的一块儿数据，保存当前访问用户的相关信息</p><h3 id="session-的作用" tabindex="-1"><a class="header-anchor" href="#session-的作用" aria-hidden="true">#</a> session 的作用</h3><p>实现会话控制，可以识别用户的身份，快速获取当前用户的相关信息</p><h3 id="session-运行流程" tabindex="-1"><a class="header-anchor" href="#session-运行流程" aria-hidden="true">#</a> session 运行流程</h3><p>填写账号和密码校验身份，校验通过后创建 <code>session 信息</code>，然后将 <code>session_id</code> 的值通过响应头返回给浏览器</p><p>有了cookie，下次发送请求时会自动携带cookie，服务器通过 <code>cookie</code> 中的 <code>session_id</code> 的值确定用 户的身份</p><h3 id="session-的代码操作" tabindex="-1"><a class="header-anchor" href="#session-的代码操作" aria-hidden="true">#</a> session 的代码操作</h3><p>express 中可以使用 <code>express-session</code> 对 session 进行操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//1. 安装包 npm i express-session connect-mongo</span>
<span class="token comment">//2. 引入 express-session connect-mongo</span>
<span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-session&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MongoStore <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;connect-mongo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//3. 设置 session 的中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;sid&#39;</span><span class="token punctuation">,</span> <span class="token comment">//设置cookie的name，默认值是：connect.sid</span>
 <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;atguigu&#39;</span><span class="token punctuation">,</span> <span class="token comment">//参与加密的字符串（又称签名）  加盐</span>
 <span class="token literal-property property">saveUninitialized</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否为每次请求都设置一个cookie用来存储session的id</span>
 <span class="token literal-property property">resave</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否在每次请求时重新保存session</span>
 <span class="token literal-property property">store</span><span class="token operator">:</span> MongoStore<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mongoUrl</span><span class="token operator">:</span> <span class="token string">&#39;mongodb://127.0.0.1:27017/project&#39;</span> <span class="token comment">//数据库的连接配置</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token literal-property property">cookie</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启后前端无法通过 JS 操作</span>
  <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">300</span> <span class="token comment">// 这一条 是控制 sessionID 的过期时间的！！！</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//创建 session  session的设置</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置session</span>
    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">;</span>
    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>email <span class="token operator">=</span> <span class="token string">&#39;zhangsan@qq.com&#39;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//获取 session</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;session的信息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 检测 session 是否存在用户数据</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">你好 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
     res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;登录 注册&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//销毁 session</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/logout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//销毁session</span>
    <span class="token comment">// res.send(&#39;设置session&#39;);</span>
    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;成功退出&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务已经启动, 端口 &#39;</span> <span class="token operator">+</span> <span class="token number">3000</span> <span class="token operator">+</span> <span class="token string">&#39; 监听中...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-和-cookie-的区别" tabindex="-1"><a class="header-anchor" href="#session-和-cookie-的区别" aria-hidden="true">#</a> session 和 cookie 的区别</h2><p>cookie 和 session 的区别主要有如下几点：</p><ol><li>存在的位置</li></ol><ul><li>cookie：浏览器端</li><li>session：服务端</li></ul><ol start="2"><li>安全性</li></ol><ul><li>cookie 是以明文的方式存放在客户端的，安全性相对较低</li><li>session 存放于服务器中，所以安全性 <code>相对</code> 较好</li></ul><ol start="3"><li>网络传输量</li></ol><ul><li>cookie 设置内容过多会增大报文体积， 会影响传输效率</li><li>session 数据存储在服务器，只是通过 cookie 传递 id，所以不影响传输效率</li></ul><ol start="4"><li>存储限制</li></ol><ul><li>浏览器限制单个 cookie 保存的数据不能超过 <code>4K</code> ，且单个域名下的存储数量也有限制</li><li>session 数据存储在服务器中，所以没有这些限制</li></ul><h2 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h2><h3 id="token-是什么" tabindex="-1"><a class="header-anchor" href="#token-是什么" aria-hidden="true">#</a> token 是什么</h3><p><code>token</code> 是服务端生成并返回给 HTTP 客户端的一串加密字符串， <code>token</code> 中保存着<code>用户信息</code> token 不属于 http 标准，完全由前后端协商而定，但 cookie 属于 http 标1准</p><h3 id="token-的作用" tabindex="-1"><a class="header-anchor" href="#token-的作用" aria-hidden="true">#</a> token 的作用</h3><p>实现会话控制，可以识别用户的身份，主要用于移动端 APP</p><h3 id="token-的工作流程" tabindex="-1"><a class="header-anchor" href="#token-的工作流程" aria-hidden="true">#</a> token 的工作流程</h3><p>填写账号和密码校验身份，校验通过后响应 token，token 一般是在响应体中返回给客户端的 后续发送请求时，需要<code>手动</code>将 token 添加在请求报文中(cookie是自动携带的)，一般是放在请求头中</p><h3 id="token-的特点" tabindex="-1"><a class="header-anchor" href="#token-的特点" aria-hidden="true">#</a> token 的特点</h3><ul><li>服务端压力更小 <ul><li>数据存储在客户端</li></ul></li><li>相对更安全 <ul><li>数据加密</li><li>可以避免 CSRF（跨站请求伪造）</li></ul></li><li>扩展性更强 <ul><li>服务间可以共享</li><li>增加服务节点更简单</li></ul></li></ul><h3 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h3><p>JWT（JSON Web Token ）是目前最流行的跨域认证解决方案，可用于基于 <code>token</code> 的身份验证 JWT 使 token 的生成与校验更规范 我们可以使用 <code>jsonwebtoken 包</code> 来操作 token <code>npm i jsonwebtoken</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//导入 jsonwebtokan</span>
<span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//创建 token</span>
<span class="token comment">// jwt.sign(数据, 加密字符串, 配置对象)</span>
<span class="token keyword">let</span> token <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;atguigu&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token comment">//单位是 秒</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//解析 token</span>
<span class="token comment">// jwt.verify(token,加密字符串，回调函数)</span>
jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> <span class="token string">&#39;atguigu&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;校验失败~~&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// { username: &#39;张三&#39;, iat: (创建时间), exp:(过期时间)}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),d={href:"https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h2><h3 id="本地域名" tabindex="-1"><a class="header-anchor" href="#本地域名" aria-hidden="true">#</a> 本地域名</h3><p>所谓本地域名就是 只能在本机使用的域名，一般在开发阶段使用</p><h4 id="操作流程" tabindex="-1"><a class="header-anchor" href="#操作流程" aria-hidden="true">#</a> 操作流程</h4><p>编辑文件 <code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1   www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果修改失败，可以修改该文件的权限</p><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4><p>在地址栏输入 <code>域名</code> 之后，浏览器会先进行 DNS（Domain Name System）查询，获取该域名对应的 IP 地 址 请求会发送到 DNS 服务器，可以 <code>根据域名返回 IP 地址</code> 可以通过 <code>ipconfig /all</code> 查看本机的 DNS 服务器 <code>hosts</code> 文件也可以设置域名与 IP 的映射关系，在发送请求前，可以通过该文件获取域名的 IP 地址</p>`,9);function v(b,h){const e=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[s("cookie-parser "),n("a",r,[s("cookie-parser"),t(e)])]),k,n("blockquote",null,[n("p",null,[s("扩展阅读： "),n("a",d,[s("https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html"),t(e)])])]),m])}const f=p(l,[["render",v],["__file","会话控制.html.vue"]]);export{f as default};
