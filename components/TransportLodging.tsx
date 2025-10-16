
import React from 'react';
import type { TravelData, Accommodation, TransportationOption } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const transportChartData = [
  { name: 'Day 1 (Airport)', '單程票': 3200, '套票優惠': 2800 },
  { name: 'Day 2 (Bus Tour)', '單程票': 920, '巴士一日券': 700 },
  { name: 'Day 4 (Bus Tour)', '單程票': 690, '巴士一日券': 700 },
];


const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-rose-200 pb-2">{title}</h2>
        {children}
    </div>
);

const TransportLodging: React.FC<{ data: TravelData }> = ({ data }) => {
    return (
        <div className="space-y-8">
            <Section title="交通資訊">
                <p className="text-gray-600 mb-6">{data.transportation.recommendation}</p>
                <div className="space-y-4">
                    {data.transportation.options.map((option: TransportationOption) => (
                        <div key={option.name} className="p-4 border border-gray-200 rounded-lg">
                            <p className="font-semibold text-rose-700">{option.name} <span className="text-sm font-normal text-gray-500 ml-2">{option.cost}</span></p>
                            <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="交通費用比較 (範例)">
                <p className="text-sm text-gray-500 mb-4">此圖表比較在特定行程日中使用單程票券與一日券的費用差異，幫助您做出最划算的選擇。</p>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={transportChartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis unit="円"/>
                            <Tooltip formatter={(value: number) => `${value.toLocaleString()}円`}/>
                            <Legend />
                            <Bar dataKey="單程票" fill="#fecdd3" name="單程票券總額" />
                            <Bar dataKey="巴士一日券" fill="#e11d48" name="一日券/優惠票" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Section>

            <Section title="住宿地點">
                <div className="space-y-4">
                    {data.accommodations.map((acc: Accommodation) => (
                        <div key={acc.name} className="p-4 border border-gray-200 rounded-lg flex items-start space-x-4">
                            <div className="text-2xl mt-1">🏨</div>
                            <div>
                               <p className="font-semibold text-rose-700">{acc.name}</p>
                               <p className="text-sm font-medium text-gray-500">{acc.dates}</p>
                               <p className="text-sm text-gray-600 mt-1">{acc.notes}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default TransportLodging;
   