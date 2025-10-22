import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Quiz from '../Components/Quiz';
import ReflectionBox from '../Components/ReflectionBox';
import { topics, motivationalQuotes } from '../data/topics';

const TopicPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const topic = topics.find(t => t.id === parseInt(id));
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        // Scroll to top when component loads
        window.scrollTo(0, 0);

        // Set random motivational quote
        const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        setRandomQuote(quote);

        // Check if quiz was already completed
        const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');
        if (quizResults[id]) {
            setQuizCompleted(true);
            setShowQuiz(true);
        }
    }, [id]);

    if (!topic) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Topic not found</h2>
                    <button onClick={() => navigate('/topics')} className="btn-primary">
                        Back to Topics
                    </button>
                </div>
            </div>
        );
    }

    const handleQuizComplete = (score, total) => {
        setQuizCompleted(true);

        // Mark topic as completed
        const completed = JSON.parse(localStorage.getItem('completedTopics') || '[]');
        if (!completed.includes(topic.id)) {
            completed.push(topic.id);
            localStorage.setItem('completedTopics', JSON.stringify(completed));
        }
    };

    const handleNextTopic = () => {
        const nextTopic = topics.find(t => t.id === topic.id + 1);
        if (nextTopic) {
            navigate(`/topic/${nextTopic.id}`);
        } else {
            navigate('/summary');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center py-8 sm:py-10 md:py-12 px-6 sm:px-10 lg:px-20 xl:px-24">
            <div className="w-full flex flex-col items-center mx-5 sm:mx-6 md:mx-8 lg:mx-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 sm:mb-10 mt-8 sm:mt-10 md:mt-12"
                >
                    <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">{topic.icon}</div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 sm:mb-4 px-4">{topic.title}</h1>
                    <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg px-4 mt-4 sm:mt-6">{topic.description}</p>
                </motion.div>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 prose prose-sm sm:prose-base lg:prose-lg w-full mx-auto"
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: topic.article }}
                        className="text-gray-700 px-2 sm:px-4 md:px-6 lg:px-8"
                        style={{ lineHeight: '1.8' }}
                    />
                </motion.div>

                {/* Try This Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-secondary to-green-200 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 md:mb-12 w-full"
                >
                    <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6 justify-center gap-2 sm:gap-4">
                        <span className="text-4xl sm:text-5xl">💡</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Try This</h2>
                    </div>
                    <p className="text-gray-700 text-center mx-auto w-full text-base sm:text-lg leading-relaxed px-4">{topic.prompt}</p>
                </motion.div>
                {/* Quiz Section */}
                {!showQuiz ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center mb-12 sm:mb-16 md:mb-20 w-full max-w-xs mx-auto px-4"
                    >
                        <button onClick={() => setShowQuiz(true)} className="btn-primary w-full text-lg sm:text-xl py-3 sm:py-4">
                            Take the Quiz 📝
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 sm:mb-10 md:mb-12 w-full"
                    >
                        <Quiz questions={topic.quiz} topicId={topic.id} onComplete={handleQuizComplete} />
                    </motion.div>
                )}

                {/* Motivational Quote */}
                {quizCompleted && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 md:mb-12 text-pink-600 font-extrabold text-center w-full mx-auto"
                    >
                        <div className="text-4xl sm:text-5xl mb-4 sm:mb-5">✨</div>
                        <p className="text-base sm:text-lg italic w-full mx-auto leading-relaxed px-4">"{randomQuote}"</p>
                    </motion.div>
                )}

                {/* Reflection Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-8 sm:mb-10 md:mb-12 w-full"
                >
                    <ReflectionBox topicId={topic.id} prompt={topic.prompt} />
                </motion.div>

                {/* Navigation Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex justify-between items-center w-full max-w-xs sm:max-w-sm mx-auto gap-4 sm:gap-6 mb-8"
                >
                    <button onClick={() => navigate('/topics')} className="btn-secondary flex-1 sm:w-28 py-3 text-sm sm:text-base">
                        ← Back
                    </button>

                    {topic.id < topics.length ? (
                        <button
                            onClick={handleNextTopic}
                            className="btn-primary flex-1 sm:w-28 py-3 text-sm sm:text-base"
                        >
                            Next →
                        </button>
                    ) : (
                        <button onClick={() => navigate('/summary')} className="btn-primary flex-1 sm:w-28 py-3 text-sm sm:text-base">
                            Summary 🎉
                        </button>
                    )}
                </motion.div>

            </div>
        </div>
    );

};

export default TopicPage;
