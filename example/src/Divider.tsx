import React, { CSSProperties } from 'react'

const Divider = (props: { children?: any, style?: CSSProperties, bold?: boolean }) => {
  return (
    <div
      style={{
        padding: props.bold ? '24px 0' : '12px 0',
        fontWeight: props.bold ? 'bold' : 'initial',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}

export default Divider