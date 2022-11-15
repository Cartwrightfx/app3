import React, {useState} from 'react'
import './Contact.css'


const Contact = () => {
    
    const [form,setform] = useState('')
    const [message, setMessage] = useState('')
    function submit(e){
        e.preventDefault()
         console.log('Form Submitted with...', {form, message})
    
    }
    const myStyle = {
        margin: '0',
        backgroundColor: 'Black',
        color: 'white',
        height: '50vh',
    }
  return (
    <div style={myStyle} id='ct'>
        <div className="con1">
            <h1>Contact</h1>
            <form onSubmit={submit}>
                <label htmlFor='Email'id='em'>Email</label>
                <input type="text" id="Email" value={form}
                onChange={(e)=> setform(e.target.value)}/><br></br>

                <label htmlFor='Message' id='me'>Message</label>
                <textarea type="text" id="Message" value={message}
                onChange={(e)=> setMessage(e.target.value)}/><br></br>

                <input type="submit" value="Send" id='bt'/>
            </form>
        </div>
    </div>
  )
}
export default Contact