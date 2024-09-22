import styles from './button.module.css'



export default function Button(props ) {


    return (
      <div style={props.styles} className={styles.container}>
        <button id={props.id} onClick={props.deleteOnClick}  className={styles.btn}>{props.children}</button>
      </div>
    );
  }