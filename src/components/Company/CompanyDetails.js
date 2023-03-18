import { EmployeeList } from "../Employee/EmployeeList";
import styles from './CompanyDetails.module.css'
import Nav from '../Navigation/Nav';
export default function CompanyDetails(){
    return(
      <>
      <Nav />
        <section id={styles["portfolio-details"]} className={styles["portfolio-details"]}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
                <div className={styles["portfolio-info"]}>
                <h3>Project information</h3>
                <ul>
                  <li><strong>Company Name</strong>: Web design</li>
                  <li><strong>Address</strong>: ASU Company</li>
                  <li><strong>VAT Number</strong>: 01 March, 2020</li>
                  <li><strong>Phone</strong>Phone</li>
                  <li><strong>Email</strong>Phone</li>
                  <li><strong>Activities</strong>Phone</li>
                </ul>
              </div>
              <EmployeeList/>
              
            </div>
            <div className="col-lg-4">
              
            </div>
          </div>
        </div>
      </section>
      </>
    )
}