import styles from './app.module.css';
import Notes from './Notes';
import { useState, useEffect } from 'react';
import { getPosts, getPostByID, addPost, deletePost, editPost } from '@/api/ServerApi';


export interface textInputProp {
  value: string
}


export interface notesProp {
  description: string,
  id: number
}



export default function App(): JSX.Element {
  const [notes, setNotes] = useState<notesProp[]>([])
  
  
  useEffect( ()=> {
    addPost({content: 'first'})
  .then((response) => {
    console.log(response)
    
  })
  }, [])
  
  // useEffect( ()=> {
  //   deletePost(8)
  // .then((response) => {
    
  // })
  // }, [])
  useEffect( ()=> {
    getPosts()
  .then((response) => {
    console.log(response)
    
  })
  }, [])

  const [textInput, setTectInput] = useState<textInputProp>({
    value: ''
  })
 
  
  const changeCreateNote = (e: React.ChangeEvent<HTMLTextAreaElement>): void  =>{
    setTectInput({value: e.target.value})
  }


  const addNoteOnCLick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
 
    
  }

  const deleteNoteOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  

  
   
  }


  const refreshNoteOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  

    
     

   
  }
  const notesProps = {
    notes: notes,
    text: textInput,
    onChangeArea: changeCreateNote,
    addNote: addNoteOnCLick,
    deleteNote: deleteNoteOnClick,
    refreshNote: refreshNoteOnClick
  }

  return (
    <div className={styles.container}>
     
      <Notes {...notesProps}  />
    </div>
  );
}