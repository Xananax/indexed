import {
	makeDefine
} from './utils';
import {
	Props
,	methods
,	Indexed
,	shouldReindex
} from './Indexed'

export function asClosure(arr,indexes,initializer,factory,receiver){
	receiver = receiver || Object.create(null);
	const props = Props(arr,indexes,initializer,factory||asClosure);
	const isArray = Array.isArray(receiver);
	const define = makeDefine(receiver);
	define('__indexedProps',props);

	methods.forEach(name=>{
		const fn = Indexed.prototype[name];
		if(isArray && (fn.nativeArrayMethod || name == 'length')){return;}
		define(name,fn);
	})
	if(!isArray){
		define('length',{get(){return props.arr.length}})
	}
	if(shouldReindex(props,arr,indexes)){
		receiver.reindex();
	}

	return receiver;
}
