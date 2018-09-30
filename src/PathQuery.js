import React, { Component } from 'react';
import './utils/json-viewer/jquery.json-viewer.css';
import searchIcon from './search.svg';
import './css/PathQuery.css';

const jp = require('jsonpath');

class PathQuery extends Component {
    constructor (props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    filter (event) {
        const inputQuery = event.target.value;
        this.setState({query: inputQuery});

        try {
            this.props.onQueryResult(inputQuery ? jp.query(this.props.json, inputQuery) : this.props.json);
        } catch (e) {}
    }

    render () {
        return (
            <label htmlFor="query">
                <img className="icon" src={searchIcon} alt="magnifying glass"/>
                <span className="query">
                    <input name="query" type="text" onChange={this.filter.bind(this)} value={this.state.query} placeholder="$.success[*]"/>
                </span>
            </label>
        )
    }
}

export default PathQuery;
