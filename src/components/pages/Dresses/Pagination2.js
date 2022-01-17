import React, {useState} from 'react';
import ReactPaginate from "react-paginate";

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {MdAddShoppingCart} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import {Data3} from './data';

const Pagination2 = () => {

    const [items, setItems] = useState(Data3.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 5;
    const pagesVisited = pageNumber * itemsPerPage;

    const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((props) => {
      return (
        <div className='pagiantion-item'>
            <div className='img-cont'>
                <div className='img' style={{content: `url(${props.img})`}}></div>
            </div>
            <div className='info'>
                <div className='inline inline1'>
                    <h5>{props.title}</h5>
                    <button type='button'><FiHeart /></button>
                </div>
                <h6>{props.price}</h6>

                <div className='inline inline1'>
                    <div className='circles'>
                        {props.white ? <div className='circle white'></div> : null}
                        {props.brown ? <div className='circle brown'></div> : null}
                        {props.black ? <div className='circle black'></div> : null}
                        {props.blue ? <div className='circle blue'></div> : null}
                    </div>
                    <button type='button'><MdAddShoppingCart /></button>
                </div>

            </div>
            
        </div>
      );
    });

    const pageCount = Math.ceil(items.length / itemsPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };


    return (
        <div className='courses-pagination'>
             <div className='single-page'>{displayItems}</div>
                <ReactPaginate
                    previousLabel={<FaChevronLeft />}
                    nextLabel={<FaChevronRight />}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
        </div>
    )
}

export default Pagination2