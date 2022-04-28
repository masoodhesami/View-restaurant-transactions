import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {store} from "../state/store";
import {Provider} from "react-redux";
import userEvent from "@testing-library/user-event";


describe("Dropdown Button", () => {
    it("button should be in the document", () => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
        const dropdownElement = screen.getByRole("button", {name: /تراکنش/i})
        expect(dropdownElement).toBeInTheDocument()
    })
})

describe("Header Title", () => {
    it("title should be in the document", () => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
        const titleElement = screen.getByText(/لیست تراکنش ها/i)
        expect(titleElement).toBeInTheDocument()
    })
})

describe("Render Cards", () => {
    it("cards should render in the document", () => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
        const cardsElement = screen.getByTestId('cards-element')
        expect(cardsElement).toBeInTheDocument()
    })
})

describe("Dropdown Items", () => {
    it("item-1 should be in the document when button clicked", () => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
        const dropdownElement = screen.getByRole("button", {name: /تراکنش/i})
        userEvent.click(dropdownElement)
        const dropDownItem = screen.getByTestId('searchBox-item1')
        expect(dropDownItem).toBeInTheDocument()
    })
    it("item-2 should be in the document when button clicked", () => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
        const dropdownElement = screen.getByRole("button", {name: /تراکنش/i})
        userEvent.click(dropdownElement)
        const dropDownItem = screen.getByTestId('searchBox-item2')
        expect(dropDownItem).toBeInTheDocument()
    })
    it("item-3 should be in the document when button clicked", () => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
        const dropdownElement = screen.getByRole("button", {name: /تراکنش/i})
        userEvent.click(dropdownElement)
        const dropDownItem = screen.getByTestId('searchBox-item3')
        expect(dropDownItem).toBeInTheDocument()
    })
    it("item-4 should be in the document when button clicked", () => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
        const dropdownElement = screen.getByRole("button", {name: /تراکنش/i})
        userEvent.click(dropdownElement)
        const dropDownItem = screen.getByTestId('searchBox-item4')
        expect(dropDownItem).toBeInTheDocument()
    })
    it("item-5 should be in the document when button clicked", () => {
        render(<Provider store={store}>
            <App/>
        </Provider>)
        const dropdownElement = screen.getByRole("button", {name: /تراکنش/i})
        userEvent.click(dropdownElement)
        const dropDownItem = screen.getByTestId('searchBox-item5')
        expect(dropDownItem).toBeInTheDocument()
    })
})



