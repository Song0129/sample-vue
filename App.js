// const { effect, reactive } = require('@vue/reactivity');
// const { effectWatch, reactive } = require("./core/reactivity/reactivity");

import { effectWatch, reactive } from "./core/reactivity/index.js";
import { h } from "./core/h.js";

// v1
// let a = 10;
// let b = a + 10;
// console.log(b);

// a = 20;
// b = a + 10;
// console.log(b);

// v2
// let a = 10;
// let b;
// update();
// function update() {
// 	b = a + 10;
// 	console.log(b);
// }

// a = 20;
// update();

// v3
// a 发生变化 b自动更新
// 声明一个响应式对象
// ref ->
// let a = reactive({
// 	value: 10,
// });
// let b;
// effectWatch(() => {
// 	// 函数
// 	// 1. 开始就执行
// 	b = a.value + 10;
// 	console.log(b);
// });

// 2. a响应式对象的值发生变化之后  effect函数再次执行
// a.value = 30;

// Vue3

export default {
	// template -> render
	render(context) {
		// 构建 view = b
		// 问题 -> 每次都需要重新创建
		// 要计算出最小的更新点  -> vdom
		// js -> diff
		// const div = document.createElement("div");
		// div.innerText = context.state.count + "    heihei";
		// return div;

		// tag
		// props
		// children

		// return h("div", { id: "box", class: "mybox" }, context.state.count + "    heihei11");
		return h("div", { id: "box" + context.state.count, class: "mybox" }, [h("p", null, String(context.state.count)), h("p", null, "haha")]);
	},
	setup() {
		// a = 响应式数据
		const state = reactive({
			count: 0,
		});
		window.state = state;
		return { state };
	},
};

// App.render(App.setup());
