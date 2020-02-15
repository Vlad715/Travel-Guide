import React from 'react';
import './City.scss';

const CityListItem = ({city, onAddLike, language}) => {
        
    let likeClass;
    if (city.like) { likeClass='fas fa-heart'} else {likeClass='far fa-heart'}
    const { COUNTRY, HOTEL} = language;
    
    return (
        <div className='container1'>
            <img className='img' src={city.picture}/>
            <div className='description'>
                <h2>{city.cityName}</h2>
                <h3>{COUNTRY + ' ' + city.country}</h3>
                <h3>{city.hotel + ' ' + HOTEL}</h3>
                <button onClick={onAddLike}>
                    <i class={likeClass}></i>
                </button>
            </div>
        </div>
    )
}

export default CityListItem;