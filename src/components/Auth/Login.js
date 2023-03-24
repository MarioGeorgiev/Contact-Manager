import Nav from "../Navigation/Nav"
import styles from './RegisterLogin.module.css'
export default function register() {

    return (
        <>
            <Nav />
            <div className={styles["login-page"]}>
                <div className={styles["form"]}>
                     <form className={styles["login-form"]}>
                        <label>Username</label>
                        <input type="text" placeholder="username" />
                        <label>Password</label>
                        <input type="password" placeholder="password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>

        </>


    )
}