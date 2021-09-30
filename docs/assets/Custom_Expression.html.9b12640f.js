import{e}from"./app.3c4c8223.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const a={},s=e(`<h1 id="\u81EA\u5B9A\u4E49\u8868\u8FBE\u5F0F\u5185\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8868\u8FBE\u5F0F\u5185\u51FD\u6570" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8868\u8FBE\u5F0F\u5185\u51FD\u6570</h1><blockquote><p>\u7FFB\u8BD1\u81EA\u539F\u6587\u6863\uFF1Ahttps://osdn.net/projects/emuera/wiki/UserMeth</p></blockquote><p>\u8868\u8FBE\u5F0F\u5185\u51FD\u6570\uFF0C\u5373\u9664\u4E86\u5185\u7F6E\u51FD\u6570\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5728\u8868\u8FBE\u5F0F\u4E2D\u8C03\u7528<code>@~~</code>\u4E2D\u5B9A\u4E49\u7684\u51FD\u6570\u3002</p><p>\u5173\u4E8E\u8868\u8FBE\u5F0F\u5185\u51FD\u6570\u7684\u66F4\u591A\u4FE1\u606F\uFF0C<a href="">\u8BF7\u53C2\u89C1\u8868\u8FBE\u5F0F\u5185\u51FD\u6570</a>\u3002</p><h2 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h2><p>\u88AB\u8C03\u7528\u7684\u51FD\u6570\u5FC5\u987B\u6709<code>#FUNCTION</code>\u6216<code>#FUNCTIONS</code>\u6807\u5FD7\uFF0C\u5E76\u4E14\u5FC5\u987B\u4EE5<code>RETURNF</code>\u7ED3\u675F\u3002</p><p><code>#FUNCTION</code>\u8868\u793A\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\u3002</p><p><code>#FUNCTION(S)</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002</p><p>\u4E00\u4E2A\u5E26\u6709<code>#FUNCTION(S)</code>\u7684\u51FD\u6570\u4E0D\u80FD\u7528\u901A\u5E38\u7684<code>RETURN</code>\u6765\u7EC8\u6B62\u3002 \u76F8\u53CD\uFF0C\u5B83\u4EEC\u662F\u4EE5<code>RETURNF</code>\u7EC8\u6B62\u7684\u3002</p><p><code>RETURNF</code>\u53EF\u4EE5\u662F\u4E00\u4E2A\u516C\u5F0F\u6216\u4E00\u4E2A\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F\u3002 \u5B83\u5FC5\u987B\u7B26\u5408<code>#FUNCTION(S)</code>\u4E2D\u7ED9\u51FA\u7684\u7C7B\u578B\u3002</p><p>\u5982\u679C\u7701\u7565<code>RETURNF</code>\u53C2\u6570\uFF0C\u6216\u8005\u5728\u6CA1\u6709<code>RETURNF</code>\u7684\u60C5\u51B5\u4E0B\u5230\u8FBE\u51FD\u6570\u7684\u7EC8\u70B9\uFF0C\u5219\u8FD4\u56DE<code>0</code>\u6216<code>&quot;&quot;</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>X = GET_CFLAG(TARGET, Y)
STR = %GET_NAME(TARGET)%

@GET_CFLAG(ARG:0, ARG:1)
#FUNCTION
  SIF ARG:0 &lt;= 0 || ARG:0 &gt;= CHARANUM
    RETURNF 0
  RETURNF CFLAG:(ARG:0):(ARG:1)

