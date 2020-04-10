<template>
    <div class="content_box main_box">
        <NavComponent></NavComponent>
        <div class="r_content">
            <router-view></router-view>
        </div>    
        <!-- <HomeComponent></HomeComponent> -->
    </div>  
</template>
<script>
    import NavComponent from './components/nav.vue';
    export default{
        components: {
            NavComponent
        }
    }
</script>
<style lang="scss" scoped>
    .main_box{
        border-top: 3px solid #000;
        padding-bottom: 40px;
        .r_content{
            margin-left: 220px;
            background-color: #fff;
            padding:  30px 0;
        }
    }
</style>