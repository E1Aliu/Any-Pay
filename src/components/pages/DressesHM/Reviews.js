import React, {useState} from 'react'
import './styles/reviews.scss'
import Pagination1 from './Pagination1'

const Reviews = () => {

    const [sort, setSort] = useState('')
    const [rating, setRating] = useState('')
    const [images, setImages] = useState('')
    const [height, setHeight] = useState('')
    const [size, setSize] = useState('')
    const [fit, setFit] = useState('')
    const [weight, setWeight] = useState('')

    return (
        <div className='reviews-row'>
            <div className='title' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h1>Reviews <span> (345 reviews)</span></h1>
            </div>
            <div className='selects1' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h5>Filter Reviews</h5>
                <div className='select1'>
                    <p>Sort by: </p>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value='newest'>Newest</option>
                        <option value='oldest'>Oldest</option>
                    </select>
                </div>
            </div>

            <div className='selects2' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value='default'>Rating</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>

                <select value={images} onChange={(e) => setImages(e.target.value)}>
                    <option value='default'>Images & Videos</option>
                    <option value='images'>Images</option>
                    <option value='videos'>Videos</option>
                </select>

                <select value={height} onChange={(e) => setHeight(e.target.value)}>
                    <option value='default'>Height (feet/inches)</option>
                    <option value='Option1'>Option1</option>
                    <option value='Option2'>Option2</option>
                    <option value='Option3'>Option3</option>
                </select>

                <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value='default'>Size</option>
                    <option value='Option1'>Option1</option>
                    <option value='Option2'>Option2</option>
                    <option value='Option3'>Option3</option>
                </select>

                <select value={fit} onChange={(e) => setFit(e.target.value)}>
                    <option value='default'>Fit</option>
                    <option value='Option1'>Option1</option>
                    <option value='Option2'>Option2</option>
                    <option value='Option3'>Option3</option>
                </select>

                <select value={weight} onChange={(e) => setWeight(e.target.value)}>
                    <option value='default'>Weight</option>
                    <option value='Option1'>Option1</option>
                    <option value='Option2'>Option2</option>
                    <option value='Option3'>Option3</option>
                </select>
            </div>

            <Pagination1 />
        </div>
    )
}

export default Reviews
