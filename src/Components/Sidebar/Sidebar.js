import React from 'react';
import "./sb-admin-2.min.css"
import { Link } from 'react-router-dom';


function Sidebar(props) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark" id="accordionSidebar">

            { /*Sidebar - Brand*/}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div >
                    <i className="fas fa-university"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SCHOOL </div>
            </a>

            {/*Divider*/}
            <hr className="sidebar-divider my-0"></hr>

            {/*Nav Item - Dashboard*/}
            <li className="nav-item active">
                <Link to="/"
                     className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                </Link>

            </li>

            {/*Divider*/}
            <hr className="sidebar-divider"></hr>

            {/*Heading */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/*Nav Item - Student Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseStudents" aria-expanded="true" aria-controls="collapseStudents">
                    <i className="fas fa-users"></i>
                    <span>Students</span>
                </a>
                <div id="collapseStudents" className="collapse" aria-labelledby="headingStudents" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">

                        <Link to="/studentlist"
                             className="collapse-item" >Students Details
                        </Link>


                    </div>
                </div>
            </li>

            {/*Nav Item - Teacher Collapse Menu*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTeachers" aria-expanded="true" aria-controls="collapseTeachers">
                    <i className="fas fa-user"></i>
                    <span>Teachers</span>
                </a>
                <div id="collapseTeachers" className="collapse" aria-labelledby="headingTeachers" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">

                        <Link to="/teacherlist"
                            className="collapse-item" >Teachers Details
                        </Link>



                    </div>
                </div>
            </li>

            {/*Nav Item - Student Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseStaffs" aria-expanded="true" aria-controls="collapseStaffs">
                    <i className="fas fa-users"></i>
                    <span>Office Staffs</span>
                </a>
                <div id="collapseStaffs" className="collapse" aria-labelledby="headingStaffs" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">

                        <Link to="/stafflist"
                            className="collapse-item" href="/">Staff Details
                        </Link>


                    </div>
                </div>
            </li>
        </ul>
    )
}
export default Sidebar;