import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,SKIP,isArrayLike} = Indexed;
var expect = chai.expect;

function verify(wrapped,closed,n){
	expect(closed.indexes('name').size).to.equal(n)
	expect(closed.value().length).to.equal(n)
	expect(wrapped.indexes('name').size).to.equal(n)
	expect(wrapped.length).to.equal(n)
}

describe('Methods that return a new indexed object',()=>{
	describe('Returns a subset of items',()=>{
		describe('findMany(predicate:function|array[string,string]|array[string,RegExp]|array[string,function])',()=>{
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
		describe('transform(function[,thisArg])',()=>{
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
			it('should stop when BREAK signal is returned',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var closed = asClosure([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				function map({name},i){return i>=2?BREAK:{name:name+'a',i};}
				var resultWrapped = wrapped.transform(map);
				var resultClosed = closed.transform(map);
				verify(resultWrapped,resultClosed,2);
				expect(resultWrapped.indexes('name').get('ba')).to.equal(0)
				expect(resultClosed.indexes('name').get('ba')).to.equal(0)
			})
			it('should skip when SKIP signal is returned',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');

				function map({name},i){return i%2?{name:name+'a',i}:SKIP;}

				var resultWrapped = wrapped.transform(map);

				expect(resultWrapped.length).to.equal(2);
				expect(resultWrapped.indexes('name').get('ba')).to.be.undefined;
				expect(resultWrapped.indexes('name').get('da')).to.equal(0)
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
	})
})
