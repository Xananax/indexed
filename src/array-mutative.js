import {
	setIndexes
,	reindex
,	copyIndexes
,	cloneIndexes
,	removeIndexes
,	shiftIndexes
,	findIndexes
,	changeIndexes
,	findIndex
,	indexesFromJson
,	indexesToJson
} from './array-indexes';

import {
	assign
,	slice as nativeSlice
,	isArrayLike
} from './utils';

import {
	BREAK
,	SKIP
,	arrProto
} from './constants';

export function concat(indexes,mutate,arr,...values){
	var {length} = values, i = 0, index = arr.length;
	var newArr = mutate? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate? indexes : cloneIndexes(indexes) : null;
	if(!length){return [newIndexes,newArr];}
	while(i<length){
		var value = values[i++];
		if(isArrayLike(value)){
			var valueLength = value.length, j = 0;
			while(j<valueLength){
				var subValue = value[j++];
				setIndexes(newIndexes,subValue,index);
				newArr[index++] = subValue;
			}
		}else{
			setIndexes(newIndexes,value,index);
			newArr[index++] = value;
		}
	}
	return [newIndexes,newArr];
}

export function filter(indexes,mutate,arr,callback,thisArg){
	var newArr = arrProto.filter.call(arr,callback,thisArg);
	var newIndexes = indexes ? copyIndexes(indexes) : null;
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function forEach(indexes,mutate,arr,callback,thisArg){
	var {length} = arr, i = 0;
	while(i<length){
		var val = arr[i];
		var result = callback.call(thisArg,val,i,arr);
		if(result === BREAK){return;}
		i++;
	}
	return [indexes,arr];
}
export function transform(indexes,mutate,arr,callback,thisArg){
	var {length} = arr, i = 0,newArr = mutate ? arr : new Array(length);
	while(i<length){
		var val = arr[i];
		var result = callback.call(thisArg,val,i,arr);
		if(result === BREAK){break;}
		if(result === SKIP){result = false;}
		newArr[i] = result;
		i++;
	}
	newArr = arrProto.filter.call(newArr,Boolean);
	var newIndexes = indexes ? copyIndexes(indexes) : null;
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function pop(indexes,mutate,arr,receiver){
	var newArr = mutate? arr: nativeSlice(arr);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	var popped = newArr.pop();
	if(receiver){receiver[0]=popped;}
	removeIndexes(newIndexes,popped)
	return [newIndexes,newArr];
}
export function push(indexes,mutate,arr,...values){
	var {length} = values, i = 0, index = arr.length;
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	if(!length){return [newIndexes,newArr];}
	var max = i+length;
	while(i<length){
		var value = values[i++];
		setIndexes(newIndexes,value,index);
		newArr[index++] = value;
	}
	return [newIndexes,newArr];
}
export function reverse(indexes,mutate,arr){
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	newArr.reverse();
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function shift(indexes,mutate,arr,receiver){
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	var shifted = newArr.shift();
	if(receiver){receiver[0] = shifted;}
	if(newIndexes){
		removeIndexes(newIndexes,shifted)
		shiftIndexes(newIndexes,-1);
	}
	return [newIndexes,newArr];
}
export function slice(indexes,mutate,arr,begin,end){
	var newArr = nativeSlice(arr,begin,end);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	var {length} = newArr, i = 0;
	if(length != arr.length){
		newIndexes = reindex(newIndexes,newArr);
	}
	return [newIndexes,newArr];
}
export function sort(indexes,mutate,arr,compareFunction){
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate ? indexes : copyIndexes(indexes) : null;
	if(!compareFunction || typeof compareFunction == 'function'){
		newArr.sort(compareFunction);
	}
	else{
		var prop = compareFunction;
		newArr.sort((a,b)=>
			(((prop in a) && (prop in b))?
				((a[prop] > b[prop])?
					1:
					((a[prop] < b[prop])?
						-1:
						0
					)
				):0
			)
		)
	}
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function splice(indexes,mutate,arr,start,deleteCount,...items){
	var newArr;
	deleteCount = deleteCount || 0;
	if(mutate){
		newArr = arr;
		arrProto.splice.call(newArr,start,deleteCount,...items);
	}else{
		var head = nativeSlice(arr,0,start);
		var tail = nativeSlice(arr,start+deleteCount);
		newArr = [].concat(head,items,tail);
	}
	var newIndexes = indexes ? copyIndexes(indexes) : null;
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function unshift(indexes,mutate,arr,...values){
	var {length} = values, i = 0;
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	var newArr;
	if(!length){return [newIndexes,newArr];}
	if(newIndexes){
		shiftIndexes(newIndexes,length);
		while(i<length){
			var value = values[i];
			setIndexes(newIndexes,value,i++);
		}
	}
	if(mutate){
		arrProto.unshift.apply(arr,values);
		newArr = arr;
	}else{
		newArr = [].concat(values,arr);
	}
	return [newIndexes,newArr];
}

export function setItemByIndex(indexes,mutate,arr,index,value,replace,remove){
	if(typeof index == 'undefined' || index === null){index = arr.length;}
	if(index<0){
		index = arr.length+(index);
	}
	if(index>=arr.length){return push(indexes,mutate,arr,value);}
	var newArr;
	var oldObj = arr[index];
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	if(remove){
		if(mutate){
			arrProto.splice.call(arr,index,1);
			newArr = arr;
		}else{
			newArr = nativeSlice(arr,0,index).concat(nativeSlice(arr,index+1));
		}
		reindex(newIndexes,newArr);
	}else{
		newArr = mutate ? arr : nativeSlice(arr);
		if(replace){
			newArr[index] = value;
			removeIndexes(newIndexes,oldObj)
			setIndexes(newIndexes,value,index);
		}else{
			changeIndexes(newIndexes,oldObj,value,index);
			newArr[index]= assign(oldObj,value);
		}
	}
	return [newIndexes,newArr]
}

export function setItemWhere(indexes,mutate,arr,predicate,value,replace,remove){
	var index = findIndex(indexes,arr,predicate);
	if(index < 0){
		return [indexes,arr]
	}
	return setItemByIndex(indexes,mutate,arr,index,value,replace,remove);
}

export function setMultipleItemsByIndex(indexes,mutate,arr,indexesList,value,remove){
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate? indexes : cloneIndexes(indexes) : null;
	var {length} = indexesList;
	var i = 0;
	if(!length){return [newIndexes,newArr];}
	while(i<length){
		var index = indexesList[i++];
		setItemByIndex(newIndexes,true,newArr,index,value,false,remove);
	}
	return [newIndexes,newArr]
}

export function setMany(indexes,mutate,arr,predicates,value){
	var indexesList = findIndexes(indexes,arr,predicates);
	return setMultipleItemsByIndex(indexes,mutate,arr,indexesList,value);
}

export function removeMany(indexes,mutate,arr,predicates,value){
	var indexesList = findIndexes(indexes,arr,predicates);
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate? indexes : cloneIndexes(indexes) : null;
	var {length} = indexesList;
	var i = 0;
	var n = 0;
	if(!length){return [newIndexes,newArr];}
	while(i<length){
		var index = (indexesList[i++]) + n;
		if(mutate){
			arrProto.splice.call(newArr,index,1);
		}else{
			newArr = nativeSlice(newArr,0,index).concat(nativeSlice(newArr,index+1));
		}
		n--;
	}
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}

export function set(indexes,mutate,arr,indexOrPredicate,value,replace,remove){
	if(indexOrPredicate!==null && typeof indexOrPredicate !== 'undefined'){
		if(typeof indexOrPredicate == 'number'){
			return setItemByIndex(indexes,mutate,arr,indexOrPredicate,value,replace,remove);
		}
		if(indexes){
			return setItemWhere(indexes,mutate,arr,indexOrPredicate,value,replace,remove);
		}
	}
	if(replace || remove){
		throw new Error('replace or remove invoked without a valid index');
	}
	return push(indexes,mutate,arr,value);
}

export function replace(indexes,mutate,arr,indexOrPredicate,value){
	return set(indexes,mutate,arr,indexOrPredicate,value,true,false);
}

export function remove(indexes,mutate,arr,indexOrPredicate){
	return set(indexes,mutate,arr,indexOrPredicate,null,false,true);
}

export function findMany(indexes,mutate,arr,predicates,thisArg){
	var newArr = [];
	var newIndexes = indexes ? mutate? indexes : copyIndexes(indexes) : null;
	const indexesList = findIndexes(indexes,arr,predicates,thisArg)
	if(!indexesList.length){return [newIndexes,newArr];}
	newArr = indexesList.map(index=>arr[index]);
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}

export function fromJson(indexes,mutate,arr,json){
	if(!json){return [indexes,arr];}
	const {indexes:jsonIndexes,items} = json;
	indexes = indexesFromJson(jsonIndexes)
	if(mutate){
		arr.length = 0;
		arr.push(...items);
		return [indexes,arr];
	}
	return [indexes,items];
}
