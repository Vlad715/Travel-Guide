import React from 'react';
import './Country.scss';

const CountryListItem = ({country, onAddLike, language}) => {
        
    let likeClass;
    if (country.like) { likeClass='fas fa-heart'} else {likeClass='far fa-heart'};
    const { VOUCHERS } = language;

    return (
        <div className='container1'>
            <img className='img' src={country.picture}/>
            <div className='description'>
                <h2>{country.countryName}</h2>
                <h3>{country.voucher + ' ' + VOUCHERS}</h3>
                <button onClick={onAddLike}>
                    <i class={likeClass}></i>
                </button>
            </div>
        </div>
    )
}

export default CountryListItem;