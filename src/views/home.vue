<template>
    <div class="content_box">
        <div class="banner_box">
            <img :src="bannerImgSrc" alt="">
        </div>
        <h3 class="home_title">特别推荐</h3>
        <ul class="ul_box">
            <li v-for="(item,index) in homeList" :key="index" @click="go(index)">
                <div class="img_box">
                    <img :src="item.imgSrc" alt="">
                </div>
                <div class="content_des">
                    <p class="des_title">{{item.title}}</p>
                    <p>{{item.des}}</p>
                </div> 
            </li>
        </ul>
    </div>
</template>
<script>
import bannerImgSrc from "../assets/images/banner1.jpg";
import homeImgSrc1 from "../assets/images/1.jpg";
import homeImgSrc2 from "../assets/images/2.jpg";
import homeImgSrc3 from "../assets/images/3.jpg";
import homeImgSrc4 from "../assets/images/4.jpg";
import homeImgSrc5 from "../assets/images/5.jpg";
import homeImgSrc6 from "../assets/images/6.jpg";
export default {
    data(){
        return {
            bannerImgSrc:bannerImgSrc,
            homeList:[
                // {title:'css复习',imgSrc:require("../images/1.jpg")},
                {title:'vscode的10个有用插件',imgSrc:homeImgSrc1,url:'/vscode',des:'Visual Studio Code 是由微软开发的一款免费、跨平台的文本编辑器。由于其卓越的性能和丰富的功能，它很快就受到了大家的喜爱。就像大多数 IDE 一样，VSCode 也有一个扩展和主题市场，包含了数以千计质量不同的插件。为了帮助大家挑选出值得下载的插件，我们针对性的收集了一些实用、有趣的插件与大家分享。'},
                {title:'路由hash和history模式',imgSrc:homeImgSrc2,url:'/vscode',des:'Vue-router 中hash模式和history模式的关系，在vue的路由配置中有mode选项 最直观的区别就是在url中 hash 带了一个很丑的 # 而history是没有#的'},
                {title:'vue复习',imgSrc:homeImgSrc3,url:'/vscode',des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
                {title:'webpack复习',imgSrc:homeImgSrc4,url:'/vscode',des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
                {title:'ts复习',imgSrc:homeImgSrc5,url:'/vscode',des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
                {title:'面试题',imgSrc:homeImgSrc6,url:'/vscode',des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
            ]
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
    .content_box{
        padding: 0 150px;
        .banner_box{
            margin-top: 20px;
            height: 300px;
            overflow: hidden;
            img{
                width: 100%;
                height: auto;
                border-radius: 5px;
            }
        }
        .home_title{
            height: 50px;
            background-color: #F7F7F7;
            text-align: left;
            text-indent:8px;
            font-size: 18px;
            line-height:50px; 
        }
    }
    .ul_box{
        padding-bottom: 20px;
        li{
            height: 100px;
            border-top: 1px solid #F7F7F7;
            display:flex;
            background-color: #fff;
            cursor: pointer;
            .img_box{
                width: 120px;
                line-height: 100px;
                text-align: center;
                img{
                    width: 80px;
                    height: 80px;
                }
            }
            .content_des{
                flex:1;
                text-align: left;
                display: flex;
                justify-content: space-around;
                flex-direction: column ;
                p{
                    padding: 0 10px;
                }
                .des_title{
                    font-size: 18px;
                }
            }
        }
    }
</style>