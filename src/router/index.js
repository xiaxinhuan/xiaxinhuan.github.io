import Vue from "vue"
import Router from "vue-router";
import Home from '../views/home/home.vue';
import Component01 from '../views/home/component01.vue';
import Component02 from '../views/home/component02.vue';
import Component03 from '../views/home/component03.vue';
import Component04 from '../views/home/component04.vue';

import Rcomponent01 from '../views/review/rcomponent01.vue';

import Acomponent01 from '../views/about/acomponent01.vue';

import CssComponent from '../views/cssComponent.vue';

import VueComponent from '../views/vueComponent.vue';
import WebpackComponent from '../views/webpackComponent.vue';
import TsComponent from '../views/tsComponent.vue';
import VscodeComponent from '../views/vscodeComponent.vue'
Vue.use(Router);


export default new Router({
    mode: "hash",
    routes:[
        {
            path:'*',
            redirect: '/home'
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/Component01',
            name:'Component01',
            component:Component01
        },
        {
            path:'/Component02',
            name:'Component02',
            component:Component02
        },
        {
            path:'/Component03',
            name:'Component03',
            component:Component03
        },
        {
            path:'/Component04',
            name:'Component04',
            component:Component04
        },
        {
            path:'/Rcomponent01',
            name:'Rcomponent01',
            component:Rcomponent01
        },
        {
            path:'/Acomponent01',
            name:'Acomponent01',
            component:Acomponent01
        },
        {
            path:'/css',
            name:'css',
            component:CssComponent
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