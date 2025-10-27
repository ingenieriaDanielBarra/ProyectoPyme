import Header from './components/Header';
import Hero from './components/Hero';
import Us from './components/Us';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import WhatsAppButton  from './components/WhatsAppButton'
import ScrollToTopButton from './components/ScrollToTopButton';
function App(){
  return (
     <div className="font-sans">
      <Header />
      <Hero />
      <Us />
      <Projects />
      <Services />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
     </div>
  );
}

export default App;























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
