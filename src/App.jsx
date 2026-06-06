import Footer from "./components/Footer";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from "./components/Header";
import StatCard from "./components/StatCard";

function App() {

    return (
    <>
    <div>
      <Header />
      <StatCard title="Total Sales" value="$10,000" />
    </div>

      <Footer />
    </>
  );
 
}

export default App;
