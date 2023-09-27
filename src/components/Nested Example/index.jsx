import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
function NestedExample() {
       const[page,setPage]=useState(0);
       const navigate =useNavigate();
        
       useEffect(()=>{
            navigate('accounts')
       },[])
  return (
    <>
         <div className='container-fluid'>
         <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Nested-Example</h1> 
        </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, perferendis. A praesentium tempora laborum impedit, laudantium quibusdam dolorem beatae iusto vitae possimus architecto veritatis est mollitia quam delectus voluptates provident.</p>
            <div className='container-fluid'>

                    <ul className='pageButton'>
                    <li className={page==0?"active":""}  onClick={()=>{
                         setPage(0);
                         navigate('accounts')}}>Accounts</li>
                    <li className={page==1?"active":""} onClick={()=>{
                      setPage(1)
                      navigate('products')}}>Products</li>
                    <li  className={page==2?"active":""}   onClick={()=>{
                      setPage(2)
                      navigate('staff')
                    }}>Staffs</li>
                    <li  className={page==3?"active":""}   onClick={()=>{
                      setPage(3)
                       navigate('receipts')}}>Receipt</li>
    
                    </ul>
              </div>

              <div className='container-fluid'>
                   <Outlet/>
              </div>
        
         </div>
          
    </>
   
  )
}

export default NestedExample