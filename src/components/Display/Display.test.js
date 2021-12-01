import {screen, render} from '@testing-library/react'
import Display from './Display.jsx'

it('renders display component', () => {
    // render enables us to pseudo-render a component. This also lets us use the screen method later on
    const {container} = render(<Display stateArr={['head','torso','bottom']} catchphraseListArr={['item1', 'item2', 'item3']} />);
    // I chose to use getByTestId here because there is not text content or a clear role to call it by. I wish I understood the docs and direction well enough to implement this correctly.
    const articleEl = screen.getByTestId('head');
    // I chose to use getByText here because getByRole was too challenging to figure out in this context.
    const catchphraseEl = screen.getByText('item1');
    // expect the above elements to be in the rendered document.w
    expect(articleEl).toBeInTheDocument();
    expect(catchphraseEl).toBeInTheDocument();
    // expect container to match the produced snapshot(first test generates, all other test compare)
    expect(container).toMatchSnapshot();
})