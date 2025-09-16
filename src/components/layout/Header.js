import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { updateDateRange, updatePdfName } from '../../store/slices/analyticsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { dateRange, pdfName } = useSelector(state => state.analytics);

  return (
    <motion.header 
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        {/* Title Section */}
        <div className="flex-1">
          <motion.h1 
            className="header h1"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Overview dashboard
            <span className="title-underline"></span>
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A consolidated view of your app efficiency by storefronts and key metrics.
          </motion.p>
        </div>

        {/* Controls Section */}
        <motion.div 
          className="flex items-center space-x-6"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
        >
          {/* PDF Export */}
          <div className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#ef4444', borderRadius: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="text-white text-xs font-bold" style={{ color: 'white', fontSize: '0.75rem', fontWeight: '700' }}>PDF</span>
            </div>
            <select 
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-primary"
              value={pdfName}
              onChange={(e) => dispatch(updatePdfName(e.target.value))}
              style={{ border: '1px solid #d1d5db', borderRadius: '0.25rem', padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
            >
              <option value="Pdf Name">Pdf Name</option>
              <option value="Monthly Report">Monthly Report</option>
              <option value="Weekly Report">Weekly Report</option>
            </select>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem', color: '#6b7280' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Date Range */}
          <div className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem', color: '#6b7280' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <select 
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-primary"
              value={dateRange}
              onChange={(e) => dispatch(updateDateRange(e.target.value))}
              style={{ border: '1px solid #d1d5db', borderRadius: '0.25rem', padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
            >
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="Last 90 Days">Last 90 Days</option>
            </select>
            <span className="text-sm text-gray-600" style={{ fontSize: '0.875rem', color: '#4b5563' }}>Jul 5 - Jul 11, 2025</span>
          </div>

          {/* Hamburger Menu */}
          <motion.button 
            className="p-2 hover:bg-gray-100 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '0.5rem', borderRadius: '0.5rem' }}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.5rem', height: '1.5rem', color: '#4b5563' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
