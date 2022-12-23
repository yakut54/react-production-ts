import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export function LangSwitcher(props: LangSwitcherProps) {
  const { className, short } = props
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={toggle}
    >
      {/* i18next-extract-disable-next-line */}
      {t(short ? 'Короткий Язык' : 'Язык')}
    </Button>
  )
}
