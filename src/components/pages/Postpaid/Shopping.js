import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonBase from "@material-ui/core/ButtonBase";
import './styles/shopping.scss'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { Data1 } from './data';

var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    dots:false,
    arrows:false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
};


class Shopping extends React.Component {
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
        <div className="shopping-component">
            <div className="col1">
                <div className='coins'></div>
                <h1 data-aos='fade-left'>
                    Pay later shopping
                </h1>
                <p>
                    Millions of people have already discovered the 
                    benefits of online shopping with payment plans. 
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
                                <div className='icon'>
                                        {props.icon}
                                </div>
                                <h6>{props.title}</h6>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
      );
    }
  }
  export default Shopping;