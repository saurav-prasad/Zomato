import React from 'react'

function TabOption({ activeTab, setactiveTab }) {
    return (
        <>
            <div onClick={()=> setactiveTab("Delivery")}>delivery</div>
            <div onClick={()=> setactiveTab("Night Life")}>night life</div>
            <div onClick={()=> setactiveTab("Dining Out")}>dining out</div>
        </>

    )
}

export default TabOption