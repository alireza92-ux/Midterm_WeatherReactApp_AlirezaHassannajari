import { useState } from "react";
import './index.css'

const Search = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState('');

    const onSearchValueChange = (event) => {
       setSearchValue(event.target.value);
    } 

    const onSubmit = (event) => {
        event.preventDefault();

        if (!searchValue) {
            return;
        }

        onSearch(searchValue);
    }

    return (
        <form onSubmit={onSubmit} className="search-container">
            <input 
                type={"text"}
                onChange={onSearchValueChange}
                placeholder="Search Your Favorite City"
                className="search-bar"
            />
            <button className="search-btn" type="submit">
                Search
            </button>
        </form>
    )
}

export default Search;