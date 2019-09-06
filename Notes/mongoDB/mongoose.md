## Module setup

```javascript
const mongoose = require("mongoose");

// connect to a local database
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// connect to mongoDB atlas
mongoose.connect(mongoUrl, {useNewUrlParser: true});
```

## Define a schema

```javascript
const dogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String
});
```

Available schema types are:

- [String](https://mongoosejs.com/docs/schematypes.html#strings)
- [Number](https://mongoosejs.com/docs/schematypes.html#numbers)
- [Date](https://mongoosejs.com/docs/schematypes.html#dates)
- [Buffer](https://mongoosejs.com/docs/schematypes.html#buffers)
- [Boolean](https://mongoosejs.com/docs/schematypes.html#booleans)
- [Mixed](https://mongoosejs.com/docs/schematypes.html#mixed)
- [ObjectId](https://mongoosejs.com/docs/schematypes.html#objectids)
- [Array](https://mongoosejs.com/docs/schematypes.html#arrays)
- [Decimal128](https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Decimal128)
- [Map](https://mongoosejs.com/docs/schematypes.html#maps)

## Compile schema into model

`mongoose.model(collectionName, schema)`

> The first argument is the **singular** name of the collection the model is for. Mongoose automatically looks for the plural, lowercased version of your model name.

```javascript
const Dog = mongoose.model("Dog", dogSchema);
// model name is conventionally capitalized
```

## CRUD

```javascript
let rusty = new Cat({
  name = "rusty",
  age = 5,
  breed = "husky"
});

rusty.save((err, dog) => {
  if (err) {
    console.log(err);
  } else {
    console.log(dog);
  }
});
// dog is the created object

// or
Dog.create({
  
}, (err, dog) => {
  
});
```

```javascript
Dog.find({}, (err, result) => {
  
});
// result is an array of the selected objects

Dog.findById(id, (err, result) => {} );
```