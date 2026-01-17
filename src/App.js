
import './App.css';
import {useState} from "react";
import "milligram";
function App() {
  

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
                          {title: title,rok:year}
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
            <h1>My favourite movies to watch</h1>

            <h3>Title</h3>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.rok})</li>)}
            </ul>

           
          <h2>Add movie </h2>

            <label>Tytul </label>

          {
            title.length > 0 && <div>{message}</div>

          }

            <input type="text" value={title} onChange={handleChange} />

            <label>Rok</label>

            <input type="number"  value={year}  onChange={(event=>SetYear(event.target.value))} />

            <button type="submit" onClick={dodajfilm}>Dodaj film</button>
        </div>
    
    
        ); 
}

export default App;