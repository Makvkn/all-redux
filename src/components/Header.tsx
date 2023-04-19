import React, {useState} from 'react';
import "./../App.css"
import HeaderItem from "./HeaderItem";
const Header = () => {

    const [headerItem] = useState<string[]>(["Redux", "MobX", "Toolkit", "Redux-Saga", "Redux-Thunk"])

    return (
        <header className="App-header">
            {headerItem.map((item, index) =>
                <HeaderItem string={item} address={index} key={index} />
            )}
        </header>
    );
};

export default Header;