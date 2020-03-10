// import APIHandler from '../api/APIHandler';
import React, { useState } from "react";
import { withRouter } from "react-router-dom";


function SearchBar({ history,match,params, searchClbk}) {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)

    }

    const handleClick = e => {
        if(input) {
            history.push({
                pathname: "/celebrities",
                search: `?search=${input}`
            });
            setInput("");
        } else searchClbk(undefined); 
    }

      return (
        <div className="searchBar">
            <input 
                onChange={handleChange} 
                className="inputSearch" 
                type="text" 
                placeholder="Recherche..." 
                value={input}>
            </input>           
            <div 
                className="btnSearch" 
                onClick={handleClick}>
            Go</div>
        </div>
      );
    }

    export default withRouter(SearchBar);