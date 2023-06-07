import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [id, idchange] = useState("");
    const [password, passwordchange] = useState("");

    const navigate = useNavigate();

    useEffect(()=> {
        sessionStorage.clear();
    }, []);

    const loginsubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Login function
            // Calling API
            fetch("http://localhost:8000/employee/" + id)
                .then((res) => res.json())
                .then((resp) => {
                    console.log(resp);
                    if (Object.keys(resp).length === 0) {
                        toast.error('Please enter a valid id');
                    } else {
                        if (resp.password === password && resp.id === id) {
                            const { id, role } = resp; // Extracting the role from the API response
                            toast.success('Success');
                            // Store the credentials to know if the user is logged in
                            sessionStorage.setItem('id', id);
                            sessionStorage.setItem('role', role);
                            navigate('/');
                        } else {
                            toast.error('Please enter valid credentials');
                        }
                    }
                })
                .catch((error) => {
                    toast.error("Login Failed due to: " + error.message);
                });
        }
    }
    

    const validate = () => {
        let result =  true;
        if(id === '' || id === null) {
            result= false;
            toast.warning('Please enter id');
        }
        if(password === '' || password === null) {
            result= false;
            toast.warning('Please enter password');
        }

        return result;
    } 

    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form class="container" onSubmit={loginsubmit}>
                    <div class="card">
                    <div className="card-header">
                        <h1>Login</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input value={password} onChange={e=>passwordchange(e.target.value)}className="form-control" type='password'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Login</button>
                        <Link className="btn btn-success" to="/register">Register</Link>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;