## App.js

可以理解为一个组件，用来创建内容，创建响应式对象

## index.js

引入组件内容，创建组件

## core/reactivity

实现响应式，抛出 reactive、effectWatch 方法

## core/renderer

抛出方法 mountElement、diff，实现渲染挂载和虚拟 dom 比对--diff 算法

## core/h.js

返回虚拟 dom

## core/index.js

抛出 createApp，内部调用渲染和 diff 算法，绑定响应式
