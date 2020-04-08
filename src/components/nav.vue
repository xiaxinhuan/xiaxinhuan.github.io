<template>
    <div class="nav_box">
        <header class="header">
            <div class="user_info">
                <h3>xiaxinhuan</h3>
                <p>Technology&Block</p>
            </div>
            <ul class="nav_title"> 
                <li v-for="(item,index) in tabTitleList" :key="index">{{item.title}}</li>
            </ul>
            <div class="some_link">
                <h3>友情链接</h3>
                <ul>
                    <li> css动画的特效</li>
                    <li> css动画的特效</li>
                    <li> css动画的特效</li>
                    <li> css动画的特效</li>
                </ul>
            </div>
        </header>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                tabTitleList:[
                    { title: '首页' ,url:'/'},
                    { title: '归档' ,url:'/css'},
                    { title: '关于',url:'/js' },
                    { title: '面试',url:'/vue'},
                    { title: '复习',url:'/webpack'},
                    { title: 'more',url:'/ts'}
                ]
            }
        },
        methods:{
            go(){
                
            }
        }
    }
</script>
<style lang="scss" scoped>
    .nav_box{
        width: 200px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 250px;
        .header{
            .user_info{
                padding: 30px 0 10px 0;
                text-align: center;
                background-color: #000; 
                h3,p{
                    height: 36px; 
                }
                h3{
                    color: #fff;
                    font-size: 20px;
                }
                p{
                    color: #ddd;
                }
            }
            .nav_title{
                padding: 20px 0;
                background-color: #fff;
                li{
                // font-size: 18px;
                    height: 30px;
                    padding: 5px 20px;
                    text-align: left;
                    line-height: 30px;
                    a{
                        color: #000;
                        padding: 5px 20px;
                    }
                }
                li:hover{
                    background-color: #f9f9f9;
                    cursor: pointer;
                }
            }
            .some_link{
                margin-top: 10px;
                padding: 20px 0;
                background-color: #fff;
                text-align: left;    
                li,h3{
                    margin: 5px 20px;
                }
                h3{
                    border-bottom: 1px dashed #ddd;
                    padding-bottom: 10px;
                }
                li:hover{
                    background-color: #f9f9f9;
                    cursor: pointer;
                }
            }
        }
    }
</style>