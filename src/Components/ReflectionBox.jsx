import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ReflectionBox = ({ topicId, prompt }) => {
    const [reflection, setReflection] = useState('');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        // Load saved reflection
        const savedReflections = JSON.parse(localStorage.getItem('reflections') || '{}');
        if (savedReflections[topicId]) {
            setReflection(savedReflections[topicId]);
        }
    }, [topicId]);

    const handleSave = () => {
        const reflections = JSON.parse(localStorage.getItem('reflections') || '{}');
        reflections[topicId] = reflection;
        localStorage.setItem('reflections', JSON.stringify(reflections));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8"
        >
            <div className="flex items-center mb-4 sm:mb-5 gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">✍️</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Personal Reflection</h3>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 mb-4 sm:mb-5 rounded">
                <p className="text-gray-700 italic text-sm sm:text-base">{prompt}</p>
            </div>

            <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="Write your thoughts here... This is your safe space to reflect."
                className="w-full h-40 sm:h-48 p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none transition-all duration-300 text-sm sm:text-base"
            />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-3">
                <p className="text-xs sm:text-sm text-gray-500">
                    {reflection.length} characters • Saved locally in your browser
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                    className="btn-secondary text-sm sm:text-base w-full sm:w-auto"
                >
                    {saved ? '✓ Saved!' : 'Save Reflection'}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ReflectionBox;
