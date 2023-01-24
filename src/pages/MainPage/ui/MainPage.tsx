import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      {t('Главная страница')}
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default MainPage