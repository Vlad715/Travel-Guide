import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


const Header = () => {

    return (
        <div className='container'>
            <div>
                <Link to="/">Главная</Link>
            </div>
            <div>
                <Link to="/country/">Страны</Link>
            </div>
            <div>
                <Link to="/city/">Города</Link>
            </div>
            <div>Экскурсии</div>
        </div>
    )
}

export default Header;
