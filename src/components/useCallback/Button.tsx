import React from 'react'

type ButtonProps = {
    handleClick: () => void;
    children: string;
}
const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default React.memo(Button)
