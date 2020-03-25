<template>
    <div class="css_box">
        <ul>
            <li class="first_li">
                <p class="title">1.浏览器渲染原理</p>
                <p class="des">
                    <ul>
                        <li> HTML代码转化成DOM</li>
                        <li>处理CSS标记，构成层叠样式表模型CSSOM(CSS Object Model)</li>
                        <li>结合DOM和CSSOM，生成一棵渲染树（包含每个节点的视觉信息）</li>
                        <li>生成布局（layout），即将所有渲染树的所有节点进行平面合成</li>
                        <li>将布局绘制（paint）在屏幕上</li>
                    </ul>   
                </p>
            </li>
            <li class="first_li">
                <p class="title">2.css阴影</p>
                <p class="des">
                    <ul>
                        <li>box-shadow: h-shadow(必需。水平阴影的位置) v-shadow(必需。垂直阴影的位置) blur(可选。模糊距离) spread(可选。阴影的尺寸。) color(可选。阴影的颜色) inset(可选。将外部阴影 (outset) 改为内部阴影);</li>
                        <li>text-shadow: h-shadow v-shadow blur color; </li>
                    </ul>                 
                </p>
            </li>
            <li class="first_li">
                <p class="title">3.透明和清除浮动</p>
                <p class="des">
                    <ul>
                        <li>指定透明度的属性是opacity,属性值从 0.0 到 1.0。值越小，越透明。</li>
                        <li>例: opacity:0.4;filter:alpha(opacity=40);(/* 针对 IE8 以及更早的版本 */)</li>
                        <li>IE9, Firefox, Chrome, Opera 和 Safari 使用属性 opacity 来设定透明度。IE8 以及更早的版本使用滤镜 filter:alpha(opacity=x)。x 能够取的值从 0 到 100。</li>
                        <li>需要注意的是 该属性用于设置整个HTML元素的透明度,包括背景色,前景色还有边框都会受到影响</li>
                        <li>清除浮动用伪元素after和zoom</li>
                    </ul>                  
                </p>
            </li>
            <li class="first_li">
                <P class="title">4.垂直居中</P>
                <p class="des">
                    1.这个方法把一些 div 的显示方式设置为表格，因此我们可以使用表格的 vertical-align property 属性。(display: table-cell;vertical-align: middle;)<br/>
                    2.这个方法使用绝对定位的 div，把它的 top 设置为 50％，top margin 设置为负的 content 高度。这意味着对象必须在 CSS 中指定固定的高度。<br/>
                    3.这种方法，在 content 元素外插入一个 div。设置此 div height:50%; margin-bottom:-contentheight;。content 清除浮动，并显示在中间。<br/>
                    4.这个方法使用了一个 position:absolute，有固定宽度和高度的 div。这个 div 被设置为 top:0; bottom:0;。但是因为它有固定高度，其实并不能和上下都间距为 0，因此 margin:auto; 会使它居中。使用 margin:auto;使块级元素垂直居中是很简单的<br/>
                    5.这个方法只能将单行文本置中。只需要简单地把 line-height 设置为那个对象的 height 值就可以使文本居中了。
                </p>
            </li>
            <li class="first_li">
                <p class="title">5.css 裁剪图片防止图片变形</p>
                <p class="des">
                    很多时候图片都要求有一个固定的尺寸,固定宽高,这样就不能用img图片了,以为图片设置固定宽高之后基本都会变形,所以用background属性,将图片作为div的背景图实现,只需要设置下面两个属性(当然div的背景图要设置好路径l)<br/>
                    background-position: center; //这是为了让图片太大取其中间部分<br/>
                    background-size: cover; //完全覆盖住div不留空
                </p>
            </li>
            <li class="first_li">
                <p class="title">6.图片底侧空白缝隙和三角形写法</p>
                <p class="des">
                   前者： vertical-align:middle;后者:用border
                </p>
            </li>
            <li class="first_li">
                <p class="title">7.单行多行文字省略</p>
                <p class="des">
                   单行: overflow: hidden;text-overflow:ellipsis;white-space: nowrap;<br/>
                   多行:display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:3;overflow: hidden;
                </p>
            </li>
            <li class="first_li">
                <p class="title">8.css3的新特性</p>
                <p class="des">
                    属性选择器:input[value] {color:red}<br/>
                    结构伪类选择器: nth-child(n) <br/>
                    伪元素选择器 : before,after 
                </p>
            </li>
            <li class="first_li">
                <p class="title">9.盒模型</p>
                <p class="des">
                    理论上两者的主要区别是二者的盒子宽高是否包括元素的边框和内边距。当用CSS给给某个元素定义高或宽时，IE盒模型中内容的宽或高将会包含内边距和边框，而W3C盒模型并不会。<br/>
                    box-sizing: content-box 是W3C盒子模型 ; box-sizing: border-box 是IE盒子模型
                </p>
            </li>
            <li class="first_li">
                <p class="title">10.flex弹性布局常用的几个属性</p>
                <p class="des">
                    flex-direction属性决定主轴的方向（即项目的排列方向）row（默认值）：主轴为水平方向，起点在左端。row-reverse：主轴为水平方向，起点在右端。column：主轴为垂直方向，起点在上沿。column-reverse：主轴为垂直方向，起点在下沿。<br/>
                    flex-wrap属性定义，如果一条轴线排不下，如何换行。nowrap（默认）：不换行。wrap：换行，第一行在上方。wrap-reverse：换行，第一行在下方。<br/>
                    justify-content属性定义了项目在主轴上的对齐方式。flex-start（默认值）：左对齐;flex-end：右对齐;center： 居中;space-between：两端对齐，项目之间的间隔都相等;space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。<br/>
                    align-items属性定义项目在交叉轴上如何对齐。flex-start：交叉轴的起点对齐。flex-end：交叉轴的终点对齐。center：交叉轴的中点对齐。baseline: 项目的第一行文字的基线对齐。stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
                </p>
            </li>
            <li class="first_li">
                <p class="title">11. H5新特性</p>
                <p class="des">
                    语义化标签:header,article,aside,details,footer,main,menu,nav,section<br/>
                    音视频标签:audio,video
                    新增的input类型: type='time';type='email';type='search'等             
                </p>
            </li>
            <li class="first_li">
                <p class="title">12.2d和3d动画属性</p>
                <p class="des">
                    transition: 要过渡的属性 花费时间 运动曲线 何时开始;<br/>
                    2d转换translate,translate中的百分比单位是相对于自身元素的translate(50%,50%)实际应用：垂直居中  transform:translate(-50%,-50%) <br/>
                    2d转换rotate;<br/>
                    2d转换scale 缩放，顾名思义，可以放大和缩小。<br/>
                    动画(animation):   在@keyframes中规定某项css样式，就能创建由当前样式逐渐改为新样式的动画效果; 0% 是动画的开始，100%是动画的完成。这样的规则就是动画序列。
                </p>
            </li>
        </ul>
    </div>
</template>   
<style lang="scss" scoped>
    .css_box{
        padding: 0 150px 40px 150px;
        .first_li{
            
        }
        .title{
            font-size: 16px;
            text-align: center;
            margin:20px 0;
        }
        .des{
            text-align: left;
            // text-indent: 10px;
        }
    }
</style> 