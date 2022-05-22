import React,{useState} from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Container from './components/Container';
import './App.css';

function App() {

  const [clicked, setClicked] = useState("home")
  return (
    <div>
      <Navbar />
    <Container
    type ={clicked} />
    
    </div>
  );
}

export default App;
