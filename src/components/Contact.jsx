import React from 'react'
import './Contact.css'
import { useState } from 'react'

export default function Contact() {
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents page reload
        if (name == '') {
            setNameError('Name cannot be empty!');
            return;
        }
        if (email == '') {
            setEmailError('Email cannot be empty!');
            return;
        }
        if (message == '') {
            setMessageError('Message cannot be empty!')
            return;
        }

        alert('Form submitted successfully!')
    }
    return (
        <section id="contactSection">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="formField">
                    <label for="name">Name</label>
                    <input type="text" id='name' name='name' onChange={(event) => {
                        setName(event.target.value);
                        if (event.target.value == '')
                            setNameError('Name cannot be empty');
                        else {
                            setNameError('')
                        }
                    }} />
                    {nameError.length > 0 ? (<p className='formError'>{nameError}</p>) : <></>}
                </div>
                <div className="formField">
                    <label for="email">Email</label>
                    <input type='text' id='email' name='email' onChange={(event) => {
                        setEmail(event.target.value)
                        if (event.target.value == '')
                            setEmailError('Email cannot be empty');
                        else {
                            setEmailError('')
                        }
                    }} />
                    {emailError.length > 0 ? (<p className='formError'>{emailError}</p>) : <></>}
                </div>
                <div className="formField">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" onChange={(event) => {
                        setMessage(event.target.value)
                        if (event.target.value == '')
                            setMessageError('Message cannot be empty');
                        else {
                            setMessageError('')
                        }
                    }}></textarea>
                    {messageError.length > 0 ? (<p className='formError'>{messageError}</p>) : <></>}
                </div>
                <button type="submit">Send Message</button>
            </form>

        </section>
    )
}
