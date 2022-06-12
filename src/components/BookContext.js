import { Children, createContext, useState } from "react";

const BookContext = createContext();

export function BookProvider(props){
    const [theme,setTheme] = useState(false)

    const modifyState = ()=>{
        setTheme((prevTheme)=>!prevTheme)
    }
    return(
        <BookContext.Provider value ={[theme,modifyState]}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContext;
