import React,{useState} from 'react'
export const UserDataContext =React.createContext(null);
function UserContext({children}) {
     
        let API_URL="https://651666a009e3260018c9b7e2.mockapi.io/users";
  return (
     <>
       <UserDataContext.Provider  value={{API_URL}} >
         {children}
       </UserDataContext.Provider>
    </>
  )
}

export default UserContext