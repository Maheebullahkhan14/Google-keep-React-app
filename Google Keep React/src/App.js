import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Addnote from './Addnote';
import Note from './Note';
import { useState } from 'react';

function App() {
  const [addItem , setItem] = useState([])
  const AddNote = (note) =>{

    setItem((prevdata) =>{
      
        return [...prevdata, note]
        
    })
    
  }
  const DeleteNote = (id) =>{
      addItem.splice(id , 1)
      setItem([...addItem])
    }
    
  

  return (
    <>
      <Nav/>
      <Addnote passNote = {AddNote}/>
      <div className='notesDiv'>
      {
        addItem.map((val ,index) =>{
          return (
            <Note 
            key={index} 
            id ={index} 
            Title={val.Title} 
            Note = {val.Note}
              DeleteNote= {DeleteNote}
            />
          )
        })
      }
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
