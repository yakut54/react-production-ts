import { fireEvent, getByTestId, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/classNames/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('Sidebar render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Sidebar toggle', () => {
    renderWithTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    screen.debug()
  })
})
