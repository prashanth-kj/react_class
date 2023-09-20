import React from 'react'

function Card(props) {
  return (
     <>
         <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
                    <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                      <li className={props.data.userEnabler?" ":"text-muted"}><span className="fa-li"><i className={props.data.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
                      <li className={props.data.storageEnabler?" ":"text-muted"}><span className="fa-li"><i className={props.data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
                      <li className={props.data.PublicProjectsEnabler?" ":"text-muted"}><span className="fa-li"><i className={props.data.PublicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PublicProjects}</li>
                      <li className={props.data.CommunityAccessEnabler?" ":"text-muted"}><span className="fa-li"><i className={props.data.CommunityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.CommunityAccess}</li>
                      <li className={props.data.PrivateProjectsEnabler?" ":"text-muted"}><span className="fa-li"><i className={props.data.PrivateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span> {props.data.PrivateProjects}</li>
                      <li className={props.data.PhoneSupportEnabler?" ":"text-muted"}><span className="fa-li"><i className={props.data.PhoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PhoneSupport} </li>
                      <li className={props.data.subdomainEnabler?" ":"text-muted"}><span className="fa-li"><i className={props.data.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.subdomain} </li>
                      <li className={props.data.reportsEnabler?" ":"text-muted"}><span className="fa-li"><i className={props.data.reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.reports} </li>
                    </ul>
                    <div className="d-grid">
                      <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
     </>
  )
}

export default Card