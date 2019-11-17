---
id: this
title: this&闭包
tag: JavaScript
---

#### this

***

this有点复杂...很多问题没搞懂，简单总结下：

##### 默认绑定

还是这段代码，稍微修改下：

```js
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    console.log(this.scope)
}
checkscope();
```

严格模式下会报错，非严格模式下会输出 global scope 。这是因为这里使用的是默认绑定规则：严格模式下 this 返回 undefined ，非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。

>怎么知道这里应用了默认绑定呢？可以通过分析调用位置来看看 foo() 是如何调用的。在代码中，foo()是直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定，无法应用其他规则。
《你不知道的JavaScript上卷》

##### 隐式绑定

```js
function foo() {
    console.log( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
obj.foo(); // 2
```

> 当 foo() 被调用时，它的落脚点确实指向 obj 对象。当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。
《你不知道的JavaScript上卷》

严格来说这个对象obj只是有一个foo属性引用了foo(){console.log( this.a );} 这函数，这个函数并不属于这个对象。比如：

```js
function foo() {
    console.log( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"
```

虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的
bar() 其实是一个不带任何修饰的函数调用,所以应用了默认绑定。

##### 显式绑定


