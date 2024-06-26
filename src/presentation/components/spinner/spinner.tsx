import React from 'react'
import * as Styles from './spinner-styles.scss'

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} data-testid="spinner" className={[Styles.spinner, props.className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
