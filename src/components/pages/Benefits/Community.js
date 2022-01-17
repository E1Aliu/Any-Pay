import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './styles/community.scss'
import { Data } from '../../shared/Trusted/data'

const Community = () => {

    const [category, setCategory] = useState('');
    const [benefits, setBenefits] = useState('');

    return (
        <div className='community'>
            <div className="row1">

                <form action="">
                    <h2>Get Started</h2>

                    <div className="inputs">
                        <h5>I am a:</h5>
                        <div className='radios' onChange={(e) => setCategory(e.target.value)}>
                            <div className='radio'><input type="radio" value="Employee" name="category" /> Employee</div>
                            <div className='radio'><input type="radio" value="Corporate" name="category" /> Corporate</div>
                        </div>

                    </div>

                    <div className="inputs">
                        <h5>Is your company providing any of the AnyPay employee benefits?</h5>
                        <div className='radios' onChange={(e) => setBenefits(e.target.value)}>
                            <div className='radio'><input type="radio" value="Yes" name="category" /> Yes</div>
                            <div className='radio'><input type="radio" value="No" name="category" /> No</div>
                        </div>
                    </div>

                    <button type='submit' className='hover-button'>Submit</button>
                </form>



                <div className="inner-row">
                    <div className='col1'>
                        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            Trusted all over world
                        </h1>
                        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            We’re available around the world, and we add new currencies all the 
                            time. If you think we should add a specific currency, let us know.
                        </p>
                        <div className='items'>
                            {Data.map((props) => {
                                return(
                                    <Link to={props.to} className='item'>
                                        <div className='flag'
                                            style={{content: `url(${props.flag})`}}>
                                        </div>
                                        <h6>{props.country}</h6>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="bg bg1"></div>
                <div className="bg bg2"></div>
            </div>


            <div className="row2" data-aos='flip-up'>
                <div className="info">
                    <h5>You are not alone</h5>
                    <h1>Join our online community!</h1>
                    <p>
                        Our online community is a place for autistic people and 
                        their families to meet like-minded people and share their 
                        thoughts and experiences.
                    </p>
                    <Link to='/Signup' className='hover-button'>Join now</Link>
                </div>
                <div className="img"></div>
            </div>
        </div>
    )
}

export default Community
