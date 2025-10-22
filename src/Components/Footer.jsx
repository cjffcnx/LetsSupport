import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
            <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-24 py-12 sm:py-16 mx-5 sm:mx-6 md:mx-8 lg:mx-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20 mb-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl">🧠</span>
                            <h3 className="text-2xl font-bold">Mind Matters</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Your journey to mental well-being starts here. Explore, learn, and grow with our comprehensive mental health resources.
                        </p>
                        <div className="flex gap-4 text-2xl">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="hover:text-purple-400 transition-colors"
                            >
                                💜
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                className="hover:text-blue-400 transition-colors"
                            >
                                🌟
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="hover:text-green-400 transition-colors"
                            >
                                🌿
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-6 text-purple-300">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block text-base">
                                    🏠 Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/topics" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block text-base">
                                    📚 Topics
                                </Link>
                            </li>
                            <li>
                                <Link to="/summary" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block text-base">
                                    📊 Progress Summary
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Topics */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-6 text-purple-300">Explore Topics</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/topic/1" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block text-sm">
                                    💪 Emotional Resilience
                                </Link>
                            </li>
                            <li>
                                <Link to="/topic/2" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block text-sm">
                                    🪞 Self-Awareness
                                </Link>
                            </li>
                            <li>
                                <Link to="/topic/3" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block text-sm">
                                    🧘 Mindfulness
                                </Link>
                            </li>
                            <li>
                                <Link to="/topic/4" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block text-sm">
                                    🛡️ Coping Strategies
                                </Link>
                            </li>
                            <li>
                                <Link to="/topics" className="text-purple-400 hover:text-purple-300 hover:pl-2 transition-all duration-300 block text-sm font-semibold mt-2">
                                    View All Topics →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-left">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} <span className="font-semibold text-white">Srijan Gajurel</span>. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Built with 💜 for mental well-being
                        </p>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer