
import './App.css';
import {useState} from "react";
import "milligram";
function App() {
  
        // let title = 'Wall-E';
          const [title, setTitle] = useState('Wall-E');
          const [rok, setRok] = useState('');
          const [movies, setMovies] = useState([
              {title: "Wall-E",rok:2022},
              {title: "Pulp Fiction",rok:2022},
              {title: "Matrix",rok:2022},
              {title: "1670",rok:2022},
          ]);

          
       


       function pokazalert(event) {
          
        if(message!='Tytul jest ok')
        {
          alert(message);
        }
          else
          {
            const newMovie = [
                          {title: title,rok:rok}
                          ];

        setMovies([...movies, ...newMovie]);
          }     
      
      }
        
    function handleChange(event) {
        //console.log(event.target.value);
        setTitle(event.target.value);

      
       
       
        
    }
    //druga metoda : lepsza wersja nie rengeruje sie ponownie.
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
            <h2>My favourite movie for today is {title}</h2>
            <h3>Title</h3>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.rok})</li>)}
            </ul>

          {
            title.length > 0 && <div>{message}</div>

          }
           

              <p> Tytul</p>
            <input type="text" value={title} onChange={(event=>setTitle(event.target.value))}/>
            <p>Rok</p>
            <input type="text" onChange={(event=>setRok(event.target.value))}></input>
            <button type="submit" onClick={pokazalert}>Pokaz tytul filmu</button>
        </div>
    
    
        ); 
}

export default App;
