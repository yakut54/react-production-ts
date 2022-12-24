import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwither'
import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
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
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink
          to={RoutePath.main}
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О Сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
}
