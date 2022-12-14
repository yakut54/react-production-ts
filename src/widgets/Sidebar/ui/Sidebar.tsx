import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwither'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export function Sidebar(props: SidebarProps) {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button type="button" onClick={onToggle}>
        {t('тумблер')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
