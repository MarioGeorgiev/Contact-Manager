import styles from './Employee.module.css'
export default function Employee({
    setShowDeleteEmployee,
    _id,
    firstName,
    lastName,
    email,
    phone,
    position,
    imageUrl,
    created
}) {
    
    return (<tr>
        <td>
            <img src={imageUrl} alt="Peter's profile" className={styles["image"]} />
        </td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{position}</td>
        <td>{created}</td>
        <td className="actions">
            <button className="bx bx-edit" title="Edit">
            </button>
            <button className="bx bxs-trash" title="Delete" onClick={()=>setShowDeleteEmployee(_id)}>
            </button>            
        </td>
    </tr>)
}