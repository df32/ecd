# 函数与预处理器

> 翻译自原文档：https://osdn.net/projects/emuera/wiki/exfunc

## 函数

### @EVENTLOAD

在加载数据后立即调用。

由于它是一个事件函数，它可以被定义一次以上。

如果没有定义`@EVENTLOAD`，它将转到`@SHOW_SHOP`（与 Eramaker 的行为相同）。

### @TITLE_LOADGAME

当在标准标题屏幕上选择加载时被调用。

如果`@TITLE_LOADGAME`被定义，标题可以使用它自己的加载屏幕。

如果没有定义，就会使用标准的加载屏幕。

如果`@SYSTEM_TITLE`被定义，`@TITLE_LOADGAME`将不会被调用，除非你明确地调用它。

### @SYSTEM_AUTOSAVE

当要进行自动保存时调用。

你可以定义你自己的自动保存内容。

如果没有定义，就会使用标准的保存功能。

### @SYSTEM_TITLE

当csv加载完毕时，它被调用。

它也被称为`BEGIN TITLE`。

你可以通过定义`@SYSTEM_TITLE`来使用你自己的标题屏幕。

如果没有定义，就会使用标准的标题屏幕。

### @CALLTRAINEND

在`CALLTRAIN`的自动执行结束后，这个函数会从系统内部自动调用。

请注意，它不是一个事件函数，不能被多重定义。

### 自制函数中的参数说明

1.54u和1.60以后的规格是不同的! 在1.54u和1.60及以后的版本中，规格是不同的

#### 格式

函数的定义：

```
@(函数名),(参数1),{(参数2)....}
若参数为数值：ARG(:0,1,2...)、若参数为字符串：ARGS(:0,1,2...)
在函数中使用#DIM或#DIMS定义的私有变量也可以被指定为参数。
```

函数的调用：

```
CALL (函数名),(参数1),{(参数2)....}
```

数字可以是数学或字符串表达式。

当使用字符串字元（常数）作为参数时，必须用`""`括起来。

要使用一个格式化的字符串字头作为参数，请将其写成`@"~~"`。

除了`CALL`之外，同样的格式也可以用于`JUMP`、`CALLFORM`和`TRYCALL`。

你可以为函数指定任何数量的参数。

从ver1.808开始，如果函数的类型和调用者的类型不同，函数将不会从数字转换为字符串，或从字符串转换为数字，并且会发生错误。

如果你想像ver1.807或更早的版本那样用数字字符串参数调用一个函数，请改变配置设置或使用`TOSTR`函数。

该参数可以省略。 如果省略，0将被分配给数字参数，空字符串将被分配给字符串参数（如果没有设置初始值）。

然后，被调用的函数可以参考`ARG`和`ARGS`中传递的值

请注意，由于这本质上是一个逐值传递，改变ARG的内容不会改变原始变量的值，等等。

可以使用`ARG`、`ARGS`，或者在函数中使用`#DIM`或`#DIMS`作为参数定义的私有变量（如`A`或`STR`）以外的变量，但有一些限制。

从ver1.808开始，这些变量不能用来设置初始值，而且参数不能省略。

```
;定义
@FOOBAR, ARG:0, ARGS:0
  ～～
@HOGEHOGE, ARG:0, ARG:1, ARG:2
  ～～
;调用
;参数为变量
CALL FOOBAR, X , STR:0
;参数为常量
CALL FOOBAR, 123 , "ABC"
;参数为格式化的字符串
CALL FOOBAR, 123 , @"[{COUNT}] あいう"
;参数为表达式
CALL FOOBAR, X + 10, "あいう" * 10
;参数完全省略
CALL FOOBAR
;省略第1个参数
CALL FOOBAR, , "あいう"
;省略第2个参数
CALL FOOBAR, 123
```

```
<错误示例>
;错误（参数太多）
CALL FOOBAR, X , STR:0, Y
;错误（错误的参数类型--试图将一个字符串分配给一个数字类型的第一个参数）
CALL FOOBAR, "ABC", "DEF"
;错误（错误的参数类型--试图将一个数字分配给字符串类型的第二个参数）
CALL FOOBAR, 123 , 456
<可以使用但不建议使用的例子>
;分配可以是ARG，而不是ARGS，但通常建议使用ARG
@FOOBAR, X, Y
;也可以使替代物成为变量，但这将降低可读性
@FOOBAR, ARG:X, ARG:Y
;可读性降低
@FOOBAR, ARG:0, ARG:(ARG:0)
```

#### 参数的默认值

可以为一个函数参数设置一个初始值。

当设置初始值时，函数侧看起来是这样的：

```
@(函数名),(参数1 = 初始值1),{(参数2 = 初始值2)....}
对于数字，ARG(:0,1,2...)、对于字符串，ARGS(:0,1,2...)、
或在函数中使用#DIM或#DIMS定义的私有变量
如果指定了任何其他值，就不能设置初始值。
```

只有常数和常数字符串可以被指定为初始值，而不是变量。

字符串的初始值必须用`""`括起来。

如果你设置了一个初始值，而调用者省略了一个参数，那么你设置的值将被分配给初始值。

如果函数被调用时没有参数，传递给`ARG`和`ARGS`的值将照常被分配。

