import React from 'react'

const Logo: React.FC = () => {
  return (
    <img src="data:image/png;base64,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" />
  )
}

export default Logo
