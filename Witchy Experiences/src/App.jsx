import Navbar from './navbar'
import HeroComponent from './hero'
import Card from './card'
import './App.css'
import data from './data'


function MyApp() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id} 
        {...item} 
      />
    )
  })

  return(
    <div>
      <Navbar />
      <HeroComponent />
      <section className='cards--list'>
      {cards}
      </section>
    </div>
  )
}

export default MyApp