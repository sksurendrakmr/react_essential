import React from 'react'
/**
 * 
 */

type UserProps = {
    render: (isLoggedIn: boolean) => string;
}
export const User = ({ render }: UserProps) => {
    return (
        <div>{render(true)}</div>
    )
}
