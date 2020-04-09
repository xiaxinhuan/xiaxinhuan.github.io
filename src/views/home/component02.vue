<template>
    <div>
        <!-- js中的宏任务与微任务 -->
        <backComponent></backComponent>
        <div>
            <p>1.基本概念</p>
            <p>这里介绍一下JavaScript里面的一些基本知识</p>
            <p>关于代码执行环境，JavaScript代码执行时，引擎会创造出来当前代码块的执行环境，在涉及到使用变量时，只能查找到当前环境的变量和包含当前执行环境的外部环境变量。全局环境是最外层的执行环境。</p>
            <p>JavaScript是单线程。</p>
            <p>JavaScript在处理异步操作时，利用的是事件循环机制。</p>
            <p class="mt10">2.宏任务、微任务与事件循环机制</p>
            <p>宏任务：包括整体代码script，setTimeout，setInterval</p>
            <p>微任务：Promise，process.nextTick</p>
            <p>Promise立即执行，then函数分发到微任务Event Queue，process.nextTick分发到微任务Event Queue</p>
            <p><img src="../../assets/images/2020040901.png" alt=""></p>
            <p class="mt10">代码解释</p>
            <p>执行外层宏任务1 console.log 输出=>one</p>
            <p>遇到 Promise直接执行 输出 外层宏任务2 输出=>three 执行then 被分发到微任务Event Queue中</p>
            <p>执行同步操作 遇到外层宏任务3 console.log 输出=>five</p>
            <p>外层宏任务执行完成 开始执行被挂起的Promise微任务console.log 输出=>four</p>
            <p>继续执行第二轮宏任务 输入setTimeout中的宏任务 输出=>two</p>
        </div>
    </div>
</template>
<script>
import backComponent from "../../components/back.vue";
export default{
    components:{
        backComponent:backComponent
    }

}

</script>
<style lang="scss" scoped>
    p{
        text-align: left;
        padding: 3px 10px;
    }
</style>