import React, { useReducer } from 'react'
import { Button, Table } from 'react-bootstrap'

   let data={    //this object is called state
        count:0,
        products:[
          {
              name:"shirt",
              price:500
          },
          {
              name:"Trousers",
              price:1000
          },
          {
             name:"Shorts",
             price:300
          }
         ]
   }

    

function UseReducer() {
        let reducer=(state,action)=>{
            switch(action.type){

                case "increment": return {...state, count: state.count +1}

                case "decrement":{
                      if(state.count>0){
                        return{...state, count:state.count-1}
                      }
                      else
                         return {...state}
                }
                case "deleteproduct":{
                     let newProducts=[...state.products];
                        newProducts.splice(action.id,1);
                        return {...state,products:newProducts}
                }
            }
             
        }

     const[state,dispatch]=useReducer(reducer,data)
  return (
    <>
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">useReducer</h1>
 
        </div>
             <Button onClick={()=>{dispatch({type:"decrement"})}}>-</Button>
               &nbsp;
               <span>{state.count}</span>
               &nbsp;
              <Button onClick={()=>{dispatch({type:"increment"})}}>+</Button>
              
              <div>
              <h1>Products</h1>
                  
                   <Table striped hover >
                        <thead>
                            <tr>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                              state.products.map((e,i)=>{
                                    return <tr key={i}>
                                            <td>{e.name}</td>
                                            <td>{e.price}</td>
                                            <td> 
                                               <i className="fa-solid fa-pen-to-square "></i>
                                                &nbsp;
                                                &nbsp;
                                                <i className="fa-solid fa-trash" onClick={()=>{dispatch({type:"deleteproduct",id:i})}}></i>
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

export default UseReducer