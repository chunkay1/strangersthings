import { logOut } from "../api/accountRequests";
import { Link } from "react-router-dom";

function NavBar({ token }) {

    return (
        <>
            <h1>Stranger's Things</h1>

            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
            </ul>

            {
                (!token)

                    ?

                    null

                    :

                    <button
                        onClick={(event) => {
                            logOut();
                            window.location.reload()
                        }
                        }>Log Out</button>

            }
        </>
    )
}

export default NavBar