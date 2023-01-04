import { fireEvent, screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('Sidebar render', () => {
    ComponentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Sidebar toggle', () => {
    ComponentRender(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    screen.debug()
  })
})