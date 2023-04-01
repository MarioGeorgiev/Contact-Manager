import styles from './CreateDelete.module.css'
import { useState, useEffect } from "react";
import * as api from "../../services/api"
export default function EditEmployee({
  setShowEditEmployee,
  showEditEmployee,
  onEditEmployee,
  companyId
}) {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    position: "",
    photoUrl: ""
  })
  const [errorsValidation, setErrorsValidation] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    position: false,
    photoUrl: false
  })
  const onFormValidationHandler = (e) => {

    if (e.target.name === "firstName" && e.target.value.length < 2) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))

    } else if (e.target.name === "lastName" && e.target.value.length < 2) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    } else if (e.target.name === "position" && e.target.value.length < 2) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    } else if (e.target.name === "photoUrl" && (!e.target.value.startsWith("http") || !e.target.value.startsWith("https"))) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    }
    else if (e.target.name === "email" && !e.target.value.includes("@")) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    }
    else if (e.target.name === "phone" && (isNaN(e.target.value) || e.target.value.length !== 10)) {
      setErrorsValidation(state => ({ ...state, [e.target.name]: true }))
    }
    else {
      setErrorsValidation(state => ({ ...state, [e.target.name]: false }))

    }
    ///console.log(errorsValidation)
  }
  useEffect(() => {
    api.get("http://localhost:3030/data/employees/" + showEditEmployee)
      .then(result => setValues({
        firstName: result.firstName,
        lastName: result.lastName,
        phone: result.phone,
        email: result.email,
        position: result.position,
        photoUrl: result.photoUrl,

      })
      )

  }, [companyId, showEditEmployee])
  const onChangeHandler = (e) => {

    setValues(state => ({ ...state, [e.target.name]: e.target.value }))
  }
  const EditEmployee = (e) => {
    e.preventDefault()
    if (Object.values(errorsValidation).indexOf(true) > -1) {
        alert("You need to fill all values properly")
    } else {
      onEditEmployee(showEditEmployee, values)
      setShowEditEmployee(false)
    }
  }
  return (
    <div className={styles["overlay"]}>
      <div className={styles["backdrop"]} />
      <div className={styles["modal"]}>
        <div className={styles["user-container"]}>
          <header className={styles["headers"]}>
            <h2>Edit Employee</h2>
            <button className={styles["close"]} onClick={() => setShowEditEmployee(false)}>
              x
            </button>
          </header>
          <form >
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="firstName">First name</label>
                <div className={styles["input-wrapper"]}>
                  <input id="firstName" name="firstName" type="text"
                    value={values.firstName}
                    onChange={(e) => onChangeHandler(e)}
                    onBlur={(e) => onFormValidationHandler(e)} />
                </div>
                {errorsValidation.firstName && <p className={styles["form-error"]}>
                  First name should be at least 3 characters long!
                </p>}
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="lastName">Family name</label>
                <div className={styles["input-wrapper"]}>

                  <input id="lastName" name="lastName" type="text"
                    value={values.lastName}
                    onChange={(e) => onChangeHandler(e)}
                    onBlur={(e) => onFormValidationHandler(e)} />
                </div>
                {errorsValidation.lastName && <p className={styles["form-error"]}>
                  Last name should be at least 3 characters long!
                </p>}
              </div>
            </div>
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="phone">Phone</label>
                <div className={styles["input-wrapper"]}>

                  <input id="phone" name="phone" type="text"
                    value={values.phone}
                    onChange={(e) => onChangeHandler(e)}
                    onBlur={(e) => onFormValidationHandler(e)} />
                </div>
                {errorsValidation.phone && <p className={styles["form-error"]}>
                  Phone is not valid!
                </p>}
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="email">Email</label>
                <div className={styles["input-wrapper"]}>

                  <input id="email" name="email" type="text"
                    value={values.email}
                    onChange={(e) => onChangeHandler(e)}
                    onBlur={(e) => onFormValidationHandler(e)} />
                </div>
                {errorsValidation.email && <p className={styles["form-error"]}>
                  Email is not valid!
                </p>}
              </div>
            </div>
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="position">Position</label>
                <div className={styles["input-wrapper"]}>

                  <input id="position" name="position" type="text"
                    value={values.position}
                    onChange={(e) => onChangeHandler(e)}
                    onBlur={(e) => onFormValidationHandler(e)} />
                </div>
                {errorsValidation.position &&
                  <p className={styles["form-error"]}>
                    Position is required!
                  </p>}
              </div>
            </div>
            <div className={styles["form-group long-line"]}>
              <label htmlFor="photoUrl">Photo</label>
              <div className={styles["input-wrapper"]}>

                <input id="photoUrl" name="photoUrl" type="text"
                  value={values.photoUrl}
                  onChange={(e) => onChangeHandler(e)}
                  onBlur={(e) => onFormValidationHandler(e)} />
              </div>
              {errorsValidation.photoUrl &&
                <p className={styles["form-error"]}>
                  Photo URL is not valid!
                </p>}
            </div>

            <div id={styles["form-actions"]}>
              <button id={styles["action-save"]} className={styles["btn"]} type="submit" onClick={(e) => EditEmployee(e)}>Save</button>
              <button id={styles["action-cancel"]} className={styles["btn"]} type="button" onClick={() => setShowEditEmployee(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}