import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { id } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            setLastname(resp.lastname);
            setFirstname(resp.firstname);
            setMiddlename(resp.middlename);
            setSex(resp.sex);
            setBirthday(resp.birthday);
            setCivilStatus(resp.civilstatus);
            setContactNumber(resp.contactnumber);
            setAddress(resp.address);
            setRole(resp.role);
            setEmail(resp.email);
            setPassword(resp.password);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [sex, setSex] = useState('male');
    const [birthday, setBirthday] = useState('');
    const [civilstatus, setCivilStatus] = useState('');
    const [contactnumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('employee');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata = {
        lastname,
        firstname,
        middlename,
        sex,
        birthday,
        civilstatus,
        contactnumber,
        address,
        role,
        email,
        password,
      };
      

      fetch("http://localhost:8000/employee/"+id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-header">
                <h1>Employee Registration</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>First name</label>
                      <input
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Middle name</label>
                      <input
                        value={middlename}
                        onChange={(e) => setMiddlename(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Sex</label>
                      <br />
                      <input
                        className=""
                        checked={sex === 'male'}
                        onChange={(e) => setSex(e.target.value)}
                        name="sex"
                        type="radio"
                        value="male"
                      />
                      <label>Male</label>
                      <input
                        className=""
                        checked={sex === 'female'}
                        onChange={(e) => setSex(e.target.value)}
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
                        onChange={(e) => setBirthday(e.target.value)}
                        className="form-control"
                        type="date"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Civil Status</label>
                      <select
                        className="form-control"
                        value={civilstatus}
                        onChange={(e) => setCivilStatus(e.target.value)}
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
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="form-control"
                        type="number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Role</label>
                      <select
                        className="form-control"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
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
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        type="password"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <Link className="btn btn-danger" to="/listingemployee">
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
     );
}
 
export default EmpEdit;