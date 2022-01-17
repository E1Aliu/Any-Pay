import React from 'react'
import Carousel from 'react-elastic-carousel';

import LoginForm from './LoginForm';
import {LoginData} from './data'

import './styles/authLeft.scss'
import './styles/authForms.scss'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 767, itemsToShow: 1 }
];

const LoginComponent = () => {

    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(0);
      }
    };
    const onPrevStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo('login-slide'.length);
      }
    };

    return (
        <div className='auth-shared-component'>
            <div className='left-part'>

                <div className='bg bg1'></div>
                <div className='bg bg2'></div>
                <div className='line'></div>

                <div className='inner-part'>
                    <h1>Your cash made digital</h1>
                    <p className='p'>
                        Pay seamlessly on 15,000 sites
                    </p>
                    <div className='img img1'></div>
                    <Carousel className="slider"  breakPoints={breakPoints}  ref={carouselRef}
                            onPrevStart={onPrevStart}
                            onNextStart={onNextStart}
                            disableArrowsOnEnd={false}
                        >

                        {LoginData.map((props) => {
                            return(
                                <div className="login-slide">
                                    <div className='icon'>{props.icon}</div>
                                    <div className='block'>
                                        <h6>{props.title}</h6>
                                        <p>{props.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
            <LoginForm />
            
        </div>
    )
}

export default LoginComponent
