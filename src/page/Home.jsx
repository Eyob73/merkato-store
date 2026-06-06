import { NavLink } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import StatCard from '../components/StatCard'


function Home(){

    
    return(
    <>
    <Header />
      <StatCard title="Total Sales" value="$10,000" />
      <Footer />
    </>
    )
} 

export default Home;