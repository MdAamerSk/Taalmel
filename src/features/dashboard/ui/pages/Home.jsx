import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTheme } from "../../../../shared/state/themeSlice";

const Home = () => {

    let dispatch = useDispatch();

    let handleThemeChange = () => {
        dispatch(toggleTheme());
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleThemeChange}> Change Theme</button>
        </div>
    )
}

export default Home
