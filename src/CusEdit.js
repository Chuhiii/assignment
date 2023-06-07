import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { id } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/customer/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            setProduct(resp.product);
            setPrice(resp.payment);
            setPayment(resp.payment);
            setLastname(resp.lastname);
            setFirstname(resp.firstname);
            setMiddlename(resp.middlename);
            setSex(resp.sex);
            setBirthday(resp.birthday);
            setCivilStatus(resp.civilstatus);
            setContactnumber(resp.contactnumber);
            setAddress(resp.address);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [payment, setPayment] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [sex, setSex] = useState('male');
    const [birthday, setBirthday] = useState('');
    const [contactnumber, setContactnumber] = useState('');
    const [civilstatus, setCivilStatus] = useState('');
    const [address, setAddress] = useState('');

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata = {
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
      };
      

      fetch("http://localhost:8000/customer/"+id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/listingcustomer');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
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
                                            disabled = "disabled"
                                            value={product}
                                            onChange={(e) => setProduct(e.target.value)}
                                            className="form-control"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            disabled = "disabled"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
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
                                            disabled = "disabled"
                                            value={payment}
                                            onChange={(e) => setPayment(e.target.value)}
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
                                        onChange={(e) => setLastname(e.target.value)}
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
                                        onChange={(e) => setFirstname(e.target.value)}
                                        className="form-control"
                                    ></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group" required>
                                    <label>Middle name</label>
                                    <input
                                        value={middlename}
                                        onChange={(e) => setMiddlename(e.target.value)}
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
                                    ></input>
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
                                        onChange={(e) => setContactnumber(e.target.value)}
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
                                        onChange={(e) => setAddress(e.target.value)}
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
                                        disabled = "disabled"
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
}
 
export default EmpEdit;