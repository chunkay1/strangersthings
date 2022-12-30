import NewAccount from "./NewAccount"
import LogIn from "./LogIn"
import { Link } from "react-router-dom"
import styles from "./Home.module.css"

function Home(props) {
    const token = props.token;
    return (

        <>

            {
                (!token)
                    ?
                    <>
                        <div className={styles.welcome}>
                            <h3 className={styles.welcomeHeaders}>Welcome Stranger!</h3>

                            <h3 className={styles.welcomeHeaders}>You can sign-in/create an account below, or check out what's for sale <Link className={styles.links} to={'/posts'}>here</Link>.</h3>
                        </div>

                        <div className={styles.forms}>
                            <NewAccount />
                            <LogIn />
                        </div>

                    </>
                    :

                    <>
                        <div className={styles.welcome}>


                            <h3 className={styles.welcomeHeaders}>Welcome back stranger!</h3>
                            <br />
                            <h4 className={styles.welcomeHeaders}>You can message sellers and post your things<Link to={'/posts'}>here</Link>.</h4>
                            <h4 className={styles.welcomeHeaders}>Otherwise, check your messages on your<Link to={'/profile'}>profile</Link>.</h4>
                        </div>
                    </>

            }
        </>
    )
}

export default Home
