import styles from './CreateDelete.module.css'
export default function DeleteCompany({
  setDeleteCompany,
  onDeleteCompanyConfirm,
  company
}) {
  return (
    <div className={styles["overlay"]}>
      <div className={styles["backdrop"]} />
      <div className={styles["modal"]}>
        <div className={styles["user-container"]}>
          <header className={styles["headers"]}>
            <div>
              <h2>Are you sure you want to delete this company?</h2>
              <h6>This will delete the company and all of it's employees</h6>
              
              </div>
            <button className={styles["close"]} onClick={()=>setDeleteCompany(false)}>
              x
            </button>
          </header>
          <div className="row gy-4">
            <div className="col-lg-8">
                <div className={styles["portfolio-info"]}>
                <h3>Company information</h3>
                <ul>
                  <li><strong>Company Name</strong>:  {company[0].companyName}</li>
                  <li><strong>Address</strong>: {company[0].address}</li>
                  <li><strong>VAT Number</strong>: {company[0].VATNumber}</li>
                  <li><strong>Phone</strong>: {company[0].phone}</li>
                  <li><strong>Email</strong>: {company[0].email}</li>
                  {/*<li><strong>Activities</strong>: {company[0].activities}</li>*/}
                </ul>
              </div>          
              
            </div>
          <div id={styles["form-actions"]}>
            <button id={styles["action-save"]} className={styles["btn"]} type="submit" onClick={()=>onDeleteCompanyConfirm(company[0]._id)}>Save</button>
            <button id={styles["action-cancel"]} className={styles["btn"]} type="button" onClick={()=>setDeleteCompany(false)}>
              Cancel
            </button>
          </div>
        </div >
      </div >
    </div >
    </div>
  )
}