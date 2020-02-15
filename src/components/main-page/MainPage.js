import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cityAddLike, countryAddLike } from '../../actions';
import CityListItem from '../city/CityListItem';
import CountryListItem from '../country/CountryListItem';
import './MainPage.scss';

class MainPage extends Component {

    render() {
        const { countries, countryAddLike, cities, cityAddLike, language } = this.props;
        const { MARK_LIKE } = language;

        const countriesMark = countries.filter((el) => el.like === true);
        const citiesMark = cities.filter((el) => el.like === true);

        return (
            <div className='main-page'>
                <h1>{MARK_LIKE}</h1>
                <div>
                    {
                        countriesMark.map( (country) => {
                            return(
                                <div key={country.id}>
                                    <CountryListItem country={country} language={language}
                                    onAddLike={() => countryAddLike(country.id)}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        citiesMark.map( (city) => {
                            return(
                        <div key={city.id}>
                            <CityListItem city={city} language={language}
                            onAddLike={() => cityAddLike(city.id)}/>
                        </div>
                            )
                        })
                    }
                </div> 
            </div>
        )
    }
}

const mapStateToProps = ({ countries, cities, language }) => {
    return { countries, cities, language };
}

const mapDispatchToProps = { 
    countryAddLike,
    cityAddLike
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);