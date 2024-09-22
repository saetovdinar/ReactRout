
import Notes from './pages/components/Notes';
import CreateNote from './pages/components/CreateNote';
import CurrentNote from './pages/components/CurrentNote';
import { useState, useEffect } from 'react';
import EditNote from './pages/components/EditNote';
import { getPosts, getPostByID, addPost, deletePost, editPost } from './api/ServerApi';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'


export default function App() {
  const [notes, setNotes] = useState([])
  
  const [currentPost, setCurrentPost] = useState({
    id: '',
    content: ''
  })
  
  
  useEffect( ()=> {
    getPosts()
  .then((response) => {
    setNotes(response)
    
  })
  }, [])

  

 

  const [textInput, setTextInput] = useState({
    value: ''
  })
 
  const [editInput, setEditInput] = useState({
    value: ''
  })
  const changeCreateNote = (e)  =>{
    setTextInput({value: e.target.value})
  }

  const changeEditNote = (e)  =>{
    setEditInput({value: e.target.value})
  }


  const addNoteOnCLick = () => {
    addPost({content: textInput.value})
    .then(() => {
      getPosts()
      .then((response) => {
        setNotes(response)
        textInput.value = ''
      })
    })
  }

  const editPostHandler = () => {
    editPost(currentPost.id, {content: editInput.value})
    .then(() => {
      getPosts()
      .then((response) => {
        setNotes(response)
      })
    })
  }

    const fixCurrentId = (event) => {
      getPostByID(event.currentTarget.id)
      .then((response) => {
    
        setCurrentPost({
          id: response.post.id,
          content: response.post.content
        })
        setEditInput({value: response.post.content})
      })
     
    
   
    }
  const deleteNoteOnClick = (event) => {

    deletePost(currentPost.id)
    .then(() => {
      getPosts()
      .then((response) => {
        setNotes(response)
    })
    
    })

  
   
  }


  const createNotesProps = {
    changeCreateNote: changeCreateNote,
    text: textInput,
    addNote: addNoteOnCLick,
  }

  return (
    <div >
    <Router>
    <Routes>
        <Route exact path="/" element={<Notes notes={notes} fixCurrentId={fixCurrentId} />}/>
        <Route exact path="posts/new" element= {<CreateNote {...createNotesProps}/>}/>
        <Route exact path="posts/:id" element= {<CurrentNote currentPost={currentPost} deleteOnClick={deleteNoteOnClick}/>}/>
        <Route exact path="edit" element= {<EditNote editInput={editInput} changeEditNote={changeEditNote} editPostHandler={editPostHandler} />}/>
        <Route exact path="*" element= {404}/>
    </Routes>
     
    </Router>
     

      
    </div>
  );
}