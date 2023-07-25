import React, { useState } from 'react'
import Filter from '../../../filter/Filter'
import Deliverycollection from '../deliveryCollection/DeliveryCollection';
import Topbrands from '../deliveryCollection/Topbrands';
import ProductSection from '../../../productListing/productSection/ProductSection';
import { deliveryProductInfo } from '../../../productListing/productInfos/delivery/deliveryProductInfo';
import './delivery.css'
import { filterItems } from '../../../filter/filterItems';

function Delivery() {
  const [NewData, setNewData] = useState(deliveryProductInfo)

  // filter by rating
  const rating = (filter) => {
    setNewData(deliveryProductInfo.filter((data) => {
      const b = data?.info?.rating?.rating_text
      return Number(b) > filter
    }))
  }
  // filter by delivery time
  const delivery = () => {
    setNewData(deliveryProductInfo.sort((x, y) => {
      const xa = x?.order?.deliveryTime.replace(" min", "")
      const ya = y?.order?.deliveryTime.replace(" min", "")
      return Number(ya) - Number(xa)
    }))
  }

  return (
    <div>
      <div>
        <div className='filterComponent'>
          <Filter
            deliveryFilter={delivery}
            rating={rating}
            filters={filterItems} />
        </div>
        <Deliverycollection />
        <Topbrands />
        <ProductSection productData={NewData} productName='Order food online in Block A, Uttorayon Twp, Siliguri' />
      </div>
    </div>
  )
}

export default Delivery