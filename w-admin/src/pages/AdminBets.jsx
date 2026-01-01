import React from 'react';
import { ChevronDown, MoreVertical } from 'lucide-react';

const AdminBets = () => {
    const stats = [
        { title: 'Total Admin Bets', value: '45', subtext: 'All time', subtextClass: 'text-blue-500' },
        { title: 'Active Bets', value: '12', subtext: 'Currently running', subtextClass: 'text-green-500' },
        { title: 'Pending Approval', value: '5', subtext: 'Requires attention', subtextClass: 'text-orange-500' },
        { title: 'Total Volume', value: '45,000,000', subtext: 'In admin bets', subtextClass: 'text-blue-500' },
    ];

    const bets = [
        { title: 'Premier League Weekend Special', date: '30th Dec, 2025', type: 'System Bet', amount: '5,000,000', status: 'Active' },
        { title: 'Champions League Final', date: '15th May, 2026', type: 'Single Bet', amount: '10,000,000', status: 'Scheduled' },
        { title: 'NBA Finals Game 1', date: '4th Jun, 2026', type: 'Group Bet', amount: '2,000,000', status: 'Draft' },
        { title: 'Super Bowl LIX', date: '8th Feb, 2026', type: 'System Bet', amount: '15,000,000', status: 'Active' },
        { title: 'Wimbledon Final', date: '12th Jul, 2026', type: 'Single Bet', amount: '3,000,000', status: 'Scheduled' },
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-40 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-gray-500 font-medium text-sm">{stat.title}</span>
                        </div>
                        <div>
                            <h3 className="text-4xl font-semibold text-gray-900 mb-2">{stat.value}</h3>
                            <p className={`text-sm font-medium ${stat.subtextClass || 'text-gray-500'}`}>{stat.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-gray-900">Admin Bets</h2>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                        Create New Bet
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-l-lg">Title</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Date</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Type</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Amount</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Status</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-r-lg"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {bets.map((bet, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4 font-medium text-gray-900">{bet.title}</td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{bet.date}</td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{bet.type}</td>
                                    <td className="py-4 px-4 text-sm font-bold text-gray-900">{bet.amount}</td>
                                    <td className="py-4 px-4">
                                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${bet.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                bet.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {bet.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminBets;
