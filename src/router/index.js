import Vue from "vue"
import Router from "vue-router";
import Home from '../views/home.vue';
import CssComponent from '../views/cssComponent.vue';
import JsComponent from '../views/jsComponent.vue';
import VueComponent from '../views/vueComponent.vue';
import WebpackComponent from '../views/webpackComponent.vue';
import TsComponent from '../views/tsComponent.vue';
import VscodeComponent from '../views/vscodeComponent.vue'
Vue.use(Router);


export default new Router({
    mode: "hash",
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/css',
            name:'css',
            component:CssComponent
        },
        {
            path:'/js',
            name:'js',
            component:JsComponent
        },
        {
            path:'/vue',
            name:'vue',
            component:VueComponent
        },
        {
            path:'/webpack',
            name:'webpack',
            component:WebpackComponent
        },
        {
            path:'/ts',
            name:'ts',
            component:TsComponent
        },
        {
            path:'/vscode',
            name:'vscode',
            component:VscodeComponent
        }
    ]
})