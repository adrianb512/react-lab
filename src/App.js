
import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MovieList";

function App() {
  
           const [showForm, setshowForm] = useState('0');

          const [title, setTitle] = useState('');
          const [year, SetYear] = useState('');

          const [movies, setMovies] = useState([
              {title: "Wall-E",year:2022},
              {title: "Pulp Fiction",year:2022},
              {title: "Matrix",year:2022},
              {title: "1670",year:2022},
          ]);


       function dodajfilm(event) {
          
        if(message != 'Tytul jest ok')
        {
          alert(message);
        }else
                if(year.length<1)
           alert('brak podanie roku');

          else
          {
            const newMovie = [
                          {title: title,year:year}
                          ];

            setMovies([...movies, ...newMovie]);

            SetYear('');

            setTitle('');



          }
      
      }

    function handleChange(event) {
        //console.log(event.target.value);
        setTitle(event.target.value);
    }



    let message='';
    if(title.length>10)
        {
           message='Tytul jest za dlugi';
        }
        else if(title.length>5)
        {
          
         message='Tytul jest ok';
        }
       
       else if(title.length>0)
       {
        message='Tytul jest za krotki';
       }else
        message='';

    return (

        <div className="container">

             <MoviesList movies={movies}/>

            <button  onClick={(event=>setshowForm(1))} >Dodaj film</button>

                   {showForm === 1 && (
  <MovieForm
    onMovieSubmit={(movie) => {
      setMovies([...movies, movie]);
      setshowForm(0);
    }}
  />
)}

        </div>
    



        ); 
}

export default App;