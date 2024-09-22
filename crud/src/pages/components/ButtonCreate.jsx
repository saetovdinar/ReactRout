import { Link } from 'react-router-dom';
import styles from './button.create.module.css'


export default function CreatePostBtn({children} ) {


    return (
      <div>
        <Link to='posts/new'  className={styles.btn}>{children}</Link>
      </div>
    );
  }