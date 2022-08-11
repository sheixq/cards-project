import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import styles from './SuperInput.module.scss'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

export const SuperInput: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    const finalSpanClassName = `${styles.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${styles.errorInput} ${error ? styles.superInput : className}`

    return (
        <>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    )
}

