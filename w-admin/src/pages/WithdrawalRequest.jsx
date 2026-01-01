import React from 'react';
import { ChevronDown } from 'lucide-react';

const WithdrawalRequest = () => {
    const stats = [
        { title: 'Pending Payout', value: '32', subtext: '24 from group bets' },
        { title: 'Completed', value: '32', subtext: '20 pending transactions', badge: 'This week' },
        { title: 'Paid', value: '4,200,000', subtext: '10,000,00 pending', subtextClass: 'text-red-500', badge: 'Today' },
        { title: 'Narkis Cut', value: '150,000', subtext: '0.5% per bet', subtextClass: 'text-blue-500', badge: 'Today' },
    ];

    const requests = [
        { name: 'Oluwaseun Adeyemi', id: 'PAY-8291-XJ92-001', account: '1234567891 (Zenith bank)', date: '24th Dec, 2025', amount: '10,000,000' },
        { name: 'Chinedu Eze', id: 'PAY-8291-XJ92-001', account: '1234567891 (Wema bank)', date: '28th Nov, 2025', amount: '17,000,000' },
        { name: 'Oluwaseun Adeyemi', id: 'PAY-8291-XJ92-001', account: '1234567891 (Opay)', date: '24th Dec, 2025', amount: '12,000,000' },
        { name: 'Chinedu Eze', id: 'PAY-8291-XJ92-001', account: '1234567891 (Guaranty trust b...)', date: '28th Nov, 2025', amount: '1,000,000' },
        { name: 'Oluwaseun Adeyemi', id: 'PAY-8291-XJ92-001', account: '1234567891 (Wema bank)', date: '24th Dec, 2025', amount: '10,000,000' },
        { name: 'Oluwaseun Adeyemi', id: 'PAY-8291-XJ92-001', account: '1234567891 (Wema bank)', date: '24th Dec, 2025', amount: '10,000,000' },
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
                            {requests.map((req, index) => (
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

export default WithdrawalRequest;
