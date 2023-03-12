import styles from './CreateCompany.module.css'
export function CreateCompany({

  }){
      return(
          <div className={styles["overlay"]}>
          <div className={styles["backdrop"]} />
          <div className={styles["modal"]}>
            <div className={styles["user-container"]}>
              <header className={styles["headers"]}>
                <h2>Edit User/Add User</h2>
                <button className={styles["btn close"]}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                    </path>
                  </svg>
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
                <div id="form-actions">
                  <button id="action-save" className="btn" type="submit">Save</button>
                  <button id="action-cancel" className="btn" type="button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
  }