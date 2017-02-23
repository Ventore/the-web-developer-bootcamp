var movies = [
  {
    title: 'The Matrix',
    rating: 5,
    hasWatched: true
  },
  {
    title: 'Last Night',
    rating: 3.5,
    hasWatched: false
  },
  {
    title: 'Revolver',
    rating: 5,
    hasWatched: true
  },
  {
    title: 'Les Miserables',
    rating: 4,
    hasWatched: false
  },
  {
    title: 'The Matrix',
    rating: 5,
    hasWatched: true
  },
  {
    title: 'Last Night',
    rating: 3.5,
    hasWatched: false
  },
  {
    title: 'Revolver',
    rating: 5,
    hasWatched: true
  },
  {
    title: 'Les Miserables',
    rating: 4,
    hasWatched: false
  }
];


movies.forEach(function(movie) {
  console.log(buildString(movie));
});


function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  };
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}
