import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { OrderAddNote } from '../../../../FormControl/FormStructure'
import { useFetchGetWait, useFetchPost } from '../../../../hooks'
import { BaseColor } from '../../../../utils'
import { ButtonPrimary, TdGlobal, ThGlobal, TrGlobal } from '../../../atoms'
import { ModalReact } from '../../../organisms'
import { FormLister } from '../../../template'
import Swal from 'sweetalert2'

const dataHeader = [
  { id: 0, name: 'Admin', max: 120, min: 120 },
  { id: 1, name: 'Tanggal', max: 100, min: 100 },
  { id: 2, name: 'Note', max: 1000, min: 500 },
  { id: 3, name: 'Action', max: 120, min: 120 }
]

const RenderTableRowDetail = ({ po, index }) => {
  return (
    <TrGlobal customback={index % 2 !== 0 && '#f8f7ff'}>
      <TdGlobal border>{po?.admin_name}</TdGlobal>
      <TdGlobal border>{po?.date}</TdGlobal>
      <TdGlobal border>{po?.note}</TdGlobal>
      <TdGlobal border>
        {po?.status !== 'canceled' && (
          <ButtonPrimary
            type="button"
            title="Update"
            width="125px"
            customcolor={BaseColor.Primary}
            noShadow
            onClick={() => null}
          />
        )}
      </TdGlobal>
    </TrGlobal>
  )
}

const ViewCatatan = props => {
  const { details, transition } = props
  const [openModalAddNote, setOpenModalAddNote] = useState(false)
  const [currentAddNote, setCurrentAddNote] = useState(null)
  const [refreshAll, setRefreshAll] = useState(false)

  const { data, code } = useFetchGetWait(
    false,
    transition === true ? null : `/order-notes?order_id=${details.data.id}`,
    refreshAll
  )

  const { status } = useFetchPost(false, '/order-notes', currentAddNote)

  const handleAddNote = x => {
    setCurrentAddNote(x)
  }

  useEffect(() => {
    if (status === 'fetched' && currentAddNote !== null) {
      setCurrentAddNote(null)
      setOpenModalAddNote(false)
      Swal.fire('Success!', 'Success Menambah Catatan!', 'success').then(() => {
        setCurrentAddNote(null)
        setOpenModalAddNote(false)
        setRefreshAll(old => !old)
      })
    }
  }, [status, currentAddNote])

  return (
    <div
      style={{
        border: '2px solid #ddd',
        borderRadius: 20,
        padding: 10,
        width: '80vw'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginRight: 10
        }}
      >
        <div>
          <h4
            style={{
              margin: 5,
              color: BaseColor.Primary
            }}
          >
            CATATAN
          </h4>
        </div>

        <div>
          <ButtonPrimary
            type="button"
            title="Tambah Catatan"
            width="150px"
            customcolor={BaseColor.Primary}
            noShadow
            onClick={() => setOpenModalAddNote(true)}
          />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <table
          className="potable"
          style={{
            border: '1px solid #ccc',
            borderCollapse: 'collapse'
          }}
        >
          <thead
            style={{
              background: '#6d7ae0',
              color: 'white',
              border: '1px solid #6d7ae0'
            }}
          >
            <TrGlobal customborder="1px solid #6d7ae0">
              {dataHeader?.map((head, index) => (
                <ThGlobal
                  key={index}
                  customborder="1px solid #6d7ae0"
                  min={head.min}
                  max={head.max}
                >
                  {head.name}
                </ThGlobal>
              ))}
            </TrGlobal>
          </thead>
          <tbody style={{ border: '1px solid #ccc' }}>
            {data?.length === 0 || code !== 200 ? (
              <TrGlobal>
                <TdGlobal colspan={4}>No data</TdGlobal>
              </TrGlobal>
            ) : (
              data?.map((po, index) => (
                <RenderTableRowDetail
                  key={index}
                  index={index}
                  po={po}
                  // action={setOpenModalAddNote}
                  // handleaction={handleactiondelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div>
        <ModalReact
          isOpen={openModalAddNote}
          onAfterOpen={() => setOpenModalAddNote(true)}
          onRequestClose={() => setOpenModalAddNote(false)}
          sizeWidth="500px"
          title={`Select Date`}
        >
          <Formik
            initialValues={{
              order_id: details.data.id,
              note: ''
            }}
            onSubmit={values => {
              // console.log(values)
              handleAddNote(values)
            }}
          >
            {({ values }) => (
              <Form>
                {OrderAddNote.map((fld, index) => (
                  <FormLister key={index} fld={fld} values={values} />
                ))}
                <div
                  style={{
                    margin: '15px 0 0',
                    display: 'flex',
                    justifyContent: 'flex-end'
                  }}
                >
                  <ButtonPrimary
                    type="submit"
                    title="Update!"
                    width="125px"
                    customcolor={BaseColor.Primary}
                    noShadow
                  />
                </div>
              </Form>
            )}
          </Formik>
        </ModalReact>
      </div>
    </div>
  )
}

export default ViewCatatan
