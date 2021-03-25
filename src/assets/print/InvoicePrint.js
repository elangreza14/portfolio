import React, { Component } from 'react'
// import { TdGlobal, TrGlobal } from '../../components/atoms'
// import ThGlobal from '../../components/atoms/ThGlobal'
import QRCode from 'qrcode.react'
// import Image from 'next/image'
import { FormatUang, SumTotal } from '../../utils'
import Barcode from 'react-barcode'

export class InvoicePrint extends Component {
  render() {
    return (
      <div
        style={{
          display: 'block'
        }}
      >
        {/* base before change all */}

        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          <div style={{ width: '33%' }}>
            {this.props?.sender?.logo != '' ? (
              <img
                src={this.props?.sender?.logo || 'test'}
                alt={`Picture D1 of ${this.props?.sender?.name || 'test'}`}
                width={67.5}
                height={67.5}
              />
            ) : (
              'No Photo'
            )}
            <h4 style={{ margin: '2.5px 0' }}>Invoice Order</h4>
          </div>
          <div style={{ width: '34%' }}>
            <Barcode value={String(this.props?.po_id)} height={50} />
          </div>
          <div
            style={{
              width: '33%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <QRCode value={String(this.props?.po_id)} size={75} />
            <h4 style={{ margin: '2.5px 0' }}>INV #{this.props?.po_id}</h4>
            <h4 style={{ margin: '0 0 5px 0' }}>{this.props?.date}</h4>
          </div>
        </div>

        <div>
          <div style={{ border: '1px solid #ccc' }} />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            margin: '5px 0 10px 0'
          }}
        >
          <div
            style={{
              width: '33%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {this.props?.data?.awb && (
              <>
                <p style={{ margin: 0 }}>AWB</p>
                <Barcode
                  value={String(this.props?.data?.awb)}
                  height={35}
                  width={1}
                />
              </>
            )}
          </div>
          {this.props?.courier?.booking_code && (
            <div
              style={{
                width: '34%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <p style={{ margin: 0 }}>Booking Code </p>
              <Barcode
                value={String(this.props?.courier?.booking_code)}
                height={35}
                width={2}
              />
            </div>
          )}
          <div
            style={{
              width: '33%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <p style={{ margin: 0 }}>Courier</p>
            <h5 style={{ margin: 0 }}>{this.props?.courier?.courier_name}</h5>
            <h5 style={{ margin: 0 }}>{this.props?.courier?.service}</h5>
            <h5 style={{ margin: 0 }}>
              Fee: {FormatUang(this.props?.courier?.fee)}
            </h5>
            <h5 style={{ margin: 0 }}>
              Asuransi: {this.props?.data?.insurance}
            </h5>
          </div>
        </div>

        <div>
          <div style={{ border: '1px solid #ccc' }} />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            margin: '5px 0 10px 0'
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                width: '50%'
              }}
            >
              <p style={{ margin: 0 }}>Sender</p>
              <h5 style={{ margin: 0 }}>{this.props?.sender?.name}</h5>
              <h5 style={{ margin: 0 }}>{this.props?.sender?.phone}</h5>
              <h5 style={{ margin: 0 }}>{this.props?.sender?.site}</h5>
            </div>
            <div
              style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end'
              }}
            >
              <p style={{ margin: 0 }}>Receiver</p>
              <h5 style={{ margin: 0 }}>{this.props?.receiver?.name}</h5>
              <h5 style={{ margin: 0 }}>{this.props?.receiver?.address}</h5>
              <h5 style={{ margin: 0, textAlign: 'right' }}>
                {this.props?.receiver?.sub_district}
              </h5>
              <h5 style={{ margin: 0 }}>{this.props?.receiver?.city}</h5>
              <h5 style={{ margin: 0 }}>{this.props?.receiver?.province}</h5>
              <h5 style={{ margin: 0 }}>
                Phone: {this.props?.receiver?.phone}
              </h5>
            </div>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <table
            className="potable"
            style={{ border: '1px solid #ccc', borderCollapse: 'collapse' }}
          >
            <thead style={{ border: '1px solid #ccc' }}>
              <TrGlobal>
                {this.props?.dataHeader.map((head, index) => (
                  <ThGlobal key={index} border max={head.max} min={head.min}>
                    {head.name}
                  </ThGlobal>
                ))}
              </TrGlobal>
            </thead>
            <tbody style={{ border: '1px solid #ccc' }}>
              {this.props?.statetotal &&
                this.props?.statetotal.length > 0 &&
                this.props?.statetotal.map((x, index) => (
                  <TrGlobal key={index}>
                    <TdGlobal border>{x?.product}</TdGlobal>
                    <TdGlobal border>{x?.variant1}</TdGlobal>
                    <TdGlobal border>{x?.variant2}</TdGlobal>
                    <TdGlobal border>{x?.weight}</TdGlobal>
                    <TdGlobal border>{x?.qty}</TdGlobal>
                  </TrGlobal>
                ))}
              <TrGlobal>
                <TdGlobal colspan={3} border>
                  <h4 style={{ margin: 0 }}>Total</h4>
                </TdGlobal>
                <TdGlobal border>
                  {SumTotal(this.props?.statetotal, 'weight')} Gram
                </TdGlobal>
                <TdGlobal border>
                  {SumTotal(this.props?.statetotal, 'qty')}
                </TdGlobal>
              </TrGlobal>
            </tbody>
          </table>
        </div> */}
        <div style={{ width: '100%' }}>
          <table
            style={{
              width: '100%',
              border: '1.5px solid black',
              borderRadius: 10,
              borderSpacing: 0
              // borderCollapse: 'collapse'
            }}
          >
            <tbody>
              <tr style={{ border: '1px solid black' }}>
                <td
                  style={{
                    border: '1px solid black',
                    borderRightStyle: 'none',
                    borderTopLeftRadius: 10,
                    minWidth: 200
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                      }}
                    >
                      <div>
                        {this.props?.sender?.logo != '' ? (
                          <img
                            src={this.props?.sender?.logo || 'test'}
                            alt={`Picture D1 of ${
                              this.props?.sender?.name || 'test'
                            }`}
                            width={67.5}
                            height={67.5}
                            style={{
                              margin: 10,
                              width: 'auto',
                              height: 'auto',
                              maxHeight: 90,
                              maxWidth: 140
                            }}
                          />
                        ) : (
                          'No Photo'
                        )}
                      </div>
                      <h4 style={{ margin: '0px 5px 5px 5px' }}>
                        {this.props?.sender?.name}
                      </h4>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <QRCode value={String(this.props?.po_id)} size={75} />
                    </div>
                  </div>
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    borderLeftStyle: 'none',
                    borderTopRightRadius: 10,
                    minWidth: 500
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <h4 style={{ margin: '0px 5px 5px 5px' }}>ORDER ID</h4>
                    <Barcode
                      value={String(this.props?.data?.order_id)}
                      height={60}
                      width={3}
                    />
                  </div>
                </td>
              </tr>

              <tr style={{ border: '1px solid black' }}>
                <td
                  style={{
                    border: '1px solid black',
                    minWidth: 250,
                    verticalAlign: 'top'
                  }}
                >
                  {/* Dari */}
                  <div
                    style={{
                      margin: '10px 20px'
                    }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td colSpan="3">
                            <h4 style={{ margin: 0 }}>Pengirim</h4>
                          </td>
                        </tr>
                        <tr>
                          <td>Nama</td>
                          <td>:</td>
                          <td>
                            <h4 style={{ margin: 0 }}>
                              {this.props?.sender?.name}
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td>No. HP</td>
                          <td>:</td>
                          <td>
                            <h4 style={{ margin: 0 }}>
                              {this.props?.sender?.phone}
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td>:</td>
                          <td>
                            <h4 style={{ margin: 0 }}>
                              {this.props?.sender?.site}
                            </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
                <td style={{ border: '1px solid black', minWidth: 500 }}>
                  <div
                    style={{
                      margin: '10px 20px'
                    }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td colSpan="3">
                            <h4 style={{ margin: 0 }}>Penerima</h4>
                          </td>
                        </tr>
                        <tr>
                          <td>Nama</td>
                          <td>:</td>
                          <td>
                            <h4 style={{ margin: 0 }}>
                              {this.props?.receiver?.name}
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td>No. HP</td>
                          <td>:</td>
                          <td>
                            <h4 style={{ margin: 0 }}>
                              {this.props?.receiver?.phone}
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td>Alamat</td>
                          <td>:</td>
                          <td>
                            <h4 style={{ margin: 0 }}>
                              {this.props?.receiver?.address},{' '}
                              {this.props?.receiver?.sub_district},{' '}
                              {this.props?.receiver?.city},{' '}
                              {this.props?.receiver?.province},{' '}
                            </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr style={{ border: '1px solid black' }}>
                <td
                  style={{
                    borderTop: '1px solid black',
                    borderBottom: '1px solid black',
                    borderLeft: '1px solid black',
                    borderRight:
                      this.props?.courier?.booking_code 
                        ? '1px solid black'
                        : 'none',
                    minWidth: 250
                  }}
                >
                  <div
                    style={{
                      margin: '10px 20px'
                    }}
                  >
                    {/* courier */}
                    <table>
                      <tbody>
                        <tr>
                          <td colSpan="3">
                            <h4 style={{ margin: 0 }}>Courier</h4>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">
                            <h4 style={{ margin: 0, color: 'red' }}>
                              {this.props?.courier?.courier_name} -{' '}
                              {this.props?.courier?.service}
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td>Fee</td>
                          <td>:</td>
                          <td>
                            <h4 style={{ margin: 0 }}>
                              {this.props?.courier?.fee &&
                                `Rp.${FormatUang(this.props?.courier?.fee)}`}
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td>Insurance</td>
                          <td>:</td>
                          <td>
                            <h4 style={{ margin: 0 }}>
                              {this.props?.data?.insurance &&
                                `Rp.${FormatUang(this.props?.data?.insurance)}`}
                            </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>

                <td
                  style={{
                    borderLeft:
                      this.props?.courier?.booking_code 
                        ? '1px solid black'
                        : 'none',
                    borderRight: '1px solid black',
                    borderTop: '1px solid black',
                    borderBottom: '1px solid black',
                    minWidth: 500
                  }}
                >
                  {this.props?.courier?.booking_code  && (
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          // justifyContent: 'center',
                          flexDirection: 'column'
                        }}
                      >
                        <h4 style={{ margin: '0px 5px 5px 5px' }}>
                          KODE BOOKING
                        </h4>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          flexDirection: 'row'
                        }}
                      >
                        <div>
                          <QRCode
                            value={String(this.props?.courier?.booking_code)}
                            size={75}
                          />
                        </div>
                        <div>
                          <Barcode
                            value={String(this.props?.courier?.booking_code)}
                            height={50}
                            // width={2}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>

              <tr style={{ border: '1px solid black' }}>
                <td
                  style={{
                    border: '1px solid black',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    minWidth: 100
                  }}
                  colSpan="2"
                >
                  <div
                    style={{
                      margin: '10px 20px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end'
                      }}
                    >
                      <h4 style={{ margin: 0 }}>Pembelian</h4>
                      <p style={{ margin: '0px 0px 0px 30px' }}>
                        Total Jumlah x{' '}
                        <b>{SumTotal(this.props?.statetotal, 'qty')}</b>
                      </p>
                      <p style={{ margin: '0px 0px 0px 30px' }}>
                        Total Berat{' '}
                        <b>{SumTotal(this.props?.statetotal, 'weight')} </b>
                        Gram
                      </p>
                      <p style={{ margin: '0px 0px 0px 60px' }}>
                        Tanggal Pembelian: <b>{this.props?.date} </b>
                      </p>
                    </div>
                    <div>
                      <table>
                        <tbody>
                          {this.props?.statetotal &&
                            this.props?.statetotal.length > 0 &&
                            this.props?.statetotal.map((x, index) => (
                              <tr key={index}>
                                <td style={{ padding: 0 }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      width: 30,
                                      height: 45
                                    }}
                                  >
                                    <h4 style={{ margin: 0 }}>{index + 1}.</h4>
                                  </div>
                                </td>
                                <td style={{ width: 800 }}>
                                  <div
                                    style={{
                                      margin: '5px 15px'
                                    }}
                                  >
                                    <div>
                                      <h4 style={{ margin: 0 }}>
                                        {x?.product}
                                      </h4>
                                    </div>
                                    <div
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row'
                                      }}
                                    >
                                      <p style={{ margin: 0 }}>
                                        {x?.variant1} - {x?.variant2}
                                      </p>
                                      {/* <p style={{ margin: '0px 0px 0px 30px' }}>
                                      </p> */}
                                      <p style={{ margin: '0px 0px 0px 30px' }}>
                                        Berat {x?.weight} Gr
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      width: 30,
                                      height: 45
                                    }}
                                  >
                                    <h4 style={{ margin: 0 }}>x{x?.qty}</h4>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ margin: 20 }} />

        {this.props?.courier?.booking_img && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="customnocutdiv"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                height: 1100
                // background: 'yellow'
                // maxWidth: 450,
                // maxHeight: 900
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  height: 650,
                  // background: 'pink',
                  padding: 10,
                  margin: 10
                  // maxWidth: 450,
                  // maxHeight: 900
                }}
              >
                {this.props?.courier?.booking_img != '' ? (
                  <img
                    src={this.props?.courier?.booking_img || 'test'}
                    alt={`Picture D1 of ${
                      this.props?.courier?.booking_code || 'test'
                    }`}
                    // width={337.5}
                    // height={450}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: 650,
                      maxHeight: 650,
                      border: '1px solid black',
                      msTransform: 'rotate(90deg)',
                      WebkitTransform: 'rotate(90deg)',
                      transform: 'rotate(90deg)',
                      objectFit: 'cover'
                      //                       ms: rotate(90deg); /* IE 9 */
                      // -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
                      // transform: rotate(90deg);
                    }}
                  />
                ) : (
                  'No Photo'
                )}
              </div>
              <h4 style={{ margin: '5px 0' }}>
                Courier: {this.props?.courier?.courier_name} Booking Code:{' '}
                {this.props?.courier?.booking_code}
              </h4>
            </div>
          </div>
        )}
      </div>
    )
  }
}

//  {this.props?.data?.shipdeo_logo != '' ? (
//           <img
//             src={this.props?.data?.shipdeo_logo || 'test'}
//             alt={`Picture D10 of ${this.props?.sender?.name || 'test'}`}
//             width={120}
//             height={50}
//             style={{
//               width: 'auto'
//             }}
//             // style={{ margin: '5px 0' }}
//           />
//         ) : (
//           'No Photo'
//         )}
