import { logOut } from "../api/accountRequests";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'


function NavBar({ token }) {

    return (
        <>
            <div className={styles.body}>
                <div className={styles.header}>
                    <h1>Stranger's Things</h1>

                </div>

                <br />

                <span className={styles.container}>
                    <ul className={styles.list}>
                        <li className={styles.listItems}><Link to={'/home'}>Home</Link></li>
                        <li className={styles.listItems}><Link to={'/posts'}>Posts</Link></li>
                        <li className={styles.listItems}><Link to={'/profile'}>Profile</Link></li>
                    </ul>


                    {
                        (!token)

                            ?

                            null

                            :

                            <button
                                className={styles.button}
                                onClick={(event) => {
                                    logOut();
                                    window.location.reload()
                                }
                                }>Log Out</button>

                    }
                </span>
            </div>
        </>
    )
}

export default NavBar