<template>
    <div>
        <!-- vue的生命周期 -->
        <backComponent></backComponent>
        <div>
            <p>在谈到Vue的生命周期的时候，我们首先需要创建一个实例，也就是在 new Vue ( ) 的对象过程当中，首先执行了init（init是vue组件里面默认去执行的），在init的过程当中首先调用了beforeCreate，然后在injections（注射）和reactivity（反应性）的时候，它会再去调用created。</p>
            <p>所以在init的时候，事件已经调用了，我们在beforeCreate的时候千万不要去修改data里面赋值的数据，最早也要放在created里面去做（添加一些行为）。</p>
            <p>当created完成之后，它会去判断instance（实例）里面是否含有“el”option（选项），如果没有的话，它会调用vm.$mount(el)这个方法，然后执行下一步；如果有的话，直接执行下一步。紧接着会判断是否含有“template”这个选项，如果有的话，它会把template解析成一个render function ，这是一个template编译的过程，结果是解析成了render函数：</p>
            <p>render函数里面的传参h就是Vue里面的createElement方法，return返回一个createElement方法，其中要传3个参数，第一个参数就是创建的div标签；第二个参数传了一个对象，对象里面可以是我们组件上面的props，或者是事件之类的东西；第三个参数就是div标签里面的内容，这里我们指向了data里面的text</p>
            <p>使用render函数的结果和我们之前使用template解析出来的结果是一样的。render函数是发生在beforeMount和mounted之间的，这也从侧面说明了，在beforeMount的时候，$el还只是我们在HTML里面写的节点，然后到mounted的时候，它就把渲染出来的内容挂载到了DOM节点上。这中间的过程其实是执行了render function的内容。</p>
            <p>在使用.vue文件开发的过程当中，我们在里面写了template模板，在经过了vue-loader的处理之后，就变成了render function，最终放到了vue-loader解析过的文件里面。这样做有什么好处呢？原因是由于在解析template变成render function的过程，是一个非常耗时的过程，vue-loader帮我们处理了这些内容之后，当我们在页面上执行vue代码的时候，效率会变得更高。</p>
            <p>beforeMount在有了render function的时候才会执行，当执行完render function之后，就会调用mounted这个钩子，在mounted挂载完毕之后，这个实例就算是走完流程了。</p>
            <p>后续的钩子函数执行的过程都是需要外部的触发才会执行。比如说有数据的变化，会调用beforeUpdate，然后经过Virtual DOM，最后updated更新完毕。当组件被销毁的时候，它会调用beforeDestory，以及destoryed。</p>
            <p>在这个过程当中，Vue为我们提供了renderError方法，这个方法只有在开发的时候它才会被调用，在正式打包上线的过程当中，它是不会被调用的。它主要是帮助我们调试render里面的一些错误。</p>
            <p>有且只有当render方法里面报错了，才会执行renderError方法。</p>
            <p><img src="../../assets/images/2020041004.png" alt=""></p>
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
        img{
            width: 100%;
            height: auto;
        }
    }
</style>