import React from 'react'

const Note = (props) => {
  const DeleteItem = () =>{
    props.DeleteNote(props.id)
    // console.log(props.id)
  }
  return (
    <>
        <div className='Note'>
        <h5 className='Notetitle'>{props.Title}</h5>
        <p className='mynotes'>{props.Note}</p>
        <button className='Delbtn' onClick={DeleteItem}><i class="fa-solid fa-trash"></i></button>
        </div>
    </>
  )
}

export default Note
