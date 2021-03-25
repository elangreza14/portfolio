import { addDays } from 'date-fns'
import { debounce } from 'lodash'
import React, { useEffect, useReducer, useState } from 'react'
import { DateRange } from 'react-date-range'
import { useFetchPost } from '../../../../hooks'
import { SearchSelectBoxDateReducer } from '../../../../reducers'
import { BaseColor, ConvertDate, PaginationNumber } from '../../../../utils'
import { TdGlobal, TrGlobal } from '../../../atoms'
import { ModalReact, Table } from '../../../organisms'

const dataHeaderDeposit = [
  { id: 1, name: 'Tanggal' },
  { id: 0, name: 'Kategori' },
  { id: 2, name: 'Debit' },
  { id: 3, name: 'Kredit' },
  { id: 4, name: 'Saldo' },
  { id: 5, name: 'Keterangan' }
]

const ViewDeposit = props => {
  const { details, transition } = props // use for hitting api
  // console.log(details)
  const initialProfileDetailViewDepositList = {
    member_id: details?.id,
    page: 1,
    length: 10,
    search: '',
    start_date: ConvertDate(addDays(new Date(), -30)),
    end_date: ConvertDate(new Date())
  }

  const [openModalCalendar, setOpenModalCalendar] = useState(false)
  const [allPage, setAllPage] = useState(0)

  const [stateDeposit, dispatchDeposit] = useReducer(
    SearchSelectBoxDateReducer,
    initialProfileDetailViewDepositList
  )

  const {
    data: data_deposit_all,
    status: status_deposit_all,
    code: code_deposit_all
  } = useFetchPost(
    false,
    transition === true ? null : '/member/deposit',
    stateDeposit
  )

  useEffect(() => {
    if (status_deposit_all === 'fetched') {
      setOpenModalCalendar(false) // automatic close
    }
  }, [status_deposit_all])

  useEffect(() => {
    if (data_deposit_all?.total_page) {
      const page = PaginationNumber(data_deposit_all.total_page)
      setAllPage(page)
    }
  }, [data_deposit_all])

  const handlePage = e => {
    dispatchDeposit({ type: 'SET_PAGE', new_page: e })
  }
  const previousPage = () => {
    dispatchDeposit({
      type: 'SET_PAGE',
      new_page: Math.max(stateDeposit.page - 1, 1)
    })
  }
  const nextPage = () => {
    if (stateDeposit.page < allPage[allPage.length - 1])
      dispatchDeposit({
        type: 'SET_PAGE',
        new_page: stateDeposit.page + 1
      })
  }

  const updateValue = debounce(val => {
    handleSearch(val)
  }, 1000)

  const handleSearch = e => {
    const query = e
    if (query) {
      dispatchDeposit({ type: 'HANDLE_SEARCH', search_val: query })
    } else {
      dispatchDeposit({ type: 'HANDLE_SEARCH', search_val: '' })
    }
  }

  const RenderTableRowDeposit = ({ ord, index }) => {
    return (
      <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
        <TdGlobal>{ord?.date}</TdGlobal>
        <TdGlobal>{ord?.category}</TdGlobal>
        <TdGlobal>{ord?.debit}</TdGlobal>
        <TdGlobal>{ord?.credit}</TdGlobal>
        <TdGlobal>{ord?.balance}</TdGlobal>
        <TdGlobal>{ord?.ket}</TdGlobal>
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
          DEPOSIT
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
            Select Date Range - ({ConvertDate(stateDeposit.start_date)} -{' '}
            {ConvertDate(stateDeposit.end_date)})
          </h4>
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="search" style={{ fontWeight: 'bold' }}>
            Search Deposit
          </label>
          <input
            type="text"
            className="form-control"
            style={{ margin: '0 10px' }}
            placeholder="Search Deposit"
            id="search"
            name="search"
            autoComplete="off"
            onChange={e => updateValue(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Table
          headers={dataHeaderDeposit}
          totalPage={allPage}
          perPage={stateDeposit.length}
          currentPage={stateDeposit.page}
          onPageClick={page => handlePage(page)}
          nextClick={nextPage}
          prevClick={previousPage}
          setPerPage={e =>
            dispatchDeposit({ type: 'SET_PER_PAGE', new_per_page: parseInt(e) })
          }
          totalData={data_deposit_all?.total_data}
          hide={code_deposit_all !== 200 || data_deposit_all?.total_page < 1}
          fontSize={'1.4vmin'}
        >
          {status_deposit_all === 'fetching' ? (
            <TrGlobal>
              <TdGlobal colspan="6">Loading Data</TdGlobal>
            </TrGlobal>
          ) : code_deposit_all !== 200 ? (
            <TrGlobal>
              <TdGlobal colspan="6">No data</TdGlobal>
            </TrGlobal>
          ) : (
            data_deposit_all?.data &&
            data_deposit_all?.data.map((ord, index) => (
              <RenderTableRowDeposit index={index} key={index} ord={ord} />
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
                startDate: new Date(stateDeposit.start_date),
                endDate: new Date(stateDeposit.end_date),
                key: 'selection'
              }
            ]}
            months={2}
            direction="horizontal"
            onChange={e => {
              console.log(e.selection)
              dispatchDeposit({
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

export default ViewDeposit
