import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.route'
import Navigation from './routes/navigation/navigation.route'
import Authentication from './routes/authentication/Authentication.route'
import Shop from './routes/shop/shop.route'
import Checkout from './routes/checkout/Checkout.route'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    )
}

export default App
