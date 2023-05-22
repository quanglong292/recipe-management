import React from 'react'

type ButtonPropType = {
    onClick?: () => void,
    children: React.ReactNode;
}

const Button: React.FC<ButtonPropType> = (props) => {
    return (
        <button className='border-2 rounded-md px-4 py-1 hover:border-blue-400' {...props}>{props.children}</button>
    )
}

export default Button