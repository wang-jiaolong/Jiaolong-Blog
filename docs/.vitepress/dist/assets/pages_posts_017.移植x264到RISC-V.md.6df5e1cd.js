import{_ as l,D as p,o,c as t,z as n,a,t as i,G as c,O as r}from"./chunks/framework.89d0ee0c.js";const D=JSON.parse('{"title":"移植x264到RISC-V","description":"","frontmatter":{"title":"移植x264到RISC-V","date":"2022-09-17T22:32:14.000Z","img":"https://s2.loli.net/2022/10/26/Usvab2u6wkVrnKN.webp"},"headers":[],"relativePath":"pages/posts/017.移植x264到RISC-V.md","filePath":"pages/posts/017.移植x264到RISC-V.md"}'),C={name:"pages/posts/017.移植x264到RISC-V.md"},d={id:"frontmatter-title",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }} <Badge type="tip" :text="String($frontmatter.date).slice(0,10)" />"'},"​",-1),u=r(`<blockquote><p>安装好RISC-V工具链后。</p></blockquote><h2 id="移植nasm" tabindex="-1">移植nasm <a class="header-anchor" href="#移植nasm" aria-label="Permalink to &quot;移植nasm&quot;">​</a></h2><p>下载地址：<a href="https://www.nasm.us/pub/nasm/releasebuilds/2.14.01/" target="_blank" rel="noreferrer">https://www.nasm.us/pub/nasm/releasebuilds/2.14.01/</a></p><p>下载nasm-2.14.01.tar.bz2</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tar -jxvf nasm-2.14.01.tar.bz2</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/nasm --build=riscv64-unknown-linux-gnu</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">make</span></span>
<span class="line"><span style="color:#A6ACCD;">make install</span></span></code></pre></div><h2 id="移植x264" tabindex="-1">移植x264 <a class="header-anchor" href="#移植x264" aria-label="Permalink to &quot;移植x264&quot;">​</a></h2><p>官网： <a href="https://www.videolan.org/developers/x264.html" target="_blank" rel="noreferrer">x264, the best H.264/AVC encoder - VideoLAN</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tar -jxvf x264-master.tar.bz2</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/x264 --enable-shared --enable-static --cross-prefix=riscv64-unknown-linux-gnu- --host=riscv64-unknown-linux-gnu</span></span></code></pre></div><p>如果报错</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">checking whether riscv64-unknown-linux-gnu-gcc works... no</span></span>
<span class="line"><span style="color:#A6ACCD;">Failed commandline was:</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">riscv64-unknown-linux-gnu-gcc conftest.c -m64  -Wall -I. -I$(SRCPATH)   -Werror=attributes -Werror=ignored-attributes   -m64  -lm -o conftest</span></span>
<span class="line"><span style="color:#A6ACCD;">riscv64-unknown-linux-gnu-gcc: error: unrecognized command-line option &#39;-m64&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">riscv64-unknown-linux-gnu-gcc: error: unrecognized command-line option &#39;-m64&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">Failed program was:</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">int main (void) {  return 0; }</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">DIED: No working C compiler found.</span></span></code></pre></div><p>在configure中删除 <code>-m64</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo gedit ~/.bashrc</span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加一句</span></span>
<span class="line"><span style="color:#A6ACCD;">export LD_LIBRARY_PATH=/xxxx/TensorRT-7.0.0.11/lib:$LD_LIBRARY_PATH</span></span>
<span class="line"><span style="color:#A6ACCD;"># 保存退出</span></span>
<span class="line"><span style="color:#A6ACCD;">source ~/.bashrc</span></span></code></pre></div><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h2><p>如果用<code>riscv64-unknown-linux-gnu-gcc</code>编译</p><p>不知道为什么只能在x264文件夹下编译：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">riscv64-unknown-linux-gnu-gcc demo.c -o demo -L /usr/local/x264/lib  -lx264</span></span></code></pre></div><p>QEMU执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/home/jiaolong/riscvv/qemu-7.1.0/build/riscv64-linux-user/qemu-riscv64 -cpu rv64,v=true,vlen=256,vext_spec=v1.0 -L $RISCV/sysroot /home/jiaolong/x264/x264-master/demo</span></span></code></pre></div><h3 id="对比" tabindex="-1">对比： <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比：&quot;">​</a></h3><blockquote><p>测试文件：</p><p><a href="http://trace.eas.asu.edu/yuv/index.html" target="_blank" rel="noreferrer">YUV Sequences (asu.edu)</a></p><p>2001 Frames 352x288</p><p>代码来源：<a href="https://blog.csdn.net/leixiaohua1020/article/details/42078645" target="_blank" rel="noreferrer">(37条消息) 最简单的视频编码器：基于libx264（编码YUV为H.264）_雷霄骅的博客-CSDN博客</a></p></blockquote><p>gcc下测试</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc demo.c -o demo -L /usr/local/x264_86/lib  -lx264</span></span></code></pre></div><p><img src="https://s2.loli.net/2022/10/26/Usvab2u6wkVrnKN.webp" alt="202210231148942"></p><p><img src="https://s2.loli.net/2022/10/26/F91KtIwAXpWbda8.webp" alt="image"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">root@ubuntu:/home/jiaolong/x264_86/x264-master# time ./demo</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [warning]: b-pyramid normal + intra-refresh is not supported</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: using cpu capabilities: MMX2 SSE2Fast SSSE3 SSE4.2 AVX FMA3 BMI2 AVX2</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: profile High, level 2.1, 4:2:0, 8-bit</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: frame I:433   Avg QP:28.45  size: 21940</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: frame P:1110  Avg QP:30.57  size: 14737</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: mb I  I16..4: 24.9% 25.8% 49.3%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: mb P  I16..4: 21.8% 15.8% 20.3%  P16..4: 26.9%  7.9%  7.3%  0.0%  0.0%    skip: 0.0%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: 8x8 transform intra:26.7% inter:35.0%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: coded y,uvDC,uvAC intra: 75.1% 95.1% 93.0% inter: 63.3% 100.0% 96.3%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: i16 v,h,dc,p: 19% 61% 18%  2%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: i8 v,h,dc,ddl,ddr,vr,hd,vl,hu:  1% 61% 22%  1%  1%  1%  3%  1% 10%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: i4 v,h,dc,ddl,ddr,vr,hd,vl,hu:  3% 78%  7%  1%  1%  1%  3%  1%  7%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: i8c dc,h,v,p: 18% 77%  1%  4%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: Weighted P-Frames: Y:21.9% UV:21.9%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: kb/s:3351.60</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">real	0m6.565s</span></span>
<span class="line"><span style="color:#A6ACCD;">user	0m5.570s</span></span>
<span class="line"><span style="color:#A6ACCD;">sys	0m0.987s</span></span></code></pre></div><p>riscv下测试</p><p><img src="https://s2.loli.net/2022/10/26/AtqpgeTH7YsWF4B.webp" alt="image"></p><p><img src="https://s2.loli.net/2022/10/26/VcljWeGAuSQ4gEN.webp" alt="image"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">root@ubuntu:/home/jiaolong/x264/x264-master# time /home/jiaolong/riscvv/qemu-7.1.0/build/riscv64-linux-user/qemu-riscv64 -cpu rv64,v=true,vlen=256,vext_spec=v1.0 -L $RISCV/sysroot /home/jiaolong/x264/x264-master/demo</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [warning]: b-pyramid normal + intra-refresh is not supported</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: using cpu capabilities: none!</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: profile High, level 2.1, 4:2:0, 8-bit</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: frame I:433   Avg QP:28.45  size: 21994</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: frame P:1110  Avg QP:30.57  size: 14755</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: mb I  I16..4: 25.4% 25.9% 48.7%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: mb P  I16..4: 22.1% 15.7% 19.9%  P16..4: 27.0%  7.9%  7.3%  0.0%  0.0%    skip: 0.0%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: 8x8 transform intra:26.7% inter:35.1%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: coded y,uvDC,uvAC intra: 75.1% 95.2% 93.0% inter: 63.4% 100.0% 96.4%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: i16 v,h,dc,p: 19% 61% 18%  3%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: i8 v,h,dc,ddl,ddr,vr,hd,vl,hu:  1% 61% 24%  1%  1%  0%  2%  1%  9%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: i4 v,h,dc,ddl,ddr,vr,hd,vl,hu:  3% 79%  8%  1%  2%  0%  2%  1%  5%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: i8c dc,h,v,p: 18% 77%  1%  4%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: Weighted P-Frames: Y:21.9% UV:21.9%</span></span>
<span class="line"><span style="color:#A6ACCD;">x264 [info]: kb/s:3357.30</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">real	2m18.586s</span></span>
<span class="line"><span style="color:#A6ACCD;">user	2m17.160s</span></span>
<span class="line"><span style="color:#A6ACCD;">sys	0m1.103s</span></span></code></pre></div>`,32);function m(s,h,g,y,x,v){const e=p("Badge");return o(),t("div",null,[n("h1",d,[a(i(s.$frontmatter.title)+" ",1),c(e,{type:"tip",text:String(s.$frontmatter.date).slice(0,10)},null,8,["text"]),a(),A]),u])}const f=l(C,[["render",m]]);export{D as __pageData,f as default};
