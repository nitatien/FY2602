
import React from 'react';
import type { TravelData, FoodSpot } from '../types';

const FoodGuide: React.FC<{ data: TravelData }> = ({ data }) => {
    
    const getTypeStyle = (type: FoodSpot['type']) => {
        switch (type) {
            case 'Restaurant': return 'bg-blue-100 text-blue-800';
            case 'Dessert': return 'bg-pink-100 text-pink-800';
            case 'Sake': return 'bg-purple-100 text-purple-800';
            case 'Market': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div>
            <div className="text-center mb-8 bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800">京都美食地圖</h1>
                <p className="text-gray-600 mt-2">精選行程中提到的特色餐廳、甜點店與市集，讓您品味最道地的京都滋味。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.foodGuide.map((spot, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="p-6">
                            <div className="flex justify-between items-start">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{spot.name}</h2>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTypeStyle(spot.type)}`}>
                                    {spot.type}
                                </span>
                            </div>
                            <p className="text-gray-600"><strong>特色：</strong>{spot.specialty}</p>
                            <p className="text-sm text-gray-500 mt-2">行程第 {spot.day_mentioned} 天提及</p>
                        </div>
                        <div className="bg-gray-50 px-6 py-3 border-t">
                            <a href={`https://www.google.com/maps/search/?api=1&query=Kyoto+${spot.name}`} target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-800 font-medium text-sm">
                                在地圖上查看 →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodGuide;
   