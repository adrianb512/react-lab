
import './App.css';
import {useState} from "react";

function App() {
  
        // let title = 'Wall-E';
          const [title, setTitle] = useState('Wall-E');

          const [info, setInfo] = useState('');

          const movies = [
              {title: "Wall-E"},
              {title: "Pulp Fiction"},
              {title: "Matrix"},
              {title: "1670"},
          ];


       function pokazalert(event) {
          alert(title);
        }
        
    function handleChange(event) {
        //console.log(event.target.value);
        setTitle(event.target.value);

        if(event.target.value.length>10)
        {
           setInfo('Tytul jest za dlugi');
        }
        else if(event.target.value.length>5)
        {
          
          setInfo('Tytul jest ok ');
        }
       
       else if(event.target.value.length>0)
       {
        setInfo('Tytul jest za krotki ');
       }else
        setInfo('');
          
       
       
        
    }
    //druga metoda :
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
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <h3>Title</h3>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>

              <p>{info}</p>
              <p>{message}</p>
            <input type="text" value={title} onChange={handleChange}/>
            <button type="submit" onClick={pokazalert}>Pokaz tytul filmu</button>
        </div>
    
    
        );
}

export default App;
