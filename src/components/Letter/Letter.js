import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './Letter.css'

function Letter() {
    const [name, setName]=useState('');
    const [companyName, setCompanyName]=useState('');
    const [email, setEmail]=useState('');
    const [offer, setOffer]=useState('');
    const [question, setQuestion]=useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'service_qyujoka',
            'Web_client_mail',
            event.target,
            'd_6dwd8JoG8zo-xed',{name, companyName, offer, question, email}
        ).then((result) => {
            alert('Message sent successfully!');
        }, (error) => {
            alert('Failed to send message.');
        });
    };

    return(
        <div className="letter">
            <h1><a name="h_letter"/>Interest aroused?</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <h3>Your Name</h3>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter your name here"
                        required
                    />
                </div>
                <div className="input-group">
                    <h3>Company Name</h3>
                    <input
                        type="text"
                        name="companyName"
                        value={companyName}
                        onChange={(e)=>setCompanyName(e.target.value)}
                        placeholder="Enter your company name here"
                        required
                    />
                </div>
                <div className="input-group">
                    <h3>Email Address</h3>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter your email here"
                        required
                    />
                </div>
                <div className="input-group">
                    <h3>What does your company offer?</h3>
                    <select
                        name="offer"
                        value={offer}
                        onChange={(e)=>setOffer(e.target.value)}
                        required
                    >
                        <option value="Choice">Click to make a choice</option>
                        <option value="Products">Products</option>
                        <option value="Services">Services</option>
                        <option value="Products and services">Products and services</option>
                    </select>
                </div>
                <div className="input-group">
                    <h3>Do you have any questions?</h3>
                    <textarea
                        type="text"
                        name="question"
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                        placeholder="Enter your question here"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Letter;