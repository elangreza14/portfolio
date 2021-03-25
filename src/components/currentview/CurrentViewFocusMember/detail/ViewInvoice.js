import { addDays } from 'date-fns'
import { debounce } from 'lodash'
import React, { useEffect, useReducer, useState } from 'react'
import { DateRange } from 'react-date-range'
import { useFetchPost } from '../../../../hooks'
import { SearchSelectBoxDateReducer } from '../../../../reducers'
import { BaseColor, ConvertDate, PaginationNumber } from '../../../../utils'
import { TdGlobal, TrGlobal } from '../../../atoms'
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

const dataHeaderInvoice = [
  { id: 2, name: 'Invoice ID' },
  { id: 1, name: 'Tanggal' },
  { id: 0, name: 'Type' },
  { id: 3, name: 'Source' },
  { id: 4, name: 'Bank' },
  { id: 5, name: 'Amount' },
  { id: 6, name: 'Transfer Code' },
  { id: 7, name: 'Status' }
]

// const dataHeaderInvoice = [
//   { id: 0, name: 'Invoice ID' },
//   { id: 1, name: 'Tanggal' },
//   { id: 2, name: 'Invoice ID' },
//   { id: 3, name: 'Nama Konsumen' },
//   { id: 4, name: 'Hp Konsumen' },
//   { id: 5, name: 'Courier' },
//   { id: 6, name: 'Status' },
//   { id: 7, name: 'Action' }
// ]

const ViewInvoice = props => {
  const { details, transition } = props // use for hitting api

  const initialProfileDetailViewInvoiceList = {
    member_id: details?.id,
    page: 1,
    length: 10,
    search: '',
    start_date: ConvertDate(addDays(new Date(), -30)),
    end_date: ConvertDate(new Date())
  }

  const [openModalCalendar, setOpenModalCalendar] = useState(false)
  const [allPage, setAllPage] = useState(0)

  const [stateInvoice, dispatchInvoice] = useReducer(
    SearchSelectBoxDateReducer,
    initialProfileDetailViewInvoiceList
  )

  const {
    data: data_invoice_all,
    status: status_invoice_all,
    code: code_invoice_all
  } = useFetchPost(
    false,
    transition === true ? null : '/member/invoice',
    stateInvoice
  )

  useEffect(() => {
    if (status_invoice_all === 'fetched') {
      setOpenModalCalendar(false) // automatic close
    }
  }, [status_invoice_all])

  useEffect(() => {
    if (data_invoice_all?.total_page) {
      const page = PaginationNumber(data_invoice_all.total_page)
      setAllPage(page)
    }
  }, [data_invoice_all])

  const handlePage = e => {
    dispatchInvoice({ type: 'SET_PAGE', new_page: e })
  }
  const previousPage = () => {
    dispatchInvoice({
      type: 'SET_PAGE',
      new_page: Math.max(stateInvoice.page - 1, 1)
    })
  }
  const nextPage = () => {
    if (stateInvoice.page < allPage[allPage.length - 1])
      dispatchInvoice({
        type: 'SET_PAGE',
        new_page: stateInvoice.page + 1
      })
  }

  const updateValue = debounce(val => {
    handleSearch(val)
  }, 1000)

  const handleSearch = e => {
    const query = e
    if (query) {
      dispatchInvoice({ type: 'HANDLE_SEARCH', search_val: query })
    } else {
      dispatchInvoice({ type: 'HANDLE_SEARCH', search_val: '' })
    }
  }

  const RenderTableRowInvoiceViewFocus = ({ inv, index }) => {
    // { id: 2, name: 'Invoice ID' },
    // { id: 1, name: 'Tanggal' },
    // { id: 0, name: 'Type' },
    // { id: 3, name: 'Source' },
    // { id: 4, name: 'Bank' },
    // { id: 5, name: 'Amount' },
    // { id: 6, name: 'Transfer Code' },
    // { id: 7, name: 'Status' }
    // =======================
    // "id": "221010400483",
    // "type": "item",
    // "Source": "transfer",
    // "bank": "BCA",
    // "amount": 132740,
    // "logo_bank": "https://s1.riseloka.com/bank/bca.png",
    // "transfer_code": 11,
    // "date": "2021-01-04 19:21:53",
    // "status": "confirm"
    return (
      <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
        <TdGlobal>{inv?.id}</TdGlobal>
        <TdGlobal>{inv?.date}</TdGlobal>
        <TdGlobal>{inv?.type}</TdGlobal>
        <TdGlobal>{inv?.source}</TdGlobal>
        <TdGlobal>{inv?.bank}</TdGlobal>
        <TdGlobal>{inv?.amount}</TdGlobal>
        <TdGlobal>{inv?.transfer_code}</TdGlobal>
        <TdGlobal>{StatusList.find(x => x.c === inv?.status)?.d}</TdGlobal>
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
          INVOICE
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
            Select Date Range - ({ConvertDate(stateInvoice.start_date)} -{' '}
            {ConvertDate(stateInvoice.end_date)})
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
            placeholder="Enter Invoice ID"
            id="search"
            name="search"
            autoComplete="off"
            onChange={e => updateValue(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Table
          headers={dataHeaderInvoice}
          totalPage={allPage}
          perPage={stateInvoice.length}
          currentPage={stateInvoice.page}
          onPageClick={page => handlePage(page)}
          nextClick={nextPage}
          prevClick={previousPage}
          setPerPage={e =>
            dispatchInvoice({
              type: 'SET_PER_PAGE',
              new_per_page: parseInt(e)
            })
          }
          totalData={data_invoice_all?.total_data}
          hide={code_invoice_all !== 200}
          fontSize={'1.4vmin'}
        >
          {status_invoice_all === 'fetching' ? (
            <TrGlobal>
              <TdGlobal colspan="6">Loading Data</TdGlobal>
            </TrGlobal>
          ) : code_invoice_all !== 200 ? (
            <TrGlobal>
              <TdGlobal colspan="6">No data</TdGlobal>
            </TrGlobal>
          ) : (
            data_invoice_all?.data &&
            data_invoice_all?.data.map((inv, index) => (
              <RenderTableRowInvoiceViewFocus
                index={index}
                key={index}
                inv={inv}
              />
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
                startDate: new Date(stateInvoice.start_date),
                endDate: new Date(stateInvoice.end_date),
                key: 'selection'
              }
            ]}
            months={2}
            direction="horizontal"
            onChange={e => {
              console.log(e.selection)
              dispatchInvoice({
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

export default ViewInvoice
