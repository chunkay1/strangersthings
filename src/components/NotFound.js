import styles from "./NotFound.module.css"

function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeader}>Page Not Found</h1>
            <img className={styles.image} src={'https://media.tenor.com/nEP6ovplEd8AAAAj/so-really.gif'} alt='lost' />
            <h3 className={styles.subHeader}>Try using the links above!</h3>
        </div>
    )
}

export default NotFound; 