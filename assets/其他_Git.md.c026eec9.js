import{_ as s,o as a,c as n,U as l}from"./chunks/framework.4c05f43b.js";const D=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[],"relativePath":"其他/Git.md","filePath":"其他/Git.md"}'),p={name:"其他/Git.md"},e=l(`<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h1><p><strong>目标：</strong> 能够使用 git 管理项目，并且能够将代码上传到Github</p><p><a href="https://backlog.com/git-tutorial/cn/intro/intro1_1.html" target="_blank" rel="noreferrer">首先【Git的基础】 | 猴子都能懂的GIT入门 | 贝格乐（Backlog）</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout -b gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 新建仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init</span></span>
<span class="line"><span style="color:#A6ACCD;">//创建新分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 将所有文件添加到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 初始化提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &#39;初始化提交&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 关联你的远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote add origin xxxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 切换到gh-pages分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 提交代码到gh-pages分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 合并到master分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout master</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git merge gh-pages</span></span></code></pre></div><h2 id="初始化和开发分支" tabindex="-1">初始化和开发分支 <a class="header-anchor" href="#初始化和开发分支" aria-label="Permalink to &quot;初始化和开发分支&quot;">​</a></h2><p><strong>核心步骤：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 初始化项目仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git init </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 将所有文件添加到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 初始化提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">初始化提交</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>使用 gitee 管理项目<br>核心步骤：<br>在Github上创建项目</p><ul><li>本地设置仓库别名</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote add origin git@github</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">com:</span><span style="color:#F78C6C;">845415120</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">-.</span><span style="color:#A6ACCD;">git</span></span></code></pre></div><ul><li>本地推送到远程仓库</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 推送主分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">u origin main</span></span></code></pre></div><h2 id="创建并合并分支" tabindex="-1">创建并合并分支 <a class="header-anchor" href="#创建并合并分支" aria-label="Permalink to &quot;创建并合并分支&quot;">​</a></h2><p><img src="https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230706/image.6421bd86z800.webp" alt="alt"></p><p>Git鼓励大量使用分支：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">查看分支：git branch</span></span>
<span class="line"><span style="color:#A6ACCD;">创建分支：git branch &lt;name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">切换分支：git checkout &lt;name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">创建+切换分支：git checkout -b &lt;name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">合并某分支到当前分支：git merge &lt;name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">删除分支：git branch -d &lt;name&gt;</span></span></code></pre></div><p>创建+切换分支：git checkout -b 合并某分支到当前分支：git merge</p>`,17),t=[e];function o(c,i,r,C,A,g){return a(),n("div",null,t)}const h=s(p,[["render",o]]);export{D as __pageData,h as default};
