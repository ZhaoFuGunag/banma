`start`
 # 6-21
<!-- vue3版本：vue2和vue3 -->
<!-- vu3:组合式写法和选项式写法（属性和属性值形式） -->
<!-- vue:渐进式的js框架，基于MVVM设计模式的前端框架 
MVVM：M是model数据，V是view视图，VM视图数据交互的桥梁，相当于业务逻辑。vue是以数据驱动视图，并且操作的虚拟dom，使用页面渲染效率大大提升，开发的时候采用的组件化思想。
-->

####

1. v2 和 v3的区别：
    1 创建组件对象时候：v2的创建方式通过new Vue() 构造函数创建的， v3的是通过Vue.createApp（）创建，v2的创建方式在v3不支持了。
 2. v3的data数据是一个有返回的函数，但是v2的根组件data是一个对象，非根组件data是一个有返回值的函数
 3. v2渲染根组件的时候通过el配置进行渲染模板的，v3的是通过mount()函数指定渲染模板
\v-text渲染文本内容

####
 1. v-text 渲染文本内容
 2.  渲染标签内容的时候使用{{}},渲染属性的时候不加{{}}
 3. v-html 能够绑定数据中的标签字符串
 4. v-bind 绑定属性的 可以简写成 :属性的方式
 5. v-if条件渲染指令,还具备创建或者删除的功能，在一些需要频繁切换的场景，不要使用v-if，会加大浏览器资源的开销
       vue底层其实对v-if又进行优化:删除之后，会在内存里面缓存一份，如果以后再去的使用的时候，会去缓存里面去取，从而提升渲染性能，这是vue的惰性机制，
 6.  v-show指令:通过display:none隐藏掉了，通过display：block显示

 7.   <h1 v-for="(n,i) in arr" :key="n">{{n}}</h1>
     `$`
       n是数组的元素,i是索引 遍历数组 
       :key的作用：防止重用机制,根据key值能够快速找到要进行渲染的标签，实现局部的更新

#
 1. 事件绑定v-on：可以简写@click
 2. jQuery的文件比较大，大部分都操作dom，vue不建议jquery
      axios：基于promise封装的请求方法，可以让异步任务顺序执行,
      和ajax的区别:实现局部刷新
