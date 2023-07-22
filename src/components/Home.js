import React, { useState } from 'react'
import Header from './header/Header'
import TabOption from './tabOption/TabOption'
import Delivery from './tabs/delivery/delivery/Delivery'
import DiningOut from './tabs/diningOut/DiningOut'
import Footer from './footer/Footer'
import NightLife from './tabs/nightLife/NightLife'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Home() {
    const [activeTab, setactiveTab] = useState('Delivery')
    return (
        <div style={{ position: 'relative' }}>
            <div id='header' ><Header/></div>
            <TabOption activeTab={activeTab} setactiveTab={setactiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
            <div className='upArrowBox flexCenter cursorPointer'>
                <a href="#header" className='upArrow flexCenter'>
                    <KeyboardArrowUpIcon fontSize='large'/>
                </a>
            </div>

        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return <DiningOut />
        case "Night Life":
            return <NightLife />
        default:
            return <Delivery />
    }
}
export default Home