import { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwither'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItemsList } from '../../model/itemsType'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev: boolean) => !prev)
  }

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      key={item.path}
      collapsed={collapsed}
    />
  )), [collapsed])

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
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </div>
  )
})