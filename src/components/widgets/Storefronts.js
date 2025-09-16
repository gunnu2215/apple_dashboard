import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { updateStorefrontMetric } from '../../store/slices/analyticsSlice';

const Storefronts = () => {
  const dispatch = useDispatch();
  const { storefronts } = useSelector(state => state.analytics);

  return (
    <motion.div 
      className="widget-card fill-column"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="flex space-x-2" style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="p-2 hover:bg-gray-100 rounded" style={{ padding: '0.5rem', borderRadius: '0.25rem' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded" style={{ padding: '0.5rem', borderRadius: '0.25rem' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded" style={{ padding: '0.5rem', borderRadius: '0.25rem' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center mb-4" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <select 
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-primary"
          value={storefronts.selectedMetric}
          onChange={(e) => dispatch(updateStorefrontMetric(e.target.value))}
          style={{ border: '1px solid #d1d5db', borderRadius: '0.25rem', padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
        >
          <option value="Spend">Spend</option>
          <option value="Installs">Installs</option>
          <option value="Conversions">Conversions</option>
        </select>
        <svg className="w-4 h-4 text-gray-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem', color: '#6b7280', marginLeft: '0.25rem' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* World Map Visualization */}
      <motion.div 
        className="relative bg-orange-100 rounded-lg p-4 mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        style={{ position: 'relative', backgroundColor: '#fed7aa', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}
      >
        <div className="flex justify-center items-center h-48" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12rem' }}>
          <div className="relative">
            {/* Simplified world map representation */}
            <div className="w-64 h-32 bg-orange-200 rounded-lg relative overflow-hidden" style={{ width: '16rem', height: '8rem', backgroundColor: '#fdba74', borderRadius: '0.5rem', position: 'relative', overflow: 'hidden' }}>
              {/* India highlight */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-orange-primary rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '4rem', height: '2rem', backgroundColor: '#FF6B35', borderRadius: '50%' }}
              />
              <div className="absolute top-2 right-2 flex space-x-1" style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', display: 'flex', gap: '0.25rem' }}>
                <button className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: 'white', borderRadius: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>+</button>
                <button className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: 'white', borderRadius: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>-</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Range Bar */}
      <div className="flex items-center justify-between mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span className="text-sm text-gray-600" style={{ fontSize: '0.875rem', color: '#4b5563' }}>$6.11k</span>
        <span className="text-sm text-gray-600" style={{ fontSize: '0.875rem', color: '#4b5563' }}>$6.11k</span>
      </div>
      
      <div className="relative" style={{ position: 'relative' }}>
        <div className="w-full h-2 bg-gray-200 rounded-full" style={{ width: '100%', height: '0.5rem', backgroundColor: '#e5e7eb', borderRadius: '9999px' }}>
          <motion.div 
            className="h-2 bg-orange-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ height: '0.5rem', backgroundColor: '#FF6B35', borderRadius: '9999px' }}
          />
        </div>
        <div className="absolute -bottom-6 right-0" style={{ position: 'absolute', bottom: '-1.5rem', right: '0' }}>
          <button className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs" style={{ width: '1.25rem', height: '1.25rem', backgroundColor: '#9ca3af', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem' }}>
            i
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Storefronts;
