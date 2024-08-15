import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Construction from '../Construction/Construction'
import Roles from '../Roles/Roles'
import Benefits from '../Benefits/Benefits'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Construction />
            <Roles />
            <Benefits />
        </>
    )
}
export default HomePage