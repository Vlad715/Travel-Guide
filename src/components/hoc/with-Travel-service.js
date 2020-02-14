import React from 'react';
import { TravelServiceConsumer } from '../travel-service-context';

const withTravelService = () => (Wrapped) => {

  return (props) => {
    return (
      <TravelServiceConsumer>
        {
          (travelService) => {
            return (<Wrapped {...props}
                      two={'****************'}
                      TravelService={travelService}/>);
          }
        }
      </TravelServiceConsumer>
    );
  }
};

export default withTravelService;