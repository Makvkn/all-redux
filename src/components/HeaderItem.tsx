import React from 'react';
import "./../App.css"
import {NavLink} from "react-router-dom";

const HeaderItem = (props: any) => {
    return (
        <div className="App-header_item">
            <NavLink to={"/" + props.string} className = { navData => navData.isActive ? "menu-item_active" : "menu-item" }>{props.string}</NavLink>
        </div>
    );
};

export default HeaderItem;