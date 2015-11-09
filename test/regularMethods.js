import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,isArrayLike} = Indexed;
var expect = chai.expect;

function makeComparisons(arr){
	var arr = arr.slice();
	var wrapped = wrap(arr.slice());
	var closed = asClosure(arr.slice());
	return [wrapped,closed,arr];
}

describe('Unmodified array methods',()=>{
	describe('every',()=>{
		it('should work just like a regular array',()=>{
			function isBigEnough(element, index, array) {
  				return element >= 10;
			}
			var testFalse = makeComparisons([12, 5, 8, 130, 44])
			var testTrue = makeComparisons([12, 54, 18, 130, 44]);
			testFalse.forEach((el,i)=>{
				expect(el.every(isBigEnough)).to.be.false;
			})
			testTrue.forEach(el=>{
				expect(el.every(isBigEnough)).to.be.true;
			})
		})
	})
	describe('includes',()=>{
		it('should work just like a regular array',()=>{
			if(!('includes' in Array.prototype)){return;}
			var test1 = makeComparisons([1, 2, 3])
			var test2 = makeComparisons([1, 2, NaN]);
			test1.forEach((el,i)=>{
				expect(el.includes(2)).to.be.true;
				el.includes(3, expect(3)).to.be.false;
				el.includes(3, expect(-1)).to.be.true;
			})
			test2.forEach(el=>{
				expect(el.includes(NaN)).to.be.true;
			})
		})
	})
	describe('map',()=>{
		it('should work just like a regular array',()=>{
			var test1 = makeComparisons([2, 5, 9]);
			test1.map(el=>
				expect(el.map(n=>n+1)).to.eql([3,6,10])
			)
		})
	})
	describe('indexOf',()=>{
		it('should work just like a regular array',()=>{
			var test1 = makeComparisons([2, 5, 9])
			test1.forEach(el=>{
				expect(el.indexOf(2)).to.equal(0)
				expect(el.indexOf(7)).to.equal(-1)
				expect(el.indexOf(9,2)).to.equal(2)
				expect(el.indexOf(2,-1)).to.equal(-1)
				expect(el.indexOf(2,-3)).to.equal(0)
			})
		})
	})
	describe('join',()=>{
		it('should work just like a regular array',()=>{
			var test1 = makeComparisons(['Wind', 'Rain', 'Fire'])
			test1.forEach((el,i)=>{
				expect(el.join()).to.equal('Wind,Rain,Fire')
				expect(el.join(', ')).to.equal('Wind, Rain, Fire')
			})
		})
	})
	describe('keys',()=>{
		it('should work just like a regular array',()=>{
			var test1 = makeComparisons(['a','b','c'])
			test1.forEach(el=>{
				expect([...el.keys()]).to.eql([0,1,2])
			})
		})
	})
	describe('lastIndexOf',()=>{
		it('should work just like a regular array',()=>{
			var test1 = makeComparisons([2, 5, 9, 2])
			test1.forEach(el=>{
				expect(el.lastIndexOf(2)).to.equal(3)
				expect(el.lastIndexOf(7)).to.equal(-1)
				expect(el.lastIndexOf(2,3)).to.equal(3)
				expect(el.lastIndexOf(2,2)).to.equal(0)
				expect(el.lastIndexOf(2,-2)).to.equal(0)
				expect(el.lastIndexOf(2,-1)).to.equal(3)
			})
		})
	})
	describe('reduce',()=>{
		it('should work just like a regular array',()=>{
			var test1 = makeComparisons([0, 1, 2, 3])
			var test2 = makeComparisons([[0, 1], [2, 3], [4, 5]])
			test1.forEach(el=>{
				expect(el.reduce((a,b)=>a+b)).to.equal(6)
			})
			test2.forEach(el=>{
				expect(el.reduce((a,b)=>a.concat(b))).to.eql([0, 1, 2, 3, 4, 5])
			})
		})
	})
	describe('reduceRight',()=>{
		it('should work just like a regular array',()=>{
			var test1 = makeComparisons([0, 1, 2, 3])
			var test2 = makeComparisons([[0, 1], [2, 3], [4, 5]])
			test1.forEach(el=>{
				expect(el.reduceRight((a,b)=>a+b)).to.equal(6)
			})
			test2.forEach(el=>{
				expect(el.reduceRight((a,b)=>a.concat(b))).to.eql([4, 5, 2, 3, 0, 1])
			})
		})
	})
	describe('toString',()=>{
		it('should work just like a regular array',()=>{
			var arr = [0, 1, 2, 3];
			var str = arr+'';
			var test1 = makeComparisons(arr)
			test1.forEach(el=>{
				expect((el+'')).to.equal(str);
			})
		})
	})
	describe('values',()=>{
		it('should work just like a regular array',()=>{
			if(!('values' in Array.prototype)){return;}
			var arr = ['w', 'y', 'k', 'o', 'p'];
			var test1 = makeComparisons(arr)
			test1.forEach((el)=>{
				var eArr = el.values();
				var i = 0;
				for(let letter of eArr){
					expect(letter).to.equal(arr[i++]);
				}
			})
		})
	})
	describe('fill',()=>{
		it('should throw an error for the closed and wrapped versions',()=>{
			var [wrapped,closed,arr] = makeComparisons([]);
			function shouldThrow(el){
				try {
					el.fill()
				}catch(e){

				}
			}
			function shouldNotThrow(el){
				el.fill();
			}
			shouldThrow(closed);
			shouldThrow(wrapped);
			shouldNotThrow(arr)
		})
	})
})
