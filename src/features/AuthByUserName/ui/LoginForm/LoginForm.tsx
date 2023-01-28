import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ password, username }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [onSuccess, dispatch, password, username])

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && (
          <Text
            text={t('Не правильный Логин или Пароль')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          autofocus
          type="text"
          className={cls.input}
          placeholder={t('Введите имя')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          onClick={onLoginClick}
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm