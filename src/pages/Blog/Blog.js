import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Blog/Banner'
import Categories from '../../components/pages/Blog/Categories'
import Cards from '../../components/pages/Blog/Cards'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Blog = () => {
    return (
        <div className='blog-page'>
            <Navbar />
            <Banner />
            <Categories />
            <Cards />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Blog