@GET_NAME(ARG:0)
#FUNCTIONS
  SIF ARG:0 &lt;= 0 || ARG:0 &gt;= CHARANUM
    RETURNF &quot;&quot;
  RETURNF NAME:(ARG:0)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u51FD\u6570\u5B9A\u4E49\u7684\u53C2\u6570\u7528<code>()</code>\u62EC\u8D77\u6765\uFF0C\u4F46\u8FD9\u4E0D\u662F\u5B9A\u4E49\u7684\u5FC5\u8981\u8BED\u6CD5\u3002</p><p>\u5982\u679C\u4F60\u60F3\u5728\u8868\u8FBE\u5F0F\u4E2D\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u5E26<code>()</code>\u7684\u8BED\u6CD5\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u7528\u9017\u53F7\u628A\u51FD\u6570\u540D\u548C\u53C2\u6570\u5206\u5F00\uFF0C\u5C31\u50CF\u4F60\u5BF9\u666E\u901A\u51FD\u6570\u90A3\u6837\u3002</p><p>\u4E0B\u9762\u4E24\u884C\u7684\u610F\u601D\u662F\u4E00\u6837\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@GET_CFLAG(ARG:0, ARG:1)
@GET_CFLAG, ARG, ARG:1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4E3A\u53C2\u6570\u8BBE\u7F6E\u521D\u59CB\u503C\u3002</p><p>\u5173\u4E8E\u521D\u59CB\u503C\u7684\u8BED\u6CD5\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u5728\u4F60\u81EA\u5DF1\u7684<a href="">\u51FD\u6570\u4E2D\u6307\u5B9A\u53C2\u6570</a>\u3002</p><h2 id="\u9650\u5236\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u6761\u4EF6" aria-hidden="true">#</a> \u9650\u5236\u6761\u4EF6</h2><h3 id="\u4E0D\u80FD\u4ECEcall\u4E2D\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u80FD\u4ECEcall\u4E2D\u8C03\u7528" aria-hidden="true">#</a> \u4E0D\u80FD\u4ECECALL\u4E2D\u8C03\u7528</h3><p>\u5E26\u6709<code>FUNCTION(S)</code>\u6807\u5FD7\u7684\u51FD\u6570\u4E0D\u80FD\u4EE5\u901A\u5E38\u7684\u65B9\u5F0F\u8C03\u7528\uFF0C\u4F8B\u5982<code>CALL</code>\u3002</p><p>\u5B83\u53EA\u80FD\u5728\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4E2D\u88AB\u8C03\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;\u9519\u8BEF
CALL GET_CFLAG, X, Y

