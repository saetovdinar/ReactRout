import { Link } from 'react-router-dom';
import styles from './create.note.module.css'



  export default function CurrentNote({currentPost, deleteOnClick} ) {


  return (
    <div className={styles.container}>
      <div  className={styles.note_cont}>
   
        <div   className={styles.description} >
        {currentPost.content}
        </div>
     
     
       
      </div>
      <Link to='/edit' className={styles.btn_enter}>
        Изменить  
      </Link>
      <Link  to='/' onClick={deleteOnClick} className={styles.btn_enter}>
        Удалить  
      </Link>
    </div>
  );
  }