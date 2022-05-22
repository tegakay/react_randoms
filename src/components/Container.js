import React,{useState,useEffect} from "react";
import Card from "./Card";

export default function Container(props){
    const [imdbList, setImdbList] = useState()

    var status = props.type;
    console.log("s",status)

    
        
        useEffect(()=>{

            
            if(status ==="home"){
                //fetch('https://imdb-api.com/en/API/InTheaters/k_3lc4097t')
                fetch('https://api.imgflip.com/get_memes')
                .then(res=>res.json())
                .then(data=>setImdbList(data.data.memes))
                 
             //      return      
            }

        },[])

    
    




       console.log("stuff",imdbList)

       const imdblistdata = imdbList.map(cards=>{
        return(
            <li>
                 <Card
            key = {cards.id}
            name = {cards.name}
            url = {cards.url}
             />
            </li>
           
        )

       })
  
// {imdblistdata}
    return(
       <ul className="list-items">
           
           {imdblistdata}
       </ul>
    )
}