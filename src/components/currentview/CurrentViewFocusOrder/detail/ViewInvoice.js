import React from 'react'
import { BaseColor } from '../../../../utils'

const ViewInvoice = props => {
  const { details } = props
  return (
    <div
      style={{
        border: '2px solid #ddd',
        borderRadius: 10,
        padding: 10,
        width: '80vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h4
            style={{
              margin: 5,
              color: BaseColor.Primary
            }}
          >
            INVOICE / #{details?.data?.invoice?.id}{' '}
          </h4>
          <h4
            style={{
              margin: 5,
              color: 'green'
            }}
          >
            {details?.data?.invoice?.status}
          </h4>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Source</td>
                <td style={{ padding: '5px 10px 5px 30px' }}>:</td>
                <td>{details?.data?.source}</td>
              </tr>
              <tr>
                <td>Tanggal</td>
                <td style={{ padding: '5px 10px 5px 30px' }}>:</td>
                <td>{details?.data?.invoice?.date}</td>
              </tr>
              <tr>
                <td>Tanggal Konfirmasi</td>
                <td style={{ padding: '5px 10px 5px 30px' }}>:</td>
                <td>{details?.data?.invoice?.transfer_date}</td>
              </tr>
              <tr>
                <td>Bukti Konfirmasi</td>
                <td style={{ padding: '5px 10px 5px 30px' }}>:</td>
                <td>
                  {/* {details?.data?.invoice?.proof} */}
                  {details?.data?.invoice?.proof ? (
                    <img
                      src={details?.data?.invoice?.proof}
                      width={337.5}
                      height={450}
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '337.5px',
                        maxHeight: 450,
                        border: '1px solid black'
                      }}
                    />
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end'
            }}
          >
            <table>
              <tbody>
                <tr>
                  <td>Source</td>
                  <td style={{ padding: '5px 10px 5px 30px' }}>:</td>
                  <td>{details?.data?.source}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h4>Bank: {details?.data?.invoice?.bank}</h4>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Amount</td>
                <td style={{ padding: '5px 10px 5px 30px' }}>:</td>
                <td>{details?.data?.invoice?.amount}</td>
              </tr>
              <tr>
                <td>Transfer Code</td>
                <td style={{ padding: '5px 10px 5px 30px' }}>:</td>
                <td>{details?.data?.invoice?.transfer_code}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td style={{ padding: '5px 10px 5px 30px' }}>:</td>
                <td>
                  {details?.data?.invoice?.amount +
                    details?.data?.invoice?.transfer_code}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewInvoice
