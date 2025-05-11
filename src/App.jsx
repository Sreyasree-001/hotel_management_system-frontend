import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import SignIn from './components/SignIn'


function Home() {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}

function AppContent() {
  const location = useLocation()

  return (
    <>
      <div className='fixed flex mt-0'>
        <Navbar />
      </div>
      <div className='pt-12 lg:pt-4'> {/* padding-top to avoid overlap with fixed navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn/>} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
      {/* Conditionally render footer only if NOT on signup page */}
      {location.pathname !== '/sign-in' && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

