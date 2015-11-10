import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,isArrayLike} = Indexed;
var expect = chai.expect;

describe('Working With Indexes',()=>{
	describe('indexes([indexName:string])',()=>{
		describe('indexes()',()=>{
			it('returns the indexes map',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.indexes()).to.be.instanceOf(Map)
				expect(wrapped.indexes().size).to.equal(1)
			})
			describe('indexes(indexName:string)',()=>{
				it('returns the specific index map',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.indexes('name')).to.be.instanceOf(Map)
					expect(wrapped.indexes('name').size).to.equal(4)
				})
			})
		})
	})
	describe('has([indexName:string[,key:string]])',()=>{
		describe('has(indexName:string,key:string)',()=>{
			it('should return the true if the object specified by indexName and key exists',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.has('name','b')).to.be.true;
			})
			it('should return false if the index or key are not found',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.has('name','f')).to.be.false;
			})
		})
		describe('has(indexName:string)',()=>{
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
	describe('getIndex([indexName:string[,key:string]])',()=>{
		describe('getIndex(indexName:string,key:string)',()=>{
			it('should return the index if the object specified by indexName and key exists',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var wrapped2 = wrap([{id:0},{id:1},{id:2},{id:3},{id:4}],'id');
				expect(wrapped.getIndex('name','b')).to.equal(0)
				expect(wrapped2.getIndex('id',4)).to.equal(4)
				expect(wrapped2.indexes().get('id').get(0)).to.equal(0)
			})
			it('should return -1 if the index or key are not found',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.getIndex('name','f')).to.equal(-1);
			})
		})
		describe('getIndex(indexName:string)',()=>{
			it('should return a function getIndexInIndex(key) that can be used to check for keys',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var getIndex = wrapped.getIndex('name');
				expect(getIndex).to.be.a('function')
				expect(getIndex('a')).to.equal(2);
			})
			it('should return undefined if the index name provided does not exist',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.getIndex('notAnIndex')).to.be.undefined;
			})
			it('should bind the function getIndexIndex(key) to the current values only, unless mutate is false',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var getIndex = wrapped.getIndex('name');
				var getIndex2 = wrapped.push({name:'f'}).getIndex('name');
				expect(getIndex('a')).to.equal(2);
				expect(getIndex('f')).to.equal(-1);
				expect(getIndex2('f')).to.equal(4);
			})
		})
	})
	describe('addIndex(indexName:string[,reindex:boolean])',()=>{
		describe('addIndex(indexName:string)',()=>{
			it('should add an index to the indexes map',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name').push({path:'i',name:'n'});
				wrapped.addIndex('path');
				expect(wrapped.get('path')).to.be.a('function');
				expect(wrapped.indexes('path').size).to.equal(0)
			})
		})
		describe('addIndex(indexName:string,true)',()=>{
			it('should rebuild the indexes after adding the new index',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name').push({path:'i',name:'n'},{path:'d'});
				wrapped.addIndex('path',true);
				expect(wrapped.get('path')).to.be.a('function');
				expect(wrapped.indexes('path').size).to.equal(2)
				expect(wrapped.indexes('name').size).to.equal(5)
			})
		})
	})
	describe('reindex()',()=>{
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
})
