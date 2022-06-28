import React, { useRef } from 'react'
import { Input } from './Input'

export const ParentInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <Input ref={inputRef} />
            <button>Focus Input</button>
        </>
    )
}
