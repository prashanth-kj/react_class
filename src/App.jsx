
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Create from './components/Create'
import Edit from './components/Edit'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'   //Navigate is component use inside jsx 
import { useState } from 'react'                                                
import NestedExample from './components/Nested Example'
import Accounts from './components/Nested Example/Accounts'
import Products from './components/Nested Example/Products'
import Receipts from './components/Nested Example/Receipts'
import Staff from './components/Nested Example/Staff'
import UseRef from './components/Hooks/UseRef'
import UseReducer from './components/Hooks/UseReducer'
function App() {
     
       let [data, setData]=useState([
        {
           name:'prasanth',
           userName:'kjp',
           email:"prasanth@gmail.com",
           mobile:"9445842100",
           batch:"b50"
        },
        {
           name:'dinesh',
           userName:'kjd',
           email:"dinesh@gmail.com",
           mobile:"9445868685",
           batch:"b70"
        }
       ])
      
  return (
    <>
       <div id='wrapper'>
        <BrowserRouter>
            <Sidebar/>
             <Routes>
                 <Route path='/dashboard'  element={<Dashboard  data={data} setData={setData}/>}/>
                 <Route path='/create'    element={<Create  data={data} setData={setData}/>}/>
                 <Route path='/edit/:id'   element={<Edit data={data} setData={setData} />} />
                 <Route  path='/nested-Example'  element={<NestedExample/>} >
                        <Route path='accounts'   element={<Accounts/>}/>
                        <Route path='products'   element={<Products/>} />
                        <Route path='receipts'  element={<Receipts/>}/>
                        <Route path='staff'   element={<Staff/>}/>    
                 </Route>
                 <Route path='/useRef' element={<UseRef/>}/>
                 <Route path='/useReducer' element={<UseReducer/>}/>



                 <Route path='*'  element={<Navigate to='/dashboard'/>}  />
                 
             </Routes>

        </BrowserRouter>    
       </div>
      
    </>
  )
}

export default App
