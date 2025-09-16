import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const TotalSummary = () => {
  const { totalSummary } = useSelector(state => state.analytics);

  const metrics = [
    { label: 'Conversions ROAS:', ...totalSummary.conversions },
    { label: 'Conversions ROAS:', ...totalSummary.roas },
    { label: 'Conversions ROAS:', ...totalSummary.spend },
    { label: 'Conversions ROAS:', ...totalSummary.installs },
    { label: 'Conversions ROAS:', ...totalSummary.conversions2 },
    { label: 'Conversions ROAS:', ...totalSummary.revenue }
  ];

  const getChangeColor = (change) => {
    if (change.startsWith('+')) return 'positive-change';
    if (change.startsWith('-')) return 'negative-change';
    return 'neutral-change';
  };

  return (
    <motion.div 
      className="widget-card"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Row 1 */}
      <div className="summary-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
        {metrics.slice(0, 3).map((metric, index) => (
          <motion.div
            key={index}
            className="metric-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="text-sm text-gray-medium mb-1" style={{ fontSize: '12px', color: '#4A5568', marginBottom: '4px' }}>{metric.label}</div>
            <div className="text-2xl font-bold text-gray-dark mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#2D3748', marginBottom: '4px' }}>
              {metric.value}
            </div>
            <div className={`text-sm font-medium ${getChangeColor(metric.change)}`} style={{ fontSize: '12px', fontWeight: '600' }}>
              {metric.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="summary-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {metrics.slice(3, 6).map((metric, index) => (
          <motion.div
            key={index}
            className="metric-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 + 0.15 }}
          >
            <div className="text-sm text-gray-medium mb-1" style={{ fontSize: '12px', color: '#4A5568', marginBottom: '4px' }}>{metric.label}</div>
            <div className="text-2xl font-bold text-gray-dark mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#2D3748', marginBottom: '4px' }}>
              {metric.value}
            </div>
            <div className={`text-sm font-medium ${getChangeColor(metric.change)}`} style={{ fontSize: '12px', fontWeight: '600' }}>
              {metric.change}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TotalSummary;
