import React, {Component} from 'react';
import './App.css';
import Card from './cards/index';
import Search from "./search";


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            userValue:[],
            filterSearch:'',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ userValue: users}));
    }

    getSearch = (val) => {
        console.log("recieved val:", val);
        this.setState({
            filterSearch: val
        })
    };

    render() {
        const {userValue, filterSearch} = this.state;
        console.log("userValue:", this.state.userValue);
        const filteredUsers = userValue.filter(item => {
            return item.name.toLowerCase().includes(filterSearch)
        });

        return (
            <div className="App">
                <h3>Card Search</h3>
                <Search getSearchValue={this.getSearch}/>
                <div className="flex_row">
                    <Card users={filteredUsers}/>
                </div>
            </div>
        );
    }
}

export default App;
