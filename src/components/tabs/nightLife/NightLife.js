import React from 'react'
import { filterItems } from '../../filter/filterItems'
import { nightlifeProductInfo } from '../../productListing/productInfos/nightlife/nightlifeProductInfo'
import ProductSection from '../../productListing/productSection/ProductSection'
import Filter from '../../filter/Filter'

function NightLife() {
  return (
    <div>
    <div>
      <div className='filterComponent'>
        <Filter filters={filterItems} />
      </div>
      <ProductSection productData={nightlifeProductInfo} productName='Order food online in Block A, Uttorayon Twp, Siliguri' />
    </div>
  </div>
  )
}

export default NightLife