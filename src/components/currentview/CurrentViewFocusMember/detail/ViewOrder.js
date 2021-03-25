import { addDays } from 'date-fns'
import { debounce } from 'lodash'
import React, { useEffect, useReducer, useState } from 'react'
import { DateRange } from 'react-date-range'
import { useFetchPost } from '../../../../hooks'
import { SearchSelectBoxDateReducer } from '../../../../reducers'
import { BaseColor, ConvertDate, PaginationNumber } from '../../../../utils'
import { ButtonAction, TdGlobal, TrGlobal } from '../../../atoms'
import { ModalReact, Table } from '../../../organisms'

const StatusList = [
  { c: 'unpaid', d: 'Belum Bayar' },
  { c: 'process', d: 'Proses' },
  { c: 'packing', d: 'Packing' },
  { c: 'sent', d: 'Dikirim' },
  { c: 'arrived', d: 'Sampai' },
  { c: 'canceled', d: 'Dibatalkan' },
  { c: 'expired', d: 'Expired' }
]

const dataHeaderOrder = [
  { id: 0, name: 'Order ID' },
  { id: 1, name: 'Tanggal' },
  { id: 2, name: 'Invoice ID' },
  { id: 3, name: 'Nama Konsumen' },
  { id: 4, name: 'Hp Konsumen' },
  { id: 5, name: 'Courier' },
  { id: 6, name: 'Status' },
  { id: 7, name: 'Action' }
]

const ViewOrder = props => {
  const { details, transition } = props // use for hitting api

  const initialProfileDetailViewOrderList = {
    member_id: details?.id,
    page: 1,
    length: 10,
    search: '',
    start_date: ConvertDate(addDays(new Date(), -30)),
    end_date: ConvertDate(new Date())
  }

  const [openModalCalendar, setOpenModalCalendar] = useState(false)
  const [allPage, setAllPage] = useState(0)

  const [stateOrder, dispatchOrder] = useReducer(
    SearchSelectBoxDateReducer,
    initialProfileDetailViewOrderList
  )

  const {
    data: data_order_all,
    status: status_order_all,
    code: code_order_all
  } = useFetchPost(
    false,
    transition === true ? null : '/member/order',
    stateOrder
  )

  useEffect(() => {
    if (status_order_all === 'fetched') {
      setOpenModalCalendar(false) // automatic close
    }
  }, [status_order_all])

  useEffect(() => {
    if (data_order_all?.total_page) {
      const page = PaginationNumber(data_order_all.total_page)
      setAllPage(page)
    }
  }, [data_order_all])

  const handlePage = e => {
    dispatchOrder({ type: 'SET_PAGE', new_page: e })
  }
  const previousPage = () => {
    dispatchOrder({
      type: 'SET_PAGE',
      new_page: Math.max(stateOrder.page - 1, 1)
    })
  }
  const nextPage = () => {
    if (stateOrder.page < allPage[allPage.length - 1])
      dispatchOrder({
        type: 'SET_PAGE',
        new_page: stateOrder.page + 1
      })
  }

  const updateValue = debounce(val => {
    handleSearch(val)
  }, 1000)

  const handleSearch = e => {
    const query = e
    if (query) {
      dispatchOrder({ type: 'HANDLE_SEARCH', search_val: query })
    } else {
      dispatchOrder({ type: 'HANDLE_SEARCH', search_val: '' })
    }
  }

  const RenderTableRowOrder = ({ ord, index }) => {
    // { id: 0, name: 'Order ID' },
    // { id: 1, name: 'Tanggal' },
    // { id: 2, name: 'Invoice ID' },
    // { id: 3, name: 'Nama Konsumen' },
    // { id: 4, name: 'Hp Konsumen' },
    // { id: 5, name: 'Courier' },
    // { id: 6, name: 'Status' },
    // { id: 7, name: 'Action' },
    return (
      <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
        <TdGlobal>{ord?.order_id}</TdGlobal>
        <TdGlobal>{ord?.date}</TdGlobal>
        <TdGlobal>{ord?.invoice_id}</TdGlobal>
        <TdGlobal>{ord?.consumer_name}</TdGlobal>
        <TdGlobal>{ord?.consumer_phone}</TdGlobal>
        <TdGlobal>{ord?.courier}</TdGlobal>
        <TdGlobal>{StatusList.find(x => x.c === ord?.status)?.d}</TdGlobal>
        <TdGlobal>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ButtonAction
              title="Order Detail"
              type="button"
              onClick={() =>
                window.open(
                  `${window.location.origin}/app/order/detail/${ord?.order_id}`
                )
              }
              width="70px"
            />
          </div>
        </TdGlobal>
      </TrGlobal>
    )
  }

  return (
    <div
      style={{
        border: '2px solid #ddd',
        borderRadius: 10,
        padding: '10px 10px 50px 10px',
        width: '80vw'
      }}
    >
      <div>
        <h4
          style={{
            margin: '5px 5px 5px 0',
            color: BaseColor.Primary
          }}
        >
          ORDER
        </h4>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ margin: '10px 0' }}>
          <h4
            style={{ cursor: 'pointer', margin: 0 }}
            onClick={() => setOpenModalCalendar(true)}
          >
            Select Date Range - ({ConvertDate(stateOrder.start_date)} -{' '}
            {ConvertDate(stateOrder.end_date)})
          </h4>
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="search" style={{ fontWeight: 'bold' }}>
            Search Invoice
          </label>
          <input
            type="text"
            className="form-control"
            style={{ margin: '0 10px' }}
            placeholder="Enter Order ID"
            id="search"
            name="search"
            autoComplete="off"
            onChange={e => updateValue(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Table
          headers={dataHeaderOrder}
          totalPage={allPage}
          perPage={stateOrder.length}
          currentPage={stateOrder.page}
          onPageClick={page => handlePage(page)}
          nextClick={nextPage}
          prevClick={previousPage}
          setPerPage={e =>
            dispatchOrder({ type: 'SET_PER_PAGE', new_per_page: parseInt(e) })
          }
          totalData={data_order_all?.total_data}
          hide={code_order_all !== 200}
          fontSize={'1.4vmin'}
        >
          {status_order_all === 'fetching' ? (
            <TrGlobal>
              <TdGlobal colspan="6">Loading Data</TdGlobal>
            </TrGlobal>
          ) : code_order_all !== 200 ? (
            <TrGlobal>
              <TdGlobal colspan="8">No data</TdGlobal>
            </TrGlobal>
          ) : (
            data_order_all?.data &&
            data_order_all?.data.map((ord, index) => (
              <RenderTableRowOrder index={index} key={index} ord={ord} />
            ))
          )}
        </Table>
      </div>
      <div>
        <ModalReact
          isOpen={openModalCalendar}
          onAfterOpen={() => setOpenModalCalendar(true)}
          onRequestClose={() => setOpenModalCalendar(false)}
          sizeWidth="700px"
          title={`Select Date`}
        >
          <DateRange
            ranges={[
              {
                startDate: new Date(stateOrder.start_date),
                endDate: new Date(stateOrder.end_date),
                key: 'selection'
              }
            ]}
            months={2}
            direction="horizontal"
            onChange={e => {
              console.log(e.selection)
              dispatchOrder({
                type: 'MODIFY_DATE',
                new_start_date: ConvertDate(e.selection.startDate),
                new_end_date: ConvertDate(e.selection.endDate)
              })
            }}
          />
        </ModalReact>
      </div>
    </div>
  )
}

export default ViewOrder
