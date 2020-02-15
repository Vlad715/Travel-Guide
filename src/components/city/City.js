import React, {Component} from 'react'
import { connect } from 'react-redux';
import withTravelService from '../hoc';
import {citiesLoaded, cityAddLike} from '../../actions';
import CityListItem from './CityListItem';
import './City.scss';

class City extends Component {

    componentDidMount() {
        const { TravelService } = this.props;
        if(!this.props.cities.length){
            TravelService.getCity().then((cities) => this.props.citiesLoaded(cities));
        }
    }

    render() {
        const { cities, cityAddLike, language } = this.props;

        return (
            <div>
                {
                    cities.map( (city) => {
                        return(
                            <div key={city.id}>
                                <CityListItem city={city} language={language}
                                onAddLike={() => cityAddLike(city.id)}/>
                            </div>
                        )
                    })
                }
            </div>  
        )
    }
}

const mapStateToProps = ({ cities, language }) => {
    return { cities, language };
}

const mapDispatchToProps = {
    citiesLoaded,
    cityAddLike
};

export default withTravelService()(connect(mapStateToProps, mapDispatchToProps)(City));