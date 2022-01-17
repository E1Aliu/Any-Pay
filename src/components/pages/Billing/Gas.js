import React, {useState} from 'react'

const Gas = () => {

    const [mobile, setMobile] = useState('');
    const [board, setBoard] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');


    return (
        <div className='panel-item'>

            <div className='input-container'>
                <h5>Gas Provider</h5>
                <select value={board} onChange={(e) => setBoard(e.target.value)}>
                    <option value="default">Select Gas Provider</option>
                    <option value="provider1">Aavantika Gas Ltd</option>
                    <option value="provider2">GAIL Gas Limited</option>
                    <option value="provider3">Gujarat Gas Limited</option>
                    <option value="provider4">Megha Gas</option>
                    <option value="provider5">Vadodara Gas Limited</option>
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

            <div className='input-container'>
                <h5>Customer ID</h5>
                <input type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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

            <button type='button'>Go</button>

        </div>
    )
}

export default Gas
