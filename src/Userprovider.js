import React ,{useState} from "react";
import Mycontext from "./Mycontext";


const Userprovider=({children})=>{
    const users=[{
        rollno:1,
        name:"selva",
        father_name:"kuppusamy",
        gender:"male",
        class:"10",
        address:"193 south anna nagar ",
        city:"palani",
        state:"tamilnadu",
        zip:624601
    },{
        rollno:2,
        name:"kumar",
        father_name:"kuppusamy",
        gender:"male",
        class:"11",
        address:"193 south anna nagar ",
        city:"palani",
        state:"tamilnadu",
        zip:624601
    
    }]
      const teachers=[{
        teacher_id:1,
        name:"selva",
        father_name:"kuppusamy",
        gender:"male",
        qualification:"B.SC",
        address:"193 south anna nagar ",
        city:"palani",
        state:"tamilnadu",
        zip:624601
    
      }]
      const staffs=[{
        staff_id:1,
        name:"selva",
        father_name:"kuppusamy",
        gender:"male",
        qualification:"B.SC",
        address:"193 south anna nagar ",
        city:"palani",
        state:"tamilnadu",
        zip:624601
    
      }]
      const[staffList,setSlist]=useState(staffs)
      const[teacherList,setTlist]=useState(teachers)
    const [studentlist,setlist]=useState(users)
  const[editUser,setedit]=useState("")
  const[editTeach,setTedit]=useState("")
  const[editStaf,setSedit]=useState("")
  //Student ADD,EDIT,UPDATE,DELETE
 //ADD
 const addStudent=(user)=>{
    user.rollno=studentlist.length+1
    setlist([...studentlist,user])
  }
//EDIT
  const editstudent=(items)=>{
       setedit(items)    
  }
//UPDATE
  const updateStudent=(user)=>{
    setlist(studentlist.map(items=>(items.rollno===user.rollno? user:items)))
  }
//DELETE
  const deleteStudent=(user)=>{
    const remove=studentlist.filter(items=>items.rollno!==user.rollno)
    setlist(remove)
  }

//Teacher ADD,EDIT,UPDATE,DELETE
//ADD
  const addTeacher=(user)=>{
    user.teacher_id=teacherList.length+1
    setTlist([...teacherList,user])
 }
//EDIT
  const editTeacher=(items)=>{
    setTedit(items)
  }
//UPDATE  
const updateTeacher=(user)=>{
    setTlist(teacherList.map(items=>(items.teacher_id===user.teacher_id? user:items)))
  }
//DELETE
const deleteTeacher=(user)=>{
    const remove=teacherList.filter(items=>items.teacher_id!==user.teacher_id)
    setTlist(remove)
}

//Staff ADD,EDIT,UPDATE,DELETE
//ADD
const addStaff=(user)=>{
  user.staff_id=staffList.length+1
  setSlist([...staffList,user])
}
//EDIT
const editStaff=(items)=>{
  setSedit(items)
}
//UPDATE
const updateStaff=(user)=>{
  setSlist(staffList.map(items=>(items.staff_id===user.staff_id? user:items)))
}
//DELETE
const deleteStaff=(user)=>{
  const remove=staffList.filter(items=>items.staff_id!==user.staff_id)
  setSlist(remove)
}
const totalstaff=staffList.length;
const totalteacher=teacherList.length;
const totalstudent=studentlist.length;

return (
    <Mycontext.Provider value={{ staffList, teacherList ,studentlist,addStaff,addStudent,
        addTeacher,editStaff,editTeacher, editstudent, deleteStaff,deleteStudent,deleteTeacher,updateStaff,
        updateStudent,updateTeacher,editStaf,editTeach,editUser,totalstaff,totalstudent,totalteacher}}>
            {children}
        </Mycontext.Provider>
  );

}
export default Userprovider;