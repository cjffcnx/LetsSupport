import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Quiz = ({ questions, topicId, onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerSelect = (answerIndex) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateScore();
        }
    };

    const calculateScore = () => {
        let correctCount = 0;
        questions.forEach((q, index) => {
            if (selectedAnswers[index] === q.answer) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setShowResults(true);

        // Save to localStorage
        const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');
        quizResults[topicId] = {
            score: correctCount,
            total: questions.length,
            percentage: (correctCount / questions.length) * 100
        };
        localStorage.setItem('quizResults', JSON.stringify(quizResults));

        if (onComplete) {
            onComplete(correctCount, questions.length);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setShowResults(false);
        setScore(0);
    };

    if (showResults) {
        const percentage = (score / questions.length) * 100;
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 text-center w-full mx-auto"
            >
                <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-5 md:mb-6">
                    {percentage >= 80 ? '🎉' : percentage >= 60 ? '👏' : '💪'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">Quiz Complete!</h3>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-5 md:mb-6">
                    {score} / {questions.length}
                </p>
                <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed px-4">
                    {percentage >= 80
                        ? "Excellent work! You have a great understanding of this topic."
                        : percentage >= 60
                            ? "Good job! You're on the right track."
                            : "Keep learning! Every step forward counts."}
                </p>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {questions.map((q, index) => (
                        <div key={index} className="text-left bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 border-2 border-gray-100">
                            <p className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">{q.question}</p>
                            <p className={`text-xs sm:text-sm ${selectedAnswers[index] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                                <span className="font-medium">Your answer:</span> {q.options[selectedAnswers[index]]}
                                {selectedAnswers[index] !== q.answer && (
                                    <span className="block text-green-600 mt-2 font-medium">
                                        ✓ Correct answer: {q.options[q.answer]}
                                    </span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
                <button
                    onClick={resetQuiz}
                    className="btn-secondary mt-3 sm:mt-4 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg"
                >
                    Retake Quiz
                </button>
            </motion.div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 w-full mx-auto"
        >
            <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm font-bold text-gray-500 bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <div className="flex gap-1.5 sm:gap-2">
                        {questions.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full transition-all duration-300 ${index === currentQuestion
                                    ? 'bg-primary w-8 sm:w-10'
                                    : index < currentQuestion
                                        ? 'bg-green-400'
                                        : 'bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">{question.question}</h3>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10">
                <AnimatePresence mode="wait">
                    {question.options.map((option, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleAnswerSelect(index)}
                            className={`w-full text-left px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-2xl border-2 transition-all duration-300 ${selectedAnswers[currentQuestion] === index
                                ? 'border-primary bg-linear-to-r from-blue-50 to-purple-50 shadow-lg scale-[1.02]'
                                : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50 hover:shadow-md hover:scale-[1.01]'
                                }`}
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div
                                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${selectedAnswers[currentQuestion] === index
                                        ? 'border-primary bg-primary shadow-md scale-110'
                                        : 'border-gray-300 bg-white'
                                        }`}
                                >
                                    {selectedAnswers[currentQuestion] === index && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 500 }}
                                            className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"
                                        />
                                    )}
                                </div>
                                <span
                                    className={`text-gray-800 text-sm sm:text-base leading-relaxed ${selectedAnswers[currentQuestion] === index ? 'font-bold' : 'font-medium'
                                        }`}
                                >
                                    {option}
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>

            <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className={`btn-primary w-full mt-3 sm:mt-4 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 ${selectedAnswers[currentQuestion] === undefined
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-xl'
                    }`}
            >
                {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results 🎉'}
            </button>
        </motion.div>
    );
};

export default Quiz;
