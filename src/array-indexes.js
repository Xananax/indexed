import {
	assign
,	copyMap
,	anythingToMap
,	hasOwnProperty
,	isInvalidObject
} from './utils';
import {
	BREAK
,	arrProto
} from './constants';

export function createIndexes(indexes){
	if(indexes instanceof Map){return indexes;}
	return anythingToMap(indexes,2);
}

export function getIndexInIndexes(indexes,name,predicate){
	if((indexes.has(name)) && (indexes.get(name).has(predicate))){
		return indexes.get(name).get(predicate);
	}
	return -1;
}

export function findIndexInIndexes(indexes,predicateBlock,arr,thisArg){
	if(!indexes){return -1;}
	if(!Array.isArray(predicateBlock) || predicateBlock.length<2){return -1}
	const [name,predicate] = predicateBlock;
	if(/number|string/.test(typeof predicate)){
		return getIndexInIndexes(indexes,name,predicate);
	}
	const fn = (typeof predicate == 'function') ? predicate : (predicate instanceof RegExp) ? (el)=>predicate.test(el):null;
	if(fn){
		const map = indexes.get(name);
		var i = 0;
		for(let [key,index] of map){
			let obj = arr[index];
			let correct = fn.call(thisArg,key,obj,map,arr,i);
			if(correct===BREAK){
				return -1;
			}
			if(correct){
				return index;
			}
			i++;
		}
	}
	return -1;
}

export function indexes(indexes,arr,name){
	if(name){
		return (indexes.has(name))?indexes.get(name):false
	}
	return indexes;
}

export function addIndex(indexes,arr,indexName,doReindex){
	if(!indexes){indexes = new Map();}
	indexes.set(indexName,new Map());
	if(doReindex){
		return reindex(indexes,arr)
	}
	return indexes
}

export function setIndexes(indexes,obj,index){
	if(!indexes || isInvalidObject(obj)){return;}
	indexes.forEach((map,n)=>{
		if(n in obj){
			var prop = obj[n];
			map.set(prop,index);
		}
	})
}

export function shiftIndexes(indexes,ratio){
	if(!indexes){return;}
	indexes.forEach((map,n)=>{
		map.forEach((index,key)=>{
			map.set(key,index+ratio);
		})
	})
}

export function changeIndexes(indexes,obj,newObj,index){
	if(!indexes){return;}
	indexes.forEach((map,n)=>{
		if(n in obj && hasOwnProperty(newObj,n)){
			var prop = obj[n];
			var newProp = newObj[n];
			map.has(prop) && map.delete(prop) && map.set(newProp,index)
		}
	})
}

export function removeIndexes(indexes,obj){
	if(!indexes){return;}
	indexes.forEach((map,n)=>{
		if(n in obj){
			var prop = obj[n];
			map.has(prop) && map.delete(prop);
		}
	})
}

export function cloneIndexes(indexes,shallow){
	if(!indexes){return;}
	const newIndexes = new Map();
	indexes.forEach((map,n)=>{
		newIndexes.set(n,shallow ? new Map() : copyMap(map,1));
	})
	return newIndexes;
}

export function copyIndexes(indexes){
	if(!indexes){return;}
	return cloneIndexes(indexes,true);
}

export function cleanIndexes(indexes){
	indexes.forEach((map,n)=>{
		indexes.set(n,new Map());
	})
}

export function findIndex(props,arr,callbackOrPredicate,thisArg){
	const {indexes} = props;
	if(typeof callbackOrPredicate == 'function'){
		return arrProto.findIndex.call(arr,callbackOrPredicate,thisArg);
	}
	if(indexes){
		return findIndexInIndexes(indexes,callbackOrPredicate,arr,thisArg)
	}
	return -1;
}

export function reindex(indexes,arr){
	if(!indexes){return;}
	var length = arr.length, i=0;
	cleanIndexes(indexes);
	while(i<length){
		var value = arr[i];
		setIndexes(indexes,value,i++);
	}
	return indexes;
}

export function copyAndReindex(indexes,arr){
	reindex(copyIndexes(indexes), arr)
}

export function findIndexes({indexes},arr,predicates,thisArg){
	var i = 0, {length} = predicates, max = arr.length;
	var results = [];
	if(typeof predicates == 'function'){
		while(i<max){
			var value = arr[i];
			let answer = predicates.call(thisArg,value,i,arr);
			if(answer === BREAK){return results;}
			if(answer){results.push(i);}
			i++
		}
		return results;
	}
	if(indexes){
		const [name,pre] = predicates;
		const map = indexes.get(name);
		const fn = (typeof pre == 'function')?pre:(pre instanceof RegExp)?(el=>pre.test(el)):null;
		if(fn){
			for(let [key,index] of map){
				let obj = arr[index];
				let answer = fn.call(thisArg,key,obj,map,arr,i);
				if(answer===BREAK){return results}
				if(answer){results.push(index)}
				i++;
			}
			return results;
		}
		i = 1;
		const include = !!thisArg;
		while(i<length){
			const predicate = predicates[i++];
			let answer = getIndexInIndexes(indexes,name,predicate);
			if(answer<0){include && results.push(-1);}
			else{results.push(answer)}
		}
	}
	return results;
}

export function indexesToJson(indexes){
	var ret = {};
	indexes.forEach((map,name)=>{
		var list = {};
		map.forEach((value,prop)=>{
			list[prop] = value;
		})
		ret[name] = list;
	})
	return ret;
}

export function indexesFromJson(json){
	return anythingToMap(json,2);
}
