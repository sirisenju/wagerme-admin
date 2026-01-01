import React from 'react';
import { ChevronDown } from 'lucide-react';

const Transactions = () => {
    const stats = [
        { title: 'Withdrawal', value: '32', subtext: '28 pending withdrawals', subtextClass: 'text-red-500', badge: 'Today' },
        { title: 'Deposit', value: '32', subtext: '₦10,000,000 deposit today', subtextClass: 'text-blue-500', badge: 'This week' },
        { title: 'Total Deposit', value: '32,000,000', subtext: '10,000,000 deposited last hour', subtextClass: 'text-blue-500', badge: 'This week' },
        { title: 'Total Withdrawal', value: '32,000,000', subtext: '10,000,000 withdrawn last hour', subtextClass: 'text-blue-500', badge: 'This week' },
    ];

    const transactions = [
        { name: 'Oluwaseun Adeyemi', id: '000013251222075507123489012', date: '28th Dec, 2025', type: 'Withdrawal', amount: '10,000,000', status: 'Success' },
        { name: 'Chinedu Eze', id: '000013251222075507123489012', date: '28th Dec, 2025', type: 'Deposit', amount: '10,000,000', status: 'Failed' },
        { name: 'Oluwaseun Adeyemi', id: '000013251222075507123489012', date: '28th Dec, 2025', type: 'Deposit', amount: '500,000', status: 'Success' },
        { name: 'Chinedu Eze', id: '000013251222075507123489012', date: '24th Dec, 2025', type: 'Withdrawal', amount: '1,000,000', status: 'Failed' },
        { name: 'Oluwaseun Adeyemi', id: '000013251222075507123489012', date: '28th Dec, 2025', type: 'Deposit', amount: '500,000', status: 'Success' },
        { name: 'Oluwaseun Adeyemi', id: '000013251222075507123489012', date: '28th Dec, 2025', type: 'Deposit', amount: '500,000', status: 'Success' },
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
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-gray-900">Transactions</h2>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
                        All Transactions <ChevronDown size={16} />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-l-lg">Name</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Transaction ID</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Date</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Transaction type</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Amount</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-r-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {transactions.map((tx, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white ${index % 2 === 0 ? 'bg-teal-800' : 'bg-blue-600'}`}>
                                                {tx.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{tx.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{tx.id}</td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{tx.date}</td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{tx.type}</td>
                                    <td className="py-4 px-4 text-sm font-bold text-gray-900">{tx.amount}</td>
                                    <td className="py-4 px-4">
                                        <span className={`text-sm font-medium ${tx.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
                                            {tx.status}
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

export default Transactions;
