import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'  //hooks
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Edit({data,setData}) {
  let [name, setName]=useState("");
  let [userName, setUserName]=useState("");
  let [email, setEmail]=useState("");
  let [mobile, setMobile]=useState("");
  let [batch, setBatch]=useState("");
  let navigate=useNavigate();
      const params =useParams();
      
       const getData =(index)=>{
          
           setName(data[index].name);
           setUserName(data[index].userName);
           setEmail(data[index].email);
           setMobile(data[index].mobile);
           setBatch(data[index].batch);

       }
      
  useEffect(()=>{
      if(Number(params.id) < data.length) {
             getData(Number(params.id))
      } 


  },[])

    const handleEdit =()=>{
           
        let newArray=[...data]
            newArray.splice(Number(params.id),1,{
                name,
                userName,
                email,
                mobile,
                batch
            })
            setData(newArray);   
            navigate('/dashboard')
    }


  return (
    <>
    <div className='container-fluid'>
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">Edit Users</h1>
       </div>

       <div className='row'>
       <Form>

         <Form.Group className="mb-3" controlId="formBasicEmail" >
           <Form.Label>Name</Form.Label>
           <Form.Control type="text"   value={name} placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)} /> 
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>User Name</Form.Label>
           <Form.Control type="text"  value={userName} placeholder="Enter UserName" onChange={(e)=> setUserName(e.target.value)} /> 
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email</Form.Label>
           <Form.Control type="email"  value={email} placeholder="Enter email"  onChange={(e)=> setEmail(e.target.value)}/> 
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Mobile</Form.Label>
           <Form.Control type="text"  value={mobile} placeholder="Enter Mobile"  onChange={(e)=> setMobile(e.target.value)}/> 
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Batch</Form.Label>
           <Form.Control type="text"  value={batch} placeholder="Enter Batch"  onChange={(e)=>setBatch(e.target.value)}/> 
         </Form.Group>



       <Button variant="primary"  onClick={()=>handleEdit()}  >
         Submit
       </Button>
</Form>
       </div>
    </div>
 </>
     
      
  )
}

export default Edit