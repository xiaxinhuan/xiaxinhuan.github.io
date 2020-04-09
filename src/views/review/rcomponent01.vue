<template>
    <div>
        <!-- 复习 -->
        <backComponent></backComponent>
        <div>
            <p>1.file-loader打包图片文件时路径错误输出为[object-module]的解决方法</p>
            <p>默认情况下，file-loader生成使用ES模块语法的JS模块。在某些情况下，使用ES模块是有益的，比如在模块连接和树抖动的情况下。</p>
            <p>简而言之就是file-loader新版本默认使用了esModule语法，造成了引用图片文件时的方式和以前的版本不一样</p>
            <p>解决办法：</p>
            <p>b.在webpack的file-loader配置项里，设置esModule为false</p>   
            <p class="mt20">2.Vue你们如何做spa的模块懒加载呢</p>    
            <p><img src="../../assets/images/2020040902.png" alt=""></p>
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