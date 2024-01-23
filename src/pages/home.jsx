import React, { useState } from "react";
import './home.scss';

function Home() {
    const [startIndex, setStartIndex] = useState(0);

    const items = [
        "Quality Assurance \n Our commitment to quality ensures that you receive products that meet the highest industry standards.",
        "Competitive Pricing \nEnjoy cost-effective solutions that help maximize your profit margins.",
        "Reliable Service \n We understand the importance of timely deliveries. Count on us for reliable and efficient service.",
        "Customer Support \n Our dedicated customer support team is here to assist you at every step. Your satisfaction is our priority."
    ];

    const displayItems = items.slice(startIndex, startIndex + 2);

    const handlePrevClick = () => {
        setStartIndex((prevIndex) => prevIndex - 2 < 0 ? items.length - 2 : prevIndex - 2);
    };

    const handleNextClick = () => {
        setStartIndex((prevIndex) => prevIndex + 2 >= items.length ? 0 : prevIndex + 2);
    };

    return (
        <div className="home_container text-2xl font-bold italic">
            <div className="welcome">
                <div className="welcomeHead"><h3>Welcome to Lakshmi Venkatesh Wholesales</h3></div>
            <div className="welcomeDescription"><p>At Lakshmi Venkatesh Wholesales, we are your trusted partner for all your wholesale needs. Our commitment to quality, reliability, and customer satisfaction sets us apart in the wholesale industry.</p>
            </div>
            </div>
            
            <div className="aboutUs">
                <h3 className="aboutUsHead">About Us</h3>
                <p className="aboutUsDescription">
                    Established in [Year], we have been serving businesses with top-notch wholesale products, building lasting relationships, and contributing to our customers' success. Our extensive experience and dedication make us a leading name in the wholesale market.
                </p>
            </div>
            <div className="ourProducts">
                <h3 className="ourProductsHead" id="ourProductsHead">Our Products</h3>
                <p className="ourProductsDescription" id="ourProductsDescription">Explore our comprehensive range of wholesale products designed to meet the diverse needs of your business. From [Product Category 1] to [Product Category 2], we offer high-quality merchandise at competitive prices. Browse our catalog to discover the perfect solutions for your retail business.
                </p>
            </div>
            <br />
            <h3 className="whyChooseUsHead">Why Choose Us</h3>
            <div className="whyChooseUs">
                {displayItems.map((item, index) => (
                    <div key={index} className="whyChooseItem">
                        {item}
                        {index === 0 && <button className="navigationButton1" onClick={handlePrevClick}>&lt;</button>}
                        {index === 1 && <button className="navigationButton2" onClick={handleNextClick}>&gt;</button>}
                    </div>
                ))}
            </div>
            <div className="stayConnected">
                <h3 className="stayConnectedHead">Stay Connected</h3>
                <p id="stayConnectedDescription">Follow us on [Social Media Platforms] for updates, promotions, and more.
                Thank you for choosing Lakshmi Venkatesh Wholesales. We look forward to serving you and contributing to the success of your business.
                </p>
            </div>
        </div>
    )
}
export default Home;