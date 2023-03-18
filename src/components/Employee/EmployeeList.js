import Employee from "./Employee";
import CreateEmployee from "./CreateEmployee";
import { useState } from "react";
export function EmployeeList({
    employeesCurrent
}) {
    const [showAddEmployee, setshowAddEmployee] = useState(false)
    const [employees,setEmployees] = useState(employeesCurrent)
    const onCreateEmployeeHandler = (values) =>{
            console.log(values)
            setshowAddEmployee(false)
    }
    return (
        <>
           
            {showAddEmployee &&  <CreateEmployee setshowAddEmployee={setshowAddEmployee} onCreateEmployeeHandler={onCreateEmployeeHandler}/>}
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
                        
                        {employees && employees.map(x => <Employee {...x}/>)}
                       
                        
                    </tbody>
                </table>
                {employees == "undefined" && <p>Currently this company do not have employees</p>}
            </div>
            <button className="btn-info" onClick={()=>{setshowAddEmployee(true)}}>Add new user</button>
        </>
    )
}