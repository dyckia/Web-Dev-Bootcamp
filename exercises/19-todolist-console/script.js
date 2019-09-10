window.setTimeout(function() {
    var list = [];

    var input;

    while (input !== "quit") {
        input = prompt("What would you like to do?");
        if (input === "list") {
            //todo
            console.log("************");
            list.forEach(function(name, index) {
                console.log(index + ": " + name);
            });
            console.log("************");
            console.log(list);
        } else if (input === "new") {
            var newTodo = prompt("Enter new todo");
            list.push(newTodo);
            console.log(newTodo + " added to list");
        } else if (input === "delete") {
            var index = prompt("Enter index of todo to delete");
            list.splice(index, 1);
            console.log("Item deleted");
        }
    }

    console.log("You quit the app.");
}, 500);