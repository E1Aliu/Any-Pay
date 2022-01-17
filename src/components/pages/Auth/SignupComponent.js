import React from 'react'
import Carousel from 'react-elastic-carousel';

import SignupForm from './SignupForm';
import { SignupData } from './data';

import './styles/authLeft.scss'
import './styles/authForms.scss'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 767, itemsToShow: 1 }
];

const SignupComponent = () => {

    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(0);
      }
    };
    const onPrevStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo('single-slide'.length);
      }
    };

    return (
        <div className='auth-shared-component'>
            <div className='left-part'>

                <div className='bg bg1'></div>
                <div className='bg bg2'></div>
                <div className='line'></div>

                <div className='inner-part'>
                    <h1>Pay, send and receive!</h1>
                    <p className='p'>
                        Join millions who already use AnyPay to safely pay online 
                        and send money anywhere in the world.           
                    </p>
                    <div className='img img2'></div>
                    <Carousel className="slider"  breakPoints={breakPoints}  ref={carouselRef}
                            onPrevStart={onPrevStart}
                            onNextStart={onNextStart}
                            disableArrowsOnEnd={false}
                        >

                        {SignupData.map((props) => {
                            return(
                                <div className="single-slide">
                                    {props.items.map((l) => {
                                        return (
                                            <div className='mini-item'>
                                                <div className='icon2'>{l.icon}</div>
                                                <h6>{l.description}</h6>
                                            </div>
                                        );
                                    })}
                                </div>
                            )
                        })}
                    </Carousel> 
                </div>
            </div>

            <SignupForm />
            
        </div>
    )
}

export default SignupComponent
