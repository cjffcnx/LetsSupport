import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { topics } from '../data/topics';

const Summary = () => {
    const [completedTopics, setCompletedTopics] = useState([]);
    const [quizResults, setQuizResults] = useState({});
    const [reflections, setReflections] = useState({});
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const completed = JSON.parse(localStorage.getItem('completedTopics') || '[]');
        const results = JSON.parse(localStorage.getItem('quizResults') || '{}');
        const userReflections = JSON.parse(localStorage.getItem('reflections') || '{}');

        setCompletedTopics(completed);
        setQuizResults(results);
        setReflections(userReflections);

        if (completed.length === topics.length) {
            setShowConfetti(true);
        }
    }, []);

    const completionPercentage = (completedTopics.length / topics.length) * 100;

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
            localStorage.removeItem('completedTopics');
            localStorage.removeItem('quizResults');
            localStorage.removeItem('reflections');
            window.location.href = '/';
        }
    };

    const totalQuizScore = Object.values(quizResults).reduce((acc, result) => acc + result.score, 0);
    const totalQuizQuestions = Object.values(quizResults).reduce((acc, result) => acc + result.total, 0);
    const averageQuizPercentage = totalQuizQuestions > 0 ? (totalQuizScore / totalQuizQuestions) * 100 : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-24 py-8 sm:py-10 md:py-12 mx-5 sm:mx-6 md:mx-8 lg:mx-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 sm:mb-10 md:mb-12 mt-8 sm:mt-10 md:mt-12"
                >
                    {showConfetti && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            className="text-6xl sm:text-7xl md:text-8xl mb-3 sm:mb-4"
                        >
                            🎉
                        </motion.div>
                    )}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
                        Your Journey Summary
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 px-4">
                        Celebrate your progress and reflect on your growth
                    </p>
                </motion.div>

                {/* Progress Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 px-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center"
                    >
                        <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">📚</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                            {completedTopics.length}/{topics.length}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">Topics Completed</p>
                        <div className="mt-3 sm:mt-4 w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-primary h-2 rounded-full transition-all duration-500"
                                style={{ width: `${completionPercentage}%` }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center"
                    >
                        <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">🎯</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">
                            {Math.round(averageQuizPercentage)}%
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">Average Quiz Score</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            {totalQuizScore} / {totalQuizQuestions} questions correct
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center sm:col-span-2 md:col-span-1"
                    >
                        <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">✍️</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">
                            {Object.keys(reflections).length}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">Reflections Written</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            {Object.values(reflections).reduce((acc, ref) => acc + ref.length, 0)} total characters
                        </p>
                    </motion.div>
                </div>

                {/* Completed Topics List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 sm:mb-10 md:mb-12"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center px-4">Your Progress</h2>
                    <div className="space-y-4 sm:space-y-6 md:space-y-8 px-2">
                        {topics.map((topic) => {
                            const isCompleted = completedTopics.includes(topic.id);
                            const hasQuiz = quizResults[topic.id];
                            const hasReflection = reflections[topic.id];

                            return (
                                <div
                                    key={topic.id}
                                    className={`p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all ${isCompleted
                                        ? 'border-green-300 bg-green-50'
                                        : 'border-gray-200 bg-gray-50'
                                        }`}
                                >
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                            <span className="text-2xl sm:text-3xl flex-shrink-0">{topic.icon}</span>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-gray-800 text-base sm:text-lg">{topic.title}</h3>
                                                <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2">
                                                    {hasQuiz && (
                                                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                                            Quiz: {quizResults[topic.id].score}/{quizResults[topic.id].total}
                                                        </span>
                                                    )}
                                                    {hasReflection && (
                                                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                                            ✓ Reflected ({reflections[topic.id].length} chars)
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 self-end sm:self-auto">
                                            {isCompleted ? (
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                                                    ✓
                                                </div>
                                            ) : (
                                                <Link to={`/topic/${topic.id}`}>
                                                    <button className="btn-secondary text-xs sm:text-sm py-1 sm:py-2 px-3 sm:px-4">
                                                        Continue
                                                    </button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Display Reflection Content */}
                                    {hasReflection && reflections[topic.id] && (
                                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                                            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                                <span>✍️</span> Your Reflection:
                                            </h4>
                                            <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                                                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
                                                    {reflections[topic.id]}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-secondary to-green-200 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 md:mb-12 w-full mx-auto"
                >
                    <div style={{margin:"10px 0"}} className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">💙</div>
                    {completionPercentage === 100 ? (
                        <>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 px-4">Congratulations!</h2>
                            <p className="text-sm sm:text-base md:text-lg mb-2 px-4">
                                You've completed your entire mental well-being journey!
                            </p>
                            <p className="text-xs sm:text-sm md:text-base opacity-90 px-4">
                                Remember, mental health is an ongoing journey. Feel free to revisit
                                any topic whenever you need a refresher or want to deepen your understanding.
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center px-4">Keep Going!</h2>
                            <p style={{ textAlign: "center", margin: "20px auto" }} className="text-sm sm:text-base md:text-lg px-4">
                                You're making amazing progress on your mental well-being journey.
                                Every step forward is a victory worth celebrating! 🌟
                            </p>
                        </>
                    )}
                </motion.div>


                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 px-4"
                >
                    <Link to="/topics">
                        <button className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3">
                            {completionPercentage === 100 ? 'Review Topics' : 'Continue Learning'}
                        </button>
                    </Link>

                    <button
                        onClick={handleReset}
                        className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-3 px-6 sm:px-8 rounded-full shadow-md transition-all duration-300 w-full sm:w-auto"
                    >
                        Reset Progress
                    </button>
                </motion.div>

                {/* Footer Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 sm:mt-10 md:mt-12 text-center text-gray-600 italic px-4 pb-8"
                >
                    <p className="text-sm sm:text-base">
                        "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
                    </p>
                </motion.div>
            </div>
        </div >
    );
};

export default Summary;
