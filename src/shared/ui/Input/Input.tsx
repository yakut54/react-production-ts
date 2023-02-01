import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  type?: string
  autofocus?: boolean
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    value,
    readonly,
    className,
    autofocus,
    placeholder,
    type = 'text',
    onChange,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(e.currentTarget.selectionStart || 0)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  const isCaretVisible = isFocused && !readonly

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          readOnly={readonly}
          className={cls.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          onChange={onChangeHandler}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  )
})