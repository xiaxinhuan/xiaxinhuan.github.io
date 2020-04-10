<template>
    <div>
        <!-- 从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法 -->
        <backComponent></backComponent>
        <div>
            <p>一、LRU 缓存淘汰策略</p>
            <p>浏览器缓存,当我们打开一个网页时,它会在发起真正的网络请求前，查询浏览器缓存，看是否有要请求的文件，如果有，浏览器将会拦截请求，返回缓存文件，并直接结束请求，不会再去服务器上下载。如果不存在，才会去服务器请求。</p>
            <p>其实，浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除，这就是浏览器缓存淘汰策略，最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）。</p>
            <p>LRU （ Least Recently Used ：最近最少使用 ）缓存淘汰策略，故名思义，就是根据数据的历史访问记录来进行淘汰数据，其核心思想是 如果数据最近被访问过，那么将来被访问的几率也更高 ，优先淘汰最近没有被访问到的数据。</p>
            <p class="mt10">二、LRU 在 keep-alive (Vue) 上的实现</p>
            <p>keep-alive 在 vue 中用于实现组件的缓存，当组件切换时不会对当前组件进行卸载</p>
            <p>最常用的两个属性：include 、 exculde ，用于组件进行有条件的缓存，可以用逗号分隔字符串、正则表达式或一个数组来表示。</p>
            <p>在 2.5.0 版本中，keep-alive 新增了 max 属性，用于最多可以缓存多少组件实例，一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉，看，这里就应用了 LRU 算法。即在 keep-alive 中缓存达到 max，新增缓存实例会优先淘汰最近没有被访问到的实例</p>
            <p>在 keep-alive 缓存超过 max 时，使用的缓存淘汰算法就是 LRU 算法，它在实现的过程中用到了 cache 对象用于保存缓存的组件实例及 key 值，keys 数组用于保存缓存组件的 key ，当 keep-alive 中渲染一个需要缓存的实例时：</p>
            <p>判断缓存中是否已缓存了该实例，缓存了则直接获取，并调整 key 在 keys 中的位置（移除 keys 中 key ，并放入 keys 数组的最后一位）</p>
            <p>如果没有缓存，则缓存该实例，若 keys 的长度大于 max （缓存长度超过上限），则移除 keys[0] 缓存</p>
        </div>
    </div>
</template>
<script>
import backComponent from "../../components/back.vue";
export default{
    components:{
        backComponent:backComponent
    }

}

</script>
<style lang="scss" scoped>
    p{
        text-align: left;
        padding: 3px 10px;
    }
</style>