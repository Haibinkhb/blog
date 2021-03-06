#### 作用域是什么

***

作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。如果查找的目的是对变量进行赋值，那么就会使用 LHS 查询；如果目的是获取变量的值，就会使用 RHS 查询。

#### 编译原理

***

##### 1.分词/词法分析

会将代码分解成对编程语言来说有意义的代码块（词法单元）例如 var a = 2 ;会被分词为这些词法单元: var、a、=、2 和;

##### 2.分析/语法分析

将词法单元流转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”（Abstract Syntax Tree，AST）。

##### 3.代码生成

将抽象语法树转换为可执行代码。用某种方法将 var a = 2 的抽象语法树装换为一组机器指令，用来创建一个变量 a 并将一个值（这里是 2）存储在 a 中。

#### JavaScript 的工作原理

***

- ##### 引擎

  从头到尾负责整个 JavaScript 程序的编译及执行过程。

- ##### 编译器

  负责语法分析及代码生成等

- ##### 作用域

  负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。

##### 引擎、编译器和作用域会相互配合完成代码的解析。例如在解析 var a = 2;这段代码时，引擎会把它看成两个声明（var a 和 a = 2），一个由编译器在编译阶段处理，一个由引擎在运行时处理

- 遇到 var a 时编译器首先会询问作用域有没有同名为 a 的变量存在当前的作用域集合当中，如果有编译器会忽略掉这个声明，继续编译，否则在当前的作用域集合中声明一个名为 a 的变量

- 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 a = 2 这个赋值操作。引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫作 a 的变量。如果是，引擎就会使用这个变量；如果否，引擎会继续在上一级作用域中查找该变量。

##### 引擎查找变量的方法：LHS 和 RHS

- LHS 查询会试图找到变量本身并为其赋值

- RHS 查询会找到变量的值

```js
foo(a) {
    console.log(a)
}
foo(2)
```

上面代码中函数 foo（2）调用时引擎首先会对 foo 使用 RHS 查询找 foo 的值，接着会使用对参数 a 进行 LHS 查寻并赋值 2，到函数内部遇到 console 时也需要进行 RHS 查询 consloe 对象，并且检查是否有 log 这个方法，最后再使用 RHS 查询变量 a 并把值传给 console.log()。

#### 异常

***

为在变量还没有声明（在任何作用域中都无法找到该变量）的情况下 LHS 查询 和 RHS 查询的行为是不一样的。
考虑下面代码：

```js
function foo(a){
    console.log(a + b);
    b = a
}
foo(2);
```

第一次对 b 进行 RHS 查询时是无法找到该变量的。也就是说，这是一个“未声明”的变量，因为在任何相关的作用域中都无法找到它，如果 RHS 查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出 ReferenceError 异常。
相较之下，当引擎执行 LHS 查询时，如果在顶层（全局作用域）中也无法找到目标变量，全局作用域中就会创建一个具有该名称的变量，并将其返还给引擎，前提是程序运行在非严格模式下。严格模式中 LHS 查询失败时，引擎会抛出同 RHS 询失败时类似的 ReferenceError 异常。

#### 词法作用域

***

词法作用域就是定义在词法阶段的作用域。也就是说词法作用域是由你在编写代码时将变量和块作用域定义在哪里来决定的。因此当词法分析器处理代码时（大部分情况下）会保持作用域不变。JavaScriptt 所采用的作用域模型就是词法作用域。

#### 欺骗词法

JavaScript 中的 eval()和 with 可以欺骗词法作用域，前者可以对一段包含一个或多个声明的“代码”字符串进行演算，并借此来修改已经存在的词法作用域（在运行时）。后者本质上是通过将个对象的引用当作作用域来处理，将对象的属性当作作用域中的标识符来处理，从而创建了一个新的词法作用域（同样是在运行时）。这两个机制的副作用是引擎无法在编译时对作用域查找进行优化，因为引擎只能谨慎地认为这样的优化是无效的。使用这其中任何一个机制都将导致代码运行变慢。

#### 函数作用域和块作用域

***

考虑下面代码

```js
function foo(a) {
    var b = 2;
    // 一些代码
    function bar() {
        // ...
    }
    // 更多的代码
    var c = 3;
}
```

在这个代码片段中，foo(..) 的作用域气泡中包含了标识符 a、b、c 和 bar。无论标识符声明出现在作用域中的何处，这个标识符所代表的变量或函数都将附属于所处的函数作用域气泡。

bar(..) 拥有自己的作用域气泡气泡，在 bar（）的作用域气泡中也可以访问 foo（）作用域气泡中的标识符。全局作用域也有自己的作用域气泡，它只包含了一个标识符：foo。

JavaScript 具有基于函数的作用域，既每声明一个函数都会创建一个函数作用域。每一个函数作用域中属于这个函数的全部变量都可以在整个函数的范围内使用及复用（事实上在嵌套的作用域中也可以使用）。

从全局作用域中访问函数作用域中的变量会导致致 ReferenceError 错误：

```js
bar(); // 失败
console.log( a, b, c ); // 三个全都失败
```

#### 隐藏内部实现

***

再考虑下面代码：

```js
function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1;
    }
    var b;
    b = a + doSomethingElse( a * 2 );
    console.log( b * 3 );
}
doSomething( 2 ); // 15
```

b 和 doSomethingElse(..) 都无法从外部被访问，而只能被 doSomething(..) 所控制，也就是说这段代码中的任何声明（变量或函数）都将绑定在这个 doSomething(..) 函数的作用域中，换句话说，把变量和函数包裹在一个函数的作用域中，然后用这个作用域来“隐藏”它们。隐藏后功能性和最终效果都没有受影响，但是设计上将具体内容私有化了，设计良好的软件都会依此进行实现。

