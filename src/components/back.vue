<template>
    <div class="back">
        <!-- 返回 -->
        <span @click="back"><</span>
    </div>
</template>
<script>
export default{
    methods:{
        back(){
            this.$router.go(-1)
        }
    }

}
</script>
<style lang="scss" scoped>
.back{
    text-align: left;
    text-indent: 10px;
    span{
        cursor: pointer;
    } 
}
</style>