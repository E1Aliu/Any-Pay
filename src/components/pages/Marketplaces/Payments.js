import React from 'react'
import Carousel from 'react-elastic-carousel';

import { Data1 } from './data'
import './styles/payments.scss'


const breakPoints = [
    { width: 4, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 }
];

const Payments = () => {

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
        <div className='payments'>
            <div className='row1'>
                <h5 data-aos='zoom-in-up'>How it works</h5>
                <h1 data-aos='zoom-in-up'>The easiest way to launch payments and payouts</h1>
                <Carousel className="slider"  
                        breakPoints={breakPoints} 
                        ref={carouselRef}
                        onPrevStart={onPrevStart}
                        onNextStart={onNextStart}
                        disableArrowsOnEnd={false}
                >
                    {Data1.map((props) => {
                        return(
                            <div className={`item1  ${props.class}`}>
                                <div className='icon'>{props.icon}</div>
                                <div className='inner-item'>
                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        )
                    })}

            </Carousel> 
            </div>

            <div class='row2'>
                <div class='info'>
                    <h5>
                        Manage your marketplace 
                    </h5>
                    <h1>
                        Centralize your marketplace operations
                    </h1>
                    <p>
                        AnyPay can replace multiple systems typically used to manage 
                        payments, payouts, and service providers. Give your finance, operations, 
                        and support teams the tools they need to control funds, handle 
                        refunds, manage expenses and more.
                    </p>
                </div>

                <div class='images'>
                    <div className="img-cont">
                        <div className='img'></div>
                    </div>
                    <div className='bg bg1'></div>
                    <div className='bg bg2'></div>
                </div>
            </div>
        </div>
    )
}

export default Payments
