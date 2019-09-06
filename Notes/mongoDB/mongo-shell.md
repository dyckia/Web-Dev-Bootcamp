## Start Server
### `mongod`
(terminal command) start mongo demon

### `mongo`
(terminal command) open mongo shell 

## Common commands

### `help`

show list of mongo shell commands

### `show dbs`

list all database names (empty databes are not shown)

### `show collections`
list all collections for current database

### `use dbName`
create/switch current database to dbName. 
> The mongoshell variable `db` is set to the current database.

## CRUD

### insert

```javascript
db.collectionName.insert({name: "lucy", age: 25})
// db referes to current database
```

### find

```javascript
db.collectionName.find() // returns all objects in the given collection

db.collectionName.find({name: "lucy"}) // returns all objects whose name property is lucy
```

### update

```javascript
db.collectionName.update({name: "lucy"}, {city: "ottawa"})
// update the selected objects with the new object
// all existing porperties will be deleted

db.collectionName.update({name: "lucy"}, {$set: {gender: "female"}})
// add {gender: "female"} porperty to selected objects
```

### remove

```javascript
db.collectionName.remove({city: "ottawa"})
// remove all selected objects
```