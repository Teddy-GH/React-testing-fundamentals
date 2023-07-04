import {render, screen} from '@testing-library/react'
import Skills from './skills'

describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument();
    })

    test('renders a list of skills', () => {
    render(<Skills skills={skills} />) 
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);

    })

    test('renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
        name:'Login'
    })
    expect(loginButton).toBeInTheDocument();
    })

    test('Start Learing button is not rendered', () => {
    render(<Skills skills={skills} />)  
    const startLearingButton = screen.queryByRole('button', {
     name:'Start learing'
    })
    expect(startLearingButton).not.toBeInTheDocument();
    })

    test('Start learing button is eventually displayed', async() => {
    render(<Skills skills={skills} />)  
    const startLearingButton =await screen.findByRole('button', {
        name:'Start learing'
       },{
        timeout:2000,
       })
       expect(startLearingButton).toBeInTheDocument();
    })
})