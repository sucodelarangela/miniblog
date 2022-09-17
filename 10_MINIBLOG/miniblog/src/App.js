import './App.sass';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthentication } from './hooks/useAuthentication';
import { useEffect, useState } from 'react';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// context
import { AuthProvider } from './context/AuthContext';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  // if user is undefined, then we are still loading data.
  const loadingUser = user === undefined;

  // every time we have an auth change, we have a useEffect to execute the user change
  useEffect(() => {
    // even if we don't have a user, we will receive something different than undefined
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  // if user is still loading (undefined) we show only a p tag with a loading message
  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="App">
      <AuthProvider value={user}>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </main>
  );
}

export default App;
