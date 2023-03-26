import { Link } from 'react-router-dom'
import styles from './CompanyDetails.module.css'
import { useAuthContext } from "../../contexts/AuthContext";
export default function Company({
    setDeleteCompany,
    setEditCompany,
    _id,
    companyName,
    email,
    _ownerId,
    logoUrl
}) {
    const { authToken } = useAuthContext();
    return (
        <div className={["col-lg-4"] + " " + ["col-md-6"]+ " "+ ["portfolio-item"]+ " " + ["filter-app"]}>
            <div className={styles["portfolio-wrap"]}>
                <img src={logoUrl} className="img-fluid" alt="companyLogo" />
                <div className={styles["portfolio-info"]}>
                    <h4>{companyName}</h4>
                    <p>{email}</p>
                    <div className={styles["portfolio-links"]}>
                        <Link to={"/companies/" + _id} title="More Details"><i className="bx bx-link" /></Link>
                        {authToken.userId === _ownerId && (<>
                        <button data-gallery="portfolioGallery" className={styles["portfolio-lightbox"]} title="Edit" onClick={()=>setEditCompany(_id)}><i className="bx bx-edit" /></button>
                        <button title="Delete" onClick={()=>setDeleteCompany(_id)}><i className="bx bxs-trash" /></button></>)}                       
                                                
                    </div>
                </div>
            </div>
        </div>

    )
}