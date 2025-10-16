
import React from 'react';
import type { ViewType } from '../types';

interface HeaderProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const NavLink: React.FC<{
  label: string;
  view: ViewType;
  activeView: ViewType;
  onClick: (view: ViewType) => void;
}> = ({ label, view, activeView, onClick }) => (
  <button
    onClick={() => onClick(view)}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      activeView === view
        ? 'bg-rose-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-rose-100 hover:text-rose-700'
    }`}
  >
    {label}
  </button>
);

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const navItems: { label: string; view: ViewType }[] = [
    { label: '行程總覽', view: 'overview' },
    { label: '每日行程', view: 'daily' },
    { label: '交通住宿', view: 'transport' },
    { label: '美食地圖', view: 'food' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
               <h1 className="text-2xl font-bold text-rose-700">Kyoto Trip</h1>
            </div>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.view}
                  label={item.label}
                  view={item.view}
                  activeView={activeView}
                  onClick={setActiveView}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
       <nav className="md:hidden p-2">
            <div className="flex items-baseline justify-around">
              {navItems.map((item) => (
                <NavLink
                  key={item.view}
                  label={item.label}
                  view={item.view}
                  activeView={activeView}
                  onClick={setActiveView}
                />
              ))}
            </div>
          </nav>
    </header>
  );
};

export default Header;
   