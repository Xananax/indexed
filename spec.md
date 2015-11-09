# TOC
   - [modified array methods](#modified-array-methods)
     - [isArrayLike](#modified-array-methods-isarraylike)
     - [concat](#modified-array-methods-concat)
     - [filter](#modified-array-methods-filter)
     - [size()](#modified-array-methods-size)
     - [transform](#modified-array-methods-transform)
     - [pop](#modified-array-methods-pop)
     - [shift](#modified-array-methods-shift)
     - [push](#modified-array-methods-push)
     - [unshift](#modified-array-methods-unshift)
     - [reverse](#modified-array-methods-reverse)
     - [slice](#modified-array-methods-slice)
     - [sort](#modified-array-methods-sort)
     - [splice](#modified-array-methods-splice)
     - [findIndex](#modified-array-methods-findindex)
       - [findIndex(fn)](#modified-array-methods-findindex-findindexfn)
       - [findIndex([propName,prop])](#modified-array-methods-findindex-findindexpropnameprop)
       - [findIndex([propName,fn])](#modified-array-methods-findindex-findindexpropnamefn)
     - [findIndexes](#modified-array-methods-findindexes)
       - [findIndexes(fn)](#modified-array-methods-findindexes-findindexesfn)
       - [findIndexes([propName,prop,prop,prop],[include])](#modified-array-methods-findindexes-findindexespropnamepropproppropinclude)
       - [findIndexes([propName,regex])](#modified-array-methods-findindexes-findindexespropnameregex)
       - [findIndexes([propName,fn])](#modified-array-methods-findindexes-findindexespropnamefn)
     - [find](#modified-array-methods-find)
       - [find(fn)](#modified-array-methods-find-findfn)
       - [find([propName,prop])](#modified-array-methods-find-findpropnameprop)
       - [find([propName,fn])](#modified-array-methods-find-findpropnamefn)
     - [getIterator(key)](#modified-array-methods-getiteratorkey)
     - [findMany](#modified-array-methods-findmany)
       - [findMany(fn)](#modified-array-methods-findmany-findmanyfn)
       - [findMany([propName,prop])](#modified-array-methods-findmany-findmanypropnameprop)
       - [findMany([propName,fn])](#modified-array-methods-findmany-findmanypropnamefn)
     - [set](#modified-array-methods-set)
       - [set(index,value)](#modified-array-methods-set-setindexvalue)
       - [set(fn,value)](#modified-array-methods-set-setfnvalue)
       - [set([propName,predicate],value)](#modified-array-methods-set-setpropnamepredicatevalue)
         - [set([propName,string|number])](#modified-array-methods-set-setpropnamepredicatevalue-setpropnamestringnumber)
         - [set([propName,regExp])](#modified-array-methods-set-setpropnamepredicatevalue-setpropnameregexp)
         - [set([propName,fn])](#modified-array-methods-set-setpropnamepredicatevalue-setpropnamefn)
     - [replace](#modified-array-methods-replace)
       - [replace(index,value)](#modified-array-methods-replace-replaceindexvalue)
       - [replace(predicate,value)](#modified-array-methods-replace-replacepredicatevalue)
     - [remove](#modified-array-methods-remove)
       - [remove(index)](#modified-array-methods-remove-removeindex)
       - [remove(predicate)](#modified-array-methods-remove-removepredicate)
     - [setMany(predicates,value)](#modified-array-methods-setmanypredicatesvalue)
       - [setMany(fn,value)](#modified-array-methods-setmanypredicatesvalue-setmanyfnvalue)
       - [setMany([propName,prop,prop,prop],value)](#modified-array-methods-setmanypredicatesvalue-setmanypropnamepropproppropvalue)
       - [setMany([propName,fn],value)](#modified-array-methods-setmanypredicatesvalue-setmanypropnamefnvalue)
     - [removeMany](#modified-array-methods-removemany)
       - [removeMany(fn,value)](#modified-array-methods-removemany-removemanyfnvalue)
       - [removeMany([propName,prop,prop,prop],value)](#modified-array-methods-removemany-removemanypropnamepropproppropvalue)
       - [removeMany([propName,fn],value)](#modified-array-methods-removemany-removemanypropnamefnvalue)
     - [some](#modified-array-methods-some)
     - [toJson](#modified-array-methods-tojson)
     - [fromJson({indexes:{name:{}},items:[]})](#modified-array-methods-fromjsonindexesnameitems)
     - [reindex](#modified-array-methods-reindex)
     - [mutate()](#modified-array-methods-mutate)
     - [chain()](#modified-array-methods-chain)
     - [value()](#modified-array-methods-value)
     - [addIndex(indexName[,reindex])](#modified-array-methods-addindexindexnamereindex)
       - [addIndex(indexName)](#modified-array-methods-addindexindexnamereindex-addindexindexname)
       - [addIndex(indexName,true)](#modified-array-methods-addindexindexnamereindex-addindexindexnametrue)
     - [get()](#modified-array-methods-get)
       - [get(index:number)](#modified-array-methods-get-getindexnumber)
       - [get(indexName,key)](#modified-array-methods-get-getindexnamekey)
       - [get(indexName)](#modified-array-methods-get-getindexname)
     - [has()](#modified-array-methods-has)
       - [has(indexName,key)](#modified-array-methods-has-hasindexnamekey)
       - [has(indexName)](#modified-array-methods-has-hasindexname)
     - [getIndex()](#modified-array-methods-getindex)
       - [getIndex(indexName,key)](#modified-array-methods-getindex-getindexindexnamekey)
       - [getIndex(indexName)](#modified-array-methods-getindex-getindexindexname)
     - [indexes()](#modified-array-methods-indexes)
       - [indexes(indexName)](#modified-array-methods-indexes-indexesindexname)
     - [initializer()](#modified-array-methods-initializer)
   - [Interfaces](#interfaces)
     - [new Indexed(array,indexes,initializer)](#interfaces-new-indexedarrayindexesinitializer)
       - [new Indexed()](#interfaces-new-indexedarrayindexesinitializer-new-indexed)
       - [Indexed.factory()](#interfaces-new-indexedarrayindexesinitializer-indexedfactory)
       - [new Indexed(array)](#interfaces-new-indexedarrayindexesinitializer-new-indexedarray)
       - [new Indexed(array,index:string)](#interfaces-new-indexedarrayindexesinitializer-new-indexedarrayindexstring)
       - [new Indexed(array,array)](#interfaces-new-indexedarrayindexesinitializer-new-indexedarrayarray)
       - [new Indexed(array,object)](#interfaces-new-indexedarrayindexesinitializer-new-indexedarrayobject)
       - [new Indexed(array,indexes,initializer)](#interfaces-new-indexedarrayindexesinitializer-new-indexedarrayindexesinitializer)
     - [asClosure(array,[indexes[,initializer,factory],receiver])](#interfaces-asclosurearrayindexesinitializerfactoryreceiver)
       - [asClosure()](#interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosure)
       - [asClosure(array)](#interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosurearray)
       - [asClosure(array,indexes)](#interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosurearrayindexes)
       - [asClosure(array,indexes,fn:initializer)](#interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosurearrayindexesfninitializer)
       - [asClosure(array,indexes,fn:initializer,fn:factory,receiver:obj)](#interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosurearrayindexesfninitializerfnfactoryreceiverobj)
     - [wrapArray(array,indexes,factory)](#interfaces-wraparrayarrayindexesfactory)
       - [wrapArray()](#interfaces-wraparrayarrayindexesfactory-wraparray)
       - [wrapArray(array)](#interfaces-wraparrayarrayindexesfactory-wraparrayarray)
   - [Unmodified array methods](#unmodified-array-methods)
     - [every](#unmodified-array-methods-every)
     - [includes](#unmodified-array-methods-includes)
     - [map](#unmodified-array-methods-map)
     - [indexOf](#unmodified-array-methods-indexof)
     - [join](#unmodified-array-methods-join)
     - [keys](#unmodified-array-methods-keys)
     - [lastIndexOf](#unmodified-array-methods-lastindexof)
     - [reduce](#unmodified-array-methods-reduce)
     - [reduceRight](#unmodified-array-methods-reduceright)
     - [toString](#unmodified-array-methods-tostring)
     - [values](#unmodified-array-methods-values)
     - [fill](#unmodified-array-methods-fill)
<a name=""></a>
 
<a name="modified-array-methods"></a>
# modified array methods
<a name="modified-array-methods-isarraylike"></a>
## isArrayLike
should return true if an element has a length property and if integer indexes are contiguous.

```js
var obj = { 0: 'a', 1: 'b', length: 2 };
expect(isArrayLike(obj)).to.be.true;
expect((function () {
	return isArrayLike(_arguments);
})()).to.be.true;
```

<a name="modified-array-methods-concat"></a>
## concat
should work like default for simple arrays.

```js
var arr = ['a', 'b', 'c'];
var numeric = [1, 2, 3];
var someValue = 'N';
var concatenated = arr.concat(numeric, someValue);
var wrapped = wrap(arr.slice());
var closed = asClosure(arr.slice());
expect(arr.concat(numeric, someValue)).to.eql(concatenated);
expect(closed.concat(numeric, someValue).value()).to.eql(concatenated);
expect(wrapped.concat(numeric, someValue)).to.eql(concatenated);
```

should update the indexes for objects arrays.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var additional1 = { name: 'e' };
var additional2 = [{ name: 'f' }, { name: 'g' }];
var resultWrapped = wrapped.concat(additional1, additional2);
var resultClosed = closed.concat(additional1, additional2);
verify(resultWrapped, resultClosed, 7);
```

<a name="modified-array-methods-filter"></a>
## filter
should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
function filter(el) {
	return (/a|e|d/.test(el.name)
	);
}
var resultWrapped = wrapped.filter(filter);
var resultClosed = closed.filter(filter);
verify(resultWrapped, resultClosed, 2);
```

<a name="modified-array-methods-size"></a>
## size()
should provide the size of the array.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.size()).to.equal(wrapped.length);
```

<a name="modified-array-methods-transform"></a>
## transform
should be an equivalent to map(), with a contract that returned objects are indexable.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
function map(_ref, i) {
	var name = _ref.name;
	return { name: name + 'a', i: i };
}
var resultTransformed = wrapped.transform(map);
var resultMapped = wrapped.map(map);
expect(resultTransformed).to.eql(resultMapped);
expect(resultTransformed).to.have.property('indexes');
expect(resultMapped).to.not.have.property('indexes');
```

should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
function map(_ref2, i) {
	var name = _ref2.name;
	return { name: name + 'a', i: i };
}
var resultWrapped = wrapped.transform(map);
var resultClosed = closed.transform(map);
verify(resultWrapped, resultClosed, 4);
expect(resultWrapped.indexes('name').get('ba')).to.equal(0);
expect(resultClosed.indexes('name').get('ba')).to.equal(0);
```

should stop when break signal is returned.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
function map(_ref3, i) {
	var name = _ref3.name;
	return i >= 2 ? BREAK : { name: name + 'a', i: i };
}
var resultWrapped = wrapped.transform(map);
var resultClosed = closed.transform(map);
verify(resultWrapped, resultClosed, 2);
expect(resultWrapped.indexes('name').get('ba')).to.equal(0);
expect(resultClosed.indexes('name').get('ba')).to.equal(0);
```

should filter falsy values.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
function map(_ref4, i) {
	var name = _ref4.name;
	return i % 2 ? { name: name + 'a', i: i } : false;
}
var resultWrapped = wrapped.transform(map);
var resultClosed = closed.transform(map);
verify(resultWrapped, resultClosed, 2);
expect(resultWrapped.indexes('name').get('da')).to.equal(0);
expect(resultClosed.indexes('name').get('da')).to.equal(0);
```

<a name="modified-array-methods-pop"></a>
## pop
should return the array.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.pop();
var resultClosed = closed.pop();
verify(resultWrapped, resultClosed, 3);
```

should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.pop();
var resultClosed = closed.pop();
expect(resultWrapped.indexes('name').get('c')).to.be.undefined;;
expect(resultClosed.indexes('name').get('c')).to.be.undefined;;
```

should assign the popped value to the receiver array if provided.

```js
var receiver1 = [];
var receiver2 = [];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.pop(receiver1);
var resultClosed = closed.pop(receiver2);
expect(receiver1[0]).to.eql(receiver2[0]);
expect(receiver1[0]).to.eql({ name: 'c' });
```

<a name="modified-array-methods-shift"></a>
## shift
should return the array.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.shift();
var resultClosed = closed.shift();
verify(resultWrapped, resultClosed, 3);
```

should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.shift();
var resultClosed = closed.shift();
expect(resultWrapped.indexes('name').get('b')).to.be.undefined;;
expect(resultClosed.indexes('name').get('b')).to.be.undefined;;
expect(resultWrapped.indexes('name').get('a')).to.equal(1);
expect(resultClosed.indexes('name').get('a')).to.equal(1);
```

should assign the popped value to the receiver array if provided.

```js
var receiver1 = [];
var receiver2 = [];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.shift(receiver1);
var resultClosed = closed.shift(receiver2);
expect(receiver1[0]).to.eql(receiver2[0]);
expect(receiver1[0]).to.eql({ name: 'b' });
```

<a name="modified-array-methods-push"></a>
## push
should add an item at the end of the array.

```js
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var pushed = { name: 'f' };
arr.push(pushed);
var resultWrapped = wrapped.push(pushed);
var resultClosed = closed.push(pushed);
expect(resultWrapped.length).to.equal(arr.length);
expect(resultClosed.value().length).to.equal(arr.length);
```

should reindex.

```js
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var pushed = { name: 'f' };
arr.push(pushed);
var resultWrapped = wrapped.push(pushed);
var resultClosed = closed.push(pushed);
expect(resultWrapped.indexes('name').size).to.equal(arr.length);
expect(resultClosed.indexes('name').size).to.equal(arr.length);
expect(resultClosed.indexes('name').get('f')).to.equal(4);
```

<a name="modified-array-methods-unshift"></a>
## unshift
should prepend an item to the array.

```js
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var unshifted = { name: 'f' };
arr.unshift(unshifted);
var resultWrapped = wrapped.unshift(unshifted);
var resultClosed = closed.unshift(unshifted);
expect(resultWrapped.length).to.equal(arr.length);
expect(resultClosed.value().length).to.equal(arr.length);
```

should reindex.

```js
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var unshifted = { name: 'f' };
arr.unshift(unshifted);
var resultWrapped = wrapped.unshift(unshifted);
var resultClosed = closed.unshift(unshifted);
expect(resultWrapped.indexes('name').size).to.equal(arr.length);
expect(resultClosed.indexes('name').size).to.equal(arr.length);
expect(resultClosed.indexes('name').get('f')).to.equal(0);
expect(resultClosed.indexes('name').get('b')).to.equal(1);
```

<a name="modified-array-methods-reverse"></a>
## reverse
should reverse the array.

```js
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
arr.reverse();
var resultWrapped = wrapped.reverse();
var resultClosed = closed.reverse();
expect(resultWrapped).to.eql(arr);
expect(resultClosed.value()).to.eql(arr);
```

should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.reverse();
var resultClosed = closed.reverse();
expect(resultWrapped.indexes('name').get('b')).to.equal(3);
expect(resultWrapped.indexes('name').get('c')).to.equal(0);
```

<a name="modified-array-methods-slice"></a>
## slice
should return a copy of the array with no arguments.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.slice();
var resultClosed = closed.slice();
expect(resultWrapped).to.eql(wrapped);
expect(resultClosed.value()).to.eql(closed.value());
```

should return a sliced copy of the array with arguments.

```js
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var a1 = arr.slice(2);
var w1 = wrapped.slice(2);
var a2 = arr.slice(1, 5);
var w2 = wrapped.slice(1, 5);
var a3 = wrapped.slice(1, 2);
var w3 = wrapped.slice(1, 2);
expect(w1).to.eql(a1);
expect(w2).to.eql(a2);
expect(w3).to.eql(a3);
```

should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.slice(2, 4);
expect(resultWrapped.indexes('name').get('a')).to.equal(0);
```

<a name="modified-array-methods-sort"></a>
## sort
sort the array if given a function.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }].sort(sort);
var resultWrapped = wrapped.sort(sort);
expect(resultWrapped).to.eql(arr);
```

sort the array if given a property name.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }].sort(sort);
var resultWrapped = wrapped.sort('name');
expect(resultWrapped).to.eql(arr);
```

should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.sort('name');
var keys = resultWrapped.indexes('name').keys();
var order = [];
var model = ['a', 'b', 'c', 'd'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;
try {
	for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var key = _step.value;
		order.push(key);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}
expect(order).to.eql(model);
```

<a name="modified-array-methods-splice"></a>
## splice
should delete the specified elements.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
arr.splice(2, 1);
var results = wrapped.splice(2, 1);
expect(results).to.eql(arr);
```

should insert elements if specified.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
arr.splice(2, 0, { name: 'f' });
expect(wrapped.splice(2, 0, { name: 'f' })).to.eql(arr);
```

should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var keys = [];
var result = wrapped.splice(2, 3, { name: 'f' }).indexes('name');
result.forEach(function (v, k) {
	keys.push(k);
});
expect(keys).to.eql(['b', 'd', 'f']);
```

<a name="modified-array-methods-findindex"></a>
## findIndex
<a name="modified-array-methods-findindex-findindexfn"></a>
### findIndex(fn)
should return the object index when the provided function returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndex(function (el) {
	return el.name == 'd';
});
expect(index).to.equal(wrapped.indexes('name').get('d'));
```

should return -1 if no object matches the function.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndex(function (el) {
	return el.name == 'e';
});
expect(index).to.equal(-1);
```

<a name="modified-array-methods-findindex-findindexpropnameprop"></a>
### findIndex([propName,prop])
should return the object index who's property `propName` is equal to the provided `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndex(['name', 'd']);
expect(index).to.equal(wrapped.indexes('name').get('d'));
```

should return the object index who's property `propName` matches the provided RegExp `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndex(['name', /a|c/]);
var indexes = wrapped.indexes('name');
expect(index).to.equal(indexes.get('a'));
```

<a name="modified-array-methods-findindex-findindexpropnamefn"></a>
### findIndex([propName,fn])
should give to the function the arguments: key, object, keys, array,keyNumber.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndex(['name', function (key, obj, map, arr, n) {
	expect(key).to.be.a('string');
	expect(key).to.equal(wrapped[0].name);
	expect(obj).to.be.an('object');
	expect(obj).to.equal(wrapped[0]);
	expect(map).to.be.instanceOf(Map);
	expect(arr).to.be.an('array');
	expect(arr).to.eql(wrapped);
	expect(n).to.be.a('number');
	expect(n).to.equal(0);
	done();
	return BREAK;
}]);
```

should return the object index for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndex(['name', function (key) {
	return (/b/.test(key)
	);
}]);
expect(index).to.be.equal(wrapped.indexes('name').get('b'));
```

should return -1 if no object returned true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndex(['name', function (key) {
	return (/n/.test(key)
	);
}]);
expect(index).to.be.equal(-1);
```

<a name="modified-array-methods-findindexes"></a>
## findIndexes
<a name="modified-array-methods-findindexes-findindexesfn"></a>
### findIndexes(fn)
should return an array of indexes when the provided function returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var indexes = wrapped.findIndexes(function (el) {
	return el.name !== 'z';
});
expect(indexes).to.eql([0, 1, 2, 3]);
```

<a name="modified-array-methods-findindexes-findindexespropnamepropproppropinclude"></a>
### findIndexes([propName,prop,prop,prop],[include])
should return the indexes for object where `propName` is equal to any of the provided `props`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var indexes = wrapped.findIndexes(['name', 'a', 'n', 'b', 'c', 'z']);
expect(indexes).to.eql([2, 0, 3]);
```

should include falsy indexes if include is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var indexes = wrapped.findIndexes(['name', 'a', 'n', 'b', 'c', 'z'], true);
expect(indexes).to.eql([2, -1, 0, 3, -1]);
```

<a name="modified-array-methods-findindexes-findindexespropnameregex"></a>
### findIndexes([propName,regex])
should return the indexes for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndexes(['name', /c|a/]);
expect(index).to.be.eql([2, 3]);
```

<a name="modified-array-methods-findindexes-findindexespropnamefn"></a>
### findIndexes([propName,fn])
should return the indexes for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndexes(['name', function (key) {
	return (/a|c/.test(key)
	);
}]);
expect(index).to.be.eql([2, 3]);
```

<a name="modified-array-methods-find"></a>
## find
<a name="modified-array-methods-find-findfn"></a>
### find(fn)
should return the object when the provided function returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var obj = wrapped.find(function (el) {
	return el.name == 'd';
});
expect(obj).to.eql(wrapped[wrapped.indexes('name').get('d')]);
```

should return undefined if no object matches the function.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var obj = wrapped.find(function (el) {
	return el.name == 'e';
});
expect(obj).to.be.undefined;
```

<a name="modified-array-methods-find-findpropnameprop"></a>
### find([propName,prop])
should return the object index who's property `propName` is equal to the provided `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var obj = wrapped.find(['name', 'd']);
expect(obj).to.equal(wrapped[wrapped.indexes('name').get('d')]);
```

should return the object index who's property `propName` matches the provided RegExp `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var obj = wrapped.find(['name', /a|c/]);
expect(obj).to.equal(wrapped[wrapped.indexes('name').get('a')]);
```

<a name="modified-array-methods-find-findpropnamefn"></a>
### find([propName,fn])
should return the object for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var obj = wrapped.find(['name', function (key) {
	return (/b/.test(key)
	);
}]);
expect(obj).to.be.equal(wrapped[wrapped.indexes('name').get('b')]);
```

should return undefined if no object returned true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var obj = wrapped.find(['name', function (key) {
	return (/n/.test(key)
	);
}]);
expect(obj).to.be.be.undefined;;
```

<a name="modified-array-methods-getiteratorkey"></a>
## getIterator(key)
should return an iterator for the provided index name.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;
try {
	for (var _iterator2 = wrapped.getIterator('name')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _step2$value = _slicedToArray(_step2.value, 2);
		var key = _step2$value[0];
		var value = _step2$value[1];
		expect(key).to.equal(value.name);
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}
```

should throw an error is the provided index name does not exist.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(function () {
	var iterator = wrapped.getIterator('whatever');
}).to.throw();
```

<a name="modified-array-methods-findmany"></a>
## findMany
<a name="modified-array-methods-findmany-findmanyfn"></a>
### findMany(fn)
should return the objects when the provided function returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var objs = wrapped.findMany(function (el, i) {
	return i < 2;
});
expect(objs).to.eql([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }].slice(0, 2));
```

should return an empty array if no object matches the function.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var objs = wrapped.findMany(function (el) {
	return el.name == 'e';
});
expect(objs.length).to.equal(0);
```

should return the same object type that ran the function.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var objs = wrapped.findMany(function (el, i) {
	return i < 2;
});
expect(objs).to.have.property('indexes');
expect(objs.indexes()).to.be.instanceOf(Map);
```

<a name="modified-array-methods-findmany-findmanypropnameprop"></a>
### findMany([propName,prop])
should return the objects index who's property `propName` is equal to the provided `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var objs = wrapped.findMany(['name', 'd']);
var get = wrapped.get('name');
expect(objs).to.eql([get('d')]);
```

should return the objects who's property `propName` matches the provided RegExp `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var objs = wrapped.findMany(['name', /a|c/]);
var get = wrapped.get('name');
expect(objs).to.eql([get('a'), get('c')]);
```

<a name="modified-array-methods-findmany-findmanypropnamefn"></a>
### findMany([propName,fn])
should return the objects for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var objs = wrapped.findMany(['name', function (key) {
	return (/b|d/.test(key)
	);
}]);
var get = wrapped.get('name');
expect(objs).to.eql([get('b'), get('d')]);
```

should return an empty array if no objsect returned true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var objs = wrapped.findMany(['name', function (key) {
	return (/n/.test(key)
	);
}]);
expect(objs.length).to.be.equal(0);
```

<a name="modified-array-methods-set"></a>
## set
<a name="modified-array-methods-set-setindexvalue"></a>
### set(index,value)
should work like push if index is not specified.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { name: 'f' };
var result = wrapped.set(null, obj);
expect(result.length).to.equal(5);
```

should work like push if index is larger than array.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { name: 'f' };
var result = wrapped.set(20, obj);
expect(result.length).to.equal(5);
expect(result.indexes('name').get('f')).to.equal(4);
```

should merge new properties if the index exists.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 4 };
var obj2 = { newProp2: 5 };
var obj3 = { newProp: 2 };
var result = wrapped.set(2, obj).set(2, obj2);
expect(result.length).to.equal(4);
expect(result.get('name')('a')).to.eql({ name: 'a', newProp: 4, newProp2: 5 });
result = result.set(2, obj3);
expect(result.get('name', 'a')).to.eql({ name: 'a', newProp: 2, newProp2: 5 });
```

should reindex if a passed property is indexed.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { name: 'f', newProp: 2 };
var result = wrapped.set(2, obj);
expect(result.length).to.equal(4);
expect(result.get('name')('a')).to.be.undefined;
expect(result.get('name', 'f')).to.eql({ name: 'f', newProp: 2 });
```

should replace the item if the index exists and the replace flag is set.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(2, obj, true);
expect(result.length).to.equal(4);
expect(result.get('name')('a')).to.be.undefined;;
expect(result[2]).to.eql({ newProp: 2 });
```

should delete the item if the index exists and the remove flag is set.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var result = wrapped.set(2, null, false, true);
expect(result.length).to.equal(3);
expect(result.get('name')('a')).to.be.undefined;;
expect(result[2]).to.eql({ name: 'c' });
expect(result.indexes('name').get('c')).to.equal(2);
```

should count backwards if the index is negative.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(-2, obj);
expect(result.length).to.equal(4);
expect(result.get('name')('a')).to.eql({ name: 'a', newProp: 2 });
```

<a name="modified-array-methods-set-setfnvalue"></a>
### set(fn,value)
should set the element where provided predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(function (el) {
	return el.name == 'a';
}, obj);
expect(result.length).to.equal(4);
expect(result.get('name')('a')).to.eql({ name: 'a', newProp: 2 });
```

<a name="modified-array-methods-set-setpropnamepredicatevalue"></a>
### set([propName,predicate],value)
<a name="modified-array-methods-set-setpropnamepredicatevalue-setpropnamestringnumber"></a>
#### set([propName,string|number])
should set the element where provided predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(['name', 'a'], obj);
expect(result.length).to.equal(4);
expect(result.get('name')('a')).to.eql({ name: 'a', newProp: 2 });
```

<a name="modified-array-methods-set-setpropnamepredicatevalue-setpropnameregexp"></a>
#### set([propName,regExp])
should set the element where provided predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(['name', /a|b/], obj);
expect(result.length).to.equal(4);
expect(result.get('name')('b')).to.eql({ name: 'b', newProp: 2 });
```

<a name="modified-array-methods-set-setpropnamepredicatevalue-setpropnamefn"></a>
#### set([propName,fn])
should set the element where provided predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(['name', function (key) {
	return key == 'a';
}], obj);
expect(result.length).to.equal(4);
expect(result.get('name')('a')).to.eql({ name: 'a', newProp: 2 });
```

<a name="modified-array-methods-replace"></a>
## replace
<a name="modified-array-methods-replace-replaceindexvalue"></a>
### replace(index,value)
should replace the specified objects and indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.replace(1, { 'path': 5 });
expect(result.length).to.equal(4);
expect(result.indexes('name').size).to.equal(3);
expect(result.indexes('name').get('d')).to.be.undefined;;
```

<a name="modified-array-methods-replace-replacepredicatevalue"></a>
### replace(predicate,value)
should replace the object where predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.replace(['name', /d/], { 'path': 5 });
expect(result.length).to.equal(4);
expect(result.indexes('name').size).to.equal(3);
expect(result.indexes('name').get('d')).to.be.undefined;;
```

<a name="modified-array-methods-remove"></a>
## remove
<a name="modified-array-methods-remove-removeindex"></a>
### remove(index)
should remove the specified objects and indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.indexes('name').get('a')).to.equal(2);
var result = wrapped.remove(1);
expect(result.length).to.equal(3);
expect(result.indexes('name').size).to.equal(3);
expect(result.indexes('name').get('a')).to.equal(1);
```

<a name="modified-array-methods-remove-removepredicate"></a>
### remove(predicate)
should remove the object where predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.indexes('name').get('a')).to.equal(2);
var result = wrapped.remove(['name', 'd']);
expect(result.length).to.equal(3);
expect(result.indexes('name').size).to.equal(3);
expect(result.indexes('name').get('a')).to.equal(1);
```

<a name="modified-array-methods-setmanypredicatesvalue"></a>
## setMany(predicates,value)
<a name="modified-array-methods-setmanypredicatesvalue-setmanyfnvalue"></a>
### setMany(fn,value)
should set the objects where the provided function returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.setMany(function (el, i) {
	return i < 2;
}, { smallerThanTwo: true });
expect(result[0]).to.have.property('smallerThanTwo');
expect(result[1]).to.have.property('smallerThanTwo');
expect(result[2]).to.not.have.property('smallerThanTwo');
```

<a name="modified-array-methods-setmanypredicatesvalue-setmanypropnamepropproppropvalue"></a>
### setMany([propName,prop,prop,prop],value)
should set the objects who's property `propName` is equal to one of the provided `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.setMany(['name', 'd', 'c'], { favoriteLetters: true });
var get = result.get('name');
expect(get('d')).to.have.property('favoriteLetters');
expect(get('c')).to.have.property('favoriteLetters');
expect(get('a')).to.not.have.property('favoriteLetters');
```

should set the objects who's property `propName` matches the provided RegExp `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.setMany(['name', /d|c/], { favoriteLetters: true });
var get = result.get('name');
expect(get('d')).to.have.property('favoriteLetters');
expect(get('c')).to.have.property('favoriteLetters');
expect(get('a')).to.not.have.property('favoriteLetters');
```

<a name="modified-array-methods-setmanypredicatesvalue-setmanypropnamefnvalue"></a>
### setMany([propName,fn],value)
should set the objects for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.setMany(['name', function (key) {
	return (/d|c/.test(key)
	);
}], { favoriteLetters: true });
var get = result.get('name');
expect(get('d')).to.have.property('favoriteLetters');
expect(get('c')).to.have.property('favoriteLetters');
expect(get('a')).to.not.have.property('favoriteLetters');
```

<a name="modified-array-methods-removemany"></a>
## removeMany
<a name="modified-array-methods-removemany-removemanyfnvalue"></a>
### removeMany(fn,value)
should remove the objects where the provided function returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.removeMany(function (el, i) {
	return i < 2;
});
expect(result[0]).to.eql({ name: 'a' });
```

<a name="modified-array-methods-removemany-removemanypropnamepropproppropvalue"></a>
### removeMany([propName,prop,prop,prop],value)
should remove the objects who's property `propName` is equal to one of the provided `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.removeMany(['name', 'd', 'c']);
var get = result.get('name');
expect(get('d')).to.be.undefined;;
expect(get('c')).to.be.undefined;;
expect(result).to.eql([{ name: 'b' }, { name: 'a' }]);
```

should remove the objects who's property `propName` matches the provided RegExp `prop`.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.removeMany(['name', /d|c/]);
var get = result.get('name');
expect(get('d')).to.be.undefined;;
expect(get('c')).to.be.undefined;;
```

<a name="modified-array-methods-removemany-removemanypropnamefnvalue"></a>
### removeMany([propName,fn],value)
should remove the objects for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.removeMany(['name', function (key) {
	return (/d|c/.test(key)
	);
}]);
var get = result.get('name');
expect(get('d')).to.be.undefined;;
expect(get('c')).to.be.undefined;;
```

<a name="modified-array-methods-some"></a>
## some
should return true if any of the object fullfills the predicate.

```js
var arr = [12, 5, 8, 1, 4];
var wrapped = wrap(arr);
expect(arr.some(isBiggerThan10)).to.be.true;
expect(wrapped.some(isBiggerThan10)).to.be.true;
```

should return false if none of the objects fullfills the predicate.

```js
var arr = [2, 5, 8, 1, 4];
var wrapped = wrap(arr);
expect(arr.some(isBiggerThan10)).to.be.false;
expect(wrapped.some(isBiggerThan10)).to.be.false;
```

should return false if BREAK is returned.

```js
var i = 0;
function isBiggerThan10BREAK(element, index) {
	i++;
	return BREAK;
}
var arr = [2, 5, 18, 11, 14];
var wrapped = wrap(arr);
expect(wrapped.some(isBiggerThan10BREAK)).to.be.false;
expect(i).to.equal(1);
```

<a name="modified-array-methods-tojson"></a>
## toJson
should output a serializable object.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.toJson()).to.eql({
	indexes: { name: { 'b': 0, 'd': 1, 'a': 2, 'c': 3 } },
	items: [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }]
});
```

<a name="modified-array-methods-fromjsonindexesnameitems"></a>
## fromJson({indexes:{name:{}},items:[]})
should rebuild an indexed array from the provided json.

```js
var json = {
	indexes: { name: { 'b': 0, 'd': 1, 'a': 2, 'c': 3 } },
	items: [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }]
};
var model = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var wrapped = wrap().fromJson(json);
expect(wrapped).to.eql(model);
expect(wrapped.indexes('name').size).to.equal(4);
```

<a name="modified-array-methods-reindex"></a>
## reindex
rebuilds indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
wrapped[5] = { name: 'e' };
wrapped[6] = { name: 'f' };
wrapped[7] = { name: 'g' };
expect(wrapped.indexes('name').size).to.equal(4);
wrapped.reindex();
expect(wrapped.indexes('name').size).to.equal(7);
```

<a name="modified-array-methods-mutate"></a>
## mutate()
should make all methods mutative when set to true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').mutate(true).push('n').push(4).unshift('z');
expect(wrapped.length).to.equal(7);
wrapped.mutate(false);
wrapped.push('r');
expect(wrapped.length).to.equal(7);
```

should return the current mutate value if no argument was passed.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.mutate()).to.be.false;
wrapped.mutate(true);
expect(wrapped.mutate()).to.be.true;
```

<a name="modified-array-methods-chain"></a>
## chain()
should make all methods mutative until value() is called.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').chain().push('n').push(4).unshift('z');
expect(wrapped.length).to.equal(7);
wrapped.value();
wrapped.push('r');
expect(wrapped.length).to.equal(7);
```

<a name="modified-array-methods-value"></a>
## value()
should make all methods non-mutative.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').mutate(true);
var len = wrapped.length;
wrapped.push({ name: 'f' });
expect(wrapped.length).to.equal(len + 1);
wrapped.value();
wrapped.push({ name: 'v' });
expect(wrapped.length).to.equal(len + 1);
```

should return the original array.

```js
var arr = ['a', 'b', 'c'];
var wrapped = wrap(arr);
expect(wrapped.value()).to.equal(arr);
```

<a name="modified-array-methods-addindexindexnamereindex"></a>
## addIndex(indexName[,reindex])
<a name="modified-array-methods-addindexindexnamereindex-addindexindexname"></a>
### addIndex(indexName)
should add an index to the indexes map.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').push({ path: 'i', name: 'n' });
wrapped.addIndex('path');
expect(wrapped.get('path')).to.be.a('function');
expect(wrapped.indexes('path').size).to.equal(0);
```

<a name="modified-array-methods-addindexindexnamereindex-addindexindexnametrue"></a>
### addIndex(indexName,true)
should rebuild the indexes after adding the new index.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').push({ path: 'i', name: 'n' }, { path: 'd' });
wrapped.addIndex('path', true);
expect(wrapped.get('path')).to.be.a('function');
expect(wrapped.indexes('path').size).to.equal(2);
expect(wrapped.indexes('name').size).to.equal(5);
```

<a name="modified-array-methods-get"></a>
## get()
<a name="modified-array-methods-get-getindexnumber"></a>
### get(index:number)
should return the object specified by index number.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.get(0)).to.eql({ name: 'b' });
```

should return undefined if the index is not found.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.get(9)).to.be.undefined;;
```

<a name="modified-array-methods-get-getindexnamekey"></a>
### get(indexName,key)
should return the object specified by indexName and key.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.get('name', 'b')).to.eql({ name: 'b' });
```

should return undefined if the index or key are not found.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.get('name', 'f')).to.be.undefined;;
```

<a name="modified-array-methods-get-getindexname"></a>
### get(indexName)
should return a function getInIndex(key) that can be used to retrieve keys.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var get = wrapped.get('name');
expect(get).to.be.a('function');
expect(get('a')).to.eql({ name: 'a' });
```

should return undefined if the index name provided does not exist.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.get('notAnIndex')).to.be.undefined;
```

should bind the function getIndex(key) to the current values only, unless mutate is false.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var get = wrapped.get('name');
var get2 = wrapped.push({ name: 'f' }).get('name');
expect(get('a')).to.eql({ name: 'a' });
expect(get('f')).to.be.undefined;;
expect(get2('f')).to.eql({ name: 'f' });
var wrapped2 = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').mutate(true);
var get3 = wrapped2.get('name');
wrapped2.push({ 'name': 'f' });
expect(get3('f')).to.eql({ name: 'f' });
```

<a name="modified-array-methods-has"></a>
## has()
<a name="modified-array-methods-has-hasindexnamekey"></a>
### has(indexName,key)
should return the true if the object specified by indexName and key exists.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.has('name', 'b')).to.be.true;
```

should return false if the index or key are not found.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.has('name', 'f')).to.be.false;
```

<a name="modified-array-methods-has-hasindexname"></a>
### has(indexName)
should return a function hasInIndex(key) that can be used to check for keys.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var has = wrapped.has('name');
expect(has).to.be.a('function');
expect(has('a')).to.be.true;
```

should return undefined if the index name provided does not exist.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.has('notAnIndex')).to.be.false;
```

should bind the function hasIndex(key) to the current values only, unless mutate is false.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var has = wrapped.has('name');
var has2 = wrapped.push({ name: 'f' }).has('name');
expect(has('a')).to.be.true;
expect(has('f')).to.be.false;
expect(has2('f')).to.be.true;
```

<a name="modified-array-methods-getindex"></a>
## getIndex()
<a name="modified-array-methods-getindex-getindexindexnamekey"></a>
### getIndex(indexName,key)
should return the index if the object specified by indexName and key exists.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.getIndex('name', 'b')).to.equal(0);
```

should return -1 if the index or key are not found.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.getIndex('name', 'f')).to.equal(-1);
```

<a name="modified-array-methods-getindex-getindexindexname"></a>
### getIndex(indexName)
should return a function getIndexInIndex(key) that can be used to check for keys.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var getIndex = wrapped.getIndex('name');
expect(getIndex).to.be.a('function');
expect(getIndex('a')).to.equal(2);
```

should return undefined if the index name provided does not exist.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.getIndex('notAnIndex')).to.be.undefined;
```

should bind the function getIndexIndex(key) to the current values only, unless mutate is false.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var getIndex = wrapped.getIndex('name');
var getIndex2 = wrapped.push({ name: 'f' }).getIndex('name');
expect(getIndex('a')).to.equal(2);
expect(getIndex('f')).to.equal(-1);
expect(getIndex2('f')).to.equal(4);
```

<a name="modified-array-methods-indexes"></a>
## indexes()
returns the indexes map.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.indexes()).to.be.instanceOf(Map);
expect(wrapped.indexes().size).to.equal(1);
```

<a name="modified-array-methods-indexes-indexesindexname"></a>
### indexes(indexName)
returns the specific index map.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.indexes('name')).to.be.instanceOf(Map);
expect(wrapped.indexes('name').size).to.equal(4);
```

<a name="modified-array-methods-initializer"></a>
## initializer()
should put all new items through the provided initializer function.

```js
var i = 0;
var letters = ['e', 'f', 'g', 'h', 'i'];
var wrapped = wrap([], 'name').initializer(function (el) {
	var obj = Object.assign(el, { itWorks: true });
	if (!obj.name) {
		obj.name = letters[i++];
	}
	return obj;
});
var results = wrapped.concat([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }]).push({ another: 'element' }).splice(2, 0, { yetAnother: 'yes', name: 'between-D-and-A' }).unshift({ first: true });
expect(results.indexes('name').get('f')).to.equal(0);
expect(results.indexes('name').get('between-D-and-A')).to.equal(3);
```

<a name="interfaces"></a>
# Interfaces
<a name="interfaces-new-indexedarrayindexesinitializer"></a>
## new Indexed(array,indexes,initializer)
<a name="interfaces-new-indexedarrayindexesinitializer-new-indexed"></a>
### new Indexed()
should create a new Indexed object.

```js
var indexed = new _src2.default();
expect(indexed).to.be.instanceOf(_src2.default);
```

<a name="interfaces-new-indexedarrayindexesinitializer-indexedfactory"></a>
### Indexed.factory()
should create a new Indexed object.

```js
var indexed = IndexedFactory();
expect(indexed).to.be.instanceOf(_src2.default);
```

<a name="interfaces-new-indexedarrayindexesinitializer-new-indexedarray"></a>
### new Indexed(array)
should create a new Indexed object.

```js
var indexed = new _src2.default(['a', 'b']);
expect(indexed.get(0)).to.equal('a');
expect(indexed.size()).to.equal(2);
```

<a name="interfaces-new-indexedarrayindexesinitializer-new-indexedarrayindexstring"></a>
### new Indexed(array,index:string)
should set an index.

```js
var indexed = new _src2.default([], 'name');
expect(indexed.indexes().has('name')).to.be.true;
expect(indexed.indexes('name').size).to.equal(0);
```

<a name="interfaces-new-indexedarrayindexesinitializer-new-indexedarrayarray"></a>
### new Indexed(array,array)
should set all the indexes specified.

```js
var indexed = new _src2.default([], ['name', 'size']);
expect(indexed.indexes().has('name')).to.be.true;
expect(indexed.indexes().has('size')).to.be.true;
expect(indexed.indexes().size).to.equal(2);
```

<a name="interfaces-new-indexedarrayindexesinitializer-new-indexedarrayobject"></a>
### new Indexed(array,object)
should set all the indexes and values specified.

```js
var indexed = new _src2.default([{ name: 'a' }, { name: 'b' }], { name: { a: 0, b: 1, c: 2 } });
expect(indexed.indexes().has('name')).to.be.true;
expect(indexed.indexes('name').size).to.equal(2);
expect(indexed.indexes('name').has('c')).to.be.false;
expect(indexed.indexes('name').get('a')).to.equal(0);
```

<a name="interfaces-new-indexedarrayindexesinitializer-new-indexedarrayindexesinitializer"></a>
### new Indexed(array,indexes,initializer)
should put all added objects through the initializer.

```js
var indexed = new _src2.default([], 'name', function (el) {
	return { name: el };
});
expect(indexed.push('a', 'b', 'c').get('name', 'a')).to.eql({ name: 'a' });
```

<a name="interfaces-asclosurearrayindexesinitializerfactoryreceiver"></a>
## asClosure(array,[indexes[,initializer,factory],receiver])
<a name="interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosure"></a>
### asClosure()
should return an object similar to an Indexed.

```js
var closed = asClosure();
expect(closed).to.not.be.instanceOf(_src2.default);
expect(closed).to.have.property('indexes');
```

<a name="interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosurearray"></a>
### asClosure(array)
should create a closure around the provided array.

```js
var arr = [1, 2, 3];
var closed = asClosure(arr);
expect(closed.value()).to.equal(arr);
```

<a name="interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosurearrayindexes"></a>
### asClosure(array,indexes)
should create the given indexes.

```js
var closed = asClosure([], 'name');
expect(closed).to.have.property('indexes');
expect(closed.indexes().has('name')).to.be.true;
```

<a name="interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosurearrayindexesfninitializer"></a>
### asClosure(array,indexes,fn:initializer)
should use the provided initializer.

```js
var closed = asClosure([], 'name', function (el) {
	return { name: el };
});
expect(closed.push('a', 'b', 'c').get('name', 'a')).to.eql({ name: 'a' });
```

<a name="interfaces-asclosurearrayindexesinitializerfactoryreceiver-asclosurearrayindexesfninitializerfnfactoryreceiverobj"></a>
### asClosure(array,indexes,fn:initializer,fn:factory,receiver:obj)
should use the factory.

```js
it('should add the methods to the provided object', function () {
	function factory(arr, indexes, initializer, factory) {
		return { someProp: 'abcde' };
	}
	var closed = factory();
	asClosure([], 'name', null, factory, closed);
	expect(closed).to.have.property('indexes');
	expect(closed.indexes().has('name')).to.be.true;
	expect(closed).to.have.property('someProp');
	var result = closed.push('a');
	expect(result).to.have.property('someProp');
});
```

<a name="interfaces-wraparrayarrayindexesfactory"></a>
## wrapArray(array,indexes,factory)
should leave the array prototype unmodified.

```js
var arr = wrapArray();
expect(arr).to.be.instanceOf(Array);
expect(Array.isArray(arr)).to.be.true;
```

<a name="interfaces-wraparrayarrayindexesfactory-wraparray"></a>
### wrapArray()
should return an augmented array.

```js
var arr = wrapArray();
expect(arr).to.have.property('indexes');
```

<a name="interfaces-wraparrayarrayindexesfactory-wraparrayarray"></a>
### wrapArray(array)
should augment the array with all methods.

```js
var arr = [1, 2, 3];
wrapArray(arr);
expect(arr).to.have.property('indexes');
```

<a name="unmodified-array-methods"></a>
# Unmodified array methods
<a name="unmodified-array-methods-every"></a>
## every
should work just like a regular array.

```js
function isBigEnough(element, index, array) {
	return element >= 10;
}
var testFalse = makeComparisons([12, 5, 8, 130, 44]);
var testTrue = makeComparisons([12, 54, 18, 130, 44]);
testFalse.forEach(function (el, i) {
	expect(el.every(isBigEnough)).to.be.false;
});
testTrue.forEach(function (el) {
	expect(el.every(isBigEnough)).to.be.true;
});
```

<a name="unmodified-array-methods-includes"></a>
## includes
should work just like a regular array.

```js
if (!('includes' in Array.prototype)) {
	return;
}
var test1 = makeComparisons([1, 2, 3]);
var test2 = makeComparisons([1, 2, NaN]);
test1.forEach(function (el, i) {
	expect(el.includes(2)).to.be.true;
	el.includes(3, expect(3)).to.be.false;
	el.includes(3, expect(-1)).to.be.true;
});
test2.forEach(function (el) {
	expect(el.includes(NaN)).to.be.true;
});
```

<a name="unmodified-array-methods-map"></a>
## map
should work just like a regular array.

```js
var test1 = makeComparisons([2, 5, 9]);
test1.map(function (el) {
	return expect(el.map(function (n) {
		return n + 1;
	})).to.eql([3, 6, 10]);
});
```

<a name="unmodified-array-methods-indexof"></a>
## indexOf
should work just like a regular array.

```js
var test1 = makeComparisons([2, 5, 9]);
test1.forEach(function (el) {
	expect(el.indexOf(2)).to.equal(0);
	expect(el.indexOf(7)).to.equal(-1);
	expect(el.indexOf(9, 2)).to.equal(2);
	expect(el.indexOf(2, -1)).to.equal(-1);
	expect(el.indexOf(2, -3)).to.equal(0);
});
```

<a name="unmodified-array-methods-join"></a>
## join
should work just like a regular array.

```js
var test1 = makeComparisons(['Wind', 'Rain', 'Fire']);
test1.forEach(function (el, i) {
	expect(el.join()).to.equal('Wind,Rain,Fire');
	expect(el.join(', ')).to.equal('Wind, Rain, Fire');
});
```

<a name="unmodified-array-methods-keys"></a>
## keys
should work just like a regular array.

```js
var test1 = makeComparisons(['a', 'b', 'c']);
test1.forEach(function (el) {
	expect([].concat(_toConsumableArray(el.keys()))).to.eql([0, 1, 2]);
});
```

<a name="unmodified-array-methods-lastindexof"></a>
## lastIndexOf
should work just like a regular array.

```js
var test1 = makeComparisons([2, 5, 9, 2]);
test1.forEach(function (el) {
	expect(el.lastIndexOf(2)).to.equal(3);
	expect(el.lastIndexOf(7)).to.equal(-1);
	expect(el.lastIndexOf(2, 3)).to.equal(3);
	expect(el.lastIndexOf(2, 2)).to.equal(0);
	expect(el.lastIndexOf(2, -2)).to.equal(0);
	expect(el.lastIndexOf(2, -1)).to.equal(3);
});
```

<a name="unmodified-array-methods-reduce"></a>
## reduce
should work just like a regular array.

```js
var test1 = makeComparisons([0, 1, 2, 3]);
var test2 = makeComparisons([[0, 1], [2, 3], [4, 5]]);
test1.forEach(function (el) {
	expect(el.reduce(function (a, b) {
		return a + b;
	})).to.equal(6);
});
test2.forEach(function (el) {
	expect(el.reduce(function (a, b) {
		return a.concat(b);
	})).to.eql([0, 1, 2, 3, 4, 5]);
});
```

<a name="unmodified-array-methods-reduceright"></a>
## reduceRight
should work just like a regular array.

```js
var test1 = makeComparisons([0, 1, 2, 3]);
var test2 = makeComparisons([[0, 1], [2, 3], [4, 5]]);
test1.forEach(function (el) {
	expect(el.reduceRight(function (a, b) {
		return a + b;
	})).to.equal(6);
});
test2.forEach(function (el) {
	expect(el.reduceRight(function (a, b) {
		return a.concat(b);
	})).to.eql([4, 5, 2, 3, 0, 1]);
});
```

<a name="unmodified-array-methods-tostring"></a>
## toString
should work just like a regular array.

```js
var arr = [0, 1, 2, 3];
var str = arr + '';
var test1 = makeComparisons(arr);
test1.forEach(function (el) {
	expect(el + '').to.equal(str);
});
```

<a name="unmodified-array-methods-values"></a>
## values
should work just like a regular array.

```js
if (!('values' in Array.prototype)) {
	return;
}
var arr = ['w', 'y', 'k', 'o', 'p'];
var test1 = makeComparisons(arr);
test1.forEach(function (el) {
	var eArr = el.values();
	var i = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	try {
		for (var _iterator = eArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var letter = _step.value;
			expect(letter).to.equal(arr[i++]);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
});
```

<a name="unmodified-array-methods-fill"></a>
## fill
should throw an error for the closed and wrapped versions.

```js
var _makeComparisons = makeComparisons([]);
var _makeComparisons2 = _slicedToArray(_makeComparisons, 3);
var wrapped = _makeComparisons2[0];
var closed = _makeComparisons2[1];
var arr = _makeComparisons2[2];
function shouldThrow(el) {
	try {
		el.fill();
	} catch (e) {}
}
function shouldNotThrow(el) {
	el.fill();
}
shouldThrow(closed);
shouldThrow(wrapped);
shouldNotThrow(arr);
```

