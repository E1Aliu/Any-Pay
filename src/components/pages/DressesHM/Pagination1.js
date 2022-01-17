import React, {useState} from 'react';
import ReactPaginate from "react-paginate";

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {AiFillStar} from 'react-icons/ai'
import {Data2} from './data';

const Pagination1 = () => {


    const [items, setItems] = useState(Data2.slice(0, 26));
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 5;
    const pagesVisited = pageNumber * itemsPerPage;

    const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((props) => {
      return (
        <div className='pagiantion-item' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className='img-cont'>
                <div className='img' style={{content: `url(${props.profile})`}}></div>
                <div className='block'>
                    <div className="inline">
                        <h5>{props.name}</h5>
                        <span>|</span>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                    <p>
                        Love this item - so comfortable and beautiful. Would 
                        love to see if offered in opulent green!
                    </p>
                </div>
            </div>     
            <h6>09/03/21</h6>
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

export default Pagination1