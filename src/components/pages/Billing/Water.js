import React, {useState} from 'react'

const Water = () => {

    const [mobile, setMobile] = useState('');
    const [board, setBoard] = useState('');
    const [customerid, setMCustomerID] = useState('');
    const [amount, setAmount] = useState('');


    return (
        <div className='panel-item'>

            <div className='input-container'>
                <h5>Board</h5>
                <select value={board} onChange={(e) => setBoard(e.target.value)}>
                    <option value="default">Select Board</option>
                    <option value="board1">Cidco Bill Payment</option>
                    <option value="board2">City Municipal Council</option>
                    <option value="board3">Delhi Development Authority</option>
                    <option value="board4">Rajasthan PHED</option>
                    <option value="board5">Delhi Jal Board</option>
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

export default Water
