import {
  ChangeEvent,
  CSSProperties,
  KeyboardEvent,
  useEffect,
  useState
} from 'react'
import styles from './EntryField.module.css'

interface Props {
  id?: string
  value?: string
  style?: CSSProperties
  className?: string
  label?: string
  onChange?: (value: string) => void
  onInput?: (value: string) => void
}

export function EntryField({ label, value, style, onChange, onInput, className }: Props) {
  const [text, setText] = useState(value ?? '')

  useEffect(() => {
    setText(value ?? '')
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    onInput?.(e.target.value)
  }

  const handleBlur = () => {
    onChange?.(text)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
      handleBlur()
    }
  }

  return (
    <label className={styles.container} style={style}>
      {!(label == null) && <div className={styles.label}>{label}</div>}
      <input
        id={value}
        className={className}
        type="text"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
    </label>
  )
}
export default EntryField
/* import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

type Props = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string
}

const EntryField = ({
  {id, classNames, label, error}:Props, ...attrs
}) => {
  const classes = classNames(
    'input',
    'classNAme',
    { error }
  )

  return (
    <div className="inputWrapper">
      {label &&
        <label className = "InputLabel" htmlFor={id}>{label}</label>
      }
      <input
        name = {id}
        id = {id}
        classNames = {classes}
        {...attrs}
      />
      { error &&
          <span className="InputError">{error}</span>
      }
    </div>
  )
}

export default EntryField
*/
