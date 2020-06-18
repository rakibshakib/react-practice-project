import React from 'react'
import './Users.css'
const Users = (props) => {
    const users = props.users;
    return (
        <>
            {
                users.map(user => {
                    return (
                        <div className="col-md-6">
                            <div className="box-style pb-5">
                                <div className="img-style">
                                    <img className="img-fluid" src={user.img} alt="" />
                                </div>
                                <div className="text-style">
                                    <p>Email: {user.email} </p>
                                    <p>Company: {user.company.name} </p>
                                    <p> Website: {user.website} </p>
                                    <p> Address: {`${user.address.street}, ${user.address.ity}`} </p>
                                    <h4>Salary: ${user.salary} </h4>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users;