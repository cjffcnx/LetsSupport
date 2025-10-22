import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TopicCard = ({ topic, isCompleted }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
        >
            <Link to={`/topic/${topic.id}`} className="block h-full">
                <div className="card relative overflow-hidden cursor-pointer h-full flex flex-col text-center items-center justify-start px-6 py-6">
                    {isCompleted && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                            <span className="text-lg font-bold">✓</span>
                        </div>
                    )}
                    <div className="text-6xl mb-6 mt-4">{topic.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 px-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 grow px-2">{topic.description}</p>
                    <div className="mt-auto text-primary font-semibold text-sm flex items-center justify-center gap-2">
                        Explore <span>→</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default TopicCard;
