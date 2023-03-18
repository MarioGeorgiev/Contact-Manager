import styles from './CreateDelete.module.css'
import { useState } from "react";
export default function CreateEmployee({
  setshowAddEmployee,
  onCreateEmployeeHandler
  }){
      const [values, setValues] = useState({
        firstName :"",
        lastName :"",
        phone:"",
        email:"",
        photoUrl:""
      })
      const onChangeHandler = (e) => {
      
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
      }
      return(
          <div className={styles["overlay"]}>
          <div className={styles["backdrop"]} />
          <div className={styles["modal"]}>
            <div className={styles["user-container"]}>
              <header className={styles["headers"]}>
                <h2>Create Employee</h2>
                <button className={styles["close"] }  onClick={()=>setshowAddEmployee(false)}>
                 x
                </button>
              </header>
              <form >
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="firstName">First name</label>
                    <div className={styles["input-wrapper"]}>                      
                      <input id="firstName" name="firstName" type="text" value={values.firstName} onChange={(e)=>onChangeHandler(e)} />
                    </div>
                    <p className={styles["form-error"]}>
                     Full name should be at least 3 characters long!
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="lastName">Family name</label>
                    <div className={styles["input-wrapper"]}>
                      
                      <input id="lastName" name="lastName" type="text" value={values.lastName} onChange={(e)=>onChangeHandler(e)}/>
                    </div>
                    <p className={styles["form-error"]}>
                      Address is required!
                    </p>
                  </div>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="phone">Phone</label>
                    <div className={styles["input-wrapper"]}>
                      
                      <input id="email" name="phone" type="text" value={values.phone} onChange={(e)=>onChangeHandler(e)}/>
                    </div>
                    <p className={styles["form-error"]}>Phone is not valid!</p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="email">Email</label>
                    <div className={styles["input-wrapper"]}>
                      
                      <input id="phoneNumber" name="email" type="text" value={values.email} onChange={(e)=>onChangeHandler(e)}/>
                    </div>
                    <p className={styles["form-error"]}>
                        Phone number is not valid!
                        </p>
                  </div>
                </div>
                <div className={styles["form-group long-line"]}>
                  <label htmlFor="photoUrl">Photo</label>
                  <div className={styles["input-wrapper"]}>
                    
                    <input id="photoUrl" name="imageUrl" type="text" value={values.photo} onChange={(e)=>onChangeHandler(e)}/>
                  </div>
                  <p className={styles["form-error"]}>Logo is not valid!</p>
                </div>
                
                <div id={styles["form-actions"]}>
                  <button id={styles["action-save"]} className={styles["btn"]} type="submit" onClick={()=>onCreateEmployeeHandler(values)}>Save</button>
                  <button id={styles["action-cancel"]} className={styles["btn"]} type="button" onClick={()=>setshowAddEmployee(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
  }