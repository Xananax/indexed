import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,isArrayLike} = Indexed;
var expect = chai.expect;

describe('Static methods and helpers',()=>{
	describe('isArrayLike(obj)',()=>{
		it('should return true if `obj` has a length property and if integer indexes are contiguous',()=>{
			var obj = {0:'a',1:'b',length:2}
			expect(isArrayLike(obj)).to.be.true;
			expect((()=>isArrayLike(arguments))()).to.be.true;
		})
	})
})
