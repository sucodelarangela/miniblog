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
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import EditPost from './pages/EditPost';


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
      {/* after fetching user info, send it to context to feed other parts of the app */}
      <AuthProvider value={{ user }}>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search />} />
              <Route path='/posts/:id' element={<Post />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to='/login' />} />
              <Route path='/posts/edit/:id' element={user ? <EditPost /> : <Navigate to='/login' />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </main>
  );
}

export default App;
