import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonBase from "@material-ui/core/ButtonBase";

import './styles/capabilities.scss'
import { SliderData } from './data'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    dots:false,
    arrows:false,
    responsive: [
      {
        breakpoint:1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
};

class Capabilities extends React.Component {
    renderArrows = () => {
      return (
        <div className='slider-arrows'>
            <div className='arrows'>
            <ButtonBase
                className="arrow-btn prev"
                onClick={() => this.slider.slickPrev()}
            >
                    <MdKeyboardArrowLeft />
                </ButtonBase>

                <ButtonBase
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
                    <MdKeyboardArrowRight />
                </ButtonBase>
            </div>
        </div>
      );
    };

    render() {
      return (
        <div className="shared-capabilities-component">
                <div className='logo'></div>
                <h1>
                    Benefit from the power of full stack payout capabilities
                </h1>
                <p className='p'>
                    Easy and convenient payouts that puts the needs of your payees first
                </p>
                <div className='slider-container'>
                    {this.renderArrows()}
        
                    <Slider 
                        {...settings}
                        ref={(c) => (this.slider = c)}
                        className="inner-slider-container"
                    >
                        {SliderData.map((props) => {
                            return(
                                <div className={`slider-item ${props.class}`} data-aos='zoom-in-up'>
                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
      );
    }
  }
  export default Capabilities;