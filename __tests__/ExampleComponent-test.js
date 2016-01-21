jest.dontMock("../ExampleComponent");

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"

const ExampleComponent = require("../ExampleComponent").default;

describe("ExampleComponent", function(){
	it("Takes the greeting from the component context", function(){
		var component = TestUtils.renderIntoDocument(
			<ExampleComponent />
		);

		var node = ReactDOM.findDOMNode(component);

		expect(node.textContent).toEqual(" World!")
	});
});