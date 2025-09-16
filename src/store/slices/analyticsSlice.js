import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalSummary: {
    conversions: { value: '0.00%', change: '0%' },
    roas: { value: '$6,109.89', change: '+27.42%' },
    spend: { value: '$2,101', change: '0%' },
    installs: { value: '$2.91', change: '0%' },
    conversions2: { value: '0.00%', change: '0%' },
    revenue: { value: '$0.00', change: '0%' }
  },
  storefronts: {
    selectedMetric: 'Spend',
    data: [
      { country: 'India', value: 6109.89, color: 'orange' },
      { country: 'US', value: 2000, color: 'light' },
      { country: 'UK', value: 1500, color: 'light' },
      { country: 'Germany', value: 1000, color: 'light' }
    ]
  },
  trends: {
    selectedMetric: 'Spend',
    data: [
      { date: 'Jul 5', value: 27.42, country: 'India' },
      { date: 'Jul 6', value: 35.20, country: 'India' },
      { date: 'Jul 7', value: 42.10, country: 'India' },
      { date: 'Jul 8', value: 38.50, country: 'India' },
      { date: 'Jul 9', value: 45.30, country: 'India' },
      { date: 'Jul 10', value: 41.80, country: 'India' },
      { date: 'Jul 11', value: 27.42, country: 'India' }
    ]
  },
  topList: {
    activeTab: 'Campaigns',
    campaigns: [
      { name: 'Discovery (LOC) India', spend: '$6,109.89', spendChange: '+27.42%', installs: '$44', installsChange: '+27.42%', conversions: '0.00%', conversionsChange: '0%', status: 'active' },
      { name: 'Competitor (LOC) India', spend: '$6,109.89', spendChange: '+27.42%', installs: '$44', installsChange: '+27.42%', conversions: '0.00%', conversionsChange: '0%', status: 'active' },
      { name: 'Today tab (LOC) India', spend: '$6,109.89', spendChange: '+27.42%', installs: '$44', installsChange: '+27.42%', conversions: '0.00%', conversionsChange: '0%', status: 'active' },
      { name: 'Branding (LOC) India', spend: '$6,109.89', spendChange: '+27.42%', installs: '$44', installsChange: '+27.42%', conversions: '0.00%', conversionsChange: '0%', status: 'active' }
    ]
  },
  biggestChanges: {
    activeTab: 'Campaigns',
    campaigns: [
      { name: 'Discovery (LOC) India', spend: '$6,109.89', spendChange: '+27.42%', barLength: 100, barColor: 'orange' },
      { name: 'Competitor (LOC) India', spend: '$6,109.89', spendChange: '+27.42%', barLength: 85, barColor: 'orange' },
      { name: 'Today tab (LOC) India', spend: '$6,109.89', spendChange: '+27.42%', barLength: 60, barColor: 'yellow' },
      { name: 'Branding (LOC) India', spend: '$6,109.89', spendChange: '+27.42%', barLength: 20, barColor: 'yellow' }
    ]
  },
  dateRange: 'Last 7 Days',
  pdfName: 'Pdf Name'
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    updateDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
    updatePdfName: (state, action) => {
      state.pdfName = action.payload;
    },
    updateStorefrontMetric: (state, action) => {
      state.storefronts.selectedMetric = action.payload;
    },
    updateTrendsMetric: (state, action) => {
      state.trends.selectedMetric = action.payload;
    },
    updateTopListTab: (state, action) => {
      state.topList.activeTab = action.payload;
    },
    updateBiggestChangesTab: (state, action) => {
      state.biggestChanges.activeTab = action.payload;
    }
  }
});

export const {
  updateDateRange,
  updatePdfName,
  updateStorefrontMetric,
  updateTrendsMetric,
  updateTopListTab,
  updateBiggestChangesTab
} = analyticsSlice.actions;

export default analyticsSlice.reducer;
