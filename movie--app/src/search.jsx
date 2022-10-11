import React from "react";
import MovieCard from "./moviecard";

function Search() {

    const [query, setQuery] = React.useState('')
    const [movies, setMovies] = React.useState([ ])

    const searchMovies = async (e) => {
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=55f270856d7992df60e6e53d43b6458c&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try{
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
            console.log(movies)
        } catch(err) {
            console.log('error')
        }

    }

    const changeInput = (e) => setQuery(e.target.value)

    const AllMovies = movies.filter(movie => movie.poster_path).map(movie => {
        return(
            <MovieCard 
            poster_path={movie.poster_path}
            key={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
            overview={movie.overview} />
        )
    })

    return(
        <section>
        <form className="form"  onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie name</label>
            <input className="input" type='text' name="query"
            placeholder="End Game"
            value={query} 
            onChange={changeInput}
            ></input>
            <button className="button">Search</button> 
        </form>
        <div>
           {AllMovies}
        </div>
        </section>
    )

}

export default Search