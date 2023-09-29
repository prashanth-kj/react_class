import React,{useState} from 'react'
export const UserDataContext =React.createContext(null);
function UserContext({children}) {
     
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
       <UserDataContext.Provider  value={{data,setData}} >
         {children}
       </UserDataContext.Provider>
    </>
  )
}

export default UserContext