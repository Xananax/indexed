import {arrProto} from './constants';

export function isInvalidObject(obj){
	var type = (typeof obj);
	return (/number|string|boolean/.test(type) ||
		(!obj) ||
		(obj instanceof Date) ||
		(obj instanceof RegExp) ||
		(Array.isArray(obj))
	)
}

export function isPlainObject(obj){
	if(!obj){return false;}
	if (obj.constructor && !hasOwnProperty(obj, "constructor") && !hasOwnProperty(obj.constructor.prototype, "isPrototypeOf")) {
		return false;
	}
	for (var key in obj) {}
	return key === undefined || hasOwnProperty(obj, key);
}

export function isMap(obj){
	return (obj && obj instanceof Map);
}

export function anythingToMap(obj,recursion=2){
	if(typeof obj == 'string'){
		const map = new Map();
		map.set(obj,new Map());
		return map;
	}
	if(Array.isArray(obj)){
		const map = new Map();
		obj.forEach(key=>{
			map.set(key,new Map());
		});
		return map;
	}
	return copyMap(obj,recursion);
}

export function copyMap(obj,recursion=1){
	if(recursion && isMap(obj)){
		const ret = new Map();
		obj.forEach((map,name)=>{
			ret.set(name,copyMap(map,recursion-1));
		})
		return ret;
	}else if(recursion && isPlainObject(obj)){
		let ret = new Map();
		for(let name in obj){
			ret.set(name,copyMap(obj[name],recursion-1));
		}
		return ret;
	}
	return obj;
}

export function slice(arr,start,end){
	return arrProto.slice.call(arr,start,end);
}

export function assign(...els){
	return Object.assign({},...els);
}

export function hasOwnProperty(obj,prop){
	return Object.prototype.hasOwnProperty.call(obj,prop);
}

export function define(obj,prop,value,enumerable){
	Object.defineProperty(obj,prop,{
		enumerable:!!enumerable
	,	value
	,	configurable:true
	,	writable:true
	})
}

export function makeDefine(obj){
	return function boundDefine(prop,value,enumerable){
		define(obj,prop,value,enumerable)
	}
}

export function isArrayLike(item) {
	return item && (
		Array.isArray(item) ||
		(
			typeof item !== "function" &&
			typeof item !== "string" &&
			hasOwnProperty(item,"length") &&
			typeof (item.length) === "number" &&
			(
				item.length === 0 ||
				//(typeof(item.__indexedProps)!=='undefined') ||
				(item.length > 0 && (item.length - 1) in item)
			)
		)
	);
}
