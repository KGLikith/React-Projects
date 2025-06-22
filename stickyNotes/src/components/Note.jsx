import React from 'react'
import { forwardRef } from 'react'

const Note = forwardRef(({content,position,...props},ref) => {
  return (
    <div
    ref={ref}
    style={{
        position:'absolute',
        left:position?.x,
        top:position?.y,
        border:'1px solid',
        userSelect:"none",
        padding:"10px",
        width:'200px',
        backgroundColor:'lightyellow',
        cursor:'move'
    }} {...props}
    >
      {content}
    </div>
  )
})

export default Note
