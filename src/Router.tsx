import { Routes, Route } from "react-router-dom";

import { Home } from './pages/Home/Home'
import { CheckOut } from './pages/CheckOut/CheckOut'
import { Delivery } from './pages/Delivery/Delivery'

import { DefaultLayout } from './layouts/DefaultLayout/index';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/coffeeDelivery" element={<Home />} />
                <Route path="/coffeeDelivery/CheckOut" element={<CheckOut />} />
                <Route path="/coffeeDelivery/Delivery" element={<Delivery />} />
            </Route>
        </Routes>
    )
}