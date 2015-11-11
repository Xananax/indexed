import {
	findIndexInIndexes
,	getIndexInIndexes
} from './array-indexes';
import {
	BREAK
,	SKIP
,	arrProto
} from './constants';

export function some(props,arr,callback,thisArg){
	var {length} = arr, i = 0;
	while(i<length){
		var val = arr[i];
		var result = callback.call(thisArg,val,i,arr);
		if(result === BREAK){return false;}
		if(result === SKIP){i++;continue;}
		if(result == true){return true;}
		i++;
	}
	return false;
}
export function map(props,arr,callback,thisArg){
	var {length} = arr, i = 0, newArr = [];
	while(i<length){
		var val = arr[i];
		var result = callback.call(thisArg,val,i,arr);
		if(result === BREAK){return newArr;}
		if(result === SKIP){i++;continue;}
		newArr.push(result)
		i++;
	}
	return newArr;
}
export function fill(props,arr,value,start,end){
	throw new Error('fill cannot not be used')
}

export function find(props,arr,callback,thisArg){
	const {indexes} = props;
	if(typeof callback == 'function'){
		return arrProto.find.call(arr,callback,thisArg)
	}
	var index = findIndexInIndexes(indexes,callback,arr,thisArg);
	if(index < 0 ){return;}
	return arr[index];
}

export function getIndex(props,arr,indexName,key){
	const {indexes} = props;
	if(!indexes || !indexName){return key ? -1 : undefined;}
	if(!indexes.has(indexName)){return key ? -1 : undefined;}
	function getIndexInIndex(key){
		var index = getIndexInIndexes(indexes,indexName,key);
		return index;
	}
	return key ? getIndexInIndex(key) : getIndexInIndex;
}

export function get(props,arr,indexName,key){
	if(!key && typeof indexName == 'number'){
		return arr[indexName];
	}
	const {indexes} = props;
	if(!indexes || !indexName){return;}
	if(!indexes.has(indexName)){return;}
	function getInIndex(key){
		var index = getIndexInIndexes(indexes,indexName,key);
		if(index<0){return;}
		return arr[index];
	}
	return key ? getInIndex(key) : getInIndex;
}

export function has(props,arr,indexName,key){
	const {indexes} = props;
	if(!indexes || !indexName){return false;}
	if(!indexes.has(indexName)){return false;}
	function hasInIndex(key){
		return indexes.get(indexName).has(key);
	}
	return key ? hasInIndex(key) : hasInIndex;
}
