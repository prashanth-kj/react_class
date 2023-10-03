import React, { useContext, useEffect, useState } from 'react'
import Tile from './Tile'
import Table from 'react-bootstrap/Table'
import Button  from 'react-bootstrap/Button'
import {useNavigate } from 'react-router-dom'     //useNavigate is a hooks  used  inside function
import { UserDataContext } from './Context/UserContext'
import { DashboardDataContext } from './Context/DashboardContext'
import UseLogout from './Hooks/UseLogout' //this is custom hooks
import { toast } from 'react-toastify';
import axios from 'axios'
function Dashboard() {
      
       let [data,setData]=useState([])
       let {API_URL}=useContext(UserDataContext);
       let {dashboardData}=useContext(DashboardDataContext)

       let navigate =useNavigate();
       let logout=UseLogout();

      let handleDelete =async(id,index)=>{ 
           let newArray=[...data];
               newArray.splice(index,1)
                setData(newArray)

          try {
                let res= await axios.delete(`${API_URL}/${id}`)
                   if(res.status===200){
                       getData()
                   }
               
          } catch (error) {
             toast.error("error occured")
          }  
        
      }
 
       let getData= async()=>{
             try {
                  let res=await axios.get(API_URL);
                //   toast.success("data fetched");
                  setData(res.data)

             } catch (error) {
                 toast.error("error on fetching data")
                 console.log(error);
             }
       }
 
    useEffect(()=>{
          getData()
    },[])
  return (
    <>
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <button className='btn btn-primary mt-2' onClick={logout}>Logout</button>
        </div>
         
        <div className="row">

               {dashboardData.map((e,i)=>{
                   return <Tile  color={e.color}
                                 title={e.title} 
                                 value={e.value}
                                 icon={e.icon} 
                                 progress={e.isProgress}
                                 key={i}
                                 />
                  
               })}


         </div>
         
         <div className='row'>
               <Table striped bordered hover>
               <thead>
                        <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>userName</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>batch</th>
                        <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e,i)=>{
                                return <tr key={i}>
                                      <td>{i+1}</td>
                                      <td>{e.name}</td>
                                      <td>{e.userName}</td>
                                      <td>{e.email}</td>
                                      <td>{e.mobile}</td>
                                      <td>{e.batch}</td>
                                      <td>
                                          <Button variant="primary"  onClick={()=> navigate(`/edit/${e.id}`)}>Edit</Button>
                                          &nbsp;
                                          &nbsp;
                                          <Button variant="danger" onClick={()=>handleDelete(e.id,i)}>Delete</Button>
                                      </td>
                                </tr>
                            })
                        }   
                    </tbody>

               </Table>

         </div>
    </div>
    </>
  )
}

export default Dashboard