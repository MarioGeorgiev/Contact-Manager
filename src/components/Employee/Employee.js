
export default function Employee({
}) {

    return (<tr>
        <td>
            <img src='imageUrl' alt="Peter's profile" className="image" />
        </td>
        <td>firstName</td>
        <td>lastName</td>
        <td>email</td>
        <td>phoneNumber</td>
        <td>phoneNumber</td>
        <td>createdAt</td>
        <td className="actions">
            <button className="bx bx-edit" title="Edit">
            </button>
            <button className="bx bxs-trash" title="Delete" >
            </button>            
        </td>
    </tr>)
}