import React from "react";
import { MemoryRouter, Link } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import {Provider} from 'react-redux';
import store from '../../redux/store/store';

it('routes to home page ', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    const { getByText } = render(
        <Provider store={store}>
            <MemoryRouter>
                <Link to="/">Click me</Link>
            </MemoryRouter>
        </Provider>
    );
    fireEvent.click(getByText('Click me'));
    expect(history.location.pathname).toBe('/');
});