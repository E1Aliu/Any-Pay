import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'

import { AiOutlineStar, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai'
import { MdAddShoppingCart } from 'react-icons/md'
import { GiHanger } from 'react-icons/gi'
import { Data1 } from './data'

const ProductInfo = () => {

    const [add, setAdd] = useState(1)
    const increase = () => {
        setAdd(add + 1)
    }

    const decrease = () => {
        setAdd(add - 1)
        if(add === 0){
            setAdd(add - 0)
        }
    }


    return (
        <div className='product-info'>
            <h1>H & M Flounce Detail Dress</h1>
            <div className='inline'>
                <div className='stars'>
                    <AiOutlineStar /> 
                    <AiOutlineStar /> 
                    <AiOutlineStar /> 
                    <AiOutlineStar /> 
                    <AiOutlineStar />
                </div>
                <span>|</span>
                <Link to='/'>Write a review</Link>
                <span>|</span>
                <Link to='/'><AiOutlineComment /> Ask a question</Link>
            </div>

            <div className='price'>
                <h2>$89.99</h2>
                <p>
                    Tax included. Shipping calculated at checkout.
                </p>
            </div>

            <div className="colors">
                <h6>Colour: Black & White</h6>
                <div className='color-container'>
                    {Data1.map((props) => {
                        return(
                            <div className='color'>
                                <div className='white'></div>
                                <div className={`white other ${props.color}`}></div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='sizes'>
                <h6>Size: Please select a size</h6>
                <div className='inline2'>
                    <div className='size'>XS</div>
                    <div className='size'>S</div>
                    <div className='size'>M</div>
                    <div className='size'>L</div>
                    <div className='size'>XL</div>
                    <div className='size'>XXL</div>
                    <div className='size'><GiHanger /></div>
                    <button type='button'>WHAT'S MY SIZE</button>
                    <span>|</span>
                    <Link to='/'>SIZE GUIDE</Link>
                </div>

                <div className="cart">
                    <h6>Quantity</h6>
                    <div className='inline3'>
                        <div className='quantity'>
                            <button type='button' onClick={decrease}>-</button>
                            <span>{add}</span>
                            <button type='button' onClick={increase}>+</button>
                        </div>

                        <button type='button' className='add'>
                            <MdAddShoppingCart /> ADD TO CART
                        </button>

                        <button type='button' className='favorite'>
                            <AiOutlineHeart />
                        </button>
                    </div>
                </div>
            </div>

            <Tabs className='tab'>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>DETAILS & CARE</Tab>
                    <Tab>SHIPPING INFO</Tab>
                    <Tab>RETURNS INFO</Tab>
                </TabList>
                <div className='tab-panel'>
                    <TabPanel>
                        Long dress in a cotton weave. Features elasticised, flounced shoulder straps and a square
                        neckline. Seam under the bust that is elasticised at the back. Unlined. All our products are 
                        made by independent suppliers, often in developing countries where our presence can 
                        make a real difference.
                    </TabPanel>
                    <TabPanel>
                        Many of our dresses have delicate trim, beading, embroidery 
                        or other embellishments that could be damaged by machine or 
                        hand washing. Dry cleaning minimizes the need to use dryers, 
                        irons, and steamers to dry or remove wrinkles. Heat can be 
                        damaging to the fabric of our dresses.
                    </TabPanel>
                    <TabPanel>
                        <ul>
                            <li>
                                FREE STANDARD SHIPPING OVER $25 FOR H&M MEMBERS ($3.99 BELOW $25, ALWAYS FREE FOR PLUS MEMBERS)
                            </li>
                            <li>
                                FREE EXPEDITED SHIPPING OVER $40 ($3.99 BELOW $40, ALWAYS FREE FOR H&M PLUS MEMBERS) 
                            </li>
                            <li>
                                FREE STANDARD SHIPPING OVER $40 ($3.99 BELOW $40, ALWAYS FREE FOR H&M PLUS MEMBERS)
                            </li>
                            <li>
                                EXPRESS SHIPPING ($14.99) 
                            </li>
                            <li> NEXT DAY ($24.99)</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        Our standard returns policy for items bought is 35 days. This applies to 
                        both online and in-store purchases, except in the case of sale items, 
                        which you have 14 days to return. If the item is unused, 
                        in its original packaging and accompanied by a valid proof of purchase, we’ll 
                        offer an a full refund. This does not affect your statutory rights.
                    </TabPanel>
                </div>
            </Tabs>


        </div>
    )
}

export default ProductInfo
