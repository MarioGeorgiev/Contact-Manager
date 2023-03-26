import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Nav from '../Navigation/Nav';
import CreateCompany from './CreateCompany';
import * as api from '../../services/api'
import Company from "./Company";
import styles from './CompanyDetails.module.css'
import DeleteCompany from "./DeleteCompany";
import EditCompany from "./EditCompany";

export default function CompaniesList() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const [addCompany, setAddCompany] = useState(false)
    // const [companiesList, setCompaniesList] = useState([{}])
    const [companiesList, setCompaniesList] = useState(false)
    const [deleteCompany, setDeleteCompany] = useState(false)
    const [editCompany, setEditCompany] = useState(false)
    useEffect(() => {

        api.get("http://localhost:3030/data/companies")
            .then(c => Object.values(c))
            .then(c => setCompaniesList(c))
            .catch((error) => {
                console.log(error.message)
                setCompaniesList([])
            })



    }, [])
    const onCreateCompany = async (values) => {
        const result = await api.post("http://localhost:3030/data/companies", { ...values })
        setCompaniesList(state => [...state, result])

    }
    const onDeleteCompanyConfirm = async (_id) => {
        await api.del("http://localhost:3030/data/companies/" + _id)
        
        setCompaniesList(state => state.filter(x => x._id !== _id))
        setDeleteCompany(false)
    }
    const onEditCompany = async (_id, values) => {
        const updatedCompany = await api.put("http://localhost:3030/data/companies/" + _id, values)
        setCompaniesList(state => state.map(x => x._id === _id ? updatedCompany : x));
    }


    return (
        <>

            {editCompany && <EditCompany setEditCompany={setEditCompany} editCompany={editCompany} onEditCompany={onEditCompany} />}
            {deleteCompany && <DeleteCompany setDeleteCompany={setDeleteCompany} company={companiesList.filter(x => x._id === deleteCompany)} onDeleteCompanyConfirm={onDeleteCompanyConfirm} />}
            {addCompany && <CreateCompany setAddCompany={setAddCompany} onCreateCompany={onCreateCompany} />}
            <Nav />
            <section id={styles["portfolio"]} className={styles["portfolio"]} >

                <div className={styles["container"]}>
                    <div className={['section-title'] + " " + ["aos-init"] + " " + ["aos-animate"]} data-aos="fade-up">
                        <h2>Company Details</h2>
                    </div>
                    <div className={["row"] + " " + ["aos-init"] + " " + ["aos-animate"]} data-aos="fade-up" data-aos-delay={100}>
                        <div className={["col-lg-12"] + " " + ["d-flex"] + " " + ["justify-content-center"]}>
                            <ul id={styles["portfolio-flters"]}>
                                <li data-filter="*" className={styles["filter-active"]}>All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>
                    <button className={styles["btn-add-portfolio"]} onClick={() => setAddCompany(true)}>Add new company</button>
                    <div className={["row"] + " " + ["portfolio-container"]} data-aos="fade-up" data-aos-delay={200}>
                        {companiesList && companiesList.map(company =>
                            <Company key={company._id}
                                setEditCompany={setEditCompany}
                                setAddCompany={setAddCompany}
                                setDeleteCompany={setDeleteCompany}                                
                                {...company} />)}
                    </div>
                </div>
            </section>


        </>
    )
}