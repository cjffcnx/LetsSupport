import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const ProgressTracker = ({ totalTopics }) => {
    const [completedTopics, setCompletedTopics] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const completed = JSON.parse(localStorage.getItem('completedTopics') || '[]');
        setCompletedTopics(completed);
        setProgress((completed.length / totalTopics) * 100);
    }, [totalTopics]);

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6"
            >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-4">
                    <div>
                        <h3 style={{ margin: "10px auto", width: "80px" }} className="text-base sm:text-lg font-bold text-gray-800">Your Progress</h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                            {completedTopics.length} of {totalTopics} topics completed
                        </p>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                        {Math.round(progress)}%
                    </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-5 sm:h-6 rounded-full bg-gradient-to-r from-primary/40 via-white/70 to-white-800 shadow-inner relative"
                    >
                        {progress > 0 && (
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="absolute right-0 top-0 bottom-0 w-1.5 sm:w-2 bg-white opacity-50"
                            />
                        )}
                    </motion.div>
                </div>

                {progress === 100 && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-3 sm:mt-4 text-center"
                    >
                        <span className="text-3xl sm:text-4xl">🎉</span>
                        <p className="text-green-600 font-semibold mt-2 text-sm sm:text-base">
                            Amazing! You've completed all topics!
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default ProgressTracker;
