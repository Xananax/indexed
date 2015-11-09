import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray,isArrayLike,BREAK,SKIP} = Indexed;
var expect = chai.expect;

function makeComparisons(arr){
	var arr = arr.slice();
	var wrapped = wrapArray(arr.slice());
	var closed = asClosure(arr.slice());
	return [wrapped,closed,arr];
}

describe('Unmodified array methods',()=>{
	describe('lookup methods',()=>{
		describe('indexOf(element)',()=>{
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
		describe('lastIndexOf(element)',()=>{
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
	})
	describe('Verification methods',()=>{
		describe('every(function)',()=>{
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
		describe('includes(function)',()=>{
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
		describe('some(function)',()=>{
			function isBiggerThan10(element){
				return element > 10;
			}
			it('should return true if any of the object fullfills the predicate',()=>{
				var arr = [12, 5, 8, 1, 4]
				var wrapped = wrapArray(arr)
				expect(arr.some(isBiggerThan10)).to.be.true;
				expect(wrapped.some(isBiggerThan10)).to.be.true;
			})
			it('should return false if none of the objects fullfills the predicate',()=>{
				var arr = [2, 5, 8, 1, 4]
				var wrapped = wrapArray(arr)
				expect(arr.some(isBiggerThan10)).to.be.false;
				expect(wrapped.some(isBiggerThan10)).to.be.false;
			})
			it('should return false if BREAK is returned',()=>{
				var i = 0;
				function isBiggerThan10BREAK(element,index){
					i++
					return BREAK;
				}
				var arr = [2, 5, 18, 11, 14]
				var wrapped = wrapArray(arr)
				expect(wrapped.some(isBiggerThan10BREAK)).to.be.false;
				expect(i).to.equal(1);
			})
			it('should skip the value if SKIP is returned',()=>{
				var i = 0;
				function isBiggerThan10SKIP(element,index){
					return (element > 10) ? SKIP : false;
				}
				var arr = [2, 5, 18, 11, 14]
				var wrapped = wrapArray(arr)
				expect(wrapped.some(isBiggerThan10SKIP)).to.be.false;
			})
		})
	})
	describe('Methods returning an array',()=>{
		describe('map(function[,thisArg])',()=>{
			it('should work just like a regular array',()=>{

				var test = wrapArray([2, 5, 9]).map(n=>n+1)

				expect(test).to.eql([3,6,10])
			})
			it('should break early if BREAK is returned',()=>{
				var v = 0;
				var test = wrapArray([2, 5, 9]).map((n,i)=>{
					if(i>1){return BREAK;}
					v = i;
					return n+1
				})
				expect(test).to.eql([3,6])
				expect(v).to.equal(1);
			})
			it('should skip the value if SKIP is returned',()=>{
				var test = wrapArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map(n=>{
					return n%2?n:SKIP
				})
				expect(test).to.eql([1,3,5,7,9])
			})
		})
		describe('keys()',()=>{
			it('should work just like a regular array',()=>{
				var test1 = makeComparisons(['a','b','c'])
				test1.forEach(el=>{
					expect([...el.keys()]).to.eql([0,1,2])
				})
			})
		})
		describe('values()',()=>{
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
	})
	describe('Methods returning a single value',()=>{
		describe('join(string)',()=>{
			it('should work just like a regular array',()=>{
				var test1 = makeComparisons(['Wind', 'Rain', 'Fire'])
				test1.forEach((el,i)=>{
					expect(el.join()).to.equal('Wind,Rain,Fire')
					expect(el.join(', ')).to.equal('Wind, Rain, Fire')
				})
			})
			describe('reduce(function[,thisArg])',()=>{
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
			describe('reduceRight(function[,thisArg])',()=>{
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
			describe('toString()',()=>{
				it('should work just like a regular array',()=>{
					var arr = [0, 1, 2, 3];
					var str = arr+'';
					var test1 = makeComparisons(arr)
					test1.forEach(el=>{
						expect((el+'')).to.equal(str);
					})
				})
			})
		})
	})
	describe('Methods that I do not know how to implement yet',()=>{
		describe('fill(...elements)',()=>{
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
})
