import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Construction from '../Construction/Construction'
import Roles from '../Roles/Roles'
import Benefits from '../Benefits/Benefits'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Construction />
            <Roles />
            <Benefits />
            <ContactUs />
            <Footer />
        </div>
    )
}
export default HomePage