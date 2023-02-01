import { ChangeEvent, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, value, readonly, onChange,
  } = props
  const { t } = useTranslation()

  const onCangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={cls.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options])

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        className={cls.select}
        value={value}
        disabled={readonly}
        onChange={onCangeHandler}
      >
        {optionsList}
      </select>
    </div>
  )
})