import React from "react";
import './home.scss';

function Home() {
    //const [startIndex, setStartIndex] = useState(0);
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
               <div className="whyChooseUsHead"><h3 id="whyChooseUsHead">Why Choose Us</h3></div> 
            <div className="whyChooseUs">
                <div className="whyChooseItem">
                    <div className="sliderItemHead">Satisfied Customer</div>
                    <div className="sliderItem1Description">
                        Since the inception of our firm, we are focused towards maintaining the trust.
                    </div>
                </div>

                <div className="whyChooseItem">
                    <div className="sliderItemHead">Excellent Service</div>
                    <div className="sliderItem2Description">
                        Since the inception of our firm, we are focused towards maintaining the trust.
                    </div>
                </div>

                <div className="whyChooseItem">
                    <div className="sliderItemHead">Reasonable Prices</div>
                    <div className="sliderItem3Description">
                        Since the inception of our firm, we are focused towards maintaining the trust.
                    </div>
                </div>

                <div className="whyChooseItem">
                    <div className="sliderItemHead">Quality Work</div>
                    <div className="sliderItem4Description">
                        Since the inception of our firm, we are focused towards maintaining the trust.
                    </div>
                </div>
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