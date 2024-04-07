import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchString: ""
        };

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => this.setState({ monsters: users }))
    }

    onSearch = (event) => {
        const searchString = event.target.value.toLocaleLowerCase();
        this.setState({ searchString: searchString })
    }

    render() {
        const { monsters, searchString } = this.state
        const { onSearch } = this
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
        }
        );
        return (
            <div className="App">
                <h1 className ='header'>Monsters Rolodex</h1>
                <SearchBox className="search-box" type='search' placeholder='Search by name' onChangeHandler={onSearch} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
