import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

// Кнопка для тестирования ErrorBoudary
export const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation('error')

  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button onClick={onThrow}>
      {t('Бросить ошибку')}
    </Button>
  )
}
