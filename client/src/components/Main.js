import React from "react";

function MainContent(props) {
    return (
        <main>
            <div className="main-head">
                <form 
                    className="search-box"
                    onSubmit={props.HandleSearch}>
                    <input
                        className="searchBar"
                        type='search'
                        placeholder='Search for an anime or manga...'
                        required
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)} />
                </form>
            </div>
        </main>
    )
}

export default MainContent