import React from 'react'
import { BaseColor } from '../../../../utils'
import { ProfileBox } from '../../../organisms'
import Image from 'next/image'

const ProfileLeft = [
  'name',
  'address',
  'post_code',
  'province',
  'city',
  'subdistrict'
]
const ProfileMid = [
  'phone', 
  'email', 
  'gender', 
  'job', 
  'hide', 
  'otp'
]

const ViewProfile = props => {
  const { details } = props
  return (
    <div
      style={{
        border: '2px solid #ddd',
        borderRadius: 10,
        padding: '10px 10px 50px 10px',
        width: '80vw'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h4
          style={{
            margin: '5px 5px 5px 0',
            color: BaseColor.Primary
          }}
        >
          PROFILE / #{details?.id}
        </h4>
        <h4
          style={{
            margin: 5,
            color: 'green'
          }}
        >
          {details?.status}
        </h4>
      </div>
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
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '60%'
          }}
        >
          <div
            style={{
              width: '50%'
            }}
          >
            {ProfileLeft.map((x, index) => (
              <ProfileBox
                key={index}
                title={x}
                value={details?.[x] ? details?.[x] : '-'}
              />
            ))}
          </div>
          <div
            style={{
              width: '50%'
            }}
          >
            {ProfileMid.map((x, index) => (
              <ProfileBox
                key={index}
                title={x}
                value={
                  details?.[x]
                    ? x === 'gender'
                      ? details?.['gender'] === 'M'
                        ? 'Laki - Laki'
                        : 'Perempuan'
                      : details?.[x]
                    : '-'
                }
              />
            ))}
          </div>
        </div>
        <div
          style={{
            width: '40%'
          }}
        >
          {details.photo && (
            <Image src={details.photo} width="150" height="200" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewProfile
