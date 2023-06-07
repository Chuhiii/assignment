import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmpListing = () => {
    const navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState(null);

    const LoadDetail = (id) => {
        navigate(`/detailsemployee/${id}`);
    };

    const LoadEdit = (id) => {
        navigate(`/editemployee/${id}`);
    };

    const RemoveFunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(empdata)
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    };

    const [empdata, empdatachange] = useState(null);
    useEffect(() => {
        let id = sessionStorage.getItem('id');
        if (id === '' || id === null) {
            navigate('/login');
        }

        fetch("http://localhost:8000/employee")
            .then(res => res.json())
            .then(resp => {
                console.log(resp); // Check if the data is logged correctly
                empdatachange(resp);
            })
            .catch(error => {
                console.log('Error:', error); // Check if any error occurs during the fetch
            });
    }, [navigate]);

    return (
        <div>
            <div className="header">
                <Link to={'/'} className='btn  btn-primary'>Home</Link>
                <Link to={'/login'} style={{ float: 'right' }} className='btn  btn-danger'>Log Out</Link>
            </div>
            <h1 style={{ textAlign: 'center' }}>Employee Listing</h1>
            <div className="container">
                <Link to="/createemployee" className="btn btn-success" style={{ float: 'right' }}>Add New (+)</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Last Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Middle Name</th>
                            <th scope="col">Sex</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Address</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Civil Status</th>
                            <th scope="col">Role</th>
                            <th scope="col">ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>

                        {empdata &&
                            empdata.map(item => (
                                <tr key={item.employeeid}>
                                    <td>{item.lastname}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.middlename}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.address}</td>
                                    <td>{item.contactnumber}</td>
                                    <td>{item.civilstatus}</td>
                                    <td>{item.role}</td>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <a onClick={() => { LoadEdit(item.id) }} className='btn  btn-primary'>Edit</a>
                                        <a onClick={() => { RemoveFunction(item.id) }} className='btn  btn-danger'>Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmpListing;
