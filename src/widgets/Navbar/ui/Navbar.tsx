import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUserName'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export function Navbar(props: NavbarProps) {
  const { className } = props
  const { t } = useTranslation('navbar')
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [setIsAuthModal])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [setIsAuthModal])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button
            onClick={onLogout}
            className={cls.mainLink}
            theme={ButtonTheme.CLEAR_INVERTED}
          >
            {t('Выйти')}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          onClick={onShowModal}
          className={cls.mainLink}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Войти')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </div>
  )
}