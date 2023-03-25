import { EmployeeList } from "../Employee/EmployeeList";
import styles from './CompanyDetails.module.css'
import Nav from '../Navigation/Nav';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../../services/api"
export default function CompanyDetails(){
  const {companyId} = useParams()
  useEffect(()=>{
    api.get("http://localhost:3030/data/companies/" + companyId)
    .then(result => 
      setCompany(result))      
    
  },[companyId])
  
    const [company, setCompany] = useState({});
    
    return(
      <>
      <Nav />
        <section id={styles["portfolio-details"]} className={styles["portfolio-details"]}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
                <div className={styles["portfolio-info"]}>
                <h3>Company information</h3>
                <ul>
                  <li><strong>Company Name</strong>: {company.companyName}</li>
                  <li><strong>Address</strong>: {company.address}</li>
                  <li><strong>VAT Number</strong>: {company.VATNumber}</li>
                  <li><strong>Phone</strong>: {company.phone}</li>
                  <li><strong>Email</strong>: {company.email}</li>
                  <li><strong>Activities</strong>: {company.activities}</li>
                </ul>
              </div>
              <h2>Employees</h2>
             
              <EmployeeList employeesCurrent={company.employees} companyId={companyId}/>
              
            </div>
            <div className="col-lg-4">
              
            </div>
          </div>
        </div>
      </section>
      </>
    )
}