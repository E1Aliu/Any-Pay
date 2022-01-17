import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'
import { Data1, Data2 } from './data'
import { AiFillDollarCircle } from 'react-icons/ai'

const Categories = () => {

    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState(true)

    const showMenu  = () => {
        setMenu(!menu)
    }

    return (
        <div className='categories'>

                <div className='title'>
                    <h5>
                        <AiOutlineMenu /> Categories
                    </h5>
                </div>

                <div className='menus'>
                    <div className='menu'>
                        <div className='inline'>
                            <h5>Mobiles</h5>
                            <button type='button'><MdKeyboardArrowDown /></button>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='inline'>
                            <h5>Men's Fashion</h5>
                            <button type='button'><MdKeyboardArrowDown /></button>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='inline' onClick={showMenu}>
                            <h5>Women's Fashion</h5>
                            <button type='button'>{menu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</button>
                        </div>

                        {menu ? <div className=''>
                                    {Data2.map((props) => {
                                        return(
                                            <div className="check">
                                                <input
                                                    type="checkbox"
                                                    id={props.title}
                                                    name={props.title}
                                                />
                                                <h5>{props.title}</h5>
                                            </div>
                                        )
                                    })}
                                </div> : null
                        }
                    </div>
                    <div className='menu'>
                        <div className='inline'>
                            <h5>Baby & Kids</h5>
                            <button type='button'><MdKeyboardArrowDown /></button>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='inline'>
                            <h5>Footwear</h5>
                            <button type='button'><MdKeyboardArrowDown /></button>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='inline'>
                            <h5>Fashion Accessories</h5>
                            <button type='button'><MdKeyboardArrowDown /></button>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='inline'>
                            <h5>Electronics</h5>
                            <button type='button'><MdKeyboardArrowDown /></button>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='inline'>
                            <h5>Mobiles</h5>
                            <button type='button'><MdKeyboardArrowDown /></button>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='inline'>
                            <h5>Home & Kitchen</h5>
                            <button type='button'><MdKeyboardArrowDown /></button>
                        </div>
                    </div>
                </div>

            <div className='brands'>
                <h4>Brand</h4>
                <div className='search-bar'>
                    <span><BiSearch /></span>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Search for a brand '
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {Data1.map((props) => {
                    return(
                        <div className="check">
                            <input
                                type="checkbox"
                                id={props.title}
                                name={props.title}
                            />
                            <h5>{props.title}</h5>
                        </div>
                    )
                })}

            </div>

            <div className='pricing'>
                <h4>Pricing</h4>
                <div className='icons'>
                    <div className='icon'>
                        <AiFillDollarCircle />
                    </div>
                    <div className='line'></div>
                    <div className='icon'>
                        <AiFillDollarCircle />
                    </div>
                </div>

                <div className='inline'>
                    <span>$112</span>
                    <p>to</p>
                    <span>$2782</span>
                </div>
            </div>

        </div>
    )
}

export default Categories
