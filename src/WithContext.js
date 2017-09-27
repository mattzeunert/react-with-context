import PropTypes from 'prop-types'
import React from 'react'

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
        const context = this.props.context;
        for (const propertyName in context) {
            DynamicWithContext.childContextTypes[propertyName] = PropTypes.any;
        }

        this.validateChildren();

        return (
            <DynamicWithContext context={this.props.context}>
                {this.props.children}
            </DynamicWithContext>
        );
    }
    validateChildren(){
        if (this.props.children === undefined) {
            throw new TypeError("No child components were passed into WithContext");
        }
        if (this.props.children.length > 1) {
            throw new TypeError("You can only pass one child component into WithContext");
        }
    }
}
