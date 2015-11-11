import chai from 'chai'
import Indexed from '../src/'
const {asClosure,wrapArray:wrap,BREAK,SKIP,isArrayLike} = Indexed;
var expect = chai.expect;

describe('Set/Update/Remove',()=>{
	describe('Set, update, or remove a single item',()=>{
		describe('set(predicate:integer|function|array[string,string]|array[string,regexp]|array[string,function],value:any)',()=>{
			describe('set(index:integer,value:any)',()=>{
				it('should work like push if index is not specified',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {name:'f'};
					var result = wrapped.set(null,obj)
					expect(result.length).to.equal(5);
				})
				it('should work like push if index is larger than array',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {name:'f'};
					var result = wrapped.set(20,obj)
					expect(result.length).to.equal(5);
					expect(result.indexes('name').get('f')).to.equal(4);
				})
				it('should merge new properties if the index exists',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {newProp:4};
					var obj2 = {newProp2:5}
					var obj3 = {newProp:2}
					var result = wrapped.set(2,obj).set(2,obj2)
					expect(result.length).to.equal(4);
					expect(result.get('name')('a')).to.eql({name:'a',newProp:4,newProp2:5})
					result = result.set(2,obj3);
					expect(result.get('name','a')).to.eql({name:'a',newProp:2,newProp2:5})
				})
				it('should reindex if a passed property is indexed',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {name:'f',newProp:2};
					var result = wrapped.set(2,obj)
					expect(result.length).to.equal(4);
					expect(result.get('name')('a')).to.be.undefined;
					expect(result.get('name','f')).to.eql({name:'f',newProp:2})
				})
				it('should replace the item if the index exists and the replace flag is set',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {newProp:2};
					var result = wrapped.set(2,obj,true)
					expect(result.length).to.equal(4);
					expect(result.get('name')('a')).to.be.undefined;;
					expect(result[2]).to.eql({newProp:2})
				})
				it('should delete the item if the index exists and the remove flag is set',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var result = wrapped.set(2,null,false,true)
					expect(result.length).to.equal(3);
					expect(result.get('name')('a')).to.be.undefined;;
					expect(result[2]).to.eql({name:'c'})
					expect(result.indexes('name').get('c')).to.equal(2)
				})
				it('should count backwards if the index is negative',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {newProp:2};
					var result = wrapped.set(-2,obj)
					expect(result.length).to.equal(4);
					expect(result.get('name')('a')).to.eql({name:'a',newProp:2})
				})
			})
			describe('set(predicate:function,value)',()=>{
				it('should set the element where provided predicate is true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {newProp:2};
					var result = wrapped.set((el)=>el.name=='a',obj)
					expect(result.length).to.equal(4);
					expect(result.get('name')('a')).to.eql({name:'a',newProp:2})
				})
				it('should not set the element where provided predicate is false',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.length).to.equal(4);
					var obj = {newProp:2};
					var result = wrapped.set(el=>el.name=='z',obj)
					expect(result.length).to.equal(4);
					expect(result.find(el=>el.newProp)).to.be.undefined;
				})
			})
			describe('set([propName,predicate],value:any)',()=>{
				describe('set([propName,string|number])',()=>{
					it('should set the element where provided predicate is true',()=>{
						var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
						expect(wrapped.length).to.equal(4);
						var obj = {newProp:2};
						var result = wrapped.set(['name','a'],obj)
						expect(result.length).to.equal(4);
						expect(result.get('name')('a')).to.eql({name:'a',newProp:2})
					})
					it('should not set the element where provided predicate is false',()=>{
						var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
						expect(wrapped.length).to.equal(4);
						var obj = {newProp:2};
						var result = wrapped.set(['name','z'],obj)
						expect(result.length).to.equal(4);
						expect(result.find(el=>el.newProp)).to.be.undefined;
					})
				})
				describe('set([propName,regExp],value:any)',()=>{
					it('should set the element where provided predicate is true',()=>{
						var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
						expect(wrapped.length).to.equal(4);
						var obj = {newProp:2};
						var result = wrapped.set(['name',/a|b/],obj)
						expect(result.length).to.equal(4);
						expect(result.get('name')('b')).to.eql({name:'b',newProp:2})
					})
					it('should not set the element where provided predicate is false',()=>{
						var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
						expect(wrapped.length).to.equal(4);
						var obj = {newProp:2};
						var result = wrapped.set(['name',/z/],obj)
						expect(result.length).to.equal(4);
						expect(result.find(el=>el.newProp)).to.be.undefined;
					})
				})
				describe('set([propName,fn],value:any)',()=>{
					it('should set the element where provided predicate is true',()=>{
						var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
						expect(wrapped.length).to.equal(4);
						var obj = {newProp:2};
						var result = wrapped.set(['name',key=>key=='a'],obj)
						expect(result.length).to.equal(4);
						expect(result.get('name')('a')).to.eql({name:'a',newProp:2})
					})
					it('should not set the element where provided predicate is false',()=>{
						var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
						expect(wrapped.length).to.equal(4);
						var obj = {newProp:2};
						var result = wrapped.set(['name',key=>key=='z'],obj)
						expect(result.length).to.equal(4);
						expect(result.find(el=>el.newProp)).to.be.undefined;
					})
				})
			})
			it('should update the last indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var resultWrapped = wrapped.set(1,{name:'f'});
				expect(resultWrapped.lastIndexes()).to.eql([1]);
			})
		})
		describe('replace(predicate,value)',()=>{
			describe('replace(index:integer,value)',()=>{
				it('should replace the specified objects and indexes',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.replace(1,{'path':5});
					expect(result.length).to.equal(4);
					expect(result.indexes('name').size).to.equal(3);
					expect(result.indexes('name').get('d')).to.be.undefined;;
				})
			});
			describe('replace(predicate,value)',()=>{
				it('should replace the object where predicate is true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.replace(['name',/d/],{'path':5});
					expect(result.length).to.equal(4);
					expect(result.indexes('name').size).to.equal(3);
					expect(result.indexes('name').get('d')).to.be.undefined;;
				})
			});
			it('should update the last indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var resultWrapped = wrapped.replace(['name','d'],{name:'f'});
				expect(resultWrapped.lastIndexes()).to.eql([1]);
			})
		})
		describe('remove(predicate)',()=>{
			describe('remove(index:integer)',()=>{
				it('should remove the specified objects and indexes',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.indexes('name').get('a')).to.equal(2)
					var result = wrapped.remove(1);
					expect(result.length).to.equal(3)
					expect(result.indexes('name').size).to.equal(3)
					expect(result.indexes('name').get('a')).to.equal(1)
				})
			});
			describe('remove(predicate)',()=>{
				it('should remove the object where predicate is true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					expect(wrapped.indexes('name').get('a')).to.equal(2)
					var result = wrapped.remove(['name','d']);
					expect(result.length).to.equal(3)
					expect(result.indexes('name').size).to.equal(3)
					expect(result.indexes('name').get('a')).to.equal(1)
				})
			});
		})
	})
	describe('set or remove multiple items',()=>{
		describe('setMany(predicates:function|array[string,...predicate]|array[string|function],value)',()=>{
			describe('setMany(fn,value)',()=>{
				it('should set the objects where the provided function returns true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.setMany((el,i)=>i<2,{smallerThanTwo:true});
					expect(result[0]).to.have.property('smallerThanTwo')
					expect(result[1]).to.have.property('smallerThanTwo')
					expect(result[2]).to.not.have.property('smallerThanTwo')
				})
			})
			describe('setMany([propName,prop,prop,prop],value)',()=>{
				it('should set the objects who\'s property `propName` is equal to one of the provided `prop`',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.setMany(['name','d','c'],{favoriteLetters:true});
					var get = result.get('name');
					expect(get('d')).to.have.property('favoriteLetters')
					expect(get('c')).to.have.property('favoriteLetters')
					expect(get('a')).to.not.have.property('favoriteLetters')
				})
				it('should set the objects who\'s property `propName` matches the provided RegExp `prop`',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.setMany(['name',/d|c/],{favoriteLetters:true});
					var get = result.get('name');
					expect(get('d')).to.have.property('favoriteLetters')
					expect(get('c')).to.have.property('favoriteLetters')
					expect(get('a')).to.not.have.property('favoriteLetters')
				})
			})
			describe('setMany([propName,fn],value)',()=>{
				it('should set the objects for which fn returns true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.setMany(['name',(key)=>/d|c/.test(key)],{favoriteLetters:true})
					var get = result.get('name');
					expect(get('d')).to.have.property('favoriteLetters')
					expect(get('c')).to.have.property('favoriteLetters')
					expect(get('a')).to.not.have.property('favoriteLetters')
				})
			})
			it('should update the last indexes',()=>{
				var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
				var resultWrapped = wrapped.setMany(['name','b','c'],{name:'f'});
				expect(resultWrapped.lastIndexes()).to.eql([3]);
			})
		})
		describe('removeMany(predicates)',()=>{
			describe('removeMany(fn,value)',()=>{
				it('should remove the objects where the provided function returns true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.removeMany((el,i)=>i<2);
					expect(result[0]).to.eql({name:'a'});
				})
			})
			describe('removeMany([propName,prop,prop,prop],value)',()=>{
				it('should remove the objects who\'s property `propName` is equal to one of the provided `prop`',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.removeMany(['name','d','c']);
					var get = result.get('name');
					expect(get('d')).to.be.undefined;;
					expect(get('c')).to.be.undefined;;
					expect(result).to.eql([ { name: 'b' }, { name: 'a' } ])
				})
				it('should remove the objects who\'s property `propName` matches the provided RegExp `prop`',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.removeMany(['name',/d|c/]);
					var get = result.get('name');
					expect(get('d')).to.be.undefined;;
					expect(get('c')).to.be.undefined;;
				})
			})
			describe('removeMany([propName,fn],value)',()=>{
				it('should remove the objects for which fn returns true',()=>{
					var wrapped = wrap([{name:'b'},{name:'d'},{name:'a'},{name:'c'}],'name');
					var result = wrapped.removeMany(['name',(key)=>/d|c/.test(key)])
					var get = result.get('name');
					expect(get('d')).to.be.undefined;;
					expect(get('c')).to.be.undefined;;
				})
			})
		})
	})
	describe('transform items being added',()=>{
		describe('initializer(function)',()=>{
			it('should put all new items through the provided initializer function',()=>{
				var i = 0;
				var letters = ['e','f','g','h','i']
				var wrapped = wrap([],'name').initializer((el)=>{
					var obj = Object.assign(el,{itWorks:true});
					if(!obj.name){obj.name = letters[i++];}
					return obj;
				});
				var results = wrapped.concat([
					{name:'b'}
				,	{name:'d'}
				,	{name:'a'}
				,	{name:'c'}
				])
					.push({another:'element'})
					.splice(2,0,{yetAnother:'yes',name:'between-D-and-A'})
					.unshift({first:true})
				;
				expect(results.indexes('name').get('f')).to.equal(0);
				expect(results.indexes('name').get('between-D-and-A')).to.equal(3);
			})
			it('should operate on set if replace is set',()=>{
				var wrapped = wrap(
					[
						{name:'b'}
					,	{name:'d'}
					,	{name:'a'}
					,	{name:'c'}
					]
				,	'name'
				,	(el)=>{
						var obj = Object.assign(el,{itWorks:true});
						return obj;
					}
				);
				var results = wrapped.set(2,{name:'aa'},true).replace(0,{name:'bb'});
				var get = results.get('name');
				expect(get('a')).to.be.undefined;
				expect(get('b')).to.be.undefined;
				expect(get('aa')).to.eql({name:'aa',itWorks:true});
				expect(get('bb')).to.eql({name:'bb',itWorks:true});
			})
			it('could be used to enforce a same-type array by throwing an error on invalid values',()=>{
				var wrapped = wrap([1,2,3]
				,	null
				,	(el)=>{
						if(!(typeof el=='number')){
							throw new Error('Non-numbers are not allowed')
						}
						return el;
					}
				);
				var results = wrapped.push(5)
				expect(results.length).to.equal(4);
				expect(()=>{wrapped.push('a')}).to.throw();
			})
			it('should be a no-op if BREAK is returned from the function',()=>{
				var wrapped = wrap([1,2,3]
				,	null
				,	(el)=>(!(typeof el=='number'))? BREAK :  el
				);
				var results = wrapped.concat([5,8,'a',4])
				expect(results.length).to.equal(3);
			})
			it('invalid values are skipped if SKIP is returned from the function',()=>{
				var wrapped = wrap([1,2,3]
				,	null
				,	(el)=>(!(typeof el=='number'))? SKIP :  el
				);
				var results = wrapped.push(5,8,'a',4)
				expect(results).to.eql([1,2,3,5,8,4])
				expect(results.length).to.equal(6);
			})
			it('should not operate on set if replace is not set',()=>{
				var wrapped = wrap(
					[
						{name:'b'}
					,	{name:'d'}
					,	{name:'a'}
					,	{name:'c'}
					]
				,	'name'
				,	(el)=>{
						var obj = Object.assign(el,{itWorks:true});
						return obj;
					}
				);
				var results = wrapped.set(2,{name:'aa'})
				var get = results.get('name');
				expect(get('a')).to.be.undefined;
				expect(get('aa')).to.not.have.property('itWorks');
			})
		})
	})
	describe('clear()',()=>{
		it('should empty the array',()=>{
			var wrapped = wrap(
				[
					{name:'b'}
				,	{name:'d'}
				,	{name:'a'}
				,	{name:'c'}
				]
			,	'name'
			,	(el)=>{
					var obj = Object.assign(el,{itWorks:true});
					return obj;
				}
			);
			var results = wrapped.clear();
			expect(results.length).to.equal(0)
		})
	})
})
