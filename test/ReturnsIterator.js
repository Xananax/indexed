import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,isArrayLike} = Indexed;
var expect = chai.expect;

describe('Methods that return an iterator',()=>{
	describe('getIterator(key:string)',()=>{
		it('should return an iterator for the provided index name',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			for(let [key,value] of wrapped.getIterator('name')){
				expect(key).to.equal(value.name);
			}
		})
		it('should return an iterator that provides (key:object property,value:object)',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var i =0;
			for(let [key,value] of wrapped.getIterator('name')){
				var obj = wrapped[i++];
				expect(value).to.equal(obj);
				expect(key).to.equal(obj.name);
			}
		})
		it('should throw an error is the provided index name does not exist',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			expect(()=>{
				var iterator = wrapped.getIterator('whatever')
			}).to.throw();
		})
	})
})
