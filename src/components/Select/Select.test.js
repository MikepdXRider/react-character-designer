import {screen, render} from '@testing-library/react'
import Select from './Select.jsx'

it('renders select component', () => {
    // render enables us to pseudo-render a component. This also lets us use the screen method later on
    const {container} = render(<Select optionsArr={['test1', 'test2', 'test3']} />);
    //data-testid attributes hardcoded onto jsx tags act as ids that can be grabbed here.
    const optionEl = screen.getByTestId('test1');
    // expect the above elements to be in the rendered document.
    expect(optionEl).toBeInTheDocument();
    // expect container to match the produced snapshot(first test generates, all other test compare)
    expect(container).toMatchSnapshot();
})