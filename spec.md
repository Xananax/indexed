# TOC
   - [Working With Collections](#working-with-collections)
     - [collect(name:string)](#working-with-collections-collectnamestring)
   - [Getters](#getters)
     - [get(index:integer|string[,key:string])](#getters-getindexintegerstringkeystring)
       - [get(index:number)](#getters-getindexintegerstringkeystring-getindexnumber)
       - [get(indexName:string,key:string)](#getters-getindexintegerstringkeystring-getindexnamestringkeystring)
       - [get(indexName:string)](#getters-getindexintegerstringkeystring-getindexnamestring)
   - [Working With Indexes](#working-with-indexes)
     - [indexes([indexName:string])](#working-with-indexes-indexesindexnamestring)
       - [indexes()](#working-with-indexes-indexesindexnamestring-indexes)
         - [indexes(indexName:string)](#working-with-indexes-indexesindexnamestring-indexes-indexesindexnamestring)
     - [has([indexName:string[,key:string]])](#working-with-indexes-hasindexnamestringkeystring)
       - [has(indexName:string,key:string)](#working-with-indexes-hasindexnamestringkeystring-hasindexnamestringkeystring)
       - [has(indexName:string)](#working-with-indexes-hasindexnamestringkeystring-hasindexnamestring)
     - [getIndex([indexName:string[,key:string]])](#working-with-indexes-getindexindexnamestringkeystring)
       - [getIndex(indexName:string,key:string)](#working-with-indexes-getindexindexnamestringkeystring-getindexindexnamestringkeystring)
       - [getIndex(indexName:string)](#working-with-indexes-getindexindexnamestringkeystring-getindexindexnamestring)
     - [addIndex(indexName:string[,reindex:boolean])](#working-with-indexes-addindexindexnamestringreindexboolean)
       - [addIndex(indexName:string)](#working-with-indexes-addindexindexnamestringreindexboolean-addindexindexnamestring)
       - [addIndex(indexName:string,true)](#working-with-indexes-addindexindexnamestringreindexboolean-addindexindexnamestringtrue)
     - [reindex()](#working-with-indexes-reindex)
   - [Interfaces](#interfaces)
     - [Class Indexed](#interfaces-class-indexed)
       - [new Indexed([items:array[,indexes:any[,initializer:function]]])](#interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction)
         - [new Indexed()](#interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexed)
         - [Indexed.factory()](#interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-indexedfactory)
         - [new Indexed(items:array)](#interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarray)
         - [new Indexed(items:array,index:string)](#interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarrayindexstring)
         - [new Indexed(items:array,indexes:array)](#interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarrayindexesarray)
         - [new Indexed(items:array,indexes:object)](#interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarrayindexesobject)
         - [new Indexed(items:array,indexes:any,initializer:function)](#interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarrayindexesanyinitializerfunction)
     - [Closure over variable](#interfaces-closure-over-variable)
       - [asClosure([items:array,[indexes:any[,initializer:function,factory:function],receiver:any]])](#interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany)
         - [asClosure()](#interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosure)
         - [asClosure(items:array)](#interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosureitemsarray)
         - [asClosure(items:array,indexes:any)](#interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosureitemsarrayindexesany)
         - [asClosure(items:array,indexes:any,initializer:function)](#interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosureitemsarrayindexesanyinitializerfunction)
         - [asClosure(items:array,indexes,initializer:function,factory:function,receiver:object)](#interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosureitemsarrayindexesinitializerfunctionfactoryfunctionreceiverobject)
     - [Augment Array](#interfaces-augment-array)
       - [wrapArray([items:array[,indexes:any[,factory:function]]])](#interfaces-augment-array-wraparrayitemsarrayindexesanyfactoryfunction)
         - [wrapArray()](#interfaces-augment-array-wraparrayitemsarrayindexesanyfactoryfunction-wraparray)
         - [wrapArray(items:array)](#interfaces-augment-array-wraparrayitemsarrayindexesanyfactoryfunction-wraparrayitemsarray)
   - [Methods that return a new indexed object](#methods-that-return-a-new-indexed-object)
     - [Returns a subset of items](#methods-that-return-a-new-indexed-object-returns-a-subset-of-items)
       - [findMany(predicate:function|array[string,string]|array[string,RegExp]|array[string,function])](#methods-that-return-a-new-indexed-object-returns-a-subset-of-items-findmanypredicatefunctionarraystringstringarraystringregexparraystringfunction)
         - [findMany(fn)](#methods-that-return-a-new-indexed-object-returns-a-subset-of-items-findmanypredicatefunctionarraystringstringarraystringregexparraystringfunction-findmanyfn)
         - [findMany([propName,prop])](#methods-that-return-a-new-indexed-object-returns-a-subset-of-items-findmanypredicatefunctionarraystringstringarraystringregexparraystringfunction-findmanypropnameprop)
         - [findMany([propName,fn])](#methods-that-return-a-new-indexed-object-returns-a-subset-of-items-findmanypredicatefunctionarraystringstringarraystringregexparraystringfunction-findmanypropnamefn)
       - [transform(function[,thisArg])](#methods-that-return-a-new-indexed-object-returns-a-subset-of-items-transformfunctionthisarg)
   - [Methods that return an iterator](#methods-that-return-an-iterator)
     - [getIterator(key:string)](#methods-that-return-an-iterator-getiteratorkeystring)
       - [getIterator(key:string).forEach()](#methods-that-return-an-iterator-getiteratorkeystring-getiteratorkeystringforeach)
       - [getIterator(key:string).map()](#methods-that-return-an-iterator-getiteratorkeystring-getiteratorkeystringmap)
   - [Set/Update/Remove](#setupdateremove)
     - [Set, update, or remove a single item](#setupdateremove-set-update-or-remove-a-single-item)
       - [set(predicate:integer|function|array[string,string]|array[string,regexp]|array[string,function],value:any)](#setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany)
         - [set(index:integer,value:any)](#setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setindexintegervalueany)
         - [set(predicate:function,value)](#setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpredicatefunctionvalue)
         - [set([propName,predicate],value:any)](#setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpropnamepredicatevalueany)
           - [set([propName,string|number])](#setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpropnamepredicatevalueany-setpropnamestringnumber)
           - [set([propName,regExp],value:any)](#setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpropnamepredicatevalueany-setpropnameregexpvalueany)
           - [set([propName,fn],value:any)](#setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpropnamepredicatevalueany-setpropnamefnvalueany)
       - [replace(predicate,value)](#setupdateremove-set-update-or-remove-a-single-item-replacepredicatevalue)
         - [replace(index:integer,value)](#setupdateremove-set-update-or-remove-a-single-item-replacepredicatevalue-replaceindexintegervalue)
         - [replace(predicate,value)](#setupdateremove-set-update-or-remove-a-single-item-replacepredicatevalue-replacepredicatevalue)
       - [remove(predicate)](#setupdateremove-set-update-or-remove-a-single-item-removepredicate)
         - [remove(index:integer)](#setupdateremove-set-update-or-remove-a-single-item-removepredicate-removeindexinteger)
         - [remove(predicate)](#setupdateremove-set-update-or-remove-a-single-item-removepredicate-removepredicate)
     - [set or remove multiple items](#setupdateremove-set-or-remove-multiple-items)
       - [setMany(predicates:function|array[string,...predicate]|array[string|function],value)](#setupdateremove-set-or-remove-multiple-items-setmanypredicatesfunctionarraystringpredicatearraystringfunctionvalue)
         - [setMany(fn,value)](#setupdateremove-set-or-remove-multiple-items-setmanypredicatesfunctionarraystringpredicatearraystringfunctionvalue-setmanyfnvalue)
         - [setMany([propName,prop,prop,prop],value)](#setupdateremove-set-or-remove-multiple-items-setmanypredicatesfunctionarraystringpredicatearraystringfunctionvalue-setmanypropnamepropproppropvalue)
         - [setMany([propName,fn],value)](#setupdateremove-set-or-remove-multiple-items-setmanypredicatesfunctionarraystringpredicatearraystringfunctionvalue-setmanypropnamefnvalue)
       - [removeMany(predicates)](#setupdateremove-set-or-remove-multiple-items-removemanypredicates)
         - [removeMany(fn,value)](#setupdateremove-set-or-remove-multiple-items-removemanypredicates-removemanyfnvalue)
         - [removeMany([propName,prop,prop,prop],value)](#setupdateremove-set-or-remove-multiple-items-removemanypredicates-removemanypropnamepropproppropvalue)
         - [removeMany([propName,fn],value)](#setupdateremove-set-or-remove-multiple-items-removemanypredicates-removemanypropnamefnvalue)
     - [transform items being added](#setupdateremove-transform-items-being-added)
       - [initializer(function)](#setupdateremove-transform-items-being-added-initializerfunction)
     - [clear()](#setupdateremove-clear)
   - [Static methods and helpers](#static-methods-and-helpers)
     - [isArrayLike(obj)](#static-methods-and-helpers-isarraylikeobj)
   - [Unmodified array methods](#unmodified-array-methods)
     - [lookup methods](#unmodified-array-methods-lookup-methods)
       - [indexOf(element)](#unmodified-array-methods-lookup-methods-indexofelement)
       - [lastIndexOf(element)](#unmodified-array-methods-lookup-methods-lastindexofelement)
     - [Verification methods](#unmodified-array-methods-verification-methods)
       - [every(function)](#unmodified-array-methods-verification-methods-everyfunction)
       - [includes(function)](#unmodified-array-methods-verification-methods-includesfunction)
       - [some(function)](#unmodified-array-methods-verification-methods-somefunction)
     - [Methods returning an array](#unmodified-array-methods-methods-returning-an-array)
       - [map(function[,thisArg])](#unmodified-array-methods-methods-returning-an-array-mapfunctionthisarg)
       - [keys()](#unmodified-array-methods-methods-returning-an-array-keys)
       - [values()](#unmodified-array-methods-methods-returning-an-array-values)
     - [Methods returning a single value](#unmodified-array-methods-methods-returning-a-single-value)
       - [join(string)](#unmodified-array-methods-methods-returning-a-single-value-joinstring)
         - [reduce(function[,thisArg])](#unmodified-array-methods-methods-returning-a-single-value-joinstring-reducefunctionthisarg)
         - [reduceRight(function[,thisArg])](#unmodified-array-methods-methods-returning-a-single-value-joinstring-reducerightfunctionthisarg)
         - [toString()](#unmodified-array-methods-methods-returning-a-single-value-joinstring-tostring)
     - [Methods that I do not know how to implement yet](#unmodified-array-methods-methods-that-i-do-not-know-how-to-implement-yet)
       - [fill(...elements)](#unmodified-array-methods-methods-that-i-do-not-know-how-to-implement-yet-fillelements)
   - [Utils & Convenience Methods](#utils--convenience-methods)
     - [size()](#utils--convenience-methods-size)
     - [toJson](#utils--convenience-methods-tojson)
     - [fromJson({indexes:{name:{}},items:[]})](#utils--convenience-methods-fromjsonindexesnameitems)
     - [mutate()](#utils--convenience-methods-mutate)
     - [chain()](#utils--convenience-methods-chain)
     - [value()](#utils--convenience-methods-value)
   - [Modified Array Methods](#modified-array-methods)
     - [Lookup Methods](#modified-array-methods-lookup-methods)
       - [Return Indexes](#modified-array-methods-lookup-methods-return-indexes)
         - [findIndex(predicate:function|array[string,string]|array[string,function]|array[string,RegExp])](#modified-array-methods-lookup-methods-return-indexes-findindexpredicatefunctionarraystringstringarraystringfunctionarraystringregexp)
           - [findIndex(function)](#modified-array-methods-lookup-methods-return-indexes-findindexpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexfunction)
           - [findIndex([propName,prop])](#modified-array-methods-lookup-methods-return-indexes-findindexpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexpropnameprop)
           - [findIndex([propName,function])](#modified-array-methods-lookup-methods-return-indexes-findindexpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexpropnamefunction)
         - [findIndexes(predicate:function|array[string,...string]|array[string,function]|array[string,RegExp])](#modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp)
           - [findIndexes(function)](#modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexesfunction)
           - [findIndexes([propName,prop,prop,prop],[include])](#modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexespropnamepropproppropinclude)
           - [findIndexes([propName,regex])](#modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexespropnameregex)
           - [findIndexes([propName,function])](#modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexespropnamefunction)
       - [Returns items](#modified-array-methods-lookup-methods-returns-items)
         - [find(predicate:function|array[string,string]|array[string,function]|array[string,RegExp])](#modified-array-methods-lookup-methods-returns-items-findpredicatefunctionarraystringstringarraystringfunctionarraystringregexp)
           - [find(function)](#modified-array-methods-lookup-methods-returns-items-findpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findfunction)
           - [find([propName,prop])](#modified-array-methods-lookup-methods-returns-items-findpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findpropnameprop)
           - [find([propName,function])](#modified-array-methods-lookup-methods-returns-items-findpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findpropnamefunction)
     - [Mutative Methods](#modified-array-methods-mutative-methods)
       - [filter(function)](#modified-array-methods-mutative-methods-filterfunction)
       - [concat(...items:any)](#modified-array-methods-mutative-methods-concatitemsany)
       - [pop([receiver:array])](#modified-array-methods-mutative-methods-popreceiverarray)
         - [pop()](#modified-array-methods-mutative-methods-popreceiverarray-pop)
         - [pop(receiver:array)](#modified-array-methods-mutative-methods-popreceiverarray-popreceiverarray)
       - [shift([receiver:array])](#modified-array-methods-mutative-methods-shiftreceiverarray)
         - [shift()](#modified-array-methods-mutative-methods-shiftreceiverarray-shift)
         - [shift(receiver:array)](#modified-array-methods-mutative-methods-shiftreceiverarray-shiftreceiverarray)
       - [push(item:any)](#modified-array-methods-mutative-methods-pushitemany)
       - [unshift()](#modified-array-methods-mutative-methods-unshift)
       - [reverse()](#modified-array-methods-mutative-methods-reverse)
       - [slice([begin:int[,end:int]])](#modified-array-methods-mutative-methods-slicebeginintendint)
         - [slice()](#modified-array-methods-mutative-methods-slicebeginintendint-slice)
         - [slice(begin)](#modified-array-methods-mutative-methods-slicebeginintendint-slicebegin)
         - [slice(begin,end)](#modified-array-methods-mutative-methods-slicebeginintendint-slicebeginend)
       - [sort](#modified-array-methods-mutative-methods-sort)
       - [splice(start:int,delete:int[,...items:any])](#modified-array-methods-mutative-methods-splicestartintdeleteintitemsany)
         - [splice,(start,number)](#modified-array-methods-mutative-methods-splicestartintdeleteintitemsany-splicestartnumber)
         - [splice(start,number,...items)](#modified-array-methods-mutative-methods-splicestartintdeleteintitemsany-splicestartnumberitems)
<a name=""></a>
 
<a name="working-with-collections"></a>
# Working With Collections
<a name="working-with-collections-collectnamestring"></a>
## collect(name:string)
<a name="getters"></a>
# Getters
<a name="getters-getindexintegerstringkeystring"></a>
## get(index:integer|string[,key:string])
<a name="getters-getindexintegerstringkeystring-getindexnumber"></a>
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

<a name="getters-getindexintegerstringkeystring-getindexnamestringkeystring"></a>
### get(indexName:string,key:string)
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

<a name="getters-getindexintegerstringkeystring-getindexnamestring"></a>
### get(indexName:string)
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

should bind the function get(key) to the current values only, unless mutate is false.

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

<a name="working-with-indexes"></a>
# Working With Indexes
<a name="working-with-indexes-indexesindexnamestring"></a>
## indexes([indexName:string])
<a name="working-with-indexes-indexesindexnamestring-indexes"></a>
### indexes()
returns the indexes map.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.indexes()).to.be.instanceOf(Map);
expect(wrapped.indexes().size).to.equal(1);
```

<a name="working-with-indexes-indexesindexnamestring-indexes-indexesindexnamestring"></a>
#### indexes(indexName:string)
returns the specific index map.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.indexes('name')).to.be.instanceOf(Map);
expect(wrapped.indexes('name').size).to.equal(4);
```

<a name="working-with-indexes-hasindexnamestringkeystring"></a>
## has([indexName:string[,key:string]])
<a name="working-with-indexes-hasindexnamestringkeystring-hasindexnamestringkeystring"></a>
### has(indexName:string,key:string)
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

<a name="working-with-indexes-hasindexnamestringkeystring-hasindexnamestring"></a>
### has(indexName:string)
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

<a name="working-with-indexes-getindexindexnamestringkeystring"></a>
## getIndex([indexName:string[,key:string]])
<a name="working-with-indexes-getindexindexnamestringkeystring-getindexindexnamestringkeystring"></a>
### getIndex(indexName:string,key:string)
should return the index if the object specified by indexName and key exists.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var wrapped2 = wrap([{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }], 'id');
expect(wrapped.getIndex('name', 'b')).to.equal(0);
expect(wrapped2.getIndex('id', 4)).to.equal(4);
expect(wrapped2.indexes().get('id').get(0)).to.equal(0);
```

should return -1 if the index or key are not found.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.getIndex('name', 'f')).to.equal(-1);
```

<a name="working-with-indexes-getindexindexnamestringkeystring-getindexindexnamestring"></a>
### getIndex(indexName:string)
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

<a name="working-with-indexes-addindexindexnamestringreindexboolean"></a>
## addIndex(indexName:string[,reindex:boolean])
<a name="working-with-indexes-addindexindexnamestringreindexboolean-addindexindexnamestring"></a>
### addIndex(indexName:string)
should add an index to the indexes map.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').push({ path: 'i', name: 'n' });
wrapped.addIndex('path');
expect(wrapped.get('path')).to.be.a('function');
expect(wrapped.indexes('path').size).to.equal(0);
```

<a name="working-with-indexes-addindexindexnamestringreindexboolean-addindexindexnamestringtrue"></a>
### addIndex(indexName:string,true)
should rebuild the indexes after adding the new index.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').push({ path: 'i', name: 'n' }, { path: 'd' });
wrapped.addIndex('path', true);
expect(wrapped.get('path')).to.be.a('function');
expect(wrapped.indexes('path').size).to.equal(2);
expect(wrapped.indexes('name').size).to.equal(5);
```

<a name="working-with-indexes-reindex"></a>
## reindex()
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

<a name="interfaces"></a>
# Interfaces
<a name="interfaces-class-indexed"></a>
## Class Indexed
<a name="interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction"></a>
### new Indexed([items:array[,indexes:any[,initializer:function]]])
<a name="interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexed"></a>
#### new Indexed()
should create a new Indexed object.

```js
var indexed = new _src2.default();
expect(indexed).to.be.instanceOf(_src2.default);
```

<a name="interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-indexedfactory"></a>
#### Indexed.factory()
should create a new Indexed object.

```js
var indexed = IndexedFactory();
expect(indexed).to.be.instanceOf(_src2.default);
```

<a name="interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarray"></a>
#### new Indexed(items:array)
should create a new Indexed object.

```js
var indexed = new _src2.default(['a', 'b']);
expect(indexed.get(0)).to.equal('a');
expect(indexed.size()).to.equal(2);
```

<a name="interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarrayindexstring"></a>
#### new Indexed(items:array,index:string)
should set an index.

```js
var indexed = new _src2.default([], 'name');
expect(indexed.indexes().has('name')).to.be.true;
expect(indexed.indexes('name').size).to.equal(0);
```

<a name="interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarrayindexesarray"></a>
#### new Indexed(items:array,indexes:array)
should set all the indexes specified.

```js
var indexed = new _src2.default([], ['name', 'size']);
expect(indexed.indexes().has('name')).to.be.true;
expect(indexed.indexes().has('size')).to.be.true;
expect(indexed.indexes().size).to.equal(2);
```

<a name="interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarrayindexesobject"></a>
#### new Indexed(items:array,indexes:object)
should set all the indexes and values specified.

```js
var indexed = new _src2.default([{ name: 'a' }, { name: 'b' }], { name: { a: 0, b: 1, c: 2 } });
expect(indexed.indexes().has('name')).to.be.true;
expect(indexed.indexes('name').size).to.equal(2);
expect(indexed.indexes('name').has('c')).to.be.false;
expect(indexed.indexes('name').get('a')).to.equal(0);
```

<a name="interfaces-class-indexed-new-indexeditemsarrayindexesanyinitializerfunction-new-indexeditemsarrayindexesanyinitializerfunction"></a>
#### new Indexed(items:array,indexes:any,initializer:function)
should put all added objects through the initializer.

```js
var indexed = new _src2.default([], 'name', function (el) {
	return { name: el };
});
expect(indexed.push('a', 'b', 'c').get('name', 'a')).to.eql({ name: 'a' });
```

<a name="interfaces-closure-over-variable"></a>
## Closure over variable
<a name="interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany"></a>
### asClosure([items:array,[indexes:any[,initializer:function,factory:function],receiver:any]])
<a name="interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosure"></a>
#### asClosure()
should return an object similar to an Indexed.

```js
var closed = asClosure();
expect(closed).to.not.be.instanceOf(_src2.default);
expect(closed).to.have.property('indexes');
```

<a name="interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosureitemsarray"></a>
#### asClosure(items:array)
should create a closure around the provided array.

```js
var arr = [1, 2, 3];
var closed = asClosure(arr);
expect(closed.value()).to.equal(arr);
```

<a name="interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosureitemsarrayindexesany"></a>
#### asClosure(items:array,indexes:any)
should create the given indexes.

```js
var closed = asClosure([], 'name');
expect(closed).to.have.property('indexes');
expect(closed.indexes().has('name')).to.be.true;
```

<a name="interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosureitemsarrayindexesanyinitializerfunction"></a>
#### asClosure(items:array,indexes:any,initializer:function)
should use the provided initializer.

```js
var closed = asClosure([], 'name', function (el) {
	return { name: el };
});
expect(closed.push('a', 'b', 'c').get('name', 'a')).to.eql({ name: 'a' });
```

<a name="interfaces-closure-over-variable-asclosureitemsarrayindexesanyinitializerfunctionfactoryfunctionreceiverany-asclosureitemsarrayindexesinitializerfunctionfactoryfunctionreceiverobject"></a>
#### asClosure(items:array,indexes,initializer:function,factory:function,receiver:object)
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

<a name="interfaces-augment-array"></a>
## Augment Array
<a name="interfaces-augment-array-wraparrayitemsarrayindexesanyfactoryfunction"></a>
### wrapArray([items:array[,indexes:any[,factory:function]]])
should leave the array prototype unmodified.

```js
var arr = wrapArray();
expect(arr).to.be.instanceOf(Array);
expect(Array.isArray(arr)).to.be.true;
```

<a name="interfaces-augment-array-wraparrayitemsarrayindexesanyfactoryfunction-wraparray"></a>
#### wrapArray()
should return an augmented array.

```js
var arr = wrapArray();
expect(arr).to.have.property('indexes');
```

<a name="interfaces-augment-array-wraparrayitemsarrayindexesanyfactoryfunction-wraparrayitemsarray"></a>
#### wrapArray(items:array)
should augment the array with all methods.

```js
var arr = [1, 2, 3];
wrapArray(arr);
expect(arr).to.have.property('indexes');
```

<a name="methods-that-return-a-new-indexed-object"></a>
# Methods that return a new indexed object
<a name="methods-that-return-a-new-indexed-object-returns-a-subset-of-items"></a>
## Returns a subset of items
<a name="methods-that-return-a-new-indexed-object-returns-a-subset-of-items-findmanypredicatefunctionarraystringstringarraystringregexparraystringfunction"></a>
### findMany(predicate:function|array[string,string]|array[string,RegExp]|array[string,function])
<a name="methods-that-return-a-new-indexed-object-returns-a-subset-of-items-findmanypredicatefunctionarraystringstringarraystringregexparraystringfunction-findmanyfn"></a>
#### findMany(fn)
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

<a name="methods-that-return-a-new-indexed-object-returns-a-subset-of-items-findmanypredicatefunctionarraystringstringarraystringregexparraystringfunction-findmanypropnameprop"></a>
#### findMany([propName,prop])
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

<a name="methods-that-return-a-new-indexed-object-returns-a-subset-of-items-findmanypredicatefunctionarraystringstringarraystringregexparraystringfunction-findmanypropnamefn"></a>
#### findMany([propName,fn])
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

<a name="methods-that-return-a-new-indexed-object-returns-a-subset-of-items-transformfunctionthisarg"></a>
### transform(function[,thisArg])
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

should stop when BREAK signal is returned.

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

should skip when SKIP signal is returned.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
function map(_ref4, i) {
	var name = _ref4.name;
	return i % 2 ? { name: name + 'a', i: i } : SKIP;
}
var resultWrapped = wrapped.transform(map);
expect(resultWrapped.length).to.equal(2);
expect(resultWrapped.indexes('name').get('ba')).to.be.undefined;
expect(resultWrapped.indexes('name').get('da')).to.equal(0);
```

should filter falsy values.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
function map(_ref5, i) {
	var name = _ref5.name;
	return i % 2 ? { name: name + 'a', i: i } : false;
}
var resultWrapped = wrapped.transform(map);
var resultClosed = closed.transform(map);
verify(resultWrapped, resultClosed, 2);
expect(resultWrapped.indexes('name').get('da')).to.equal(0);
expect(resultClosed.indexes('name').get('da')).to.equal(0);
```

<a name="methods-that-return-an-iterator"></a>
# Methods that return an iterator
<a name="methods-that-return-an-iterator-getiteratorkeystring"></a>
## getIterator(key:string)
should return an iterator for the provided index name.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;
try {
	for (var _iterator = wrapped.getIterator('name')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _step$value = _slicedToArray(_step.value, 2);
		var index = _step$value[0];
		var value = _step$value[1];
		expect(wrapped[index]).to.eql(value);
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
```

should return an iterator that provides (index:object index,value:object).

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var i = 0;
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;
try {
	for (var _iterator2 = wrapped.getIterator('name')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _step2$value = _slicedToArray(_step2.value, 2);
		var index = _step2$value[0];
		var value = _step2$value[1];
		var obj = wrapped[i];
		expect(index).to.equal(i++);
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

<a name="methods-that-return-an-iterator-getiteratorkeystring-getiteratorkeystringforeach"></a>
### getIterator(key:string).forEach()
should call a function with arguments (index,value).

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
wrapped.getIterator('name').forEach(function (el, i) {
	expect(wrapped[i]).to.equal(el);
});
```

should stop iterations if BREAK is returned.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var n = 0;
wrapped.getIterator('name').forEach(function (el, i) {
	if (i >= 2) {
		return BREAK;
	}
	n++;
});
expect(n).to.equal(2);
```

<a name="methods-that-return-an-iterator-getiteratorkeystring-getiteratorkeystringmap"></a>
### getIterator(key:string).map()
should call a function with arguments (index,value).

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
wrapped.getIterator('name').map(function (el, i) {
	expect(wrapped[i]).to.equal(el);
});
```

should stop iterations if BREAK is returned.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var n = 0;
wrapped.getIterator('name').map(function (el, i) {
	if (i >= 2) {
		return BREAK;
	}
	n++;
});
expect(n).to.equal(2);
```

should skip an iteration if SKIP is returned.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }, { name: 'e' }], 'name');
var n = 0;
var result = wrapped.getIterator('name').map(function (el, i) {
	if (i % 2) {
		return SKIP;
	}
	n++;
	return el.name;
});
expect(n).to.equal(3);
expect(result[result.length - 1]).to.equal('e');
```

should return an array.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }, { name: 'e' }], 'name');
var result = wrapped.getIterator('name').map(function (el, i) {});
expect(result).to.be.an('array');
```

<a name="setupdateremove"></a>
# Set/Update/Remove
<a name="setupdateremove-set-update-or-remove-a-single-item"></a>
## Set, update, or remove a single item
<a name="setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany"></a>
### set(predicate:integer|function|array[string,string]|array[string,regexp]|array[string,function],value:any)
should update the last indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.set(1, { name: 'f' });
expect(resultWrapped.lastIndexes()).to.eql([1]);
```

<a name="setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setindexintegervalueany"></a>
#### set(index:integer,value:any)
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

<a name="setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpredicatefunctionvalue"></a>
#### set(predicate:function,value)
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

should not set the element where provided predicate is false.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(function (el) {
	return el.name == 'z';
}, obj);
expect(result.length).to.equal(4);
expect(result.find(function (el) {
	return el.newProp;
})).to.be.undefined;
```

<a name="setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpropnamepredicatevalueany"></a>
#### set([propName,predicate],value:any)
<a name="setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpropnamepredicatevalueany-setpropnamestringnumber"></a>
##### set([propName,string|number])
should set the element where provided predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(['name', 'a'], obj);
expect(result.length).to.equal(4);
expect(result.get('name')('a')).to.eql({ name: 'a', newProp: 2 });
```

should not set the element where provided predicate is false.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(['name', 'z'], obj);
expect(result.length).to.equal(4);
expect(result.find(function (el) {
	return el.newProp;
})).to.be.undefined;
```

<a name="setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpropnamepredicatevalueany-setpropnameregexpvalueany"></a>
##### set([propName,regExp],value:any)
should set the element where provided predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(['name', /a|b/], obj);
expect(result.length).to.equal(4);
expect(result.get('name')('b')).to.eql({ name: 'b', newProp: 2 });
```

should not set the element where provided predicate is false.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(['name', /z/], obj);
expect(result.length).to.equal(4);
expect(result.find(function (el) {
	return el.newProp;
})).to.be.undefined;
```

<a name="setupdateremove-set-update-or-remove-a-single-item-setpredicateintegerfunctionarraystringstringarraystringregexparraystringfunctionvalueany-setpropnamepredicatevalueany-setpropnamefnvalueany"></a>
##### set([propName,fn],value:any)
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

should not set the element where provided predicate is false.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.length).to.equal(4);
var obj = { newProp: 2 };
var result = wrapped.set(['name', function (key) {
	return key == 'z';
}], obj);
expect(result.length).to.equal(4);
expect(result.find(function (el) {
	return el.newProp;
})).to.be.undefined;
```

<a name="setupdateremove-set-update-or-remove-a-single-item-replacepredicatevalue"></a>
### replace(predicate,value)
should update the last indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.replace(['name', 'd'], { name: 'f' });
expect(resultWrapped.lastIndexes()).to.eql([1]);
```

<a name="setupdateremove-set-update-or-remove-a-single-item-replacepredicatevalue-replaceindexintegervalue"></a>
#### replace(index:integer,value)
should replace the specified objects and indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.replace(1, { 'path': 5 });
expect(result.length).to.equal(4);
expect(result.indexes('name').size).to.equal(3);
expect(result.indexes('name').get('d')).to.be.undefined;;
```

<a name="setupdateremove-set-update-or-remove-a-single-item-replacepredicatevalue-replacepredicatevalue"></a>
#### replace(predicate,value)
should replace the object where predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.replace(['name', /d/], { 'path': 5 });
expect(result.length).to.equal(4);
expect(result.indexes('name').size).to.equal(3);
expect(result.indexes('name').get('d')).to.be.undefined;;
```

<a name="setupdateremove-set-update-or-remove-a-single-item-removepredicate"></a>
### remove(predicate)
<a name="setupdateremove-set-update-or-remove-a-single-item-removepredicate-removeindexinteger"></a>
#### remove(index:integer)
should remove the specified objects and indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.indexes('name').get('a')).to.equal(2);
var result = wrapped.remove(1);
expect(result.length).to.equal(3);
expect(result.indexes('name').size).to.equal(3);
expect(result.indexes('name').get('a')).to.equal(1);
```

<a name="setupdateremove-set-update-or-remove-a-single-item-removepredicate-removepredicate"></a>
#### remove(predicate)
should remove the object where predicate is true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.indexes('name').get('a')).to.equal(2);
var result = wrapped.remove(['name', 'd']);
expect(result.length).to.equal(3);
expect(result.indexes('name').size).to.equal(3);
expect(result.indexes('name').get('a')).to.equal(1);
```

<a name="setupdateremove-set-or-remove-multiple-items"></a>
## set or remove multiple items
<a name="setupdateremove-set-or-remove-multiple-items-setmanypredicatesfunctionarraystringpredicatearraystringfunctionvalue"></a>
### setMany(predicates:function|array[string,...predicate]|array[string|function],value)
should update the last indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.setMany(['name', 'b', 'c'], { name: 'f' });
expect(resultWrapped.lastIndexes()).to.eql([3]);
```

<a name="setupdateremove-set-or-remove-multiple-items-setmanypredicatesfunctionarraystringpredicatearraystringfunctionvalue-setmanyfnvalue"></a>
#### setMany(fn,value)
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

<a name="setupdateremove-set-or-remove-multiple-items-setmanypredicatesfunctionarraystringpredicatearraystringfunctionvalue-setmanypropnamepropproppropvalue"></a>
#### setMany([propName,prop,prop,prop],value)
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

<a name="setupdateremove-set-or-remove-multiple-items-setmanypredicatesfunctionarraystringpredicatearraystringfunctionvalue-setmanypropnamefnvalue"></a>
#### setMany([propName,fn],value)
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

<a name="setupdateremove-set-or-remove-multiple-items-removemanypredicates"></a>
### removeMany(predicates)
<a name="setupdateremove-set-or-remove-multiple-items-removemanypredicates-removemanyfnvalue"></a>
#### removeMany(fn,value)
should remove the objects where the provided function returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var result = wrapped.removeMany(function (el, i) {
	return i < 2;
});
expect(result[0]).to.eql({ name: 'a' });
```

<a name="setupdateremove-set-or-remove-multiple-items-removemanypredicates-removemanypropnamepropproppropvalue"></a>
#### removeMany([propName,prop,prop,prop],value)
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

<a name="setupdateremove-set-or-remove-multiple-items-removemanypredicates-removemanypropnamefnvalue"></a>
#### removeMany([propName,fn],value)
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

<a name="setupdateremove-transform-items-being-added"></a>
## transform items being added
<a name="setupdateremove-transform-items-being-added-initializerfunction"></a>
### initializer(function)
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

should operate on set if replace is set.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name', function (el) {
	var obj = Object.assign(el, { itWorks: true });
	return obj;
});
var results = wrapped.set(2, { name: 'aa' }, true).replace(0, { name: 'bb' });
var get = results.get('name');
expect(get('a')).to.be.undefined;
expect(get('b')).to.be.undefined;
expect(get('aa')).to.eql({ name: 'aa', itWorks: true });
expect(get('bb')).to.eql({ name: 'bb', itWorks: true });
```

could be used to enforce a same-type array by throwing an error on invalid values.

```js
var wrapped = wrap([1, 2, 3], null, function (el) {
	if (!(typeof el == 'number')) {
		throw new Error('Non-numbers are not allowed');
	}
	return el;
});
var results = wrapped.push(5);
expect(results.length).to.equal(4);
expect(function () {
	wrapped.push('a');
}).to.throw();
```

should be a no-op if BREAK is returned from the function.

```js
var wrapped = wrap([1, 2, 3], null, function (el) {
	return !(typeof el == 'number') ? BREAK : el;
});
var results = wrapped.concat([5, 8, 'a', 4]);
expect(results.length).to.equal(3);
```

invalid values are skipped if SKIP is returned from the function.

```js
var wrapped = wrap([1, 2, 3], null, function (el) {
	return !(typeof el == 'number') ? SKIP : el;
});
var results = wrapped.push(5, 8, 'a', 4);
expect(results).to.eql([1, 2, 3, 5, 8, 4]);
expect(results.length).to.equal(6);
```

should not operate on set if replace is not set.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name', function (el) {
	var obj = Object.assign(el, { itWorks: true });
	return obj;
});
var results = wrapped.set(2, { name: 'aa' });
var get = results.get('name');
expect(get('a')).to.be.undefined;
expect(get('aa')).to.not.have.property('itWorks');
```

<a name="setupdateremove-clear"></a>
## clear()
should empty the array.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name', function (el) {
	var obj = Object.assign(el, { itWorks: true });
	return obj;
});
var results = wrapped.clear();
expect(results.length).to.equal(0);
```

<a name="static-methods-and-helpers"></a>
# Static methods and helpers
<a name="static-methods-and-helpers-isarraylikeobj"></a>
## isArrayLike(obj)
should return true if `obj` has a length property and if integer indexes are contiguous.

```js
var obj = { 0: 'a', 1: 'b', length: 2 };
expect(isArrayLike(obj)).to.be.true;
expect((function () {
	return isArrayLike(_arguments);
})()).to.be.true;
```

<a name="unmodified-array-methods"></a>
# Unmodified array methods
<a name="unmodified-array-methods-lookup-methods"></a>
## lookup methods
<a name="unmodified-array-methods-lookup-methods-indexofelement"></a>
### indexOf(element)
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

<a name="unmodified-array-methods-lookup-methods-lastindexofelement"></a>
### lastIndexOf(element)
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

<a name="unmodified-array-methods-verification-methods"></a>
## Verification methods
<a name="unmodified-array-methods-verification-methods-everyfunction"></a>
### every(function)
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

<a name="unmodified-array-methods-verification-methods-includesfunction"></a>
### includes(function)
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

<a name="unmodified-array-methods-verification-methods-somefunction"></a>
### some(function)
should return true if any of the object fullfills the predicate.

```js
var arr = [12, 5, 8, 1, 4];
var wrapped = wrapArray(arr);
expect(arr.some(isBiggerThan10)).to.be.true;
expect(wrapped.some(isBiggerThan10)).to.be.true;
```

should return false if none of the objects fullfills the predicate.

```js
var arr = [2, 5, 8, 1, 4];
var wrapped = wrapArray(arr);
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
var wrapped = wrapArray(arr);
expect(wrapped.some(isBiggerThan10BREAK)).to.be.false;
expect(i).to.equal(1);
```

should skip the value if SKIP is returned.

```js
var i = 0;
function isBiggerThan10SKIP(element, index) {
	return element > 10 ? SKIP : false;
}
var arr = [2, 5, 18, 11, 14];
var wrapped = wrapArray(arr);
expect(wrapped.some(isBiggerThan10SKIP)).to.be.false;
```

<a name="unmodified-array-methods-methods-returning-an-array"></a>
## Methods returning an array
<a name="unmodified-array-methods-methods-returning-an-array-mapfunctionthisarg"></a>
### map(function[,thisArg])
should work just like a regular array.

```js
var test = wrapArray([2, 5, 9]).map(function (n) {
					return n + 1;
				});
				expect(test).to.eql([3, 6, 10]);
```

should break early if BREAK is returned.

```js
var v = 0;
var test = wrapArray([2, 5, 9]).map(function (n, i) {
	if (i > 1) {
		return BREAK;
	}
	v = i;
	return n + 1;
});
expect(test).to.eql([3, 6]);
expect(v).to.equal(1);
```

should skip the value if SKIP is returned.

```js
var test = wrapArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map(function (n) {
	return n % 2 ? n : SKIP;
});
expect(test).to.eql([1, 3, 5, 7, 9]);
```

<a name="unmodified-array-methods-methods-returning-an-array-keys"></a>
### keys()
should work just like a regular array.

```js
var test1 = makeComparisons(['a', 'b', 'c']);
test1.forEach(function (el) {
	expect([].concat(_toConsumableArray(el.keys()))).to.eql([0, 1, 2]);
});
```

<a name="unmodified-array-methods-methods-returning-an-array-values"></a>
### values()
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

<a name="unmodified-array-methods-methods-returning-a-single-value"></a>
## Methods returning a single value
<a name="unmodified-array-methods-methods-returning-a-single-value-joinstring"></a>
### join(string)
should work just like a regular array.

```js
var test1 = makeComparisons(['Wind', 'Rain', 'Fire']);
test1.forEach(function (el, i) {
	expect(el.join()).to.equal('Wind,Rain,Fire');
	expect(el.join(', ')).to.equal('Wind, Rain, Fire');
});
```

<a name="unmodified-array-methods-methods-returning-a-single-value-joinstring-reducefunctionthisarg"></a>
#### reduce(function[,thisArg])
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

<a name="unmodified-array-methods-methods-returning-a-single-value-joinstring-reducerightfunctionthisarg"></a>
#### reduceRight(function[,thisArg])
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

<a name="unmodified-array-methods-methods-returning-a-single-value-joinstring-tostring"></a>
#### toString()
should work just like a regular array.

```js
var arr = [0, 1, 2, 3];
var str = arr + '';
var test1 = makeComparisons(arr);
test1.forEach(function (el) {
	expect(el + '').to.equal(str);
});
```

<a name="unmodified-array-methods-methods-that-i-do-not-know-how-to-implement-yet"></a>
## Methods that I do not know how to implement yet
<a name="unmodified-array-methods-methods-that-i-do-not-know-how-to-implement-yet-fillelements"></a>
### fill(...elements)
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

<a name="utils--convenience-methods"></a>
# Utils & Convenience Methods
<a name="utils--convenience-methods-size"></a>
## size()
should provide the size of the array.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.size()).to.equal(wrapped.length);
```

<a name="utils--convenience-methods-tojson"></a>
## toJson
should output a serializable object.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
expect(wrapped.toJson()).to.eql({
	indexes: { name: { 'b': 0, 'd': 1, 'a': 2, 'c': 3 } },
	items: [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }]
});
```

<a name="utils--convenience-methods-fromjsonindexesnameitems"></a>
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

<a name="utils--convenience-methods-mutate"></a>
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

<a name="utils--convenience-methods-chain"></a>
## chain()
should make all methods mutative until value() is called.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name').chain().push('n').push(4).unshift('z');
expect(wrapped.length).to.equal(7);
wrapped.value();
wrapped.push('r');
expect(wrapped.length).to.equal(7);
```

<a name="utils--convenience-methods-value"></a>
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

<a name="modified-array-methods"></a>
# Modified Array Methods
<a name="modified-array-methods-lookup-methods"></a>
## Lookup Methods
<a name="modified-array-methods-lookup-methods-return-indexes"></a>
### Return Indexes
<a name="modified-array-methods-lookup-methods-return-indexes-findindexpredicatefunctionarraystringstringarraystringfunctionarraystringregexp"></a>
#### findIndex(predicate:function|array[string,string]|array[string,function]|array[string,RegExp])
<a name="modified-array-methods-lookup-methods-return-indexes-findindexpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexfunction"></a>
##### findIndex(function)
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

<a name="modified-array-methods-lookup-methods-return-indexes-findindexpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexpropnameprop"></a>
##### findIndex([propName,prop])
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

<a name="modified-array-methods-lookup-methods-return-indexes-findindexpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexpropnamefunction"></a>
##### findIndex([propName,function])
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

<a name="modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp"></a>
#### findIndexes(predicate:function|array[string,...string]|array[string,function]|array[string,RegExp])
<a name="modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexesfunction"></a>
##### findIndexes(function)
should return an array of indexes when the provided function returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var indexes = wrapped.findIndexes(function (el) {
	return el.name !== 'z';
});
expect(indexes).to.eql([0, 1, 2, 3]);
```

<a name="modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexespropnamepropproppropinclude"></a>
##### findIndexes([propName,prop,prop,prop],[include])
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

<a name="modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexespropnameregex"></a>
##### findIndexes([propName,regex])
should return the indexes for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndexes(['name', /c|a/]);
expect(index).to.be.eql([2, 3]);
```

<a name="modified-array-methods-lookup-methods-return-indexes-findindexespredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findindexespropnamefunction"></a>
##### findIndexes([propName,function])
should return the indexes for which fn returns true.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var index = wrapped.findIndexes(['name', function (key) {
	return (/a|c/.test(key)
	);
}]);
expect(index).to.be.eql([2, 3]);
```

<a name="modified-array-methods-lookup-methods-returns-items"></a>
### Returns items
<a name="modified-array-methods-lookup-methods-returns-items-findpredicatefunctionarraystringstringarraystringfunctionarraystringregexp"></a>
#### find(predicate:function|array[string,string]|array[string,function]|array[string,RegExp])
<a name="modified-array-methods-lookup-methods-returns-items-findpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findfunction"></a>
##### find(function)
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

<a name="modified-array-methods-lookup-methods-returns-items-findpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findpropnameprop"></a>
##### find([propName,prop])
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

<a name="modified-array-methods-lookup-methods-returns-items-findpredicatefunctionarraystringstringarraystringfunctionarraystringregexp-findpropnamefunction"></a>
##### find([propName,function])
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

<a name="modified-array-methods-mutative-methods"></a>
## Mutative Methods
<a name="modified-array-methods-mutative-methods-filterfunction"></a>
### filter(function)
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

<a name="modified-array-methods-mutative-methods-concatitemsany"></a>
### concat(...items:any)
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

should update the last indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.concat({ name: 'f' }, { name: 'z' });
expect(resultWrapped.lastIndexes()).to.eql([4, 5]);
```

<a name="modified-array-methods-mutative-methods-popreceiverarray"></a>
### pop([receiver:array])
<a name="modified-array-methods-mutative-methods-popreceiverarray-pop"></a>
#### pop()
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

<a name="modified-array-methods-mutative-methods-popreceiverarray-popreceiverarray"></a>
#### pop(receiver:array)
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

<a name="modified-array-methods-mutative-methods-shiftreceiverarray"></a>
### shift([receiver:array])
<a name="modified-array-methods-mutative-methods-shiftreceiverarray-shift"></a>
#### shift()
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

<a name="modified-array-methods-mutative-methods-shiftreceiverarray-shiftreceiverarray"></a>
#### shift(receiver:array)
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

<a name="modified-array-methods-mutative-methods-pushitemany"></a>
### push(item:any)
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

should update the last indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.push({ name: 'f' }, { name: 'z' });
expect(resultWrapped.lastIndexes()).to.eql([4, 5]);
```

<a name="modified-array-methods-mutative-methods-unshift"></a>
### unshift()
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

should update the last indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.unshift({ name: 'f' }, { name: 'z' });
expect(resultWrapped.lastIndexes()).to.eql([0, 1]);
```

<a name="modified-array-methods-mutative-methods-reverse"></a>
### reverse()
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

<a name="modified-array-methods-mutative-methods-slicebeginintendint"></a>
### slice([begin:int[,end:int]])
should reindex.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.slice(2, 4);
expect(resultWrapped.indexes('name').get('a')).to.equal(0);
```

<a name="modified-array-methods-mutative-methods-slicebeginintendint-slice"></a>
#### slice()
should return a copy of the array.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var closed = asClosure([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.slice();
var resultClosed = closed.slice();
expect(resultWrapped).to.eql(wrapped);
expect(resultClosed.value()).to.eql(closed.value());
```

<a name="modified-array-methods-mutative-methods-slicebeginintendint-slicebegin"></a>
#### slice(begin)
should return a sliced copy of the array with arguments.

```js
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var a1 = arr.slice(2);
var w1 = wrapped.slice(2);
var a2 = arr.slice(1);
var w2 = wrapped.slice(1);
expect(w1).to.eql(a1);
expect(w2).to.eql(a2);
```

<a name="modified-array-methods-mutative-methods-slicebeginintendint-slicebeginend"></a>
#### slice(begin,end)
should return a sliced copy of the array with arguments.

```js
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var a = arr.slice(1, 5);
var w = wrapped.slice(1, 5);
var a2 = wrapped.slice(1, 2);
var w2 = wrapped.slice(1, 2);
expect(w).to.eql(a);
expect(w2).to.eql(a2);
```

<a name="modified-array-methods-mutative-methods-sort"></a>
### sort
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

<a name="modified-array-methods-mutative-methods-splicestartintdeleteintitemsany"></a>
### splice(start:int,delete:int[,...items:any])
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

should update the last indexes.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var resultWrapped = wrapped.splice(2, 3, { name: 'f' }, { name: 'z' });
expect(resultWrapped.lastIndexes()).to.eql([2, 3]);
```

<a name="modified-array-methods-mutative-methods-splicestartintdeleteintitemsany-splicestartnumber"></a>
#### splice,(start,number)
should delete the specified elements.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
arr.splice(2, 1);
var results = wrapped.splice(2, 1);
expect(results).to.eql(arr);
```

<a name="modified-array-methods-mutative-methods-splicestartintdeleteintitemsany-splicestartnumberitems"></a>
#### splice(start,number,...items)
should insert elements if specified.

```js
var wrapped = wrap([{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }], 'name');
var arr = [{ name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' }];
arr.splice(2, 0, { name: 'f' });
expect(wrapped.splice(2, 0, { name: 'f' })).to.eql(arr);
```

