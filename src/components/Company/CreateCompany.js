import { useState } from 'react'
import styles from './CreateDelete.module.css'
export default function CreateCompany({
  setAddCompany,
  onCreateCompany
}) {
  const [values, setValues] = useState({
    companyName: "",
    address: "",
    manager: "",
    VATNumber: "",
    logoUrl: "",
    phone: "",
    email: "",
    
  })
  const [errorsValidation, setErrorsValidation] = useState({
    companyName: false,
    address: false,
    manager:false,
    VATNumber: false,
    logoUrl: false,
    phone: false,
    email:false
  })
  const onChangeHandler = (e) => {
    setValues(state => ({ ...state, [e.target.name]: e.target.value }))
  }
  const onSubmitCompany = (e) => {
    e.preventDefault()
    onCreateCompany(values)
    setAddCompany(false)
  }
  const onFormValidationHandler = (e) => {
    
    if (e.target.name === "companyName" && e.target.value.length < 2) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))      

    }else if (e.target.name === "address" && (e.target.value.length === 0 || e.target.value.trim() === '')) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    } 
    else if (e.target.name === "manager" && (e.target.value.length === 0 || e.target.value.trim() === '')) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    } 
    else if (e.target.name === "VATNumber" && (e.target.value.length === 0 || e.target.value.trim() === '')) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    }
    else if (e.target.name === "logoUrl" && (!e.target.value.startsWith("http")|| !e.target.value.startsWith("https"))) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    }
    else if (e.target.name === "email" && !e.target.value.includes("@")) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    }
    else if (e.target.name === "phone" && (isNaN(e.target.value) || e.target.value.length!==10)) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    }
    else {
      setErrorsValidation(state => ({ ...state, [e.target.name]: false }))
      
    }
    ///console.log(errorsValidation)
  }
  return (
    <div className={styles["overlay"]}>
      <div className={styles["backdrop"]} />
      <div className={styles["modal"]}>
        <div className={styles["user-container"]}>
          <header className={styles["headers"]}>
            <h2>Create Company</h2>
            <button className={styles["close"]} onClick={() => setAddCompany(false)} >
              x
            </button>
          </header>
          <form onSubmit={(e) => onSubmitCompany(e)}>
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="companyName">Company name</label>
                <div className={styles["input-wrapper"]}>

                  <input id="firstName" name="companyName" type="text"
                    value={values.companyName}
                    onChange={(e) => onChangeHandler(e)}
                    onBlur={(e) => onFormValidationHandler(e)} />
                </div>
                
                {errorsValidation.companyName === true &&
                  <p className={styles["form-error"]}>Company should be at least 2 characters long!</p>
                }
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="address">Address</label>
                <div className={styles["input-wrapper"]}>

                  <input id="lastName" name="address" type="text" value={values.address} 
                  onChange={(e) => onChangeHandler(e)}
                  onBlur={(e) => onFormValidationHandler(e)}/>
                </div>
                {errorsValidation.address === true &&
                <p className={styles["form-error"]}>
                  Address is required!
                </p>}
              </div>
            </div>
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="manager">Manager</label>
                <div className={styles["input-wrapper"]}>

                  <input id="manager" name="manager" type="text" value={values.manager} 
                  onChange={(e) => onChangeHandler(e)}
                  onBlur={(e) => onFormValidationHandler(e)} />
                </div>{errorsValidation.manager === true &&
                <p className={styles["form-error"]}>Manager is required</p>}
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="VATNumber">VAT number</label>
                <div className={styles["input-wrapper"]}>

                  <input id="VATNumber" name="VATNumber" type="text" value={values.VATNumber} 
                  onChange={(e) => onChangeHandler(e)}
                  onBlur={(e) => onFormValidationHandler(e)}
                   />
                </div>{errorsValidation.VATNumber &&
                <p className={styles["form-error"]}>
                  VAT number is not valid!
                </p>}
              </div>
            </div>
            <div className={styles["form-group long-line"]}>
              <label htmlFor="logoUrl">Log Url</label>
              <div className={styles["input-wrapper"]}>

                <input id="logoUrl" name="logoUrl" type="text" value={values.logoUrl} 
                onChange={(e) => onChangeHandler(e)}
                onBlur={(e) => onFormValidationHandler(e)} />
              </div>
              {errorsValidation.logoUrl &&
              <p className={styles["form-error"]}>Logo should start with HTTP or HTTPS</p>}
            </div>
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="phone">Phone</label>
                <div className={styles["input-wrapper"]}>

                  <input id="phone" name="phone" type="text" value={values.phone}
                   onChange={(e) => onChangeHandler(e)}
                   onBlur={(e) => onFormValidationHandler(e)} />
                </div>
                {errorsValidation.phone &&
                <p className={styles["form-error"]}>
                  Phone should have 10 digits!
                </p>}
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="email">Email</label>
                <div className={styles["input-wrapper"]}>

                  <input id="email" name="email" type="text" value={values.email}
                   onChange={(e) => onChangeHandler(e)}
                   onBlur={(e) => onFormValidationHandler(e)} />
                </div>
                {errorsValidation.email &&
                <p className={styles["form-error"]}>
                  Email is required!
                </p>}
              </div>
            </div>
            {/*<div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="activities">Company activitсies</label>
                <div className={styles["input-wrapper"]}>

                  <input id="street" name="activities" type="text" />
                </div>
                <p className={styles["form-error"]}>
                  Street should be at least 3 characters long!
                </p>
              </div>

              </div>*/}

            <div id={styles["form-actions"]}>
              <button id={styles["action-save"]} className={styles["btn"]} type="submit">Save</button>
              <button id={styles["action-cancel"]} className={styles["btn"]} type="button" onClick={() => setAddCompany(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}