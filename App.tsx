
import React, { useState } from 'react';
import Header from './components/Header';
import DailyItinerary from './components/DailyItinerary';
import TransportLodging from './components/TransportLodging';
import FoodGuide from './components/FoodGuide';
import ItineraryOverview from './components/ItineraryOverview';
import { travelData } from './services/travelData';
import type { ViewType } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('daily');

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return <ItineraryOverview data={travelData} />;
      case 'transport':
        return <TransportLodging data={travelData} />;
      case 'daily':
        return <DailyItinerary data={travelData} />;
      case 'food':
        return <FoodGuide data={travelData} />;
      default:
        return <DailyItinerary data={travelData} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {renderContent()}
      </main>
      <footer className="text-center p-4 text-sm text-gray-500 border-t border-gray-200 mt-8">
        <p>&copy; 2024 Custom Travel Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
   