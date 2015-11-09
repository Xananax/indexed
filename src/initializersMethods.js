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
import {
	BREAK
,	SKIP
} from './constants';

function initializeMany(initializer,vals){
	const {length} = vals;
	var i = 0;
	const results = [];
	while(i<length){
		let result = initializer(vals[i++]);
		if(result === BREAK){return BREAK;}
		if(result === SKIP){continue;}
		results.push(result);
	}
	return results;
}

function concatInitialize(initializer,indexes,mutate,arr,...values){
	const {length} = values;
	var i = 0;
	const results = [];
	while(i<length){
		let val = values[i++];
		let result = (!isArrayLike(val)) ? initializer(val) : initializeMany(initializer,val)
		if(result === BREAK){return [indexes,arr];}
		if(result === SKIP){continue;}
		results.push(result);
	}
	return concat(indexes,mutate,arr,...results);
}

function pushInitialize(initializer,indexes,mutate,arr,...values){
	values = initializeMany(initializer,values)
	if(values === BREAK){return [indexes,arr];}
	return push(indexes,mutate,arr,...values)
}

function spliceInitialize(initializer,indexes,mutate,arr,start,deleteCount,...values){
	values = initializeMany(initializer,values)
	if(values === BREAK){return [indexes,arr];}
	return splice(indexes,mutate,arr,start,deleteCount,...values)
}

function unshiftInitialize(initializer,indexes,mutate,arr,...values){
	values = initializeMany(initializer,values)
	if(values === BREAK){return [indexes,arr];}
	return unshift(indexes,mutate,arr,...values)
}

function setInitialize(initializer,indexes,mutate,arr,indexOrPredicate,value,replace,remove){
	if(remove || !replace){
		return set(indexes,mutate,arr,indexOrPredicate,value,false,remove)
	}
	value = initializer(value);
	if(value === BREAK|| value === SKIP){return [indexes,arr];}
	return set(indexes,mutate,arr,indexOrPredicate,value,true)
}

function setManyInitialize(initializer,indexes,mutate,arr,predicates,value,remove){
	if(remove){
		return setMany(indexes,mutate,arr,predicates,value,remove)
	}
	value = initializer(value);
	if(value === BREAK|| value === SKIP){return [indexes,arr];}
	return setMany(indexes,mutate,arr,predicates,value);
}

function replaceInitialize(initializer,indexes,mutate,arr,indexOrPredicate,value){
	value = initializer(value);
	if(value === BREAK|| value === SKIP){return [indexes,arr];}
	return replace(indexes,mutate,arr,indexOrPredicate,value)
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
