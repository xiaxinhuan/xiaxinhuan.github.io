<template>
    <div>
        <!-- 复习 -->
        <backComponent></backComponent>
        <div>
            <h3>Vue小复习</h3>
            <p>一.file-loader打包图片文件时路径错误输出为[object-module]的解决方法</p>
            <p>默认情况下，file-loader生成使用ES模块语法的JS模块。在某些情况下，使用ES模块是有益的，比如在模块连接和树抖动的情况下。</p>
            <p>简而言之就是file-loader新版本默认使用了esModule语法，造成了引用图片文件时的方式和以前的版本不一样</p>
            <p>解决办法：</p>
            <p>b.在webpack的file-loader配置项里，设置esModule为false</p>   
            <p class="mt20">二.Vue你们如何做spa的模块懒加载呢</p>    
            <p><img src="../../assets/images/2020040902.png" alt=""></p>
            <p class="mt20">三.Vue路由懒加载</p>
            <p>1.vue异步组件</p>
            <p>/*每个组件生成一个js文件，实现组件的懒加载*/</p>
            <p><img src="../../assets/images/2020041001.png" alt=""></p>
            <p>2.import按需加载</p>
            <p>能够被webpack自动代码分割,允许将不同的组件打包到一个异步块中，使用命名chunk(特殊注释语法)。Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。</p>
            <p><img src="../../assets/images/2020041002.png" alt=""></p>
            <p>3.webpack提供的require.ensure()</p>
            <p>vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。</p>
            <p><img src="../../assets/images/2020041003.png" alt=""></p>
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