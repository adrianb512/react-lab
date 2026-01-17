export default function MoviesList(props) {



  return (
<div>

 {props.movies.length!==0 ?
     <>
     <h1>My favourite movies to watch</h1>


                  <ul>
                    {props.movies.map(movie =>
                        (
                      <li key={movie.title}>
                        {movie.title} ({movie.year})
                      </li>
                      ))}

                  </ul>
     </>
     :
      <p> brak filmow</p>
 }




 </div>
  )



}