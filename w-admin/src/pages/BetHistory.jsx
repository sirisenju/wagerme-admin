import React from 'react';
import { ChevronDown } from 'lucide-react';

const BetHistory = () => {
    const stats = [
        { title: 'Group bet', value: '320', subtext: '12 active group bets', subtextClass: 'text-blue-500', badge: 'Today' },
        { title: 'Single bet', value: '120', subtext: '10 active single bet', subtextClass: 'text-blue-500', badge: 'This week' },
        { title: 'Public bet', value: '90', subtext: '60 active public bet', subtextClass: 'text-blue-500', badge: 'This week' },
        { title: 'Bet count', value: '9000', subtext: '120 active bets', subtextClass: 'text-blue-500', badge: 'This week' },
    ];

    const bets = [
        { host: 'Oluwaseun Adeyemi', title: 'Halland to win golden boot', date: '28th Dec, 2025', type: 'Group Bet (Private)', amount: '10,000,000', status: 'Pending' },
        { host: 'Chinedu Eze', title: 'Tinubu to complete his 2 te...', date: '28th Dec, 2025', type: 'Group Bet (Public)', amount: '10,000,000', status: 'Pending' },
        { host: 'Oluwaseun Adeyemi', title: 'Halland to win golden boot', date: '28th Dec, 2025', type: 'Single Bet', amount: '10,000,000', status: 'Pending' },
        { host: 'Chinedu Eze', title: 'Halland to win golden boot', date: '28th Dec, 2025', type: 'Single Bet', amount: '10,000,000', status: 'Pending' },
        { host: 'Oluwaseun Adeyemi', title: 'Tinubu to complete his 2 te...', date: '28th Dec, 2025', type: 'Single Bet', amount: '10,000,000', status: 'Pending' },
        { host: 'Chinedu Eze', title: 'Ti...', date: '28th Dec, 2025', type: 'Single Bet', amount: '10,000,000', status: 'Pending' },
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-40 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-gray-500 font-medium text-sm">{stat.title}</span>
                            {stat.badge && (
                                <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-lg border border-gray-100 text-xs font-medium text-gray-600">
                                    {stat.badge} <ChevronDown size={12} />
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="text-4xl font-semibold text-gray-900 mb-2">{stat.value}</h3>
                            <p className={`text-sm font-medium ${stat.subtextClass || 'text-gray-500'}`}>{stat.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Active Bets</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-l-lg">Host</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Title</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Date</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Bet type</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Gross amount</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-r-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {bets.map((bet, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white ${index % 2 === 0 ? 'bg-teal-800' : 'bg-blue-600'}`}>
                                                {bet.host.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{bet.host}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{bet.title}</td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{bet.date}</td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{bet.type}</td>
                                    <td className="py-4 px-4 text-sm font-bold text-gray-900">{bet.amount}</td>
                                    <td className="py-4 px-4">
                                        <span className="text-sm font-medium text-gray-400">
                                            {bet.status}
                                        </span>
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

export default BetHistory;