@GET_CFLAG(ARG:0, ARG:1)
#FUNCTION
  SIF ARG:0 &lt;= 0 || ARG:0 &gt;= CHARANUM
    RETURNF 0
  RETURNF CFLAG:(ARG:0):(ARG:1)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>#FUNCTION(S)</code>\u53EF\u4EE5\u4ECE<code>CALLF</code>\u548C<code>CALLFORMF</code>\u4E2D\u8C03\u7528\uFF0C\u5B83\u4EEC\u662F\u8C03\u7528<code>FUNCTION(S)</code>\u7684\u4E13\u7528\u6307\u4EE4\u3002</p><h3 id="\u6709\u4E9B\u6307\u4EE4\u662F\u4E0D\u53EF\u7528\u7684" tabindex="-1"><a class="header-anchor" href="#\u6709\u4E9B\u6307\u4EE4\u662F\u4E0D\u53EF\u7528\u7684" aria-hidden="true">#</a> \u6709\u4E9B\u6307\u4EE4\u662F\u4E0D\u53EF\u7528\u7684</h3><p>\u5728\u5E26\u6709<code>FUNCTION(S)</code>\u6807\u5FD7\u7684\u51FD\u6570\u4E2D\uFF0C\u4E0D\u5141\u8BB8\u6709\u8F93\u5165\u7684\u547D\u4EE4\uFF0C\u5982<code>WAIT</code>\uFF0C\u548C\u5E26\u6709\u51FD\u6570\u8C03\u7528\u7684\u547D\u4EE4\uFF0C\u5982<code>CALL</code>\u3002</p><p>\u5982\u679C\u4F7F\u7528\u5B83\u4EEC\uFF0C\u5C31\u4F1A\u53D1\u751F\u9519\u8BEF\u3002</p><p>\u4E0D\u80FD\u4F7F\u7528<code>CALL</code>\u6307\u4EE4\uFF0C\u4F46\u53EF\u4EE5\u5728\u8868\u8FBE\u5F0F\u4E2D\u8C03\u7528\u5E26\u6709<code>FUNCTION(S)</code>\u6807\u5FD7\u7684\u51FD\u6570\u3002</p><p>\u4E5F\u53EF\u4EE5\u7528<code>CALLF</code>\u548C<code>CALLFORMF</code>\u6307\u4EE4\u8C03\u7528<code>#FUNCTION(S)</code>\u3002</p><h3 id="\u4E0D\u652F\u6301\u51FD\u6570\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u652F\u6301\u51FD\u6570\u91CD\u8F7D" aria-hidden="true">#</a> \u4E0D\u652F\u6301\u51FD\u6570\u91CD\u8F7D</h3><p>\u4E0D\u53EF\u80FD\u7528\u4E0D\u540C\u6570\u91CF\u6216\u7C7B\u578B\u7684\u53C2\u6570\u8C03\u7528\u4E00\u4E2A\u4EE5\u4E0A\u7684<code>#FUNCTION(S)</code>\u51FD\u6570\u3002</p><p>\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u540C\u540D\u7684\u51FD\u6570\uFF0C\u5982\u679C\u5B9A\u4E49\u4E86\u591A\u4E2A\u540C\u540D\u7684\u51FD\u6570\uFF0C\u53EA\u6709\u7B2C\u4E00\u4E2A\u51FD\u6570\u662F\u6709\u6548\u7684\u3002</p><h3 id="\u8986\u76D6\u5185\u7F6E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u8986\u76D6\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a> \u8986\u76D6\u5185\u7F6E\u51FD\u6570</h3><p>\u5982\u679C\u4F60\u5B9A\u4E49\u4E86\u4E00\u4E2A\u4E0E\u5185\u7F6E\u51FD\u6570\u540C\u540D\u7684\u51FD\u6570\uFF0C\u4F60\u5C06\u65E0\u6CD5\u8C03\u7528\u8BE5\u5185\u7F6E\u51FD\u6570\u3002</p><p>\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u5B9A\u4E49\u4E86<code>@ABS</code>\uFF0C\u4F60\u5C06\u65E0\u6CD5\u8C03\u7528\u539F\u6765\u7684<code>ABS</code>\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u5185\u7F6E\u51FD\u6570\u88AB\u8986\u76D6\uFF0CEmuera \u5C06\u5728\u542F\u52A8\u65F6\u663E\u793A\u4E00\u4E2A\u8B66\u544A\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u5185\u7F6E\u51FD\u6570\u88AB\u8986\u76D6\uFF0C\u5B83\u53EF\u80FD\u65E0\u6CD5\u6309\u9884\u671F\u5DE5\u4F5C\uFF0C\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6765\u7981\u6B62\u51FD\u6570\u7684\u8986\u76D6\u3002</p><p>\u5BF9\u4E8E\u6545\u610F\u8986\u76D6\u7684\u60C5\u51B5\uFF08\u4E0D\u63A8\u8350\uFF09\uFF0C\u4E5F\u6709\u4E00\u4E2A\u914D\u7F6E\u9009\u9879\uFF0C\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u88AB\u8986\u76D6\uFF0C\u5219\u4E0D\u53D1\u51FA\u8B66\u544A\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><p>\u5E26\u6709<code>FUNCTION(S)</code>\u6807\u5FD7\u7684\u51FD\u6570\u4E0D\u5E94\u8BE5\u6539\u53D8\u9664\u5C40\u90E8\u53D8\u91CF\u4EE5\u5916\u7684\u4EFB\u4F55\u53D8\u91CF\u3002</p><p>\u6539\u53D8\u975E\u5C40\u90E8\u53D8\u91CF\u7684\u51FD\u6570\uFF08\u6709\u526F\u4F5C\u7528\u7684\u51FD\u6570\uFF09\u53EF\u80FD\u4F1A\u7531\u4E8E\u77ED\u8DEF\u8BC4\u4F30\u6216\u8868\u8FBE\u5F0F\u8BC4\u4F30\u7684\u987A\u5E8F\u800C\u6539\u53D8\u5176\u884C\u4E3A\uFF0C\u5982\u4E0B\u6240\u8FF0\u3002</p><p>\u5BF9\u8FD9\u4E9B\u51FD\u6570\u7684\u610F\u5916\u8C03\u7528\uFF0C\u4F8B\u5982\u4ECE\u8C03\u8BD5\u547D\u4EE4\u6216\u4ECE\u8C03\u8BD5\u53D8\u91CF\u89C2\u5BDF\u7A97\u53E3\uFF0C\u4E5F\u53EF\u80FD\u5BFC\u81F4\u975E\u9884\u671F\u7684\u884C\u4E3A\u3002</p><h3 id="\u77ED\u8DEF\u903B\u8F91\u5BFC\u81F4\u8C03\u7528\u7701\u7565" tabindex="-1"><a class="header-anchor" href="#\u77ED\u8DEF\u903B\u8F91\u5BFC\u81F4\u8C03\u7528\u7701\u7565" aria-hidden="true">#</a> \u77ED\u8DEF\u903B\u8F91\u5BFC\u81F4\u8C03\u7528\u7701\u7565</h3><p>\u5373\u4F7F\u8868\u8FBE\u5F0F\u4E2D\u5B58\u5728\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E5F\u53EF\u80FD\u7531\u4E8E\u77ED\u8DEF\u903B\u8F91\u800C\u65E0\u6CD5\u8C03\u7528\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u7684\u811A\u672C\u5728<code>IF</code>\u8BED\u53E5\u4E2D\u8C03\u7528<code>GET_ASSI_CFLAG</code>\uFF0C\u5E76\u6539\u53D8<code>GET_ASSI_CFLAG</code>\u4E2D\u7684<code>ASSI</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>IF X || GET_ASSI_CFLAG(0)
  Y = CFLAG:ASSI:2
