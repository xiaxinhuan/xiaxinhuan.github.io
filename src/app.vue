<template>
    <div>
        <headerComponent></headerComponent>
        <!-- <router-view></router-view> -->
        <HomeComponent></HomeComponent>
    </div>  
</template>
<script>
    import HeaderComponent from './components/header.vue';
    import HomeComponent from './views/home.vue';
    export default{
        components: {
            HeaderComponent,
            HomeComponent
        },
    }
</script>
<style>
    
</style>