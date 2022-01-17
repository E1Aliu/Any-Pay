import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonBase from "@material-ui/core/ButtonBase";
import './styles/payments.scss'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { Data1 } from './data';

var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    dots:false,
    arrows:false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
};


class Payments extends React.Component {
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
        <div className="solutions-component">
            <div className="col1" data-aos='zoom-in-up'>
                <div className='img'></div>
                <h1>
                    Receive recurring payments with AnyPay Subscriptions
                </h1>
                <p>
                    Enable Automatic recurring payment collection 
                    for your business with AnyPay subscriptions.
                </p>
            </div>

            <div className='slider-container'>
                {this.renderArrows()}
    
                <Slider 
                    {...settings}
                    ref={(c) => (this.slider = c)}
                    className="inner-slider-container"
                >
                    {Data1.map((props) => {
                        return(
                            <div className={`slider-item ${props.class}`} data-aos='zoom-in-up'>
                                <div className='icon' style={{content: `url(${props.icon})`}}>
                                </div>
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
  export default Payments;