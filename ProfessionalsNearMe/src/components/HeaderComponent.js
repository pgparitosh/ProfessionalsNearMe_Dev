import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Appbar.Header>
                <Appbar.Content
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                />
            </Appbar.Header>
        );
    }
}