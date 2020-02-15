import RU from '../config/ru';
import EN from '../config/en';

const initualState = {
    countries: [],
    cities: [],
    language: EN
};

const updateCountryItems = (state, countryId) => {

    const itemIndex = state.countries.findIndex( ({id}) => id === countryId);
            let newItem = {
                ...state.countries[itemIndex],
                like: !state.countries[itemIndex].like
            };
            return {
                ...state,
                countries: [ 
                    ...state.countries.slice(0, itemIndex),
                    newItem,
                    ...state.countries.slice(itemIndex + 1)
                ]
            };
};

const updateCityItems = (state, cityId) => {

    const itemIndex = state.cities.findIndex( ({id}) => id === cityId);
            let newItem = {
                ...state.cities[itemIndex],
                like: !state.cities[itemIndex].like
            };
            return {
                ...state,
                cities: [ 
                    ...state.cities.slice(0, itemIndex),
                    newItem,
                    ...state.cities.slice(itemIndex + 1)
                ]
            };
};

const reduser = (state = initualState, action) => {
    // console.log(action.type);

    switch (action.type) {
        case 'COUNTRIES_LOADED':
            return {
                ...state,
                countries: action.payload
            };
        case 'COUNTRY_ADD_LIKE':
            return updateCountryItems(state, action.payload);

        case 'CITIES_LOADED':
            return {
                ...state,
                cities: action.payload
            };
        case 'CITY_ADD_LIKE':
            return updateCityItems(state, action.payload);

        case 'CHANGE_LANGUAGE':
            let lang;
            action.payload === RU ? lang = EN : lang = RU;
            return {
                ...state,
                language: lang
            };
        default: 
            return state;
    }
};

export default reduser;