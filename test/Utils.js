import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,isArrayLike} = Indexed;
var expect = chai.expect;

describe('Utils & Convenience Methods',()=>{
	describe('size()',()=>{
		it('should provide the size of the array',()=>{
			var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
			expect(wrapped.size()).to.equal(wrapped.length)
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
})
