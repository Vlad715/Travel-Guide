import ThailandPict from '../asets/exotic-thailand.jpg';
import CambodiaPict from '../asets/Cambodia.JPG';
import PattayaPict from '../asets/Pattaya.JPG';
import PhuketPict from '../asets/Phuket.JPG';
import PhnomPenhPict from '../asets/Phnom_penh.JPG';
import SihanoukvillPict from '../asets/Sihanoukville.JPG';


export default class TravelService {

    dataCountry = [
        {
            id: 1,
            countryName: 'Thailand',
            picture: ThailandPict,
            voucher: 4,
            like: false },
        {
            id: 2,
            countryName: 'Cambodia',
            picture: CambodiaPict,
            voucher: 5,
            like: true }
    ];

    dataCity = [
        {
            id: 1,
            cityName: 'Pattaya',
            picture: PattayaPict,
            country: 'Thailand',
            hotel: 3,
            like: false },
        {
            id: 2,
            cityName: 'Phuket',
            picture: PhuketPict,
            country: 'Thailand',
            hotel: 2,
            like: false },
        {
            id: 3,
            cityName: 'Phnom penh',
            picture: PhnomPenhPict,
            country: 'Cambodia',
            hotel: 4,
            like: false },
        {
            id: 4,
            cityName: 'Sihanoukville',
            picture: SihanoukvillPict,
            country: 'Cambodia',
            hotel: 7,
            like: false }
    ];

    getCountry = async () => {
        // const res = await setTimeout( () => this.dataCountry, 300 );
        return this.dataCountry;
    }

    getCity = async () => {
        return this.dataCity;
    }
}