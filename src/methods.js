import {
	some
,	map
,	fill
,	find
,	get
,	getIndex
,	has
} from './array-non-mutative'

import {
	indexes
,	reindex
,	findIndex
,	findIndexes
,	addIndex
} from './array-indexes';

import {
	concat
,	filter
,	forEach
,	transform
,	pop
,	push
,	reverse
,	shift
,	slice
,	sort
,	splice
,	unshift
,	remove
,	set
,	replace
,	setMany
,	removeMany
,	findMany
,	fromJson
,	clear
} from './array-mutative'

export const indexesMethods = {
	reindex
,	indexes
,	addIndex
}

export const immutableMethods = {
	some
,	map
,	fill
,	find
,	get
,	getIndex
,	has

,	findIndex
,	findIndexes
}

export const mutableMethods = {
	concat
,	filter
,	forEach
,	transform
,	pop
,	push
,	reverse
,	shift
,	slice
,	sort
,	splice
,	unshift
,	remove
,	set
,	replace
,	setMany
,	removeMany
,	findMany
,	fromJson
,	clear
}

export const allMethods = {
	some
,	map
,	fill
,	find
,	get
,	getIndex
,	has

,	indexes
,	reindex
,	findIndex
,	findIndexes
,	addIndex

,	concat
,	filter
,	forEach
,	transform
,	pop
,	push
,	reverse
,	shift
,	slice
,	sort
,	splice
,	unshift
,	remove
,	set
,	replace
,	setMany
,	removeMany
,	findMany
,	fromJson
}


export const immutableMethodsKeys = Object.keys(immutableMethods);
export const mutableMethodsKeys = Object.keys(mutableMethods);
export const indexesMethodsKeys = Object.keys(indexesMethods);
