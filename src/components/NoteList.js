import React from 'react';
import Card from './Card';


export default function NoteList(props) {
    var imdbList = props.notes

   

    const imdblistdata = imdbList.map(cards=>{
        if(imdbList.length >0){
            return(
                <li>
                     <Card
                key = {cards.id}
                id = {cards.id}
                name = {cards.name}
                url = {cards.url}
                 />
                </li>
               
            )
        }
        else{
          return(<h1>No Data Yet</h1>)
        }     

       })
  return (
    <div >
     <ul className='stop-overflow'>
         {imdblistdata}
     </ul>
    
    </div>
  );
}


