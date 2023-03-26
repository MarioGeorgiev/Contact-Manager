import Employee from "./Employee";
import CreateEmployee from "./CreateEmployee";
import { useState, useEffect } from "react";
import * as api from "../../services/api"
import DeleteEmployee from "./DeleteEmployee";
import EditEmployee from "./EditEmployee";
import { useAuthContext } from "../../contexts/AuthContext";
export function EmployeeList({
    companyId
}) {
    //console.log(companyId)
    const { authToken } = useAuthContext();
    const [showAddEmployee, setshowAddEmployee] = useState(false)
    const [employees, setEmployees] = useState(false)
    const [showdeleteEmployee, setShowDeleteEmployee] = useState(false)
    const [showEditEmployee, setshowEditEmployee] = useState(false)
    useEffect(() => {
        const search = encodeURIComponent(`companyId="${companyId}"`)
       // console.log("http://localhost:3030/data/employees?where=" + search)
        api.get("http://localhost:3030/data/employees?where=" + search)
            .then(result => {
                //console.log(result)
                //return result?.employees ? result : []                
                return result ? result : []
            }
            )
            .then(emp => setEmployees(emp))


    }, [companyId])
    const onCreateEmployeeHandler = async (e, values) => {
        e.preventDefault()
        const result = await api.post("http://localhost:3030/data/employees/",
            {
                ...values,
                "companyId" : companyId,
                "addedBy": authToken.email,
                "created": new Date()
            })

        setEmployees(state => [...state, result])


        setshowAddEmployee(false)
    }
    const onDeleteEmployeeHandler = async (_id) => {
        await api.del("http://localhost:3030/data/employees/" + _id)
        setShowDeleteEmployee(false)
        setEmployees(state => state.filter(x => x._id !== _id))
    }
    const onEditEmployee = async (_id, values) => {
        const updatedEmployee = await api.put("http://localhost:3030/data/employees/" + _id, values)
        setEmployees(state => state.map(x => x._id === _id ? updatedEmployee : x));

    }
    return (
        <>
            {showEditEmployee && <EditEmployee setShowEditEmployee={setshowEditEmployee} showEditEmployee={showEditEmployee} companyId={companyId} onEditEmployee={onEditEmployee} />}
            {showdeleteEmployee && <DeleteEmployee setShowDeleteEmployee={setShowDeleteEmployee} onDeleteEmployeeHandler={onDeleteEmployeeHandler} employee={employees.filter(x => x._id === showdeleteEmployee)} />}
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
                            <th>
                                Created by

                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {employees.length >=1 && Array.from(employees).map(emp => <Employee
                            key={emp._id}
                            {...emp}
                            setShowDeleteEmployee={setShowDeleteEmployee}
                            setShowEditEmployee={setshowEditEmployee} />)}
                    </tbody>
                    
                </table>
                {employees.length === 0 && <p>Currently this company do not have employees</p>}
            </div>
            <button className="btn-info" onClick={() => { setshowAddEmployee(true) }}>Add new user</button>
        </>
    )
}