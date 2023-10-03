
import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { UserDataContext } from './Context/UserContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Create() {
  let {API_URL}=useContext(UserDataContext);
    let navigate=useNavigate();
      
      const UserSchema=Yup.object().shape({
            
           name:Yup.string().required(' * Required'),
           userName:Yup.string().required('* Required').min(3,'you should atleast 3 characters'),
           email:Yup.string().email('* Invalid email').required('* Required'),
           mobile:Yup.string().matches(/^\d{10}$/,'*Invalid mobile number').required('* Required'),
           batch:Yup.string().required('* Required')
          
      })
        
  
   let handleAddUser=async(value)=>{
            
       let res= await axios.post(API_URL,value);
         if(res.status===201){
               navigate('/dashboard')
         }
         else{
             toast.error("error occured")
         }
   }


      
  return (
        <>
           <div className='container-fluid'>
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create Users</h1>
              </div>

              <div className='row'>
                <Formik
                  initialValues={{
                      name:"",
                      userName:"",
                      email:"",
                      mobile:"",
                      batch:"",
                      password:""
                  }}
                   validationSchema={UserSchema}
                   onSubmit={(value)=>
                       handleAddUser(value)
                  }
                 >
                  
                  {({errors,touched, handleChange, handleBlur, handleSubmit})=>(
                      <Form onSubmit={handleSubmit}>

                      <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name='name' onChange={handleChange} onBlur={handleBlur}/> 
                        {errors.name && touched.name ? <div  style={{color:"red"}}>{errors.name}</div>:null}
                      </Form.Group>
    
                      <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter UserName"  name='userName' autoComplete='off' onChange={handleChange} onBlur={handleBlur}/> 
                       {errors.userName && touched.userName ? <div style={{color:"red"}}>{errors.userName}</div>:null}
                      </Form.Group>
    
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} onBlur={handleBlur}/> 
                       {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
                      </Form.Group>
                     
                       <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name='password' autoComplete='off' onChange={handleChange} onBlur={handleBlur}/> 
                       {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div>:null}
                      </Form.Group>
    
                      <Form.Group className="mb-3">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile" name='mobile' onChange={handleChange} onBlur={handleBlur}/> 
                        {errors.mobile && touched.mobile ? <div style={{color:"red"}}>{errors.mobile}</div>:null}
                      </Form.Group>
    
                      <Form.Group className="mb-3">
                        <Form.Label>Batch</Form.Label>
                        <Form.Control type="text" placeholder="Enter Batch" name='batch' onChange={handleChange} onBlur={handleBlur}/> 
                        {errors.batch && touched.batch ? <div style={{color:"red"}}>{errors.batch}</div>:null}
                      </Form.Group>
    
    
                      <Button variant="primary"  type='submit' >
                      Submit
                      </Button>
                      </Form>
                  )}
                  

                </Formik>
              </div>
           </div>
        </>
  )
}

export default Create
