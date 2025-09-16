# Apple Search Ads Analytics Dashboard

A comprehensive React Redux analytics dashboard for Apple Search Ads performance tracking. The application displays real-time metrics, interactive charts, data tables, and provides filtering capabilities with smooth animations and responsive design.

Website : https://apple-dashboard-sand.vercel.app/
## Features

- **Real-time Analytics**: Track conversions, ROAS, spend, installs, and other key metrics
- **Interactive Visualizations**: 
  - World map for storefront performance
  - Line charts for trend analysis
  - Bar charts for biggest changes
- **Data Tables**: Sortable and filterable campaign data
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion
- **State Management**: Redux Toolkit for efficient state management

## Tech Stack

- **React 18+** with functional components and hooks
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for data visualizations
- **React Table** for data grids

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd apple-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.js
│   │   └── Header.js
│   └── widgets/
│       ├── TotalSummary.js
│       ├── Storefronts.js
│       ├── Trends.js
│       ├── TopList.js
│       └── BiggestChanges.js
├── store/
│   ├── index.js
│   └── slices/
│       └── analyticsSlice.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Features Overview

### Dashboard Components

1. **Sidebar Navigation**: Orange sidebar with navigation icons
2. **Header**: Title, PDF export, date range picker, and menu
3. **Total Summary**: Six metric cards showing key performance indicators
4. **Storefronts**: World map visualization with country performance
5. **Trends**: Line chart showing performance trends over time
6. **Top List**: Tabbed data table with campaign performance
7. **Biggest Changes**: Bar chart visualization of performance changes

### State Management

The application uses Redux Toolkit for state management with the following slices:

- **analyticsSlice**: Manages all dashboard data and UI state
- Actions for updating date ranges, metrics, and tab selections
- Centralized state for all widget data

### Styling

- **Tailwind CSS** for utility-first styling
- **Custom CSS** for specific dashboard components
- **Responsive design** with mobile-first approach
- **Custom color palette** matching the design requirements

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (one-way operation)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
