import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SearchInput} from '../../src/components/SearchInput';

describe('<PokemonDetailScreen />', () => {
  it('should match snapshot', async () => {
    const onSearch = jest.fn();
    const wrapper = render(<SearchInput onSearch={onSearch} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger onSearch function after debounce', async () => {
    const onSearch = jest.fn();
    const {getByPlaceholderText} = render(<SearchInput onSearch={onSearch} />);

    const input = getByPlaceholderText('Search');

    fireEvent.changeText(input, 'Charmander');

    expect(onSearch).toHaveBeenCalledTimes(0);

    setTimeout(() => {
      expect(onSearch).toHaveBeenCalled();
    }, 350);
  });

  it('should send written text', async () => {
    const onSearch = jest.fn();
    const {getByPlaceholderText} = render(<SearchInput onSearch={onSearch} />);

    const input = getByPlaceholderText('Search');

    fireEvent.changeText(input, 'Charmander');

    setTimeout(() => {
      expect(onSearch).toHaveBeenCalledWith('Charmander');
    }, 350);
  });
});
