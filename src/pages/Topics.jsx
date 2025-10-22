import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProgressTracker from '../Components/ProgressTracker';
import TopicCard from '../Components/TopicCard';
import { topics } from '../data/topics';
const Topics = () => {
    const [completedTopics, setCompletedTopics] = useState([]);

    useEffect(() => {
        const completed = JSON.parse(localStorage.getItem('completedTopics') || '[]');
        setCompletedTopics(completed);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 sm:py-10 md:py-12 flex flex-col items-center">
            <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-24 mx-5 sm:mx-6 md:mx-8 lg:mx-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 sm:mb-10 md:mb-12 mt-8 sm:mt-10 md:mt-12"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-5 md:mb-6 px-4">
                        Your Mental Well-Being Journey
                    </h1>
                    <p style={{ textAlign: "center", margin: " 0 auto" }} className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto px-4 mt-3 sm:mt-4 md:mt-[10px] ">
                        Select a topic to begin learning, reflecting, and growing
                    </p>
                </motion.div>

                {/* Progress Tracker */}
                <div style={{ textAlign: "center" }} className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 flex justify-center px-4">
                    <ProgressTracker totalTopics={topics.length} />
                </div>

                {/* Topics Grid - Centered */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8 w-full px-2"
                >
                    {topics.map((topic, index) => (
                        <motion.div
                            key={topic.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TopicCard
                                topic={topic}
                                isCompleted={completedTopics.includes(topic.id)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Motivational Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center w-full mx-auto mt-8 sm:mt-10 md:mt-12 mb-8"
                >
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 md:mb-6">💙</div>
                    <p className="text-gray-700 italic text-base sm:text-lg md:text-xl leading-relaxed px-2">
                        "Taking care of your mental health is an act of self-love. Each step you take on this journey matters."
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
export default Topics;