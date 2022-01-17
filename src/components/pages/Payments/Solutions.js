import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonBase from "@material-ui/core/ButtonBase";
import './styles/solutions.scss'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { SliderData } from './data';

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


class Solutions extends React.Component {
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
            <div className="col1">
                <h1>
                    Payment solutions for your business
                </h1>
                <p>
                    You don’t need to be a payments expert to support the newest 
                    features that improve customer experience and conversions.
                </p>
            </div>

            <div className='slider-container'>
                {this.renderArrows()}
    
                <Slider 
                    {...settings}
                    ref={(c) => (this.slider = c)}
                    className="inner-slider-container"
                >
                    {SliderData.map((props) => {
                        return(
                            <div className={`slider-item ${props.class}`}>
                                <div className='icon' data-aos='zoom-in-up'>
                                    <div className='bg bg1'></div>
                                    <div className='bg bg2'></div>
                                    <div className='inner-icon'>
                                        {props.icon}
                                    </div>
                                </div>
                                <h6 data-aos='zoom-in-up'>{props.title}</h6>
                                <p data-aos='zoom-in-up'>{props.description}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
      );
    }
  }
  export default Solutions;