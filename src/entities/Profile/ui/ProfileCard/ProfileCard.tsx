import { Country, CountrySelect } from 'entities/Country'
import { Currency, CurrencySelect } from 'entities/Currency'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Profile } from '../../model/types/profileSchema'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  data?: Profile
  error?: string
  className?: string
  readonly?: boolean
  isLoading?: boolean
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCountry?: (country: Country) => void
  onChangeCurrency?: (currency: Currency) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className, data, error, isLoading, readonly,
    onChangeFirstname, onChangeLastname, onChangeCity, onChangeCurrency,
    onChangeAge, onChangeAvatar, onChangeUsername, onChangeCountry,
  } = props

  const { t } = useTranslation('profile')
  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          text={t('Произошла ошибка при загрузке профиля')}
          title={t('Попробуйте обновить страницу')}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar alt="Avatar" src={data?.avatar} />
        </div>
      )}
      <div>
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.username}
          placeholder={t('Имя пользователя')}
          onChange={onChangeUsername}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstname}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваше Фамилия')}
          onChange={onChangeLastname}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.age}
          placeholder={t('Ваш Возраст')}
          onChange={onChangeAge}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault()
            }
          }}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.city}
          placeholder={t('Город')}
          onChange={onChangeCity}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
}