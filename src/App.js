import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import EmpEdit from './EmpEdit';
import EmpCreate from './EmpCreate';
import EmpListing from './EmpListing';
import EmpDetails from './EmpDetails';
import CusListing  from './CusListing';
import CusRegister from './CusRegister';
import CusEdit from './CusEdit';

function App() {
  return (
    <div className="App">
      {/* For Notfication */}
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/editemployee/:id" element={<EmpEdit/>}></Route>
          <Route path="/createemployee" element={<EmpCreate/>}></Route>
          <Route path="/detailsemployee/:id" element={<EmpDetails/>}></Route>
          <Route path="/listingemployee" element={<EmpListing/>}></Route>
          <Route path="/listingcustomer" element={<CusListing/>}></Route>
          <Route path="/createcustomer" element={<CusRegister/>}></Route>
          <Route path="/editcustomer/:id" element={<CusEdit/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
