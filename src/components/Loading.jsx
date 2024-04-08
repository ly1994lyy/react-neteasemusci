import React, { Suspense } from 'react'
import propTypes from 'prop-types'

const Loading = ({ children }) => {
  return (
      <Suspense fallback={<div>Loading</div>}>
          {children}
        </Suspense>
  )
}

Loading.propTypes = {
  children: propTypes.element.isRequired
}

export default Loading
