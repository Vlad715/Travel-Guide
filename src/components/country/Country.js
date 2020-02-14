import React, {Component} from 'react';
import { connect } from 'react-redux';
import withTravelService from '../hoc';
import {countryLoaded, countryAddLike} from '../../actions';
import CountryListItem from './CountryListItem';
import './Country.scss';


class Country extends Component {

    componentDidMount() {
        const { TravelService } = this.props;
        TravelService.getCountry().then((countries) => this.props.countryLoaded(countries));
    }

    render() {
        const { countries, countryAddLike } = this.props;

        return (
        <div>
            {
                countries.map( (country) => {
                    return(
                        <div key={country.id}>
                            <CountryListItem country={country}
                            onAddLike={() => countryAddLike(country.id)}/>
                        </div>
                    )
                })
            }
        </div>  
        )
    }
}

const mapStateToProps = ({ countries }) => {
    return { countries };
}

const mapDispatchToProps = {
    countryLoaded,
    countryAddLike
};

export default withTravelService()(connect(mapStateToProps, mapDispatchToProps)(Country));