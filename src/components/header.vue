<template>
    <div class="header_box">
        <header class="header">
            <div>夏鑫焕的博客</div>
            <ul> 
                <li v-for="(item,index) in tabTitleList" :key="index">{{item.title}}</li>
            </ul>
        </header>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                tabTitleList:[
                    { title: 'Home' },
                    { title: 'Study' },
                    { title: 'Advance'},
                    { title: 'Interview'},
                    { title: 'More'}
                ]
            }
        }
    }
</script>
<style lang="scss">
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
        }
    }
</style>