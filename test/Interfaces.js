import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray,BREAK,isArrayLike,factory:IndexedFactory} = Indexed;
var expect = chai.expect;

describe('Interfaces',()=>{
	describe('Class Indexed',()=>{
		describe('new Indexed([items:array[,indexes:any[,initializer:function]]])',()=>{
			describe('new Indexed()',()=>{
				it('should create a new Indexed object',()=>{
					var indexed = new Indexed();
					expect(indexed).to.be.instanceOf(Indexed);
				})
			})
			describe('Indexed.factory()',()=>{
				it('should create a new Indexed object',()=>{
					var indexed = IndexedFactory();
					expect(indexed).to.be.instanceOf(Indexed);
				})
			})
			describe('new Indexed(items:array)',()=>{
				it('should create a new Indexed object',()=>{
					var indexed = new Indexed(['a','b']);
					expect(indexed.get(0)).to.equal('a')
					expect(indexed.size()).to.equal(2);
				})
			})
			describe('new Indexed(items:array,index:string)',()=>{
				it('should set an index',()=>{
					var indexed = new Indexed([],'name');
					expect(indexed.indexes().has('name')).to.be.true;
					expect(indexed.indexes('name').size).to.equal(0);
				})
			})
			describe('new Indexed(items:array,indexes:array)',()=>{
				it('should set all the indexes specified',()=>{
					var indexed = new Indexed([],['name','size']);
					expect(indexed.indexes().has('name')).to.be.true;
					expect(indexed.indexes().has('size')).to.be.true;
					expect(indexed.indexes().size).to.equal(2);
				})
			})
			describe('new Indexed(items:array,indexes:object)',()=>{
				it('should set all the indexes and values specified',()=>{
					var indexed = new Indexed([{name:'a'},{name:'b'}],{name:{a:0,b:1,c:2}});
					expect(indexed.indexes().has('name')).to.be.true;
					expect(indexed.indexes('name').size).to.equal(2);
					expect(indexed.indexes('name').has('c')).to.be.false;
					expect(indexed.indexes('name').get('a')).to.equal(0)
				})
			})
			describe('new Indexed(items:array,indexes:any,initializer:function)',()=>{
				it('should put all added objects through the initializer',()=>{
					var indexed = new Indexed([],'name',(el)=>{return {name:el}});
					expect(indexed.push('a','b','c').get('name','a')).to.eql({name:'a'})
				})
			})
		})
	})
	describe('Closure over variable',()=>{
		describe('asClosure([items:array,[indexes:any[,initializer:function,factory:function],receiver:any]])',()=>{
			describe('asClosure()',()=>{
				it('should return an object similar to an Indexed',()=>{
					var closed = asClosure();
					expect(closed).to.not.be.instanceOf(Indexed);
					expect(closed).to.have.property('indexes');
				})
			})
			describe('asClosure(items:array)',()=>{
				it('should create a closure around the provided array',()=>{
					var arr = [1,2,3]
					var closed = asClosure(arr);
					expect(closed.value()).to.equal(arr);
				})
			})
			describe('asClosure(items:array,indexes:any)',()=>{
				it('should create the given indexes',()=>{
					var closed = asClosure([],'name');
					expect(closed).to.have.property('indexes');
					expect(closed.indexes().has('name')).to.be.true;
				})
			})
			describe('asClosure(items:array,indexes:any,initializer:function)',()=>{
				it('should use the provided initializer',()=>{
					var closed = asClosure([],'name',(el)=>{return {name:el}});
					expect(closed.push('a','b','c').get('name','a')).to.eql({name:'a'})
				})
			})
			describe('asClosure(items:array,indexes,initializer:function,factory:function,receiver:object)',()=>{
				it('should use the factory',()=>{
					it('should add the methods to the provided object',()=>{
						function factory(arr,indexes,initializer,factory){
							return {someProp:'abcde'};
						}
						var closed = factory();
						asClosure([],'name',null,factory,closed);
						expect(closed).to.have.property('indexes');
						expect(closed.indexes().has('name')).to.be.true;
						expect(closed).to.have.property('someProp')
						var result = closed.push('a');
						expect(result).to.have.property('someProp')
					})
				})
			})
		})
	})
	describe('Augment Array',()=>{
		describe('wrapArray([items:array[,indexes:any[,factory:function]]])',()=>{
			describe('wrapArray()',()=>{
				it('should return an augmented array',()=>{
					var arr = wrapArray();
					expect(arr).to.have.property('indexes');
				})
			})
			describe('wrapArray(items:array)',()=>{
				it('should augment the array with all methods',()=>{
					var arr = [1,2,3];
					wrapArray(arr);
					expect(arr).to.have.property('indexes');
				})
			})
			it('should leave the array prototype unmodified',()=>{
				var arr = wrapArray();
				expect(arr).to.be.instanceOf(Array);
				expect(Array.isArray(arr)).to.be.true;
			})
		})
	})
})
