import React from 'react'
import Styles from './styles/Pagination.module.scss'
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'

const Pagination = ({
  currentPage = 1,
  onPageClick,
  onNext,
  onPrev,
  totalPage,
  onLast,
  onFirst
}) => {
  const PaginationItem = ({ active = false, text = 1, onClick }) => (
    <li
      onClick={onPageClick && onClick}
      // className={Styles[`pagination_item ${active ? 'active' : ''}`]}
      className={`${Styles[`pagination_item`]} ${
        Styles[active ? 'active' : 'disable']
      }`}
      style={{ fontSize: '1.4vmin' }}
    >
      {text}
    </li>
  )
  const PaginationLeft = ({ disable }) => (
    <li
      onClick={() => onFirst && !disable && onFirst(1)}
      // className={Styles[`pagination_item ${disable ? 'disable' : ''}`]}
      className={`${Styles[`pagination_item`]} ${
        Styles[disable ? 'disable' : '']
      }`}
      style={{ fontSize: '1.4vmin' }}
    >
      <FaAngleDoubleLeft />
    </li>
  )
  const PaginationRight = ({ disable }) => (
    <li
      onClick={() => onLast && !disable && onLast(totalPage.length)}
      // className={Styles[`pagination_item ${disable ? 'disable' : ''}`]}
      className={`${Styles[`pagination_item`]} ${
        Styles[disable ? 'disable' : '']
      }`}
      style={{ fontSize: '1.4vmin' }}
    >
      <FaAngleDoubleRight />
    </li>
  )
  const PaginationDots = ({ prev, next }) => (
    <li
      onClick={prev ? onPrev && onPrev : next ? onNext && onNext : null}
      className={Styles.pagination_item}
      style={{ fontSize: '1.4vmin' }}
    >
      ...
    </li>
  )

  return (
    <ul className={Styles.pagination} style={{ fontSize: '1.4vmin' }}>
      <PaginationLeft disable={currentPage === 1} />
      {/* first page */}
      {currentPage === 0 && null}
      {currentPage > 4 && totalPage.length > 5 && (
        <PaginationItem
          onClick={() => onPageClick(1)}
          active={currentPage === 1}
          text={1}
        />
      )}

      {/* ... */}
      {currentPage > 4 && totalPage.length > 6 && <PaginationDots prev />}

      {/* 2 angka muncul ketika currentpage > 5 */}
      {currentPage - 2 > 2 && totalPage.length > 5 && (
        <PaginationItem
          onClick={() =>
            onPageClick(
              currentPage < totalPage.length - 2
                ? currentPage - 2
                : totalPage.length - 4
            )
          }
          active={currentPage === 1}
          text={
            currentPage < totalPage.length - 2
              ? currentPage - 2
              : totalPage.length - 4
          }
        />
      )}
      {currentPage - 1 > 3 && totalPage.length > 5 && (
        <PaginationItem
          onClick={() =>
            onPageClick(
              currentPage < totalPage.length - 2
                ? currentPage - 1
                : totalPage.length - 3
            )
          }
          active={currentPage === 1}
          text={
            currentPage < totalPage.length - 2
              ? currentPage - 1
              : totalPage.length - 3
          }
        />
      )}
      {/* /2 angka */}

      {/* current page yang selalu active - di tengah */}
      {currentPage >= 5 && currentPage < totalPage.length - 2 && (
        <PaginationItem
          active={currentPage < totalPage.length - 2}
          text={currentPage}
        />
      )}

      {/* 2 angka setelah current page */}
      {currentPage > 4 && totalPage.length > 5 && (
        <PaginationItem
          onClick={() =>
            onPageClick(
              currentPage < totalPage.length - 2
                ? currentPage + 1
                : totalPage.length - 2
            )
          }
          active={currentPage === totalPage.length - 2}
          text={
            currentPage < totalPage.length - 2
              ? currentPage + 1
              : totalPage.length - 2
          }
        />
      )}
      {currentPage > 4 && totalPage.length > 5 && (
        <PaginationItem
          onClick={() =>
            onPageClick(
              currentPage < totalPage.length - 2
                ? currentPage + 2
                : totalPage.length - 1
            )
          }
          active={currentPage === totalPage.length - 1}
          text={
            currentPage < totalPage.length - 2
              ? currentPage + 2
              : totalPage.length - 1
          }
        />
      )}
      {/* /2 angka */}

      {/* pagination yang muncul pertama kali */}
      {totalPage.length > 5
        ? currentPage < 5 &&
          [1, 2, 3, 4, 5].map((page, i) => (
            <PaginationItem
              onClick={() => onPageClick(page)}
              key={i}
              active={currentPage === page}
              text={page}
            />
          ))
        : totalPage.map((page, i) => (
            <PaginationItem
              onClick={() => onPageClick(page)}
              key={i}
              active={currentPage === page}
              text={page}
            />
          ))}

      {/*...  */}
      {totalPage.length > 6 && currentPage + 3 < totalPage.length && (
        <PaginationDots next />
      )}

      {/* last page */}
      {totalPage.length > 5 && (
        <PaginationItem
          onClick={() => onPageClick(totalPage.length)}
          active={totalPage.length === currentPage}
          text={totalPage.length}
        />
      )}

      {/* next page */}
      <PaginationRight disable={currentPage >= totalPage.length} />
    </ul>
  )
}

export default Pagination
