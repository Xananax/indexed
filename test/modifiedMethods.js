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

describe('Modified Array Methods',()=>{
	describe('Lookup Methods',()=>{
		describe('Return Indexes',()=>{
			describe('findIndex(predicate:function|array[string,string]|array[string,function]|array[string,RegExp])',()=>{
				describe('findIndex(function)',()=>{
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
				describe('findIndex([propName,function])',()=>{
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
			describe('findIndexes(predicate:function|array[string,...string]|array[string,function]|array[string,RegExp])',()=>{
				describe('findIndexes(function)',()=>{
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
				describe('findIndexes([propName,function])',()=>{
					it('should return the indexes for which fn returns true',()=>{
						var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
						var index = wrapped.findIndexes(['name',(key)=>/a|c/.test(key)])
						expect(index).to.be.eql([2,3]);
					})
				})
			})
		})
		describe('Returns items',()=>{
			describe('find(predicate:function|array[string,string]|array[string,function]|array[string,RegExp])',()=>{
				describe('find(function)',()=>{
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
				describe('find([propName,function])',()=>{
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
		})
	})
	describe('Mutative Methods',()=>{
		describe('filter(function)',()=>{
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
		describe('concat(...items:any)',()=>{
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
			it('should update the last indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var resultWrapped = wrapped.concat({name:'f'},{name:'z'});
				expect(resultWrapped.lastIndexes()).to.eql([4,5]);
			})
		})
		describe('pop([receiver:array])',()=>{
			describe('pop()',()=>{
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
			})
			describe('pop(receiver:array)',()=>{
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
		})
		describe('shift([receiver:array])',()=>{
			describe('shift()',()=>{
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
			})
			describe('shift(receiver:array)',()=>{
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
		})
		describe('push(item:any)',()=>{
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
			it('should update the last indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var resultWrapped = wrapped.push({name:'f'},{name:'z'});
				expect(resultWrapped.lastIndexes()).to.eql([4,5]);
			})
		})
		describe('unshift()',()=>{
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
			it('should update the last indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var resultWrapped = wrapped.unshift({name:'f'},{name:'z'});
				expect(resultWrapped.lastIndexes()).to.eql([0,1]);
			})
		})
		describe('reverse()',()=>{
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
		describe('slice([begin:int[,end:int]])',()=>{
			describe('slice()',()=>{
				it('should return a copy of the array',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var resultWrapped = wrapped.slice();
					var resultClosed = closed.slice();
					expect(resultWrapped).to.eql(wrapped);
					expect(resultClosed.value()).to.eql(closed.value())
				})
			})
			describe('slice(begin)',()=>{
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
					var a2 = arr.slice(1);
					var w2 = wrapped.slice(1);
					expect(w1).to.eql(a1)
					expect(w2).to.eql(a2)
				})
			})
			describe('slice(begin,end)',()=>{
				it('should return a sliced copy of the array with arguments',()=>{
					var arr = [
						{name:'b'}
					,	{name:'d'}
					,	{name:'a'}
					,	{name:'c'}
					];
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var a = arr.slice(1,5);
					var w = wrapped.slice(1,5);
					var a2 = wrapped.slice(1,2);
					var w2 = wrapped.slice(1,2);
					expect(w).to.eql(a)
					expect(w2).to.eql(a2)
				})
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
		describe('splice(start:int,delete:int[,...items:any])',()=>{
			describe('splice,(start,number)',()=>{
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
			})
			describe('splice(start,number,...items)',()=>{
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
			it('should update the last indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var resultWrapped = wrapped.splice(2,3,{name:'f'},{name:'z'});
				expect(resultWrapped.lastIndexes()).to.eql([2,3]);
			})
		})
	})
})
