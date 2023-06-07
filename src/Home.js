import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is an admin

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

        // Check the role of the logged-in user
        let role = sessionStorage.getItem('role');
        if (role === 'admin') { // Compare role with 'admin'
            setIsAdmin(true);
        }
    }, [navigate]);

    return (
        <div>
            <div className="header">
                <Link to={'/'} className='btn btn-primary'>Home</Link>
                <Link to={'/login'} style={{ float: 'right' }} className='btn btn-danger'>Log Out</Link>

            </div>
            <h1>Welcome to {sessionStorage.getItem('id')}</h1>
            <div className='container'>
                {isAdmin && (
                    <Link to={'/listingemployee'} className='btn btn-danger'>Employee Listing</Link>
                )}
                <Link to={'/listingcustomer'} className='btn btn-success'>Customer Listing</Link>
            </div>
        </div>
    );
}

export default Home;
