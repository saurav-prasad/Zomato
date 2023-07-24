import React from 'react'
import { filterItems } from '../../filter/filterItems'
import Filter from '../../filter/Filter'
import ProductSection from '../../productListing/productSection/ProductSection'
import { diningoutProductInfo } from '../../productListing/productInfos/diningout/diningoutProductInfo'
import Collection from '../../collections/Collection'


function DiningOut() {
  return (
    <div>
      <div>
        <div style={{backgroundColor:'#f8f8f8',}}>
          <Collection />
        </div>
        <div className='filterComponent'>
          <Filter filters={filterItems} />
        </div>
        <ProductSection productData={diningoutProductInfo} productName='Order food online in Block A, Uttorayon Twp, Siliguri' />
      </div>
    </div>
  )
}

export default DiningOut