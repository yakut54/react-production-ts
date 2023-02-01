import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = memo((props: PageErrorProps) => {
  const { className } = props
  const { t } = useTranslation('error')

  const onReload = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <button type="button" onClick={onReload}>{t('Обновить')}</button>
    </div>
  )
})