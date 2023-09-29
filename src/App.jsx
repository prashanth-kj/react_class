
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Create from './components/Create'
import Edit from './components/Edit'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'   //Navigate is component use inside jsx 
// import { useState } from 'react'                                                
import NestedExample from './components/Nested Example'
import Accounts from './components/Nested Example/Accounts'
import Products from './components/Nested Example/Products'
import Receipts from './components/Nested Example/Receipts'
import Staff from './components/Nested Example/Staff'
import UseRef from './components/Hooks/UseRef'
import UseReducer from './components/Hooks/UseReducer'
import UserContext from './components/Context/UserContext'
import DashboardContext from './components/Context/DashboardContext'
import Home from './components/Home'
function App() {
     
   
  return (
    <>
       <div id='wrapper'>
        <BrowserRouter>
            
             <Routes>
                 <Route path='/dashboard'  element={
                 <UserContext>
                     <DashboardContext>
                          <Sidebar/>
                          <Dashboard/>
                     </DashboardContext>
                 </UserContext>}/>
                 <Route path='/create'    element={
                  <UserContext>
                     <Sidebar/>
                     <Create/>
                  </UserContext>
                 }/>
                 <Route path='/edit/:id'   element={
                  <UserContext>
                     <Sidebar/>
                     <Edit/>
                  </UserContext>
                 } />
                 <Route  path='/nested-Example'  element={<><Sidebar/><NestedExample/></>} >
                        <Route path='accounts'   element={<Accounts/>}/>
                        <Route path='products'   element={<Products/>} />
                        <Route path='receipts'  element={<Receipts/>}/>
                        <Route path='staff'   element={<Staff/>}/>    
                 </Route>
                 <Route path='/useRef' element={<><Sidebar/><UseRef/></>}/>
                 <Route path='/useReducer' element={<><Sidebar/> <UseReducer/></>}/>
                 <Route path='/'  element={<Home/>}/>


                 <Route path='*'  element={<Navigate to='/dashboard'/>}  />
                 
             </Routes>

        </BrowserRouter>    
       </div>
      
    </>
  )
}

export default App
