import React,{useState,useEffect,useContext} from "react";
import NoteList from "./NoteList";
import BookContext from "./BookContext";

export default function Container(props){
    
    const [theme] = useContext(BookContext)
    console.log(theme)
    const [imdbList, setImdbList] = useState()
    const [Loading,setLoading] = useState(true)


 

       
          //fetch('https://imdb-api.com/en/API/InTheaters/k_3lc4097t')
        useEffect(()=>{

            
            fetchreq();

        },[])

        const fetchreq = () =>{
           
               
                fetch('https://api.imgflip.com/get_memes')
                .then(res=>res.json())
                .then(data=>setImdbList(data.data.memes))
                .then(data=>{return setLoading(false)})
                
            
        }
    

        if (Loading) {
            return <div className="App">Loading...</div>;
          }
    
return(
    <div className={theme ? 'light':'dark'}>
        <NoteList 
    notes ={imdbList}
    />
    </div>
    
)
   
}