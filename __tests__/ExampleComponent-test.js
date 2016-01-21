jest.dontMock("../ExampleComponent");
jest.dontMock("../WithContext")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"

const WithContext = require("../WithContext").default;
const ExampleComponent = require("../ExampleComponent").default;

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