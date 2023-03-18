import { Link } from 'react-router-dom'
import styles from './CompanyDetails.module.css'
export default function Company({
    _id,
    companyName,
    email,
    logoUrl
}) {
    return (
        <div className={["col-lg-4"] + " " + ["col-md-6"]+ " "+ ["portfolio-item"]+ " " + ["filter-app"]}>
            <div className={styles["portfolio-wrap"]}>
                <img src={logoUrl} className="img-fluid" alt="companyLogo" />
                <div className={styles["portfolio-info"]}>
                    <h4>{companyName}</h4>
                    <p>{email}</p>
                    <div className={styles["portfolio-links"]}>
                        <Link to={"/companies/" + _id} title="More Details"><i className="bx bx-link" /></Link>
                        <a href={"/companies/edit/" + _id} data-gallery="portfolioGallery" className={styles["portfolio-lightbox"]} title="Edit"><i className="bx bx-edit" /></a>
                        <a href={"/companies/delete/" + _id} title="Delete"><i className="bx bxs-trash" /></a>
                    </div>
                </div>
            </div>
        </div>

    )
}