import{_ as i,o as e,c as n,a as d}from"./app-03f59e97.js";const s={},a=d(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> vuepress</h1><h2 id="导航栏嵌套" tabindex="-1"><a class="header-anchor" href="#导航栏嵌套" aria-hidden="true">#</a> 导航栏嵌套</h2><p>版本 vuepress2.0.0</p><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>export default {
  navbar: [
    {
      text: &quot;前端基础&quot;,
      children: [
        {
          text: &quot;前端基础&quot;,
          children: [
            &#39;/HTML/index.md&#39;,
            &#39;/CSS/01-CSS属性：字体属性，文本属性和背景属性.md&#39;,
            &#39;/Javascript/00-JavaScript起步.md&#39;,
            &#39;/正则表达式.md/&#39;
          ],
        },
        {
          text: &quot;前端基础&quot;,
          children: [
            &#39;/HTML/index.md&#39;,
            &#39;/CSS/01-CSS属性：字体属性，文本属性和背景属性.md&#39;,
            &#39;/Javascript/00-JavaScript起步.md&#39;,
            &#39;/正则表达式.md/&#39;
          ],

        },
        {
          text: &#39;ES6&#39;,
          link: &#39;/ES6/01-ES6.md/&#39;,
        },
        {
          text: &#39;你不知道的JavaScript上笔记&#39;,
          link: &#39;/01闭包详解.md&#39;,
        },

      ]
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="侧边栏-显示目录" tabindex="-1"><a class="header-anchor" href="#侧边栏-显示目录" aria-hidden="true">#</a> 侧边栏 显示目录</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>        &#39;/HTML/&#39;: [  //不能是中文
          {
            children: [
              &#39;/HTML/index.md&#39;
            ],
          },
        ],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[a];function v(r,c){return e(),n("div",null,l)}const m=i(s,[["render",v],["__file","vuepress.html.vue"]]);export{m as default};
