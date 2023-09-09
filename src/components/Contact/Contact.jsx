import React, { useState } from "react";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./contact.css"
import { getDatabase, ref, push } from 'firebase/database';



const Contact = () => {

    const [userData, setuserData] = useState(
        {
            Full_name: "",
            Email: "",
            Phone_no: "",
            Message: "",
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserData({
            ...userData,
            [name]: value,
        });
    };


    const postuserData = () => {
        const database = getDatabase();
        const userRef = ref(database, 'UserData'); // Replace 'users' with your desired database path

        // Push the user data to the database
        push(userRef, userData);
        
        alert("Send Successfully...");
        // clear the form fields after data is submitted
        setuserData({
            Full_name: '',
            Email: '',
            Phone_no: '',
            Message: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postuserData();
    };




    return (
        <section className="container">
            <header className="header">
                <p style={{ fontSize: "60px" }}>Contact Us</p>
                <p>Get In Touch With Us</p>
            </header>
            <section className="contact-container">
                <article className="right">
                    <h1 style={{fontSize:'20px',wordWrap:'break-word'}}>Follow Us</h1>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                            <FaFacebook />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer noopener">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                            <FaInstagram />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer noopener">
                            <FaPhone /> 
                        </a>
                    </div>
                </article>
                <article className="right-main">
                    {/* <h1 style={{ marginBottom: "25px" }}>Contact Us</h1> */}
                    <form onSubmit={handleSubmit} className="u-form">
                        <article className="form">
                            <label htmlFor="fullName">Full Name</label>
                            <input id="fullName" type="text" name="Full_name" placeholder="Enter Your Full Name" value={userData.Full_name} onChange={handleChange} />
                        </article>
                        <article className="form">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="Email" placeholder="Enter Your Email Address" value={userData.Email} onChange={handleChange} />
                        </article>
                        <article className="form">
                            <label htmlFor="phone">Phone Number</label>
                            <input id="phone" type="tel" name="Phone_no" placeholder="Enter Your Phone Number" value={userData.Phone_no} onChange={handleChange} />
                        </article>
                        <article className="form">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" type="text" name="Message" placeholder="Write Your Message" value={userData.Message} onChange={handleChange}></textarea>
                        </article>
                        <article>
                            <button className="done" type="submit">Send Message</button>
                        </article>
                    </form>
                </article>
            </section>
        </section>
    );
};

export default Contact;
