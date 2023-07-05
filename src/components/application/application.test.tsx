import { render, screen } from '@testing-library/react'
import Application from './application'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const nameElememt2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElememt2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Teddy')
    expect(nameElement4).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    // TextMatch using regx
    const parElement2 = screen.getByText(/all fields are mandatory/i)
    expect(parElement2).toBeInTheDocument()

    //Text Matcher using function
    const paraElement3 = screen.getByText((content) =>
      content.startsWith('All'),
    )
    expect(paraElement3).toBeInTheDocument()

    const spanElement = screen.getByTitle('close')
    expect(spanElement).toBeInTheDocument()

    const imgElement = screen.getByAltText('a person with a laptop')
    expect(imgElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()
    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()
    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions',
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toBeDisabled()
  })
})
