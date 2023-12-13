import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/slick.css";
import "../styles/slick-theme.css";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade:true,
            autoplay: true,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className=".grid-slide">
                <Slider {...settings}>
                    <div>
                        <img src="https://res.cloudinary.com/dcwpxxcd9/image/upload/v1697478706/Sample%20images/Chainsaw-Man-Header_jftx86.jpg" className="slick-img"/>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dcwpxxcd9/image/upload/v1697478747/Sample%20images/Harry-Potter-books-main_aj1nzg.png" className="slick-img"/>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dcwpxxcd9/image/upload/v1697481317/Sample%20images/lulu-home-0223-main-banner_rotvj1.webp" className="slick-img"/>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dcwpxxcd9/image/upload/v1697481401/Sample%20images/images_jyogpw.jpg" className="slick-img"/>
                    </div>

                </Slider>
            </div>
        );
    }
}
