import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import '../css/footer.css'

const Footer = () => {
    return (

        <div className="footer-content">
            <div className="footer-left">
                <h3>Bargain Bazaar</h3>
                <p>Find the best deals every day, right here.</p>
            </div>
            <div className="footer-center">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="footer-right">
                <h3>Follow or Contact with us:</h3>
                <ul>
                    <Link className='link' to="https://www.linkedin.com">
                        <FaLinkedin />
                    </Link>
                    <Link className='link' to="https://www.instagram.com">
                        <FaInstagram />
                    </Link>
                    <Link className='link' to="https://www.youtube.com">
                        <FaYoutube />
                    </Link>
                    <Link className='link' to="https://www.facebook.com">
                        <FaFacebook />
                    </Link>
                </ul>
            </div>

        </div>

    )
}

export default Footer