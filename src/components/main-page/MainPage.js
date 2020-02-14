import React, {Component} from 'react';
import { connect } from 'react-redux';
import CountryListItem from '../country/CountryListItem';
import CityListItem from '../city/CityListItem';
import {countryAddLike, cityAddLike} from '../../actions';
import './MainPage.scss';

class MainPage extends Component {

    render() {
        const { countries, countryAddLike, cities, cityAddLike } = this.props;
        const countriesMark = countries.filter((el) => el.like === true);
        const citiesMark = cities.filter((el) => el.like === true);

        return (
            <div className='main-page'>
                <h1>Отметьте путевки чтоб отобразить их здесь</h1>
                <div>
                    {
                        countriesMark.map( (country) => {
                            return(
                                <div key={country.id}>
                                    <CountryListItem country={country}
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
                                    <CityListItem city={city}
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

const mapStateToProps = ({ countries, cities }) => {
    return { countries, cities };
}

const mapDispatchToProps = { 
    countryAddLike,
    cityAddLike
};

 export default connect(mapStateToProps, mapDispatchToProps)(MainPage);