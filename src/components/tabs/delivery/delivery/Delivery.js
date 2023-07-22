import React from 'react'
import Filter from '../../../filter/Filter'
import Deliverycollection from '../deliveryCollection/DeliveryCollection';
import Topbrands from '../deliveryCollection/Topbrands';
import ProductSection from '../../../productListing/productSection/ProductSection';
import { deliveryProductInfo } from '../../../productListing/productInfos/delivery/deliveryProductInfo';
import './delivery.css'
import { filterItems } from '../../../filter/filterItems';

function Delivery() {
  return (
    <div>
      <div>
        <div className='filterComponent'>
          <Filter filters={filterItems} />
        </div>
        <Deliverycollection />
        <Topbrands />
        <ProductSection productData={deliveryProductInfo} productName='Order food online in Block A, Uttorayon Twp, Siliguri' />
      </div>
    </div>
  )
}

export default Delivery