ENDIF

@GET_ASSI_CFLAG(ARG:0)
#FUNCTION
  SIF ASSI &lt; 0
    ASSI = 0
  RETURNF CFLAG:ASSI:(ARG:0)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E4D\u4E00\u770B\uFF0C\u6267\u884C<code>Y = CFLAG:ASSI:2</code>\u65F6\uFF0C\u4F3C\u4E4E\u4E0D\u53EF\u80FD\u51FA\u73B0<code>ASSI &lt; 0</code>\u3002</p><p>\u7136\u800C\uFF0C\u5982\u679CX\u975E\u96F6\uFF0C<code>GET_ASSI_CFLAG</code>\u7531\u4E8E\u77ED\u8DEF\u8BC4\u4F30\u800C\u4E0D\u88AB\u6267\u884C\uFF0C\u5F53\u8BD5\u56FE\u8BC4\u4F30<code>CFLAG:ASSI:2</code>\u800C<code>ASSI &lt; 0</code>\u65F6\u53EF\u80FD\u53D1\u751F\u9519\u8BEF\u3002</p><h3 id="\u5176\u7ED3\u679C\u53D6\u51B3\u4E8E\u65B9\u7A0B\u7684\u8BC4\u4F30\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5176\u7ED3\u679C\u53D6\u51B3\u4E8E\u65B9\u7A0B\u7684\u8BC4\u4F30\u987A\u5E8F" aria-hidden="true">#</a> \u5176\u7ED3\u679C\u53D6\u51B3\u4E8E\u65B9\u7A0B\u7684\u8BC4\u4F30\u987A\u5E8F</h3><p>\u53D8\u91CF\u548C\u51FD\u6570\u5728\u8868\u8FBE\u5F0F\u4E2D\u88AB\u8BC4\u4F30\u7684\u987A\u5E8F\u662F\u672A\u5B9A\u4E49\u7684\u3002</p><p>\u6709\u526F\u4F5C\u7528\u7684\u51FD\u6570\u53EF\u80FD\u53D6\u51B3\u4E8E\u8868\u8FBE\u5F0F\u4E2D\u7684\u51FD\u6570\u88AB\u8C03\u7528\u7684\u987A\u5E8F\u3002</p><p>\u8BF7\u4E0D\u8981\u5199\u8FD9\u6837\u7684\u4EE3\u7801\u3002</p><p>\u5BF9\u4E8E\u540C\u4E00\u7248\u672C\u7684 Emuera\uFF0C\u8C03\u7528\u987A\u5E8F\u5C06\u662F\u76F8\u540C\u7684\uFF0C\u4F46\u5728\u672A\u6765\u53EF\u80FD\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><p>\u5728\u4E0B\u9762\u7684\u811A\u672C\u4E2D\uFF0C<code>TARGET</code>\u5728<code>ADDCHARA_CFLAG</code>\u4E2D\u88AB\u6539\u53D8\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>X = CFLAG:TARGET:10 + ADDCHARA_CFLAG(0)

