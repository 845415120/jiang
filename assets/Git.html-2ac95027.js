import{_ as s,r as i,o as t,c as r,a as e,b as n,d as l,e as o}from"./app-f0751a91.js";const c={},d=e("h1",{id:"git-版本管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-版本管理","aria-hidden":"true"},"#"),n(" Git 版本管理")],-1),p=e("p",null,[e("strong",null,"目标："),n(" 能够使用 git 管理项目，并且能够将代码上传到Github")],-1),u={href:"https://backlog.com/git-tutorial/cn/intro/intro1_1.html",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="初始化和开发分支" tabindex="-1"><a class="header-anchor" href="#初始化和开发分支" aria-hidden="true">#</a> 初始化和开发分支</h2><p><strong>核心步骤：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 初始化项目仓库
git init <span class="token operator">-</span>b main

# 将所有文件添加到暂存区
git add <span class="token punctuation">.</span>

# 初始化提交
git commit <span class="token operator">-</span>m <span class="token string">&#39;初始化提交&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 gitee 管理项目<br>核心步骤：<br>在Github上创建项目</p><ul><li>本地设置仓库别名</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git remote add origin git@github<span class="token punctuation">.</span>com<span class="token operator">:</span><span class="token number">845415120</span><span class="token operator">/</span>web<span class="token operator">-</span><span class="token punctuation">.</span>git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>本地推送到远程仓库</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 推送主分支
git push <span class="token operator">-</span>u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(g,b){const a=i("ExternalLinkIcon");return t(),r("div",null,[d,p,e("p",null,[e("a",u,[n("首先【Git的基础】 | 猴子都能懂的GIT入门 | 贝格乐（Backlog）"),l(a)])]),v])}const _=s(c,[["render",m],["__file","Git.html.vue"]]);export{_ as default};
