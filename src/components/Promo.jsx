import React from 'react';

import PromoHeading from './PromoHeading';

const data = {
  heading: '99% off all items!',
  callToAction: 'Everything must go!',
};

const Promo = () => { // parent component, PromoHeading is the child component
  return (
    <div>
      <PromoHeading
        heading={data.heading}
        callToAction={data.callToAction}
      />
    </div>
  );
};

export default Promo;
