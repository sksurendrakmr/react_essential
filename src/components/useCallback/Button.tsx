import React from 'react'

type ButtonProps = {
    handleClick: () => void;
    children: string;
}
export const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
