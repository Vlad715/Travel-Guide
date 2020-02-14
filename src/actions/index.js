
export const countryLoaded = (countries) => {
    return {
        type: 'COUNTRIES_LOADED',
        payload: countries
    };
};

export const countryAddLike = (countryId) => {
    return {
        type: 'COUNTRY_ADD_LIKE',
        payload: countryId
    };
};

export const citiesLoaded = (cities) => {
    return {
        type: 'CITIES_LOADED',
        payload: cities
    };
};

export const cityAddLike = (cityId) => {
    return {
        type: 'COUNTRY_ADD_LIKE',
        payload: cityId
    };
};

