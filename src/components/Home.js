import React, { useState } from 'react'
import Header from './Header'
import TabOption from './TabOption'
import Footer from './Footer'

function Home() {
    const [activeTab, setactiveTab] = useState("Night Life")
    return (
        <div>
            <Header />
            <TabOption activeTab={activeTab} setactiveTab={setactiveTab}/>
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return "Delivery"
        case "Dining Out":
            return "Dining Out"
        case "Night Life":
            return "Night Life"
        default:
            return "Delivery"
    }
}
export default Home