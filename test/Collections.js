import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray,BREAK,isArrayLike} = Indexed;
var expect = chai.expect;

describe.skip('Working With Collections',()=>{
	describe('collect(name:string)',()=>{
		it('should add a collection',()=>{
			var wrapped = wrapArray([]);
			wrapped.collect('type');
			wrapped.push(
				{name:'Ernest Hemingway',type:'author'}
			,	{name:'Flipper',type:'Dolphin'}
			)
			expect(wrapper.collections('type','author').length).to.equal(0);
		})
	})
})
