import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Button } from 'vant';

import {
    Icon, Swipe, SwipeItem, Picker, Tabbar, TabbarItem, Cascader, ActionSheet, Sidebar, SidebarItem, Tab, Tabs, Lazyload, Dialog, PasswordInput, NumberKeyboard, Toast
} from 'vant';
var app = createApp(App)
app.use(Lazyload, {
    loading: "loading.gif"
})
app.use(store)
    .use(NumberKeyboard)
    .use(SidebarItem)
    .use(Sidebar)
    .use(Tab)
    .use(Toast)
    .use(Tabs)
    .use(Dialog)
    .use(router)
    .use(Icon)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Picker)
    .use(PasswordInput)
    .use(Swipe)
    .use(Cascader)
    .use(ActionSheet)
    .use(SwipeItem)
    // .use(Lazyload)
    .mount('#app')
