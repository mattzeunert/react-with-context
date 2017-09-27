import PropTypes from 'prop-types'
import React from 'react'

class ExampleComponent extends React.Component {
    render(){
        return <div>
            {this.context.greeting} World!
        </div>
    }
}
ExampleComponent.contextTypes = {
    greeting: PropTypes.string.isRequired
}

export default ExampleComponent;