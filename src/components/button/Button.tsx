/*import {
    ChangeEvent,
    CSSProperties,
    KeyboardEvent,
    useEffect,
    useState
} from 'react'
import
from './Button.module.css'

interface Props {
    id?: string
    onClick?: (value: string) => void
    style?: CSSProperties
    text?: string

function Button({ id, onClick, text }: Props) {
return (
  <div className={styles.content}>
      <a>{text}</a>
  </div>
)}


export {
    Button
}
*/

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.module.css'



type ButtonProps = {
    children: React.ReactNode,
    onClick(): void,
    className?: string,
    disabled?: boolean,
    active?: boolean,
};

const Button: React.FC<ButtonProps> = ({
    children, onClick, className, disabled, active

}) => {

    const classes = classNames(
        'btn',
        className,
        { active },
    )

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};



type DefaultProps = {
    children: 'Default button',
    className: '',
    disabled: false,
    active: false,
}

export {
    Button,
}
