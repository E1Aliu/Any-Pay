import React from 'react'
import {Link} from 'react-router-dom'

import { AppsData} from '../data'

const SolutionsMegamenu = () => {
    return (
        <div className='nav-megamenu apps-megamenu'>
            <div className='links-col'>
                <div className='title'>
                    <h5>apps</h5>
                </div>
                <div className='megamenu-links'>
                    {AppsData.map((props) => {
                        return(
                            <div className='megamenu-link'>
                                <Link to={props.to} className={props.class}>
                                    <div className='icon'>
                                        <div className='bg bg1'></div>
                                        <div className='bg bg2'></div>
                                        <div className='inner-icon'>
                                            {props.icon}
                                        </div>
                                    </div>

                                    <div className='block'>
                                        <h6>{props.title}</h6>
                                        <p>{props.descirption}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='lines'>
               
            </div>
            <div className='right-col'>   

            </div>
        </div>
    )
}
export default SolutionsMegamenu
