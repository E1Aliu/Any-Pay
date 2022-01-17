import React, {useState} from 'react'

const BillingPanel = () => {

    const [mobile, setMobile] = useState('');
    const [operator, setOperator] = useState('');
    const [circle, setCircle] = useState('');
    const [amount, setAmount] = useState('');


    return (
        <div className='panel-item'>

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
                <select value={operator} onChange={(e) => setOperator(e.target.value)} placeholder='Select Operator'>
                    <option value="default">Select operator</option>
                    <option value="Airtel">Airtel</option>
                    <option value="BSNL">BSNL 2</option>
                    <option value="Jio">Jio</option>
                    <option value="MTNL">MTNL</option>
                    <option value="Vi">Vi</option>
                </select>
            </div>

            <div className='input-container'>
                <h5>Circle</h5>
                <select value={circle} onChange={(e) => setCircle(e.target.value)} placeholder='Select circle'>
                    <option value="circle1">Circle 1</option>
                    <option value="circle2">Circle 2</option>
                    <option value="circle3">Circle 3</option>
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

export default BillingPanel
