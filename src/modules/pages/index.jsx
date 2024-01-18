import Footer from './components/Footer';
import Header from './components/Header'
import HomeCards from './components/HomeCards';
import Banner from './components/Slider';
import "./index.sass"

const Home = () => {
  return(
    <div>
      <Header/>
      <Banner/>   
      <HomeCards/>
      <Footer/>

    </div>
  )
}


export default Home;