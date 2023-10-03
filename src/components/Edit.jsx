
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { UserDataContext } from './Context/UserContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit() {
  let navigate = useNavigate();
  const params = useParams();
   
    let {API_URL}=useContext(UserDataContext)

   let [initialValues,setInitialValues]=useState({
         name:"",
         userName:"",
         email:"",
         mobile:"",
         batch:"",
         password:""
   })
  const UserSchema = Yup.object().shape({
    name: Yup.string().required('* Required'),
    userName: Yup.string().required('* Required').min(3, 'Should be at least 3 characters'),
    email: Yup.string().email('* Invalid email').required('* Required'),
    mobile: Yup.string().matches(/^\d{10}$/, '* Invalid mobile number').required('* Required'),
    batch: Yup.string().required('* Required')
  });

     const getData=async(id)=>{
           
      try {
        let res= await axios.get(`${API_URL}/${id}`);
        if(res.status===200){
            setInitialValues(res.data)
        }
      } catch (error) {
          toast.error("error ocuured")
      }
        
            
     }


     let handleEditUser=async(values)=>{
              try {

                let res= await axios.put(`${API_URL}/${params.id}`,values);
                if(res.status===200){
                      navigate('/dashboard')
                }
                
              } catch (error) {
                  toast.error("error occured")
              }
     }
        
  useEffect(()=>{
      if(Number(params.id)){
          getData(Number(params.id))
      } 
        
  },[])    

  return (
    <>
      <div className='container-fluid'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Edit Users</h1>
        </div>

        <div className='row'>
          <Formik
            initialValues={initialValues}
            validationSchema={UserSchema}
            enableReinitialize ={true}
            onSubmit={(value) => {
                handleEditUser(value)
            }}
          >
            {({values,errors, touched, handleChange, handleBlur, handleSubmit}) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicname">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Enter Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? <div style={{ color: "red" }}>{errors.name}</div> : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    value={values.userName}
                    placeholder="Enter UserName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.userName && touched.userName ? <div style={{ color: "red" }}>{errors.userName}</div> : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? <div style={{ color: "red" }}>{errors.email}</div> : null}
                </Form.Group>
                  
                <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"   value={values.password} placeholder="Enter password" name='password' autoComplete='off' onChange={handleChange} onBlur={handleBlur}/> 
                       {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div>:null}
                      </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={values.mobile}
                    placeholder="Enter Mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile ? <div style={{ color: "red" }}>{errors.mobile}</div> : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBatch">
                  <Form.Label>Batch</Form.Label>
                  <Form.Control
                    type="text"
                    name="batch"
                    value={values.batch}
                    placeholder="Enter Batch"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.batch && touched.batch ? <div style={{ color: "red" }}>{errors.batch}</div> : null}
                </Form.Group>

                <Button variant="primary" type='submit'>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Edit;






