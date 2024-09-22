import { Link } from 'react-router-dom';
import styles from './create.note.module.css'



  export default function EditNote({ changeEditNote, editInput, editPostHandler} ) {


  return (
    <div className={styles.container}>
      <div  className={styles.note_cont}>
   
        <textarea value={editInput.value}  onChange={changeEditNote} className={styles.description} >
       
        </textarea>
     
     
        <Link to='/posts/id' className={styles.btn_close}>X</Link>
      </div>
      <Link to='/' onClick={editPostHandler} className={styles.btn_enter}>
        Опубликовать 
      </Link>
    </div>
  );
  }