import React, { useState } from 'react'
import Header from './heder/Header'
import TabOption from './TabOption'
import Footer from './Footer'
import Delivery from './tabs/Delivery'
import DiningOut from './tabs/DiningOut'
import NightLife from './tabs/NightLife'

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
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Night Life":
            return <NightLife/>
        default:
            return <Delivery/>
    }
}
export default Home