```
;设置初始值（部分可以省略）
@FUNCTION, ARGS:0 = "ABC", ARG:0 = 111, ARG:1, ARG:2 = 200
  ～～
;错误（初始值仅为常数和常数字符串）
@FOOBAR, ARG:0 = MASTER, ARG:1 = TARGET
;如果你为ARG、ARGS和函数中使用#DIM和#DIMS定义的私有变量以外的参数设置初始值，它们将被忽略
;因此，它将不会像预期的那样工作
@FOOBAR, X = 5, Y = 4
```

#### 通过引用传递参数

从ver1.810开始，你可以通过使用引用类型的变量作为临时参数来传递参数。

关于如何定义参考类型变量的更多信息，请查看关于[参考类型变量]()的章节。

```
@SYSTEM_TITLE
  A = 0
  CALL TEST(A)
  B = 1
  CALL TEST(B)
  PRINTFORML A == {A}
  PRINTFORML B == {B}
  WAIT

@TEST(HOGE)
  #DIM REF HOGE
  HOGE = 100
  RETURN
```

执行结果：

```
A == 100
B == 100
```

在上面的例子中，函数`TEST`有一个引用类型的变量作为假参数。

当`TEST`第一次被调用时，`HOGE`将引用真实的参数A。

通过在函数`TEST`中设置`HOGE=100`，参考变量A被分配为100，所以第一个`PRINTFORML`的结果是100。

同样地，当第二个`TEST`被调用时，变量B被分配为100，第二个`PRINTFORML`的结果也是100。

## 属性

预处理程序决定了一个函数的规格和行为。

如果一个函数有一个以`#`开头的预处理器，它必须直接在函数下面。

### #ONLY

该属性仅适用于事件功能。

如果有一个指定了`#ONLY`的事件函数，那么只有这个函数会被执行，而其他同名的事件函数不会被执行。

如果有多个带有`#ONLY`的事件函数，那么只有第一个会被执行。

### #FUNCTION

这是表达式中函数的一个属性。

表达式中的函数不能用通常的`RETURN`来结束，而必须用`RETURNF <数值表达式>`来结束。

更多信息见[用户定义的表达式内函数]()。

### #FUNCTIONS

这是表达式中函数的一个属性。

表达式中的函数不能用通常的`RETURN`来结束，而必须用`RETURNF <字符串表达式>`来结束。

更多信息见用户定义的表达式内函数。

## 定義

一个预处理程序，定义了一个变量的名称和它的规格。

如果一个函数有一个以`#`开头的预处理器，它必须直接位于该函数之下。

### #LOCALSIZE <定数式> & #LOCALSSIZE <定数式>

一个预处理程序，用于分别指定每个函数的`LOCAL`和`LOCALS`元素的数量。

常量表达式的结果必须是大于0的整数，如果不是，或者包含变量，或者以不可解释的字符串形式给出，则会被忽略。

如果忽略，或者不使用这个预处理程序，将照常使用`VariableSize.csv`中设置的值。

如果这个预处理器被用于一个事件函数，将使用第一个被执行的预处理器的设置（从ver1800开始）。

### #DIM

一个用户定义的变量声明，可以在ERB的特定函数中使用，定义一个只能在该函数中使用的数字变量。

更多信息见[用户定义的变量]()。

它们也可以在ERH中用来定义数值变量，其数值可以被所有函数共享。

更多信息见[头文件（ERH）]()。

### #DIMS

一个用户定义的变量声明，可以在ERB的特定函数中使用，定义一个只能在该函数中使用的字符串型变量。

更多信息见[用户定义的变量]()。

你也可以在ERH中使用它们来定义字符串变量，其值可以被所有函数共享。

更多信息见[头文件（ERH）]()。

### #DEFINE

声明`DEFINE`宏，可以在ERH中使用，用另一个预定义的字符串替换所有ERB代码中的一个字符串。

更多信息见[头文件（ERH）]()。

## 代表特殊区块的行

这些是预处理程序行。

在你写它们的同一行中，你不能立即在它们后面加上另一个指令、功能或评论。

这些并不被 Eramaker 解释，所以你可能需要使用`;!;`在某些情况下。

### [SKIPSTART] & [SKIPEND]

在`[SKIPSTART]`和`[SKIPEND]`之间写入的行不会被 Emuera 读取和执行。

当你想故意改变 Emuera 和 Eramaker 之间的行为时，就会用到这个方法。

用它来编写你不希望 Emuera 执行的语句。

它也可以与`;!;`一起使用，用来编写你不希望 Emuera 执行的语句。

更多信息见[常规]()章节。

### [IF XXX] & [ELSEIF XXX] & [ELSE] & [ENDIF]

根据是否定义了某个名称为XXX的宏，有可能分割执行多行。

详见[头文件（ERH）]()。

### [IF_DEBUG] & [ENDIF]

写在`[IF_DEBUG]`和`[ENDIF]`之间的行只在调试模式下执行。

在非调试模式下，它被认为是一个注释行，不会被执行。

然而，在非调试模式下，DEBUG指令原本是被忽略的，所以没有必要在行首放一个`;#;`。

同样地，调试变量在非调试模式下是空字符串或零，所以不需要担心错误。

关于调试模式的更多信息，请看[这里]()。

### [IF_NDEBUG] & [ENDIF]

在`[IF_NDEBUG]`和`[ENDIF]`之间的行，只在非调试模式下执行。

在调试模式下，它们被视为注释行，不被执行。

这与`[IF_DEBUG]`相反。

关于调试模式的更多信息，请看[这里]()。