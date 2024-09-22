import { Link } from 'react-router-dom';
import styles from './create.note.module.css'



  export default function CreateNote({text, changeCreateNote, addNote} ) {


  return (
    <div className={styles.container}>
      <div  className={styles.note_cont}>
   
        <textarea value={text.value} onChange={changeCreateNote} className={styles.description} >
       
        </textarea>
     
     
        <Link to='/' className={styles.btn_close}>X</Link>
      </div>
      <Link onClick={addNote} to='/' className={styles.btn_enter}>
        Опубликовать 
      </Link>
    </div>
  );
  }