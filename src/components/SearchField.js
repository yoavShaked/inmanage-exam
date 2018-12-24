import React, { Component } from 'react';

export default class SearchField extends Component {
    state = {
        value:''
    }

    changeHandler = (e) => {
        if(e.target.value === ""){
            this.props.toggleMovies();
        }
        this.setState({value: e.target.value});
    }

    render() {
        const {value} = this.state;
        return (
            <div>
                <label onClick={() => this.props.filterMovies(this.state.value)}>Search</label>
                <input value={value} onChange={this.changeHandler} type="text"/>
            </div>
        );
    }
}