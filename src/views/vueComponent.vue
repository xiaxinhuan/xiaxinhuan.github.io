<template>
    <div class="vue_box">
        <h3>这是个vue复习页面</h3>
        <ul>
            <li>
                1.v-clock 解决插值闪烁问题 ；默认v-text没有插值闪烁问题，但会覆盖文本中原本的内容
            </li>
            <li>
                2.v-if 是条件渲染,如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
                相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
                一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；
                如果在运行时条件很少改变，则使用 v-if 较好。
            </li>
            <li>
                3.Vue-router 中hash模式和history模式的关系,在vue的路由配置中有mode选项 最直观的区别就是在url中 hash 带了一个很丑的 # 而history是没有#的,
                对于vue这类渐进式前端开发框架，为了构建 SPA（单页面应用），需要引入前端路由系统，这也就是 Vue-Router 存在的意义。
                前端路由的核心，就在于 —— 改变视图的同时不会向后端发出请求。为了达到这一目的，浏览器当前提供了以下两种支持：
                hash —— 即地址栏 URL 中的 # 符号它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
                history —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）这两个方法应用于浏览器的历史记录栈，
                在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。<br/>
                总结:
                1 hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.abc.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。
                2 history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.abc.com/book/id。如果后端缺少对 /book/id 的路由处理，将返回 404 错误。Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”
                3 结合自身例子，对于一般的 Vue + Vue-Router + Webpack + XXX 形式的 Web 开发场景，用 history 模式即可，只需在后端（Apache 或 Nginx）进行简单的路由配置，同时搭配前端路由的 404 页面支持。
            </li>
            <li>
                
            </li>
        </ul>
    </div>
</template>    
<style lang="scss" scoped>
    .vue_box{
        padding: 0 150px;
        h3{
            font-size: 20px;
            margin: 10px 0;
        }
        ul{
            li{
                text-align: left;
                font-size: 16px;
                margin: 10px 0;
            }
        }
    }
</style>