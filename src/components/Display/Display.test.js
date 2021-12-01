import {screen, render} from '@testing-library/react'
import Display from './Display.jsx'

it('renders display component', () => {
    // render enables us to pseudo-render a component. This also lets us use the screen method later on
    const {container} = render(<Display head='head' torso='torso' bottom='bottom' catchphraseListArr={['item1', 'item2', 'item3']} />);
    //data-testid attributes hardcoded onto jsx tags act as ids that can be grabbed here.
    const articleEl = screen.getByTestId('article');
    const catchphraseEl = screen.getByTestId('item1');
    // expect the above elements to be in the rendered document.
    expect(articleEl).toBeInTheDocument();
    expect(catchphraseEl).toBeInTheDocument();
    // expect container to match the produced snapshot(first test generates, all other test compare)
    expect(container).toMatchSnapshot();
})