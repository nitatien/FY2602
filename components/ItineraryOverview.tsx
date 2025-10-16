
import React from 'react';
import type { TravelData } from '../types';

interface ItineraryOverviewProps {
    data: TravelData;
}

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="bg-rose-100 text-rose-600 rounded-full p-3">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-xl font-semibold text-gray-800">{value}</p>
        </div>
    </div>
);

const ItineraryOverview: React.FC<ItineraryOverviewProps> = ({ data }) => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-rose-700 mb-2">{data.tripTitle}</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{data.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="旅遊天數" value="8 天" icon={<CalendarIcon />} />
                <StatCard title="目的地" value="日本, 京都" icon={<MapPinIcon />} />
                <StatCard title="住宿地點" value={`${data.accommodations.length} 間`} icon={<BedIcon />} />
                <StatCard title="必訪景點" value={`${data.dailyPlan.flatMap(d => d.events.filter(e => e.type === 'Sightseeing')).length}+`} icon={<CameraIcon />} />
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-700">行程亮點</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['賞梅', '溫泉', '品酒', '甜點巡禮', '歷史古蹟', '自然風光'].map(highlight => (
                        <div key={highlight} className="bg-rose-50 border border-rose-200 text-rose-800 rounded-full px-4 py-2 text-center text-sm font-medium">
                            {highlight}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// SVG Icons
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const BedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
);
const CameraIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export default ItineraryOverview;
   