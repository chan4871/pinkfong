import React from 'react'
import StoreCategoryHeader from '../../component/StoreCategory/StoreCategoryHeader'
import StoreCategorySection from '../../component/StoreCategory/StoreCategorySection'

const StoreCategoryAll = () => {
  return (
    <div>
<StoreCategoryHeader categoryName="all"></StoreCategoryHeader>
<StoreCategorySection category="all"></StoreCategorySection>
    </div>
  )
}

export default StoreCategoryAll
