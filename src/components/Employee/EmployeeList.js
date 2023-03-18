import Employee from "./Employee";

export function EmployeeList() {
    const users = [1, 2]
    return (
        <>
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

                        {users.map(x => <Employee />)}
                    </tbody>
                </table>

            </div>
            <button className="btn-info" >Add new user</button>
        </>
    )
}