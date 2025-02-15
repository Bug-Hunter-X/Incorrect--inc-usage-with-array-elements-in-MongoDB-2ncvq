```javascript
// Incorrect usage of $inc operator for updating an array element
db.collection.updateOne({"_id":1},{"$inc":{"arrayField.1":1}});
```