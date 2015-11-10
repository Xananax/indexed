import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,isArrayLike} = Indexed;
var expect = chai.expect;

describe('Getters',()=>{
	describe('get(index:integer|string[,key:string])',()=>{
		describe('get(index:number)',()=>{
			it('should return the object specified by index number',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get(0)).to.eql({name:'b'});
			})
			it('should return undefined if the index is not found',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get(9)).to.be.undefined;;
			})
		})
		describe('get(indexName:string,key:string)',()=>{
			it('should return the object specified by indexName and key',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get('name','b')).to.eql({name:'b'});
			})
			it('should return undefined if the index or key are not found',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get('name','f')).to.be.undefined;;
			})
		})
		describe('get(indexName:string)',()=>{
			it('should return a function getInIndex(key) that can be used to retrieve keys',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var get = wrapped.get('name');
				expect(get).to.be.a('function')
				expect(get('a')).to.eql({name:'a'});
			})
			it('should return undefined if the index name provided does not exist',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				expect(wrapped.get('notAnIndex')).to.be.undefined;
			})
			it('should bind the function get(key) to the current values only, unless mutate is false',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var get = wrapped.get('name');

				var get2 = wrapped.push({name:'f'}).get('name');

				expect(get('a')).to.eql({name:'a'});
				expect(get('f')).to.be.undefined;;

				expect(get2('f')).to.eql({name:'f'})

				var wrapped2 = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name').mutate(true);
				var get3 = wrapped2.get('name');
				wrapped2.push({'name':'f'});
				expect(get3('f')).to.eql({name:'f'});
			})
		})
	})
})
