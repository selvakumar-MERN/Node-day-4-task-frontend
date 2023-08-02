import React, {  useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import axios from 'axios';


function Studentlist(props) {
    const [student,setstudent]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:3050/admin/getstudent')
        .then((res)=>{
        
            setstudent(res.data)
        })
        .catch((error)=>{
            return error
        })
    },[])

    const deleteStudent=(id)=>{
        axios.delete(`http://localhost:3050/admin/deletestudent/${id}`)
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
                        <h1 className="h3 mb-4 text-gray-800">Students List</h1>
                        <div className='text-right'>
                            <Link to="/addstudent" >
                                <button type='button' className='btn btn-primary m-2' >Add New Student</button>
                            </Link>
                        </div>
                       { student ? <table className='table table-striped table-responsive'>
                            <thead >
                                <tr>
                                    <th>Name</th>
                                    <th>Father name</th>
                                    <th>Gender</th>
                                    <th>Class</th>
                                    <th>address</th>
                                    <th>city</th>
                                    <th>state</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.map((items) => {
                                    return (
                                        <tr key={items._id} className='text-center'>
                                            <td>{items.studentName}</td>
                                            <td>{items.fatherName}</td>
                                            <td>{items.gender}</td>
                                            <td>{items.className}</td>
                                            <td>{items.address}</td>
                                            <td>{items.city}</td>
                                            <td>{items.state}</td>
                                            <td>
                                                <Link to="/editstudentprofile">
                                                    <button className='btn btn-primary ' onClick={() => props.editstudent(items)}  >Edit</button>
                                                </Link>
                                                <button className='btn btn-danger mx-2' onClick={() => deleteStudent(items._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })

                                }
                            </tbody>
                        </table>: <div>no data</div>}



                    </div>
                </div>
                <Footer />
            </div>

        </div>



    );
}

export default Studentlist;