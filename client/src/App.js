import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ArtDetails from './pages/ArtDetails';
import MyCollection from './pages/MyCollections';
import ProtectedRoute from './components/ProtectedRoute';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/art/:id" element={<ArtDetails />} />
        <Route path="/search" element={<SearchResult />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/my-collections" element={<MyCollection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

