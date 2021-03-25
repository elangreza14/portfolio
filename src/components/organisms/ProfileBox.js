import React from 'react'

const ProfileBox = ({ title, value }) => {
  return title === 'hide' ? (
    <div style={{ width: '100%', height: 50 }}></div>
  ) : (
    <div style={{ width: '100%', minHeight: 50, maxHeight: 150 }}>
      <h5 style={{ fontWeight: 'normal', margin: 0 }}>{title}</h5>
      <h4 style={{ marginTop: 0 }}>{value}</h4>
    </div>
  )
}

export default ProfileBox
