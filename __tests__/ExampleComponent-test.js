jest.dontMock("../src/ExampleComponent");
jest.dontMock("../src/WithContext");

import React from 'react'
import ReactDOM from 'react-dom'
import * as TestUtils from "react-dom/test-utils"

const WithContext = require("../src/WithContext").default;
const ExampleComponent = require("../src/ExampleComponent").default;

describe("ExampleComponent", function(){
    it("Takes the greeting from the component context", function(){
        var context = {
            greeting: "Hello"
        };
        var component = TestUtils.renderIntoDocument(
            <WithContext context={context}>
                <ExampleComponent />
            </WithContext>
        );

        var node = ReactDOM.findDOMNode(component);

        expect(node.textContent).toEqual("Hello World!")
    });
});
