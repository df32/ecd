import{e as a}from"./app.0e8128eb.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=a(`<h1 id="html-print-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#html-print-\u76F8\u5173" aria-hidden="true">#</a> HTML_PRINT \u76F8\u5173</h1><blockquote><p>\u7FFB\u8BD1\u81EA\u539F\u6587\u6863\uFF1Ahttps://osdn.net/projects/emuera/wiki/exhtml</p></blockquote><p>\u672C\u8282\u4ECB\u7ECD<code>HTML_PRINT</code>\u548C\u5176\u4ED6\u4E0E<code>html</code>\u76F8\u5173\u7684\u547D\u4EE4\u3002</p><p>\u901A\u8FC7\u4F7F\u7528\u76F8\u5173\u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u7528\u7C7B\u4F3C\u4E8E<code>html</code>\u7684\u8BED\u6CD5\u6765\u6307\u5B9A\u663E\u793A\u5185\u5BB9\u3002</p><h2 id="html-print" tabindex="-1"><a class="header-anchor" href="#html-print" aria-hidden="true">#</a> HTML_PRINT</h2><p>\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528\u7C7B\u4F3C<code>html</code>\u6807\u7B7E\u7684<code>PRINT</code>\u6307\u4EE4\u3002</p><p>\u53C2\u6570\u4E0D\u662F\u50CF<code>PRINT</code>\u90A3\u6837\u7684\u5B57\u7B26\u4E32\uFF0C\u800C\u662F\u50CF<code>PRINTS</code>\u90A3\u6837\u7684\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F\uFF0C\u5E76\u4E14\u81EA\u52A8\u65AD\u884C\uFF0C\u6240\u4EE5\u5B83\u5B9E\u9645\u4E0A\u7C7B\u4F3C\u4E8E<code>PRINTSL</code>\u3002</p><p>\u7528<code>HTML_PRINT</code>\u7ED8\u56FE\u4E0D\u53D7<code>ALIGNMENT</code>\u3001<code>SETFONT</code>\u3001<code>COLOR</code>\u3001<code>FONTSTYLE</code>\u548C\u7C7B\u4F3C\u6307\u4EE4\u7684\u5F71\u54CD\u3002</p><p>\u6240\u6709\u8FD9\u4E9B\u6548\u679C\u90FD\u5FC5\u987B\u5728\u6807\u7B7E\u4E2D\u6307\u5B9A\u3002</p><p>\u4F7F\u7528&lt;tagname attribute=&#39;\u5C5E\u6027\u503C&#39;&gt;Text&lt;/tagname&gt;\u7684\u5F62\u5F0F\u3002</p><p>\u5C5E\u6027\u503C\u5FC5\u987B\u7528&quot;~&quot;\u6216&quot;~&quot;\u62EC\u8D77\u6765\u3002</p><p>\u4E3A\u4E86\u533A\u522B\u4E8E Emuera \u4E2D\u7684\u5B57\u7B26\u4E32\uFF0C\u5EFA\u8BAE\u7528&#39;~&#39;\u62EC\u4F4F\u5B83\u4EEC\u3002</p><h3 id="p" tabindex="-1"><a class="header-anchor" href="#p" aria-hidden="true">#</a> p</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5\u6587\u672C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>p</code> Tag \u53EA\u80FD\u653E\u5728\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E4B\u524D\uFF0C<code>&lt;/p&gt;</code>\u53EA\u80FD\u653E\u5728\u6700\u540E\u3002</p><p><code>&lt;/p&gt;</code>\u53EF\u4EE5\u88AB\u7701\u7565\u3002</p><ul><li>align <ul><li>\u5FC5\u8981</li><li>\u4E0E<code>ALIGNMENT</code>\u6307\u4EE4\u76F8\u5BF9\u5E94\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E3A<code>left</code>\u3001<code>right</code>\u6216<code>center</code>\u3002</li></ul></li></ul><h3 id="nobr" tabindex="-1"><a class="header-anchor" href="#nobr" aria-hidden="true">#</a> nobr</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nobr</span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5\u6587\u672C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nobr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u76F8\u5F53\u4E8E\u7528<code>PRINTSINGLE</code>\u6307\u4EE4\u7ED8\u56FE\u3002</p><p>\u5982\u679C\u6DFB\u52A0\u4E86\u8FD9\u4E2A\u6807\u7B7E\uFF0C\u7531\u4E8E\u8D85\u51FA\u7ED8\u56FE\u533A\u57DF\u800C\u5BFC\u81F4\u7684\u9690\u5F0F\u6362\u884C\u5C06\u4E0D\u4F1A\u88AB\u6267\u884C\uFF08\u53EF\u4EE5\u901A\u8FC7<code>&lt;br&gt;</code>\u8FDB\u884C\u663E\u5F0F\u6362\u884C\uFF09\u3002</p><p>\u7136\u800C\uFF0C\u4E0E\u6D4F\u89C8\u5668\u4E0D\u540C\uFF0CEmuera \u4E0D\u80FD\u6C34\u5E73\u6EDA\u52A8\uFF0C\u6240\u4EE5\u4F60\u4E0D\u4F1A\u770B\u5230\u8D85\u51FA\u7A97\u53E3\u5BBD\u5EA6\u7684\u4E1C\u897F\u3002</p><p><code>&lt;nobr&gt;</code>\u53EA\u80FD\u653E\u5728\u7B2C\u4E00\u4E2A\u6587\u672C\u4E4B\u524D\uFF0C<code>&lt;/nobr&gt;</code>\u53EA\u80FD\u653E\u5728\u6700\u540E\u4E00\u4E2A\u6587\u672C\u4E4B\u540E\u3002</p><p><code>&lt;/nobr&gt;</code>\u53EF\u4EE5\u7701\u7565\u3002</p><h3 id="br" tabindex="-1"><a class="header-anchor" href="#br" aria-hidden="true">#</a> br</h3><p>\u6362\u884C\u3002</p><p>\u5176\u6548\u679C\u662F\u5728\u663E\u793A\u884C\u4E0A\u51FA\u73B0\u65AD\u884C\uFF0C\u56E0\u6B64\u5728<code>CLEARLINE</code>\u548C<code>LINECOUT</code>\u4E2D\uFF0C\u4EFB\u4F55\u6570\u91CF\u7684<code>&lt;br&gt;</code>\u90FD\u5C06\u88AB\u89C6\u4E3A\u65AD\u884C\u3002</p><h3 id="button-nonbutton" tabindex="-1"><a class="header-anchor" href="#button-nonbutton" aria-hidden="true">#</a> button &amp; nonbutton</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">pos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nonbutton</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">pos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nonbutton</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>button</code>\u4F7F\u6240\u5305\u56F4\u7684\u6587\u672C\u6210\u4E3A\u53EF\u70B9\u51FB\u7684\u6309\u94AE\u3002</p><p><code>nonbutton</code>\u5C06\u6240\u5305\u542B\u7684\u6587\u672C\u6E32\u67D3\u4E3A\u975E\u6309\u94AE\u6587\u672C\u3002</p><ul><li>value <ul><li>\u53EA\u80FD\u4E3A\u6309\u94AE\u6307\u5B9A\u3002</li><li>\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u503C\uFF0C\u8BE5\u6309\u94AE\u4F1A\u88AB\u6E32\u67D3\u6210\u4E00\u4E2A\u975E\u6309\u94AE\uFF0C\u5C31\u50CF<code>&lt;nonbutton&gt;</code>\u4E00\u6837\uFF0C\u662F\u4E0D\u80FD\u70B9\u51FB\u7684\u3002</li></ul></li><li>title <ul><li>\u6307\u5B9A\u6309\u94AE\u88AB\u6307\u5411\u65F6\u663E\u793A\u7684\u5DE5\u5177\u63D0\u793A\u7684\u5185\u5BB9\u3002</li></ul></li><li>pos <ul><li>\u53EA\u6709\u5728\u5BF9\u9F50\u65B9\u5F0F\u4E3A\u5DE6\u4E14\u4F7F\u7528\u4E86<code>nobr</code>\u6807\u7B7E\u65F6\u624D\u53EF\u7528\u3002</li><li>\u5B83\u6307\u5B9A\u4E86\u5DE5\u5177\u63D0\u793A\u8DDD\u79BB\u5C4F\u5E55\u5DE6\u8FB9\u7F18\u7684\u4F4D\u7F6E\uFF0C\u662F\u5B57\u4F53\u5927\u5C0F\u7684\u4E00\u4E2A\u767E\u5206\u6BD4\u3002</li><li>\u4F8B\u5982\uFF0C<code>&lt;button pos=&#39;300&#39;&gt;Button&lt;/button&gt;</code>\u5C06\u628A\u6309\u94AE\u653E\u5728\u4E0E &quot;button &quot;\u5927\u81F4\u76F8\u540C\u7684\u4F4D\u7F6E\u3002</li></ul></li></ul><h3 id="font" tabindex="-1"><a class="header-anchor" href="#font" aria-hidden="true">#</a> font</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">face</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">bcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5\u6587\u672C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6539\u53D8\u5C01\u95ED\u533A\u57DF\u7684\u5B57\u4F53\u3001\u663E\u793A\u989C\u8272\u548C\u6309\u94AE\u9009\u62E9\u989C\u8272\u3002</p><p>\u8FD9\u4E2A\u6807\u7B7E\u53EF\u4EE5\u5D4C\u5957\u3002</p><ul><li>face <ul><li>\u6307\u5B9A\u5B57\u4F53\u540D\u79F0\u3002 \u5982\u679C\u6307\u5B9A\u4E86\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5B57\u4F53\u5C06\u662F\u914D\u7F6E\u4E2D\u6307\u5B9A\u7684\u5B57\u4F53\u3002</li><li>\u5982\u679C\u6307\u5B9A\u7684\u5B57\u4F53\u4E0D\u5B58\u5728\u6216\u4E0D\u88AB\u652F\u6301\uFF0C\u5C06\u4F7F\u7528<code>Microsoft Sans Serif</code>\u4EE3\u66FF\uFF08.Net\u6846\u67B6\u7684\u5B57\u4F53\u7C7B\uFF09\u3002</li></ul></li><li>color <ul><li>\u6307\u5B9A\u6587\u672C\u7684\u663E\u793A\u989C\u8272\u3002</li><li>\u989C\u8272\u53EF\u4EE5\u6307\u5B9A\u4E3A\u5341\u516D\u8FDB\u5236\u6570\u5B57\uFF0C\u5982<code>#FF0080</code>\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u4E3A\u4E00\u4E2A\u8BCD\uFF0C\u5982<code>red</code>\u6216<code>blue</code>\u3002</li><li>\u989C\u8272\u540D\u79F0\u662F\u57FA\u4E8E.Net\u6846\u67B6\u7684\u989C\u8272\u7ED3\u6784\u4E2D\u5B9A\u4E49\u7684\u989C\u8272\u3002</li><li>\u7136\u800C\uFF0C\u900F\u660E\u4E0D\u80FD\u88AB\u6307\u5B9A\u4E3A\u4E00\u4E2A\u989C\u8272\u540D\u79F0\u3002</li></ul></li><li>bcolor <ul><li>\u6307\u5B9A\u6309\u94AE\u88AB\u9009\u4E2D\u65F6\u7684\u989C\u8272\u3002</li></ul></li></ul><h3 id="b-i-u-s" tabindex="-1"><a class="header-anchor" href="#b-i-u-s" aria-hidden="true">#</a> b &amp; i &amp; u &amp; s</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>\u52A0\u7C97<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>\u659C\u4F53<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">&gt;</span></span>\u4E0B\u5212\u7EBF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s</span><span class="token punctuation">&gt;</span></span>\u5220\u9664\u7EBF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5C01\u95ED\u533A\u57DF\u5185\u7684\u7C97\u4F53\u3001\u659C\u4F53\u3001\u4E0B\u5212\u7EBF\u548C\u5220\u9664\u7EBF\u6587\u672C\u3002</p><h3 id="img" tabindex="-1"><a class="header-anchor" href="#img" aria-hidden="true">#</a> img</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">srcb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E\uFF5E<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728\u4E00\u884C\u4E2D\u663E\u793A\u4E00\u4E2A\u56FE\u50CF\u3002</p><p>\u5173\u4E8E\u5982\u4F55\u51C6\u5907\u56FE\u50CF\u7684\u4FE1\u606F\uFF0C\u89C1<a href="">\u8D44\u6E90\u8BBE\u7F6E</a>\u3002</p><ul><li><code>src</code>\u5C5E\u6027 <ul><li>\u9700\u8981</li><li>\u8D44\u6E90\u6587\u4EF6\u5939\u4E2D\u6307\u5B9A\u7684\u8D44\u6E90\u540D\u79F0 csv</li><li>\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u9AD8\u5EA6\u6216\u5BBD\u5EA6\uFF0C\u56FE\u50CF\u5C06\u88AB\u7F29\u5C0F\u6216\u653E\u5927\uFF0C\u4F7F\u5176\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u4E0E\u5B57\u4F53\u5927\u5C0F\u4E00\u81F4\uFF0C\u540C\u65F6\u4FDD\u6301\u957F\u5BBD\u6BD4\u3002</li><li>\u5982\u679C\u7ED8\u56FE\u63A5\u53E3\u662FWINAPI\uFF0C\u5C06\u4E0D\u6267\u884Calpha\u6DF7\u5408\u3002</li></ul></li><li>srcb\u5C5E\u6027 <ul><li>\u6307\u5B9A\u8D44\u6E90\u6587\u4EF6\u5939\u4E2D\u6307\u5B9A\u7684\u8D44\u6E90\u540D\u79F0 csv</li><li>srcb\u662F\u9009\u62E9\u6309\u94AE\u65F6\u5E94\u663E\u793A\u7684\u8D44\u6E90\u7684\u540D\u79F0\u3002</li><li>\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528\u4E0Esrc\u76F8\u540C\u7684\u56FE\u50CF\u3002</li><li>\u56FE\u50CF\u5C06\u88AB\u7F29\u5C0F\u6216\u653E\u5927\u5230\u4E0Esrc\u76F8\u540C\u7684\u5927\u5C0F\u3002</li></ul></li><li>\u9AD8\u5EA6\u5C5E\u6027 <ul><li>\u6307\u5B9A\u663E\u793A\u5C3A\u5BF8\u7684\u9AD8\u5EA6\u4E3A\u5B57\u4F53\u5927\u5C0F\u7684\u767E\u5206\u6BD4\u3002 \u5982\u679C\u7701\u7565\uFF0C\u503C\u4E3A100\u3002</li><li>\u5982\u679C\u6307\u5B9A\u4E86\u4E00\u4E2A\u8D1F\u503C\uFF0C\u56FE\u50CF\u5C06\u88AB\u5782\u76F4\u7FFB\u8F6C\u3002</li></ul></li><li>\u5BBD\u5EA6\u5C5E\u6027 <ul><li>\u663E\u793A\u5C3A\u5BF8\u7684\u5BBD\u5EA6\uFF0C\u5360\u5B57\u4F53\u5927\u5C0F\u7684\u767E\u5206\u6BD4\u3002 \u5982\u679C\u7701\u7565\uFF0C\u503C\u4E3A0\u3002</li><li>\u5982\u679C\u662F0\uFF0C\u5219\u4FDD\u6301\u539F\u59CB\u56FE\u50CF\u7684\u957F\u5BBD\u6BD4\u3002</li><li>\u5982\u679C\u662F\u5426\u5B9A\u7684\uFF0C\u56FE\u50CF\u5C06\u88AB\u6C34\u5E73\u7FFB\u8F6C\u3002</li></ul></li><li>ypos\u5C5E\u6027 <ul><li>\u6307\u5B9A\u663E\u793A\u4F4D\u7F6E\u7684\u5782\u76F4\u8F74\u4F4D\u7F6E\u4E3A\u5B57\u4F53\u5927\u5C0F\u7684\u767E\u5206\u6BD4\u3002 \u5982\u679C\u7701\u7565\uFF0C\u503C\u4E3A0\u3002</li><li>&quot;\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u4F4D\u7F6E\u662F\u57FA\u4E8E\u5B57\u4F53\u5927\u5C0F\uFF0C\u800C\u4E0D\u662F\u884C\u9AD8\u3002</li><li>\u4F7F\u7528<code>&lt;shape type=&#39;space&#39;&gt;</code>\u6216\u6309\u94AE\u7684pos\u5C5E\u6027\u6765\u8C03\u6574\u6C34\u5E73\u8F74\u7684\u4F4D\u7F6E\u3002</li></ul></li></ul><h3 id="shape" tabindex="-1"><a class="header-anchor" href="#shape" aria-hidden="true">#</a> shape</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shape</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>rect<span class="token punctuation">&#39;</span></span> <span class="token attr-name">param</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E\uFF5E<span class="token punctuation">&#39;</span></span> <span class="token attr-name">bcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E\uFF5E<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shape</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>space<span class="token punctuation">&#39;</span></span> <span class="token attr-name">param</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\uFF5E\uFF5E<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u4E00\u6761\u7EBF\u4E0A\u753B\u51FA\u6307\u5B9A\u7684\u5F62\u72B6\u3002</p><ul><li>\u7C7B\u578B\u5C5E\u6027 <ul><li>\u9700\u8981</li><li>\u8981\u753B\u7684\u5F62\u72B6\u7684\u7C7B\u578B\u3002</li><li>\u53EF\u4EE5\u4F7F\u7528\u77E9\u5F62\u6216\u7A7A\u95F4\u3002 <ul><li>type=&#39;rect&#39;</li><li>\u7ED8\u5236\u4E00\u4E2A\u77E9\u5F62\u3002</li><li>\u53C2\u6570\u53EF\u4EE5\u662F1\u62164\u4E2A\u6570\u5B57\u3002</li><li>\u5982\u679Cparam\u4E3A1\uFF0C\u5219\u6307\u5B9A\u77E9\u5F62\u7684\u5BBD\u5EA6\u3002</li><li><code>&lt;shape type=&#39;rect&#39; param=&#39;400&#39;&gt;</code> \u7ED8\u5236\u4E00\u4E2A\u5BBD\u5EA6\u4E3A\u5B57\u4F53\u5927\u5C0F400%\u7684\u77E9\u5F62\u3002 \u5982\u679C\u53C2\u6570\u662F4\uFF0C\u90A3\u4E48x\u3001y\u3001\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5C06\u6309\u8FD9\u4E2A\u987A\u5E8F\u6307\u5B9A\u3002</li><li><code>&lt;shape type=&#39;rect&#39; param=&#39;0,25,400,50&#39;&gt;</code> \u7ED8\u5236\u4E00\u4E2A\u9AD8\u5EA6\u4E3A\u5B57\u4F53\u5927\u5C0F50%\u7684\u77E9\u5F62\uFF0C\u5728\u884C\u7684\u4E0A\u65B9\u548C\u4E0B\u65B9\u5C45\u4E2D\u3002</li><li><code>param=&#39;400&#39;</code>\u76F8\u5F53\u4E8E<code>param=&#39;0\u30010\u3001400\u3001100&#39;</code>\u3002</li><li><code>type=&#39;space&#39;</code></li><li>\u5BF9\u4E8E<code>param</code>\u6307\u5B9A\u7684\u5BBD\u5EA6\uFF0C\u4E0D\u663E\u793A\u4EFB\u4F55\u4E1C\u897F\u3002</li><li>\u4F8B\u5982\uFF0C<code>&lt;shape type=&#39;space&#39; param=&#39;400&#39;&gt;</code>\u5BF9\u4E8E\u5B57\u4F53\u5927\u5C0F\u7684400%\u5C06\u4E0D\u753B\u4EFB\u4F55\u4E1C\u897F\u3002</li><li>\u8FD9\u5927\u81F4\u76F8\u5F53\u4E8E\u56DB\u4E2A\u5168\u5BBD\u7684\u7A7A\u95F4\u3002</li></ul></li></ul></li><li>param Attributes <ul><li>\u9700\u8981</li><li>\u8FD9\u662F\u4E00\u4E2A\u53C2\u6570\uFF0C\u7528\u4E8E\u4EE5\u5B57\u4F53\u5927\u5C0F\u7684\u767E\u5206\u6BD4\u6765\u7ED8\u5236\u5F62\u72B6\u3002</li><li>\u8981\u6307\u5B9A\u591A\u4E2A\u503C\uFF0C\u8BF7\u7528\u9017\u53F7\u5206\u5F00\u3002</li></ul></li><li>\u989C\u8272\u5C5E\u6027 <ul><li>\u6307\u5B9A\u5F62\u72B6\u7684\u989C\u8272\u3002 \u89C4\u8303\u7684\u683C\u5F0F\u4E0E<code>&lt;font&gt;</code>\u6807\u7B7E\u7684\u683C\u5F0F\u76F8\u540C\u3002</li></ul></li><li>bcolor\u5C5E\u6027 <ul><li>\u6307\u5B9A\u5F62\u72B6\u4E0A\u6240\u9009\u6309\u94AE\u7684\u989C\u8272\u3002 \u89C4\u8303\u7684\u683C\u5F0F\u4E0E<code>&lt;font&gt;</code>\u6807\u7B7E\u76F8\u540C\u3002</li></ul></li></ul><h3 id="\u5B57\u7B26\u5B9E\u4F53\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u5B9E\u4F53\u5F15\u7528" aria-hidden="true">#</a> \u5B57\u7B26\u5B9E\u4F53\u5F15\u7528</h3><blockquote><p>https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML</p></blockquote><p>\u5982\u679C\u4E00\u4E2A\u8BCD\u88AB\u5305\u542B\u5728<code>&amp;</code>\u548C<code>;</code>\u4E2D\uFF0C\u5B83\u5C06\u88AB\u89C6\u4E3A\u4E00\u4E2A\u5B57\u7B26\u5B9E\u4F53\u5F15\u7528\u3002</p><p>\u652F\u6301\u7684\u5B57\u7B26\u53C2\u8003\u662F<code>&amp;amp;</code> <code>&amp;gt;</code> <code>&amp;lt;</code> <code>&amp;quot;</code> <code>&amp;apos;</code> \u548C <code>&amp;#nn;</code> <code>&amp;#xnn;</code>\u3002</p><h3 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u6CE8\u91CA --&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7528<code>&lt;!--</code>\uFF0C<code>--&gt;</code>\u62EC\u8D77\u6765\u7684\u5B57\u7B26\u3002</p><h2 id="\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u76F8\u5173\u547D\u4EE4</h2><h3 id="html-tagsplit" tabindex="-1"><a class="header-anchor" href="#html-tagsplit" aria-hidden="true">#</a> HTML_TAGSPLIT</h3><div class="language-basic ext-basic line-numbers-mode"><pre class="language-basic"><code>HTML_TAGSPLIT <span class="token operator">&lt;</span>\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>\u6570\u503C\u53D8\u91CF<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>\u5B57\u7B26\u4E32\u53D8\u91CF<span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u76EE\u6807\u5B57\u7B26\u4E32\u88AB\u89E3\u91CA\u4E3A HTML \u5B57\u7B26\u4E32\uFF0C\u88AB\u5206\u5272\u6210\u6807\u7B7E\u548C\u7EAF\u6587\u672C\uFF0C\u5206\u5272\u7684\u6570\u91CF\u88AB\u5206\u914D\u7ED9<code>RESULT</code>\uFF0C\u5206\u5272\u540E\u7684\u5B57\u7B26\u4E32\u88AB\u5206\u914D\u7ED9<code>RESULTS</code>\u3002</p><p>\u5982\u679C\u6307\u5B9A\u4E86\u7B2C\u4E8C\u4E2A\u6216\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u5B83\u5C06\u88AB\u5206\u914D\u7ED9\u6307\u5B9A\u7684\u53D8\u91CF\u800C\u4E0D\u662F<code>RESULT</code>\u6216<code>RESULTS</code>\u3002</p><p>\u5982\u679C\u5728\u5206\u5272\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\uFF0C<code>RESULT</code>\u5C06\u88AB\u5206\u914D\u4E3A<code>-1</code>\u3002</p><p><code>HTML_TAGSPLIT</code>\u5E76\u4E0D\u9A8C\u8BC1\u6807\u7B7E\u7684\u5185\u5BB9\u6216\u5BF9\u5E94\u7684\u9002\u5F53\u6027\u3002</p><p>\u5982\u679C\u5206\u5272\u7684\u6570\u91CF\u8D85\u8FC7\u4E86<code>RESULTS</code>\u6570\u7EC4\u7684\u5927\u5C0F\uFF0C\u591A\u4F59\u7684\u90E8\u5206\u5C06\u4E0D\u4F1A\u88AB\u5206\u914D\u7ED9<code>RESULTS</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HTML_TAGSPLIT &quot;&lt;p align=&#39;right&#39;&gt;A&lt;! --comment--&gt;B&lt;font color=&#39;red&#39;&gt;C&lt;/font&gt;&lt;/p&gt;&quot;
RESULTS:0 = &lt;p align=&#39;right&#39;&gt;
RESULTS:1 = A
RESULTS:2 = &lt;! --comment--&gt;
RESULTS:3 = B
RESULTS:4 = &lt;font color=&#39;red&#39;&gt;
RESULTS:5 = C
RESULTS:6 = &lt;/font&gt;
RESULTS:7 = &lt;/p&gt;
RESULT = 8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u76F8\u5173\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u51FD\u6570" aria-hidden="true">#</a> \u76F8\u5173\u51FD\u6570</h2><h3 id="str-html-popprintingstr" tabindex="-1"><a class="header-anchor" href="#str-html-popprintingstr" aria-hidden="true">#</a> str HTML_POPPRINTINGSTR()</h3><p>\u68C0\u7D22\u5F53\u524D\u5728PRINT\u7B49\u5F85\u6362\u884C\u7684Html\u683C\u5F0F\u7684\u5B57\u7B26\u4E32\u7F13\u51B2\u533A\uFF0C\u5E76\u6E05\u7A7A\u7F13\u51B2\u533A\u3002</p><p>\u56E0\u4E3Ap\u6807\u7B7E\u6CA1\u6709\u88AB\u9644\u52A0\uFF0C\u6240\u4EE5<code>ALIGNMENT</code>\u6307\u4EE4\u7684\u5BF9\u9F50\u65B9\u5F0F\u6CA1\u6709\u88AB\u53CD\u6620\u51FA\u6765\u3002</p><h3 id="str-html-getprintedstr-int-lineno" tabindex="-1"><a class="header-anchor" href="#str-html-getprintedstr-int-lineno" aria-hidden="true">#</a> str HTML_GETPRINTEDSTR(int lineNo)</h3><p>\u68C0\u7D22\u663E\u793A\u7684\u884C\u4E2D\u7531lineNo\u6307\u5B9A\u7684\u884C\u7684\u5185\u5BB9\uFF0C\u4F5C\u4E3Ahtml\u683C\u5F0F\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u5BF9\u884C\u7684\u8BA1\u6570\u4E0E<code>LINECOUNT</code>\u548C<code>CLEARLINE</code>\u6307\u4EE4\u76F8\u540C\u3002</p><h3 id="str-html-escape-str-value" tabindex="-1"><a class="header-anchor" href="#str-html-escape-str-value" aria-hidden="true">#</a> str HTML_ESCAPE(str value)</h3><p>\u5C06\u76EE\u6807\u5B57\u7B26\u4E32\u8F6C\u4E3AHtml\u683C\u5F0F\uFF08\u8F6C\u6362\u4E3A\u5B57\u7B26\u53C2\u8003\uFF09\u3002</p><p>\u4F7F\u7528<code>HTML_TOPLAINTEXT</code>\u51FD\u6570\u6765\u53D6\u6D88\u6CE8\u91CA\u3002</p><h3 id="str-html-toplaintext-str-value" tabindex="-1"><a class="header-anchor" href="#str-html-toplaintext-str-value" aria-hidden="true">#</a> str HTML_TOPLAINTEXT(str value)</h3><p>\u5C06\u76EE\u6807html\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u7EAF\u6587\u672C\u3002</p><p>\u5177\u4F53\u6765\u8BF4\uFF0Chtml\u6807\u7B7E\u88AB\u4ECE\u5B57\u7B26\u4E32\u4E2D\u5220\u9664\uFF0C\u5B57\u7B26\u53C2\u8003\u88AB\u6269\u5C55\u3002</p>`,78);function e(p,l){return t}var i=n(s,[["render",e]]);export{i as default};
