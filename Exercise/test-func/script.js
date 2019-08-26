function myForEach(arr, func) {
    for(var i=0; i<arr.length; i++) {
        func(arr[i]);
    }
}


var movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];


function printMovies(movies) {
    movies.forEach(function(movie){
        if (movie.hasWatched) {
            var str = "You have watched \"";
        } else {
            var str = "You have not seen \"";
        }
        str = str + movie.title + "\" - " + movie.rating + " stars";
        console.log(str);
    })
}