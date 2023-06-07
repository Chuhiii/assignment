import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [lastname, lastnamechange] = useState('');
  const [firstname, firstnamechange] = useState('');
  const [middlename, middlenamechange] = useState('');
  const [sex, sexchange] = useState('male');
  const [birthday, birthdaychange] = useState('');
  const [address, addresschange] = useState('');
  const [contactnumber, contactnumberchange] = useState('');
  const [civilstatus, civilstatuschange] = useState('');
  const [role, rolechange] = useState('employee');
  const [employeeid, employeeidchange] = useState(1);
  const [id, idchange] = useState('');
  const [email, emailchange] = useState('');
  const [password, passwordchange] = useState('');

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
        lastname,
          firstname,
          middlename,
          sex,
          birthday,
          civilstatus,
          contactnumber,
          address,
          role,
          id,
          email,
          password
      };

      // Calling API
      fetch('http://localhost:8000/employee', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success('Registered successfully.');
          navigate('/login');
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
              <h1>User registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
              <div className="col-lg-6">
                  <div className="form-group">
                    <label>Employee Number</label>
                    <input
                      disabled="disabled"
                      value={employeeid}
                      className="form-control"
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
                <div className="col-lg-12">
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
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      className="form-control"
                      value={role}
                      onChange={(e) => rolechange(e.target.value)}
                      required
                    >
                      <option value="admin">Admin</option>
                      <option value="employee">Employee</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
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
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                      type="email"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      className="form-control"
                      type="password"
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <br></br>
              <br></br>
              <Link to="/login">Already registered? Login here</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
