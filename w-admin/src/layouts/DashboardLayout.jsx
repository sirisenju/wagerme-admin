import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = ({ children, onLogout }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />
            <Sidebar onLogout={onLogout} />
            <main className="pl-64 pt-20 min-h-screen">
                <div className="p-8 max-w-[1600px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
