import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { updateTopListTab } from '../../store/slices/analyticsSlice';

const TopList = () => {
  const dispatch = useDispatch();
  const { topList } = useSelector(state => state.analytics);

  const tabs = ['Campaigns', 'Ad Groups', 'Keywords', 'Ads'];

  const getChangeColor = (change) => {
    if (change.startsWith('+')) return 'positive-change';
    if (change.startsWith('-')) return 'negative-change';
    return 'neutral-change';
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
              topList.activeTab === tab 
                ? 'text-gray-dark tab-active' 
                : 'text-gray-light hover:text-gray-dark'
            }`}
            onClick={() => dispatch(updateTopListTab(tab))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              paddingBottom: '0.5rem', 
              position: 'relative',
              color: topList.activeTab === tab ? '#2D3748' : '#718096'
            }}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto" style={{ overflowX: 'auto' }}>
        <table className="w-full" style={{ width: '100%' }}>
          <thead>
            <tr className="border-b border-gray-200" style={{ borderBottom: '1px solid #e5e7eb' }}>
              <th className="text-left py-3 text-sm font-medium text-gray-600" style={{ textAlign: 'left', padding: '0.75rem 0', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>Campaign</th>
              <th className="text-left py-3 text-sm font-medium text-gray-600 flex items-center" style={{ textAlign: 'left', padding: '0.75rem 0', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', display: 'flex', alignItems: 'center' }}>
                Spend
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </th>
              <th className="text-left py-3 text-sm font-medium text-gray-600 flex items-center" style={{ textAlign: 'left', padding: '0.75rem 0', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', display: 'flex', alignItems: 'center' }}>
                Installs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </th>
              <th className="text-left py-3 text-sm font-medium text-gray-600 flex items-center" style={{ textAlign: 'left', padding: '0.75rem 0', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', display: 'flex', alignItems: 'center' }}>
                Conver...
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {topList.campaigns.map((campaign, index) => (
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
                  <div className="text-sm font-bold text-gray-dark" style={{ fontSize: '0.875rem', fontWeight: '700', color: '#2D3748' }}>{campaign.spend}</div>
                  <div className={`text-xs ${getChangeColor(campaign.spendChange)}`} style={{ fontSize: '0.75rem' }}>
                    {campaign.spendChange}
                  </div>
                </td>
                <td className="py-4" style={{ padding: '1rem 0' }}>
                  <div className="text-sm font-bold text-gray-dark" style={{ fontSize: '0.875rem', fontWeight: '700', color: '#2D3748' }}>{campaign.installs}</div>
                  <div className={`text-xs ${getChangeColor(campaign.installsChange)}`} style={{ fontSize: '0.75rem' }}>
                    {campaign.installsChange}
                  </div>
                </td>
                <td className="py-4" style={{ padding: '1rem 0' }}>
                  <div className="text-sm font-bold text-gray-dark" style={{ fontSize: '0.875rem', fontWeight: '700', color: '#2D3748' }}>{campaign.conversions}</div>
                  <div className={`text-xs ${getChangeColor(campaign.conversionsChange)}`} style={{ fontSize: '0.75rem' }}>
                    {campaign.conversionsChange}
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

export default TopList;
