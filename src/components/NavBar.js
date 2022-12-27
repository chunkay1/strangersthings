import { logOut } from "../api/accountRequests";
import { Link } from "react-router-dom";
// import NewAccount from "./NewAccount";
// import LogIn from "./LogIn";

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
                        }
                        }>Log Out</button>

            }


            {/* {
                token

                    ?

                    <button
                        onClick={(event) => {
                            logOut();
                        }
                        }>Log Out</button>

                    :

                    null
            } */}

        </>
    )
}

export default NavBar