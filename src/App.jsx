import React from 'react'
import {Routes,
    Route,
    Link} from "react-router-dom"
    import Homepage from './routes/Homepage';
    import Brands from './routes/Brands';
    import Products from './routes/Products';
    import Nav from './components/nav/Nav';
    import ProductPage from './components/product';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route exact path="/" element = {<Homepage/>}/>
        <Route exact path="brands" element = {<Brands/>}/>
        <Route exact path="products" element = {<Products/>}/>
        <Route exact path="products/:productid" element = {<ProductPage/>}/>

        <Route
            path="*"
            element={
              <main className='p-8 bg-rose-200 h-screen'>
                <div className='bg-rose-400 p-8'>
                  <p className='font-bold text-white'>URL not found - 404 code</p>
                  <p>
                    Go Back to <u><Link to="/" className='font-bold'>Homepage</Link></u>
                  </p>
                </div>
              </main>
            }
          />
      </Routes>
      <Footer/>
    </>
  )
}

export default App