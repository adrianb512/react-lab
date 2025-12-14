
import './App.css';
import {useState} from "react";

function App() {
  
        // let title = 'Wall-E';
          const [title, setTitle] = useState('Wall-E');

          const [info, setInfo] = useState('');

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

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <h2>{info}</h2>
        
            <input type="text" value={title} onChange={handleChange}/>
            <button type="submit" onClick={pokazalert}>Pokaz tytul filmu</button>
        </div>
    
    
        );
}

export default App;
