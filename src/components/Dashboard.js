import React from 'react';
import { motion } from 'framer-motion';
import TotalSummary from './widgets/TotalSummary';
import Storefronts from './widgets/Storefronts';
import Trends from './widgets/Trends';
import TopList from './widgets/TopList';
import BiggestChanges from './widgets/BiggestChanges';

const Dashboard = () => {
  return (
    <motion.main 
      className="dashboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="page-frame">
        <div className="dashboard-grid">
        {/* Summary strip across full width */}
        <motion.div className="area-summary summary-strip"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="section-title">Total Summary</div>
          <TotalSummary />
        </motion.div>
        
        {/* Map left */}
        <motion.div className="area-map map-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="section-title">Storefronts</div>
          <Storefronts />
        </motion.div>

        {/* Trends right */}
        <motion.div className="area-trends trends-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="section-title">Trends</div>
          <Trends />
        </motion.div>

        {/* Top list left */}
        <motion.div className="area-topList toplist-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="section-title">Top List</div>
          <TopList />
        </motion.div>

        {/* Changes right */}
        <motion.div className="area-changes changes-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="section-title">Biggest Changes</div>
          <BiggestChanges />
        </motion.div>
              </div>
      </div>
    </motion.main>
  );
};

export default Dashboard;
