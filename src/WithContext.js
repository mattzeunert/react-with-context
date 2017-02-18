import * as React from 'react'

export default class WithContext extends React.Component {
    render(){
        class DynamicWithContext extends React.Component {
            getChildContext() {
                return this.props.context;
            }
            render() {
                return this.props.children;
            }
        }

        DynamicWithContext.childContextTypes = {};
        var context = this.props.context;
        for (var propertyName in context) {
            DynamicWithContext.childContextTypes[propertyName] = React.PropTypes.any;
        }

        this.validateChildren();

        return <DynamicWithContext context={this.props.context}>
            {this.props.children}
        </DynamicWithContext>
    }
    validateChildren(){
        if (this.props.children === undefined) {
            throw "No child components were passed into WithContext";
        }
        if (this.props.children.length > 1) {
            throw "You can only pass one child component into WithContext";
        }
    }
}