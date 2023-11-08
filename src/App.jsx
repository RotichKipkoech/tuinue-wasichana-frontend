import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Charities from './components/Charities';
import RegisterDonor from './components/RegisterDonor';
import LoginDonor from './components/LoginDonor';
import AnonymousDonor from './components/AnonymousDonor';
import BeneficiaryStories from './components/BeneficiaryStories';
import AdminDashboard from './components/AdminDashboard';
import DonationPage from './components/DonationPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charities" element={<Charities />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/register" element={<RegisterDonor />} />
            <Route path="/login" element={<LoginDonor />} />
            <Route path="/anonymous" element={<AnonymousDonor />} />
            <Route path="/stories" element={<BeneficiaryStories />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
