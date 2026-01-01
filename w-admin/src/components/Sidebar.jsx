import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, Wallet, ArrowRightLeft, History, Shield } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { path: '/', name: 'Dashboard', icon: LayoutGrid },
        { path: '/withdrawal-request', name: 'Withdrawal request', icon: Wallet },
        { path: '/transactions', name: 'Transactions', icon: ArrowRightLeft },
        { path: '/bet-history', name: 'Bet History', icon: History },
        { path: '/admin-bets', name: 'Admin Bets', icon: Shield },
    ];

    return (
        <div className="w-64 h-screen bg-white flex flex-col border-r border-gray-100 fixed left-0 top-0 pt-24 pb-4 px-4">
            <div className="mb-8 px-4">
                <h2 className="text-gray-500 text-sm font-medium">Menu</h2>
            </div>
            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'text-gray-500 hover:bg-gray-50'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span className="font-medium text-sm">{item.name}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
