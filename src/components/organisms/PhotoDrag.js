import React from 'react'

const imgWithClick = { cursor: 'pointer' }

const PhotoDrag = props => {
  // console.log(props)
  let { index, onClick, photo, direction, top, left } = props
  const imgStyle = {
    width: 'auto',
    height: 'auto',
    maxHeight: 200,
    maxWidth: 200,
    marginRight: 5,
    border: '1px solid #4c3494'
  }
  if (direction === 'column') {
    imgStyle.position = 'absolute'
    imgStyle.left = left
    imgStyle.top = top
  }

  const handleClick = event => {
    onClick(event, { photo, index })
  }

  return (
    // <div style={{ width: 180, height: 180, background:'yellow' }}>
      <img
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        {...photo}
        src={props.value.src}
        onClick={onClick ? handleClick : null}
        alt="img"
      />
    // </div>
  )
}

export default React.memo(PhotoDrag)
