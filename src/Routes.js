import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App} />
            </Router>
        );
    }
}