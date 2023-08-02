import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Studentlist from './Components/Studentdetails/Studentlist';
import Addstudent from './Components/Studentdetails/Addstudent';
import Editstudentprofile from './Components/Studentdetails/Editstudentprofile';
import Addteacher from './Components/Teacherdetails/Addteacher';
import Teacherlist from './Components/Teacherdetails/Teacherlist';
import Editteacherprofile from './Components/Teacherdetails/Editteacherprofile';
import Dashboard from './Components/Dashboard/Dashboard';
import Stafflist from './Components/Officestaffdetails/Stafflist';
import Addstaff from './Components/Officestaffdetails/Addstaff';
import Editstaffprofile from './Components/Officestaffdetails/Editstaffprofile';
import { useState } from 'react';


function App() {

  const[edituser,setstudent]=useState("")
  const [editteach,setteacher]=useState("")
  const [editstaff,setstaff]=useState("")
  const editstudent=(items)=>{
        setstudent(items)
  }
  const editteacher=(items)=>{
        setteacher(items)
  }
  const editStaff=(items)=>{
      setstaff(items)
  }

  return (
    
    <BrowserRouter>
    <Routes>
    <Route exact
      path='/'
      element={<Dashboard />}>
      </Route>
      <Route exact
      path='/studentlist'
      element={<Studentlist editstudent={editstudent} />}>
      </Route>
      <Route exact
      path='/addstudent'
      element={<Addstudent />}>
      </Route>
      <Route exact
      path='/editstudentprofile'
      element={<Editstudentprofile edituser={edituser} />}>
      </Route>
      <Route exact
      path='/addteacher'
      element={<Addteacher  />}>
      </Route>
      <Route exact
      path='/teacherlist'
      element={<Teacherlist editteacher={editteacher} />}>
      </Route>
      <Route exact
      path='/editteacherprofile'
      element={<Editteacherprofile editteach={editteach} />}>
      </Route>
      <Route exact
      path='/stafflist'
      element={<Stafflist editStaff={editStaff} />}>
      </Route>
      <Route exact
      path='/addstaff'
      element={<Addstaff />}>
      </Route>
      <Route exact
      path='/editstaffprofile'
      element={<Editstaffprofile editstaff={editstaff}/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
