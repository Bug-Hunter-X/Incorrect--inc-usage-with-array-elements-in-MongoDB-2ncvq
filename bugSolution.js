```javascript
// Correct usage of $inc operator for updating an array element using array filters
db.collection.updateOne({"_id":1, "arrayField":{$elemMatch:{index:1}}},{"$inc":{"arrayField.$.value":1}});
//Alternative using positional operator with filter 
db.collection.updateOne({"_id":1},{"$inc":{
  "arrayField.$[element].value": 1
}},{
  arrayFilters: [{
    "element.index": 1
  }]
});
```