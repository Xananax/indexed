import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,SKIP,isArrayLike} = Indexed;
var expect = chai.expect;

describe('Methods that return an iterator',()=>{
	describe('getIterator(key:string)',()=>{
		it('should return an iterator for the provided index name',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			for(let [index,value] of wrapped.getIterator('name')){
				expect(wrapped[index]).to.eql(value);
			}
		})
		it('should return an iterator that provides (index:object index,value:object)',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			var i =0;
			for(let [index,value] of wrapped.getIterator('name')){
				var obj = wrapped[i];
				expect(index).to.equal(i++);
			}
		})
		it('should throw an error is the provided index name does not exist',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			expect(()=>{
				var iterator = wrapped.getIterator('whatever')
			}).to.throw();
		})
		describe('getIterator(key:string).forEach()',()=>{
			it('should call a function with arguments (index,value)',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				wrapped.getIterator('name').forEach((el,i)=>{
					expect(wrapped[i]).to.equal(el);
				})
			})
			it('should stop iterations if BREAK is returned',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var n = 0;
				wrapped.getIterator('name').forEach((el,i)=>{
					if(i>=2){return BREAK;}
					n++
				})
				expect(n).to.equal(2);
			})
		})
		describe('getIterator(key:string).map()',()=>{
			it('should call a function with arguments (index,value)',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				wrapped.getIterator('name').map((el,i)=>{
					expect(wrapped[i]).to.equal(el);
				})
			})
			it('should stop iterations if BREAK is returned',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var n = 0;
				wrapped.getIterator('name').map((el,i)=>{
					if(i>=2){return BREAK;}
					n++
				})
				expect(n).to.equal(2);
			})
			it('should skip an iteration if SKIP is returned',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'},{name:'e'}],'name');
				var n = 0;
				var result = wrapped.getIterator('name').map((el,i)=>{
					if(i%2){return SKIP;}
					n++
					return el.name;
				})
				expect(n).to.equal(3);
				expect(result[result.length-1]).to.equal('e')
			})
			it('should return an array',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'},{name:'e'}],'name');
				var result = wrapped.getIterator('name').map((el,i)=>{})
				expect(result).to.be.an('array')
			})
		})
	})
})
