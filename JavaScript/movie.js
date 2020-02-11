var db = [
    {
        title: "Ngon",
        rating: 5,
        hasWatched: true,
    },
    {
        title: "Nice",
        rating: 0,
        hasWatched: false,
    },
]

db.forEach(function(value){
    var str = "";
    if (!value.hasWatched) {
        str = "not";
    }
    console.log("You have "+str+" wached"+value.title+" - "+ value.rating+" stars");
})