import { logOut } from "../api/accountRequests";
import NewAccount from "./NewAccount";
import LogIn from "./LogIn";

function NavBar({ token }) {
    return (
        <>
            <h1>Stranger's Things</h1>

            <ul>
                <li>Home</li>
                <li>Posts</li>
                <li>Profile</li>
            </ul>

            {
                (!token)

                    ?

                    <div>
                        <NewAccount />
                        <LogIn />
                    </div>

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