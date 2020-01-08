import React, {Component} from 'react';
// import ./styles.css;

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchValue:''
        };
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch = (val) => {
        console.log("received val:", val);
        this.setState({
            searchValue: val
        });
        this.props.getSearchValue(this.state.searchValue)
    };

    render() {
        return(
            <div>
                <input type={'search'}
                       placeholder={'Search'}
                onChange={(e) => this.onSearch(e.target.value) }
                />
            </div>
        )
    }
}

export default Search