
import { useState } from 'react';
import './App.css'
import Card from './Card'
function App() {
   
     let [count,setCount]=useState(0); //Hooks it is a function

    let data=[
      {
          plan: "free",
          price: "0",
          user:"single User",
          userEnabler:true,
          storage:"5GB Storage",
          storageEnabler: true,
          PublicProjects:"Unlimited Public Projects",
          PublicProjectsEnabler: true,
          CommunityAccess:"Community Access",
          CommunityAccessEnabler: true,
          PrivateProjects:"Unlimited Private Projects",
          PrivateProjectsEnabler: false,
          PhoneSupport:"Dedicated Phone Support",
          PhoneSupportEnabler: false,
          subdomain:"Free Subdomain",
          subdomainEnabler: false,
          reports:"Monthly Status Reports",
          reportsEnabler: false

      },
      {
        plan: "plus",
        price: "9",
        user:"50 User",
        userEnabler:true,
        storage:"5GB Storage",
        storageEnabler: true,
        PublicProjects:"Unlimited Public Projects",
        PublicProjectsEnabler: true,
        CommunityAccess:"Community Access",
        CommunityAccessEnabler: true,
        PrivateProjects:"Unlimited Private Projects",
        PrivateProjectsEnabler: true,
        PhoneSupport:"Dedicated Phone Support",
        PhoneSupportEnabler: true,
        subdomain:"Free Subdomain",
        subdomainEnabler: true,
        reports:"Monthly Status Reports",
        reportsEnabler: false

    },
    {
      plan: "PRO",
      price: "49",
      user:"unlimited User",
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler: true,
      PublicProjects:"Unlimited Public Projects",
      PublicProjectsEnabler: true,
      CommunityAccess:"Community Access",
      CommunityAccessEnabler: true,
      PrivateProjects:"Unlimited Private Projects",
      PrivateProjectsEnabler: true,
      PhoneSupport:"Dedicated Phone Support",
      PhoneSupportEnabler: true,
      subdomain:" Unlimited Free Subdomain",
      subdomainEnabler: true,
      reports:"Monthly Status Reports",
      reportsEnabler: true

  }
    ]
  
  return (
    <>
        <section className="pricing py-5">
  <div className="container">
    <div className="row">
         {data.map((e,i)=>{
            return  <Card data={e}  key={i}   />
               
          })
        }
    </div>

    <div>
         <button className='btn btn-success' onClick={()=>{
             setCount(++count);
         }}
          > Click me number of {count} times </button>
    </div>
  </div>
</section>
    </>
  )
}

export default App
