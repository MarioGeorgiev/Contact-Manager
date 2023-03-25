import { useState } from "react"
import styles from './RegisterLogin.module.css'
import * as api from "../../services/api"
import {  useNavigate } from "react-router-dom"
export default function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const onChangeHanler = (e)=> {
        setValues(state=> ({...state, [e.target.name]: e.target.value}))

    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log("Click")
        const result = await api.login(values.email,values.password)

        navigate('/companies')
    }
    return (
        <>
            
            <div className={styles["login-page"]}>
                <div className={styles["form"]}>
                    <form className={styles["login-form"]} onSubmit={(e)=>onSubmitHandler(e)}>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="email" name="email" value={values.email} onChange={(e)=>onChangeHanler(e)}/>
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="password" name="password" value={values.password} onChange={(e)=>onChangeHanler(e)}/>
                        <button>Login</button>
                    </form>
                </div>
            </div>

        </>


    )
}