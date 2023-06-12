import React, { useState } from 'react';
import API from '../utils/api';

const Search = () => {
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

const handleSearch = async (e) => {
    e.preventDefault();
    try {
        const searchResults = await API.searchUsers(query);
        setResults(searchResults);
    } catch (error) {
        console.log('Error performing search:', error);
    }
};

return (
    <div>
        <form onSubmit={handleSearch}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search query" />
            <button type="submit">Search</button>
        </form>

        {results.length > 0 ? (
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.username}</li>
                ))}
            </ul>
        ) : (
            <p>No results found.</p>
        )}
    </div>
    )
};

export default Search;