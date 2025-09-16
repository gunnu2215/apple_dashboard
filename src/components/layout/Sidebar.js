import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const icons = [
    { id: 'dashboard', icon: '⊞', active: true },
    { id: 'search', icon: '🔍' },
    { id: 'lightning', icon: '⚡' },
    { id: 'refresh', icon: '🔄' },
    { id: 'settings', icon: '⚙️' },
    { id: 'help', icon: '❓' },
    { id: 'profile', icon: '👤' }
  ];

  return (
    <motion.div 
      className="sidebar"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div 
        className="w-8 h-8 bg-orange-primary rounded-full border-2 border-white flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: '2rem', height: '2rem', backgroundColor: '#FF6B35', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}
      >
        <div className="w-2 h-2 bg-white rounded-full" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'white', borderRadius: '50%' }}></div>
      </motion.div>

      {/* Navigation Icons */}
      {icons.map((item, index) => (
        <motion.div
          key={item.id}
          className={`sidebar-icon ${item.active ? 'active-icon' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="text-white text-lg" style={{ color: 'white', fontSize: '1.125rem' }}>
            {item.icon === '⊞' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            ) : item.icon === '🔍' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            ) : item.icon === '⚡' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"></polygon>
              </svg>
            ) : item.icon === '🔄' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
              </svg>
            ) : item.icon === '⚙️' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5L12 12l-4.5-4.5M12 12l4.5 4.5L12 12l-4.5 4.5"></path>
              </svg>
            ) : item.icon === '❓' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Sidebar;
