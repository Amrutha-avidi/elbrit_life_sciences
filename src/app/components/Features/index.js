import './index.css';

const features = [
    {
        imgSrc: "./clinically_studied.png",
        imgAlt: "Clinically Studied",
        title: "Clinically Studied",
        description: "All products that we offer have undergone lab and safety tests.",
    },
    {
        imgSrc: "./vegetarian.png",
        imgAlt: "Vegetarian Friendly",
        title: "Vegetarian Friendly",
        description: "We have a wide selection of vegetarian products to meet your needs.",
    },
    {
        imgSrc: "./india.png",
        imgAlt: "Made in India",
        title: "Made in India",
        description: "Shop local and explore health products made right here in India.",
    },
    {
        imgSrc: "./shipping.png",
        imgAlt: "Free Shipping",
        title: "Free Shipping",
        description: "We deliver to your door with no shipping costs on your orders.",
    },
    {
        imgSrc: "./no_risk.png",
        imgAlt: "No Risk",
        title: "No Risk",
        description: "We ensure all our products are safe and within their expiry date.",
    },
    {
        imgSrc: "./gmo_free.png",
        imgAlt: "GMO Free",
        title: "GMO Free",
        description: "Natural, non-modified products and derivatives for those who need it.",
    },
];

export default function Features() {
    return (
        <div className='features'>
            <div className="features-bg">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className='img-con'>
                            <img src={feature.imgSrc} alt={feature.imgAlt} />
                        </div>
                        <p className="feature-title">{feature.title}</p>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
