import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Error parsing user data", e);
            }
        }
    }, []);

    const getInitials = () => {
        if (!user) return 'MA'; // Default
        const first = user.firstName ? user.firstName.charAt(0) : '';
        const last = user.lastName ? user.lastName.charAt(0) : '';
        return (first + last).toUpperCase() || 'U';
    };

    return (
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 fixed top-0 left-0 right-0 z-10">
            <div className="flex items-center gap-2">
                {/* Logo placeholder - using text as per screenshot style */}
                <div className="text-2xl font-bold text-blue-600 flex items-center gap-1">
                    <span>✨</span> Nextmove
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search users, bet title, transaction id's etc"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-600 placeholder-gray-400"
                    />
                </div>

                <button className="p-2 rounded-full hover:bg-gray-50 text-gray-500 relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm" title={user ? `${user.firstName} ${user.lastName}` : 'Admin'}>
                    {getInitials()}
                </div>
            </div>
        </header>
    );
};

export default Header;
