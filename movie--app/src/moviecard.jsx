function MovieCard(props) {
    return (   
     <div className="card">
    <img className="card--img" alt="movie poster"
    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`} />
    <div className="card--content">
        <h3 className="card--title">{props.title}</h3>
        <p><small>rating: {props.vote_average}</small></p>
        <p><small>released: {props.release_date}</small></p>
        <p className="card--description">{props.overview}</p>
    </div>
</div>)
}

export default MovieCard