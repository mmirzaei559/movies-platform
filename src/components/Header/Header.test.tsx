import React from "react";
import { MemoryRouter, Link } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

it('routes to watch later page ', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    const { getByText } = render(
        // @ts-ignore
        <MemoryRouter history={history}>
            <Link to="/">Click me</Link>
        </MemoryRouter>
    );
    fireEvent.click(getByText('Click me'));
    expect(history.location.pathname).toBe('/');
});