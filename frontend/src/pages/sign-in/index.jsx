import { Link } from "react-router-dom";

import './signIn.css'
import { useState } from "react";
import { onLogin } from "../../features/login";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../utils/selectors";

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const login = useSelector(selectLogin);



    return (
        <main className="main main-sign-in bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" autoComplete="current-username" onKeyUp={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" autoComplete="current-password" onKeyUp={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Link className="sign-in-button" onClick={() => dispatch(onLogin(username, password))}>Sign In</Link>

                </form>

            </section>
        </main>
    )
}

export default SignIn