3. 本组件使用的数据，数据具有响应式特点:数据变化了页面会更新
4. 组件生命周期函数 钩子函数，组件创建的时候触发
5. 请求越早越好 必须保证this有指向组件对象    
6. methods: {
              getDetail(ev, data) {
                  // 事件传参 传递事件对象需要加实参$event,
                  console.log(ev, data)
              },|
7. 计算结果:有返回值的函数，对data里面的数据进行加工或者修饰得到的一个新数据,会把计算结果缓存一份，如果依赖的字段没有发生变化，计算函数不会重复执行，和data数据一样进行使用

  ##
1. v-if和v-for:不要对同一个标签进行使用
      v2: v-for的优先级要高，先去执行v-for,也就是循环次数并没有减少
      v3：v-if的优先级高于v-for，循环次数就是由v-if控制，可以达到循环次数的减少

 2.     <!-- template在页面结构不显示 -->
              
      <template  v-for="(n,i) in arr">
          <p v-if="i<2">{{n}}---{{i}}</p>
      </template> 
 3. 指令：v-if v-show v-for v-bind v-on
 4. 指令修饰符：对指令添加修饰功能
 5. .stop阻止事件冒泡
 6. .prevent阻止默认事件
 7. v-model是value和@input的语法糖；async和await是promise语法糖
 8. 双向绑定v-model：绑定一个value属性 和 绑定一个input事件：把改变之后值重新赋值给双向绑定的数据
 9. number 转换成数字类型;trim 掐头去尾去空格;lazy 失去焦点时候修饰符
`end`
# 6-22
 1.   如何获取dom结构  
          1还可以使用原生的方式
          2使用ref属性进行获取
           <p ref="p1">获取dom结构1</p>
     ###在created函数不能获取dom结构的
        this.refs:指的是具有ref属性值的标签对象的集合
2. select 双向绑定的时候绑定值可以是一个字符串，这个值与option如果对应了，证明option被选中了
3. 单选框使用双向绑定的时候，绑定的值可以是一个字符串，当双向绑定数据与value属性值一致的时候，单选框被选中。
4. checkbox：使用双向绑定的时候 绑定的数据可以是一个数组，数组元素是当前选中的checkbox的value值
5. 生命周期
   1. beforeCreate
   1组件实例对象已经创建出来，data选项还没加到this实例上，虚拟dom也没有生产，不能访问data里面数据，也不能访问节点
   2. created
   data选项已经添加到this组件对象上，可以访问data，不能访问dom节点
   3. beforeMount
   页面渲染之前触发，在此处生成了虚拟dom,此时页面结构还处于未解析状态{{num}}
   4. mounted
    页面已经渲染完毕了触发，可以获取dom，此处的页面是解析之后的页面
    5. beforeUpdate
    组件数据在更新之前触发,页面已经更新了，但是根据id获取dom这个dom的节点值还没有更新
    6.  updated
    组件数据更新之后触发
    7.  beforeDestroy
    销毁之前触发，清除定时器。清除事件监听等
    8.  destroyed
    销毁之后触发，清除定时器。清除事件监听等
 # 6-23
 1. 组件:模板、css样式、数据和业务逻辑
    组件可以重复利用，这就决定着组件里面，
    data数据必须独立的,data是一个有返回值的函数，v
    v2的根组件的data是一个对象，非根组件是一个函数
    
      2. 父传子:添加自定义属性 接收的时候在子组件里面添加props字段,类型是数组，数组元素是自定义属性名，传递过去的属性是一个只读属性，不能直接修改
      3.  子传父：
          1在子组件里面先发射事件 this.$emit(事件名，传递的对象)
          2使用子组件绑定事件，在事件回调函数可以通过形参获取传递的数据，
          3状态提升:当多个子组件共享一个数据时候，可以把数据写在父组件，然后通过父传子传递各个子组件里面
# 6-24
```
一。 组件的双向绑定：支持v-model指令,v-model必须绑定父组件data数据,但是写成v-model:
 1. 在子组件接受value属性
 2. 在子组件触发v-model的绑定的事件 v3里面出发的事件叫update:value,v2里面触发事件input
3. v-model是value属性和input事件的语法糖
二。 兄弟组件通信：
1. 状态提升,把状态定义在父组件里面,进行父传子
2 把数据进行本地存储,在其他组件可以取出本地数据 
3 vuex进行状态管理
4 总线传值（v2可以之间实现总线传值,v3必须下载第三方模块实现总线传值）
5 先把A组件值传递父组件，父组件传递B组件

# 6-25
  插槽：slot主要针对组件的标签内容而设置的组件是组件内容分发的出口，插槽分为默插槽和具名插槽，用户在写插槽内容不用太在意组件内容标签的顺序，这些顺序是有插槽决定的
  具名插槽
  具名插槽：:slot组件添加了name属性
  先添加template标签,通过v-slot：插槽名控制组件内容显示对应具名插槽里面 
  插槽传值l
  1:父传子:把组件内容通过插槽显示组件里面
  2:子传父:把子组件数据通过自定义属性进行传值,接收组件内容区间通过指定插槽获取数据
  v-slot:插槽名=对象,使用时采用对象.属性名


# 6-27
1.打包的一些默认配置 打包之后的文件dist文件
2.打包指令是 npm run bulid
配置代理服务器：主要以后在项目处于测试环境搭建的代理服务器
```javascript
 module.exports = {
 lintOnSave:false, // 保存是否开启语法检查 ，false不开启，
 //开发服务器下的配置
  devServer:{
    open:true, //自动打开浏览器
    host:"127.0.0.1" ,//主机地址
    port:9090, //端口号
    proxy:{  //设置代理服务器
      "/xzy":{   // 路径前缀
        target:"https://api.tf2sc.cn/", // 目标服务器
        changeOrigin:true, //跨域 改变请求源
        ws:true,//支持websocket
        pathRewrite:{   // 路径重写
           '^/xzy':""
        }
      }
    }
}
}

# 6-28
1. proveider 提供传递数据 是一个函数和inject注入 主要是实现祖孙之间数据的传递
2. mixins:混入 
全局混入：自己封装的功能写在一个文件夹里，例如项目所有请求，封装成一个混入函数 
然后在main.js使用混入，在各个子组件就可以直接使用

和局部混入：把混入对象写在一个组件的script里面，对象的配置字段和组件对象的配置字段完全一样，最后配置在组件的minxins字段里面mixins:[混入对象] 
   
3. 前端路由：通过监听onhashchange事件，当哈希值发生变化的时候，修改对应的页面展示
4. 单文件引入路由
5. 脚手架使用路由配置 
 5-1:App.vue设置路由，和展示组件
 5-2:在router目录下的index.js文件配置路由对应关系
 5-3:在main.js文件中全局使用
6.路由传值 查询字符串传值
页面级别的组件：views文件
重复利用的组件：compones文件

# 6-29
传值方式
1.查询字符串方式传值在路由后面添加?号,属性和属性值，多个传递添加&符号接收查询字符串传递的数据
接受查询字符串传递的数据{{ this.$route.query.name }}
2.友好传值又称动态路由传值，先在路由配置对象配置动态路由/:a/:b
动态路由传值接收的时候{{ this.$route.params.name }}
3.自定义传参 也可以叫名命路由传参 传递的是一个对象 对象设置name属性，path属性 query对象，name和path进行跳转。query和params进行传递数据
 <router-link :to="{
      name: 'set',//名命路由传参
      query: {
        shopId: 100
      },
      params: {
        age: 100
      }
    }">设置</router-link>
 4.js编程传值
  this.$router 全局的路由器对象
  this.$router.back()返回
  this.$router.push("/test")//跳转
  1:跳转传值：查询字符串传值
    this.$router.push("/text?name=zs")
  2:自定义对象传值
    this.$router.push({
       name: "text",
       query: {
         age: 10
     }
     })
     3:动态路由传值
      this.$router.push("/text/10")
      
