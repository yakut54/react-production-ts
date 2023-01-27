import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { profileActions, profileReducer } from 'entities/Profile'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getTestText } from 'entities/Profile/model/selectors/getTestText/getTestText'
import { useCallback } from 'react'
import cls from './ProfilePage.module.scss'

const reducers: ReducerList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const testText = useSelector(getTestText)

  const testFunc = useCallback(() => {
    dispatch(profileActions.print())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t('Станица Профиля')}
        <br />
        { testText }
        <br />
        <button type="button" onClick={testFunc}>12345</button>
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
