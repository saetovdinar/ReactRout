import styles from './note.item.module.css'
import { Link } from 'react-router-dom';


  export default function NoteItem({ children, fixCurrentId} ) {
  const hours = String(new Date(children.created).getHours())
  const min = String(new Date(children.created).getMinutes())

    return (
    <Link onClick={fixCurrentId} to={`/posts/${children.id}`} id={children.id} className={styles.container}>
    <div  className={styles.note_cont}>
      <div className={styles.description} >{children.content}</div>
      <div className={styles.time} >{`${hours} : ${min}`}</div>
      
    </div>
  </Link>
    );
  }