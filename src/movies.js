/// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(function (movies) {
      return movies.director;
    });
  }
  
  // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(movies) {
    let stevenDrama = movies.filter(function (movies) {
      return (
        movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
      );
    });
    return stevenDrama.length;
  }
  

// 3 ———————————————————
function ratesAverage(movies) {
  if (movie.rate) {     movie.rate = 0;  }
    if (movies.length == 0) return 0;
    let rateSum = movies.reduce(
      (accumulator, movie) => accumulator + movie.rate,
      0
    );
    return parseFloat((rateSum / movies.length).toFixed(2));
  }
  
// Iteration 4: Drama movies - Get the average of Drama Movies
// define a func expression that accepts an array of movies
const dramaMoviesRate = (arr) => {
    const dramas = arr.filter((movie) => movie.genre.includes("Drama"));
      if (!dramas.length) {
      return 0;
    }
  
    return parseFloat(
      (
        dramas.reduce((total, movie) => total + movie.rate, 0) / dramas.length
      ).toFixed(2)
    );
  };
  
// Iteration 5
const orderByYear = (arr) => {
    const newMoviesArray = arr.map((movies) => movies);
  
    newMoviesArray.sort((movie1, movie2) =>
      movie1.year != movie2.year
        ? movie1.year - movie2.year
        : movie1.title > movie2.title
        ? 1
        : -1
    );
    return newMoviesArray;
  };
  
// Iteration 6
const orderAlphabetically = (arr) => {
    //create a copy of the movies array populated with only movie titles using the map method
    const movieTitles = arr.map((movies) => movies.title);
    //use sort to iterate over the array and sort it
    movieTitles.sort((movie1, movie2) => {
      //if the value of movie1 is greater than movie2, movie1 is placed first in the array
      if (movie1 > movie2) return 1;
      //if the value of movie1 is less than movie2, movie2 is swapped with movie1 and placed before it in the array
      if (movie1 < movie2) return -1;
      //if the value is the same nothing changes
      return 0;
    });
  
    //use splice to return an array that's only 20 elements long
    movieTitles.splice(0,20);
    
  
    return movieTitles;
  };
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average





