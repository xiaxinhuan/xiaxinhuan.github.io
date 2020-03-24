<template>
    <div class="header_box">
        <header class="header">
            <div>夏鑫焕的博客</div>
            <ul> 
                <li v-for="(item,index) in tabTitleList" :key="index">
                    <router-link :to='item.url'>{{item.title}}</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                tabTitleList:[
                    { title: '首页' ,url:'/'},
                    { title: 'css' ,url:'/css'},
                    { title: 'javascript',url:'/js' },
                    { title: 'vue',url:'/vue'},
                    { title: 'webpack',url:'/webpack'},
                    { title: 'typeScript',url:'/ts'}
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
    .header_box{
        padding: 0 150px;
        background-color: #000;
    }
    .header{
        color: #fff;
        display: flex;
        div{
            width: 200px;
            line-height: 50px;
            text-align: center;
            font-size: 20px;
        }
    }
    .header ul{
        flex: 1;
        height: 50px;  
        color: #fff;
        display: flex;
        justify-content: space-around;
        li{
           line-height: 50px;
           font-size: 18px;
           cursor: pointer;
           a{
               color: #fff;
           }
        }
    }
</style>