import{_ as i,D as o,o as s,c as r,z as a,a as t,t as n,G as p,O as c}from"./chunks/framework.89d0ee0c.js";const x=JSON.parse('{"title":"No.07 | 初探效率生活","description":"","frontmatter":{"title":"No.07 | 初探效率生活","date":"2023-06-20T00:00:00.000Z","img":"/weekly/07.png"},"headers":[],"relativePath":"pages/weekly/2023/07.md","filePath":"pages/weekly/2023/07.md"}'),d={name:"pages/weekly/2023/07.md"},g={id:"frontmatter-title",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }} <Badge type="tip" :text="String($frontmatter.date).slice(0,10)" />"'},"​",-1),m=c('<blockquote><p>又开始捣鼓博客了，花了点时间迁移到了vitepress，基于默认主题为几个模块新增了几个组件。实习不算顺利，还没有找到合适的，不知道会不会拖到秋招了。</p></blockquote><h2 id="捣鼓blog" tabindex="-1">捣鼓Blog <a class="header-anchor" href="#捣鼓blog" aria-label="Permalink to &quot;捣鼓Blog&quot;">​</a></h2><p>迁移了好几次博客了，最早用的Jekyll，之后迁移到vuepress，都是用的别人的主题，中间自己改了很多细节上的样式，在费时费力修改别人主题的时候突然意识到为什么不直接自己写一个主题呢，因为一直没有时间，这个想法就一直被搁置了。近期又学了下vue，准备借此机会改造下博客，写一个基于vitepress的主题，也算vue实战了，以后应该就不会换了。目前已完成了几个模块的组件，还有些需要慢慢完善，之后等有一定完成度了，就考虑发布主题。一直用的GitPage+Vercel做代理，但是访问速度貌似有点不够，等有空了研究下nginx，部署到之前买的吃灰了很久的服务器上吧，还有半年到期。</p><p><img src="https://s2.loli.net/2023/06/20/cSi8Y5xZIGdfnJh.png" alt="image-20230620171126569"></p><p><img src="https://s2.loli.net/2023/06/20/OpHKSQ5zALkqtcf.png" alt="image-20230620171138460"></p><p><img src="https://s2.loli.net/2023/06/20/uYy4UsWVt8eH1fD.png" alt="image-20230620171146768"></p><h2 id="管理我的一天" tabindex="-1">管理我的一天 <a class="header-anchor" href="#管理我的一天" aria-label="Permalink to &quot;管理我的一天&quot;">​</a></h2><p>我目前有两个身份：学生、独立开发者，预计未来一段时间也会是两个身份：打工人、独立开发者。那如何平衡好我的时间和一天关注点是比较重要的，同时我也是个爱忘事的人，所以任何一件需要做的小事我都会记下来，大概来讲一讲我目前采取的效率体系。因为我一直觉得工具是用来辅助思考的，任何时候都不要被工具牵着走，所以会主要讲讲我的思路，所使用的app都是可替换的，如果有更合适的我也会随时替换掉。</p><p>我把我一天中需要做的事分为以下几个类别：</p><ul><li><strong>日程</strong>：需要在固定时间完成的事，比如：9：00要开一个会，15：00要参见一个活动</li><li><strong>待办</strong>：今天需要完成的事，可以是完成某个作业，学某门课程的第几节课，看某篇文章，这里的事情一定要具体，确保是可以完成的，比如今天要看完某本书的第一个章节，而不是看某本书。这一类任务可以用一个project或者tag归类，定期复盘或概览规划。</li><li><strong>提醒</strong>：一些生活杂事，比如晚上记得买牙膏（没错，不记下来的话我真会连着好几天在水池面前一拍脑门，又忘买牙膏了），这一类任务的目的仅仅是为了记忆，在完成后可直接删除，不需要复盘</li><li>**项目：<strong>一些有进度有其他属性的复杂任务</strong>，**对我来说某个app的开发计划就是一个项目，我一般会用看板或者多维表格的形式记录，而不仅仅是一个任务清单，因为可能会涉及到优先级、状态、负责人、实现方案等等，它都是归属在项目下的。</li></ul><p>思路有了，工具是必不可少的，不同的工具有不同擅长的地方，所以我不会过分追求all in one。首先日程，尝试的app没有太多，自带的日历app就很满意了。待办和提醒我选择了things3，并在桌面上摆放了三个小组件，Today、Deadlines和SomeDay，分别对应今天要完成的任务，有截至日期的任务和抽时间完成的任务，在每周末写周记时，也可以利用Things3的日志薄功能看到过去每天都完成了什么任务，所以为了不扰乱视线，在完成“提醒”类的事件后我会直接删除掉，而不是点击完成。关于“项目”我目前在尝试用飞书进行管理，在知识库里新建了一个多维表格，在进行下一步任务规划的时候把需要最近需要完成/处理的任务标为今天。</p><p><img src="https://s2.loli.net/2023/06/20/lQa2twvTdCUILYy.png" alt="image-20230620171202846"></p><p>如此以来，一天任务的优先级可理解为：</p><ul><li>日程：优先级最高，按时参加</li><li>Deadlines（即将截止）：越快到期优先级越高</li><li>Today：尽量把一天的任务完成，否则顺延</li><li>项目：尽量把需处理的任务完成，否则顺延</li><li>Deadlines（未截止）：当天任务完成后，可以考虑开始还没快到截止日期的任务</li><li>Someday：当天任务完成后，可以考虑开始未规划时间的任务</li></ul><p>因为关于app的使用还没完全确定下来，各式各样的app也尝试了很多，目前选择的还没有更深入的使用，等有时间了准备写一篇长文仔细讲一下，到时候直接在少数派上写一篇吧（又在挖坑了</p><h2 id="买了什么" tabindex="-1">买了什么 <a class="header-anchor" href="#买了什么" aria-label="Permalink to &quot;买了什么&quot;">​</a></h2><p><img src="https://s2.loli.net/2023/06/20/khgJemw2oSA4f1M.png" alt="image-20230620171221406"></p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>找实习没想象中的顺利，快到端午放假了，再好好准备准备之后的面试吧，或许会去一个小公司，或许会直接准备秋招了。app好久没更新了，再等等我。</p>',19);function _(e,u,f,k,b,y){const l=o("Badge");return s(),r("div",null,[a("h1",g,[t(n(e.$frontmatter.title)+" ",1),p(l,{type:"tip",text:String(e.$frontmatter.date).slice(0,10)},null,8,["text"]),t(),h]),m])}const T=i(d,[["render",_]]);export{x as __pageData,T as default};
