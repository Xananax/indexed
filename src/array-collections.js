import {
	isInvalidObject
} from './utils';
import {
	BREAK
} from './constants';

export function addCollection(indexes,propName){
	if(!indexes){return;}
	if(!indexes.has(COLLECTIONS_KEY)){
		indexes.set(COLLECTIONS_KEY,new Map());
	}
	indexes.get(COLLECTIONS_KEY).set(propName,new Map());
	return indexes;
}

export function reindexCollections(indexes,arr){
	if(!indexes){return;}
	if(!indexes.has(COLLECTIONS_KEY)){return;}	
}

export function getCollection(indexes,propName){
	if(!indexes){return;}
	if(!indexes.has(COLLECTIONS_KEY)){return;}
	if(!indexes.get(COLLECTIONS_KEY).has(propName)){return;}
	return indexes.get(COLLECTIONS_KEY).get(propName);
}

export function setInCollection(indexes,obj,index){
	if(!indexes || !indexes.has(COLLECTIONS_KEY) || isInvalid(obj)){return;}
	const collections = indexes.get(COLLECTIONS_KEY)
	for(let [propName,collection] of collections){
		if(propName in obj){
			var propValue = obj[propName];
			if(!collection.has(propValue)){collection.set(propValue,[]);}
			collection.get(propValue).push(index);
		}
	}
}

export function copyCollection(indexes){
	if(!indexes || !indexes.has(COLLECTIONS_KEY)){return;}
	const newCollection = new Map();
	indexes.get(COLLECTIONS_KEY).forEach((propName,collection)=>{
		const newcoll = new Map();
		collection.forEach((propKey,indexesList)=>{
			newColl.set(propKey,indexesList.slice());
		})
		newCollection.set(propName,newColl)
	})
	return newCollection;
}

export function collectionToJson(indexes){
	if(!indexes || !indexes.has(COLLECTIONS_KEY)){return;}
	const newCollection = [];
	indexes.get(COLLECTIONS_KEY).forEach((propName,collection)=>{
		const newcoll = [];
		collection.forEach((propKey,indexesList)=>{
			newColl.push([propKey,indexesList.slice()]);
		})
		newCollection.push([propName,newColl])
	})
	return newCollection;
}

export function collectionFromJson(indexes,json){
	const newCollection = new Map();
	json.forEach(([propName,collection])=>{
		const newcoll = new Map();
		collection.forEach(([propKey,indexesList])=>{
			newColl.set(propKey,indexesList.slice());
		})
		newCollection.set(propName,newColl)
	})
	indexes.set(COLLECTIONS_KEY,newCollection);
}

export function removeFromCollection(indexes,obj,index){
	if(!indexes || !indexes.has(COLLECTIONS_KEY) || isInvalid(obj)){return;}
	const collections = indexes.get(COLLECTIONS_KEY)
	for(let [propName,collection] of collections){
		if(propName in obj){
			var propValue = obj[propName];
			if(collection.has(propValue)){
				const indexesList = collection.get(propValue);
				const indexIndex = indexesList.indexOf(index);
				if(indexIndex>=0){
					indexesList.splice(indexIndex,1);
				}
			}
		}
	}
}

export function iterateOverCollection(indexes,propName,propValue,callback,thisArg){
	if(!indexes || !indexes.has(COLLECTIONS_KEY)){return;}
	const collections = indexes.get(COLLECTIONS_KEY)
	if(!collections.has(propName)){return;}
	const collection = collections.get(propName);
	if(!collection.has(propValue)){return;}
	const indexesList = collection.get(propValue);
	const {length} = indexesList;
	var i = 0;
	var result
	while(i<length && result !== BREAK){
		result = callback.call(thisArg,indexesList[i++]);
	}
}
