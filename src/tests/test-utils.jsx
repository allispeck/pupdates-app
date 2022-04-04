import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import {rootReducer} from "reducers/RootReducer";
import {createStore} from "redux";

function render(ui, {initialState, store = createStore(rootReducer, initialState), ...renderOptions} = {}) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }