import React, { Component } from 'react'
import { TdGlobal, TrGlobal } from '../../components/atoms'
import ThGlobal from '../../components/atoms/ThGlobal'
import QRCode from 'qrcode.react'
import Image from 'next/image'
import { SumTotal } from '../../utils'

export class PoPrint extends Component {
  render() {
    return (
      <div
        style={{
          display: 'block',
          // justifyContent: 'center',
          // flexDirection: 'column',
          // width: '100%'
          // overflow: "scroll"
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          <div>
            <Image
              src="/LogoPurple.png"
              alt="Picture of Riseloka"
              width={180}
              height={60}
            />
            <h4>Purchase Order</h4>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <QRCode value={String(this.props.po_id)} size={75} />
            <h4 style={{ margin: 5 }}>PO #{this.props.po_id}</h4>
            <h4 style={{ margin: 5 }}>{this.props.date}</h4>
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <p style={{ margin: 0 }}>Pemesanan</p>
            <h4 style={{ margin: '5px 0' }}>Riseloka.com</h4>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <p style={{ margin: 0 }}>Vendor Brand</p>
            <h4 style={{ margin: '5px 0' }}>{this.props.brand}</h4>
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
            className="printElement"
            style={{ border: '1px solid #ccc', borderCollapse: 'collapse' }}
          >
            <thead style={{ border: '1px solid #ccc' }}>
              <TrGlobal>
                {this.props.dataHeader.map((head, index) => (
                  <ThGlobal key={index} border max={head.max} min={head.min}>
                    {head.name}
                  </ThGlobal>
                ))}
              </TrGlobal>
            </thead>
            <tbody style={{ border: '1px solid #ccc' }}>
              {this.props.statetotal &&
                this.props.statetotal.length > 0 &&
                this.props.statetotal.map((x, index) => (
                  <TrGlobal
                    key={index}
                  >
                    <TdGlobal border>{x.order_id}</TdGlobal>
                    <TdGlobal border>{x.sku}</TdGlobal>
                    <TdGlobal border>{x.variant_1}</TdGlobal>
                    <TdGlobal border>{x.variant_2}</TdGlobal>
                    <TdGlobal border>{x.qty}</TdGlobal>
                  </TrGlobal>
                ))}
              <TrGlobal>
                <TdGlobal colspan={4} border>
                  <h4 style={{ margin: 0 }}>Total</h4>
                </TdGlobal>
                <TdGlobal border>
                  {SumTotal(this.props.statetotal, 'qty')}
                </TdGlobal>
              </TrGlobal>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
