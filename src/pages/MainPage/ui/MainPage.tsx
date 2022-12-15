import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'

function MainPage() {
  const { t } = useTranslation('main')

  return (
    <div>
      <BugButton />
      <div>{t('Главная')}</div>
    </div>
  )
}

export default MainPage
