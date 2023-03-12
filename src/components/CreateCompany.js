import styles from './CreateCompany.module.css'
export function CreateCompany({

  }){
      return(
          <div className={styles["overlay"]}>
          <div className={styles["backdrop"]} />
          <div className={styles["modal"]}>
            <div className={styles["user-container"]}>
              <header className={styles["headers"]}>
                <h2>Create Company</h2>
                <button className={styles["close"] } >
                 x
                </button>
              </header>
              <form >
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="firstName">Company name</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-user"]} /></span>
                      <input id="firstName" name="firstName" type="text" />
                    </div>
                    <p className={styles["form-error"]}>
                     Company should be at least 3 characters long!
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="lastName">Address</label>
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
                    <label htmlFor="email">Manager</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-envelope"]} /></span>
                      <input id="email" name="email" type="text" />
                    </div>
                    <p className={styles["form-error"]}>Email is not valid!</p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="phoneNumber">VAT number</label>
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
                  <label htmlFor="imageUrl">Log Url</label>
                  <div className={styles["input-wrapper"]}>
                    <span><i className={styles["fa-solid fa-image"]} /></span>
                    <input id="imageUrl" name="imageUrl" type="text" />
                  </div>
                  <p className={styles["form-error"]}>Logo is not valid!</p>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="country">Phone</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-map"]} /></span>
                      <input id="country" name="country" type="text" />
                    </div>
                    <p className={styles["form-error"]}>
                      Phone should have 10 digits!
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="city">Email</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-city"]} /></span>
                      <input id="city" name="city" type="text" />
                    </div>
                    <p className={styles["form-error"]}>
                      Email is required!
                    </p>
                  </div>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="street">Company activitсies</label>
                    <div className={styles["input-wrapper"]}>
                      <span><i className={styles["fa-solid fa-map"]} /></span>
                      <input id="street" name="street" type="text" />
                    </div>
                    <p className={styles["form-error"]}>
                      Street should be at least 3 characters long!
                    </p>
                  </div>
                  
                </div>
                <div id={styles["form-actions"]}>
                  <button id="action-save" className={styles["btn"]} type="submit">Save</button>
                  <button id="action-cancel" className={styles["btn"]} type="button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
  }