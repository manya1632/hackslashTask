import React, {useEffect, useState} from 'react';
import Card from './Card';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

const Landing = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const landing= document.getElementById("landing")
        if (toggle) {
            landing.style.backgroundColor = "#212529";
            landing.style.color="#F0F8FF";
        } else {
            landing.style.backgroundColor = "#F0F8FF"; 
            landing.style.color="#212529";
        }
    }, [toggle]);

    const cardData = [
        {
            title: "AI + RPA is what we do",
            description: "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
            btnTitle: "AI + RPA Automation",
            imgUrl: photo1
        },
        {
            title: "Make Bolder Choices",
            description: "Digital focused strategies to realize market-changing ideas",
            btnTitle: "Build Better Apps",
            // btnUrl: "#",
            imgUrl: photo2
        },
        {
            title: "Innovate With Speed",
            description: "Create higher quality software, deliver on customer expectations and business goals",
            btnTitle: "DevOps",
            // btnUrl: "#",
            imgUrl: photo3
        },
        {
            title: "Embrace Cloud",
            description: "With Cloud-First accelerate innovation and optimize performance",
            btnTitle: "Cloud Services",
            // btnUrl: "#",
            imgUrl: photo4
        }
    ];

    return (
        <div className="landing" id="landing">
            <h2 id="heading">Lets Collaborate</h2>
            <div className="cardContainer">
                {cardData.map((data, index) => (
                    <Card objdata={data} key={index} />
                ))}
            </div>
            <button className="toggle-btn" onClick={() => {
                setToggle(!toggle);
            }}>
                Toggle Night Mode
            </button>
        </div>
    );
};

export default Landing;
