import { render, screen } from '@testing-library/react'
import { CounterTwo } from './CounterTwo'
import user from '@testing-library/user-event'

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const textElement = screen.getByText('Counter Two')
    expect(textElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    user.setup()
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    )

    const increemntButton = screen.getByRole('button', { name: 'Increment' })
    const decremnetButton = screen.getByRole('button', { name: 'Decrement' })
    await user.click(increemntButton)
    await user.click(decremnetButton)
    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
