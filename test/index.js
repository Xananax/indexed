import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,isArrayLike} = Indexed;
var expect = chai.expect;

function verify(wrapped,closed,n){
	expect(closed.indexes('name').size).to.equal(n)
	expect(closed.value().length).to.equal(n)
	expect(wrapped.indexes('name').size).to.equal(n)
	expect(wrapped.length).to.equal(n)
}

describe('modified array methods',()=>{
	describe('isArrayLike',()=>{
		it('should return true if an element has a length property and if integer indexes are contiguous',()=>{
			var obj = {0:'a',1:'b',length:2}
			expect(isArrayLike(obj)).to.be.true;
			expect((()=>isArrayLike(arguments))()).to.be.true;
		})
	})
	describe('concat',()=>{
		it('should work like default for simple arrays',()=>{
			var arr = ['a', 'b', 'c'];
			var numeric = [1, 2, 3];
			var someValue = 'N';
			var concatenated = arr.concat(numeric,someValue);
			var wrapped = wrap(arr.slice())
			var closed = asClosure(arr.slice());
			expect(arr.concat(numeric,someValue)).to.eql(concatenated)
			expect(closed.concat(numeric,someValue).value()).to.eql(concatenated);
			expect(wrapped.concat(numeric,someValue)).to.eql(concatenated);
		})
		it('should update the indexes for objects arrays',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var additional1 = {name:'e'}
			var additional2 = [{name:'f'},{name:'g'}];
			var resultWrapped = wrapped.concat(additional1,additional2);
			var resultClosed = closed.concat(additional1,additional2);
			verify(resultWrapped,resultClosed,7)
		})
	})
	describe('filter',()=>{
		it('should reindex',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			function filter(el){
				return /a|e|d/.test(el.name);
			}
			var resultWrapped = wrapped.filter(filter);
			var resultClosed = closed.filter(filter);
			verify(resultWrapped,resultClosed,2)
		})
	})
	describe('size()',()=>{
		it('should provide the size of the array',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			expect(wrapped.size()).to.equal(wrapped.length)
		})
	})
	describe('transform',()=>{
		it('should be an equivalent to map(), with a contract that returned objects are indexable',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			function map({name},i){return {name:name+'a',i};}
			var resultTransformed = wrapped.transform(map);
			var resultMapped = wrapped.map(map);
			expect(resultTransformed).to.eql(resultMapped);
			expect(resultTransformed).to.have.property('indexes')
			expect(resultMapped).to.not.have.property('indexes')
		})
		it('should reindex',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			function map({name},i){return {name:name+'a',i};}
			var resultWrapped = wrapped.transform(map);
			var resultClosed = closed.transform(map);
			verify(resultWrapped,resultClosed,4);
			expect(resultWrapped.indexes('name').get('ba')).to.equal(0)
			expect(resultClosed.indexes('name').get('ba')).to.equal(0)
		})
		it('should stop when break signal is returned',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			function map({name},i){return i>=2?BREAK:{name:name+'a',i};}
			var resultWrapped = wrapped.transform(map);
			var resultClosed = closed.transform(map);
			verify(resultWrapped,resultClosed,2);
			expect(resultWrapped.indexes('name').get('ba')).to.equal(0)
			expect(resultClosed.indexes('name').get('ba')).to.equal(0)
		})
		it('should filter falsy values',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			function map({name},i){return i%2?{name:name+'a',i}:false;}
			var resultWrapped = wrapped.transform(map);
			var resultClosed = closed.transform(map);
			verify(resultWrapped,resultClosed,2);
			expect(resultWrapped.indexes('name').get('da')).to.equal(0)
			expect(resultClosed.indexes('name').get('da')).to.equal(0)
		})
	})
	describe('pop',()=>{
		it('should return the array',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.pop();
			var resultClosed = closed.pop();
			verify(resultWrapped,resultClosed,3);
		})
		it('should reindex',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.pop();
			var resultClosed = closed.pop();
			expect(resultWrapped.indexes('name').get('c')).to.be.undefined;;
			expect(resultClosed.indexes('name').get('c')).to.be.undefined;;
		})
		it('should assign the popped value to the receiver array if provided',()=>{
			var receiver1 = []
			var receiver2 = []
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.pop(receiver1);
			var resultClosed = closed.pop(receiver2);
			expect(receiver1[0]).to.eql(receiver2[0]);
			expect(receiver1[0]).to.eql({name:'c'})
		})
	})
	describe('shift',()=>{
		it('should return the array',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.shift();
			var resultClosed = closed.shift();
			verify(resultWrapped,resultClosed,3);
		})
		it('should reindex',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.shift();
			var resultClosed = closed.shift();
			expect(resultWrapped.indexes('name').get('b')).to.be.undefined;;
			expect(resultClosed.indexes('name').get('b')).to.be.undefined;;
			expect(resultWrapped.indexes('name').get('a')).to.equal(1)
			expect(resultClosed.indexes('name').get('a')).to.equal(1)
		})
		it('should assign the popped value to the receiver array if provided',()=>{
			var receiver1 = []
			var receiver2 = []
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.shift(receiver1);
			var resultClosed = closed.shift(receiver2);
			expect(receiver1[0]).to.eql(receiver2[0]);
			expect(receiver1[0]).to.eql({name:'b'})
		})
	})
	describe('push',()=>{
		it('should add an item at the end of the array',()=>{
			var arr = [
	{name:'b'}
,	{name:'d'}
,	{name:'a'}
,	{name:'c'}
];
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var pushed = {name:'f'};
			arr.push(pushed);
			var resultWrapped = wrapped.push(pushed)
			var resultClosed = closed.push(pushed)
			expect(resultWrapped.length).to.equal(arr.length)
			expect(resultClosed.value().length).to.equal(arr.length)
		})
		it('should reindex',()=>{
			var arr = [
	{name:'b'}
,	{name:'d'}
,	{name:'a'}
,	{name:'c'}
];
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var pushed = {name:'f'};
			arr.push(pushed);
			var resultWrapped = wrapped.push(pushed)
			var resultClosed = closed.push(pushed)
			expect(resultWrapped.indexes('name').size).to.equal(arr.length)
			expect(resultClosed.indexes('name').size).to.equal(arr.length)
			expect(resultClosed.indexes('name').get('f')).to.equal(4)
		})
	})
	describe('unshift',()=>{
		it('should prepend an item to the array',()=>{
			var arr = [
	{name:'b'}
,	{name:'d'}
,	{name:'a'}
,	{name:'c'}
];
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var unshifted = {name:'f'};
			arr.unshift(unshifted);
			var resultWrapped = wrapped.unshift(unshifted)
			var resultClosed = closed.unshift(unshifted)
			expect(resultWrapped.length).to.equal(arr.length)
			expect(resultClosed.value().length).to.equal(arr.length)
		})
		it('should reindex',()=>{
			var arr = [
	{name:'b'}
,	{name:'d'}
,	{name:'a'}
,	{name:'c'}
];
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var unshifted = {name:'f'};
			arr.unshift(unshifted);
			var resultWrapped = wrapped.unshift(unshifted)
			var resultClosed = closed.unshift(unshifted)
			expect(resultWrapped.indexes('name').size).to.equal(arr.length)
			expect(resultClosed.indexes('name').size).to.equal(arr.length)
			expect(resultClosed.indexes('name').get('f')).to.equal(0)
			expect(resultClosed.indexes('name').get('b')).to.equal(1)
		})
	})
	describe('reverse',()=>{
		it('should reverse the array',()=>{
			var arr = [
	{name:'b'}
,	{name:'d'}
,	{name:'a'}
,	{name:'c'}
];
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			arr.reverse();
			var resultWrapped = wrapped.reverse();
			var resultClosed = closed.reverse();
			expect(resultWrapped).to.eql(arr);
			expect(resultClosed.value()).to.eql(arr);
		})
		it('should reindex',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.reverse();
			var resultClosed = closed.reverse();
			expect(resultWrapped.indexes('name').get('b')).to.equal(3)
			expect(resultWrapped.indexes('name').get('c')).to.equal(0)
		})
	})
	describe('slice',()=>{
		it('should return a copy of the array with no arguments',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.slice();
			var resultClosed = closed.slice();
			expect(resultWrapped).to.eql(wrapped);
			expect(resultClosed.value()).to.eql(closed.value())
		})
		it('should return a sliced copy of the array with arguments',()=>{
			var arr = [
				{name:'b'}
			,	{name:'d'}
			,	{name:'a'}
			,	{name:'c'}
			];
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var a1 = arr.slice(2);
			var w1 = wrapped.slice(2);
			var a2 = arr.slice(1,5);
			var w2 = wrapped.slice(1,5);
			var a3 = wrapped.slice(1,2);
			var w3 = wrapped.slice(1,2);
			expect(w1).to.eql(a1)
			expect(w2).to.eql(a2)
			expect(w3).to.eql(a3)
		})
		it('should reindex',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.slice(2,4);
			expect(resultWrapped.indexes('name').get('a')).to.equal(0);
		})
	})
	describe('sort',()=>{
		function sort(a,b){
			return a.name>b.name;
		}
		it('sort the array if given a function',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var arr = [
				{name:'b'}
			,	{name:'d'}
			,	{name:'a'}
			,	{name:'c'}
			].sort(sort);
			var resultWrapped = wrapped.sort(sort);
			expect(resultWrapped).to.eql(arr);
		})
		it('sort the array if given a property name',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var arr = [
				{name:'b'}
			,	{name:'d'}
			,	{name:'a'}
			,	{name:'c'}
			].sort(sort);
			var resultWrapped = wrapped.sort('name');
			expect(resultWrapped).to.eql(arr);
		})
		it('should reindex',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var resultWrapped = wrapped.sort('name');
			var keys = resultWrapped.indexes('name').keys()
			var order = []
			var model = ['a','b','c','d']
			for(let key of keys){order.push(key)}
			expect(order).to.eql(model);
		})
	})
	describe('splice',()=>{
		it('should delete the specified elements',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var arr = [
				{name:'b'}
			,	{name:'d'}
			,	{name:'a'}
			,	{name:'c'}
			];
			arr.splice(2,1);
			var results = wrapped.splice(2,1);
			expect(results).to.eql(arr);
		})
		it('should insert elements if specified',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var arr = [
				{name:'b'}
			,	{name:'d'}
			,	{name:'a'}
			,	{name:'c'}
			];
			arr.splice(2,0,{name:'f'});
			expect(wrapped.splice(2,0,{name:'f'})).to.eql(arr);
		})
		it('should reindex',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var arr = [
				{name:'b'}
			,	{name:'d'}
			,	{name:'a'}
			,	{name:'c'}
			];
			var keys = [];
			var result = wrapped.splice(2,3,{name:'f'}).indexes('name');
			result.forEach((v,k)=>{keys.push(k)});
			expect(keys).to.eql(['b','d','f']);
		})
	})
	describe('findIndex',()=>{
		describe('findIndex(fn)',()=>{
			it('should return the object index when the provided function returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndex((el)=>{
					return el.name=='d';
				});
				expect(index).to.equal(wrapped.indexes('name').get('d'))
			})
			it('should return -1 if no object matches the function',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndex((el)=>{
					return el.name=='e';
				});
				expect(index).to.equal(-1)
			})
		})
		describe('findIndex([propName,prop])',()=>{
			it('should return the object index who\'s property `propName` is equal to the provided `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndex(['name','d']);
				expect(index).to.equal(wrapped.indexes('name').get('d'))
			})
			it('should return the object index who\'s property `propName` matches the provided RegExp `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndex(['name',/a|c/]);
				var indexes = wrapped.indexes('name');
				expect(index).to.equal(indexes.get('a'))
			})
		})
		describe('findIndex([propName,fn])',()=>{
			it('should give to the function the arguments: key, object, keys, array,keyNumber',(done)=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndex(['name',(key,obj,map,arr,n)=>{
					expect(key).to.be.a('string');
					expect(key).to.equal(wrapped[0].name)

					expect(obj).to.be.an('object')
					expect(obj).to.equal(wrapped[0])

					expect(map).to.be.instanceOf(Map)

					expect(arr).to.be.an('array')
					expect(arr).to.eql(wrapped)

					expect(n).to.be.a('number')
					expect(n).to.equal(0)

					done();
					return BREAK;
				}]);
			})
			it('should return the object index for which fn returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndex(['name',(key)=>/b/.test(key)])
				expect(index).to.be.equal(wrapped.indexes('name').get('b'));
			})
			it('should return -1 if no object returned true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndex(['name',(key)=>/n/.test(key)])
				expect(index).to.be.equal(-1);
			})
		})
	})
	describe('findIndexes',()=>{
		describe('findIndexes(fn)',()=>{
			it('should return an array of indexes when the provided function returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var indexes = wrapped.findIndexes(el=>el.name!=='z');
				expect(indexes).to.eql([0,1,2,3])
			})
		})
		describe('findIndexes([propName,prop,prop,prop],[include])',()=>{
			it('should return the indexes for object where `propName` is equal to any of the provided `props`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var indexes = wrapped.findIndexes(['name','a','n','b','c','z']);
				expect(indexes).to.eql([2,0,3])
			})
			it('should include falsy indexes if include is true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var indexes = wrapped.findIndexes(['name','a','n','b','c','z'],true);
				expect(indexes).to.eql([2,-1,0,3,-1])
			})
		})
		describe('findIndexes([propName,regex])',()=>{
			it('should return the indexes for which fn returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndexes(['name',/c|a/])
				expect(index).to.be.eql([2,3]);
			})
		})
		describe('findIndexes([propName,fn])',()=>{
			it('should return the indexes for which fn returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var index = wrapped.findIndexes(['name',(key)=>/a|c/.test(key)])
				expect(index).to.be.eql([2,3]);
			})
		})
	})
	describe('find',()=>{
		describe('find(fn)',()=>{
			it('should return the object when the provided function returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var obj = wrapped.find((el)=>{
					return el.name=='d';
				});
				expect(obj).to.eql(wrapped[wrapped.indexes('name').get('d')])
			})
			it('should return undefined if no object matches the function',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var obj = wrapped.find((el)=>{
					return el.name=='e';
				});
				expect(obj).to.be.undefined;
			})
		})
		describe('find([propName,prop])',()=>{
			it('should return the object index who\'s property `propName` is equal to the provided `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var obj = wrapped.find(['name','d']);
				expect(obj).to.equal(wrapped[wrapped.indexes('name').get('d')])
			})
			it('should return the object index who\'s property `propName` matches the provided RegExp `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var obj = wrapped.find(['name',/a|c/]);
				expect(obj).to.equal(wrapped[wrapped.indexes('name').get('a')])
			})
		})
		describe('find([propName,fn])',()=>{
			it('should return the object for which fn returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var obj = wrapped.find(['name',(key)=>/b/.test(key)])
				expect(obj).to.be.equal(wrapped[wrapped.indexes('name').get('b')]);
			})
			it('should return undefined if no object returned true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var obj = wrapped.find(['name',(key)=>/n/.test(key)]);
				expect(obj).to.be.be.undefined;;
			})
		})
	})
	describe('getIterator(key)',()=>{
		it('should return an iterator for the provided index name',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			for(let [key,value] of wrapped.getIterator('name')){
				expect(key).to.equal(value.name);
			}
		})
		it('should throw an error is the provided index name does not exist',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			expect(()=>{
				var iterator = wrapped.getIterator('whatever')
			}).to.throw();
		})
	})
	describe('findMany',()=>{
		describe('findMany(fn)',()=>{
			it('should return the objects when the provided function returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var objs = wrapped.findMany((el,i)=>{
					return i<2;
				});
				expect(objs).to.eql([
	{name:'b'}
,	{name:'d'}
,	{name:'a'}
,	{name:'c'}
].slice(0,2));
			})
			it('should return an empty array if no object matches the function',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var objs = wrapped.findMany((el)=>{
					return el.name=='e';
				});
				expect(objs.length).to.equal(0)
			})
			it('should return the same object type that ran the function',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var objs = wrapped.findMany((el,i)=>{
					return i<2;
				});
				expect(objs).to.have.property('indexes');
				expect(objs.indexes()).to.be.instanceOf(Map)
			})
		})
		describe('findMany([propName,prop])',()=>{
			it('should return the objects index who\'s property `propName` is equal to the provided `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var objs = wrapped.findMany(['name','d']);
				var get = wrapped.get('name');
				expect(objs).to.eql([get('d')])
			})
			it('should return the objects who\'s property `propName` matches the provided RegExp `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var objs = wrapped.findMany(['name',/a|c/]);
				var get = wrapped.get('name');
				expect(objs).to.eql([get('a'),get('c')])
			})
		})
		describe('findMany([propName,fn])',()=>{
			it('should return the objects for which fn returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var objs = wrapped.findMany(['name',(key)=>/b|d/.test(key)])
				var get = wrapped.get('name');
				expect(objs).to.eql([get('b'),get('d')])
			})
			it('should return an empty array if no objsect returned true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var objs = wrapped.findMany(['name',(key)=>/n/.test(key)]);
				expect(objs.length).to.be.equal(0);
			})
		})
	})
	describe('set',()=>{
		describe('set(index,value)',()=>{
			it('should work like push if index is not specified',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.length).to.equal(4);
				var obj = {name:'f'};
				var result = wrapped.set(null,obj)
				expect(result.length).to.equal(5);
			})
			it('should work like push if index is larger than array',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.length).to.equal(4);
				var obj = {name:'f'};
				var result = wrapped.set(20,obj)
				expect(result.length).to.equal(5);
				expect(result.indexes('name').get('f')).to.equal(4);
			})
			it('should merge new properties if the index exists',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.length).to.equal(4);
				var obj = {newProp:4};
				var obj2 = {newProp2:5}
				var obj3 = {newProp:2}
				var result = wrapped.set(2,obj).set(2,obj2)
				expect(result.length).to.equal(4);
				expect(result.get('name')('a')).to.eql({name:'a',newProp:4,newProp2:5})
				result = result.set(2,obj3);
				expect(result.get('name','a')).to.eql({name:'a',newProp:2,newProp2:5})
			})
			it('should reindex if a passed property is indexed',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.length).to.equal(4);
				var obj = {name:'f',newProp:2};
				var result = wrapped.set(2,obj)
				expect(result.length).to.equal(4);
				expect(result.get('name')('a')).to.be.undefined;
				expect(result.get('name','f')).to.eql({name:'f',newProp:2})
			})
			it('should replace the item if the index exists and the replace flag is set',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.length).to.equal(4);
				var obj = {newProp:2};
				var result = wrapped.set(2,obj,true)
				expect(result.length).to.equal(4);
				expect(result.get('name')('a')).to.be.undefined;;
				expect(result[2]).to.eql({newProp:2})
			})
			it('should delete the item if the index exists and the remove flag is set',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.length).to.equal(4);
				var result = wrapped.set(2,null,false,true)
				expect(result.length).to.equal(3);
				expect(result.get('name')('a')).to.be.undefined;;
				expect(result[2]).to.eql({name:'c'})
				expect(result.indexes('name').get('c')).to.equal(2)
			})
			it('should count backwards if the index is negative',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.length).to.equal(4);
				var obj = {newProp:2};
				var result = wrapped.set(-2,obj)
				expect(result.length).to.equal(4);
				expect(result.get('name')('a')).to.eql({name:'a',newProp:2})
			})
		})
		describe('set(fn,value)',()=>{
			it('should set the element where provided predicate is true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.length).to.equal(4);
				var obj = {newProp:2};
				var result = wrapped.set((el)=>el.name=='a',obj)
				expect(result.length).to.equal(4);
				expect(result.get('name')('a')).to.eql({name:'a',newProp:2})
			})
		})
		describe('set([propName,predicate],value)',()=>{
			describe('set([propName,string|number])',()=>{
				it('should set the element where provided predicate is true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {newProp:2};
					var result = wrapped.set(['name','a'],obj)
					expect(result.length).to.equal(4);
					expect(result.get('name')('a')).to.eql({name:'a',newProp:2})
				})
			})
			describe('set([propName,regExp])',()=>{
				it('should set the element where provided predicate is true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {newProp:2};
					var result = wrapped.set(['name',/a|b/],obj)
					expect(result.length).to.equal(4);
					expect(result.get('name')('b')).to.eql({name:'b',newProp:2})
				})
			})
			describe('set([propName,fn])',()=>{
				it('should set the element where provided predicate is true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {newProp:2};
					var result = wrapped.set(['name',key=>key=='a'],obj)
					expect(result.length).to.equal(4);
					expect(result.get('name')('a')).to.eql({name:'a',newProp:2})
				})
			})
		})
	})
	describe('replace',()=>{
		describe('replace(index,value)',()=>{
			it('should replace the specified objects and indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.replace(1,{'path':5});
				expect(result.length).to.equal(4);
				expect(result.indexes('name').size).to.equal(3);
				expect(result.indexes('name').get('d')).to.be.undefined;;
			})
		});
		describe('replace(predicate,value)',()=>{
			it('should replace the object where predicate is true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.replace(['name',/d/],{'path':5});
				expect(result.length).to.equal(4);
				expect(result.indexes('name').size).to.equal(3);
				expect(result.indexes('name').get('d')).to.be.undefined;;
			})
		});
	})
	describe('remove',()=>{
		describe('remove(index)',()=>{
			it('should remove the specified objects and indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.indexes('name').get('a')).to.equal(2)
				var result = wrapped.remove(1);
				expect(result.length).to.equal(3)
				expect(result.indexes('name').size).to.equal(3)
				expect(result.indexes('name').get('a')).to.equal(1)
			})
		});
		describe('remove(predicate)',()=>{
			it('should remove the object where predicate is true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.indexes('name').get('a')).to.equal(2)
				var result = wrapped.remove(['name','d']);
				expect(result.length).to.equal(3)
				expect(result.indexes('name').size).to.equal(3)
				expect(result.indexes('name').get('a')).to.equal(1)
			})
		});
	})
	describe('setMany(predicates,value)',()=>{
		describe('setMany(fn,value)',()=>{
			it('should set the objects where the provided function returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.setMany((el,i)=>i<2,{smallerThanTwo:true});
				expect(result[0]).to.have.property('smallerThanTwo')
				expect(result[1]).to.have.property('smallerThanTwo')
				expect(result[2]).to.not.have.property('smallerThanTwo')
			})
		})
		describe('setMany([propName,prop,prop,prop],value)',()=>{
			it('should set the objects who\'s property `propName` is equal to one of the provided `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.setMany(['name','d','c'],{favoriteLetters:true});
				var get = result.get('name');
				expect(get('d')).to.have.property('favoriteLetters')
				expect(get('c')).to.have.property('favoriteLetters')
				expect(get('a')).to.not.have.property('favoriteLetters')
			})
			it('should set the objects who\'s property `propName` matches the provided RegExp `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.setMany(['name',/d|c/],{favoriteLetters:true});
				var get = result.get('name');
				expect(get('d')).to.have.property('favoriteLetters')
				expect(get('c')).to.have.property('favoriteLetters')
				expect(get('a')).to.not.have.property('favoriteLetters')
			})
		})
		describe('setMany([propName,fn],value)',()=>{
			it('should set the objects for which fn returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.setMany(['name',(key)=>/d|c/.test(key)],{favoriteLetters:true})
				var get = result.get('name');
				expect(get('d')).to.have.property('favoriteLetters')
				expect(get('c')).to.have.property('favoriteLetters')
				expect(get('a')).to.not.have.property('favoriteLetters')
			})
		})
	})
	describe('removeMany',()=>{
		describe('removeMany(fn,value)',()=>{
			it('should remove the objects where the provided function returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.removeMany((el,i)=>i<2);
				expect(result[0]).to.eql({name:'a'});
			})
		})
		describe('removeMany([propName,prop,prop,prop],value)',()=>{
			it('should remove the objects who\'s property `propName` is equal to one of the provided `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.removeMany(['name','d','c']);
				var get = result.get('name');
				expect(get('d')).to.be.undefined;;
				expect(get('c')).to.be.undefined;;
				expect(result).to.eql([ { name: 'b' }, { name: 'a' } ])
			})
			it('should remove the objects who\'s property `propName` matches the provided RegExp `prop`',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.removeMany(['name',/d|c/]);
				var get = result.get('name');
				expect(get('d')).to.be.undefined;;
				expect(get('c')).to.be.undefined;;
			})
		})
		describe('removeMany([propName,fn],value)',()=>{
			it('should remove the objects for which fn returns true',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var result = wrapped.removeMany(['name',(key)=>/d|c/.test(key)])
				var get = result.get('name');
				expect(get('d')).to.be.undefined;;
				expect(get('c')).to.be.undefined;;
			})
		})
	})
	describe('some',()=>{
		function isBiggerThan10(element){
			return element > 10;
		}
		it('should return true if any of the object fullfills the predicate',()=>{
			var arr = [12, 5, 8, 1, 4]
			var wrapped = wrap(arr)
			expect(arr.some(isBiggerThan10)).to.be.true;
			expect(wrapped.some(isBiggerThan10)).to.be.true;
		})
		it('should return false if none of the objects fullfills the predicate',()=>{
			var arr = [2, 5, 8, 1, 4]
			var wrapped = wrap(arr)
			expect(arr.some(isBiggerThan10)).to.be.false;
			expect(wrapped.some(isBiggerThan10)).to.be.false;
		})
		it('should return false if BREAK is returned',()=>{
			var i = 0;
			function isBiggerThan10BREAK(element,index){
				i++
				return BREAK;
			}
			var arr = [2, 5, 18, 11, 14]
			var wrapped = wrap(arr)
			expect(wrapped.some(isBiggerThan10BREAK)).to.be.false;
			expect(i).to.equal(1);
		})
	})
	describe('toJson',()=>{
		it('should output a serializable object',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name')
			expect(wrapped.toJson()).to.eql({
				indexes: { name: { 'b': 0, 'd': 1, 'a': 2, 'c': 3 } }
  			,	items: [ { name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' } ]
			})
		})
	})
	describe('fromJson({indexes:{name:{}},items:[]})',()=>{
		it('should rebuild an indexed array from the provided json',()=>{
			var json = {
				indexes: { name: { 'b': 0, 'd': 1, 'a': 2, 'c': 3 } }
  			,	items: [ { name: 'b' }, { name: 'd' }, { name: 'a' }, { name: 'c' } ]
			}
			var model = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var wrapped = wrap().fromJson(json);
			expect(wrapped).to.eql(model);
			expect(wrapped.indexes('name').size).to.equal(4)
		})
	})
	describe('reindex',()=>{
		it('rebuilds indexes',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name')
			wrapped[5] = {name:'e'}
			wrapped[6] = {name:'f'}
			wrapped[7] = {name:'g'}
			expect(wrapped.indexes('name').size).to.equal(4)
			wrapped.reindex();
			expect(wrapped.indexes('name').size).to.equal(7)
		})
	})
	describe('mutate()',()=>{
		it('should make all methods mutative when set to true',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name')
				.mutate(true)
				.push('n')
				.push(4)
				.unshift('z');
			expect(wrapped.length).to.equal(7)
			wrapped.mutate(false);
			wrapped.push('r')
			expect(wrapped.length).to.equal(7)
		})
		it('should return the current mutate value if no argument was passed',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name')
			expect(wrapped.mutate()).to.be.false;
			wrapped.mutate(true)
			expect(wrapped.mutate()).to.be.true;
		})
	})
	describe('chain()',()=>{
		it('should make all methods mutative until value() is called',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name')
				.chain()
				.push('n')
				.push(4)
				.unshift('z');
			expect(wrapped.length).to.equal(7)
			wrapped.value();
			wrapped.push('r')
			expect(wrapped.length).to.equal(7)
		})
	})
	describe('value()',()=>{
		it('should make all methods non-mutative',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name').mutate(true);
			var len = wrapped.length;
			wrapped.push({name:'f'});
			expect(wrapped.length).to.equal(len+1);
			wrapped.value();
			wrapped.push({name:'v'});
			expect(wrapped.length).to.equal(len+1);
		})
		it('should return the original array',()=>{
			var arr = ['a','b','c'];
			var wrapped = wrap(arr);
			expect(wrapped.value()).to.equal(arr);
		})
	})
	describe('addIndex(indexName[,reindex])',()=>{
		describe('addIndex(indexName)',()=>{
			it('should add an index to the indexes map',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name').push({path:'i',name:'n'});
				wrapped.addIndex('path');
				expect(wrapped.get('path')).to.be.a('function');
				expect(wrapped.indexes('path').size).to.equal(0)
			})
		})
		describe('addIndex(indexName,true)',()=>{
			it('should rebuild the indexes after adding the new index',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name').push({path:'i',name:'n'},{path:'d'});
				wrapped.addIndex('path',true);
				expect(wrapped.get('path')).to.be.a('function');
				expect(wrapped.indexes('path').size).to.equal(2)
				expect(wrapped.indexes('name').size).to.equal(5)
			})
		})
	})
	describe('get()',()=>{
		describe('get(index:number)',()=>{
			it('should return the object specified by index number',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get(0)).to.eql({name:'b'});
			})
			it('should return undefined if the index is not found',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get(9)).to.be.undefined;;
			})
		})
		describe('get(indexName,key)',()=>{
			it('should return the object specified by indexName and key',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get('name','b')).to.eql({name:'b'});
			})
			it('should return undefined if the index or key are not found',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get('name','f')).to.be.undefined;;
			})
		})
		describe('get(indexName)',()=>{
			it('should return a function getInIndex(key) that can be used to retrieve keys',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var get = wrapped.get('name');
				expect(get).to.be.a('function')
				expect(get('a')).to.eql({name:'a'});
			})
			it('should return undefined if the index name provided does not exist',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get('notAnIndex')).to.be.undefined;
			})
			it('should bind the function getIndex(key) to the current values only, unless mutate is false',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var get = wrapped.get('name');

				var get2 = wrapped.push({name:'f'}).get('name');

				expect(get('a')).to.eql({name:'a'});
				expect(get('f')).to.be.undefined;;

				expect(get2('f')).to.eql({name:'f'})

				var wrapped2 = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name').mutate(true);
				var get3 = wrapped2.get('name');
				wrapped2.push({'name':'f'});
				expect(get3('f')).to.eql({name:'f'});
			})
		})
	})
	describe('has()',()=>{
		describe('has(indexName,key)',()=>{
			it('should return the true if the object specified by indexName and key exists',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.has('name','b')).to.be.true;
			})
			it('should return false if the index or key are not found',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.has('name','f')).to.be.false;
			})
		})
		describe('has(indexName)',()=>{
			it('should return a function hasInIndex(key) that can be used to check for keys',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var has = wrapped.has('name');
				expect(has).to.be.a('function')
				expect(has('a')).to.be.true;
			})
			it('should return undefined if the index name provided does not exist',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.has('notAnIndex')).to.be.false;
			})
			it('should bind the function hasIndex(key) to the current values only, unless mutate is false',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var has = wrapped.has('name');
				var has2 = wrapped.push({name:'f'}).has('name');
				expect(has('a')).to.be.true;
				expect(has('f')).to.be.false;
				expect(has2('f')).to.be.true;
			})
		})
	})
	describe('indexes()',()=>{
		it('returns the indexes map',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			expect(wrapped.indexes()).to.be.instanceOf(Map)
			expect(wrapped.indexes().size).to.equal(1)
		})
		describe('indexes(indexName)',()=>{
			it('returns the specific index map',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.indexes('name')).to.be.instanceOf(Map)
				expect(wrapped.indexes('name').size).to.equal(4)
			})
		})
	})
	describe('initializer()',()=>{
		it('should put all new items through the provided initializer function',()=>{
			var i = 0;
			var letters = ['e','f','g','h','i']
			var wrapped = wrap([],'name').initializer((el)=>{
				var obj = Object.assign(el,{itWorks:true});
				if(!obj.name){obj.name = letters[i++];}
				return obj;
			});
			var results = wrapped.concat([
	{name:'b'}
,	{name:'d'}
,	{name:'a'}
,	{name:'c'}
])
				.push({another:'element'})
				.splice(2,0,{yetAnother:'yes',name:'between-D-and-A'})
				.unshift({first:true})
			;
			expect(results.indexes('name').get('f')).to.equal(0);
			expect(results.indexes('name').get('between-D-and-A')).to.equal(3);
		})
	})
})
