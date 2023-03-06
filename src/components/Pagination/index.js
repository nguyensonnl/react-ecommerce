import { useState } from "react";
import "./Pagination.scss";

const Pagination = (props) => {
  const {
    totalPosts,
    postsPerPage,
    setCurrentPage,
    previousPage,
    nextPage,
    activeId,
    setActiveId,
  } = props;
  let pages = [];

  const lenghtPagination = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= lenghtPagination; i++) {
    pages.push(i);
  }

  const handleCLick = (page) => {
    setCurrentPage(page);
    setActiveId(page);
  };

  return (
    <ul className="pagination">
      {pages.length > 1 && (
        <li
          className={
            activeId === 1 ? `pagination-item disabled` : `pagination-item`
          }
          onClick={previousPage}
        >
          &lt;
        </li>
      )}

      {pages.length > 1 &&
        pages.map((page, index) => {
          return (
            <li
              className={
                activeId === page ? "paginaiton-active" : "pagination-item"
              }
              key={index}
              onClick={() => handleCLick(page)}
            >
              {page}
            </li>
          );
        })}
      {pages.length > 1 && (
        <li
          className={
            activeId === lenghtPagination
              ? `pagination-item disabled`
              : `pagination-item`
          }
          onClick={nextPage}
        >
          &gt;
        </li>
      )}
    </ul>
  );
};

export default Pagination;

// export default Pagination;

// import React from "react";
// import classnames from "classnames";
// import { usePagination, DOTS } from "../../hooks/usePagination";
// import "./Pagination.scss";
// const Pagination = (props) => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className,
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize,
//   });

//   if (currentPage === 0 || paginationRange.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[paginationRange.length - 1];
//   return (
//     <ul
//       className={classnames("pagination-container", { [className]: className })}
//     >
//       <li
//         className={classnames("pagination-item", {
//           disabled: currentPage === 1,
//         })}
//         onClick={onPrevious}
//       >
//         <div className="arrow left" />
//       </li>
//       {paginationRange.map((pageNumber) => {
//         if (pageNumber === DOTS) {
//           return <li className="pagination-item dots">&#8230;</li>;
//         }

//         return (
//           <li
//             className={classnames("pagination-item", {
//               selected: pageNumber === currentPage,
//             })}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       <li
//         className={classnames("pagination-item", {
//           disabled: currentPage === lastPage,
//         })}
//         onClick={onNext}
//       >
//         <div className="arrow right" />
//       </li>
//     </ul>
//   );
// };

// export default Pagination;
