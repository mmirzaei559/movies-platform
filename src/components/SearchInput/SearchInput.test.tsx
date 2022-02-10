import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import store from '../../redux/store/store';
import {MemoryRouter} from 'react-router-dom';
import {SearchInput} from "./SearchInput";

describe("SearchInput Component", () => {
    test('rendered SearchInput', async () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchInput/>;
                </MemoryRouter>
            </Provider>
        );
        const input = getByTestId("searchMovies");
        await expect(input).toBeTruthy();
    });

    test('Input change value', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchInput/>;
                </MemoryRouter>
            </Provider>
        );
        const inputSearch = screen.getByTestId('searchMovies');
        userEvent.type(inputSearch, 'girls');
        expect(inputSearch).toHaveValue('girls');
    });


    //TODO test API call

    //TODO test Redux
})

