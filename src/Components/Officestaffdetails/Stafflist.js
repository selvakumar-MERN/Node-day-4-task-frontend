import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import axios from 'axios';


function Stafflist(props) {
    const [staff,setstaff]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:3050/admin/getstaff')
        .then((res)=>{
            setstaff(res.data)
        })
        .catch((error)=>{
            return error
        })
    },[])

    const deletestaff=(id)=>{
        axios.delete(`http://localhost:3050/admin/deletestaff/${id}`)
        .then((res)=>{
            return res
            
        })
        .catch((error)=>{
            return error
        })
    }
    
    return (
        <div id='wrapper'>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content*/}
                <div id="content">

                    {/* Topbar */}
                    <Navbar />

                    <div className="container-fluid">

                        {/* Page Heading */}
                        <h1 className="h3 mb-4 text-gray-800">Staff List</h1>
                        <div className='text-right'>
                            <Link to="/addstaff" >
                                <button type='button' className='btn btn-primary m-2' >Add New Staff</button>
                            </Link>
                        </div>
                      { staff? <table className='table table-striped table-responsive'>
                            <thead >
                                <tr>
                                    <th>Staff Id</th>
                                    <th>Name</th>
                                    <th>Father name</th>
                                    <th>Gender</th>
                                    <th>Qualification</th>
                                    <th>address</th>
                                    <th>city</th>
                                    <th>state</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staff.map((items) => {
                                    return (
                                        <tr key={items._id} className='text-center'>
                                            <td>{items.staffName}</td>
                                            <td>{items.fatherName}</td>
                                            <td>{items.gender}</td>
                                            <td>{items.qualification}</td>
                                            <td>{items.address}</td>
                                            <td>{items.city}</td>
                                            <td>{items.state}</td>
                                            <td>
                                                <Link to="/editstaffprofile">
                                                    <button className='btn btn-primary ' onClick={() => props.editStaff(items)}  >Edit</button>
                                                </Link>
                                                <button className='btn btn-danger mx-2' onClick={() => deletestaff(items._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })

                                }
                            </tbody>
                        </table>:<div></div>}



                    </div>
                </div>
                <Footer />
            </div>

        </div>



    );
}

export default Stafflist;