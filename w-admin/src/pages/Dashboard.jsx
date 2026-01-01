import React from 'react';
import StatsCard from '../components/StatsCard';
import { ArrowUpRight } from 'lucide-react';

const Dashboard = () => {
    const withdrawalRequests = [
        { name: 'Oluwaseun Adeyemi', id: 'PAY-8291-XJ92-001', account: '1234567891 (Zenith bank)', date: '24th Dec, 2025', amount: '10,000,000' },
        { name: 'Chinedu Eze', id: 'PAY-8291-XJ92-001', account: '1234567891 (Wema bank)', date: '28th Nov, 2025', amount: '17,000,000' },
        { name: 'Oluwaseun Adeyemi', id: 'PAY-8291-XJ92-001', account: '1234567891 (Opay)', date: '24th Dec, 2025', amount: '12,000,000' },
        { name: 'Chinedu Eze', id: 'PAY-8291-XJ92-001', account: '1234567891 (Guaranty trust b...)', date: '28th Nov, 2025', amount: '1,000,000' },
        { name: 'Oluwaseun Adeyemi', id: 'PAY-8291-XJ92-001', account: '1234567891 (Wema bank)', date: '24th Dec, 2025', amount: '10,000,000' },
        { name: 'Chinedu Eze', id: 'PAY-8291-XJ92-001', account: '1234567891 (Access bank)', date: '24th Dec, 2025', amount: '400,000' },
        { name: 'Oluwaseun Adeyemi', id: 'PAY-8291-XJ92-001', account: '1234567891 (Wema bank)', date: '24th Dec, 2025', amount: '10,000,000' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin overview</h1>
                <div className="grid grid-cols-4 gap-6">
                    <StatsCard
                        title="Withdrawal Request"
                        value="32"
                        subtext="₦10,000,000 in total"
                    />
                    <StatsCard
                        title="Transactions"
                        value="20"
                        footer={
                            <>
                                <span className="text-green-500 flex items-center gap-1">Deposit: 10 <ArrowUpRight size={10} /></span>
                                <span className="text-red-500 flex items-center gap-1">Withdrawal: 10 <ArrowUpRight size={10} className="rotate-180" /></span>
                            </>
                        }
                    />
                    <StatsCard
                        title="Active Bets"
                        value="32"
                        footer={
                            <>
                                <span className="text-blue-500">Singles: 16</span>
                                <span className="text-gray-300">|</span>
                                <span className="text-blue-500">Group: 16</span>
                            </>
                        }
                    />
                    <StatsCard
                        title="Admin bets"
                        value="32"
                        subtext="12 active bets"
                        subtextClass="text-gray-500"
                    />
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Withdrawal request</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-l-lg">Name</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Request ID</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Account number</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Request date</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Amount</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-r-lg"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {withdrawalRequests.map((req, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white ${index % 2 === 0 ? 'bg-teal-800' : 'bg-blue-600'}`}>
                                                {req.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{req.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{req.id}</td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{req.account}</td>
                                    <td className="py-4 px-4 text-sm text-gray-600">{req.date}</td>
                                    <td className="py-4 px-4 text-sm font-bold text-gray-900">{req.amount}</td>
                                    <td className="py-4 px-4 text-right">
                                        <button className="text-blue-600 font-medium text-sm hover:text-blue-700">Pay now</button>
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

export default Dashboard;
