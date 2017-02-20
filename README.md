# React WithContext

WithContext passes a specified context object to its child components. This is useful when writing unit tests for React components.

You can use it to replace `React.withContext`, which was removed in React 0.14.

## Usage

```jsx
<WithContext context={context}>
   <ExampleComponent />
</WithContext>
```

Or, including import and rendering with TestUtils:

```jsx
import WithContext from "react-with-context"

const context = { greeting: "Hello" };
TestUtils.renderIntoComponent(
	<WithContext context={context}>
    	<ExampleComponent />
	</WithContext>
);
```

[Check out the full example repo.](https://github.com/mattzeunert/react-with-context-demo)

## Installation

> npm install react-with-context --save-dev

## Contributing

Use `babel --out-file WithContext.dist.js src/WithContext.js` to compile the component. Then run `npm test`.
