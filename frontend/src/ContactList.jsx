import React from "react"

const ConstactList = ({ contacts }) => {
    return <div className="container-fluid">
            <h2>Contact List</h2>
           <table className="table">
               <thead className="thead-dark">
                   <tr>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Email</th>
                       <th>Actions</th>
                   </tr>
               </thead>
               <tbody >
                   {contacts.map((contact) => (
                       <tr key={contact.id}>
                           <td>{contact.firstName}</td>
                           <td>{contact.lastName}</td>
                           <td>{contact.email}</td>
                           <td> 
                               <button className="btn btn-primary mr-2">Edit</button>
                               <button className="btn btn-danger mr-2">Delete</button>
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
        </div>
    
}

export default ConstactList