// 响应式库
// 依赖
let currentEffect;
class Dep {
	constructor(val) {
		// es6+相关内容
		this.effects = new Set();
		this._val = val;
	}

	get value() {
		this.depend();
		return this._val;
	}

	set value(newValue) {
		this._val = newValue;
		this.notice();
	}

	// 1. 收集依赖
	depend() {
		if (currentEffect) {
			this.effects.add(currentEffect);
		}
	}

	// 2. 触发依赖
	notice() {
		// 触发一下之前收集到的依赖
		this.effects.forEach(effect => {
			effect();
		});
	}
}

function effectWatch(effect) {
	// 收集依赖
	currentEffect = effect;
	effect();
	dep.depend();
	currentEffect = null;
}
// ref -> 很像了
const dep = new Dep(10);
let b;

effectWatch(() => {
	b = dep.value + 10;
	console.log(b);
});

// 值发生变化
dep.value = 20;
