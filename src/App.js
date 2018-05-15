import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			monsters : [],
			searchfield : ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredMonsters = this.state.monsters.filter(monster => {
			return monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.monsters.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1>Monster Cards</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList monsters={filteredMonsters}/>
					</Scroll>
				</div>
			);
		}
	}
	
}


export default App;