<template>
    <div class="content_box">
        <ul>
            <li>
                <p class="title">1.变量</p>
                <div class="des">
                    <p>所谓变量就是程序运行过程中其值可以改变的量，变量的本质是内存中开辟出来的用来存储数据的存储空间</p>
                    <p>如果定义了变量，但是没有赋值，那么该变量中的值为undefined</p>
                </div>
            </li>
            <li>
                <p class="title">2. 数据类型</p>
                <div class="des">
                    <p>基本数据类型:</p>
                    <p>数值型（Number）：包含正数、负数、整数、小数、Infinity（正无穷）、-Infinity（负无穷）、NaN</p>
                    <p>字符串型（String）：由单引号或双引号包含起来的0个或多个字符，如”abc”,”123”</p>
                    <p>布尔型（Boolean）：包含true、false</p>
                    <p>Undefined：包含undefined，表示变量被定义了，但是变量里面没有值</p>
                    <p>Null：包含null，表示该变量要执行一个对象，但是目前还没有具体的执行</p>
                    <p>引用数据类型:</p>
                    <p>数组，函数，对象</p>
                </div>
            </li>
            <li>
                <p class="title">3. typeof和parseInt,parseFlot,Number</p>
                <div class="des">
                    <p> typeof undefined,结果undefined</p>
                    <p>typeof null,结果object</p>
                    <p>parseInt在转换时从第一个字符开始转换，如果遇到非数值型的字符，则停止转换，如果第一个字符就是非数值型的字符，那么转换结果为NaN</p>
                    <p>true、false在利用parseInt,parseFlot方法进行转换时，转换的结果都为NaN</p>
                    <p>parseInt本身具有取整的功能，如parseInt(3.14)结果为3</p>
                    <p>Number方法:true转换为1、flase转换为0</p>
                </div>
            </li>
            <li>
                <p class="title">4.JavaScript几种函数声明方式的区别</p>
                <div class="des">
                    <p>函数声明方式: function 函数名(){}</p>
                    <p>函数表达式方式: var 函数名 = function(参数1，参数2，...){}</p>
                    <p>使用Function构造函数: var sum = new Function("num1","num2","return num1+num2");  </p>
                    <p>从技术角度上讲，使用Function构造函数定义函数的方式是一个函数表达式，但是不推荐使用这种方式定义函数，原因在于这种方式会导致解析两次代码，影响性能。第一次解析常规的JavaScript代码，第二次解析传入构造函数的字符串。不过，这种语法对于理解“函数是对象，函数名是指针”的概念是非常直观的</p>
                    <p>对于函数声明和函数表达式两种定义函数的方式而言，解析器并不是一视同仁的。解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；对于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行.</p>
                </div>
            </li>
            <li>
                <p class="title">5.</p>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">

</style>