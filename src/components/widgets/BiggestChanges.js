import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { updateBiggestChangesTab } from '../../store/slices/analyticsSlice';

const BiggestChanges = () => {
  const dispatch = useDispatch();
  const { biggestChanges } = useSelector(state => state.analytics);

  const tabs = ['Campaigns', 'Ad Groups', 'Keywords', 'Ads'];

  const getBarColor = (color) => {
    switch (color) {
      case 'orange': return '#FF6B35';
      case 'yellow': return '#FFD700';
      default: return '#d1d5db';
    }
  };

  return (
    <motion.div 
      className="widget-card fill-column"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Tabs */}
      <div className="flex space-x-6 mb-6" style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            className={`text-sm font-medium pb-2 relative ${
              biggestChanges.activeTab === tab 
                ? 'text-gray-dark tab-active' 
                : 'text-gray-light hover:text-gray-dark'
            }`}
            onClick={() => dispatch(updateBiggestChangesTab(tab))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              paddingBottom: '0.5rem', 
              position: 'relative',
              color: biggestChanges.activeTab === tab ? '#2D3748' : '#718096'
            }}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Table with Bar Charts */}
      <div className="overflow-x-auto" style={{ overflowX: 'auto' }}>
        <table className="w-full" style={{ width: '100%' }}>
          <thead>
            <tr className="border-b border-gray-200" style={{ borderBottom: '1px solid #e5e7eb' }}>
              <th className="text-left py-3 text-sm font-medium text-gray-600" style={{ textAlign: 'left', padding: '0.75rem 0', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>Campaign</th>
              <th className="text-left py-3 text-sm font-medium text-gray-600 flex items-center" style={{ textAlign: 'left', padding: '0.75rem 0', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', display: 'flex', alignItems: 'center' }}>
                Spend
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {biggestChanges.campaigns.map((campaign, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ borderBottom: '1px solid #f3f4f6' }}
              >
                <td className="py-4 flex items-center" style={{ padding: '1rem 0', display: 'flex', alignItems: 'center' }}>
                  <div className="w-2 h-2 bg-green-positive rounded-full mr-3" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#48BB78', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                  <span className="text-sm font-medium text-gray-dark" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#2D3748' }}>{campaign.name}</span>
                </td>
                <td className="py-4" style={{ padding: '1rem 0' }}>
                  <div className="flex items-center space-x-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Bar Chart */}
                    <div className="flex-1 max-w-32" style={{ flex: '1', maxWidth: '8rem' }}>
                      <motion.div 
                        className="bar-chart-bar"
                        style={{ 
                          height: '8px', 
                          borderRadius: '4px', 
                          backgroundColor: getBarColor(campaign.barColor),
                          width: `${campaign.barLength}%`
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${campaign.barLength}%` }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      />
                    </div>
                    
                    {/* Values */}
                    <div className="text-right" style={{ textAlign: 'right' }}>
                      <div className="text-sm font-bold text-gray-dark" style={{ fontSize: '0.875rem', fontWeight: '700', color: '#2D3748' }}>{campaign.spend}</div>
                      <div className="text-xs text-green-positive" style={{ fontSize: '0.75rem', color: '#48BB78' }}>{campaign.spendChange}</div>
                    </div>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default BiggestChanges;
