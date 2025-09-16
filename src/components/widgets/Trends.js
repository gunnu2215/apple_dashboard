import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { updateTrendsMetric } from '../../store/slices/analyticsSlice';

const Trends = () => {
  const dispatch = useDispatch();
  const { trends } = useSelector(state => state.analytics);

  return (
    <motion.div 
      className="widget-card fill-column"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
          <button className="p-1 hover:bg-gray-100 rounded mr-2" style={{ padding: '0.25rem', borderRadius: '0.25rem', marginRight: '0.5rem' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <select 
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-primary"
            value={trends.selectedMetric}
            onChange={(e) => dispatch(updateTrendsMetric(e.target.value))}
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

      {/* Line Chart */}
      <motion.div 
        className="flex-1 bg-blue-50 rounded-lg p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        style={{ height: '16rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem', padding: '1rem' }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trends.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="date" 
              stroke="#718096"
              fontSize={12}
            />
            <YAxis 
              stroke="#718096"
              fontSize={12}
              domain={[0, 50]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#FF6B35" 
              strokeWidth={3}
              dot={{ fill: '#FF6B35', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#FF6B35', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Legend */}
      <div className="flex items-center justify-center mt-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
        <div className="flex items-center space-x-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="w-3 h-3 bg-orange-primary rounded" style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#FF6B35', borderRadius: '0.25rem' }}></div>
          <span className="text-sm text-gray-600" style={{ fontSize: '0.875rem', color: '#4b5563' }}>India</span>
        </div>
      </div>

      {/* Info Button */}
      <div className="absolute bottom-4 right-4" style={{ position: 'absolute', bottom: '1rem', right: '1rem' }}>
        <button className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs" style={{ width: '1.25rem', height: '1.25rem', backgroundColor: '#9ca3af', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem' }}>
          i
        </button>
      </div>
    </motion.div>
  );
};

export default Trends;
