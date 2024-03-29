import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from './counter'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const counterHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(counterHeading).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const counterHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(counterHeading).toHaveTextContent('0')
  })

  //testing mouse click user event
  test('renders a count of 1 after clicking the increment button', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)
    const counterHeading = screen.getByRole('heading')
    expect(counterHeading).toHaveTextContent('1')
  })

  test('renders a count of 2 after clicking the increment button twice', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.dblClick(incrementButton)
    const counterHeading = screen.getByRole('heading')
    expect(counterHeading).toHaveTextContent('2')
  })

  test('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)
    // for the number input elemnet the role is spinbutton
    const amountInput = screen.getByRole('spinbutton')
    // to type in the input elemnet use user.type() method
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await user.click(setButton)
    const counterHeading = screen.getByRole('heading')
    expect(counterHeading).toHaveTextContent('10')
  })

  //Test focused element using user.tab() method
  test('elements are focused in the right order', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})
