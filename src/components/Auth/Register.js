import { useState } from "react"
import Nav from "../Navigation/Nav"
import styles from './RegisterLogin.module.css'
import * as api from "../../services/api"
import {  useNavigate } from "react-router-dom"
export default function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
        repeatPassword:""
    })
    const onChangeHanler = (e)=> {
        setValues(state=> ({...state, [e.target.name]: e.target.value}))

    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log(values.email,values.password)
        const result = await api.register(values.email,values.password)
        navigate('/companies')
       
    }
    return (
        <>
            <Nav />
            <div className={styles["login-page"]}>
                <div className={styles["form"]}>
                     <form className={styles["login-form"]}  onSubmit={(e)=>onSubmitHandler(e)}>
                        <label htmlFor="email">Username</label>
                        <input type="text" placeholder="username" name="email" value={values.email} onChange={(e)=>onChangeHanler(e)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="password" name="password" value={values.password} onChange={(e)=>onChangeHanler(e)}/>
                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <input type="password" placeholder="password" name="repeatPassword" value={values.repeatPassword} onChange={(e)=>onChangeHanler(e)}/>
                        <button>Register</button>
                    </form>
                </div>
            </div>

        </>


    )
}