<template>
    <div class="content_box">
        <div class="banner_box">
            <img :src="bannerImgSrc" alt="">
        </div>
        <h3 class="home_title">特别推荐</h3>
        <ul class="ul_box">
            <li v-for="(item,index) in homeList" :key="index">
                <div class="img_box">
                    <img :src="item.imgSrc" alt="">
                </div>
                <div class="content_des">
                    <p>{{item.title}}</p>
                    <p>{{item.des}}</p>
                </div> 
            </li>
        </ul>
    </div>
</template>
<script>
import bannerImgSrc from "../images/banner1.jpg";
import homeImgSrc1 from "../images/1.jpg";
import homeImgSrc2 from "../images/2.jpg";
import homeImgSrc3 from "../images/3.jpg";
import homeImgSrc4 from "../images/4.jpg";
import homeImgSrc5 from "../images/5.jpg";
import homeImgSrc6 from "../images/6.jpg";
export default {
    data(){
        return {
            bannerImgSrc:bannerImgSrc,
            homeList:[
                // {title:'css复习',imgSrc:require("../images/1.jpg")},
                {title:'CSS 篇知识复习总结',imgSrc:homeImgSrc1,des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
                {title:'js复习',imgSrc:homeImgSrc2,des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
                {title:'vue复习',imgSrc:homeImgSrc3,des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
                {title:'webpack复习',imgSrc:homeImgSrc4,des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
                {title:'ts复习',imgSrc:homeImgSrc5,des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
                {title:'面试题',imgSrc:homeImgSrc6,des:'或许，你认为 CSS 只能用来控制网页的结构与样式，但它的功能和应用却超乎你的想象。从逼真的图像到特效动画，优秀的开发者利用它已创造了无数种可能。'},
            ]
        }
    }
}
</script>
<style lang="scss">
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
                p{
                    padding: 0 10px;
                }
            }
        }
    }
</style>