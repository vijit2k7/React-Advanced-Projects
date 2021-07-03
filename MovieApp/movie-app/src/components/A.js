import React from 'react'
import {useContext} from 'react';
import {WatchListContext} from "../App";

function A() {

    const useContextValue=useContext(WatchListContext);
    console.log("use context value",useContextValue);

    return (
        <div>
            <h1>Welcome to A</h1>
        </div>
    )
}

export default A;
