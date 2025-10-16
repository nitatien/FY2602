
import React, { useState } from 'react';
import type { TravelData, Event } from '../types';

const EventIcon: React.FC<{ type: Event['type'] }> = ({ type }) => {
    const iconMap = {
        Travel: '✈️',
        Lodging: '🏨',
        Dining: '🍴',
        Sightseeing: '🏯',
        Activity: '🌸',
        Shopping: '🛍️'
    };
    return <span className="text-2xl">{iconMap[type] || '✨'}</span>;
};

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="flex space-x-4">
        <div className="flex flex-col items-center">
            <EventIcon type={event.type} />
            <div className="w-px h-full bg-rose-200"></div>
        </div>
        <div className="pb-8 flex-1">
            <p className="font-semibold text-rose-700">{event.time} - {event.activity}</p>
            <p className="text-gray-600 mt-1">{event.description}</p>
            {event.details && <p className="text-sm text-blue-600 mt-1 bg-blue-50 p-2 rounded-md">{event.details}</p>}
            {event.photo_spot && (
                <div className="mt-2 p-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                    <p className="font-semibold text-amber-800">📷 攝影地點</p>
                    <p className="text-sm text-amber-700">{event.photo_spot}</p>
                </div>
            )}
        </div>
    </div>
);

const DailyItinerary: React.FC<{ data: TravelData }> = ({ data }) => {
    const [openDay, setOpenDay] = useState<number>(1);

    const toggleDay = (day: number) => {
        setOpenDay(openDay === day ? -1 : day);
    };

    return (
        <div className="space-y-4">
            {data.dailyPlan.map((day) => (
                <div key={day.day} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <button
                        onClick={() => toggleDay(day.day)}
                        className="w-full text-left p-4 bg-gray-50 hover:bg-rose-50 transition duration-200"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium text-rose-600">Day {day.day} • {day.date}</p>
                                <h2 className="text-xl font-bold text-gray-800">{day.title}</h2>
                                <p className="text-sm text-gray-500">{day.theme}</p>
                            </div>
                            <span className={`transform transition-transform duration-300 ${openDay === day.day ? 'rotate-180' : ''}`}>
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </span>
                        </div>
                    </button>
                    {openDay === day.day && (
                        <div className="p-6 border-t border-gray-200 animate-fade-in-down">
                            <div className="relative">
                                {day.events.map((event, index) => (
                                    <EventCard key={index} event={event} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
             <style>{`
                @keyframes fade-in-down {
                    0% {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.5s ease-out;
                }
             `}</style>
        </div>
    );
};

export default DailyItinerary;
   