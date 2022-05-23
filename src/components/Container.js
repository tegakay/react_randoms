import React,{useState,useEffect} from "react";
import NoteList from "./NoteList";

export default function Container(props){
    const [imdbList, setImdbList] = useState()
    const [Loading,setLoading] = useState(true)

    var status = props.type;
 

       
          //fetch('https://imdb-api.com/en/API/InTheaters/k_3lc4097t')
        useEffect(()=>{

            
            fetchreq();

        },[])

        const fetchreq = () =>{
            if(status ==="home"){
               
                fetch('https://api.imgflip.com/get_memes')
                .then(res=>res.json())
                .then(data=>setImdbList(data.data.memes))
                .then(data=>{return setLoading(false)})
                
            }
        }
    

        if (Loading) {
            return <div className="App">Loading...</div>;
          }


       console.log("stuff",imdbList)

    
return(
    <NoteList 
    notes ={imdbList}/>
)
   
}