import { CiLocationOn } from "react-icons/ci";
import './index.css';

const contactData = [
    {
        imgSrc: '/phone.png',
        alt: 'phone',
        title: 'Phone Number',
        detail: '+974 3118 1843',
    },
    {
        imgSrc: '/email.png',
        alt: 'email',
        title: 'Email Address',
        detail: 'Elbrithcqhr@gmail.com',
    },
    {
        imgSrc: '/location.png',
        alt: 'location',
        title: 'Office Location',
        detail: 'Ambassador Street, Zone 61',
    },
];

export default function Footer() {
    return (
        <footer className="footer-main">
            <div className="footer">
                {/* Contact Section */}
                <div className="phone-email-location">
                    {contactData.map((item, index) => (
                        <div className="footer-sub" key={index}>
                            <img
                                className="footer-img"
                                src={item.imgSrc}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <div className="footer-sub-content">
                                <p className="footer-sub-content-para1">{item.title}</p>
                                <p className="footer-sub-content-para2">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logo and Context Section */}
                <div className="logo-context">
                    <img
                        className="footer-logo"
                        src="/logo.png"
                        alt="logo"
                        loading="lazy"
                    />
                    <p className="logo-context-para">
                        Your health, physical and emotional well-being is important to us. 
                        We are always by your side and have made it even easier for you to 
                        find the necessary vitamins.
                    </p>
                </div>

                <p style={{"fontWeight":"300", 'display':"flex", "gap":"5px","alignItems":"center"}}>
                    <CiLocationOn className="location" />
                    Elbrit Life Sciences Private Limited, C20, BKC, G Block, Mumbai 400051
                </p>
            </div>
        </footer>
    );
}
