import React, {useState} from 'react'

const Insurance = () => {

    const [mobile, setMobile] = useState('');
    const [board, setBoard] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');


    return (
        <div className='panel-item'>

            <div className='input-container'>
                <h5>Insurer</h5>
                <select value={board} onChange={(e) => setBoard(e.target.value)}>
                    <option value="default">Select Insurer</option>
                    <option value="Insurer1">Aegon Life Insurance</option>
                    <option value="Insurer2">Aviva Life Insurance</option>
                    <option value="Insurer3">Exide Life Insurance</option>
                    <option value="Insurer4">Go Digit Insurance</option>
                    <option value="Insurer5">SBI Life Insurance</option>
                </select>
            </div>


            <div className='input-container'>
                <h5>Full Name</h5>
                <input type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Full Name'
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

export default Insurance
