import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden pt-16 sm:pt-20 md:pt-[60px]">




            {/* Decorative floating blobs */}
            <motion.div
                className="absolute top-10 left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-purple-300 opacity-30 blur-3xl rounded-full"
                animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-pink-300 opacity-25 blur-3xl rounded-full"
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Main Content */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-24 py-4 sm:py-8 w-full mx-5 sm:mx-6 md:mx-8 lg:mx-10">

                {/* Brain Icon */}
                <motion.div
                    initial={{ y: -40, scale: 0, rotate: -180 }}
                    animate={{ y: 0, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="mb-8 sm:mb-12 md:mb-20 mt-4 sm:mt-6 md:mt-[35px]"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/70 shadow-xl backdrop-blur-lg">
                        <span className="text-4xl sm:text-5xl md:text-6xl">🧠</span>
                    </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-sm"
                    style={{ color: "#cf47d1" }}
                >
                    Mind Matters
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-3 md:mt-[15px] px-4"
                >
                    A Journey to Mental Well-Being 🌿
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-base sm:text-lg text-gray-600 max-w-3xl leading-loose mb-12 sm:mb-16 md:mb-20 mt-4 sm:mt-6 md:mt-[30px] px-4"
                >
                    Dive into an interactive experience that helps you understand, nurture,
                    and strengthen your mind through learning, self-assessment, and reflection.
                </motion.p>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-14 mt-8 sm:mt-10 md:mt-12 mb-12 sm:mb-16 md:mb-24 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
                >
                    {[
                        { icon: '📚', title: 'Learn', text: 'Explore 8 insightful topics on mental health and self-awareness.' },
                        { icon: '🎯', title: 'Assess', text: 'Challenge your understanding with guided quizzes and reflections.' },
                        { icon: '✍️', title: 'Reflect', text: 'Record your thoughts and track your personal growth journey.' }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -8 }}
                            transition={{ type: 'spring', stiffness: 250 }}
                            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-white/50 mx-4 sm:mx-0"
                        >
                            <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5">{card.icon}</div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{card.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{card.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Button */}
                <motion.div style={{ marginTop: "50px" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                    className="mb-12 sm:mb-16 md:mb-20 mt-4 sm:mt-6 md:mt-[20px]"
                >
                    <Link to="/topics">
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-linear-to-r from-green-500 to-teal-500 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px]"
                        >
                            Start Your Journey <span className="text-xl sm:text-2xl">🌱</span>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
