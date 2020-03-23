<template>
    <div>
        <header class="header">
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
    .header ul{
        height: 50px;
        background-color: #000;
        color: #fff;
        display: flex;
        justify-content: space-around;
        li{
           
        }
    }
</style>