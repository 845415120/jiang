import{_ as a,r as s,o as d,c as l,b as e,d as n,e as t,a as r}from"./app-03f59e97.js";const c={},v=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),n(" Git")],-1),o=e("p",null,[e("strong",null,"目标："),n(" 能够使用 git 管理项目，并且能够将代码上传到Github")],-1),u={href:"https://backlog.com/git-tutorial/cn/intro/intro1_1.html",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b gh-pages

// 新建仓库
$ git init
//创建新分支
git checkout -b gh-pages

# 将所有文件添加到暂存区
git add .

# 初始化提交
git commit -m &#39;初始化提交&#39;


// 关联你的远程仓库
$ git remote add origin xxxx

// 切换到gh-pages分支
$ git checkout gh-pages

// 提交代码到gh-pages分支
$ git push origin gh-pages

// 合并到master分支
$ git checkout master
$ git merge gh-pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化和开发分支" tabindex="-1"><a class="header-anchor" href="#初始化和开发分支" aria-hidden="true">#</a> 初始化和开发分支</h2><p><strong>核心步骤：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 初始化项目仓库
git init <span class="token operator">-</span>b main

# 将所有文件添加到暂存区
git add <span class="token punctuation">.</span>

# 初始化提交
git commit <span class="token operator">-</span>m <span class="token string">&#39;初始化提交&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 gitee 管理项目<br>核心步骤：<br>在Github上创建项目</p><ul><li>本地设置仓库别名</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git remote add origin git@github<span class="token punctuation">.</span>com<span class="token operator">:</span><span class="token number">845415120</span><span class="token operator">/</span>web<span class="token operator">-</span><span class="token punctuation">.</span>git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>本地推送到远程仓库</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 推送主分支
git push <span class="token operator">-</span>u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建并合并分支" tabindex="-1"><a class="header-anchor" href="#创建并合并分支" aria-hidden="true">#</a> 创建并合并分支</h2><p><img src="https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230706/image.6421bd86z800.webp" alt="alt"></p><p>Git鼓励大量使用分支：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看分支：git branch
创建分支：git branch &lt;name&gt;
切换分支：git checkout &lt;name&gt;
创建+切换分支：git checkout -b &lt;name&gt;
合并某分支到当前分支：git merge &lt;name&gt;
删除分支：git branch -d &lt;name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function g(p,b){const i=s("ExternalLinkIcon");return d(),l("div",null,[v,o,e("p",null,[e("a",u,[n("首先【Git的基础】 | 猴子都能懂的GIT入门 | 贝格乐（Backlog）"),t(i)])]),m])}const x=a(c,[["render",g],["__file","Git.html.vue"]]);export{x as default};
