import React from 'react'
import Tile from './Tile'
import Table from 'react-bootstrap/Table'
import Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'     //useNavigate is a hooks  used  inside function
function Dashboard({data,setData}) {
       let dashboardData=[
        {
            color:'primary',
            title:'Earnings (Monthly)',
            value:'$40,000',
            icon:'fa-calendar'
        },
        {
            color:'success',
            title:'Earnings (Annual)',
            value:'$215,000',
            icon:'fa-dollar-sign'
        },
        {   
            isProgress:true,
            color:'info',
            title:'Tasks',
            value:'70',
            icon:'fa-clipboard-list'
        },
        {
            color:'warning',
            title:'Pending Requests',
            value:'18',
            icon:'fa-comments'
        }
        
       ]
       
       let navigate =useNavigate();

      let handleDelete =(index)=>{ 
              let newArray=[...data];  //deep copy method
                  newArray.splice(index,1);
                  setData(newArray);
      }

  return (
    <>
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
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
                                          <Button variant="primary"  onClick={()=> navigate(`/edit/${i}`)}>Edit</Button>
                                          &nbsp;
                                          &nbsp;
                                          <Button variant="danger" onClick={()=>handleDelete(i)}>Delete</Button>
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