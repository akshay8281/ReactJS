import { NavBar } from './Pages/layouts';
import { Home } from "./Pages/home"
import { Products } from "./Pages/Products"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;