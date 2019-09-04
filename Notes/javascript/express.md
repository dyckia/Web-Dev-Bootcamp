## import express framework
```javascript
const express = require("express");
const app = express();
```

## app.use(express.static("folderName"))
css style href /

## view engine
app.set("view engine", "ejs");
omit the .ejs don't explcitly say

## app.get

```javascript

// order matters 
```

the order of routes

route parameters
:
pattern
not applicable to sub page /r/subredditName/title

access parameters value
req.params.subredditName

## app.listen
app.listen(3000)


## res.send()
<h1>

## res.render()
has to be in views
second parameter json


## post()

<form action="" method="POST">
    <input name="">
</form>

npm install body-parser --save

bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

res.redirect("path") //default method GET