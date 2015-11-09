import {
	findIndexInIndexes
,	findIndexes
,	getIndexInIndexes
} from './array-indexes';
import {
	BREAK
,	arrProto
} from './constants';

export function some(indexes,arr,callback,thisArg){
	var {length} = arr, i = 0;
	while(i<length){
		var val = arr[i];
		var result = callback.call(thisArg,val,i,arr);
		if(result === BREAK){return false;}
		if(result == true){return true;}
		i++;
	}
	return false;
}
export function map(indexes,arr,callback,thisArg){
	var {length} = arr, i = 0,newArr = new Array(length);
	while(i<length){
		var val = arr[i];
		var result = callback.call(thisArg,val,i,arr);
		if(result === BREAK){return newArr;}
		newArr[i] = result;
		i++;
	}
	return newArr;
}
export function fill(indexes,arr,value,start,end){
	throw new Error('fill cannot not be used')
}

export function find(indexes,arr,callback,thisArg){
	if(typeof callback == 'function'){
		return arrProto.find.call(arr,callback,thisArg)
	}
	var index = findIndexInIndexes(indexes,callback,arr,thisArg);
	if(index < 0 ){return;}
	return arr[index];
}

export function getIndex(indexes,arr,indexName,key){
	if(!indexes || !indexName){return;}
	if(!indexes.has(indexName)){return;}
	function getIndexInIndex(key){
		var index = getIndexInIndexes(indexes,indexName,key);
		return index;
	}
	return key ? getIndexInIndex(key) : getIndexInIndex;
}

export function get(indexes,arr,indexName,key){
	if(!key && typeof indexName == 'number'){
		return arr[indexName];
	}
	if(!indexes || !indexName){return;}
	if(!indexes.has(indexName)){return;}
	function getInIndex(key){
		var index = getIndexInIndexes(indexes,indexName,key);
		if(index<0){return;}
		return arr[index];
	}
	return key ? getInIndex(key) : getInIndex;
}

export function has(indexes,arr,indexName,key){
	if(!indexes || !indexName){return false;}
	if(!indexes.has(indexName)){return false;}
	function hasInIndex(key){
		return indexes.get(indexName).has(key);
	}
	return key ? hasInIndex(key) : hasInIndex;
}