#6-30
导航守卫：导航钩子,vue路由采用的vue-router模块,导航守卫的主要作用是：在导航开始点击时候到最终确认要跳转到页面的过程，在其之间可以实现路由终止或者跳转其他路由界面，也就是所谓的路由拦截，登录界面的判断就可以使用导航守卫进行实现

导航守卫三种类型的守卫：
 全局守卫：1.全局前置守卫(beforeEach)2.全局解析守卫(beforeResolve);3.全局后置守卫(beforeAfter)
 组件内部守卫：1.进入到组件之前beforeRouterEnter、组件查询字符串或者动态参数发生变化触发beforeRouterUpdate、离开组件守卫beforeRouterLeave
 路由的独享守卫：beforeEnter()用来守护路由
 路由守卫的执行顺序：
现在在离开的页面调用组件离开的守卫
 1 前置守卫: 主要处理登录判断的 重点
 2 路由独享守卫？
 3 组件内beforeRouteEnter next回调的参数是组件实例
 4 组件内beforeRouteUpdate 动态路由和查询发生变化触发 重点
 5 全局解析守卫？
 6 全局后置守卫 ？ 把this传递到beforeRouteEnter的next回调里面
 7 组件内beforeRouteEnter的next回调里面  可以发请求 访问组件data数据
 #7-1
 path 如果不写 属于默认路由，如果是子路由，在跳转的时候可以通过/父路由/子路由进行跳转，也可以通  过name属性进行跳转
在配置子路由的path属性可以把/省略，要访问时 必须把父路由name属性携带上
createStore:创建仓库对象的发法
state:代表是共享数据,又称为状态,也是响应式数据,单一数据源
getters:类似于组件的computed,以后对state数据进行过滤的时候,可以在此字段添加,vue建议大家
在对仓库进行过滤时候再写getters字段
mutations:同步修改方法，修改state对象里面的字段，目的是为了追踪数据变化的，在组件要想修改state数据,必须通过mutations提供的方法进行修改
actions:异步操作的方法例如发请求得到数据需要赋值state里面的数据，这个时候请求代码可以写在actions字段
modules:状态管理模块话
plugins:使用的插件

```
 #7-4
 vuex:
 1. state: 全局状态仓库的共享数据
 2. getters: state数据的计算值, 相当于计算属性
 3. mutations: 用于对state数据的更新, 每个函数更新一个state数据
 4. 更新函数有两个参数, state状态仓库对象 和 最新值value
 5. actions: 仓库中的函数, 可处理异步操作, 如 ajax
 6. modules: 状态仓库模块化
    路由的跳转方式：1.声明式导航跳转2.编程式导航跳转

