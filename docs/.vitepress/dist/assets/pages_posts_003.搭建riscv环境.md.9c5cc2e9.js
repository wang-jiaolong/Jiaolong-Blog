import{_ as l,D as t,o as p,c as o,z as e,a as s,t as c,G as i,O as r}from"./chunks/framework.89d0ee0c.js";const _=JSON.parse('{"title":"使用cva6+spike搭建RISC-V环境","description":"","frontmatter":{"title":"使用cva6+spike搭建RISC-V环境","date":"2022-08-04T12:21:14.000Z","img":"https://s2.loli.net/2022/08/08/U2JCnFPyphV145b.png"},"headers":[],"relativePath":"pages/posts/003.搭建riscv环境.md","filePath":"pages/posts/003.搭建riscv环境.md"}'),d={name:"pages/posts/003.搭建riscv环境.md"},C={id:"frontmatter-title",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }} <Badge type="tip" :text="String($frontmatter.date).slice(0,10)" />"'},"​",-1),h=r(`<h2 id="_0-准备" tabindex="-1">0.准备 <a class="header-anchor" href="#_0-准备" aria-label="Permalink to &quot;0.准备&quot;">​</a></h2><p>虚拟机：<code>Ubuntu 20.04</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install -y git curl gcc g++ make autoconf gtkwave</span></span></code></pre></div><h2 id="_1-clone-cva6" tabindex="-1">1. Clone cva6 <a class="header-anchor" href="#_1-clone-cva6" aria-label="Permalink to &quot;1. Clone cva6&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/openhwgroup/cva6.git</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd cva6</span></span></code></pre></div><p>下载子模块</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git submodule update --init --recursive</span></span></code></pre></div><blockquote><p>可能会failed，多执行几次，直到全部下载完成</p></blockquote><h2 id="_2-set-up-environment" tabindex="-1">2. Set up environment <a class="header-anchor" href="#_2-set-up-environment" aria-label="Permalink to &quot;2. Set up environment&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mkdir install</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export RISCV=&quot;/home/jiaolong/cva6/install&quot;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export PATH=&quot;$PATH:/home/jiaolong/cva6/install/bin&quot;</span></span></code></pre></div><blockquote><p>路径更换为自己的cva6路径</p><p>export为临时更改环境变量</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">source ~/.bashrc</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./ci/setup.sh</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./ci/install-riscvpk.sh</span></span></code></pre></div><h2 id="_3-安装spike和pk" tabindex="-1">3.安装Spike和pk <a class="header-anchor" href="#_3-安装spike和pk" aria-label="Permalink to &quot;3.安装Spike和pk&quot;">​</a></h2><p>在<code>riscv-isa-sim</code>路径下打开终端：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt-get install device-tree-compiler</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir build</span></span>
<span class="line"><span style="color:#A6ACCD;">cd build</span></span>
<span class="line"><span style="color:#A6ACCD;">../configure --prefix=$RISCV</span></span>
<span class="line"><span style="color:#A6ACCD;">make</span></span>
<span class="line"><span style="color:#A6ACCD;">[sudo] make install</span></span></code></pre></div><p>在<code>riscv-pk</code>路径下打开终端：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mkdir build</span></span>
<span class="line"><span style="color:#A6ACCD;">cd build</span></span>
<span class="line"><span style="color:#A6ACCD;">../configure --prefix=$RISCV --host=riscv64-unknown-elf</span></span>
<span class="line"><span style="color:#A6ACCD;">make</span></span>
<span class="line"><span style="color:#A6ACCD;">make install</span></span></code></pre></div><h2 id="_4-1-编译测试" tabindex="-1">4.1. 编译测试 <a class="header-anchor" href="#_4-1-编译测试" aria-label="Permalink to &quot;4.1. 编译测试&quot;">​</a></h2><ol><li><p>编写简单测试函数add.c</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">echo &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">int f(int x){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return x+3;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">int main(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        printf(&quot;hello cva6\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        printf(&quot;%d\\n&quot;,f(3));</span></span>
<span class="line"><span style="color:#A6ACCD;">}&#39; &gt; hello.c</span></span></code></pre></div></li><li><p>使用<code>riscv64-unknown-elf-gcc</code>编译RISC-V可执行文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">riscv64-unknown-elf-gcc add.c -o add</span></span></code></pre></div></li><li><p>使用<code>spike pk</code>模拟运行RISC-V指令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">spike pk add</span></span></code></pre></div><p><img src="https://s2.loli.net/2022/08/08/fiYagDkSnqdKC4j.png" alt="image-20220808135230132"></p></li><li><p>使用<code>riscv64-unknown-elf-gcc</code>生成RISC-V指令的汇编代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">riscv64-unknown-elf-gcc -S add.c -o add.s</span></span></code></pre></div><p><img src="https://s2.loli.net/2022/08/08/U2JCnFPyphV145b.png" alt="image-20220808135205903"></p></li></ol><br><hr><br><blockquote><p>参考链接：</p><ul><li><a href="https://blog.csdn.net/IT_LanTian/article/details/122324909" target="_blank" rel="noreferrer">https://blog.csdn.net/IT_LanTian/article/details/122324909</a></li><li><a href="https://zhuanlan.zhihu.com/p/445793777" target="_blank" rel="noreferrer">Hello CVA6 World! </a></li></ul></blockquote>`,28);function g(a,m,A,y,b,v){const n=t("Badge");return p(),o("div",null,[e("h1",C,[s(c(a.$frontmatter.title)+" ",1),i(n,{type:"tip",text:String(a.$frontmatter.date).slice(0,10)},null,8,["text"]),s(),u]),h])}const f=l(d,[["render",g]]);export{_ as __pageData,f as default};
