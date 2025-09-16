import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="main-layout">
        <Sidebar />
        <div className="content-area">
          <Header />
          <Dashboard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
