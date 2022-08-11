import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import styles from './SuperButton.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps
    }
) => {
    const finalClassName = `${red ? styles.red : styles.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}
