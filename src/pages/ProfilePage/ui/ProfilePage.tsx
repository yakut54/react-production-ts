import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  const { t } = useTranslation('profile')

  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      {t('Станица Профиля')}
    </div>
  )
}

export default ProfilePage