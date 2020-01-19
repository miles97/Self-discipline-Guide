import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
let store = new Vuex.Store({
	state: {
		stateObject: {
			triggerItem: false,
		}
	},
	mutations: {
		stateFn(state, source) {
			let stateObject = state.stateObject;
			for (let i in source) {
				let key = stateObject[i];
				if (key) {
					let newObj = deepClone({}, state.stateObject[i], source[i]);//这样深拷贝没有getter,setter属性
					let o = {};
					o[i] = newObj;
					Object.assign(state.stateObject, o); //这样就有了getter,setter属性
				}
			}
		},
		stateFn2(state, source) {
			Object.assign(state.stateObject, source);
		}
	}
})

function _type(obj, name) {
	return Object.prototype.toString.call(obj) === "[object " + name + "]";
}
function isPlainObject(obj) {
	return !!obj && _type(obj, 'Object') && _type(obj.isPrototypeOf, 'Function');
}
function deepClone() {
	var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;
	if (typeof target === "boolean") {
		deep = target;
		target = arguments[1] || {};
		i = 2;
	}
	if (typeof target !== "object" && !_type(target, 'Function')) {
		target = {};
	}
	if (length === i) {
		target = this;
		--i;
	}
	for (; i < length; i++) {
		if ((options = arguments[i]) != null) {
			for (name in options) {
				src = target[name];
				copy = options[name];
				if (target === copy) {
					continue;
				}
				if (deep && copy && (isPlainObject(copy) || _type(copy, 'Array'))) {
					var clone = (src && (isPlainObject(src) || _type(src, 'Array'))) ? src : (_type(copy, 'Array') ? [] : {});
					target[name] = deepClone(deep, clone, copy);
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}
	return target;
}
export default store