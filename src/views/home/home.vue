<template>
    <div>
        <ul class="ul_box">
            <li>
                <h1>基础复习</h1>
                <p class="time_top">
                    <span>发布于</span>
                    <span>2020-04-07</span>
                    <span>|</span>
                    <span>分类于</span>
                    <span>JavaScript</span>
                </p>
                <div class="tl">
                    <h3>努力学习ing:</h3>
                    <p>1、值类型和引用类型——堆和栈 值类型： string、number、boolean、undefined、null 引用类型： 对象(Object)、数组(Array)、函数(Function) 值类型： （1）占用空间固定、保存在栈中，保存与复制的是值本身 （2）使用typeof检测数据的类型 （3）基本数据类型是值类型 引用…</p>
                    <p class="btn read" @click="$router.push({path:'/Component01'})">阅读全文</p>
                </div>
            </li>
            <li>
                <h1>js中的宏任务与微任务</h1>
                <p class="time_top">
                    <span>发布于</span>
                    <span>2020-04-08</span>
                    <span>|</span>
                    <span>分类于</span>
                    <span>JavaScript</span>
                </p>
                <div class="tl">
                    <h3>事件循环:</h3>
                    <p>JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，防止主线程的不阻塞，Event Loop 的方案应用而生。Event Loop 包含两类：一类是基于 Browsing Context，一种是基于 Worker。二者的运行是独立的，也就是说，每一个 JavaScript 运行的"线程环境"都有一个独立的 Event Loop，每一个 Web Worker 也有一个独立的 Event Loop。</p>
                    <p class="btn read" @click="$router.push({path:'/Component02'})">阅读全文</p>
                </div>
            </li>
            <li>
                <h1>LRU算法</h1>
                <p class="time_top">
                    <span>发布于</span>
                    <span>2020-04-09</span>
                    <span>|</span>
                    <span>分类于</span>
                    <span>算法</span>
                </p>
                <div class="tl">
                    <h3>从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法:</h3>
                    <p>浏览器缓存,当我们打开一个网页时,它会在发起真正的网络请求前，查询浏览器缓存，看是否有要请求的文件，如果有，浏览器将会拦截请求，返回缓存文件，并直接结束请求，不会再去服务器上下载。如果不存在，才会去服务器请求。</p>
                    <p class="btn read" @click="$router.push({path:'/Component03'})">阅读全文</p>
                </div>
            </li>
            <li>
                <h1>vue的生命周期</h1>
                <p class="time_top">
                    <span>发布于</span>
                    <span>2020-04-09</span>    
                    <span>|</span>
                    <span>分类于</span>
                    <span>JavaScript</span>
                </p>
                <div class="tl">
                    <p>在谈到Vue的生命周期的时候，我们首先需要创建一个实例，也就是在 new Vue ( ) 的对象过程当中，首先执行了init（init是vue组件里面默认去执行的），在init的过程当中首先调用了beforeCreate，然后在injections（注射）和reactivity（反应性）的时候，它会再去调用created。</p>
                    <p class="btn read" @click="$router.push({path:'/Component04'})">阅读全文</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
// import bannerImgSrc from "../assets/images/banner1.jpg";
// import homeImgSrc1 from "../assets/images/1.jpg";
// import homeImgSrc2 from "../assets/images/2.jpg";
// import homeImgSrc3 from "../assets/images/3.jpg";
// import homeImgSrc4 from "../assets/images/4.jpg";
// import homeImgSrc5 from "../assets/images/5.jpg";
// import homeImgSrc6 from "../assets/images/6.jpg";
export default {
    data(){
        return {
            // bannerImgSrc:bannerImgSrc,
            // homeList:[
            //     // {title:'css复习',imgSrc:require("../images/1.jpg")},
            //     {title:'vscode的10个有用插件',imgSrc:homeImgSrc1,url:'/vscode',des:'Visual Studio Code 是由微软开发的一款免费、跨平台的文本编辑器。由于其卓越的性能和丰富的功能，它很快就受到了大家的喜爱。就像大多数 IDE 一样，VSCode 也有一个扩展和主题市场，包含了数以千计质量不同的插件。为了帮助大家挑选出值得下载的插件，我们针对性的收集了一些实用、有趣的插件与大家分享。'},
            //     {title:'路由hash和history模式',imgSrc:homeImgSrc2,url:'/vscode',des:'Vue-router 中hash模式和history模式的关系，在vue的路由配置中有mode选项 最直观的区别就是在url中 hash 带了一个很丑的 # 而history是没有#的'},
            //     {title:'vue复习',imgSrc:homeImgSrc3,url:'/vscode',des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
            //     {title:'webpack复习',imgSrc:homeImgSrc4,url:'/vscode',des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
            //     {title:'ts复习',imgSrc:homeImgSrc5,url:'/vscode',des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
            //     {title:'面试题',imgSrc:homeImgSrc6,url:'/vscode',des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
            // ]
        }
    },
    methods:{
        go(index){
            this.$router.push({
                path: this.homeList[index].url
            })
        }
    }
}
</script>
<style lang="scss" scoped>
        li{
            margin: 50px;
            box-shadow: 0 0 5px rgba(202,203,203,0.5);
            padding: 25px;
            .time_top{
                margin: 5px 0;
                font-size: 12px;
                margin-right: 5px;
                color: #999;
                span{
                    margin-right: 3px;
                }
            }
            .read{
                width: 60px;
                margin: 0 auto;
                margin-top: 10px;
            }
        }
</style>