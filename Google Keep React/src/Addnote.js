import React, { useState } from "react";

const Addnote = (props) => {
  const [note , setNote] = useState({
    Title: '',
    Note: ''
  })

  const InputEvent = (event) =>{
    const {name ,value} = event.target
     setNote((prevdata)=>{
        return{
          ...prevdata,
          [name] : value
        }
     })
  }

  const AddEvent = (e) =>{
    e.preventDefault()
    props.passNote(note)
    setNote({
      Title : '',
      Note : ''
    })
  }

  return (
    <div className="AddNote">
      <form>
     
        <input 
        className="Title" 
        name="Title"
        value={note.Title}
        onChange={InputEvent}
        placeholder="Title"></input>

        <textarea 
        name="Note"
        value={note.Note}
        onChange={InputEvent}
        className="Notes"  
        rows="6" column="" 
        placeholder="Enter Note Here..."></textarea>
        <button onClick={AddEvent}><i class="fa-solid fa-plus"></i></button>
        
      </form>
      
    </div>
  );
};

export default Addnote;
