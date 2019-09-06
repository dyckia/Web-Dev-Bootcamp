RESTful Routing

representational state transfer
a pattern for defining our routes
a way of mapping between HTTP routes and CRUD

|name   |url        |method/verb| description                     |
|-------|-----------|-----------|---------------------------------|
|INDEX  |/dogs      |GET        |display a list of all dogs       |
|NEW    |/dogs/new  |GET        |displays form to make a new dog  |
|CREATE |/dogs      |POST       |add new dog to DB                |
|SHOW   |/dogs/:id  |GET        |shows info about one dog         |