
const initualState = {
    countries: [],
    cities: [],
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
            const itemIndex = state.countries.findIndex( ({id}) => id === action.payload);
            let newItem = {
                id: state.countries[itemIndex].id,
                countryName: state.countries[itemIndex].countryName,
                picture: state.countries[itemIndex].picture,
                voucher: state.countries[itemIndex].voucher,
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
        case 'CITIES_LOADED':
            return {
                ...state,
                cities: action.payload
            };
        default: 
            return state;
    }
};

export default reduser;