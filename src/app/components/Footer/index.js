import { CiLocationOn } from "react-icons/ci";

import './index.css'
export default function Footer() {
    return (
        <div className="footer-main">
            <div className='footer'>
                <div className='phone-email-location'>
                    <div className='footer-sub'>
                        <img className="footer-img" src='/phone.png' alt='phone' />
                        <div className='footer-sub-content'>
                            <p className='footer-sub-content-para1'>Phone Number</p>
                            <p className='footer-sub-content-para2'> +974 3118 1843</p>
                        </div>
                    </div>
                    <div className='footer-sub'>
                        <img className="footer-img" src='/email.png' alt='email' />
                        <div className='footer-sub-content'>
                            <p className='footer-sub-content-para1'>Email Address</p>
                            <p className='footer-sub-content-para2'>Elbrithcqhr@gmail.com</p>
                        </div>
                    </div>
                    <div className='footer-sub'>
                        <img className="footer-img" src='/location.png' alt='location' />
                        <div className='footer-sub-content'>
                            <p className='footer-sub-content-para1'>Office Location</p>
                            <p className='footer-sub-content-para2'> Ambassador Street, Zone 61,</p>
                        </div>
                    </div>
                </div>
                <div className='logo-context'>
                    <img className="logo" src='/logo.png' slt='logo' />
                    <div className='logo-context-para'>
                        <p>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
                    </div>

                </div>
                <p style={{"fontWeight":"300", 'display':"flex", "gap":"5px","alignItems":"center"}}>
                    <CiLocationOn className="location" />
                    Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
            </div>
        </div>

    )
}