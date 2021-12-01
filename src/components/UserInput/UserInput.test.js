import {screen, render} from '@testing-library/react'
import UserInput from './UserInput.jsx'

it('renders UserInput component', () => {
    // render enables us to pseudo-render a component. This also lets us use the screen method later on
    const {container} = render(<UserInput optionsArr={['test1', 'test2', 'test3']} />);
    // getByLabelText allows us to get the text within a <label> jsx tag.
    const headLabel = screen.getByLabelText('Head');
    const torsoLabel = screen.getByLabelText('Torso');
    const bottomLabel = screen.getByLabelText('Bottom');
    // expect the above elements to be in the rendered document.
    expect(headLabel).toBeInTheDocument();
    expect(torsoLabel).toBeInTheDocument();
    expect(bottomLabel).toBeInTheDocument();
    // expect container to match the produced snapshot(first test generates, all other test compare)
    expect(container).toMatchSnapshot();
})