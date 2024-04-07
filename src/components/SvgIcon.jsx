import React from 'react'
import propTypes from 'prop-types'

const SvgIcon = ({ name, width = 35, height = 35, color = '' }) => {
  return (
    <svg width={width} height={height}>
      <use href={`#icon-${name}`} fill={color} ></use>
    </svg>
  )
}

SvgIcon.propTypes = {
  name: propTypes.string.isRequired,
  width: propTypes.number,
  height: propTypes.number,
  color: propTypes.string
}

export default SvgIcon
