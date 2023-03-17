import { useState } from 'react'
import styles from './Create.module.css'
export default function CreateEmployee({
  setAddCompany,
  onCreateCompany
  }){
    const [values,setValues] = useState({
      companyName:"",
      address:"",
      manager:"",
      VATNumber:"",
      logoUrl:"",
      phone:"",
      email:""
    })
    const onChangeHandler = (e)=>{
      setValues(state=> ({...state,[e.target.name]:e.target.value}))
    }
    const onSubmitCompany = (e)=>{
      e.preventDefault()
      onCreateCompany(values)
      setAddCompany(false)
    }
      return(
          <div className={styles["overlay"]}>
          <div className={styles["backdrop"]} />
          <div className={styles["modal"]}>
            <div className={styles["user-container"]}>
              <header className={styles["headers"]}>
                <h2>Create Company</h2>
                <button className={styles["close"] } onClick={()=>setAddCompany(false)} >
                 x
                </button>
              </header>
              <form onSubmit={(e) => onSubmitCompany(e)}>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="companyName">Company name</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-user"]} /></span>
                      <input id="firstName" name="companyName" type="text" value={setValues.companyName} onChange={(e)=>onChangeHandler(e)}/>
                    </div>
                    <p className={styles["form-error"]}>
                     Company should be at least 3 characters long!
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="address">Address</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-user"]} /></span>
                      <input id="lastName" name="address" type="text" value={setValues.address} onChange={(e)=>onChangeHandler(e)} />
                    </div>
                    <p className={styles["form-error"]}>
                      Address is required!
                    </p>
                  </div>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="manager">Manager</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-envelope"]} /></span>
                      <input id="email" name="manager" type="text" value={setValues.manager} onChange={(e)=>onChangeHandler(e)}/>
                    </div>
                    <p className={styles["form-error"]}>Email is not valid!</p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="VATNumber">VAT number</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-phone"]} /></span>
                      <input id="phoneNumber" name="VATNumber" type="text" value={setValues.VATNumber} onChange={(e)=>onChangeHandler(e)} />
                    </div>
                    <p className={styles["form-error"]}>
                        Phone number is not valid!
                        </p>
                  </div>
                </div>
                <div className={styles["form-group long-line"]}>
                  <label htmlFor="logoUrl">Log Url</label>
                  <div className={styles["input-wrapper"]}>
                    <span><i className={styles["fa-solid fa-image"]} /></span>
                    <input id="imageUrl" name="logoUrl" type="text" value={values.logoUrl} onChange={(e)=>onChangeHandler(e)}/>
                  </div>
                  <p className={styles["form-error"]}>Logo is not valid!</p>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="phone">Phone</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-map"]} /></span>
                      <input id="country" name="phone" type="text" value={setValues.phone} onChange={(e)=>onChangeHandler(e)}/>
                    </div>
                    <p className={styles["form-error"]}>
                      Phone should have 10 digits!
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="email">Email</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-city"]} /></span>
                      <input id="city" name="email" type="text" value={setValues.email} onChange={(e)=>onChangeHandler(e)}/>
                    </div>
                    <p className={styles["form-error"]}>
                      Email is required!
                    </p>
                  </div>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="activities">Company activitсies</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-map"]} /></span>
                      <input id="street" name="activities" type="text" />
                    </div>
                    <p className={styles["form-error"]}>
                      Street should be at least 3 characters long!
                    </p>
                  </div>
                  
                </div>
                <div id={styles["form-actions"]}>
                  <button id="action-save" className={styles["btn"]} type="submit">Save</button>
                  <button id="action-cancel" className={styles["btn"]} type="button" onClick={()=>setAddCompany(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
  }