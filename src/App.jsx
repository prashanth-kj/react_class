
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Create from './components/Create'
import Edit from './components/Edit'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import { useState } from 'react'
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
                 <Route path='/edit'   element={<Edit/>} />
             </Routes>

        </BrowserRouter>    
       </div>
      
    </>
  )
}

export default App
