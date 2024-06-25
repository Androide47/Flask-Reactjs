import { useState } from "react";

const ContactForm = ({}) => {
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
            firstName,
            lastName,
            email
        }
        const url = 'http://127.0.0.1:5000/create_contact'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 200 && response.status !== 201) {
            const data = await response.json()
            alert(data.message)
        } else {
            alert("Contact created successfully")
        }
    }

    return <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-3 row">
            <label>Fist Name</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group mb-3 row">
            <label>Last Name</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group mb-3 row">
            <label>Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
}

export default ContactForm