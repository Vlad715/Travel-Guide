
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
        type: 'CITY_ADD_LIKE',
        payload: cityId
    };
};

export const changeLanguage = (language) => {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: language
    };
};

