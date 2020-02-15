import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions';
import './Header.scss';


class Header extends Component {

    render() {
        const { language, changeLanguage } = this.props;
        const { MAIN, COUNTRIES, CITIES, LANGUAGE } = language;

        return (
            <div className='container'>
                <div>
                    <Link to="/">{MAIN}</Link>
                </div>
                <div>
                    <Link to="/country/">{COUNTRIES}</Link>
                </div>
                <div>
                    <Link to="/city/">{CITIES}</Link>
                </div>
                <button onClick={() => changeLanguage(language)}>{LANGUAGE}</button>
            </div>
        )
    }
}

const mapStateToProps = ({ language }) => {
    return { language };
}

const mapDispatchToProps = {
    changeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
