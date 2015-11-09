import {
	asClosure
} from './asClosure'

import {
	asArray
} from './asArray'

import {
	Indexed
} from './Indexed'

import {
	isArrayLike
} from './utils'

import {
	BREAK
,	SKIP
} from './constants';

Indexed.asClosure = asClosure
Indexed.wrapArray = asArray;
Indexed.isArrayLike = isArrayLike;
Indexed.BREAK = BREAK;
Indexed.SKIP = SKIP;

export default Indexed;
