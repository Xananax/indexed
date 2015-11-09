import {
	concat
,	push
,	splice
,	unshift
,	set
,	setMany
,	replace
} from './array-mutative';
import {
	assign
,	slice as nativeSlice
,	isArrayLike
} from './utils';

function concatInitialize(initializer,indexes,mutate,arr,...values){
	var vals = values.map(val=>{
		if(!isArrayLike(val)){
			return initializer(val);
		}
		var {length} = val, i = 0;
		while(i<length){
			val[i] = initializer(val[i]);
			i++;
		}
		return val;
	});
	return concat(indexes,mutate,arr,...vals);
}

function pushInitialize(initializer,indexes,mutate,arr,...values){
	return push(indexes,mutate,arr,...values.map(initializer))
}

function spliceInitialize(initializer,indexes,mutate,arr,start,deleteCount,...items){
	return splice(indexes,mutate,arr,start,deleteCount,...items.map(initializer))
}

function unshiftInitialize(initializer,indexes,mutate,arr,...values){
	return unshift(indexes,mutate,arr,...values.map(initializer))
}

function setInitialize(initializer,indexes,mutate,arr,indexOrPredicate,value,replace,remove){
	if(replace || remove){
		return set(indexes,mutate,arr,indexOrPredicate,value,replace,remove)
	}
	return set(indexes,mutate,arr,indexOrPredicate,initializer(value))
}

function setManyInitialize(initializer,indexes,mutate,arr,predicates,value,remove){
	if(remove){
		return setMany(indexes,mutate,arr,predicates,value,remove)
	}
	return setMany(indexes,mutate,arr,predicates,initializer(value));
}

function replaceInitialize(initializer,indexes,mutate,arr,indexOrPredicate,value){
	return replace(indexes,mutate,arr,indexOrPredicate,initializer(value))
}

export default {
	concat:concatInitialize
,	push:pushInitialize
,	splice:spliceInitialize
,	unshift:unshiftInitialize
,	set:setInitialize
,	setMany:setManyInitialize
,	replace:replaceInitialize
}
