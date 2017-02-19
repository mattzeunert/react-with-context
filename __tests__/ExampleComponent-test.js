jest.dontMock("../bin/ExampleComponent");
jest.dontMock("../bin/WithContext");

import * as React from "react"
import * as ReactDOM from "react-dom"
import * as TestUtils from "react-addons-test-utils"

const WithContext = require("../bin/WithContext").default;
const ExampleComponent = require("../bin/ExampleComponent").default;

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