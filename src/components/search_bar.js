import React, { Component } from 'react';

// class component has some ability to tell other parts the state
class SearchBar extends Component {

	constructor(props){
		// only class based components have states
		super(props); // calls parent method
		this.state = { term: '' };
	}

	// define a new class and give it access to React.Component 
	render(){
		// every class must have a render method 
		return(
			<div className="search-bar">
		 		<input 
		 			value = {this.state.term} // this turns into controlled component
		 			onChange={(event) => this.onInputChange(event.target.value)} />
		 	</div>
		 );
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;

// Handling event has two parts: event handler and relate it to when event happens

// Each class base component has a state object
// Whenever state changes, it re-renders and all of its components
// To use state, we need to initialize state

// Input changes when state changes --> controlled component