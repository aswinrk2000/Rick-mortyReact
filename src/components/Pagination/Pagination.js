import React ,{useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({info, setPageNumber, pageNumber}) => {
  let [width, setWidth] = useState(window.innerWidth);

  console.log(width);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension)
  })

return(
  <>
 <style jsx>

{`
@media (max-width : 768px) {
  .next, .prev {
    display : none;
  }

}
`}
 </style>
  <ReactPaginate
  forcePage={pageNumber===1?0 : pageNumber - 1} 
  className="pagination justify-content-center gap-4 my-4 text-dark"
  
  nextLabel= "Next"
  previousLabel = "Prev"
  previousClassName = "btn btn-primary prev"
  nextClassName = "btn btn-primary next"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="active"
  onPageChange={(data)=>{
    setPageNumber(data.selected + 1);
  }}
  pageCount={info?.pages}
  />
  </>
 
  
)
};
export default Pagination;