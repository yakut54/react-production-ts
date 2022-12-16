import { render, screen } from "@testing-library/react"
import { Button } from "./Button"


describe('Button', () => {
  test('Button render', () => {
    render(<Button>123</Button>)
    expect(screen.queryByText('123')).toBeInTheDocument()
  })
})
