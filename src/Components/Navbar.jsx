import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-white shadow-md sticky top-0 z-50"
        >
            <div className="w-full px-10 sm:px-12 lg:px-16 xl:px-20">
                <div className="flex justify-between items-center h-14 sm:h-16">
                    {/* Brand/Logo */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 p-1">
                        <span className="text-xl sm:text-2xl ml-2 sm:ml-3.5">🧠</span>
                        <span className="text-base sm:text-xl md:text-2xl font-extrabold text-yellow-700 tracking-tight mr-2 sm:mr-4 md:mr-5 line-clamp-1">
                            Mi PEACE HUB 🏠
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex gap-2 sm:gap-4 md:gap-6">
                        <Link
                            to="/"
                            className="text-gray-700 font-semibold hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base"
                        >
                            Home
                        </Link>
                        <Link
                            to="/topics"
                            className="text-gray-700 font-semibold hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base"
                        >
                            Topics
                        </Link>
                        <Link
                            to="/summary"
                            className="text-gray-700 font-semibold hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base"
                        >
                            Progress
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
