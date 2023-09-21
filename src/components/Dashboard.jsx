import React from 'react'
import Tile from './Tile'

function Dashboard() {
    
       let data=[
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
     
  return (
    <>
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
         
        <div className="row">

               {data.map((e,i)=>{
                   return <Tile  color={e.color}
                                 title={e.title} 
                                 value={e.value}
                                 icon={e.icon} 
                                 progress={e.isProgress}
                                 key={i}
                                 />
                  
               })}


         </div>

    </div>
    </>
  )
}

export default Dashboard