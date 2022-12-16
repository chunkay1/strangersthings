// import { logIn } from "../api/getRequests"

function LogIn() {
    return (
        <>
            <h1>Log In Page</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}
            >
                <label for="username">Username</label>
                <input type="text" placeholder="Enter Username" id="username" required />

                <label for="password">Password</label>
                <input type="password" placeholder="Enter Password" id="password" required />

                <button>Log In</button>
            </form>
        </>
    )
}

export default LogIn;