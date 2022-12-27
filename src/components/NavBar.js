import { logOut } from "../api/accountRequests";

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
                token

                    ?

                    <button
                        onClick={(event) => {
                            logOut();
                        }
                        }>Log Out</button>

                    :

                    null
            }

        </>
    )
}

export default NavBar