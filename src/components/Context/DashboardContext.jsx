import React from 'react'
export const DashboardDataContext=React.createContext(null);
function DashboardContext({children}) {
    let dashboardData=[
        {
            color:'primary',
            title:'Earnings (Monthly)',
            value:'$40,000',
            icon:'fa-calendar'
        },
        {
            color:'success',
            title:'Earnings (Annual)',
            value:'$215,000',
            icon:'fa-dollar-sign'
        },
        {   
            isProgress:true,
            color:'info',
            title:'Tasks',
            value:'70',
            icon:'fa-clipboard-list'
        },
        {
            color:'warning',
            title:'Pending Requests',
            value:'18',
            icon:'fa-comments'
        }
        
       ]
  return (
    <>
      <DashboardDataContext.Provider  value={{dashboardData}}>
        {children}
      </DashboardDataContext.Provider>
    </>
  )
}

export default DashboardContext