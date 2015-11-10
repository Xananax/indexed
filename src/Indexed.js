import {
	immutableMethods
,	indexesMethods
,	indexesMethodsKeys
,	mutableMethods
,	immutableMethodsKeys
,	mutableMethodsKeys
} from './methods';
import {
	regularMethods
,	arrProto
,	isArrayLike
,	BREAK
,	SKIP
} from './constants';
import {
	createIndexes
,	indexesFromJson
,	indexesToJson
} from './array-indexes'

import initializers from './initializersMethods';

export function IndexedFactory(arr,indexes,initializer,factory){
	return new Indexed(arr,indexes,initializer,factory);
}

export function shouldReindex(props,arr,indexes){
	return (arr && arr.length && (props.indexes !== indexes));
}

export function Props(arr,indexes,initializer,factory){
	return new PropsClass(arr,indexes,initializer,factory);
}

class PropsClass{
	constructor(arr,indexes,initializer,factory){
		this.arr = arr || [];
		this.indexes = createIndexes(indexes);
		this.collections = [];
		this.lastIndexes = [];
		this.mutate = false;
		this.factory = factory;
		this.initializer = initializer || false;
		this.currentIndex = 0
	}
	chain(){
		this.mutate = true;
	}
	value(){
		this.mutate = false;
		return this.arr;
	}
	doMutate(_mutate){
		this.mutate = _mutate;
	}
	toJson(){
		return {
			indexes:indexesToJson(this.indexes)
		,	items:this.arr
		}
	}
	getIterator(key){
		const iterator = this.indexes && this.indexes.has(key) ? this.indexes.get(key).entries() : null;
		if(!iterator){throw new Error(`index \`${key}\` does not exist`);}
		const {arr} = this;
		function next(){
			const answer = iterator.next();
			if(answer.done){return answer;}
			const [key,index] = answer.value;
			return {value:[index,arr[index]]};
		}
		function forEach(fn,thisArg){
			for(let [key,index] of iterator){
				let answer = fn.call(thisArg,arr[index],index);
				if(answer === BREAK){return;}
			}
		}
		function map(fn,thisArg){
			const result = [];
			for(let [key,index] of iterator){
				let answer = fn.call(thisArg,arr[index],index);
				if(answer === BREAK){return result;}
				if(answer === SKIP){continue;}
				result.push(answer);
			}
			return result;
		}
		return {
			[Symbol.iterator](){return this;}
		,	next
		,	map
		,	forEach
		}
	}
}

export class Indexed{
	constructor (arr,indexes,initializer,factory){
		this.__indexedProps = Props(arr,indexes,initializer,factory||IndexedFactory);
		if(shouldReindex(this.__indexedProps,arr,indexes)){
			this.reindex();
		}
	}
	chain(){
		this.__indexedProps.chain();
		return this;
	}
	value(){
		return this.__indexedProps.value();
	}
	mutate(_mutate){
		if(arguments.length){
			this.__indexedProps.doMutate(_mutate);
			return this;
		}
		return this.__indexedProps.mutate;
	}
	toJson(){
		return this.__indexedProps.toJson();
	}
	initializer(initializer){
		if(arguments.length){
			if(typeof initializer!=='function'){throw new Error('initializer must be a function');}
			this.__indexedProps.initializer = initializer
			return this;
		}
		return this.__indexedProps.initializer;
	}
	size(){
		return this.__indexedProps.arr.length;
	}
	getIterator(key){
		return this.__indexedProps.getIterator(key)
	}
	lastIndexes(){
		return this.__indexedProps.lastIndexes;
	}
}

Indexed.factory = IndexedFactory;

regularMethods.forEach(name=>{
	if(!(name in arrProto)){return;}
	Indexed.prototype[name] = function (...args){
		const {arr} = this.__indexedProps;
		return arrProto[name].apply(arr,args);
	}
	Indexed.prototype[name].nativeArrayMethod = true;
})
indexesMethodsKeys.forEach(name=>{
	Indexed.prototype[name] = function(...args){
		const {indexes,arr} = this.__indexedProps;
		return indexesMethods[name](indexes,arr,...args);
	}
})
immutableMethodsKeys.forEach(name=>{
	Indexed.prototype[name] = function(...args){
		const {arr} = this.__indexedProps;
		return immutableMethods[name](this.__indexedProps,arr,...args);
	}
})
mutableMethodsKeys.forEach(name=>{
	Indexed.prototype[name] = function(...args){
		const props = this.__indexedProps;
		const {arr,factory,initializer,mutate} = props;
		const [newIndexes,newArr] = (initializer && (name in initializers)) ?
			initializers[name](initializer,props,arr,...args) :
			mutableMethods[name](props,arr,...args)
		;
		if(mutate){
			this.__indexedProps.indexes = newIndexes;
			this.__indexedProps.arr = newArr;
			return this;
		}
		var ret = factory(newArr,newIndexes,initializer,factory);
		if(props.lastIndexes.length){
			ret.__indexedProps.lastIndexes = props.lastIndexes;
		}
		return ret;
	}
})

export const methods = Object.getOwnPropertyNames(Indexed.prototype).filter(name=>name!=='constructor')
