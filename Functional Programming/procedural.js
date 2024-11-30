const movieList= [
    {
        title: "Batman",
        year: 1989,
        director: "Tim Burton",
        imdbRating: 7.6
    },
    {
        title: "Swades",
        year: 2006,
        director: "Ashutosh Gowariker",
        imdbRating: 8
    },
    {
        title: "        git add procedural.jsOppenheimer",
        year: 2024,
        director: "Christefor Nolan",
        imdbRating: 8
    }
]
// constant function is initalised ,the () shows that function isnt taking any parameters
const titles = () =>  {
 const titles = [];
 for(const movie of movieList) 
// the for of loop says every element will iterate in moviesList ,the movie variable represents current movie object
    {
     titles.push(movie.title);
     // within the for-of loop the title property of object movie is pushed into the titles array

    }
    return titles;
    // After the loop completes, the function returns the titles array, which now contains the titles of all the movies in the movieList.
};

    const ashuMoviesList = [];
    const ashuMovies = () => {
        for (const movie of movieList) {
            if(movie.director === "Ashutosh Gowariker") {
                ashuMoviesList.push(movie);
            }

        }
    };
    ashuMovies();


console.log(titles());
console.log(ashuMoviesList);
