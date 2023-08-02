import React, {  useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Editstaffprofile(props) {
    const notify = () => toast("Profile Updated");  
   
  const [user, setuser] = useState(props.editstaff)

  const handler = (e) => {
    const { name, value } = e.target
    setuser({ ...user, [name]: value })
    
  }
  const update = (e,id) => {
    
    e.preventDefault()
    axios.patch(`http://localhost:3050/admin/updatestaff/${id}`,user)
    .then((res)=>{
        return res
       
    })
    .catch((error)=>{
        return error
    })
  
  }
  return (
    <div id='wrapper'>
      <Sidebar></Sidebar>

      <div id="content-wrapper" className="d-flex flex-column">

        {/* Main Content*/}
        <div id="content">

          {/* Topbar */}
          <Navbar />
          <div className="container-fluid">

            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit Staff Profile</h1>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label >Name</label>
                  <input type="text" className="form-control" id="inputname" name='staffName' onChange={handler} value={user.staffName} placeholder="Name"></input>
                </div>
                <div className="form-group col-md-6">
                  <label >Father Name</label>
                  <input type="text" className="form-control" id="inputFathername" onChange={handler} name='fatherName' value={user.fatherName} placeholder="Fathername"></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label >Gender</label>
                  <select id="inputState" className="form-control" value={user.gender} onChange={handler} name='gender' >
                    <option selected>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label >Qualification</label>
                  <input type="text" className="form-control" id="inputclassName" onChange={handler} name='qualification' value={user.qualification} placeholder="qualification"></input>
                </div>
              </div>
              <div className="form-group">
                <label >Address</label>
                <input type="text" className="form-control" id="inputAddress" name='address' onChange={handler} value={user.address} placeholder="1234 Main St"></input>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label >State</label>
                  <input type="text" className="form-control" name='state' value={user.state} onChange={handler} id="inputSate"></input>
                </div>
                <div className="form-group col-md-4">
                  <label >City</label>
                  <input type="text" className="form-control" name='city' value={user.city} onChange={handler} id="inputCity"></input>
                </div>
                <div className="form-group col-md-4">
                  <label >Zip</label>
                  <input type="text" className="form-control" name='zip' value={user.zip} onChange={handler} id="inputZip"></input>
                </div>
              </div>
              <ToastContainer />
              <button className="btn btn-primary" onClick={(e) => {update(e,user._id);notify()}}>Update</button>
              
              <Link to="/stafflist">
                <button className="btn btn-danger m-2">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Editstaffprofile;