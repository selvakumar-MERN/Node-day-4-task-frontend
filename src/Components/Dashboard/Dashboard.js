import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Barchart from '../Chart/Barchart';
import Footer from '../Footer/Footer';


function Dashboard() {
   
    return (
        <div id='wrapper'>
            <Sidebar/>
        
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content*/}
        <div id="content">

            {/* Topbar */}
                <Navbar/> 
   

    {/* Begin Page Content */}
    <div className="container-fluid">

        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        {/*Content Row */}
        <div className="row">

            {/* Student count */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Total Students</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">3</div>
                            </div>
                            <div className="col-auto">
                            <i className="fas fa-user fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teacher count */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Total Teachers</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">2</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* total */}
             <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Total </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">5</div>
                            </div>
                            <div className="col-auto">
                            <i className="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*Staff count */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Office Staffs</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">7</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user-circle fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*Content Row */}

        <div className="row">

            {/*Area Chart */}
            <div className="col-lg-6 col-md-4">
                <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Total Strength</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <Barchart />
                    </div>
                </div>
            </div>

            {/*Pie Chart */}
            <div className="col-lg-6 col-md-4">
            <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}} src="img\undraw_posting_photo.svg" alt="..."></img>
                        </div>
                        <p>The school is affiliated to the Council for the Indian School Certificate Examinations (CISCE), New Delhi. 
                            The School is a recognized Examination Centre for ICSE & ISC examinations.
                            The President Ms.Shobhana Ramachandhran has been the guiding force and the main person responsible for the growth of this institution.welcomw all</p>
                        <a target="_blank" rel="noreferrer" href="https://undraw.co/">Browse Illustrations on
                            unDraw →</a>
                    </div>
                </div>
                
            </div>
        </div>

        {/* Content Row */}
       

    </div>
    {/*} /.container-fluid */}

</div>
{/* End of Main Content */}
<Footer/>
</div>
</div>
        
    );
}

export default Dashboard;