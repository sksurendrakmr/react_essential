import React from 'react'

export const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
    return (
        <input type="text" ref={ref} />
    )
}) 
