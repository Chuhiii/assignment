import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [product, productchange] = useState('');
    const [price, pricechange] = useState('');
    const [payment, paymentchange] = useState('');
    const [lastname, lastnamechange] = useState('');
    const [firstname, firstnamechange] = useState('');
    const [middlename, middlenamechange] = useState('');
    const [sex, sexchange] = useState('male');
    const [birthday, birthdaychange] = useState('');
    const [address, addresschange] = useState('');
    const [contactnumber, contactnumberchange] = useState('');
    const [civilstatus, civilstatuschange] = useState('');
    const [id, idchange] = useState('');

    // To go to other link/file
    const navigate = useNavigate();

    // Validation
    const isValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';

        if (
            id === null ||
            id === '' ||
            lastname === null ||
            lastname === '' ||
            firstname === null ||
            firstname === '' ||
            middlename === null ||
            middlename === ''
        ) {
            isproceed = false;
            errormessage += 'missing inputs';
        }

        if (!isproceed) {
            toast.warning(errormessage);
        }

        return isproceed;
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        if (isValidate()) {

            let regobj = {
                product,
                price,
                payment,
                lastname,
                firstname,
                middlename,
                sex,
                birthday,
                civilstatus,
                contactnumber,
                address,
                id
            };

            console.log(regobj);

            // Calling API
            fetch('http://localhost:8000/customer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj),
            })
            .then((res) => {
                toast.success('Csutomer registerd successfully.');
                navigate('/listingcustomer');
            })
            .catch((error) => {
                toast.error('Failed :' + error.message);
            });
        }
    };

    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Customer registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input
                                            disabled="disabled"
                                            value={id}
                                            className="form-control"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Product</label>
                                        <input
                                            value={product}
                                            onChange={(e) => productchange(e.target.value)}
                                            className="form-control"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            value={price}
                                            onChange={(e) => pricechange(e.target.value)}
                                            className="form-control"
                                            type='number'
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Payment</label>
                                        <input
                                            value={payment}
                                            onChange={(e) => paymentchange(e.target.value)}
                                            className="form-control"
                                            type='number'
                                            required
                                        ></input>
                                    </div>
                                 </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Last name</label>
                                    <input
                                        value={lastname}
                                        onChange={(e) => lastnamechange(e.target.value)}
                                        className="form-control"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group" required>
                                    <label>First name</label>
                                    <input
                                        value={firstname}
                                        onChange={(e) => firstnamechange(e.target.value)}
                                        className="form-control"
                                    ></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group" required>
                                    <label>Middle name</label>
                                    <input
                                        value={middlename}
                                        onChange={(e) => middlenamechange(e.target.value)}
                                        className="form-control"
                                    ></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Sex</label>
                                    <br></br>
                                    <input
                                        className=""
                                        checked={sex === 'male'}
                                        onChange={(e) => sexchange(e.target.value)}
                                        name="sex"
                                        type="radio"
                                        value="male"
                                    />
                                    <label>Male</label>
                                    <input
                                        className=""
                                        checked={sex === 'female'}
                                        onChange={(e) => sexchange(e.target.value)}
                                        name="sex"
                                        type="radio"
                                        value="female"
                                    />
                                    <label>Female</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Birthday</label>
                                    <input
                                        value={birthday}
                                        onChange={(e) => birthdaychange(e.target.value)}
                                        className="form-control"
                                        type="date"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Civil Status</label>
                                    <select
                                        className="form-control"
                                        value={civilstatus}
                                        onChange={(e) => civilstatuschange(e.target.value)}
                                        required
                                    >
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Contact Number</label>
                                    <input
                                        value={contactnumber}
                                        onChange={(e) => contactnumberchange(e.target.value)}
                                        className="form-control"
                                        type="number"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        value={address}
                                        onChange={(e) => addresschange(e.target.value)}
                                        className="form-control"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        value={id}
                                        onChange={(e) => idchange(e.target.value)}
                                        className="form-control"
                                        required
                                    ></input>
                                </div>
                            </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Record Bill
                    </button>
                    <Link className="btn btn-danger" to="/listingcustomer">
                        Back
                    </Link>
                    <br></br>
                </div>
            </div >
            </form >
        </div >
        </div >
    );
};

export default Register;
