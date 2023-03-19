import styles from './CreateDelete.module.css'
export default function DeleteEmployee({
  onDeleteEmployeeHandler,
  setShowDeleteEmployee,
  employee
}) {

  return (
    <div className={styles["overlay"]}>
      <div className={styles["backdrop"]} />
      <div className={styles["modal"]}>
        <div className={styles["user-container"]}>
          <header className={styles["headers"]}>
            <div>
              <h2>Are you sure you want to delete this employee?</h2>
              <h6>He can start to be productive at some point :(</h6>
              
              </div>
            <button className={styles["close"]} onClick={()=>setShowDeleteEmployee(false)}>
              x
            </button>
          </header>
          <div className="row gy-4">
            <div className="col-lg-8">
                <div className={styles["portfolio-info"]}>
                <h3>Company information</h3>
                <ul>
                  <li><strong>First Name</strong>: {employee[0].firstName} </li>
                  <li><strong>Last Name</strong>: {employee[0].lastName}</li>
                  <li><strong>Email</strong>: {employee[0].email}</li>
                  <li><strong>Phone</strong>: {employee[0].phone}</li>
                  <li><strong>Position</strong>: {employee[0].position}</li>
                  <li><strong>Created</strong>: {employee[0].created}</li>
                </ul>
              </div>          
              
            </div>
          <div id={styles["form-actions"]}>
            <button id={styles["action-save"]} className={styles["btn"]} type="submit" onClick={()=>onDeleteEmployeeHandler(employee[0]?._id)}>Save</button>
            <button id={styles["action-cancel"]} className={styles["btn"]} type="button" onClick={()=>setShowDeleteEmployee(false)}>
              Cancel
            </button>
          </div>
        </div >
      </div >
    </div >
    </div>
  )
}