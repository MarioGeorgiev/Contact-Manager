import styles from './Employee.module.css'
export default function Employee({
    setShowDeleteEmployee,
    setShowEditEmployee,
    _id,
    firstName,
    lastName,
    email,
    phone,
    position,
    photoUrl,
    created
}) {
    
    return (<tr>
        <td>
            <img src={photoUrl} alt="Peter's profile" className={styles["image"]} />
        </td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{position}</td>
        <td>{created}</td>
        <td className="actions">
            <button className="bx bx-edit" title="Edit"  onClick={()=>setShowEditEmployee(_id)}>
            </button>
            <button className="bx bxs-trash" title="Delete" onClick={()=>setShowDeleteEmployee(_id)}>
            </button>            
        </td>
    </tr>)
}