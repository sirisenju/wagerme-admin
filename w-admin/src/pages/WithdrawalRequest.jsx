import React, { useState, useEffect } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import api from '../api/axiosConfig';

const WithdrawalRequest = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(null); // Stores ID of item being processed
    const [error, setError] = useState(null);

    // Calculate stats
    const pendingRequests = requests.filter(r => r.status === 'pending');
    const completedRequests = requests.filter(r => r.status === 'success' || r.status === 'paid');
    const totalPaid = completedRequests.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(amount);
    };

    const stats = [
        { title: 'Pending Payout', value: pendingRequests.length, subtext: '0 from group bets' },
        { title: 'Completed', value: completedRequests.length, subtext: `${pendingRequests.length} pending transactions`, badge: 'Total' },
        { title: 'Paid', value: formatCurrency(totalPaid), subtext: `${formatCurrency(0)} pending`, subtextClass: 'text-red-500', badge: 'Total' },
        { title: 'Markis Cut', value: '150,000', subtext: '0.5% per bet', subtextClass: 'text-blue-500', badge: 'Today' },
    ];

    const fetchRequests = async () => {
        try {
            setLoading(true);
            const response = await api.get('/withdraw/');
            setRequests(response.data);
            setError(null);
        } catch (err) {
            console.error("Error fetching withdrawals:", err);
            setError("Failed to load withdrawal requests.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const handleApprove = async (id) => {
        if (!id) return;
        try {
            setActionLoading(id);
            await api.patch(`/Withdraw/approve/${id}`);
            // Success! Refresh the list
            await fetchRequests();
        } catch (err) {
            console.error("Error approving withdrawal:", err);
            alert("Failed to approve withdrawal. Please try again.");
        } finally {
            setActionLoading(null);
        }
    };


    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const LoadingSkeleton = () => (
        <>
            {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="animate-pulse">
                    <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                        </div>
                    </td>
                    <td className="py-4 px-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                    <td className="py-4 px-4"><div className="h-4 bg-gray-200 rounded w-32"></div></td>
                    <td className="py-4 px-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                    <td className="py-4 px-4"><div className="h-4 bg-gray-200 rounded w-16"></div></td>
                    <td className="py-4 px-4 text-right"><div className="h-8 bg-gray-200 rounded w-20 ml-auto"></div></td>
                </tr>
            ))}
        </>
    );

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

                {error && (
                    <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2">
                        <AlertCircle size={20} />
                        {error}
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-l-lg">Name</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Request ID</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Account number</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Request date</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Amount</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500">Status</th>
                                <th className="py-4 px-4 text-sm font-medium text-gray-500 rounded-r-lg"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                <LoadingSkeleton />
                            ) : (
                                requests.map((req, index) => (
                                    <tr key={req._id || index} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white ${index % 2 === 0 ? 'bg-teal-800' : 'bg-blue-600'}`}>
                                                    {(req.accountName || 'U').charAt(0)}
                                                </div>
                                                <span className="font-medium text-gray-900">{req.accountName || 'Unknown User'}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600 font-mono" title={req._id}>
                                            {req._id ? `...${req._id.slice(-6)}` : 'N/A'}
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600">
                                            <div>{req.accountNumber}</div>
                                            <div className="text-xs text-gray-400">{req.bankName}</div>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600">{formatDate(req.createdAt)}</td>
                                        <td className="py-4 px-4 text-sm font-bold text-gray-900">{formatCurrency(req.amount)}</td>
                                        <td className="py-4 px-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                                ${req.status === 'success' ? 'bg-green-100 text-green-800' :
                                                    req.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-gray-100 text-gray-800'}`}>
                                                {req.status || 'unknown'}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-right">
                                            {req.status !== 'success' && req.status !== 'paid' && (
                                                <button
                                                    onClick={() => handleApprove(req._id)}
                                                    disabled={actionLoading === req._id}
                                                    className="text-blue-600 font-medium text-sm hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 ml-auto"
                                                >
                                                    {actionLoading === req._id ? 'Processing...' : 'Pay now'}
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                            {!loading && requests.length === 0 && !error && (
                                <tr>
                                    <td colspan="7" className="py-8 text-center text-gray-500">
                                        No withdrawal requests found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WithdrawalRequest;
