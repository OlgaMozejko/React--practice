import './App.css'
import Footer from './footer'
import Header from './header'
import Card from './card'
import data from './data'

function App() {

  const cards = data.map(item => {
    return(
      <Card
      key={item.id} 
      {...item} />
    )
  })

  console.log(cards)

  return (
    <div className="App">
      <Header />

      <section className='frame'></section>

      <section className='cards--list'>
      {cards}
      </section>

      <Footer />
    </div>
  )
}

export default App
