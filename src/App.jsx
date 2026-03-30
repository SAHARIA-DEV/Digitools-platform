
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import Card from './components/Card'
import Steps from './components/Steps'
import Footer from './components/Footer'
import products from './data/products.json'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Card />
      <Steps />
      <Footer />
    </>
  )
}

export default App
