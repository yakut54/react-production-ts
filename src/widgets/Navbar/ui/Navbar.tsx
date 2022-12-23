import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export function Navbar(props: NavbarProps) {
  const { className } = props
  const { t } = useTranslation('navbar')
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [setIsAuthModal])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          onClick={onToggleModal}
          className={cls.mainLink}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Войти')}
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          {t('test-text')}
        </Modal>
      </div>
    </div>
  )
}
