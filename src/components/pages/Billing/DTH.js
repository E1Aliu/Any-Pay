import React, {useState} from 'react'

const DTH = () => {

    const [mobile, setMobile] = useState('');
    const [operator, setOperator] = useState('');
    const [customerid, setMCustomerID] = useState('');
    const [amount, setAmount] = useState('');


    return (
        <div className='panel-item'>

            <div className='input-container'>
                <h5>Operator</h5>
                <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                    <option value="default">Select operator</option>
                    <option value="dish-tv">Dish TV</option>
                    <option value="sun-direct">Sun Direct</option>
                    <option value="tata-sky">Tata Sky</option>
                    <option value="d2h">d2h</option>
                </select>
            </div>

            <div className='input-container'>
                <h5>Customer ID</h5>
                <input type='text'
                    name='mobile'
                    id='mobile'
                    value={customerid}
                    onChange={(e) => setMCustomerID(e.target.value)}
                    placeholder='Customer ID'
                />
            </div>

            <div className='input-container'>
                <h5>Mobile Number</h5>
                <input type='text'
                    name='mobile'
                    id='mobile'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder='Mobile Number'
                />
            </div>

            <div className='input-container'>
                <h5>Amount</h5>
                <input type='text'
                    name='amount'
                    id='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Amount'
                />
            </div>

            <button type='button'>Go</button>

        </div>
    )
}

export default DTH
