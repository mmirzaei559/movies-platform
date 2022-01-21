import React from "react";
import {render, act, fireEvent} from "@testing-library/react";
import {SearchInput} from "./SearchInput";

describe ("SearchInput Component", ()=> {
    it('rendered SearchInput', async ()=>{
        const {getByTestId} = render(<SearchInput onChange={onchange} value=""/>);
        const input = getByTestId("searchMovies");
        await  expect(input).toBeTruthy();
    });
    it('Should change SearchInput value', async () => {
       await act(async ()=>{
            const {getByTestId} = render(<SearchInput onChange={onchange} value=""/>);
            const input = getByTestId("searchMovies");
            await fireEvent.change(input, {target: {value: ""}});
            // @ts-ignore
            expect(input.value).toBe("");
        })
    });
})

