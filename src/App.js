import React from 'react'
import Navbar from './components/navbar/Navbar'
import Card from './components/cards/Card'
import Footer from './components/footer/Footer'
import {data} from './utils/data'

const App = () => {
  return (
    <div>
      <Navbar />

      <div className=' p-5 grid lg:grid-cols-4 md:grid-cols-3  gap-5 '>
      {data.map(({title, image, desc, id,price}) =>  (
      <Card title={title} image={image} desc={desc}  price={price} key={id} /> ))}
    </div>

     
    </div>
    
  )
}

export default App
