import { addDays } from 'date-fns'
import { debounce } from 'lodash'
import React, { useEffect, useReducer, useState } from 'react'
import { DateRange } from 'react-date-range'
import { useFetchPost } from '../../../../hooks'
import { SearchSelectBoxDateReducer } from '../../../../reducers'
import { BaseColor, ConvertDate, PaginationNumber } from '../../../../utils'
import { TdGlobal, TrGlobal } from '../../../atoms'
import { ModalReact, Table } from '../../../organisms'

const dataHeaderMembership = [
  { id: 0, name: 'No' },
  { id: 1, name: 'Activated Date' },
  { id: 2, name: 'Expire Date' }
]

const ViewMembership = props => {
  const { details, transition } = props // use for hitting api

  const initialProfileDetailViewMembershipList = {
    member_id: details?.id,
    page: 1,
    length: 10,
    search: '',
    start_date: ConvertDate(addDays(new Date(), -30)),
    end_date: ConvertDate(new Date())
  }

  const [openModalCalendar, setOpenModalCalendar] = useState(false)
  const [allPage, setAllPage] = useState(0)

  const [stateMembership, dispatchMembership] = useReducer(
    SearchSelectBoxDateReducer,
    initialProfileDetailViewMembershipList
  )

  const {
    data: data_membership_all,
    status: status_membership_all,
    code: code_membership_all
  } = useFetchPost(
    false,
    transition === true ? null : '/member/membership',
    stateMembership
  )

  useEffect(() => {
    if (status_membership_all === 'fetched') {
      setOpenModalCalendar(false) // automatic close
    }
  }, [status_membership_all])

  useEffect(() => {
    if (data_membership_all?.total_page) {
      const page = PaginationNumber(data_membership_all.total_page)
      setAllPage(page)
    }
  }, [data_membership_all])

  const handlePage = e => {
    dispatchMembership({ type: 'SET_PAGE', new_page: e })
  }
  const previousPage = () => {
    dispatchMembership({
      type: 'SET_PAGE',
      new_page: Math.max(stateMembership.page - 1, 1)
    })
  }
  const nextPage = () => {
    if (stateMembership.page < allPage[allPage.length - 1])
      dispatchMembership({
        type: 'SET_PAGE',
        new_page: stateMembership.page + 1
      })
  }

  const updateValue = debounce(val => {
    handleSearch(val)
  }, 1000)

  const handleSearch = e => {
    const query = e
    if (query) {
      dispatchMembership({ type: 'HANDLE_SEARCH', search_val: query })
    } else {
      dispatchMembership({ type: 'HANDLE_SEARCH', search_val: '' })
    }
  }

  const RenderTableRowMembershipViewFocus = ({ inv, index }) => {
    return (
      <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
        <TdGlobal>{index + 1}</TdGlobal>
        <TdGlobal>{inv?.ActivatedDate}</TdGlobal>
        <TdGlobal>{inv?.ExpireDate}</TdGlobal>
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
          MEMBERSHIP
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
            Select Date Range - ({ConvertDate(stateMembership.start_date)} -{' '}
            {ConvertDate(stateMembership.end_date)})
          </h4>
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="search" style={{ fontWeight: 'bold' }}>
            Search Membership
          </label>
          <input
            type="text"
            className="form-control"
            style={{ margin: '0 10px' }}
            placeholder="Enter Membership ID"
            id="search"
            name="search"
            autoComplete="off"
            onChange={e => updateValue(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Table
          headers={dataHeaderMembership}
          totalPage={allPage}
          perPage={stateMembership.length}
          currentPage={stateMembership.page}
          onPageClick={page => handlePage(page)}
          nextClick={nextPage}
          prevClick={previousPage}
          setPerPage={e =>
            dispatchMembership({
              type: 'SET_PER_PAGE',
              new_per_page: parseInt(e)
            })
          }
          totalData={data_membership_all?.total_data}
          hide={code_membership_all !== 200}
          fontSize={'1.4vmin'}
        >
          {status_membership_all === 'fetching' ? (
            <TrGlobal>
              <TdGlobal colspan="6">Loading Data</TdGlobal>
            </TrGlobal>
          ) : code_membership_all !== 200 ? (
            <TrGlobal>
              <TdGlobal colspan="6">No data</TdGlobal>
            </TrGlobal>
          ) : (
            data_membership_all?.data &&
            data_membership_all?.data.map((inv, index) => (
              <RenderTableRowMembershipViewFocus
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
                startDate: new Date(stateMembership.start_date),
                endDate: new Date(stateMembership.end_date),
                key: 'selection'
              }
            ]}
            months={2}
            direction="horizontal"
            onChange={e => {
              console.log(e.selection)
              dispatchMembership({
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

export default ViewMembership
