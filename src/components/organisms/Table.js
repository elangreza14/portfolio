import React, { Fragment } from 'react'
import Styles from './styles/Table.module.css'
import Loading from '../template/Loading'
import _ from 'lodash'
import { FaSort } from 'react-icons/fa'
import Pagination from '../molecules/Pagination'

const Table = ({
  children,
  headers,
  totalPage,
  totalData = 0,
  onPageClick,
  currentPage,
  prevClick,
  nextClick,
  loading,
  search,
  title,
  perPage,
  setPerPage,
  hide,
  right,
  alignLeft,
  style,
  color,
  striped,
  leftHeaer,
  rightHeader,
  bordered,
  onSort,
  titlebg,
  fontSize
}) => {
  const updateValue = _.debounce(val => {
    search(val)
  }, 1000)
  // console.log(perPage, totalPage, totalData)
  return (
    <Fragment>
      <div className={Styles['table__container']} style={style}>
        {search && (
          <div
            className={Styles['table__header']}
            style={{ backgroundColor: titlebg }}
          >
            <div
              className={Styles['form-group-search']}
              style={{ alignItems: 'center', display: 'flex' }}
            >
              <label htmlFor="search">Search :</label>
              <input
                type="text"
                className={Styles['input__search']}
                placeholder="Search"
                id="search"
                name="search"
                autoComplete="off"
                onChange={e => updateValue(e.target.value)}
              />
            </div>
          </div>
        )}
        {(title || right) && (
          <div
            className={Styles['table__header']}
            style={{ backgroundColor: titlebg }}
          >
            {title && (
              <div className={Styles['table__header-title']}>
                {title && <h4>{title}</h4>}
              </div>
            )}
            <div className={Styles[`table-right${title ? '' : '-full'}`]}>
              {right && right}
            </div>
          </div>
        )}
        {/* {search && <hr className={Styles["p-0 m-0" />} */}
        <div
          className={Styles['table__responsive']}
          style={{ width: '100%', overflowX: 'auto' }}
        >
          <table
            className={
              Styles[
                `table__table ${
                  striped ? 'table-striped' : bordered ? 'table-bordered' : ''
                }`
              ]
            }
            style={{
              borderCollapse: 'collapse',
              width: '100%',
              fontSize: '1.5vmin',
              color
            }}
            // style={color}
          >
            <thead
              className={
                // Styles[
                //   alignLeft ? 'align__left customth' : 'align__center customth'
                // ]
                Styles['customth']
              }
              // style={{
              //   background: '#6d7ae0',
              //   color: 'white',
              //   // borderTop: '5px solid #6d7ae0',
              //   padding: 8,
              //   border: '5px solid #6d7ae0'
              // }}
            >
              <tr
                style={{
                  background: '#6d7ae0',
                  color: 'white',
                  // padding: 8
                  // borderTop: '5px solid #6d7ae0',
                  border: '5px solid #6d7ae0'
                  // background: 'black',

                  // border: '2px solid black'
                }}
              >
                {headers &&
                  headers.map((header, i) => {
                    return (
                      <td
                        key={header.id}
                        colSpan={header.span && header.span}
                        className={Styles['customtd']}
                        style={{
                          minWidth: header.min ? header.min : 100,
                          // fontWeight: 'bold',
                          maxWidth: header.max && header.max,
                          // border: '2px solid black'
                          fontSize: fontSize || '1.8vmin'
                        }}
                      >
                        <span
                          onClick={() =>
                            onSort && header.key && onSort(header.key)
                          }
                          className={Styles['sorting']}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: header.sort ? 'pointer' : 'default',
                            justifyContent: header.center
                              ? 'center'
                              : alignLeft && !header.span
                              ? 'flex-start'
                              : 'center'
                          }}
                        >
                          {i === 0 && leftHeaer && leftHeaer} {header.name}
                          {header.sort && (
                            <FaSort className={Styles['btn-sort']} />
                          )}
                          {i === headers.length - 1 &&
                            rightHeader &&
                            rightHeader}
                        </span>
                      </td>
                    )
                  })}
              </tr>
            </thead>
            {children && (
              <tbody
                className={
                  Styles[
                    `customtbody t-body-data  ${
                      alignLeft ? 'align__left' : 'align__center'
                    }`
                  ]
                }
              >
                {/* {children && children.length > 0 ? children : null} */}
                {children}
              </tbody>
            )}
          </table>
        </div>
        {!hide &&
          totalPage &&
          totalPage !== 0 &&
          totalPage !== '0' &&
          totalData !== 0 &&
          totalData !== '0' && (
            <div className={Styles['footer-pagination-custom']}>
              <div className={Styles['option-perpage']}>
                <p
                  className={Styles['text-footer-detail mr-1']}
                  style={{ fontSize: '1.3vmin' }}
                >
                  Rows per page
                </p>
                <select
                  name="per-page"
                  className={Styles['setect-custom']}
                  style={{ cursor: 'pointer', fontSize: '1.3vmin' }}
                  id="per-page"
                  value={perPage}
                  onChange={e => {
                    setPerPage(parseInt(e.target.value))
                    onPageClick(1)
                  }}
                >
                  <option value="5" style={{ fontSize: '1.3vmin' }}>
                    5
                  </option>
                  <option value="10" style={{ fontSize: '1.3vmin' }}>
                    10
                  </option>
                  <option value="25" style={{ fontSize: '1.3vmin' }}>
                    25
                  </option>
                  <option value="50" style={{ fontSize: '1.3vmin' }}>
                    50
                  </option>
                  <option value="100" style={{ fontSize: '1.3vmin' }}>
                    100
                  </option>
                </select>
              </div>
              <span
                className={Styles['text-footer-detail']}
                style={{ fontSize: '1.3vmin' }}
              >
                1-{perPage} of {totalData}
              </span>
              <Pagination
                currentPage={currentPage}
                onPageClick={e => onPageClick(e)}
                onNext={nextClick}
                onPrev={prevClick}
                totalPage={totalPage}
                onLast={e => onPageClick(e)}
                onFirst={e => onPageClick(e)}
              />
            </div>
          )}
      </div>
      {/* </div> */}
      {loading && <Loading />}
    </Fragment>
  )
}

export default React.memo(Table)
