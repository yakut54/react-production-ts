import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { profileReducer } from 'entities/Profile'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
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

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount >
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t('Станица Профиля')}
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
