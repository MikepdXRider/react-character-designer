import {screen, render} from '@testing-library/react'
import Select from './Select.jsx'

it('renders select component', () => {
    // render enables us to pseudo-render a component. This also lets us use the screen method later on
    const {container} = render(<Select optionsArr={['test1', 'test2', 'test3']} />);
    //THIS MAKES NO SENSE AT ALL. It took forever to figure out how to grab a simple element, and I totally guessed on the name property value. Navigating the docs was very challenging. We need more time being coached on how to read the docs for libraries we're introduced to for the first time.
    const optionEl = screen.getByRole('option', {name: 'test1'});
    // expect the above elements to be in the rendered document.
    expect(optionEl).toBeInTheDocument();
    // expect container to match the produced snapshot(first test generates, all other test compare)
    expect(container).toMatchSnapshot();
})