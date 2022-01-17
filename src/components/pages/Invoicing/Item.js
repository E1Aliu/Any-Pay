import React, {useState} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'


const Item = (props) => {

    const [items, setItems] = useState(false);
    const showItems = () => {
        setItems(!items);
    }

    return (
        <div className="item1">
            <div className="img-cont">
                <div className="img" style={{content:`url(${props.img})`}}></div>
            </div>
            <div className="text">
                <h6>{props.title}</h6>
                <p>{props.description}</p>
                <div className="inner-items" style={{display: items ? 'block' : 'none'}}>
                    {props.items.map((l) => {
                        return(
                            <div className="inline">
                                <div className="icon" style={{content:`url(${l.icon})`}}></div>
                                <h5>{l.title2}</h5>
                            </div>
                        )
                    })}
                </div>
                <button type='button' onClick={showItems}>{items ? 'Show less' : 'Show more' }</button>
            </div>
        </div>
    )
}

export default Item
