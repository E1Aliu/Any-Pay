import React from 'react'

import './styles/sidebar.scss'
import './styles/content.scss'

import Sidebar from './Sidebar'
import Content from './Content'

const Main = () => {
    return (
        <div className='main-component'>
            <Sidebar />
            <Content />
        </div>
    )
}

export default Main
