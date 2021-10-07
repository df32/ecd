# 输入与输出

## 前言与确认

游戏要求玩家与作品之间存在必要的互动，而对于文字相关的游戏来说，文本的输入输出就是最为关键的一环。如何处理玩家的输入并输出相应的内容呢？我们可以也可以使用命令来实现。

::: warning 教程依赖

本教程假设您已学习过[快速开始](../Quick_Start)。若您尚未学习过，我们强烈推荐您首先学习相应教程。

:::

先确认一下我们现有的工程文件夹结构：

```
root/
 ├─ emuera.config
 ├─ Emuera1824.exe
 ├─ CSV/
 └─ ERB/
     └─ System.erb
```

其中，`System.erb`的代码为：

```basic
@EventFirst
  Print Hello World!
  Quit
```

## 数值输入



显而易见，我们现在的脚本，即使运行一百次，也不会发生任何变化，只会简单地输出我们已经预先写好的字符串。

我们来尝试写一些不那么“直接”的东西，请将`System.erb`中的内容改为这样：

```basic
@EventFirst
  #DimS Const Text = "Hello World!"
  PrintV Text
  Quit
```

运行！我们得到下列输出：

```
Hello World!
```

同样成功！

但……为什么？

我们现在突然遇到了几个不认识的代码以及几个不熟悉的用法。不过不用担心，我们分别看看：

- `@EventFirst`：**定义函数**。你已经学会了。
- `#DimS`：定义（字符串常量或变量）。这是你第一次见到它，不过它很简单，它的作用就是告诉游戏引擎：“看好了！我接下来要定义一个关于字符串的常量或者变量”。这样游戏引擎就能做好准备。有关更多的**定义常量**、**定义变量**，请移步至[此处]()。
- `Const`：**常量**关键字。这很好理解，毕竟前一个短语已经成功地吸引到引擎的注意了，紧跟着的这个关键词就是明确地说这次定义的就是定义的**常量**。
- `Text`：变量名。新定义的常量/变量名称。常量/变量完成定义后，可通过该名称再次找到这个常量/变量。
- `=`：赋值符号。符号右侧的数据装载到符号左侧的变量内，具体到这个地方，符号右边的“Hello World!”这句话，会装载到名为“Text”的变量内。
- `"Hello World!"`：一句十分简单的话。在专业领域内，我们称这样的一串文本为：**字符串**。这很形象，就如同我们把`H`，`e`，`l`……这样的`字符`“串了起来”。这样的“串”，我们称为“字符串”。
- `PrintV`：一个语句，可以将装载于语句后面的变量内的数据显示在屏幕上。
- `Quit`：退出。你也已经学过了。

看上去突然增加了许多内容，但细细一捋，才发现游戏脚本就像小说一样，虽然有点絮絮叨叨，但也能被简简单单的理解，不是吗？

## 变量的定义与打印

好了，我们现在已经有一个方法实现不那么“直接”的数据暂存了，但仍然不能够通过改变数据来为游戏增加变化。具体地说，如果我们就是想改变“Hello World!”的文本，怎么办！

我们改变脚本：

::: warning 该代码含有可期待的错误

```basic
@EventFirst
  #DimS Const Text = "Hello World!"
  Text = "How Are You?"
  PrintV Text
  Quit
```

:::

这样，Text 中的值就可以变化了吗？

运行得到：

::: danger 错误信息<a href="javascript:alert('TODO')">索引</a>

> System.erbの3行目でエラーが発生しました:Emuera1824
>
> Text = "How Are You?"
>
> エラー内容：代入文の左辺に変更できない変数を指定することはできません
>
> 現在の関数：@EVENTFIRST（System.erbの1行目）
>
> 関数呼び出しスタック：

System.erb的第3行发生错误：Emuera1824

Text = "How Are You?"

错误：你不能在赋值语句的左边指定一个不能改变的变量

当前函数：@EVENTFIRST (System.erb第1行)

函数调用栈：

:::

Hmmmmm.....

这其实不难理解，毕竟我们定义的`Text`是个**常量**。

改成变量就好了！

修改为：

```basic
@EventFirst
  #DimS Text = "Hello World!"
  Text = How Are You?
  PrintV Text
  Quit
```

运行，看到输出：

```
How Are You?
```

成功！

但又有两个问题：

- 为何我们直接删掉了`Const`？
- 为何我们使用的是`Text = How Are You?`，而不是`Text = "How Are You?"`（字符串外有双引号）

我想答案也不复杂：

1. 对于`#DimS`语句来说，定义变量是**默认**用法，在这种情况下，可以省略。
2. 我暂时也不知道。不过加上双引号后，显示出来的值也带有双引号，说明赋值在`#DimS`中和在外面独立使用的表现不一样。那就当作是”固定搭配“吧2333333
