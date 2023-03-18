import styles from './Create.module.css'
export default function CreateEmployee({
  setAddCompany
  }){
      return(
          <div className={styles["overlay"]}>
          <div className={styles["backdrop"]} />
          <div className={styles["modal"]}>
            <div className={styles["user-container"]}>
              <header className={styles["headers"]}>
                <h2>Create Company</h2>
                <button className={styles["close"] }  onClick={()=>setAddCompany(false)}>
                 x
                </button>
              </header>
              <form >
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="firstName">First name</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-user"]} /></span>
                      <input id="firstName" name="firstName" type="text" />
                    </div>
                    <p className={styles["form-error"]}>
                     Full name should be at least 3 characters long!
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="lastName">Family name</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-user"]} /></span>
                      <input id="lastName" name="lastName" type="text" />
                    </div>
                    <p className={styles["form-error"]}>
                      Address is required!
                    </p>
                  </div>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="email">Phone</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-envelope"]} /></span>
                      <input id="email" name="email" type="text" />
                    </div>
                    <p className={styles["form-error"]}>Phone is not valid!</p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="phoneNumber">Email</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-phone"]} /></span>
                      <input id="phoneNumber" name="phoneNumber" type="text" />
                    </div>
                    <p className={styles["form-error"]}>
                        Phone number is not valid!
                        </p>
                  </div>
                </div>
                <div className={styles["form-group long-line"]}>
                  <label htmlFor="imageUrl">Photo</label>
                  <div className={styles["input-wrapper"]}>
                    <span><i className={styles["fa-solid fa-image"]} /></span>
                    <input id="imageUrl" name="imageUrl" type="text" />
                  </div>
                  <p className={styles["form-error"]}>Logo is not valid!</p>
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