import React, {useState} from 'react'

const CreditCard = () => {

    const [mobile, setMobile] = useState('');
    const [cardNo, setCardNo] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');


    return (
        <div className='panel-item'>

            <div className='input-container'>
                <h5>Credit Card No.</h5>
                <input type='text'
                    name='card'
                    id='card'
                    value={cardNo}
                    onChange={(e) => setCardNo(e.target.value)}
                    placeholder='Credit Card No.'
                />
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
                <h5>Bill Amount</h5>
                <input type='text'
                    name='amount'
                    id='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Bill Amount'
                />
            </div>

            <button type='button'>Go</button>

        </div>
    )
}

export default CreditCard
