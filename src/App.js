import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import {data} from './utils/data'

const App = () => {
  return (
    <div>
      <Navbar />

      <div className=' p-5 grid lg:grid-cols-4 md:grid-cols-3  gap-5 '>
      {data.map(({title, image, desc, id,price}) =>  (
      <Card title={title} image={image} desc={desc}  price={price} key={id} /> ))}
    </div>
      <Footer />
     
    </div>
    
  )
}

export default App
