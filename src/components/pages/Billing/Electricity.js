import React, {useState} from 'react'

const Electricity = () => {

    const [mobile, setMobile] = useState('');
    const [operator, setOperator] = useState('');
    const [customerid, setMCustomerID] = useState('');
    const [amount, setAmount] = useState('');


    return (
        <div className='panel-item'>

            <div className='input-container'>
                <h5>Customer No.</h5>
                <input type='text'
                    name='mobile'
                    id='mobile'
                    value={customerid}
                    onChange={(e) => setMCustomerID(e.target.value)}
                    placeholder='Customer No.'
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
                <h5>Operator</h5>
                <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                    <option value="default">Select operator</option>
                    <option value="OST">OST</option>
                    <option value="KOSTT">KOSTT</option>
                    <option value="NGT">NGT</option>
                    <option value="Fingrid">Fingrid</option>
                    <option value="ESO">ESO</option>
                    <option value="REE">REE</option>
                </select>
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

export default Electricity
