import styles from './CompanyDetails.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Nav from '../Navigation/Nav';
import CreateCompany from './CreateCompany';
export default function CompaniesList() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    const [addCompany, setAddCompany] = useState(false)
    return (
        <>
        {addCompany && <CreateCompany setAddCompany={setAddCompany}/>}
        <Nav/>
        <section id={styles["portfolio"]} className={styles["portfolio"]}>
            
            <div className={styles["container"]}>
                <div className={['section-title'] + " " + ["aos-init"]+ " " +["aos-animate"]} data-aos="fade-up">
                    <h2>Company Details</h2>
                </div>
                <div className={["row"] + " " +  ["aos-init"] + " " + ["aos-animate"]} data-aos="fade-up" data-aos-delay={100}>
                    <div className={["col-lg-12"] + " " + ["d-flex"] + " " +  ["justify-content-center"]}>
                        <ul id={styles["portfolio-flters"]}>
                            <li data-filter="*" className={styles["filter-active"]}>All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>
                <button className={styles["btn-add-portfolio"]} onClick={()=>setAddCompany(true)}>Add new company</button>
                <div className={["row"] + " " + ["portfolio-container"] + " " + ["aos-init"] + " " +  ["aos-animate"]} data-aos="fade-up" data-aos-delay={200} style={{ position: 'relative', height: '1657.8px' }}>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{ position: 'absolute', left: '0px', top: '0px' }}>
                        <div className={styles["portfolio-wrap"]}>
                            <img src="/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="companyLogo" />
                            <div className={styles["portfolio-info"]}>
                                <h4>App 1</h4>
                                <p>App</p>
                                <div className={styles["portfolio-links"]}>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                    <a href="/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className={styles["portfolio-lightbox"]} title="Edit"><i className="bx bx-edit" /></a>
                                    <a href="portfolio-details.html" title="Delete"><i className="bx bxs-trash" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}