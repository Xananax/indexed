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

function concatInitialize(initializer,props,arr,...values){
	const {indexes} = props;
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
	return concat(props,arr,...results);
}

function pushInitialize(initializer,props,arr,...values){
	const {indexes} = props;
	values = initializeMany(initializer,values)
	if(values === BREAK){return [indexes,arr];}
	return push(props,arr,...values)
}

function spliceInitialize(initializer,props,arr,start,deleteCount,...values){
	const {indexes} = props;
	values = initializeMany(initializer,values)
	if(values === BREAK){return [indexes,arr];}
	return splice(props,arr,start,deleteCount,...values)
}

function unshiftInitialize(initializer,props,arr,...values){
	const {indexes} = props;
	values = initializeMany(initializer,values)
	if(values === BREAK){return [indexes,arr];}
	return unshift(props,arr,...values)
}

function setInitialize(initializer,props,arr,indexOrPredicate,value,replace,remove){
	const {indexes} = props;
	if(remove || !replace){
		return set(props,arr,indexOrPredicate,value,false,remove)
	}
	value = initializer(value);
	if(value === BREAK|| value === SKIP){return [indexes,arr];}
	return set(props,arr,indexOrPredicate,value,true)
}

function replaceInitialize(initializer,props,arr,indexOrPredicate,value){
	const {indexes} = props;
	value = initializer(value);
	if(value === BREAK|| value === SKIP){return [indexes,arr];}
	return replace(props,arr,indexOrPredicate,value)
}

export default {
	concat:concatInitialize
,	push:pushInitialize
,	splice:spliceInitialize
,	unshift:unshiftInitialize
,	set:setInitialize
,	replace:replaceInitialize
}
