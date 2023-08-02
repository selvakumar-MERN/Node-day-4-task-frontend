import React, {  useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import axios from 'axios';

function Teacherlist(props) {
    const [teacher,setteacher]=useState("")
    useEffect(()=>{
        axios.get('https://dashboard-admin-q4jx.onrender.com/admin/getteacher')
        .then((res)=>{
            setteacher(res.data)
        })
        .catch((error)=>{
            return error
        })
    },[])

    const deleteTeacher=(id)=>{
        axios.delete(`https://dashboard-admin-q4jx.onrender.com/admin/deleteteacher/${id}`)
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
                        <h1 className="h3 mb-4 text-gray-800">Teachers List</h1>
                        <div className='text-right'>
                            <Link to="/addteacher" >
                                <button type='button' className='btn btn-primary m-2' >Add New Teacher</button>
                            </Link>
                        </div>
                     { teacher ?  <table className='table table-striped table-responsive'>
                            <thead >
                                <tr>
                                    <th>Name</th>
                                    <th>Father name</th>
                                    <th>Gender</th>
                                    <th>Qualification</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teacher.map((items) => {
                                    return (
                                        <tr key={items._id} className='text-center'>
                                            <td>{items.teacherName}</td>
                                            <td>{items.fatherName}</td>
                                            <td>{items.gender}</td>
                                            <td>{items.qualification}</td>
                                            <td>{items.address}</td>
                                            <td>{items.city}</td>
                                            <td>{items.state}</td>
                                            <td>
                                                <Link to="/editteacherprofile">
                                                    <button className='btn btn-primary ' onClick={() => { props.editteacher(items) }}  >Edit</button>
                                                </Link>
                                                <button className='btn btn-danger mx-2' onClick={() => { deleteTeacher(items._id) }} >Delete</button>
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

export default Teacherlist;
