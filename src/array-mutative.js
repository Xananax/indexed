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

export function concat(props,arr,...values){
	const {indexes,mutate} = props;
	var {length} = values, i = 0, index = arr.length;
	var newArr = mutate? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate? indexes : cloneIndexes(indexes) : null;
	props.lastIndexes = [];
	if(!length){return [newIndexes,newArr];}
	while(i<length){
		var value = values[i++];
		if(isArrayLike(value)){
			var valueLength = value.length, j = 0;
			while(j<valueLength){
				var subValue = value[j++];
				setIndexes(newIndexes,subValue,index);
				props.lastIndexes.push(index);
				newArr[index++] = subValue;
			}
		}else{
			setIndexes(newIndexes,value,index);
			props.lastIndexes.push(index);
			newArr[index++] = value;
		}
	}
	return [newIndexes,newArr];
}

export function clear(props,arr){
	const {indexes,mutate} = props;
	var newArr;
	var newIndexes = indexes ? copyIndexes(indexes) : null;
	if(mutate){
		newArr = arrProto.splice.call(0,arr.length);
	}else{
		newArr = [];
	}
	return [newIndexes,newArr];
}

export function filter(props,arr,callback,thisArg){
	const {indexes,mutate} = props;
	var newArr = arrProto.filter.call(arr,callback,thisArg);
	var newIndexes = indexes ? copyIndexes(indexes) : null;
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function forEach(props,arr,callback,thisArg){
	const {indexes,mutate} = props;
	var {length} = arr, i = 0;
	while(i<length){
		var val = arr[i];
		var result = callback.call(thisArg,val,i,arr);
		if(result === BREAK){return;}
		i++;
	}
	return [indexes,arr];
}
export function transform(props,arr,callback,thisArg){
	const {indexes,mutate} = props;
	props.lastIndexes = [];
	var {length} = arr, i = 0,newArr = mutate ? arr : new Array(length);
	while(i<length){
		var val = arr[i];
		var result = callback.call(thisArg,val,i,arr);
		if(result === BREAK){break;}
		if(result === SKIP){result = false;}
		props.lastIndexes.push(i);
		newArr[i] = result;
		i++;
	}
	newArr = arrProto.filter.call(newArr,Boolean);
	var newIndexes = indexes ? copyIndexes(indexes) : null;
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function pop(props,arr,receiver){
	const {indexes,mutate} = props;
	var newArr = mutate? arr: nativeSlice(arr);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	var popped = newArr.pop();
	if(receiver){receiver[0]=popped;}
	removeIndexes(newIndexes,popped)
	return [newIndexes,newArr];
}
export function push(props,arr,...values){
	const {indexes,mutate} = props;
	props.lastIndexes = [];
	var {length} = values, i = 0, index = arr.length;
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	if(!length){return [newIndexes,newArr];}
	var max = i+length;
	while(i<length){
		var value = values[i++];
		setIndexes(newIndexes,value,index);
		props.lastIndexes.push(index);
		newArr[index++] = value;
	}
	return [newIndexes,newArr];
}
export function reverse(props,arr){
	const {indexes,mutate} = props;
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	newArr.reverse();
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function shift(props,arr,receiver){
	const {indexes,mutate} = props;
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
export function slice(props,arr,begin,end){
	const {indexes,mutate} = props;
	var newArr = nativeSlice(arr,begin,end);
	var newIndexes = indexes ? mutate ? indexes : cloneIndexes(indexes) : null;
	var {length} = newArr, i = 0;
	if(length != arr.length){
		newIndexes = reindex(newIndexes,newArr);
	}
	return [newIndexes,newArr];
}
export function sort(props,arr,compareFunction){
	const {indexes,mutate} = props;
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

function fillArrayFrom(length,start){
	return Array.apply(null,Array(length)).map((el,i)=>start+i);
}

export function splice(props,arr,start,deleteCount,...items){
	const {indexes,mutate} = props;
	var newArr;
	deleteCount = deleteCount || 0;
	props.lastIndexes = [];
	if(mutate){
		newArr = arr;
		arrProto.splice.call(newArr,start,deleteCount,...items);
	}else{
		var head = nativeSlice(arr,0,start);
		var tail = nativeSlice(arr,start+deleteCount);
		newArr = [].concat(head,items,tail);
	}
	if(items.length){
		props.lastIndexes = fillArrayFrom(items.length,start);
	}
	var newIndexes = indexes ? copyIndexes(indexes) : null;
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}
export function unshift(props,arr,...values){
	const {indexes,mutate} = props;
	var {length} = values, i = 0;
	props.lastIndexes = [];
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
	props.lastIndexes = fillArrayFrom(values.length,0);
	return [newIndexes,newArr];
}

export function setItemByIndex(props,arr,index,value,replace,remove){
	const {indexes,mutate} = props;
	if(typeof index == 'undefined' || index === null){index = arr.length;}
	if(index<0){
		index = arr.length+(index);
	}
	if(index>=arr.length){return push(props,arr,value);}
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
		props.lastIndexes = [index];
	}
	return [newIndexes,newArr]
}

export function setItemWhere(props,arr,predicate,value,replace,remove){
	const {indexes,mutate} = props;
	var index = findIndex(props,arr,predicate);
	props.lastIndexes = [];
	if(index < 0){
		return [indexes,arr]
	}
	return setItemByIndex(props,arr,index,value,replace,remove);
}

export function setMultipleItemsByIndex(props,arr,indexesList,value,remove){
	const {indexes,mutate} = props;
	var newArr = mutate ? arr : nativeSlice(arr);
	var newIndexes = indexes ? mutate? indexes : cloneIndexes(indexes) : null;
	var {length} = indexesList;
	var i = 0;
	props.lastIndexes = [];
	if(!length){return [newIndexes,newArr];}
	var newProps = {indexes:newIndexes,mutate:true,lastIndexes:props.lastIndexes};
	while(i<length){
		var index = indexesList[i++];
		setItemByIndex(newProps,newArr,index,value,false,remove);
	}
	props.lastIndexes = newProps.lastIndexes;
	return [newIndexes,newArr]
}

export function setMany(props,arr,predicates,value){
	var indexesList = findIndexes(props,arr,predicates);
	return setMultipleItemsByIndex(props,arr,indexesList,value);
}

export function removeMany(props,arr,predicates,value){
	const {indexes,mutate} = props;
	var indexesList = findIndexes(props,arr,predicates);
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

export function set(props,arr,indexOrPredicate,value,replace,remove){
	const {indexes,mutate} = props;
	props.lastIndexes = [];
	if(indexOrPredicate!==null && typeof indexOrPredicate !== 'undefined'){
		if(typeof indexOrPredicate == 'number'){
			return setItemByIndex(props,arr,indexOrPredicate,value,replace,remove);
		}
		if(indexes){
			return setItemWhere(props,arr,indexOrPredicate,value,replace,remove);
		}
	}
	if(replace || remove){
		throw new Error('replace or remove invoked without a valid index');
	}
	return push(props,arr,value);
}

export function replace(props,arr,indexOrPredicate,value){
	return set(props,arr,indexOrPredicate,value,true,false);
}

export function remove(props,arr,indexOrPredicate){
	return set(props,arr,indexOrPredicate,null,false,true);
}

export function findMany(props,arr,predicates,thisArg){
	const {indexes,mutate} = props;
	var newArr = [];
	var newIndexes = indexes ? mutate? indexes : copyIndexes(indexes) : null;
	const indexesList = findIndexes(props,arr,predicates,thisArg)
	if(!indexesList.length){return [newIndexes,newArr];}
	newArr = indexesList.map(index=>arr[index]);
	reindex(newIndexes,newArr);
	return [newIndexes,newArr];
}

export function fromJson(props,arr,json){
	const {indexes,mutate} = props;
	if(!json){return [indexes,arr];}
	const {indexes:jsonIndexes,items} = json;
	const newIndexes = indexesFromJson(jsonIndexes)
	if(mutate){
		arr.length = 0;
		arr.push(...items);
		return [newIndexes,arr];
	}
	return [newIndexes,items];
}
