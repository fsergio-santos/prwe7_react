import {Fragment, React, useState} from 'react';

const Pagination = ({ page, total, changePages }) => {
    
   const [currentPage, setCurrentPage] = useState(page <= total ? page+1:1); 
   const pages=[];
   
   let ellipseLeft = false;
   let ellipseRight = false;
   
   for (let i = 1; i<=total; i++){
      
        if (i===currentPage){
            pages.push({
                id:i,
                current:true,
                ellipse:false,
            })
        } else if ( i < 2 || i > total - 1 || 
                i === currentPage - 1 || 
                i === currentPage + 1){
                pages.push({
                    id:i,
                    current:true,
                    ellipse:false,
                })   
        } else if(i > 1 && i < currentPage && !ellipseLeft) {
                pages.push({ 
                    id: i, 
                    current: false, 
                    ellipse: true 
                })
                ellipseLeft = true;
        } else if(i < total && i > currentPage && !ellipseRight) {
                pages.push({ 
                    id: i, 
                    current: false, 
                    ellipse: true 
                });
                ellipseRight = true;  
        }


   }

   const onChangePage = (page, e) => {
       e.preventDefault();
       if (page!==currentPage){
           setCurrentPage(page);
           changePages(page)
       }
   } 


   return(
       <Fragment>
         <div>  
         <div className='col-xs-12 col-md-8'>
             <ul className='pagination pull-right'>
                 <li className={page===0 ? "page-item disabled" : "page-item" }>
                     <button className='page-link btn btn-sm'
                        onClick={(e)=>onChangePage((1),e)}>
                        <i className='fa fa-angle-left'></i>
                     </button>
                 </li> 
                 <li className={page===0 ? "page-item disabled" : "page-item" }>
                     <button className='page-link btn btn-sm'
                        onClick={(e)=>onChangePage((currentPage === 0 ? currentPage: currentPage - 1 ),e)}>
                        <i className='fa fa-angle-double-left'></i>
                     </button>
                 </li>   
                 {
                     
                     pages.map(page => {
                        if (!page.ellipse){
                             return <li key={page.id}
                             className={
                                 page+1 === page.id
                                   ? "page-item active"
                                   : "page-item"
                               }
                             >
                             <a href="/#" className="page-link" onClick={(e)=>onChangePage((page.id), e)}>    
                                 {page.id}
                             </a>    
                             </li>
                        } else {
                           return <li key={page.id}>
                                  <span className="pagination-ellipsis">
                                      &hellip;
                                  </span>
                               </li> 
                        }
                    })
                 }
                <li className={page===total ? "page-item disabled" : "page-item" }>
                     <button className='page-link btn btn-sm'
                        onClick={(e)=>onChangePage((currentPage+1),e)}>
                        <i className='fa fa-angle-double-right'></i>
                     </button>
                 </li> 
                 <li className={page===total ? "page-item disabled" : "page-item" }>
                     <button className='page-link btn btn-sm'
                          onClick={(e)=>onChangePage((total),e)}>
                        <i className='fa fa-angle-right'></i>
                     </button>
                 </li> 
             </ul>
         </div>
         </div>
       </Fragment>
   )

}


export default Pagination;
