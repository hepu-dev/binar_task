import styles from './hello.module.css'

function Hello(props) {
    const message = 'hello world'
    return (
        <>
            <h1 className={styles.title}>{props.message}</h1>
            <h3>{props.name}</h3>
            <h3>{props.class}</h3>
        </>
    );
  }
  
  export default Hello;