import {asClosure} from './asClosure'

export function asArray(arr,indexes,initializer,factory){
	arr = arr || [];
	asClosure(arr,indexes,initializer,factory||asArray,arr);
	return arr;
}
