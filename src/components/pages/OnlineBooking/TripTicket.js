import React, {useState} from 'react'

import {HiLocationMarker} from 'react-icons/hi'
import {MdCompareArrows} from 'react-icons/md'
import {FaCalendarAlt} from 'react-icons/fa'

const TripTicket = () => {

    const [wayRadio, setWayRadio] = useState('');

    const [from, setFrom] = useState('From');
    const [to, setTo] = useState('To');
    const [departureDate, setDepartureDate] = useState('Departure Date');
    const [returnDate, setReturnDate] = useState('Return Date');
    const [travelers, setTravelers] = useState('Travelers, Class');


    return (
        <div className='tab-panel-item'>
            <div className='radios'>
                <label>
                    <input
                        type="radio"
                        value="oneWay"
                        checked={wayRadio === "oneWay"}
                        onChange={(e) => setWayRadio(e.target.value)}
                    />
                    <span>One Way</span>
                </label>

                <label>
                    <input
                        type="radio"
                        value="return"
                        checked={wayRadio === "return"}
                        onChange={(e) => setWayRadio(e.target.value)}
                    />
                    <span>Round Trip</span>
                </label>
            </div>

            <div className='inputs'>
                <div className='input-container'>
                    <input 
                        type='text'
                        name='from'
                        id='from'
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                    <span><HiLocationMarker /></span>
                </div>
                <div className='icon'><MdCompareArrows /></div>
                <div className='input-container'>
                    <input 
                        type='text'
                        name='to'
                        id='to'
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                    <span><HiLocationMarker /></span>
                </div>

                <div className='input-container'>
                    <input 
                        type='text'
                        name='departureDate'
                        id='departureDate'
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                    <span><FaCalendarAlt /></span>
                </div>

                <div className='input-container'>
                    <input 
                        type='text'
                        name='returnDate'
                        id='returnDate'
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />
                    <span><FaCalendarAlt /></span>
                </div>

                <div className='input-container'>
                    <input 
                        type='text'
                        name='travelers'
                        id='travelers'
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                    />
                </div>

                <button type='button'>Search</button>
            </div>
        </div>
    )
}

export default TripTicket
