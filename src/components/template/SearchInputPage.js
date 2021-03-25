import React from 'react'

const SearchInputPage = ({ updateValue }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label htmlFor="search" style={{ fontWeight: 'bold' }}>
        Search Order ID
      </label>
      <input
        type="text"
        className="form-control"
        style={{ margin: '0 10px' }}
        placeholder="Enter Order ID"
        id="search"
        name="search"
        autoComplete="off"
        onChange={e => updateValue(e.target.value)}
      />
    </div>
  )
}

export default React.memo(SearchInputPage)
