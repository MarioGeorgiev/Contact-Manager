import Employee from "./Employee";
import CreateEmployee from "./CreateEmployee";
import { useState, useEffect } from "react";
import * as api from "../../services/api"
import DeleteEmployee from "./DeleteEmployee";
export function EmployeeList({
    companyId
}) {
    //console.log(companyId)
    const [showAddEmployee, setshowAddEmployee] = useState(false)
    const [employees, setEmployees] = useState([{}])
    const [showdeleteEmployee, setShowDeleteEmployee] = useState(false)
    useEffect(() => {
        api.get("http://localhost:3030/jsonstore/companies/" + companyId)
            .then(result => {
                return result.employees ? Object.values(result.employees) : []
            }
            )
            .then(emp => setEmployees(emp))


    }, [companyId])
    const onCreateEmployeeHandler = async (e, values) => {
        e.preventDefault()
        const result = await api.post("http://localhost:3030/jsonstore/companies/" + companyId + "/employees/", {...values, "created": new Date()})

        setEmployees(state => [...state, result])


        setshowAddEmployee(false)
    }
    const onDeleteEmployeeHandler = async (_id) =>{

    }
    return (
        <>
            {showdeleteEmployee && <DeleteEmployee setShowDeleteEmployee={setShowDeleteEmployee} employee = {employees.filter(x=> x._id === showdeleteEmployee)}/>}
            {showAddEmployee && <CreateEmployee setshowAddEmployee={setshowAddEmployee} onCreateEmployeeHandler={onCreateEmployeeHandler} />}
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name
                            </th>
                            <th>
                                Last name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Position
                            </th>
                            <th>
                                Created

                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        { /*(Array.from(employees)).map(x => console.log(x.firstName))*/}
                        {employees.length>0 && Array.from(employees).map(emp => <Employee key={emp._id} {...emp} setShowDeleteEmployee={setShowDeleteEmployee}/>)}



                    </tbody>
                </table>
                {employees.length ===0 && <p>Currently this company do not have employees</p>}
            </div>
            <button className="btn-info" onClick={() => { setshowAddEmployee(true) }}>Add new user</button>
        </>
    )
}