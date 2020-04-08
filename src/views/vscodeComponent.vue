<template>
    <div>
        <h3 class="title">精选 15个必备的VSCode插件</h3>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <p class="name">{{item.name}}</p>
                <p class="des">{{item.des}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[
                    {
                        name:'CSS Peek',
                        des:'使用此插件，你可以追踪至样式表中 CSS 类和 ids 定义的地方。当你在 HTML 文件中右键单击选择器时，选择“ Go to Definition 和 Peek definition ”选项，它便会给你发送样式设置的 CSS 代码。'
                    },
                    {
                        name:'Color Info',
                        des:'这个便捷的插件，将为你提供你在 CSS 中使用颜色的相关信息。你只需在颜色上悬停光标，就可以预览色块中色彩模型的（HEX、 RGB、HSL 和 CMYK）相关信息了。'
                    },
                    {
                        name:'SVG Viewer',
                        des:'此插件在 Visual Studio 代码中添加了许多实用的 SVG 程序，你无需离开编辑器，便可以打开 SVG 文件并查看它们。同时，它还包含了用于转换为 PNG 格式和生成数据 URI 模式的选项。'
                    },
                    {
                        name:'Icon Fonts',
                        des:'这是一个能够在项目中添加图标字体的插件。该插件支持超过 20 个热门的图标集，包括了 Font Awesome、Ionicons、Glyphicons 和 Material Design Icons。'
                    },
                    {
                        name:'fileheader',
                        des:'顶部注释模板，可定义作者、时间等信息，并会自动更新最后修改时间。'
                    },
                    {
                        name:'filesize',
                        des:'在底部状态栏显示当前文件大小，点击后还可以看到详细创建、修改时间。'
                    },
                    {
                        name:'Bracket Pair Colorizer',
                        des:'让括号拥有独立的颜色，易于区分。可以配合任意主题使用。'
                    },
                    {
                        name:'Prettier',
                        des:'Prettier 是目前 Web 开发中最受欢迎的代码格式化程序。安装了这个插件，它就能够自动应用 Prettier，并将整个 JS 和 CSS 文档快速格式化为统一的代码样式。如果你还想使用 ESLint，那么还有个 Prettier – Eslint 插件，你可不要错过咯！'
                    },
                    {
                        name:'Path Intellisense',
                        des:'自动路劲补全，默认不带这个功能的，赶紧装。'
                    },
                    {
                        name:'HTMLHint',
                        des:'html代码检测。'
                    }
                ]
            }

        }

    }
</script>    
<style lang="scss" scoped>
        .title{
            text-align:left;
            text-indent: 10px;
            font-size: 18px;
            height: 50px;
            line-height: 50px;
            background-color: #F7F7F7;
        }
        ul{
            li{
                height: 100px;
                display: flex;
                background-color: #fff;
                border-top: 1px solid #F7F7F7;
                .name{
                    width: 200px;
                    line-height: 100px;
                }
                .des{
                    flex: 1;
                    text-align: left;
                    height: 50px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    padding: 0 20px;
                    margin: 25px 0;
                }
            }
        }
</style>