import CreatePostBtn from './ButtonCreate';
import NoteItem from './NoteItem';
import styles from './notes.module.css';






export default function Notes({notes, fixCurrentId}) {
  

    return (

      <div className={styles.container}>
        <CreatePostBtn>Создать пост</CreatePostBtn>
        {
          notes.map((item, index)=> {
            return <NoteItem fixCurrentId={fixCurrentId}  key={index} >{item}</NoteItem>
          })
        }
        
      </div>

          
      
    );
  }