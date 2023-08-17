import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Loading from './Loading'


const News = (props) => {
  const [Data, setData] = useState([]);
  const [Pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(false)
  const url = `https://newsapi.org/v2/top-headlines?category=${props.catagory}&country=${props.country}&apiKey=c3cfadf63ac148c5ad56f4b1ab431e40&page=${currentPage}&pageSize=${props.page}`;
  const getData = async () => {
    try {
      setloading(true)
      const res = await axios.get(url);
      setData(res.data.articles);
      setloading(false)
      setPages(Math.ceil(res.data.totalResults / props.page));
    } catch (error) {
      console.log(error);
    }
  };

  // const Backhandel = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  const Nexthandel = () => {
    if (currentPage < Pages) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [currentPage]);

  return (  
    <div className="container">
      <div className="row">
      
        {loading? <Loading/>: Data.map((item) => (
          <div className="col-md-3" key={item.url}>
            <Newsitem
              title={item.title}
              description={item.description}
              image={item.urlToImage}
              url={item.url}
            />
          </div>
        ))}
      </div>
      <div>
        <div>
          <ReactPaginate
            previousLabel={"preview"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={Pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={Nexthandel}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-item"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