#### 匿名和具名

***

- 匿名函数表达式

```js
setTimeout( function() {
    console.log("I waited 1 second!";
}, 1000 );
```

setTimeout 函数的第一个参数 function(){...}没有名称标识符，所以叫做匿名函数表达式，函数表达式可以是匿名的，而函数声明则不可以省略函数名。匿名函数表达式书写起来简单快捷，。但是它也有几个缺点需要考虑。

1. 匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难。

2. 如果没有函数名，当函数需要引用自身时只能使用已经过期的 arguments.callee 引用，比如在递归中。另一个函数需要引用自身的例子，是在事件触发后事件监听器需要解绑自身。

3. 匿名函数省略了对于代码可读性 / 可理解性很重要的函数名。一个描述性的名称可以让代码不言自明。

给函数表达式指定一个函数名可以有效解决以上问题。始终给函数表达式命名（既使用具名函数）是一个最佳实践。

#### 立即执行函数表达式

***

```js
var a = 2;
(function foo() {
    var a = 3;
    console.log( a ); // 3
})();
console.log( a ); // 2
```

由于函数被包含在一对 ( ) 括号内部，因此成为了一个表达式，通过在末尾加上另外一个( ) 可以立即执行这个函数。

#### 块作用域

***

```js
var foo = true;
if (foo) {
    var bar = foo * 2;
    bar = something( bar );
    console.log( bar );
}
```

bar 变量仅在 if 声明的上下文中使用，因此如果能将它声明在 if 块内部中会是一个很有意义的事情。但是，当使用 var 声明变量时，它写在哪里都是一样的，因为它们最终都会属于外部作用域（这里是属于全局作用域）。这段代码是为了风格更易读而伪装出的形式上的块作用域。

#### let

***

```js
var foo = true;
if (foo) {
    let bar = foo * 2;
    bar = something( bar );console.log( bar );
}
console.log( bar ); // ReferenceError
```

let 关键字可以将变量绑定到所在的任意作用域中（通常是 { .. } 内部）。因为 bar 是在 if(){..}中使用 let 声明的，所以在 if(){..}外部访问这个变量会导致 ReferenceError。

#### 提升

***

```js
console.log( a ); // undefined
var a = 2;
```

引擎会在解释 JavaScript 代码之前首先对其进行编译，编译阶段中的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。上面代码中 a 会在编译阶段被声明，而赋值则要等到执行阶段执行到指定的赋值语句。执行 console.log( a )时 a 已经被提前声明了所以不会报错，但此时 a 并没有被赋值，所以会输出 undefined。

函数声明也会被提升：

```js
foo();
function foo() {
    var a = 2;
    console.log( a ); // 2
}
```

函数表达式不会被提升：

```js
foo(); // 不是 ReferenceError, 而是 TypeError!
var foo = function bar() {
    // ...
}
```

#### 函数优先

***

函数声明和变量声明都会被提升，但是函数会首先被提升，然后才是变量：

```js
foo(); //   会输出 1 而不是 2
var foo;
function foo() {
    console.log( 1
}
foo = function() {
    console.log( 2 )
};
```

#### 闭包

***

思考下面代码：

```js
function foo() {
    var a = 2;
    function bar() {
        console.log( a );
    }
return bar;
}
var baz = foo();
baz(); // 2
```

函数 bar() 的词法作用域能够访问 foo() 的内部作用域。在这个例子中我们将 bar() 函数本身当作一个值类型当作函数 foo()的返回值。在 foo() 执行后，其返回值（也就是 bar()函数）赋值给 baz 并调用。bar()可以被正常调用执行，但此时他在自己被定义的词法作用域以外的地方执行。

在 foo() 执行后，通常会期待 foo() 的整个内部作用域都被销毁，但因为 bar()是在其内部定义的，它能够访问 foo()中内部作用域，而 bar()还引用着其作用域中的变量 a。该作用域能够一直存活，以供 bar() 在之后任何时间进行引用。bar() 持有对该作用域的引用，而这个引用就叫作闭包。

```js
for (var i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}
```

正常情况下，我们对这段代码行为的预期是分别输出数字 1~5，每秒一次，每次一个。但实际上，这段代码在运行时会以每秒一次的频率输出五次 6。这是因为延迟函数的回调会在循环结束时才执行，根据作用域的工作原理，尽管循环中的五个函数是在各个迭代中分别定义的，但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个 i。

想要实现预期的效果，就需要更多的闭包作用域，特别是在循环的过程中每个迭代都需要一个闭包作用域：

```js
for (var i=1; i<=5; i++) {
    (function(j) {
       setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })( i );
}
```

把每个延迟执行函数都用一个立即执行函数包裹起来，这样每次循环创建的延迟执行函数都会有一个独立的作用域。有了独立的作用域，它们还需要有自己的变量，用来在每个迭代中储存 i 的值，可以将每次循环的 i 作为参数传递给立即执行函数，这样每个迭代中都会含有一个具有正确值的变量供我们访问。

下面代码可以达到同样的效果：

```js
for (let i=1; i<=5; i++) {
    setTimeout( function timer() {
    console.log( i );
    }, i*1000 );
}
```

for 循环头部的 let 声明还会有一个特殊的行为。这个行为指出变量在循环过程中不止被声明一次，每迭代都会声明。随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量。
