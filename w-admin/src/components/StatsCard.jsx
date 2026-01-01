import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const StatsCard = ({ title, value, subtext, subtextClass = "text-blue-500", footer }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
                <span className="text-gray-500 font-medium text-sm">{title}</span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <ArrowUpRight size={16} />
                </div>
            </div>

            <div>
                <h3 className="text-4xl font-semibold text-gray-900 mb-2">{value}</h3>
                {subtext && <p className={`text-sm font-medium ${subtextClass}`}>{subtext}</p>}
                {footer && <div className="text-xs text-gray-400 mt-1 flex gap-2">{footer}</div>}
            </div>
        </div>
    );
};

export default StatsCard;
