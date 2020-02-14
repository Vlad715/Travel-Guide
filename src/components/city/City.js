import React, {Component} from 'react'
import { connect } from 'react-redux';
import withTravelService from '../hoc';
import {citiesLoaded, cityAddLike} from '../../actions';
import CityListItem from './CityListItem';
import './City.scss';

class City extends Component {

    componentDidMount() {
        const { TravelService } = this.props;
        TravelService.getCity().then((cities) => this.props.citiesLoaded(cities));
    }

    render() {
        const { cities, cityAddLike } = this.props;

        return (
            <div>
                {
                    cities.map( (city) => {
                        return(
                            <div key={city.id}>
                                <CityListItem city={city}
                                onAddLike={() => cityAddLike(city.id)}/>
                            </div>
                        )
                    })
                }
            </div>  
        )
    }
}

const mapStateToProps = ({ cities }) => {
    return { cities };
}

const mapDispatchToProps = {
    citiesLoaded,
    cityAddLike
};

export default withTravelService()(connect(mapStateToProps, mapDispatchToProps)(City));