@ADDCHARA_CFLAG(ARG)
#FUNCTION
  ADDCHARA ARG
  TARGET = CHARANUM -1
  RETURNF CFLAG:TARGET:2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6839\u636E<code>CFLAG:TARGET:10</code>\u662F\u5728<code>ADDCHARA_CFLAG</code>\u4E4B\u524D\u8FD8\u662F\u4E4B\u540E\u88AB\u8BC4\u4F30\uFF0C<code>CFLAG:TARGET:10</code>\u6240\u6307\u5411\u7684\u53D8\u91CF\u5C06\u4F1A\u6539\u53D8\u3002</p><p>\u56E0\u6B64\uFF0C\u8FD9\u4E2A\u811A\u672C\u53D6\u51B3\u4E8E\u8BC4\u4EF7\u7684\u987A\u5E8F\u3002</p><p>\u4F60\u4E0D\u5E94\u8BE5\u5728\u5E26\u6709<code>FUNCTION(S)</code>\u6807\u5FD7\u7684\u51FD\u6570\u4E2D\u8D4B\u503C\u7ED9<code>ADDCHARA</code>\u6216<code>TARGET</code>\u3002</p><h3 id="\u53EF\u7531\u8C03\u8BD5\u51FD\u6570\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u53EF\u7531\u8C03\u8BD5\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a> \u53EF\u7531\u8C03\u8BD5\u51FD\u6570\u8C03\u7528</h3><p><code>FUNCTION(S)</code>\u6807\u8BB0\u7684\u51FD\u6570\u4E0D\u4EC5\u53EF\u4EE5\u88AB<code>*.ERB</code>\u6587\u4EF6\u4E2D\u7684\u811A\u672C\u52A8\u6001\u8C03\u7528\uFF0C\u8FD8\u53EF\u4EE5\u88AB\u8C03\u8BD5\u547D\u4EE4\u548C\u8C03\u8BD5\u53D8\u91CF\u89C2\u5BDF\u7A97\u53E3\u8C03\u7528\u3002</p><p>\u7279\u522B\u662F\uFF0C\u53D8\u91CF<code>watch</code>\u5C06\u8BD5\u56FE\u9891\u7E41\u5730\u66F4\u65B0\u5176\u503C\uFF0C\u5E76\u5728\u6BCF\u6B21\u66F4\u65B0\u65F6\u8C03\u7528\u8BE5\u51FD\u6570\u3002</p><p>\u6709\u526F\u4F5C\u7528\u7684\u529F\u80FD\u53EF\u80FD\u4F1A\u56E0\u4E3A\u8FD9\u79CD\u8C03\u7528\u800C\u53D1\u751F\u6545\u969C\u3002</p>`,63);function c(d,p){return s}var l=n(a,[["render",c]]);export{l as default};